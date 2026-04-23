# Perplexity

> 最后更新：2026-04-23
>
> Perplexity 是 2023-2025 年**生成式搜索最成功的独立品牌**——2022 年成立，2025 年月活 ~100M、估值 $18B。但它也面临 2026 年最困难的生存博弈：**在 Google / ChatGPT 夹击下找到独立商业模式**。

## 一、公司速览

- **创立**：2022 年 8 月
- **总部**：旧金山
- **创始人 / CEO**：**Aravind Srinivas**（前 OpenAI 研究员）· Denis Yarats · Johnny Ho · Andy Konwinski
- **员工数**：~150（2025 末）
- **估值**：**~$18B**（2025 Series F）
- **投资方**：NEA、IVP、Bezos Expeditions、Tiger、Sequoia 等
- **一句话业务**：生成式 AI 搜索引擎 + 浏览器（Comet）

## 二、历史沿革

| 时间 | 事件 |
|---|---|
| 2022-08 | 创立 |
| 2022-12 | Perplexity 搜索上线 |
| 2023 | 种子 → Series A，产品口碑扩散 |
| 2024-Q2 | Series C $3B 估值 |
| 2024-Q4 | Pro 订阅持续增长；Perplexity Shopping 等功能 |
| 2025-Q1 | **Comet 浏览器** 发布 |
| 2025-Q2 | **Sponsored Follow-up Questions** 广告模式试点 |
| 2025-Q3-Q4 | Series E-F，估值跃升到 **$18B** |
| 2025 末 | 月活达 ~100M（官方披露约数）|

## 三、业务与产品

### Perplexity 搜索
- Web / iOS / Android / Mac 客户端
- 核心交互：**问题 → 生成式答案 + 引用源**
- Free / Pro（$20/月）两档

### Pro 订阅功能
- 多模型选择（Claude / GPT / Gemini / DeepSeek）
- Pro Search（更深度搜索）
- Spaces（专题文件夹）
- 图像生成

### Perplexity Comet 浏览器（2025-Q1）
- 基于 Chromium
- 内置 AI 搜索 + 侧边栏
- **Agentic Browsing**：AI 直接操作网页
- 目标：抢占 Chrome 一部分用户

### 商业化实验
- **Sponsored Follow-up Questions**（广告）
- **Perplexity Shopping**（电商佣金）
- **Enterprise / API**（B2B）
- 正在寻找"AI 时代的 AdWords"

## 四、技术路线

### 核心差异化
1. **专注搜索体验**：问答格式 + 引用源，优于直接对话型 AI
2. **多模型编排**：后端智能选择调用哪个模型
3. **垂直深度**（2025 推出）：Academic / Finance / Shopping 等专题
4. **浏览器级野心**：Comet 是从"搜索引擎"升级到"搜索 + 代理"

### 技术栈
- 不自研基础模型
- 主要调用 Claude / GPT-5 / Gemini / 开源模型（DeepSeek 等）
- 自研：搜索 orchestration、引用检索、UI / UX

## 五、商业模式

### 收入来源（估算）
- **Pro 订阅**：2025 年 ARR ~$60-100M（用户规模 + 订阅率）
- **广告**（早期）
- **Shopping 佣金**
- **企业 / API**：小但增长

### 单位经济挑战
- **推理成本高**：每次查询调用大模型，$0.01-0.1/ 查询
- 月活 100M × 高频查询 → 推理成本惊人
- **Pro 订阅用户 2-3%** 覆盖不了"免费用户的推理成本"

这是 Perplexity 最头疼的经济学问题——需要**广告 / 交易收入**补贴免费用户。

## 六、竞争与壁垒

### 直接对标
- **Google AI Overviews**：规模 > Perplexity 100x
- **ChatGPT Search**：OpenAI 的搜索能力，免费
- **Arc Search / Dia**：新浏览器
- **Microsoft Copilot + Bing**
- **中国**：Kimi 探索版 / 秘塔 / 360 AI 搜索

### 用 [Aggregation Theory · Smiling Curve](../../99_方法论/框架_聚合理论.md)
Perplexity 是**典型聚合者候选**——但：
- 零边际成本假设被 AI 打破（推理成本真金白银）
- 直接答案 UI 设计使广告位置不清晰

### 用 [VRIO 框架](../../99_方法论/框架_VRIO.md)

| 资源 | V | R | I | O |
|---|---|---|---|---|
| 品牌（"AI 搜索第一印象"）| ✅ | ✅ | 🟡 | ✅ |
| 用户数据 / 查询模式 | ✅ | 🟡 | 🟡 | ✅ |
| Comet 浏览器分发 | ✅ | ✅ | 🟡 | ✅ |
| Multi-model orchestration 工程 | ✅ | 🟡 | ❌ | ✅ |

**最大隐忧**：没有**一个真正独占的 cornered resource**。面对 Google / OpenAI，Perplexity 在每个维度都"有，但不独占"。

## 七、关键风险

1. **商业化未验证**：$18B 估值需要 **$500M+ ARR** 才合理，当前远未达
2. **Google AI Mode 的扩张**：AI Overviews 下一步是完整 AI 模式，直接抢 Perplexity
3. **ChatGPT Search 免费**：OpenAI 的免费搜索对 Perplexity 是直接打击
4. **推理成本**：LLM API 不降价 + Perplexity 规模扩大 = 单位经济恶化
5. **Comet 浏览器的 Chrome 壁垒**：Chrome 份额 65%+，动摇极难

## 八、我的判断

> **我的看法**：
>
> 1. Perplexity **开创了生成式搜索这个品类**——这个功劳永久属于它
> 2. **$18B 估值难维持**——除非 Comet 浏览器真的走通，否则 2026-2027 会 down-round
> 3. **最大威胁不是 Google，是 ChatGPT Search 免费且带更强品牌**—— ChatGPT 月活 800M 碾压 Perplexity 100M
> 4. **"AI 搜索"可能不是独立赛道**——最终被 ChatGPT / Google 吸收为"搜索功能"；Perplexity 独立生存需要找到**不被巨头覆盖**的位置（专业、垂直、浏览器等）
>
> **我可能错在哪里**：
>
> - Aravind Srinivas 是强 PR 和产品人，执行力被低估
> - Comet 浏览器可能真的抢到 Chrome 5-10% 用户 → 估值站得住
> - Apple 可能战略投资 Perplexity 作为 iOS 默认 AI 搜索

## 九、延伸阅读

- Perplexity blog + Aravind 推特 / X
- Stratechery · Perplexity 深度分析
- The Information · 搜索 + AI beat
- 本站 · [生成式搜索革命](../01_入口重构/生成式搜索革命.md) · [AI 浏览器崛起](../01_入口重构/AI浏览器崛起.md) · [Aggregation Theory 框架](../../99_方法论/框架_聚合理论.md) · [Perplexity Pro 产品](../12_产品研究/Perplexity_Pro.md)
