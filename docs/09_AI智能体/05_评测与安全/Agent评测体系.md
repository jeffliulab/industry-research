# Agent 评测体系：τ-bench · OSWorld · GAIA · SWE-bench

> 最后更新：2026-04-24
>
> Agent 评测比 LLM 评测**难一个数量级**——LLM 是"一次输入一次输出"，Agent 是"多步骤 + 工具调用 + 状态演化"。2024-2026 主流 Agent benchmark 分四类：**通用能力（GAIA）、任务执行（τ-bench / OSWorld）、编程（SWE-bench 已专题）、浏览器（WebArena / VisualWebArena）**。

## 一句话结论

Agent 评测 **2026 仍处于早期** —— 没有一个基准能像 LLM 的 MMLU 那样被业界一致接受。**τ-bench（Sierra 2024 发布）+ OSWorld（2024）+ GAIA（Meta 2023）** 是目前三大通用 Agent 基准，但**成绩与真实生产使用仍有巨大差距**。

## 三条关键要点

1. **τ-bench**（Tau-bench，Sierra 开源）测试 Agent 在**模拟客服场景**的完成率，接近真实企业任务
2. **OSWorld** 测试 Agent 在**真实 Ubuntu 桌面**执行任务，最贴近 Computer Use 场景
3. **GAIA** 测试 Agent 的**通用问题解决能力**，涵盖 web / file / math / vision

## 通用 Agent Benchmarks

### 1. **GAIA**（Meta 2023）
- **题目**：466 道人类设计的真实 query
- **难度分级**：Level 1-3
- **考核**：多步骤 + 工具调用 + 综合推理
- **代表分数**（Level 1）：
  - GPT-4 Plus Plugins：30%
  - ChatGPT Deep Research：~90%
  - 人类：~92%
- **优势**：人类 curated，覆盖真实场景

### 2. **τ-bench / Tau-bench**（Sierra 2024-06）
- **题目**：模拟航空公司 / 零售客服场景
- **考核**：Agent 通过 Function Calling 完成用户请求
- **特色**：
  - **客户模拟**（用 LLM 扮演客户）
  - **policy compliance 检查**（是否符合公司规则）
  - **可复现 pass@k**
- **代表分数**：
  - Claude 3.5 Sonnet: ~55%
  - GPT-4o: ~48%
  - o3: ~65%
- **争议**：Sierra 自己出基准，有利益关系

### 3. **OSWorld**（CMU / NUS 2024）
- **题目**：369 个真实 Ubuntu 任务（文件操作、软件使用、浏览器）
- **考核**：Agent 在虚拟机环境执行
- **特色**：**最接近 Computer Use 真实场景**
- **代表分数**：
  - Claude Computer Use: ~22%
  - Claude 4 Opus + CU: ~35%
  - **Human**: ~72%
- **挑战**：生产化差距仍大（Agent < 50%，人类 > 70%）

### 4. **AndroidWorld**（2024）
- OSWorld 的移动版
- 116 道 Android 任务

### 5. **WebArena / VisualWebArena**（CMU 2023-2024）
- **题目**：自建 Web 环境任务
- 电商 / 论坛 / GitLab / 地图等
- **代表分数**：
  - Browser Use + GPT-4o: ~30%
  - 人类：~78%

### 6. **AgentBench**（清华 / THUDM 2023）
- 学术综合 benchmark
- 覆盖 operating systems / databases / web / games 等
- **2024 起少人更新**

### 7. **MLE-bench**（OpenAI 2024-10）
- 让 Agent 完成 Kaggle 级机器学习任务
- 评分：获得奖牌的比例

## 编程 Agent Benchmarks（详见 [Coding Agent 评测](../02_Coding_Agent/Coding_Agent评测.md)）

- **SWE-bench Verified**：500 题 GitHub issue
- **LiveCodeBench**：时间戳防污染
- **Terminal-Bench**：终端任务
- **Aider Benchmark**：真实代码编辑

## 浏览器 Agent Benchmarks

### WebArena
- 学术
- 4 类 Web app 任务
- 代表分数低

### BrowserGym / ChatArena
- 行业实验

### Mind2Web
- CMU 研究
- 真实网站任务

### WorkArena
- ServiceNow 企业场景任务

## 多 Agent / 协作 Benchmarks

### ChatDev / MetaGPT 基准
- 研究型
- 规模小

