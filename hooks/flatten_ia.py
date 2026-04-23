"""
一次性迁移：把「行业研究/公司研究/产品研究」三分法改为「维度扁平 + 实体索引」。

对每个板块：
- 原 01_行业研究/ 下的 .md 文件按子主题分派到新的 01_<维度>/..10_<维度>/ 子目录
- 原 02_公司研究/ → 11_公司研究/
- 原 03_产品研究/ → 12_产品研究/

同步：
- mkdocs.yml 路径替换
- 所有 .md 文件里的交叉链接更新（相对路径）

用法：
    python hooks/flatten_ia.py           # dry-run 预览
    python hooks/flatten_ia.py --apply   # 实际执行
"""

import os
import shutil
import subprocess
import sys

PROJECT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DOCS_DIR = os.path.join(PROJECT_DIR, "docs")
MKDOCS_YML = os.path.join(PROJECT_DIR, "mkdocs.yml")


# 文件级别的迁移：从 <板块>/01_行业研究/<文件> → <板块>/<新维度>/<文件>
FILE_MOVES = [
    # ========== 01_AI (人工智能) — 10 维度 ==========
    # 01_市场与资本
    ("01_AI/01_行业研究/AI行业格局2026.md", "01_AI/01_市场与资本/AI行业格局2026.md"),
    ("01_AI/01_行业研究/AI商业化模式.md", "01_AI/01_市场与资本/AI商业化模式.md"),
    ("01_AI/01_行业研究/AI融资估值全景.md", "01_AI/01_市场与资本/AI融资估值全景.md"),
    ("01_AI/01_行业研究/企业AI支出结构.md", "01_AI/01_市场与资本/企业AI支出结构.md"),
    # 02_技术前沿
    ("01_AI/01_行业研究/大模型路线对比.md", "01_AI/02_技术前沿/大模型路线对比.md"),
    ("01_AI/01_行业研究/推理模型专题.md", "01_AI/02_技术前沿/推理模型专题.md"),
    ("01_AI/01_行业研究/多模态模型进展.md", "01_AI/02_技术前沿/多模态模型进展.md"),
    ("01_AI/01_行业研究/SLM专题.md", "01_AI/02_技术前沿/SLM专题.md"),
    ("01_AI/01_行业研究/大模型评测体系.md", "01_AI/02_技术前沿/大模型评测体系.md"),
    # 03_基础设施
    ("01_AI/01_行业研究/AI训练基础设施.md", "01_AI/03_基础设施/AI训练基础设施.md"),
    ("01_AI/01_行业研究/AI芯片初创.md", "01_AI/03_基础设施/AI芯片初创.md"),
    ("01_AI/01_行业研究/GPU云初创.md", "01_AI/03_基础设施/GPU云初创.md"),
    ("01_AI/01_行业研究/AI训练数据提供商.md", "01_AI/03_基础设施/AI训练数据提供商.md"),
    ("01_AI/01_行业研究/数据中心与电力.md", "01_AI/03_基础设施/数据中心与电力.md"),
    # 04_智能体与应用
    ("01_AI/01_行业研究/Agent行业现状.md", "01_AI/04_智能体与应用/Agent行业现状.md"),
    ("01_AI/01_行业研究/企业AI落地模式.md", "01_AI/04_智能体与应用/企业AI落地模式.md"),
    ("01_AI/01_行业研究/垂直AI全景.md", "01_AI/04_智能体与应用/垂直AI全景.md"),
    # 05_开源与生态
    ("01_AI/01_行业研究/开源vs闭源.md", "01_AI/05_开源与生态/开源vs闭源.md"),
    # 06_地缘与国家竞争
    ("01_AI/01_行业研究/中美AI竞争.md", "01_AI/06_地缘与国家竞争/中美AI竞争.md"),
    ("01_AI/01_行业研究/芯片出口管制.md", "01_AI/06_地缘与国家竞争/芯片出口管制.md"),
    ("01_AI/01_行业研究/中国AI梯队结构.md", "01_AI/06_地缘与国家竞争/中国AI梯队结构.md"),
    ("01_AI/01_行业研究/欧洲AI路线.md", "01_AI/06_地缘与国家竞争/欧洲AI路线.md"),
    # 07_政策与治理
    ("01_AI/01_行业研究/全球AI监管对照.md", "01_AI/07_政策与治理/全球AI监管对照.md"),
    # 08_安全与负责任
    ("01_AI/01_行业研究/AI安全与对齐.md", "01_AI/08_安全与负责任/AI安全与对齐.md"),
    ("01_AI/01_行业研究/AI失败案例.md", "01_AI/08_安全与负责任/AI失败案例.md"),
    # 09_人才与实验室
    ("01_AI/01_行业研究/AI人才流动地图.md", "01_AI/09_人才与实验室/AI人才流动地图.md"),
    ("01_AI/01_行业研究/顶级实验室概览.md", "01_AI/09_人才与实验室/顶级实验室概览.md"),
    # 10_年度展望
    ("01_AI/01_行业研究/2026年度预测.md", "01_AI/10_年度展望/2026年度预测.md"),

    # ========== 02_机器人 — 3 维度 ==========
    # 01_市场与格局
    ("02_机器人/01_行业研究/人形格局2026.md", "02_机器人/01_市场与格局/人形格局2026.md"),
    ("02_机器人/01_行业研究/三类机器人市场.md", "02_机器人/01_市场与格局/三类机器人市场.md"),
    ("02_机器人/01_行业研究/中美产业对比.md", "02_机器人/01_市场与格局/中美产业对比.md"),
    # 02_产业链
    ("02_机器人/01_行业研究/核心零部件.md", "02_机器人/02_产业链/核心零部件.md"),
    ("02_机器人/01_行业研究/量产瓶颈.md", "02_机器人/02_产业链/量产瓶颈.md"),
    # 03_大脑与数据
    ("02_机器人/01_行业研究/RFM趋势.md", "02_机器人/03_大脑与数据/RFM趋势.md"),
    ("02_机器人/01_行业研究/数据飞轮.md", "02_机器人/03_大脑与数据/数据飞轮.md"),

    # ========== 03_具身智能 — 2 维度 ==========
    # 01_技术路线
    ("03_具身智能/01_行业研究/技术路线.md", "03_具身智能/01_技术路线/技术路线.md"),
    ("03_具身智能/01_行业研究/评测基准.md", "03_具身智能/01_技术路线/评测基准.md"),
    ("03_具身智能/01_行业研究/Scaling_Law讨论.md", "03_具身智能/01_技术路线/Scaling_Law讨论.md"),
    # 02_数据与仿真
    ("03_具身智能/01_行业研究/数据采集.md", "03_具身智能/02_数据与仿真/数据采集.md"),
    ("03_具身智能/01_行业研究/Sim2Real与仿真平台.md", "03_具身智能/02_数据与仿真/Sim2Real与仿真平台.md"),

    # ========== 04_AI金融 — 3 维度 ==========
    # 01_全景与场景
    ("04_AI金融/01_行业研究/金融落地全景.md", "04_AI金融/01_全景与场景/金融落地全景.md"),
    ("04_AI金融/01_行业研究/投研应用现状.md", "04_AI金融/01_全景与场景/投研应用现状.md"),
    ("04_AI金融/01_行业研究/银保证差异化.md", "04_AI金融/01_全景与场景/银保证差异化.md"),
    # 02_专题
    ("04_AI金融/01_行业研究/AI量化.md", "04_AI金融/02_专题/AI量化.md"),
    ("04_AI金融/01_行业研究/Agent在金融.md", "04_AI金融/02_专题/Agent在金融.md"),
    # 03_治理与监管
    ("04_AI金融/01_行业研究/金融监管合规.md", "04_AI金融/03_治理与监管/金融监管合规.md"),

    # ========== 05_AI互联网 — 3 维度 ==========
    # 01_入口重构
    ("05_AI互联网/01_行业研究/生成式搜索革命.md", "05_AI互联网/01_入口重构/生成式搜索革命.md"),
    ("05_AI互联网/01_行业研究/AI浏览器崛起.md", "05_AI互联网/01_入口重构/AI浏览器崛起.md"),
    # 02_产品品类
    ("05_AI互联网/01_行业研究/AI_Coding产品格局.md", "05_AI互联网/02_产品品类/AI_Coding产品格局.md"),
    ("05_AI互联网/01_行业研究/AI原生社交.md", "05_AI互联网/02_产品品类/AI原生社交.md"),
    # 03_商业与地理
    ("05_AI互联网/01_行业研究/AI产品商业模式.md", "05_AI互联网/03_商业与地理/AI产品商业模式.md"),
    ("05_AI互联网/01_行业研究/中国AI应用层大战.md", "05_AI互联网/03_商业与地理/中国AI应用层大战.md"),
]


