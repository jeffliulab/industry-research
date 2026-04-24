# Multi-Agent 系统：LangGraph · CrewAI · AutoGen

> 最后更新：2026-04-24
>
> 单 Agent 有能力天花板——一个模型在一个上下文中处理任务总会失焦。**Multi-Agent** 的想法：让多个 Agent 分工合作（分析师 / 工程师 / 评审员），像一个小团队。2024-2025 LangGraph、CrewAI、AutoGen 是三大主流框架。但**"Multi-Agent 是否真的有用"** 至今争议大——Anthropic 2024-12 博客《Building Effective Agents》明确质疑。

## 一句话结论

Multi-Agent 2024-2026 是 **"热门概念、有限场景"** —— 在**并行研究 / 角色扮演 / 真实分工**任务中有优势，但**多数企业场景单 Agent + 长上下文更稳定 + 更便宜**。**Anthropic 的"保持简单" > "多 Agent 堆叠"** 观点正成为行业共识。

## 三条关键要点

1. **LangGraph（LangChain 出品）是最主流 Multi-Agent 框架**：状态图 + checkpoint，生产使用量最大
2. **CrewAI 聚焦"角色扮演"协作**：分析师 / 研究员 / 报告员 的自然语言协调
3. **Anthropic 2024-12 公开反对"过度 Multi-Agent"**：多数场景不需要，保持简单是美德

## Multi-Agent 的三种主要模式

### 模式 1 · 并行工作流（Workflow）
```
[用户任务] 
    ↓
[规划 Agent] → 拆分
    ↓
├── [Sub-Agent 1] → 网络搜索
├── [Sub-Agent 2] → 数据库查询
└── [Sub-Agent 3] → 代码执行
    ↓
[聚合 Agent] → 汇总输出
```
- **用例**：Deep Research（ChatGPT / Gemini / Perplexity）
- **Claude Code 的 Subagent 系统**（general-purpose、Explore、Plan 等）

### 模式 2 · 角色协作（Role-Playing）
```
[Project Manager Agent]
    ↓ 分配任务
[Engineer Agent] ←→ [QA Agent]
                      ↓ 测试结果
[Engineer Agent] 修复
```
- **用例**：CrewAI 典型样本
- **ChatDev / MetaGPT** 研究项目
- 多为 Demo，生产级应用少

### 模式 3 · Agent 对话（Conversational）
- 多个 Agent 平等对话，用 LLM 协调
- **AutoGen**（Microsoft）风格
- 研究型，生产偏少

## 主流框架对比

| 框架 | 背后 | 核心抽象 | 生产成熟度 |
|---|---|---|---|
| **LangGraph** | LangChain | **状态图**（Nodes + Edges）| ⭐⭐⭐⭐⭐ |
| **CrewAI** | 独立开源 | **Agent + Task + Crew** | ⭐⭐⭐⭐ |
| **AutoGen** | Microsoft | **Conversable Agent** | ⭐⭐⭐ |
| **LangChain Agent** | LangChain | 单 Agent + Tools | ⭐⭐⭐⭐（但非 Multi） |
| **OpenAI Swarm** | OpenAI | Routines + Handoffs | ⭐⭐ |
| **Anthropic Agent SDK** | Anthropic | 简约设计，不推 Multi | ⭐⭐⭐⭐ |

### LangGraph 细节
- **StateGraph**：显式状态管理
- **Checkpointing**：可恢复 long-running
- **Human-in-the-loop** 原生支持
- **已被 Linkedin、Klarna、Replit 生产使用**

### CrewAI 细节
- 自然语言风格创建 crew
- Process 有 Sequential / Hierarchical 两种
- 适合非工程师快速原型

### AutoGen 细节
- **GroupChat** 抽象
- 研究友好，工程麻烦
- Microsoft 内部项目多采用

## Anthropic 的反方观点（2024-12）

Anthropic 在《Building Effective Agents》博客中：

> **"Most of what people call 'agents' are simpler than they appear—and most don't need multi-agent architectures."**

核心观点：
1. **单 Agent + 长上下文 + 合理工具** 足以处理 80% 场景
2. **Multi-Agent 的协调开销** 常常大于收益
3. **调试难度** 增加数量级
4. **token 成本** 翻倍
5. 只在 **真正并行受益**（如 Deep Research）时使用

