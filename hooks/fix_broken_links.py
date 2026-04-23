"""
修复扁平化之后的破链接：
1. index.md 里 "01_行业研究/XXX.md" → "<新维度>/XXX.md"
2. 同板块内 sibling .md（原本在 01_行业研究/ 下互相用裸文件名引用）→ 加上 "../<新维度>/" 前缀
"""

import os
import re

PROJECT_DIR = "/Users/macbookpro/Local_Root/industry-research"
DOCS_DIR = os.path.join(PROJECT_DIR, "docs")

# 每个文件名 → 它现在所在的相对于板块的维度路径
# 从 flatten_ia.py 的 FILE_MOVES 反推
FILE_TO_DIM = {
    # 01_AI
    "AI行业格局2026.md": "01_市场与资本",
    "AI商业化模式.md": "01_市场与资本",
    "AI融资估值全景.md": "01_市场与资本",
    "企业AI支出结构.md": "01_市场与资本",
    "大模型路线对比.md": "02_技术前沿",
    "推理模型专题.md": "02_技术前沿",
    "多模态模型进展.md": "02_技术前沿",
    "SLM专题.md": "02_技术前沿",
    "大模型评测体系.md": "02_技术前沿",
    "AI训练基础设施.md": "03_基础设施",
    "AI芯片初创.md": "03_基础设施",
    "GPU云初创.md": "03_基础设施",
    "AI训练数据提供商.md": "03_基础设施",
    "数据中心与电力.md": "03_基础设施",
    "Agent行业现状.md": "04_智能体与应用",
    "企业AI落地模式.md": "04_智能体与应用",
    "垂直AI全景.md": "04_智能体与应用",
    "开源vs闭源.md": "05_开源与生态",
    "中美AI竞争.md": "06_地缘与国家竞争",
    "芯片出口管制.md": "06_地缘与国家竞争",
    "中国AI梯队结构.md": "06_地缘与国家竞争",
    "欧洲AI路线.md": "06_地缘与国家竞争",
    "全球AI监管对照.md": "07_政策与治理",
    "AI安全与对齐.md": "08_安全与负责任",
    "AI失败案例.md": "08_安全与负责任",
    "AI人才流动地图.md": "09_人才与实验室",
    "顶级实验室概览.md": "09_人才与实验室",
    "2026年度预测.md": "10_年度展望",
    # 02_机器人
    "人形格局2026.md": "01_市场与格局",
    "三类机器人市场.md": "01_市场与格局",
    "中美产业对比.md": "01_市场与格局",
    "核心零部件.md": "02_产业链",
    "量产瓶颈.md": "02_产业链",
    "RFM趋势.md": "03_大脑与数据",
    "数据飞轮.md": "03_大脑与数据",
    # 03_具身智能
    "技术路线.md": "01_技术路线",
    "评测基准.md": "01_技术路线",
    "Scaling_Law讨论.md": "01_技术路线",
    "数据采集.md": "02_数据与仿真",
    "Sim2Real与仿真平台.md": "02_数据与仿真",
    # 04_AI金融
    "金融落地全景.md": "01_全景与场景",
    "投研应用现状.md": "01_全景与场景",
    "银保证差异化.md": "01_全景与场景",
    "AI量化.md": "02_专题",
    "Agent在金融.md": "02_专题",
    "金融监管合规.md": "03_治理与监管",
    # 05_AI互联网
    "生成式搜索革命.md": "01_入口重构",
    "AI浏览器崛起.md": "01_入口重构",
    "AI_Coding产品格局.md": "02_产品品类",
    "AI原生社交.md": "02_产品品类",
    "AI产品商业模式.md": "03_商业与地理",
    "中国AI应用层大战.md": "03_商业与地理",
}


def fix_file(file_path):
    """修复单个 .md 文件的破链接。"""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()
    original = content
    rel_from_docs = os.path.relpath(file_path, DOCS_DIR)
    parts = rel_from_docs.split("/")
    # 检测该文件所在位置，决定如何修复相对链接
    is_index = parts[-1] == "index.md" and len(parts) == 2  # 例如 01_AI/index.md
    article_dim = parts[-2] if len(parts) >= 2 else ""  # 例如 01_市场与资本

    # Pattern 1: 旧 "01_行业研究/XXX.md" 前缀（通常出现在 index.md 里）
    def fix_old_行业研究(m):
        fname = m.group(1)
        if fname in FILE_TO_DIM:
            new_dim = FILE_TO_DIM[fname]
            return f"{new_dim}/{fname}"
        return m.group(0)

    content = re.sub(r"01_行业研究/([^)]+\.md)", fix_old_行业研究, content)

    # Pattern 2: 裸 "XXX.md" 引用（sibling 引用，但现在 sibling 在别的 dim 目录）
    # 只在 article 里面（维度子目录下的文章）做修复；不动 index.md
    if not is_index and re.match(r"\d+_", article_dim):
        # 收集文内所有 Markdown 链接 [text](url)
        def fix_bare_sibling(m):
            full = m.group(0)
            url = m.group(2)
            # 只处理以 XXX.md 结尾、不含 / 的纯文件名链接（且不以 http 开头）
            if "/" in url or url.startswith("http") or url.startswith("#"):
                return full
            if not url.endswith(".md"):
                return full
            # 检查该文件名是否被我们挪动了
            fname = url
            if fname in FILE_TO_DIM:
                target_dim = FILE_TO_DIM[fname]
                if target_dim != article_dim:
                    # 换成 ../target_dim/fname
                    new_url = f"../{target_dim}/{fname}"
                    return f"[{m.group(1)}]({new_url})"
            return full

        content = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", fix_bare_sibling, content)

    if content != original:
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(content)
        return True
    return False


def main():
    changed = 0
    for root, _, files in os.walk(DOCS_DIR):
        for fname in files:
            if not fname.endswith(".md"):
                continue
            p = os.path.join(root, fname)
            if fix_file(p):
                changed += 1
                print(f"  ✓ {os.path.relpath(p, PROJECT_DIR)}")
    print(f"\n修复完成：{changed} 个 .md 文件更新")


if __name__ == "__main__":
    main()