# 目录级别的重命名：02_公司研究/ → 11_公司研究/，03_产品研究/ → 12_产品研究/
DIR_RENAMES = [
    ("01_AI/02_公司研究", "01_AI/11_公司研究"),
    ("01_AI/03_产品研究", "01_AI/12_产品研究"),
    ("02_机器人/02_公司研究", "02_机器人/11_公司研究"),
    ("02_机器人/03_产品研究", "02_机器人/12_产品研究"),
    ("03_具身智能/02_公司研究", "03_具身智能/11_公司研究"),
    ("03_具身智能/03_产品研究", "03_具身智能/12_产品研究"),
    ("04_AI金融/02_公司研究", "04_AI金融/11_公司研究"),
    ("04_AI金融/03_产品研究", "04_AI金融/12_产品研究"),
    ("05_AI互联网/02_公司研究", "05_AI互联网/11_公司研究"),
    ("05_AI互联网/03_产品研究", "05_AI互联网/12_产品研究"),
]


# 字符串替换：应用到 mkdocs.yml 和所有 .md 的内部交叉链接
# 按从长到短的顺序，避免部分匹配问题
STRING_REPLACEMENTS = [
    # 目录级别
    ("/02_公司研究/", "/11_公司研究/"),
    ("/03_产品研究/", "/12_产品研究/"),
    # ========== AI 维度路径替换（注意：01_行业研究/ → 对应的维度目录）==========
    # 市场与资本
    ("01_AI/01_行业研究/AI行业格局2026.md", "01_AI/01_市场与资本/AI行业格局2026.md"),
    ("01_AI/01_行业研究/AI商业化模式.md", "01_AI/01_市场与资本/AI商业化模式.md"),
    ("01_AI/01_行业研究/AI融资估值全景.md", "01_AI/01_市场与资本/AI融资估值全景.md"),
    ("01_AI/01_行业研究/企业AI支出结构.md", "01_AI/01_市场与资本/企业AI支出结构.md"),
    # 技术前沿
    ("01_AI/01_行业研究/大模型路线对比.md", "01_AI/02_技术前沿/大模型路线对比.md"),
    ("01_AI/01_行业研究/推理模型专题.md", "01_AI/02_技术前沿/推理模型专题.md"),
    ("01_AI/01_行业研究/多模态模型进展.md", "01_AI/02_技术前沿/多模态模型进展.md"),
    ("01_AI/01_行业研究/SLM专题.md", "01_AI/02_技术前沿/SLM专题.md"),
    ("01_AI/01_行业研究/大模型评测体系.md", "01_AI/02_技术前沿/大模型评测体系.md"),
    # 基础设施
    ("01_AI/01_行业研究/AI训练基础设施.md", "01_AI/03_基础设施/AI训练基础设施.md"),
    ("01_AI/01_行业研究/AI芯片初创.md", "01_AI/03_基础设施/AI芯片初创.md"),
    ("01_AI/01_行业研究/GPU云初创.md", "01_AI/03_基础设施/GPU云初创.md"),
    ("01_AI/01_行业研究/AI训练数据提供商.md", "01_AI/03_基础设施/AI训练数据提供商.md"),
    ("01_AI/01_行业研究/数据中心与电力.md", "01_AI/03_基础设施/数据中心与电力.md"),
    # 智能体与应用
    ("01_AI/01_行业研究/Agent行业现状.md", "01_AI/04_智能体与应用/Agent行业现状.md"),
    ("01_AI/01_行业研究/企业AI落地模式.md", "01_AI/04_智能体与应用/企业AI落地模式.md"),
    ("01_AI/01_行业研究/垂直AI全景.md", "01_AI/04_智能体与应用/垂直AI全景.md"),
    # 开源与生态
    ("01_AI/01_行业研究/开源vs闭源.md", "01_AI/05_开源与生态/开源vs闭源.md"),
    # 地缘与国家竞争
    ("01_AI/01_行业研究/中美AI竞争.md", "01_AI/06_地缘与国家竞争/中美AI竞争.md"),
    ("01_AI/01_行业研究/芯片出口管制.md", "01_AI/06_地缘与国家竞争/芯片出口管制.md"),
    ("01_AI/01_行业研究/中国AI梯队结构.md", "01_AI/06_地缘与国家竞争/中国AI梯队结构.md"),
    ("01_AI/01_行业研究/欧洲AI路线.md", "01_AI/06_地缘与国家竞争/欧洲AI路线.md"),
    # 政策与治理
    ("01_AI/01_行业研究/全球AI监管对照.md", "01_AI/07_政策与治理/全球AI监管对照.md"),
    # 安全与负责任
    ("01_AI/01_行业研究/AI安全与对齐.md", "01_AI/08_安全与负责任/AI安全与对齐.md"),
    ("01_AI/01_行业研究/AI失败案例.md", "01_AI/08_安全与负责任/AI失败案例.md"),
    # 人才与实验室
    ("01_AI/01_行业研究/AI人才流动地图.md", "01_AI/09_人才与实验室/AI人才流动地图.md"),
    ("01_AI/01_行业研究/顶级实验室概览.md", "01_AI/09_人才与实验室/顶级实验室概览.md"),
    # 年度展望
    ("01_AI/01_行业研究/2026年度预测.md", "01_AI/10_年度展望/2026年度预测.md"),

    # ========== 机器人 维度路径替换 ==========
    ("02_机器人/01_行业研究/人形格局2026.md", "02_机器人/01_市场与格局/人形格局2026.md"),
    ("02_机器人/01_行业研究/三类机器人市场.md", "02_机器人/01_市场与格局/三类机器人市场.md"),
    ("02_机器人/01_行业研究/中美产业对比.md", "02_机器人/01_市场与格局/中美产业对比.md"),
    ("02_机器人/01_行业研究/核心零部件.md", "02_机器人/02_产业链/核心零部件.md"),
    ("02_机器人/01_行业研究/量产瓶颈.md", "02_机器人/02_产业链/量产瓶颈.md"),
    ("02_机器人/01_行业研究/RFM趋势.md", "02_机器人/03_大脑与数据/RFM趋势.md"),
    ("02_机器人/01_行业研究/数据飞轮.md", "02_机器人/03_大脑与数据/数据飞轮.md"),

    # ========== 具身智能 维度路径替换 ==========
    ("03_具身智能/01_行业研究/技术路线.md", "03_具身智能/01_技术路线/技术路线.md"),
    ("03_具身智能/01_行业研究/评测基准.md", "03_具身智能/01_技术路线/评测基准.md"),
    ("03_具身智能/01_行业研究/Scaling_Law讨论.md", "03_具身智能/01_技术路线/Scaling_Law讨论.md"),
    ("03_具身智能/01_行业研究/数据采集.md", "03_具身智能/02_数据与仿真/数据采集.md"),
    ("03_具身智能/01_行业研究/Sim2Real与仿真平台.md", "03_具身智能/02_数据与仿真/Sim2Real与仿真平台.md"),

    # ========== AI金融 维度路径替换 ==========
    ("04_AI金融/01_行业研究/金融落地全景.md", "04_AI金融/01_全景与场景/金融落地全景.md"),
    ("04_AI金融/01_行业研究/投研应用现状.md", "04_AI金融/01_全景与场景/投研应用现状.md"),
    ("04_AI金融/01_行业研究/银保证差异化.md", "04_AI金融/01_全景与场景/银保证差异化.md"),
    ("04_AI金融/01_行业研究/AI量化.md", "04_AI金融/02_专题/AI量化.md"),
    ("04_AI金融/01_行业研究/Agent在金融.md", "04_AI金融/02_专题/Agent在金融.md"),
    ("04_AI金融/01_行业研究/金融监管合规.md", "04_AI金融/03_治理与监管/金融监管合规.md"),

    # ========== AI互联网 维度路径替换 ==========
    ("05_AI互联网/01_行业研究/生成式搜索革命.md", "05_AI互联网/01_入口重构/生成式搜索革命.md"),
    ("05_AI互联网/01_行业研究/AI浏览器崛起.md", "05_AI互联网/01_入口重构/AI浏览器崛起.md"),
    ("05_AI互联网/01_行业研究/AI_Coding产品格局.md", "05_AI互联网/02_产品品类/AI_Coding产品格局.md"),
    ("05_AI互联网/01_行业研究/AI原生社交.md", "05_AI互联网/02_产品品类/AI原生社交.md"),
    ("05_AI互联网/01_行业研究/AI产品商业模式.md", "05_AI互联网/03_商业与地理/AI产品商业模式.md"),
    ("05_AI互联网/01_行业研究/中国AI应用层大战.md", "05_AI互联网/03_商业与地理/中国AI应用层大战.md"),

    # 相对路径（../01_行业研究/XXX.md → ../<新维度>/XXX.md）这里简化处理：
    # 大多数交叉链接形如 ../01_行业研究/XXX.md 出现在 公司/产品 文章里
    # 上面的全路径替换会命中 01_AI/01_行业研究/ 等绝对前缀；但 ../01_行业研究/ 这种相对前缀需要单独处理
    ("../01_行业研究/AI行业格局2026.md", "../01_市场与资本/AI行业格局2026.md"),
    ("../01_行业研究/AI商业化模式.md", "../01_市场与资本/AI商业化模式.md"),
    ("../01_行业研究/Agent行业现状.md", "../04_智能体与应用/Agent行业现状.md"),
    ("../01_行业研究/推理模型专题.md", "../02_技术前沿/推理模型专题.md"),
    ("../01_行业研究/大模型路线对比.md", "../02_技术前沿/大模型路线对比.md"),
    ("../01_行业研究/多模态模型进展.md", "../02_技术前沿/多模态模型进展.md"),
    ("../01_行业研究/AI训练基础设施.md", "../03_基础设施/AI训练基础设施.md"),
    ("../01_行业研究/开源vs闭源.md", "../05_开源与生态/开源vs闭源.md"),
    ("../01_行业研究/AI安全与对齐.md", "../08_安全与负责任/AI安全与对齐.md"),
    ("../01_行业研究/AI芯片初创.md", "../03_基础设施/AI芯片初创.md"),
    # 跨板块的 ../../X/01_行业研究/ 也要处理
    ("../../01_AI/01_行业研究/", "../../01_AI/01_市场与资本/"),  # 粗略兜底
    ("../../02_机器人/01_行业研究/", "../../02_机器人/01_市场与格局/"),
    ("../../03_具身智能/01_行业研究/", "../../03_具身智能/01_技术路线/"),
    ("../../04_AI金融/01_行业研究/", "../../04_AI金融/01_全景与场景/"),
    ("../../05_AI互联网/01_行业研究/", "../../05_AI互联网/01_入口重构/"),
]


