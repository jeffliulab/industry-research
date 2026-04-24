# OpenAI Codex CLI

> 最后更新：2026-04-24
>
> OpenAI Codex CLI 是 **2025-04-16 OpenAI 紧急推出的终端 Coding Agent**——开源 + 免费，**直接对标 Claude Code**。OpenAI 在 2025-Q1 看着 Claude Code 社区爆发、Cursor 选用 Claude 作为首选模型后，**不得不亲自下场做终端 Agent**。同时 OpenAI 出价 **$3B 收购 Windsurf 未果**（被 Google $2.4B 撕走创始团队）。

## 一、产品定位

OpenAI Codex CLI 是 **"ChatGPT for your Terminal"**——官方命令行工具，让开发者在终端直接调用 GPT-5 / o3 做编程任务。**与 Claude Code 最大区别**：
1. **开源**（TypeScript，Apache 2.0）
2. **集成 ChatGPT 账户**（Plus / Pro / Team 订阅含）
3. **支持 o3 / GPT-5 / o4-mini** 任选

## 二、核心能力与架构

### 核心能力
- **Terminal 内对话 + 任务执行**
- **工具使用**：Bash / File ops / Git / Web search
- **Approval modes**：auto / explicit / read-only
- **Multi-turn 迭代**
- **与 ChatGPT 账户同步历史**

### 底层
- **主力模型**：GPT-5（旗舰）、o3（推理）、o4-mini（便宜）
- **工具调用**：OpenAI Function Calling 标准
- **开源架构**：TypeScript + Node.js + 全功能 CLI

### 差异化
- **开源** → 安装 / 定制 / 审计自由
- **多模型切换** → 不锁定单一 Anthropic
- **免费使用 ChatGPT 订阅模型** → 成本友好
- **集成 ChatGPT Web**：历史同步

## 三、版本与路线图

| 时间 | 里程碑 |
|---|---|
| 2025-04-16 | **Codex CLI 开源首发**（GitHub）|
| 2025-05 | 支持 Windows（早期只 Mac/Linux）|
| 2025-06 | IDE 扩展（VS Code）|
| 2025-07 | **Codex Cloud**（云端 Agent，类似 Devin）|
| 2025-09 | Codex CLI + MCP 协议支持 |
| 2025-10 | GPT-5 全面集成 |
| 2026-Q1 | Codex Agents（多 Droid 模式）|

## 四、定价与商业化

### 访问方式
- **免费**（GitHub 开源）
- 需要 ChatGPT 订阅（Plus $20、Pro $200）或 API token
- 企业用 ChatGPT Enterprise

### 商业目的
- **防守 Claude Code 快速扩张**
- **增加 ChatGPT Pro $200 订阅粘性**
- **为 GPT-5 API usage 引流**

### 战略定价
- 本身不直接收费
- 靠 ChatGPT 订阅 + API usage 获利

## 五、用户反馈

### 正面
- **"OpenAI 终于回应了 Claude Code"**
- **开源 + 账户集成** 被赞赏
- **GPT-5 推理能力强** 于某些场景

### 批评
- **比 Claude Code 晚 14 个月**，失去先发优势
- **SWE-bench 等基准仍不如 Claude Code**（Claude 4 Opus + Claude Code 72% vs GPT-5 + Codex CLI 66%）
- **Agent 能力不如 Claude Code 自然**（Anthropic 训练了 Claude 专门适配 Agent）
- **IDE 支持落后** Cursor / Windsurf

### HN 讨论
- "Codex CLI 有意义，但 Claude Code 已占领开发者心智"
- "O3 推理强但响应慢"
- "开源是对的决定"

## 六、竞品对比

| 维度 | OpenAI Codex CLI | Claude Code | Cursor | Aider |
|---|---|---|---|---|
| 形态 | CLI + 扩展 | CLI + 扩展 + Web | IDE fork | CLI |
| 底层模型 | GPT-5 / o3 | Claude 4 | Multi | Multi |
| 开源 | ✅ | ❌ | ❌ | ✅ |
| Agent 能力 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| 价格 | ChatGPT Plus $20 | Claude Pro $20 | $20 | 0 + API |
| 长上下文 | 400K（GPT-5）| 1M（Claude）| 多种 | 模型依赖 |
| 2025 采用率 | 中 | 高 | 高 | 中 |

## 七、使用笔记

### 典型工作流
```bash
$ codex
> 修复 src/auth.ts 中的登录 bug，加上测试
[Codex 读文件 → 分析 → Edit → Bash test → 完成]

> /model o3
> 帮我优化这个 SQL query，跑 explain
```

### 最适合
1. **ChatGPT 订阅用户**（免额外付费）
2. **喜欢开源**（可审计 / 定制）
3. **需要 o3 推理**（特别数学 / 算法题）
4. **多模型切换需求**

### 不太适合
- 深度 Anthropic Ecosystem 用户
- 需要 1M 长上下文（GPT-5 仅 400K）
- 需要 Subagent / Hook 灵活性（Claude Code 更强）

## 八、信息源

- OpenAI Codex CLI GitHub（github.com/openai/codex）
- OpenAI 2025-04-16 发布博客
- HN · Codex CLI 多次上榜讨论
- Reddit r/ChatGPT · Codex CLI 反馈
- 本站 · [Claude Code](Claude_Code.md) · [Coding Agent 格局](../02_Coding_Agent/Coding_Agent格局.md) · [ChatGPT](../../01_AI/12_产品研究/ChatGPT.md)
