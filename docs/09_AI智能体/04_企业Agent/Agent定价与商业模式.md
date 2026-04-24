# Agent 定价与商业模式：seat · tokens · outcome

> 最后更新：2026-04-24
>
> Agent 的商业化正在**重写 SaaS 的定价模式**——从 20 年的 "per-seat"（按人头）向 "per-outcome"（按成功付费）转变。**Sierra 按成功工单付费、Harvey 按小时 ACV、Cursor 仍 per-seat、Claude Code 按 token / 订阅**。本文对比 2025-2026 主流 Agent 定价模式，分析哪种最适合哪类产品。

## 一句话结论

Agent 定价无单一最优解，**2026 是 "per-seat / per-token / per-outcome" 三种模式共存试错期**。**Per-seat 最成熟但最被 Agent "产能跃升" 挑战**（一人能干 10 人活，按人头收钱不合理）；**Per-outcome 最匹配 Agent 逻辑但风险分配难**；**Per-token 对大客户偏贵但最简单**。

## 三条关键要点

1. **Sierra（Bret Taylor 创立）率先推 per-outcome**：按"成功解决工单" 收费 $0.1-1/工单，投资人热捧
2. **SaaS per-seat 模式正在被冲击**：若一个客服 Agent 替代 5 人，客户不愿按原 5 seat 付
3. **Token 模式最简单但对企业不友好**：成本不可预测、IT 采购难批准

## 五种主流 Agent 定价模式

### 模式 1 · Per-Seat（按人头）
- 最传统
- 代表：**Cursor $20/月**、**GitHub Copilot $10-19/月**、**Glean $40-60/seat**
- **优势**：采购熟悉、可预测
- **劣势**：与 Agent "劳动替代"逻辑冲突

### 模式 2 · Per-Token / Per-API-Call（按用量）
- 代表：**Claude API**（输入 $3/M，输出 $15/M）
- **优势**：按真实使用
- **劣势**：企业预算难、大规模贵

### 模式 3 · Per-Credit（Credit 包）
- 代表：**Cursor Pro 500 Premium requests/月**、**Windsurf Flow Action Credits**
- **优势**：在 per-seat 和 per-token 间折中
- **劣势**：Credit 概念用户难理解

### 模式 4 · Outcome-Based（按成功付费）
- 代表：
  - **Sierra**：按**成功解决的客服工单** 收 $0.1-1/单
  - **Intercom Fin**：类似
  - **Zendesk AI**：部分按成功度量
- **优势**：与 Agent 价值对齐
- **劣势**：如何定义"成功"？风险谁承担？

### 模式 5 · Contract-Based（ACV 合同）
- 代表：**Harvey AI $100k-5M/年 律所合同**、**Devin** 企业合同
- **优势**：企业销售熟悉
- **劣势**：难标准化、销售周期长

## 代表公司的定价选择

| 公司 | 主模式 | 2025 ARR（估算）| 备注 |
|---|---|---|---|
| **Cursor** | Per-Seat $20/月 | ~$500M | 未来可能加 outcome 层 |
| **Claude Code** | 含在 Claude Pro/Max $20-200 | （未拆分）| + Max 订阅 |
| **GitHub Copilot** | Per-Seat $10-19 | ~$700M | 微软捆绑销售 |
| **Devin**（Cognition）| 合同制（$500+/月起）| ~$50M | 面向企业 |
| **Sierra** | Per-Outcome $0.1-1/工单 | ~$100M+ | 代表新范式 |
| **Harvey** | ACV $100k-5M | ~$200M | 律所合同 |
| **Glean** | Per-Seat $40-60 | ~$100M | 企业 SaaS |
| **v0** | Per-Seat $20 + Credit | ~$80M | Vercel 生态 |
| **Replit** | Per-Seat $20 + usage | ~$150M | 混合 |
| **Manus** | 订阅 ¥50-200/月 | ~$30M | C 端主导 |

## 用 [Commoditize Your Complement 框架](../../99_方法论/框架_CYC.md) 看基础模型定价

Anthropic / OpenAI 的 Agent 定价策略：
- **他们的 A**：基础模型 API
- **Agent 产品是 complement**：让模型调用量上升
- **Anthropic：** Claude Code 订阅（Pro/Max）→ 拉动模型 API 使用
- **OpenAI：** ChatGPT Agent → 拉动 GPT-5 / o3 usage

