# Devin（Cognition AI）

> 最后更新：2026-04-24
>
> Devin 是 **2024-03 Cognition AI 发布的通用 Coding Agent**——**自称"世界第一个 AI 软件工程师"**。Demo 视频引爆全网："AI 取代程序员" 恐慌达到顶峰。但发布后被质疑（SWE-bench 14%），经 18 个月迭代至 Devin 3.0（2025-Q4），**从"Demo 产品"转向"企业 Coding Agent 服务"**。Cognition 公司详见 [公司研究](../11_公司研究/Cognition.md)。

## 一、产品定位

Devin 是 **"L3 全自主 Coding Agent 的旗帜"**——目标是 **"扔给它一个 ticket，几小时拿 PR"**，而不是像 Cursor / Claude Code 那样**交互式编辑**。**面向企业客户 + Team 付费**，价格门槛远高于个人订阅。

## 二、核心能力与架构

### 核心能力
- **GitHub 仓库访问**
- **自主规划 + 执行 + 测试**
- **Web 浏览 + 查文档**
- **错误恢复 + 迭代**
- **PR 生成**

### 底层
- **Multi-model**：Claude 3.5 / 4 + GPT-5 + 自研 orchestration
- **云沙箱**：每 task 独立 VM
- **Planner-Executor-Verifier 三 Agent 架构**

### 用户体验
- **Web UI**：浏览器里看 Devin 思考 + 行动
- **Slack / Linear 集成**
- **实时日志 + 可中断**

## 三、版本与路线图

| 时间 | 版本 | 里程碑 |
|---|---|---|
| 2024-03 | Devin 1.0 Demo | 引爆发布 |
| 2024-04 | SWE-bench 14% 披露 | 争议期 |
| 2024-12 | **Devin 2.0** | 重大改进，SWE-bench ~40% |
| 2025-03 | Devin 对外开放 + 价格调整 |
| 2025-07 | Cognition 收购 Windsurf |
| 2025-Q4 | **Devin 3.0** | 集成 Windsurf IDE，多形态 |
| 2026-Q1 | 企业版扩展 |

## 四、定价与商业化

### 定价
| 层级 | 价格 | 特色 |
|---|---|---|
| **Team** | **$500/月起** | 基础 Credits 包 |
| **Team+** | $2000/月 | 多 Agent 并行 |
| **Enterprise** | 自定义 | 私有化选项 |

**每个"Agent session" ~ 消耗 5-20 Credits**（视复杂度）

### 2025 ARR 估算
- ~$50-80M
- 高速增长但基数小
- 对比 Cursor $500M、Claude Code 驱动 Anthropic +$2B ARR

### 单位经济
- 长时程 Agent token 成本高
- 毛利承压
- Enterprise 合同救毛利

## 五、用户反馈

### 正面
- **"让我周末多休息一天"**：非核心任务交给 Devin
- **适合批量任务**：一次派 5 个 Devin 跑不同 issue
- **Web UI 体验好**：实时 Agent 进度

### 批评
- **成功率仍不够**：30-50% 真实任务成功
- **贵**：$500/月起，每 Credit $5-10
- **调试不透明**：卡住时难定位问题
- **依赖 GitHub**：非 GitHub 仓库不支持

### 2024 Demo 争议后续
- Cognition 后来**拒绝公开 SWE-bench 分数**
- 第三方测试显示实际效果比 demo 差 3-5x
- 但 2025 迭代后信任有所恢复

## 六、竞品对比

| 维度 | Devin | Claude Code | Cursor | OpenAI Codex Cloud |
|---|---|---|---|---|
| 自主程度 | ⭐⭐⭐⭐⭐（L3）| ⭐⭐⭐⭐（L2-L3）| ⭐⭐⭐⭐（L2）| ⭐⭐⭐⭐⭐ |
| 价格 | $500+/月 | $20-200/月 | $20/月 | ChatGPT Pro $200 |
| 形态 | Web | CLI + Web | IDE | Web + CLI |
| 底层模型 | Multi | Claude 4 | Multi | GPT-5 / o3 |
| 成功率（粗估）| 30-50% | 60-70% | 65-75% | 50-60% |
| 企业采用 | 数十家 | 百家+ | 千家+ | 未知 |

## 七、使用笔记

### 最适合
1. **批量 tickets**（GitHub Issues 一次派 10 个 Devin）
2. **夜间 / 周末自动化工作**
3. **非核心 / 辅助代码任务**
4. **企业有预算 + 想试 L3 Agent**

### 不太适合
- **个人开发者**（贵）
- **敏感 / 私有代码库**（云端）
- **实时交互**（Devin 慢）
- **预算紧张**（Claude Code 性价比更高）

### 典型工作流
```
GitHub Issue #1234: "Add CSV export to dashboard"
→ 派给 Devin
→ Devin [clone repo → read spec → plan → 
         write code → run tests → iterate → 
         open PR with description]
→ 2 小时后 PR 到 email
→ 你 review + merge / reject
```

## 八、信息源

- Cognition 官方（cognition.ai/devin）
- Devin 2.0 发布博客 2024-12
- TechCrunch / Information · Devin 评测
- 用户实测博客（Simon Willison 等）
- 本站 · [Cognition AI 公司研究](../11_公司研究/Cognition.md) · [Coding Agent 格局](../02_Coding_Agent/Coding_Agent格局.md) · [Claude Code](Claude_Code.md) · [Cursor](Cursor.md)