### Agentbench Multi-Agent
- 清华扩展
- 研究用

## 2026-Q1 综合 Agent 排行（粗估）

| Agent / 模型 | GAIA L1 | τ-bench（retail）| OSWorld | SWE-bench V |
|---|---|---|---|---|
| ChatGPT Deep Research + o3 | ~92% | ~60% | ~40% | ~70% |
| Claude 4 Opus + Claude Code | ~85% | ~68% | ~35% | **~72%** |
| Gemini 2.5 Pro Deep Think | ~80% | ~55% | ~30% | ~64% |
| DeepSeek R1 | ~55% | ~40% | ~20% | ~53% |
| Browser Use + GPT-4o | ~60% | ~45% | ~25% | N/A |

## 评测的 5 大方法论挑战

### 1 · 可复现
- Agent 多次跑结果不同（temperature / 工具状态）
- 需要 pass@k 或多次平均

### 2 · 环境一致性
- 真实 Web 变化（CAPTCHA、UI 改版）
- 用 mock / fixed 环境失去真实性

### 3 · 评分自动化
- 部分任务需"结果好不好"判断
- 用 LLM 做 judge 引入新偏差

### 4 · 成本 / 时间不公平
- Agent A 花 10 分钟 + $5，Agent B 花 2 分钟 + $0.5
- 不带成本的分数误导

### 5 · Benchmark 过拟合
- Anthropic / OpenAI 会针对 benchmark 优化
- **生产环境效果 ≠ benchmark 分数**

## 用 [基准率框架](../../99_方法论/框架_基准率.md) 看 "Agent OSWorld 35%" 意味着什么

基准率参照：
- **人类**：OSWorld ~72%
- **初学者**：~40%
- **专业用户**：~80%

Agent 35% = 初学者的一半，**远未达到生产可用**。

### 和其他技术对比
- 语音识别：1990 年代 60% → 2010 年代 99%（用了 20 年）
- 自动驾驶：L4 demo 2016 → 至今未规模化
- **Agent OSWorld 的演进 curve** 类似自动驾驶，可能需要 5-10 年

## 用 [Scaling Laws 框架](../../99_方法论/框架_Scaling_Laws.md) 看 Agent 进展速度

2023-2026 OSWorld 进展：
- 2024-Q2：Claude 3.5 + CU：~15%
- 2025-Q1：Claude 3.7 + CU：~22%
- 2025-Q3：Claude 4 + CU：~30%
- 2026-Q1：~35%

**2 年从 15% → 35%** 是稳定进展，但 **60%+（接近人类）可能还需 3-5 年**。

## 2026 关键变量

1. **τ-bench 2.0**：Sierra 发布更复杂场景
2. **AgentBench Pro**：企业级统一 benchmark（可能的行业联盟）
3. **生产数据评测**：基于真实用户反馈的评分（类似 LMSYS Arena 但针对 Agent）
4. **成本约束 benchmark**：按"$ / 成功任务" 排名
5. **中文 Agent benchmark**：DeepSeek / Kimi / 智谱 内部已有，何时开源

## 我的判断

> **我的看法**：
>
> 1. **τ-bench + OSWorld 会成为 2026-2027 事实标准**，类似 MMLU 在 LLM 的地位
> 2. **Agent benchmark 的"MMLU 时刻"还没到**：仍需行业共识
> 3. **成本 + 时间会成为强制指标**：单纯分数已不够
> 4. **生产使用数据 > Benchmark**：未来厂商会公开"真实成功率"
> 5. **Benchmark 驱动的研究进展"人家已经干到 35%"，"我们还在 15%" 的压力逼迫所有厂商参与**
>
> **我可能错在哪里**：
> - 出现全新"杀手级" benchmark（例如 ARC-AGI 2025 引爆）
> - Agent 被非 benchmark 方式评估（纯商业指标）
> - Meta / DeepMind 发布碾压性 benchmark 改变格局

## 延伸阅读

- Meta · GAIA paper（arxiv.org/abs/2311.12983）
- Sierra · τ-bench GitHub
- CMU · OSWorld paper
- 本站 · [Coding Agent 评测](../02_Coding_Agent/Coding_Agent评测.md) · [Agent 安全边界](Agent安全边界.md) · [基准率框架](../../99_方法论/框架_基准率.md)