因此这些公司**愿意让 Agent 产品本身不赚钱**（甚至亏损），通过模型 API 赚钱。这对独立 Agent 公司（Cursor / Devin）是结构性压力。

## 用 [7 Powers 框架](../../99_方法论/框架_7_Powers.md) 看 outcome-based 定价的优势

Sierra 的 outcome-based 定价具有：
- **Scale Economies**：Agent 越用、模型训练越好、成功率越高 → 客户越满意
- **Switching Costs**：一旦企业按 outcome 付费，切换成本高（新产品先签新合同）
- **Counter-Positioning**：老派 per-seat SaaS（如 Zendesk）**无法简单改 outcome**，因为会 cannibalize 自家营收

这就是 Sierra 被资本追捧的原因（2024-09 $4B 估值 C 轮）。

## 用 [跨越鸿沟 Chasm 框架](../../99_方法论/框架_跨越鸿沟.md) 看不同模式采用

| 定价模式 | 成熟度 |
|---|---|
| Per-Seat | 已跨越鸿沟（主流）|
| Per-Token | Early Adopter（开发者 OK、企业采购犹豫）|
| Per-Credit | Early Adopter（用户半懂）|
| **Outcome-Based** | **Early Adopter → 跨越鸿沟中**（Sierra / Intercom 在验证）|
| ACV | 已成熟（企业销售） |

**结论**：**Outcome-based 是 2026-2028 最有"跨越鸿沟"可能性的新模式**。

## 定价演化推测

### 2024
- Per-seat 主流
- Per-token 限于开发者

### 2025
- Outcome-based 进入主流讨论（Sierra 明星案例）
- Per-credit 广泛试用

### 2026（当前）
- 头部产品混合模式（Cursor Pro + Usage）
- Sierra 式 outcome 在客服垂直扩散

### 2027+（推测）
- **"Outcome + 保障"** 模式（失败不收费 + 成功分成）
- **"AI SaaS 市场"** 出现：买家 / 卖家 / 第三方仲裁成功
- **保险化**：Lloyd's 等保险公司对 Agent 成功率出保单

## 关键设计挑战

### 如何定义"成功"？
- 客服：工单解决 + CSAT ≥ 4 星
- 编程：代码通过测试 + 人审批
- 销售：成交金额
- 研究：报告交付 + 客户 sign-off
- **模糊场景难以定义**

### 风险分配
- Agent 出错谁担责？
- Sierra 合同：**部分风险由 Sierra 承担**（失败不收费）
- 但**连带损失谁赔**？例：Agent 误回复导致客户流失

### 数据隐私
- Outcome 评估需要看结果数据
- 企业担心 Vendor 看到敏感信息
- 需严格合规框架

## 2026 关键变量

1. **Sierra 公布更详细 metrics**：outcome-based 的规模化证据
2. **大 SaaS 厂商跟进 outcome**：Salesforce Einstein、Zendesk 是否改定价
3. **企业采购流程演化**：IT 部门如何预算 outcome-based 工具
4. **Agent 保险市场** 兴起：保障购买方
5. **Per-seat 衰退速度**：Cursor / Copilot 能否守住

## 我的判断

> **我的看法**：
>
> 1. **Per-outcome 是 2027-2030 长期方向**：与 Agent 本质对齐
> 2. **Per-seat 仍是 2026 主流**：采购惰性 + 熟悉度
> 3. **"订阅 + 使用量"混合模式是过渡期标配**：Cursor Pro $20 + overage
> 4. **Sierra 会是 outcome-based 的标杆案例**：不成功不要钱的魅力难挡
> 5. **AI 时代的"SaaS revenue per employee" 指标会失效**：企业不再按 seat 比，按"AI-augmented productivity" 比
>
> **我可能错在哪里**：
> - Outcome-based 被"成功难定义"困死，最终败给简单 per-seat
> - ChatGPT / Claude 订阅吞并所有 Agent 产品（单一订阅一通百）
> - 全新模式（例如"投资人风投式定价"）出现

## 延伸阅读

- Sierra 官方博客 · outcome-based pricing 论证
- Tomasz Tunguz · AI 定价模式变化
- 本站 · [Agent 行业现状](Agent行业现状.md) · [企业 Agent 落地模式](企业Agent落地模式.md) · [Sierra 公司研究](../11_公司研究/Sierra.md) · [CYC 框架](../../99_方法论/框架_CYC.md)
