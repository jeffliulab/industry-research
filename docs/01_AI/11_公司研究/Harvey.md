# Harvey AI

> 最后更新：2026-04-24
>
> Harvey 是**垂直 AI 最典型的成功案例**——2022 年由前 O'Melveny & Myers 律师 Winston Weinberg 与前 DeepMind 研究员 Gabriel Pereyra 创立，专攻法律行业。2024 年 D 轮 $3B 估值，客户覆盖全球 Top 50 律所的 80%+。Harvey 证明了**"垂直 AI 的 moat 不是模型，是工作流 + 领域知识 + 律所关系"**。

## 一句话定位

Harvey 是 **"律所的 Bloomberg"** —— 不只是"律师用的 ChatGPT"，而是**嵌入合同审查 / 判例研究 / 尽职调查 / 法律起草** 全流程的 AI 平台。估值 $3B+，ARR 约 $75M（2024）→ $200M+（2025 目标）。

## 一、公司速览

- **创立**：2022-07
- **总部**：旧金山
- **创始人**：
  - **Winston Weinberg**（CEO，前 O'Melveny & Myers 诉讼律师）
  - **Gabriel Pereyra**（CTO，前 DeepMind / Meta）
- **员工**：~350（2025 末）
- **估值**：**$3B**（2024-07，D 轮 $300M）
- **主要投资方**：Sequoia、Kleiner Perkins、Elad Gil、Open AI Startup Fund、GV

## 二、历史沿革

| 时间 | 里程碑 |
|---|---|
| 2022-07 | Harvey 成立 |
| 2022-11 | **OpenAI Startup Fund 领投**（首个外部投资）|
| 2023-02 | **Allen & Overy 成为首个大客户**（英国超大律所）|
| 2023-04 | PwC 签 $20M+ 合同 |
| 2023-04 | B 轮 $21M（Sequoia 领投）|
| 2023-12 | C 轮 $80M，估值 $720M |
| 2024-07 | **D 轮 $100M，估值 $1.5B** |
| 2024-12 | **E 轮 $300M，估值 $3B** |
| 2025-Q1 | 推出 Harvey Agents（法律专属 Agent）|
| 2025-Q3 | 进入亚洲（与日本 / 新加坡律所合作）|
| 2025-Q4 | 与 LexisNexis 集成（判例数据库）|

## 三、业务与产品

### 产品矩阵
| 产品 | 定位 |
|---|---|
| **Harvey Workflows** | 合同审查 / 尽职调查 / 起草 |
| **Harvey Research** | 判例 + 法规 AI 搜索 |
| **Harvey Drafting** | 自动起草法律文件 |
| **Harvey Agents** | Agent 自动完成多步骤任务（2025 新）|
| **Harvey Vault** | 私有文档库 + 查询 |

### 目标客户
- **全球 Top 50 律所**：Allen & Overy (A&O Shearman)、Latham & Watkins、Weil Gotshal、Paul Weiss、Bain & Company（咨询）
- **四大会计师事务所**：PwC、KPMG、EY、Deloitte（部分）
- **企业法务部**：~100 家《财富 500》企业（2025）
- **各国最高法 / 监管**（部分）

### 规模指标
- 律所用户：~250 家全球律所（2025）
- 律师用户：~150,000（2025 末）
- ACV：$100k-5M+（顶级律所）

## 四、技术路线

### 底层模型
- 不自研基础模型
- 主要调用 OpenAI GPT-4 / GPT-5 + Claude
- **Fine-tune** 在法律特定语料上

### 差异化工程
- **RAG 深度优化**：法律文档结构化检索
- **引用生成**：每个输出都追溯到判例 / 法规
- **私有化部署**：部分律所要求本地部署
- **权限 / 审计**：律所级别严苛合规

### 合规 / 安全
- SOC 2 Type II
- GDPR + HIPAA 合规
- "数据不被用于训练" 保证

## 五、商业模式

### 定价
- **Per-seat**：律所根据律师数付费
- **ACV 范围**：
  - 中型律所（100 律师）：$100k-500k/年
  - 顶级律所（1000+ 律师）：$2-5M/年
  - 企业法务部：$50k-500k/年

### ARR 增长
| 年份 | ARR（估算）|
|---|---|
| 2023 | $20M |
| 2024 | $75M |
| **2025 目标** | **$200M+** |

### 单位经济
- 毛利 ~75%（SaaS 正常水平 + AI 成本部分）
- CAC：极高（企业销售 + 长周期）
- LTV：极高（律所切换成本巨大）
- LTV / CAC > 5（健康）

## 六、竞争与壁垒

### 直接对标
- **CoCounsel**（Thomson Reuters 收购）：传统法律数据巨头的 AI 转型
- **Lexis+ AI**（LexisNexis）：另一传统巨头
- **Allen & Overy + Springboks Labs**：律所自建 AI

### 壁垒
- **顶级律所 early adopter brand**：Allen & Overy / PwC 背书吸引同行
- **Winston 的律师背景**：能讲律所语言
- **工作流深度**：非律师无法设计出律师真正需要的流程
- **FAR + RAG + 法律数据栈**：7000 万小时律师工作数据积累
- **监管信任**：几个顶级律所的 security 团队审核通过

### 弱点
- **依赖 OpenAI / Anthropic**：基础模型代际变化会冲击
- **ChatGPT 通用能力提升**：律所可能直接用 ChatGPT Plus
- **CoCounsel 老牌对手**：数据积累远比 Harvey 久

## 七、关键风险

- **基础模型能力追平**：若 Claude / GPT 能直接做律师工作，Harvey wrapper 价值递减
- **律所自研**：顶级律所（Allen & Overy、Latham）自建 AI 部门
- **责任事件**：若 Harvey 错误导致律师行差错，引发集体诉讼
- **监管限制**：美国一些州 bar 协会考虑限制 AI 起草法律文件
- **创始人离职**：Winston 是律所关系关键，他一旦离开难替代

## 八、我的判断

> **我的看法**：
>
> 1. **Harvey 是 2024-2026 垂直 AI 最干净的商业故事**——收入增长可验证、客户 logo 清晰、ACV 高
> 2. **估值 $3B 合理偏低**：若 ARR 2026 达 $400M，估值应到 $7-10B
> 3. **会被 Thomson Reuters / LexisNexis 收购** 概率 30%+——类似 Casetext 收购模式
> 4. **Harvey 的真正敌人不是 CoCounsel，是 ChatGPT Pro**：OpenAI 若做 "律师版 ChatGPT"，Harvey 受挤压
> 5. **Harvey Agents 是关键转折**：从"助手"到"部分替代初级律师" 是估值重定价事件
>
> **我可能错在哪里**：
> - ChatGPT 法律模式直接做到 Harvey 80% 能力（Harvey 被挤压）
> - 顶级律所集体自研 AI 部门（Harvey 失去顶层客户）
> - Agent 出现事故（如伪造判例）引发律师行信任危机

## 九、信息源

- Harvey 官方博客（harvey.ai）
- Winston Weinberg 访谈 · Founders Podcast
- Above the Law · 律师行 AI 报道
- 本站 · [垂直 AI 全景](../04_智能体与应用/垂直AI全景.md) · [企业 AI 落地模式](../04_智能体与应用/企业AI落地模式.md) · [7 Powers 框架](../../99_方法论/框架_7_Powers.md)
