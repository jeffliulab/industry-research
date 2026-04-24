# Agent 技术栈：Tool Use · MCP · Memory · Planning · RL

> 最后更新：2026-04-24
>
> 一个工业级 Agent 不是"LLM + for 循环"——它需要完整的技术栈：**Tool Use 标准（Function Calling / MCP）+ Memory 层 + Planning 框架 + 反思循环 + 安全边界**。本文梳理 2026 Agent 技术栈的 6 大组件，以及每一层的事实标准。

## 一句话结论

**2026 Agent 技术栈正在从"百花齐放"向"标准收敛"**：**MCP 协议**（Anthropic 2024-11 开源，Google / OpenAI / Microsoft 已采用）成为 Tool Use 事实标准，**ReAct / Plan-Execute / Reflect** 成为规划 Pattern 共识，**长上下文 + Semantic Memory + Scratchpad** 三层 Memory 成为主流——但 **Planning 与 RL fine-tune 仍是前沿未解的研究课题**。

## 三条关键要点

1. **MCP（Model Context Protocol）是 Agent 时代的 HTTP**：Tool Use 标准化，Claude / GPT / Gemini 均已实现
2. **Memory 是 Agent 真正壁垒**：基础模型差别不大，但"怎么记忆 + 怎么检索"分高下
3. **Planning 仍未有通用解**：ReAct 基本款、Tree of Thoughts / LATS / Language Agent Tree Search 是研究前沿

## 技术栈六层

```
┌─────────────────────────────────┐
│  6. 评测 / 安全边界              │
│     τ-bench / OSWorld / 权限控制  │
├─────────────────────────────────┤
│  5. Planning / Reflection        │
│     ReAct / ToT / LATS           │
├─────────────────────────────────┤
│  4. Memory                      │
│     短期 scratchpad / 长期 vector │
├─────────────────────────────────┤
│  3. Tool Use / MCP              │
│     工具调用协议                  │
├─────────────────────────────────┤
│  2. 基础模型                     │
│     Claude / GPT / Gemini        │
├─────────────────────────────────┤
│  1. 训练：RLHF / RLVR / 合成数据  │
└─────────────────────────────────┘
```

## 层 1 · 模型训练（基础）

### Agent-specific 训练
- **RLHF**（Reinforcement Learning from Human Feedback）：RLHF 让模型学会遵循指令
- **RLVR**（RL from Verifiable Rewards）：DeepSeek R1 / o1 风格，用可验证奖励训练推理
- **RL for Tool Use**：专门训 Agent 工具调用能力
- **合成数据**：用现有 Agent 生成训练数据（bootstrap）

### 代表研究
- OpenAI RFT（Reinforcement Fine-Tuning）2024-12
- Anthropic RL on Claude Code 工作流
- DeepSeek R1-Zero 纯 RL 推理

## 层 2 · 基础模型（Agent-ready）

### 前沿 Agent-capable 模型
| 模型 | Agent 特性 |
|---|---|
| Claude 4 Opus / Sonnet | Extended Thinking + Tool Use + Computer Use |
| GPT-5 | o3 推理 + Function Calling + Operator 集成 |
| Gemini 2.5 Pro | 2M 上下文 + Tool Use + Agent Mode |
| DeepSeek R1 | 推理链透明 + 开源权重 |

### Agent 对模型的要求
1. **Tool Use 成功率** > 90%
2. **长上下文质量**（不是 benchmark，是实际任务）
3. **Instruction Following** 稳定
4. **拒绝不安全指令**

## 层 3 · Tool Use / MCP

### Function Calling（2023-07 OpenAI 首推）
- JSON Schema 描述函数
- 模型输出 JSON 调用参数
- 执行函数 → 结果回传
- 已成为**所有主流 LLM 标配**

### MCP（Model Context Protocol，2024-11 Anthropic）
- **开源 Tool Use 协议**
- **服务器 (tool provider) + 客户端 (AI)** 架构
- 标准化工具发现 / 调用 / 权限 / 日志
- 2025 被 Google、OpenAI、Microsoft 等采用
- **类比 HTTP**：不关心 AI 模型，专注 Tool 层接口

### 当前 MCP 生态（2026-Q1）
- 500+ 公开 MCP servers
- GitHub、Slack、Linear、Sentry、Postgres 等主流工具官方 MCP
- Anthropic 开发工具"Model Context Catalog"
- 企业内部大量自建

### 为什么 MCP 会赢
- **Counter-positioning**：Anthropic 开源给所有大厂，OpenAI / Google 难以用闭源标准竞争
- **复用成本**：一个 MCP server 可被所有模型 / Agent 用
- **事实采用**：Claude Code / Cursor / Windsurf 原生支持

## 层 4 · Memory

### 短期 Memory（Scratchpad）
- Agent 当前 task 的上下文
- 长度受限于模型 context window（200K / 1M / 2M）
- 对话历史 + 工具结果

### 长期 Memory（Persistent）
- **Vector Database**（Pinecone / Weaviate / Chroma）
- **Semantic Memory**：语义化存储 user preferences
- **Episodic Memory**：过往任务的 trajectory

### 工程挑战
- **Memory 检索质量**：差的检索 → Agent 表现差
- **Memory 冲突**：新旧信息不一致
- **Privacy**：个人数据隔离 + 合规
- **Cost**：大规模 Memory 的 vector DB 成本

