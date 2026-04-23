"""
从 mkdocs.yml 的 nav 自动生成 tab_dropdown.js。
读取 hooks/tab_dropdown.tpl.js 模板，将导航数据注入占位符，
输出到 docs/site_extra_styles/javascripts/tab_dropdown.js。

用法: 修改 mkdocs.yml 的 nav 后运行
    python hooks/generate_dropdown.py

维护方式:
- 修改导航结构 → 编辑 mkdocs.yml 的 nav，然后运行此脚本
- 修改下拉菜单 UI → 编辑 hooks/tab_dropdown.tpl.js，然后运行此脚本
- tab_dropdown.js 是生成产物，不要手动编辑
"""

import json
import os
from urllib.parse import quote

DATA_PLACEHOLDER = "/* __NAV_DATA__ */"


def md_path_to_url(md_path):
    if md_path.endswith("index.md"):
        url = md_path[: -len("index.md")]
    elif md_path.endswith(".md"):
        url = md_path[: -len(".md")] + "/"
    else:
        url = md_path
    parts = url.split("/")
    return "/".join(quote(p, safe="") for p in parts)


def parse_nav_item(item):
    if isinstance(item, str):
        return None, item
    if isinstance(item, dict):
        for k, v in item.items():
            return k, v
    return None, None


def process_nav(nav):
    tab_data = {}

    for top_item in nav:
        top_title, top_value = parse_nav_item(top_item)
        if top_title is None or not isinstance(top_value, list):
            continue

        sections = []
        for second_item in top_value:
            sec_title, sec_value = parse_nav_item(second_item)

            if sec_title is None and isinstance(sec_value, str):
                continue

            if sec_title and isinstance(sec_value, str):
                sections.append({
                    "name": sec_title,
                    "path": md_path_to_url(sec_value),
                    "pages": [],
                })
                continue

            if sec_title and isinstance(sec_value, list):
                section_path = ""
                pages = []
                for third_item in sec_value:
                    third_title, third_value = parse_nav_item(third_item)
                    if isinstance(third_value, str):
                        if third_title is None:
                            section_path = md_path_to_url(third_value)
                        else:
                            pages.append([third_title, md_path_to_url(third_value)])
                sections.append({
                    "name": sec_title,
                    "path": section_path,
                    "pages": pages,
                })

        if sections:
            tab_data[top_title] = sections

    return tab_data


def get_nav_translations(cfg):
    """从 mkdocs.yml 的 i18n 插件配置中提取 nav_translations 映射。"""
    translations = {}
    plugins = cfg.get("plugins", [])
    for plugin in plugins:
        if isinstance(plugin, dict) and "i18n" in plugin:
            i18n_cfg = plugin["i18n"]
            for lang in i18n_cfg.get("languages", []):
                if lang.get("locale") == "en":
                    translations = lang.get("nav_translations", {})
                    break
    return translations


def translate_sections(sections, translations):
    """将 sections 中的中文名称翻译为英文。"""
    translated = []
    for sec in sections:
        t_sec = {
            "name": translations.get(sec["name"], sec["name"]),
            "path": sec["path"],
            "pages": [
                [translations.get(p[0], p[0]), p[1]] for p in sec["pages"]
            ],
        }
        translated.append(t_sec)
    return translated


def generate():
    import yaml

    project_dir = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    mkdocs_path = os.path.join(project_dir, "mkdocs.yml")
    tpl_path = os.path.join(project_dir, "hooks", "tab_dropdown.tpl.js")
    out_path = os.path.join(
        project_dir, "docs", "site_extra_styles", "javascripts", "tab_dropdown.js"
    )

    # mkdocs.yml 中包含 !!python/name:... 标签（例如 pymdownx.emoji 的
    # emoji_index / emoji_generator），SafeLoader 默认不认识这些标签，
    # 这里注册一个"忽略"构造器，把未知标签统一返回 None，避免解析失败。
    class _IgnoreUnknownTagsLoader(yaml.SafeLoader):
        pass

    def _ignore_unknown(loader, tag_suffix, node):
        return None

    _IgnoreUnknownTagsLoader.add_multi_constructor(
        "tag:yaml.org,2002:python/name:", _ignore_unknown
    )
    _IgnoreUnknownTagsLoader.add_multi_constructor(
        "tag:yaml.org,2002:python/object/apply:", _ignore_unknown
    )

    with open(mkdocs_path, "r", encoding="utf-8") as f:
        cfg = yaml.load(f, Loader=_IgnoreUnknownTagsLoader)

    tab_data = process_nav(cfg.get("nav", []))
    translations = get_nav_translations(cfg)

    # 添加英文翻译 key，使英文版标签页也能匹配到下拉菜单数据
    en_entries = {}
    for zh_key, sections in tab_data.items():
        en_key = translations.get(zh_key)
        if en_key and en_key != zh_key:
            en_entries[en_key] = translate_sections(sections, translations)
    tab_data.update(en_entries)

    data_js = "var tabData = " + json.dumps(tab_data, ensure_ascii=False) + ";"

    with open(tpl_path, "r", encoding="utf-8") as f:
        template = f.read()

    output = template.replace(DATA_PLACEHOLDER, data_js)

    with open(out_path, "w", encoding="utf-8") as f:
        f.write(output)

    zh_count = len(tab_data) - len(en_entries)
    print(f"tab_dropdown.js generated ({zh_count} zh + {len(en_entries)} en tabs)")


if __name__ == "__main__":
    generate()
