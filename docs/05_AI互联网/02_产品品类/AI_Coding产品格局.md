# AI Coding 产品格局：Cursor · Windsurf · Claude Code

> 最后更新：2026-04-23
>
> AI Coding 是所有 AI 应用里**最成熟、商业化最快**的一条赛道——2024-2025 年从 Early Adopter 跨入 Early Majority（借用 [Crossing the Chasm 框架](../../99_方法论/框架_跨越鸿沟.md)）。格局正从"几家 IDE"转向"更多层次竞争"——IDE、CLI、Agent、Review 等多种形态。

## 一句话结论

AI Coding 已从**"代码补全"**（Copilot 2021）→ **"IDE 会话式编程"**（Cursor 2023-2024）→ **"Agentic Coding"**（Claude Code / Devin / Codex 2024-2025）三级跃迁。2026 年竞争焦点在**"能否独立完成 8 小时开发任务"**。

## 三条关键要点

1. **Cursor（Anysphere）是 IDE 层最大赢家**：ARR 从 2024 年初 $1M 到 2025 中 $200M+
2. **Claude Code（Anthropic）2025 后期崛起**：CLI 形态的 Agentic Coding，在重度开发者中替代部分 IDE 使用
3. **GitHub Copilot 仍是企业 #1 渠道优势**：Microsoft 分发能力让 Copilot 保持最大装机量

## 产品分层

### Layer 1 · 代码补全（成熟）
- **GitHub Copilot**：最早（2021），最大装机
- **Tabnine / Codeium（现 Windsurf）**：Copilot 竞品
- **中国：通义 / MarsCode / Trae Tab / CodeGeeX**

### Layer 2 · 会话式 IDE（2023-2024）
- **Cursor（Anysphere）**：独立 IDE，基于 VS Code fork
- **Windsurf（原 Codeium）**：Cursor 竞品，2024-2025 扩张
- **Zed · Pear AI**：新势力
- **JetBrains AI Assistant**：传统 IDE 内置

### Layer 3 · Agentic Coding（2024-2025）
- **Claude Code**（Anthropic CLI）：终端里的 Agent
- **Devin**（Cognition Labs）：全自主 coding 工程师
- **OpenAI Codex CLI**：2025 重返市场
- **GitHub Copilot Workspace**：GitHub 的 Agent 尝试
- **Cursor Agent Mode / Background Agents**：Cursor 的 Agent 功能

### Layer 4 · 代码 Review / PR 生成
- **Greptile · Ellipsis**：PR 自动 review
- **Sweep AI**：GitHub issue 自动变 PR

### Layer 5 · Vibe Coding / No-code AI
- **v0**（Vercel）：文本生成前端组件
- **Lovable / Bolt.new / Replit AI**：AI 生成完整应用
- **Vercel / Claude Artifacts**：代码即产品

## 用户分层与产品选择

| 用户类型 | 首选产品 | 次选 |
|---|---|---|
| **专业软件工程师（日常编码）** | Cursor + Claude Code | GitHub Copilot |
| **初级 / 学习者** | GitHub Copilot | Replit AI |
| **前端 / Prototype** | Cursor · v0 | Lovable |
| **大型企业 IT** | GitHub Copilot（Microsoft 集成）· Anthropic Enterprise | Cursor Teams |
| **创始人 / Indie 开发** | Cursor · Claude Code | Replit Agent |
| **代码 review** | Greptile / Ellipsis | GitHub Copilot |

## Cursor（Anysphere）深度

### 为什么爆发
- 2023 年基于 Claude 3 Sonnet 的出色编程能力，构造"整个代码库上下文"的体验
- VS Code fork 降低学习曲线
- 产品打磨：Composer / Chat / Tab / Agent 模式统一
- 2024-2025 开发者口碑爆发

### 商业数据
- ARR 从 2024-01 的 $1M 到 2025 中的 $200M+（公开报道）
- 2025 年估值约 **$9B**（Series C）
- 创始团队 MIT 出身

详见 [Anysphere (Cursor) 公司研究](../11_公司研究/Anysphere.md) · [Cursor 产品](../../01_AI/12_产品研究/Cursor.md)

## Claude Code 深度

### 为什么 2025 后期崛起
- **CLI 形态**（不是 IDE）：绕开 Microsoft / Cursor 在 IDE 的地盘战
- **Agent 能力强**：Claude Sonnet / Opus 在 SWE-bench 上领先
- **与 Anthropic API 深度绑定**：Anthropic 自身最懂 Claude 的 coding 能力
- **2025 年收入已是独立产品线**

### 使用场景
- 不适合：新手（CLI 曲线陡）
- 适合：**有工程经验、习惯终端 + git 工作流的资深开发**

### 与 Cursor 的关系
- **部分重叠，更多补充**：很多重度开发者**同时用** Cursor（修文件）+ Claude Code（跑 Agent 任务）
- Cursor 的 Agent 模式在追赶 Claude Code

详见 [Claude Code 产品](../../01_AI/12_产品研究/Claude_Code.md)

## Devin 的起伏（2024-2025）

- 2024-03 "第一个 AI 工程师"爆红，视频 demo 轰动
- 2024 下半年产品反馈：**demo vs 实际差距大**
- 2025 年定位回归理性："AI 实习生"而非"全自主开发"
- 当前主要企业付费使用

**教训**：Agentic Coding 的 benchmark 和 demo 很容易"cherry-pick"，长时程任务成功率远低于演示。

## 使用 BCG Advantage Matrix 看

（参考 [BCG Advantage Matrix](../../99_方法论/框架_BCG_Advantage.md)）

AI Coding 行业属于 **Specialization 象限**：
- 多种方式赢（IDE、CLI、PR review、no-code）
- 每种方式都能建立较强护城河
- **不会出现一家通吃**

这解释了为什么：Cursor 在 IDE 赢 ≠ GitHub Copilot 输。各占一块。

## 2026 关键变量

1. **Claude Code 增长节奏**：能否冲到 ARR $100M+
2. **GitHub Copilot 企业渗透率**：Microsoft 能否用 Office-style 集成锁定 F500
3. **Devin / Codex 能否交付"8 小时独立开发"**：Agent 长时程任务的基准
4. **OpenAI Codex CLI 是否会打到 Claude Code**：在 coding 赛道直面对决
5. **Cursor 是否会被 Anthropic / OpenAI 收购**：估值 $9B 的独立 IDE 战略上存疑

## 延伸阅读

- Anysphere / Cursor 公开文档
- Anthropic · Claude Code docs
- Latent Space podcast · Cursor/Claude Code 深度访谈
- 本站 · [Anysphere (Cursor) 公司研究](../11_公司研究/Anysphere.md) · [Anthropic](../../01_AI/11_公司研究/Anthropic.md) · [AI Agent 行业现状](../../01_AI/04_智能体与应用/Agent行业现状.md) · [Crossing the Chasm 框架](../../99_方法论/框架_跨越鸿沟.md)
