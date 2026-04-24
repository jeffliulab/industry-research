# Coding Agent 评测：SWE-bench · LiveCodeBench · Terminal-Bench

> 最后更新：2026-04-24
>
> Coding Agent 评测是整个 Agent 评测中**最成熟 + 最有公信力**的子集——因为代码有明确 pass/fail（测试跑过 = 成功）。本文梳理主流 Coding Agent benchmark：**SWE-bench（真实 GitHub issue）、Terminal-Bench（终端任务）、LiveCodeBench（防污染）、HumanEval（经典但已饱和）、Aider Benchmark（Lars Bergstrom 出品）**。

## 一句话结论

**2025-2026 Coding Agent 评测核心指标是 SWE-bench Verified**（OpenAI 策划的 500 题精修版）——Claude 3.5 Sonnet 49% → Claude 4 Opus 72%+ → o3 71% → Devin 14%（公开分）→ 最新开源模型 30-50%。**但 benchmark 与真实生产使用仍有差距**，"benchmark 好 ≠ 日常用着顺手"。

## 三条关键要点

1. **SWE-bench Verified** 成为 2024-2026 事实金标准，代替了饱和的 HumanEval / MBPP
2. **Terminal-Bench**（2025）是专为 Agent 而设的新基准，测 Agent 在真实 shell 环境的能力
3. **基准"过拟合"问题严重**：LiveCodeBench 通过"时间戳之后"筛选避免训练数据污染

## 主流 Coding 评测 benchmark

### 1. HumanEval（OpenAI，2021）
- **题目**：164 个 Python 函数，带 docstring + test
- **规模**：小
- **缺陷**：**已饱和**（GPT-4、Claude 3.5 Sonnet 都 90%+）
- **2026 状态**：历史遗产，不再是主流参考

### 2. MBPP（Google Mostly Basic Python Problems）
- **题目**：974 道短 Python 问题
- **缺陷**：**已饱和**，类似 HumanEval

### 3. **SWE-bench**（Princeton 2023-10）
- **题目**：2294 个真实 GitHub issue + PR
- **任务**：给 Agent 一个 repo + issue 描述，让它产出一个 PR
- **评分**：跑测试是否通过
- **挑战**：**难度真实**，比 HumanEval 难 10x
- **代表分数**（2026-Q1）：
  - Claude 4 Opus：~72%
  - OpenAI o3：~71%
  - DeepSeek R1：~53%
  - Claude 3.5 Sonnet：49%
  - 开源 SOTA：~40-50%

### 4. **SWE-bench Verified**（OpenAI 2024-08）
- SWE-bench 的 500 题精修版
- 人工审核确保题目可解 + 不含坏测试
- **成为 2025-2026 主流引用基准**

### 5. **LiveCodeBench**（2024）
- 从 LeetCode / AtCoder / CodeForces 抓取新题
- 按时间戳筛选，避免训练数据污染
- **是 "反 benchmark hacking" 的标杆**
- 代表分数：
  - o3：~70%
  - Claude 4 Opus：~60%
  - Gemini 2.5 Pro：~55%

### 6. **Terminal-Bench**（Anthropic 2025）
- Agent 在 Linux shell 里解决任务
- 200+ 任务（解压 / 调试 / 部署 / 修复 CI）
- **直接测 Agent 能力**（不是单纯 code completion）
- 代表分数：
  - Claude Code + Opus 4：~60%
  - 人类专家：~90%
  - GPT-4o：~40%

### 7. **Aider Benchmark**
- Aider 作者 Lars Bergstrom 自建
- 重点测**真实 code editing** 能力（不是单函数生成）
- 包含 diff 匹配 + 测试通过

### 8. **BigCodeBench**
- 1140 道复杂任务
- 测**真实库使用能力**（pandas、numpy、torch）

### 9. **APPS / CodeContests**
- 竞赛题
- 测**算法能力**
- 主要学术用

## SWE-bench Verified 2026-Q1 排行榜

| 模型 / Agent | 分数 | 备注 |
|---|---|---|
| **Anthropic Claude 4 Opus + Claude Code** | **72.5%** | 2026-Q1 SOTA |
| OpenAI o3 | 71.7% | |
| Google Gemini 2.5 Pro Deep Think | 63.8% | |
| DeepSeek R1 | 53.1% | |
| Claude 3.5 Sonnet (Baseline) | 49.0% | |
| Cursor with Claude | ~65% | 集成分数，依赖底层模型 |
| Devin（Cognition）公开 | 14% | 2024 数据，2025 数据未公开 |
| **Human Developer** | **~85%** | 对照 baseline |

**注意**：Devin 14% 是 2024-03 发布时公开分，引发巨大争议（宣传 vs 实际落差）。Cognition 后来拒绝继续公开 SWE-bench 分数。

