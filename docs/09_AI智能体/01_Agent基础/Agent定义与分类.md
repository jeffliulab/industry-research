# Agent 定义与分类

> 最后更新：2026-04-24
>
> "AI Agent" 是 2023-2026 最被滥用的词——几乎每家 AI 公司都自称做 Agent。本文从**能力边界 + 自主程度 + 交互形式**三个维度，给 Agent 一个可操作的分类框架，厘清 Copilot / Agent / Operator / AutoGPT / Devin 的真正区别。

## 一句话结论

Agent = **具备"感知 → 规划 → 行动 → 反思"闭环能力的 AI 系统**。按**自主程度**分三级：**L1 Copilot（被动建议）→ L2 半自主 Agent（多步骤委派）→ L3 全自主 Agent（长时程任务 + 自主决策）**。2026 绝大多数生产环境 AI 仍在 L1-L2 之间，L3 仍是"Demo 能跑、生产会翻车"的阶段。

## 三条关键要点

1. **Copilot ≠ Agent**：Copilot 是行内补全（代码建议、邮件草稿），Agent 是任务委派（"修这个 bug"）—— 两者之间的鸿沟是**主动性 + 多步决策**
2. **Agent 的鼻祖是 2023-03 AutoGPT**：在 ChatGPT 之上加循环 + 工具 + 目标分解，**震动极大但产出极差** —— 2023 Agent 的"Demo vs 生产"差距教训犹新
3. **2025 Agent 真正可用**：Claude Computer Use (2024-10) + Devin (2024-03) + Claude Code (2025-02) + ChatGPT Agent (2025-07) 串起 "Agent 从玩具到工具"的转折

## Agent 的三个能力组件

### 组件 1 · 感知（Perception）
- 接收用户输入 / 系统状态 / 环境反馈
- 从 **LLM Text → 多模态（Vision / Audio）→ Tool output** 逐步扩展

### 组件 2 · 规划（Planning）
- **ReAct**（Reason + Act）：最早期 + 最通用框架
- **Chain of Thought / Tree of Thoughts**：引入推理链
- **Hierarchical Planning**：拆分 subtask
- **Reflection / Critic**：自我批改

### 组件 3 · 行动（Action）
- **Tool Use**：调用 API / 函数
- **Code Execution**：写代码 + 运行
- **Computer Use**：操作 GUI（Claude CU / Operator）
- **Browser Control**：浏览器 Agent
- **Multi-Agent Coordination**：与其他 Agent 协作

### 闭环：反思（Reflection）
- 验证行动结果
- 修正规划
- 更新 Memory
- 关键区别 Agent vs Copilot：**Agent 自己闭环**，Copilot 由人闭环

## Agent 三级分类

### L1 · Copilot（行内建议）
- **定义**：AI 在**上下文中**给出建议，用户审核采纳
- **代表**：GitHub Copilot 补全、ChatGPT 对话、Notion AI、Grammarly
- **自主程度**：0-10%（每步都需用户拍板）
- **JTBD**：辅助人类做事更快

### L2 · 半自主 Agent（多步委派）
- **定义**：AI **多步骤完成一个明确任务**，中间可以反思 / 重试，最后返回结果让用户验证
- **代表**：Claude Code 自动修 bug、Cursor Composer、Perplexity Deep Research、ChatGPT Operator
- **自主程度**：30-70%
- **JTBD**：替代人类完成 1-2 小时的中等任务
- **成功率**：通常 **50-80%**（视任务类型）

### L3 · 全自主 Agent（长时程）
- **定义**：AI **长时间工作**（小时 → 天），自主分解目标、调度工具、做决策
- **代表**（2026 初）：Devin（Cognition）、Manus（中国 Agent 爆款）、实验性 AutoGPT / BabyAGI
- **自主程度**：> 70%
- **JTBD**：替代人类完成一整个"工单 / ticket"的工作
- **成功率**：**10-40%**（且越复杂越低）
- **最大挑战**：误差累积、决策偏差、目标漂移

## 按交互形态分类

| 形态 | 代表 | 入口 |
|---|---|---|
| **Terminal / CLI** | Claude Code、OpenAI Codex CLI、Aider | 命令行 |
| **IDE 集成** | Cursor、Windsurf、GitHub Copilot | VS Code / JetBrains |
| **Web 对话** | ChatGPT、Claude.ai、Gemini | 浏览器 |
| **浏览器 Agent** | Operator、Browser Use、Comet | 浏览器内自控 |
| **Computer Use** | Claude Computer Use | 操作系统级 |
| **Multi-Agent 框架** | LangGraph、CrewAI、AutoGen | SDK |