### 代表实现
- **ChatGPT Memory**（2024）
- **Claude Projects + Memory**（2025）
- **Cursor Memory / @Codebase**
- **Claude Code CLAUDE.md**：工程化的"项目 Memory"

## 层 5 · Planning / Reflection

### ReAct（Reasoning + Acting）
```
Thought: 我需要知道 Apple 2024 年营收
Action: web_search("Apple 2024 revenue")
Observation: $391B
Thought: 现在我可以回答了
Action: final_answer("$391B")
```
- 简单、通用、基础款

### Plan-then-Execute
- 先规划全局步骤，再逐步执行
- 适合已知路径的任务

### Tree of Thoughts（ToT）
- 并行探索多个思路
- 投票选最优
- 适合决策类任务

### Reflection / Self-Critique
- Agent 检查自己输出
- 发现错误 → 重试
- Claude Extended Thinking 内置

### LATS（Language Agent Tree Search）
- 2024 研究热点
- MCTS（蒙特卡洛树搜索）风格
- 实验效果好但开销大

## 层 6 · 评测与安全

### 评测
- **τ-bench**（Tau-bench）：Agent 在模拟用户交互
- **OSWorld**：操作系统任务
- **GAIA**：通用 Agent 能力
- **SWE-bench**：软件工程任务
- 详见 [Agent 评测体系](../05_评测与安全/Agent评测体系.md)

### 安全边界
- **Prompt Injection 防御**：Agent 最大安全威胁
- **权限 least-privilege**
- **审计日志**
- 详见 [Agent 安全边界](../05_评测与安全/Agent安全边界.md)

## 框架 / 库对比

| 库 | 定位 | 用例 |
|---|---|---|
| **LangChain / LangGraph** | 最流行，多功能 | 快速原型 |
| **LlamaIndex** | 侧重 RAG + Agent | 知识库 Agent |
| **CrewAI** | Multi-Agent 协作 | 团队型 Agent |
| **AutoGen**（Microsoft）| Multi-Agent 会话 | 研究 |
| **Vercel AI SDK** | 前端 Agent 集成 | Web Agent UI |
| **Claude Agent SDK** | Anthropic 官方 | 生产级 Claude Agent |
| **OpenAI Assistants API** | OpenAI 官方 | Tool Use + Memory |

## 用 [Wardley Maps 框架](../../99_方法论/框架_Wardley_Maps.md) 看各层演化

| 组件 | 2024 阶段 | 2026 阶段 |
|---|---|---|
| Tool Use / MCP | Genesis | **Product**（标准化） |
| Memory | Custom-Built | Product（Vector DB 成熟） |
| Planning | Genesis | Custom-Built（仍在试错） |
| 基础模型 | Product | Commodity（开源追平） |
| 评测 | Custom-Built | Product（benchmark 成型） |

**战略洞察**：**MCP + 模型** 商品化后，竞争焦点上移到 **Memory + Planning**——这是 2026-2028 Agent 公司真正护城河。

## 用 [Scaling Laws 框架](../../99_方法论/框架_Scaling_Laws.md) 看

Agent 能力的 scaling：
- **模型规模**：→ 反馈收益递减（GPT-5 对比 GPT-4 Agent 能力提升 < 1 代）
- **推理 token 预算**（Extended Thinking）：→ 仍在起步（o3 每次思考 tokens × 100）
- **工具调用次数**：→ 未被充分利用
- **Memory 量**：→ 长期价值但 query cost 高

**猜想**：2026-2027 真正有用的 scaling 不是模型更大，而是 **"thinking tokens × tool calls × memory reads" 的组合**。

## 2026 关键变量

1. **MCP 成为 W3C / ISO 级标准**：预计 2026 年底
2. **Memory 商业化**：Pinecone、MongoDB Atlas Vector 谁占上游
3. **Planning 研究突破**：LATS 或类似技术生产化
4. **Agent fine-tune 服务商兴起**：Lamini / OctoML 提供 "Agent-as-a-Service"
5. **安全事件**：第一起"Agent 误操作导致数百万美元损失"

## 我的判断

> **我的看法**：
>
> 1. **MCP 是 Anthropic 2020 年代最重要的非模型产品**——堪比 Google 当年 Kubernetes
> 2. **Memory 层会诞生几家独立大公司**——Vector DB 之外，"Agent Memory SaaS" 是新赛道
> 3. **Planning 短期靠模型长上下文 + 推理模型，中期靠 RL fine-tune**
> 4. **Tool Use 质量**是 2026 Agent 真实分水岭：不是 demo 能力，是 99% 企业场景的稳定性
> 5. **Anthropic 的 Agent 技术栈整合**（Claude 模型 + MCP + Claude Code + Agent SDK）是目前最完整的
>
> **我可能错在哪里**：
> - OpenAI 推出自家闭源标准取代 MCP
> - Memory 被基础模型"超长上下文"吞没，独立 Memory 公司失败
> - Planning 出现突破性论文（类似 AlphaGo 那种）重新定义栈

## 延伸阅读

- Anthropic · MCP 协议文档（modelcontextprotocol.io）
- OpenAI · Function Calling + Assistants API docs
- LangChain / LangGraph 博客
- 本站 · [Agent 定义与分类](Agent定义与分类.md) · [Multi-Agent 系统](Multi_Agent系统.md) · [Agent 评测体系](../05_评测与安全/Agent评测体系.md) · [Wardley Maps 框架](../../99_方法论/框架_Wardley_Maps.md)
