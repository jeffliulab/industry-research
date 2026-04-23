"""
一次性：把 mkdocs.yml 中每个板块下的「- 行业研究:」外壳拆掉，
让 10 个维度 sub-section 直接作为板块的子节点。

变换规则：
- 删除形如 "      - 行业研究:" 的行（6 空格缩进 + "- 行业研究:"）
- 把该行后面、到下一个 6 空格 "- <label>:" 之前的所有行，统一去掉 4 空格缩进（整体左移）

不碰 「- 公司研究:」 和 「- 产品研究:」 外壳——它们是实体索引，保留。
"""

import re
import sys

MKDOCS_YML = "/Users/macbookpro/Local_Root/industry-research/mkdocs.yml"


def unwrap():
    with open(MKDOCS_YML, "r", encoding="utf-8") as f:
        lines = f.readlines()

    new_lines = []
    dedenting = False
    for line in lines:
        stripped = line.rstrip("\n")

        # 精确匹配 6 空格缩进的 "- 行业研究:"
        if stripped == "      - 行业研究:":
            # 跳过这一行，进入 dedent 模式
            dedenting = True
            continue

        if dedenting:
            # 结束条件：遇到下一个 6 空格 "- XXX:" 开头的新 section，或者到顶层条目
            # 6 空格缩进 + "- " 开头（但不是 8 空格及更深）
            m = re.match(r"^      - [^ ]", line)  # "      - " 后跟非空格 = 平级 sub-section
            if m and not line.startswith("        "):
                # 新的平级 section，退出 dedent 模式
                dedenting = False
                new_lines.append(line)
                continue
            # 顶层 section（只有 2 空格）也退出
            m_top = re.match(r"^  - [^ ]", line)
            if m_top:
                dedenting = False
                new_lines.append(line)
                continue
            # 空行：保留，但不消耗 dedent 状态
            if line.strip() == "":
                new_lines.append(line)
                continue
            # 在 dedent 模式内的行，去掉 4 空格（如果至少有 4 空格）
            if line.startswith("    "):
                new_lines.append(line[4:])
            else:
                new_lines.append(line)
        else:
            new_lines.append(line)

    with open(MKDOCS_YML, "w", encoding="utf-8") as f:
        f.writelines(new_lines)

    print(f"完成。mkdocs.yml 已去掉 5 个「行业研究」外壳。")


if __name__ == "__main__":
    unwrap()