def run_git_mv(old_abs, new_abs, dry_run):
    if dry_run:
        print(f"  [DRY] git mv {os.path.relpath(old_abs, PROJECT_DIR)} → {os.path.relpath(new_abs, PROJECT_DIR)}")
        return
    os.makedirs(os.path.dirname(new_abs), exist_ok=True)
    try:
        subprocess.run(
            ["git", "mv", old_abs, new_abs],
            cwd=PROJECT_DIR, check=True,
            stdout=subprocess.PIPE, stderr=subprocess.PIPE,
        )
        print(f"  ✓ {os.path.relpath(old_abs, PROJECT_DIR)} → {os.path.relpath(new_abs, PROJECT_DIR)}")
    except subprocess.CalledProcessError as e:
        shutil.move(old_abs, new_abs)
        print(f"  ⚠ shutil.move (git mv failed): {e.stderr.decode()[:100]}")


def rename_dir(old_abs, new_abs, dry_run):
    if dry_run:
        print(f"  [DRY] dir rename {os.path.relpath(old_abs, PROJECT_DIR)} → {os.path.relpath(new_abs, PROJECT_DIR)}")
        return
    # git mv handles directories, but if there are edge cases, fall back
    try:
        subprocess.run(
            ["git", "mv", old_abs, new_abs],
            cwd=PROJECT_DIR, check=True,
            stdout=subprocess.PIPE, stderr=subprocess.PIPE,
        )
        print(f"  ✓ dir {os.path.relpath(old_abs, PROJECT_DIR)} → {os.path.relpath(new_abs, PROJECT_DIR)}")
    except subprocess.CalledProcessError:
        shutil.move(old_abs, new_abs)
        print(f"  ⚠ shutil.move fallback")