## 用 [Aggregation Theory 框架](../../99_方法论/框架_聚合理论.md) 看 Multi-Agent 生态

Multi-Agent 框架的 Aggregator 潜力：
- **LangGraph = 事实上的 Agent 框架 Aggregator**（开发者 mindshare）
- 但**不是终端用户 aggregator**：用户不知道背后是 LangGraph 还是 CrewAI
- 商业化路径：**LangSmith 监控 + LangGraph Cloud 托管**（B2B SaaS）

## 用 [Wardley Maps 框架](../../99_方法论/框架_Wardley_Maps.md) 看演化

| 组件 | 阶段 |
|---|---|
| Multi-Agent 框架 | **Custom-Built → Product**（标准化中）|
| 单 Agent 设计 Pattern（ReAct / ToT）| Product |
| Agent 协调协议 | **Genesis**（无统一标准）|
| Agent-to-Agent 通信 | Genesis（A2A 协议 2025 Google 提出）|

**战略洞察**：A2A 协议（Agent-to-Agent）2025 Google 提出，可能成为 Multi-Agent 时代的"HTTP"——但目前仍是 Genesis 阶段，采用率低。

## 生产级 Multi-Agent 案例

### Perplexity Deep Research
- 规划 Agent → 多个研究 Sub-Agent 并行 → 聚合 Agent
- 成功原因：**真正并行受益**

### Cognition Devin
- Devin 内部有 planning + execution + verification 三个 "Agent loop"
- 但**Devin 本身作为单一产品**，对外不是 Multi-Agent

### ChatGPT Operator / Agent
- 内部有浏览器 Agent + 规划 Agent + 验证 Agent
- 用户看到是单一对话

### Claude Code Subagents
- 主 Agent 调度 general-purpose / Explore / Plan 等子 Agent
- **显式 Agent 分工但对用户透明**

## Multi-Agent 失败案例

- **AutoGPT / BabyAGI**（2023）：过度 Multi-Agent 导致 token 消耗巨大但产出低
- **MetaGPT / ChatDev**：研究 demo，生产几乎无人用
- **AutoGen 早期**：企业采用后抱怨调试难

## 2026 关键变量

1. **A2A 协议扩散**：Google 2025-04 提出，2026 能否扩散到开源生态
2. **LangGraph 商业化**：LangChain Inc 2025 估值 ~$1B，ARR 能否破 $100M
3. **Multi-Agent vs 单 Agent + 长上下文** 最终选择：GPT-5 / Gemini 2.5 的 1M+ 上下文可能让 Multi-Agent 式微
4. **"Agent 马甲公司"** 大量涌现：用 LangGraph 包一层卖给企业
5. **标准化组件市场**：CRUD Agent / Browser Agent / Memory Agent 作为"积木"买卖

## 我的判断

> **我的看法**：
>
> 1. **Anthropic 的反方观点会在 2026 成为共识**：Multi-Agent 不是万能药
> 2. **LangGraph 会是 Agent 时代的 "Rails"**：主流开发者框架，不一定炫酷但扎实
> 3. **Multi-Agent 商业化集中在 Deep Research / 并行分析 场景**，不是通用方向
> 4. **A2A 协议仍需 2-3 年才能成熟**：企业标准扩散速度慢
> 5. **"Multi-Agent as a Feature" 而非"Multi-Agent as a Product"**：最终是隐藏在单一产品背后的实现技巧
>
> **我可能错在哪里**：
> - CrewAI 或 AutoGen 突然走红，改变框架格局
> - Multi-Agent 在 Robotics / 金融交易等特定领域爆发
> - "Agent 市场"（Agent marketplace）出现，Multi-Agent 成为交易单位

## 延伸阅读

- Anthropic · "Building Effective Agents"（2024-12 博客，reference #1）
- LangChain · LangGraph 文档（langchain-ai.github.io/langgraph）
- CrewAI 官方（crewai.com）
- Microsoft · AutoGen GitHub
- Google · A2A 协议提案 2025-04
- 本站 · [Agent 定义与分类](Agent定义与分类.md) · [Agent 技术栈](Agent技术栈.md) · [Coding Agent 格局](../02_Coding_Agent/Coding_Agent格局.md) · [Aggregation Theory 框架](../../99_方法论/框架_聚合理论.md)