## 评测方法论 · 5 个陷阱

### 陷阱 1 · 训练数据污染
- Benchmark 题目可能在模型训练数据中
- **LiveCodeBench 用时间戳对抗**

### 陷阱 2 · Single-shot vs Multi-turn
- HumanEval 是 single-shot（一次生成）
- SWE-bench 允许多轮迭代 + 跑测试
- **Multi-turn 分数通常高 2-3x**

### 陷阱 3 · Benchmark 过拟合
- 厂商针对 benchmark 训练
- GPT-5 / Claude Opus 4 的差距在 benchmark 上明显，真实场景可能接近

### 陷阱 4 · 时间 + 成本不公平
- 有的 Agent 花 5 小时思考，有的 30 秒
- 有的用 $100 tokens，有的 $1
- **不考虑成本的分数不公平**

### 陷阱 5 · 任务分布偏差
- 大多 benchmark 是 Python + open-source
- **对 C++ / Java / 前端 / SQL 任务覆盖不足**

## 真实使用场景 vs benchmark

| 场景 | Benchmark 能测 | 真实使用体验 |
|---|---|---|
| 单函数实现 | ✅ | 已饱和 |
| 多文件修改 | 🟡（SWE-bench 部分）| 体验差距大 |
| 大仓库理解 | ❌ | Cursor / Claude Code 各有长处 |
| 交互体验 / UX | ❌ | 完全看产品设计 |
| 错误恢复 | 🟡 | SWE-bench 测但不充分 |
| 调试生产 bug | ❌ | 无人测 |
| 长时程任务 | ❌（Terminal-Bench 接近）| 新基准在建 |

## 用 [基准率框架](../../99_方法论/框架_基准率.md) 看"SWE-bench 72%" 含义

- **人类开发者**在 SWE-bench 上 ~85%
- **初级工程师**可能 60-70%
- Claude Opus 4 + Claude Code 72% **=** 接近平均工程师水平
- 但**这是"能通过测试"，不等于"代码质量好 / 可维护 / 符合风格"**

## 用 [Scaling Laws 框架](../../99_方法论/框架_Scaling_Laws.md) 看 benchmark 曲线

2023-2026 SWE-bench 进展：
```
2023-12  GPT-4：< 5%
2024-06  Claude 3.5 Sonnet：49%
2024-10  Claude 3.5 V2 + Computer Use：55%
2025-Q1  o1：~45% / Claude 3.7：55%
2025-Q3  o3 / Claude 4 Opus：70%+
2026-Q1  多模型 70-73%
```

**3 年进展 ~15x 提升**，但 **2025-2026 已出现收益递减**——从 55% → 72% 用 12 个月，下一步 72% → 85%（接近人类）预计需要 **18-24 个月** 以上。

## 2026 关键变量

1. **SWE-bench Verified 能否被突破到 80%+**：目前 72-73% 瓶颈明显
2. **新 Agent-centric benchmark 涌现**：Terminal-Bench、Aider Bench 等
3. **带"预算 + 时间" 约束的 benchmark**：按 $ 成本评分
4. **中国 benchmark 兴起**：华为 CodeArena、DeepSeek 自建 benchmark
5. **生产 telemetry 评测**：基于真实使用数据的评分（Cursor / Claude Code 内部 A/B）

## 我的判断

> **我的看法**：
>
> 1. **SWE-bench Verified 2026-2027 仍是金标准**，但会进入"刷分"疲劳期
> 2. **Agent benchmark 会取代 model benchmark 成为重点**：Terminal-Bench / τ-bench 等
> 3. **"隐藏测试集" benchmark 会兴起**：避免厂商针对训练
> 4. **人类对照组会成为新参考**：不是模型间对比，是模型 vs 人
> 5. **真实生产使用数据 > benchmark**：2027 厂商会开始公开"用户反馈分"
>
> **我可能错在哪里**：
> - 突然出现新"HumanEval 时刻" benchmark 重写格局
> - GPT-5 + o4 直接到 85%+，超越平均人类
> - Benchmark 文化被"真实用户调研"替代

## 延伸阅读

- Princeton · SWE-bench 官方（swe-bench.github.io）
- OpenAI · SWE-bench Verified 方法论
- LiveCodeBench 论文（arxiv.org/abs/2403.07974）
- Anthropic · Terminal-Bench 博客 2025
- 本站 · [Coding Agent 格局](Coding_Agent格局.md) · [Claude Code](../12_产品研究/Claude_Code.md) · [Agent 评测体系](../05_评测与安全/Agent评测体系.md) · [基准率框架](../../99_方法论/框架_基准率.md)