## 历史演化（2022-2026）

```
2022-11  ChatGPT 发布 —— Agent 概念萌芽
2023-03  AutoGPT / BabyAGI 爆火 —— "Agent 革命" 宣言期
2023-07  Function Calling（OpenAI）—— Tool Use 标准化
2023-10  Assistants API（OpenAI）—— Agent 基础设施
2024-03  Devin 发布（Cognition）—— "第一个 AI 软件工程师"
2024-10  Claude Computer Use（Anthropic）—— 操作电脑
2024-11  MCP 协议开源（Anthropic）—— Agent 标准协议
2025-01  ChatGPT Operator beta —— 浏览器 Agent 入口
2025-02  Claude Code 发布 —— Terminal Agent 大爆炸
2025-03  Manus 爆火（中国）—— C 端 Agent 现象
2025-04  OpenAI Codex CLI 开源
2025-07  ChatGPT Agent（正式版）
2025-09  Claude Agent SDK —— Agent 开发框架
```

## 用 [颠覆创新 + JTBD 框架](../../99_方法论/框架_颠覆创新.md) 看 Agent 演进

- 2022 ChatGPT 的 JTBD：**"帮我想"**（回答问题）
- 2024 Claude Code / Devin 的 JTBD：**"帮我做"**（完成任务）
- 2026+ 的 JTBD 猜想：**"替我决策"**（长时程决断）

这种 JTBD 升级伴随**监督频率下降** + **错误代价升高**——从"每句话审"到"每小时审"到"每天审"。

## 用 [跨越鸿沟 Crossing the Chasm 框架](../../99_方法论/框架_跨越鸿沟.md) 看 2026 Agent 市场

| 阶段 | 代表产品 | 用户 | 2026 判断 |
|---|---|---|---|
| Innovators | AutoGPT、BabyAGI | 极客 | 已过 |
| **Early Adopters** | **Claude Code、Cursor、Devin** | 专业开发者 | **正在** |
| Early Majority | 未出现 | 主流企业 | 未到 |
| Late Majority | —— | 保守企业 | 2027+ |

**主流企业采用前的鸿沟挑战**：
- 完整解决方案（not DIY）
- 明确 ROI 证明
- 合规 + 安全边界
- **案例库 + 专业服务** 成熟

## 2026 关键变量

1. **L3 Agent 成功率能否从 30% 升到 70%**：这是"Demo 到生产"的分水岭
2. **MCP 协议生态扩散**：是否成为事实标准
3. **浏览器 Agent 解决网络身份验证问题**：CAPTCHA、2FA、隐私
4. **Agent 价格模式**：按成功付费 vs seat 订阅
5. **法律责任划分**：Agent 出错的民事责任

## 我的判断

> **我的看法**：
>
> 1. **"Agent" 术语会继续被滥用**——每个 Copilot 产品都会自称 Agent
> 2. **L2 半自主 Agent 是 2026-2027 商业化主战场**：不求全自主，把"1-2 小时明确任务"做扎实
> 3. **L3 全自主 Agent 仍是研究前沿**：Devin / Manus 展示方向，但生产事故风险高
> 4. **Agent 分类标准会统一**：可能出现类似自驾 L1-L5 的行业认证
> 5. **最大机会不是"通用 Agent"，而是"行业专用 Agent"**：Harvey（法律）、Sierra（客服）、Devin（软件）
>
> **我可能错在哪里**：
> - L3 Agent 2026 年底即达到可商用（Devin / Manus 突破）
> - "通用 Agent"成为新赢家（ChatGPT Agent 超越垂直）
> - Agent 分类始终无行业共识，概念混乱持续

## 延伸阅读

- Anthropic · "Building Effective Agents"（2024-12 博客）
- OpenAI · "A Practical Guide to Building Agents"（2025）
- 本站 · [Agent 技术栈](Agent技术栈.md) · [Multi-Agent 系统](Multi_Agent系统.md) · [Agent 行业现状](../04_企业Agent/Agent行业现状.md) · [颠覆创新框架](../../99_方法论/框架_颠覆创新.md)
