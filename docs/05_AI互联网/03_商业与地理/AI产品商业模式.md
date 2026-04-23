# 广告 vs 订阅：AI 产品商业模式

> 最后更新：2026-04-23
>
> AI 产品的商业模式正在被重新定义。传统互联网"广告驱动"的模型面临 AI 的根本挑战——**AI 把"零边际成本"假设打破了**（推理是真金白银成本）。本文梳理当前 AI 产品的三大商业路径。

## 一句话结论

AI 产品的商业模式正从"纯订阅"（2022-2024）向**混合模型**（订阅 + 广告 + API + 消费 + 佣金）演化。**纯广告模式在 AI 原生产品上难以复刻 Google / Meta 的巨大规模**——这是 [Aggregation Theory 被 AI 挑战](../../99_方法论/框架_聚合理论.md) 的核心。

## 三条关键要点

1. **订阅仍是主流**：ChatGPT $20/$200、Claude $20、Cursor $20 —— 个人付费是头部 AI 产品的现金流基础
2. **广告在 AI 答案里的位置**仍未找到——Perplexity 的 Sponsored Questions 是早期试验但规模小
3. **API + 企业合同**是 B2B AI 公司的主营收入（Anthropic 企业占 60%+，OpenAI 企业 + Azure 分销占 35%）

## 四大商业模型

### 模型 1 · 订阅（Subscription）
**代表**：ChatGPT Plus / Pro、Claude.ai、Cursor Pro、Perplexity Pro

**特点**：
- 月度 / 年度定额
- 分层（免费 / Plus / Pro / Team / Enterprise）
- 差异化：调用量 + 模型档次 + 功能深度

**价格区间**：
- 大众：$20/月（Plus 档）
- 专业：$100-200/月（Pro 档）
- 企业：$30-100/seat/月（Team），议价（Enterprise）

**优点**：可预测现金流、不必关心 marginal cost 细节
**缺点**：天花板在于付费用户规模 + 单价

### 模型 2 · API / 按量付费
**代表**：OpenAI API、Anthropic API、Gemini API、DeepSeek API

**特点**：
- 按 token 计费（input + output 分价）
- 批量折扣
- 模型 / 功能分档（Opus vs Sonnet vs Haiku）

**典型价格（2026 年初）**：
- Claude Haiku：$0.25 / $1.25 per M tokens
- Claude Sonnet：$3 / $15 per M tokens
- Claude Opus：$15 / $75 per M tokens
- GPT-5 mini：$0.5 / $2
- GPT-5：$3 / $12
- DeepSeek V3：$0.27 / $1.1（极具性价比）

**优点**：scales with usage；marginal revenue 正向
**缺点**：同质化竞争 → token 价格年降 80%+

### 模型 3 · 广告（Advertising）
**代表**：Perplexity Sponsored Questions、Google AI Overviews（原 Google 广告间接受益）

**挑战**：
- AI 答案打破了"搜索结果里插广告"的传统位置
- 广告在"直接答案"里如何呈现是个未解设计问题
- 广告主担心品牌安全（AI 可能"总结"品牌形象错了）

**早期实验**：
- Perplexity：**Sponsored Follow-up Questions**（2025 推出）—— 在答案后的推荐问题里插入广告主
- Inline product recommendation：购物场景里推荐商品（Perplexity Shopping）
- Google AI Overviews：仍然是**传统广告 + 新位置（很保守）**

**规模预期**：短期内**远达不到 Google / Meta 规模**。整个"AI 广告" 市场 2026 可能在 $5-10B（对比 Google 广告 $265B）。

### 模型 4 · 企业合同（Enterprise Contracts）
**代表**：Anthropic Enterprise、OpenAI Enterprise、Harvey AI、Glean

**特点**：
- ACV（annual contract value）$50k - $5M+
- SSO、审计、合规、定制
- 销售周期 3-12 个月

**优点**：高单价、粘性强、毛利高
**缺点**：销售成本高、慢增长、依赖少数大客户

### 混合模式
大多数头部 AI 公司组合多种：
- **Anthropic**：Enterprise API（60%+） + Claude.ai 订阅 + 云厂分销
- **OpenAI**：ChatGPT 订阅（~40%） + API（25%） + 企业 / Azure（30%）
- **Perplexity**：Pro 订阅 + 广告（试验） + 未来 Comet 浏览器

## 用 Smiling Curve 看 AI 产业利润分布

（参考 [Aggregation Theory · Smiling Curve](../../99_方法论/框架_聚合理论.md)）

| 环节 | 典型毛利率 |
|---|---|
| GPU（NVIDIA） | **75%+** |
| 云厂 AI 服务 | 30-40% |
| 基础模型 | **接近 0 或负**（需要巨额研发 + capex） |
| AI 应用（Cursor / Perplexity） | **70%+** |

**反常观察**：基础模型（中游）是**薄利**的一端，不是两端。这打破了传统 Smiling Curve 预期——**基础模型层还没完成商品化，但烧钱速度超过了利润建立速度**。

## 用 Wardley Maps 看商业模式演化

（参考 [Wardley Maps](../../99_方法论/框架_Wardley_Maps.md)）

- **LLM API** 正从 Product 向 Commodity 移动 → **API 收入增长放缓，价格战加剧**
- **应用层（Cursor / Perplexity）** 仍在 Custom-Built / Product → **有定价权**
- **下游 Agent 协议（MCP 等）** 在 Genesis → **尚无商业模式**

**战略含义**：API-only 商业模式未来 3 年会被挤压，**必须向应用层 / 企业合同升级**才能保住利润。

## ChatGPT 为什么订阅价跳到 $200（Pro）

用 [跨越鸿沟框架](../../99_方法论/框架_跨越鸿沟.md) 解读：
- $20 Plus 抓 Early Majority
- $200 Pro 抓**专业用户 + 企业轻量**（Legal / Finance / Consulting 从业者每月 $200 完全能接受）
- 让 OpenAI 找到"**付费意愿更高的细分**"
- 2025 年 Pro 订阅者估计 100 万级 → $200M+/月

**对比**：Netflix / Spotify 从来没敢往 $200/月走——AI 首次把消费类订阅价拉到这个档位。

## 2026 关键变量

1. **Perplexity 的广告收入规模**：能否 run rate 超过 $500M/年
2. **ChatGPT Pro 订阅**用户数：1M → 3M？
3. **API 价格战终点**：2026 底 token 价降到什么水平？
4. **企业 AI 合同 ACV 是否继续上升**：当前 Anthropic 企业合同 ACV 中位数约 $100k，可能涨到 $300k+
5. **AI 硬件（Humane / Rabbit 继任者）**：会不会有"买硬件 + 订阅服务"的新模式成型

## 延伸阅读

- The Information · AI business model beat
- Ben Thompson · Aggregators' AI Risk
- 本站 · [AI 商业化模式](../../01_AI/01_市场与资本/AI商业化模式.md) · [Aggregation Theory 框架](../../99_方法论/框架_聚合理论.md) · [Wardley Maps 框架](../../99_方法论/框架_Wardley_Maps.md)