def update_text_file(path, replacements, dry_run):
    with open(path, "r", encoding="utf-8") as f:
        content = f.read()
    original = content
    for old, new in replacements:
        content = content.replace(old, new)
    n_changes = 0
    for old, new in replacements:
        n_changes += original.count(old)
    if content != original and not dry_run:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
    return n_changes if content != original else 0


def main():
    dry_run = "--apply" not in sys.argv
    mode = "DRY-RUN (预览)" if dry_run else "APPLY (实际执行)"
    print(f"=== 扁平化迁移：{mode} ===")

    # Step 1: 移动 行业研究 下的文件到新维度目录
    print(f"\n[1/4] 移动 {len(FILE_MOVES)} 个行业研究文件到新维度目录")
    ok = 0
    for old_rel, new_rel in FILE_MOVES:
        old_abs = os.path.join(DOCS_DIR, old_rel)
        new_abs = os.path.join(DOCS_DIR, new_rel)
        if not os.path.exists(old_abs):
            print(f"  · 源不存在（已移动？）：{old_rel}")
            continue
        if os.path.exists(new_abs):
            print(f"  ! 目标已存在：{new_rel}")
            continue
        run_git_mv(old_abs, new_abs, dry_run)
        ok += 1
    print(f"  小计：{ok}/{len(FILE_MOVES)}")

    # Step 2: 重命名 公司研究/产品研究 目录
    print(f"\n[2/4] 重命名 {len(DIR_RENAMES)} 个实体索引目录")
    for old_rel, new_rel in DIR_RENAMES:
        old_abs = os.path.join(DOCS_DIR, old_rel)
        new_abs = os.path.join(DOCS_DIR, new_rel)
        if not os.path.exists(old_abs):
            print(f"  · 源不存在：{old_rel}")
            continue
        rename_dir(old_abs, new_abs, dry_run)

    # Step 3: 更新 mkdocs.yml
    print(f"\n[3/4] 更新 mkdocs.yml")
    n = update_text_file(MKDOCS_YML, STRING_REPLACEMENTS, dry_run)
    print(f"  mkdocs.yml: {n} 处字符串替换")

    # Step 4: 更新所有 .md 文件里的交叉链接
    print(f"\n[4/4] 更新所有 .md 文件里的交叉链接")
    total_files, total_repl = 0, 0
    for root, _, files in os.walk(DOCS_DIR):
        for fname in files:
            if not fname.endswith(".md"):
                continue
            fpath = os.path.join(root, fname)
            n = update_text_file(fpath, STRING_REPLACEMENTS, dry_run)
            if n > 0:
                total_files += 1
                total_repl += n
    print(f"  {total_files} 个 .md 文件被更新，共 {total_repl} 处替换")

    print(f"\n=== {mode} 完成 ===")
    if dry_run:
        print("如果预览 OK，运行：python hooks/flatten_ia.py --apply")


if __name__ == "__main__":
    main()
