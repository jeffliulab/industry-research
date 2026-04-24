# 开发笔记

> 维护者备忘录。**不按版本追踪**——知识库是持续演化的文档，不需要 release cycle。
>
> 本文件记录设置关键决策和踩坑，以便未来维护时快速 onboard。

---

## 站点信息架构决策

**7 + 1 板块**（8 顶级 tab + 方法论 tab）：
- 01 人工智能 · 02 机器人 · 03 具身智能 · 04 AI 医疗 · 05 自动驾驶 · 06 脑机接口 · 07 AI 金融 · 08 AI 互联网 · 99 方法论

> 注：数字前缀顺序可能与上方文档描述略有差异（按文件夹 `0X_` 前缀为准）

**每板块内部**：按"**内容维度**"扁平化（01-10 前缀），不用"行业研究 / 公司研究 / 产品研究"三分法：
- `0X_<维度>/` 各子主题
- `11_公司研究/`（实体索引）
- `12_产品研究/`（实体索引）

详细原因 见 `行业研究标准方法.md`。

---

## 视觉与技术选型

- **站点生成**：MkDocs Material
- **主色**：Tiffany Blue (`#0ABAB5`)，深色模式 `#4FD1CC`
- **图标**：Material icon shortcodes（需要 `pymdownx.emoji` 扩展）
- **黑夜模式**：`prefers-color-scheme` media query + 手动 toggle
- **部署**：GitHub Actions → Pages（Source 必须设为 "GitHub Actions"）
- **无右上角 repo 链接**（个人自用，不设 `repo_url`）

---

## 关键自动化

- **`hooks/generate_dropdown.py`**：从 `mkdocs.yml` nav 生成顶栏悬停下拉菜单
- **`hooks/init_stubs.py`**：新 nav 条目自动生成 stub 文件（按路径判断模板：公司 / 产品 / 行业）
- **`hooks/flatten_ia.py`**：IA 重构用的迁移脚本（已执行完毕）
- **`hooks/fix_broken_links.py`**：跨板块链接修复（历史脚本）

---

## Git push 常见障碍（macOS）

**必须用 `ssh://git@github.com/jeffliulab/ai-industry-research.git` 完整协议 URL**。

原因：
- 全局 gitconfig 的 `url.https://github.com/.insteadOf = git@github.com:` 会把短 SSH URL 重写为 HTTPS
- HTTPS 走 `gh auth` 凭据，gh token 缺 `workflow` scope → 推带 workflow 文件的 commit 被拒
- 完整 `ssh://` 协议格式不匹配 insteadOf 规则，绕过这个陷阱

---

## 与姐妹站 ai-notes 的分工

- **ai-notes**：技术原理（Transformer / RLHF / 脑机接口信号处理等学习笔记）
- **本站**：行业 / 公司 / 产品调研

跨话题相互链接，不重复写作。
