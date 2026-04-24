# Claude Agent SDK

> 最后更新：2026-04-24
>
> Claude Agent SDK 是 **Anthropic 2025-09 发布的"让开发者构建 Claude 风格 Agent"的官方框架**——核心是 **把 Claude Code 的架构开源给所有企业**：Subagent 系统、Hook、Skill、Memory、MCP 集成等。**是 Anthropic 从"卖模型 API" 转向 "卖 Agent 基础设施"的标志性产品**。

## 一、产品定位

Claude Agent SDK 是 **"企业构建自有 Agent 的工具包"**——类似 LangGraph / AutoGen 但**Anthropic 官方出品 + Claude 深度优化 + 生产级**。定位：**公司不用自己从零搭 Agent 框架，直接用 SDK 构建企业专属 Agent**。

## 二、核心能力与架构

### 核心抽象
- **Agent**：主执行单元
- **Subagent**：可调度的专用 Agent（general-purpose / Explore / Plan）
- **Tool**：标准化工具（Bash / Read / Edit / Grep 等）
- **Hook**：生命周期事件（PreToolUse / PostToolUse / UserMessage）
- **Skill**：可复用命令库
- **Memory**：项目级持久化

### 底层
- **Claude 4 Opus / Sonnet** 模型
- **MCP 协议** 集成工具生态
- **TypeScript / Python SDK**
- **开源基础架构**（部分）

### 代码示例（概念）
```python
from anthropic_agent_sdk import Agent, Subagent, Hook

@Agent.tool
def deploy_to_prod(version: str) -> str:
    # ...
    return "deployed"

@Agent.hook("PreToolUse:deploy_to_prod")
def require_approval(ctx):
    ctx.require_human_confirmation()

agent = Agent(
    model="claude-opus-4",
    tools=[deploy_to_prod],
    subagents={
        "explorer": Subagent(...),
        "validator": Subagent(...)
    }
)

agent.run("deploy version 2.1 to prod")
```

## 三、版本与路线图

| 时间 | 里程碑 |
|---|---|
| 2024-11 | MCP 协议开源（SDK 前身）|
| 2025-02 | Claude Code 内部架构（未开源）|
| **2025-09-17** | **Claude Agent SDK 正式发布** |
| 2025-10 | Python SDK beta |
| 2025-11 | 生态 Skill / Subagent 市场 |
| 2025-Q4 | 与 LangChain / LangGraph 互操作 |
| 2026-Q1 | 企业级部署工具 |

## 四、定价与商业化

### 访问
- **SDK 本身免费**（开源 / 开放文档）
- 使用 **Claude API 按 token 计费**
- Enterprise 合同加持：SOC2 / 私有部署 / SLA

### 商业逻辑
- **战略目的**：让企业锁定 Claude，不要转 GPT / Gemini
- **间接收入**：Agent 调用驱动 Claude API usage 增长
- **企业合同**：$500k-5M ACV 级别

### 对 Anthropic 战略意义
- 从"卖 API token"转"Agent 基础设施平台"
- **对标 OpenAI Assistants API + LangChain 混合体**
- **护城河升级**：从模型层到框架层

## 五、用户反馈

### 正面
- **"Claude Code 就是这样写的"**：用户认可"官方血统"
- **Subagent / Hook 抽象好用**
- **生产级 vs LangChain 原型级**
- **文档 + 示例齐全**

### 批评
- **绑定 Claude**：不能无缝换 GPT / Gemini
- **学习曲线**：新概念（Subagent / Hook / Skill）多
- **竞争 LangGraph**：开发者已有熟悉框架
- **2025-09 发布晚**：LangChain 已形成心智

## 六、竞品对比

| 维度 | Claude Agent SDK | LangGraph | OpenAI Assistants | AutoGen |
|---|---|---|---|---|
| 官方 | Anthropic | LangChain | OpenAI | Microsoft |
| 模型绑定 | Claude | Multi | GPT | Multi |
| 开源 | 部分 | ✅ | ❌（SDK 开源）| ✅ |
| 生产成熟度 | ⭐⭐⭐⭐（依托 Claude Code 架构）| ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Subagent | ⭐⭐⭐⭐⭐（Claude Code 原生）| ⭐⭐⭐⭐（StateGraph）| ⭐⭐（Routines）| ⭐⭐⭐⭐⭐（Agent 对话）|
| MCP 集成 | 原生 | 可接入 | 部分 | 部分 |

## 七、使用笔记

### 最适合
1. **企业构建 Claude 专属 Agent**
2. **复制 Claude Code 的架构到自家产品**
3. **需要 Subagent / Hook / Skill 抽象**
4. **Anthropic 深度客户**

### 不太适合
- **多模型策略**（需要 OpenAI / Google 自由切换）
- **原型阶段**（LangChain 更轻快）
- **不想绑定 Anthropic**的独立开发者

### 典型场景
- 企业内部工具：自定义 Agent + MCP + Skill
- 客户服务 Agent（Sierra 类替代）
- 内部自动化（类似 Factory AI 自建版）

## 八、信息源

- Anthropic · Claude Agent SDK 发布博客（2025-09）
- SDK 文档（docs.anthropic.com/agent-sdk）
- GitHub · anthropic-agent-sdk（部分开源）
- 本站 · [Claude Code](Claude_Code.md) · [Agent 技术栈](../01_Agent基础/Agent技术栈.md) · [Multi-Agent 系统](../01_Agent基础/Multi_Agent系统.md) · [Anthropic](../../01_AI/11_公司研究/Anthropic.md)
