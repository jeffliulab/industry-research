# Deep Research 产品对比

> 最后更新：2026-04-24
>
> Deep Research 是 2025 年最成功的**通用 Agent 商用落地**——**ChatGPT Deep Research（2025-02 推出）+ Gemini Deep Research（2024-12）+ Perplexity Deep Research（2025-01）+ Claude 深度研究（Projects 模式）** 四大主流。用 10-30 分钟做出过去人工 3-5 小时的研究报告，**是 Agent "能干活" 的第一批破圈产品**。

## 一句话结论

Deep Research 成功的关键是 **"窄场景 + 清晰 JTBD + 并行 Agent + 可验证输出"** —— 不追求通用，专注"让我给你写一份研究报告"这一件事。**OpenAI 和 Google 抢先，Perplexity 产品体验最好，Claude 起步晚但质量高**。

## 三条关键要点

1. **ChatGPT Deep Research 10 分钟产出 20+ 页报告**，基于 o3 推理模型 + 网络检索 + 多次 iteration
2. **Gemini Deep Research 走得更早**（2024-12 首发），依托 Gemini 2.5 Pro 2M tokens 上下文
3. **"Deep Research" 已是 2025 AI 订阅的核心差异化**——ChatGPT Pro $200、Gemini Advanced $20、Perplexity Pro $20 都主打

## 四大产品详解

### ChatGPT Deep Research（OpenAI）
- **发布**：2025-02
- **底层**：o3 推理模型 + Tool Use + 网络检索
- **时长**：10-30 分钟（可选）
- **输出**：20-50 页结构化报告，含引用
- **可用档位**：Plus ($20) 每月 10 次、Pro ($200) 无限
- **特色**：**最深的推理 + 多路径探索**

### Gemini Deep Research（Google）
- **发布**：2024-12-11（首发）
- **底层**：Gemini 2.5 Pro + Google Search
- **时长**：5-15 分钟
- **输出**：10-30 页报告 + 可导出 Google Docs
- **可用档位**：Gemini Advanced $20
- **特色**：**Google Search 原生集成 + 免费额度大**

### Perplexity Deep Research
- **发布**：2025-02
- **底层**：GPT-4o / Claude / 可选
- **时长**：3-8 分钟（最快）
- **输出**：10-20 页 + 清爽 UI
- **可用档位**：Pro $20
- **特色**：**产品体验最好 + 速度最快 + 引用最清晰**

### Claude Deep Research（Projects 模式）
- **发布**：2025-Q2 整合到 Claude Projects
- **底层**：Claude 4 Opus + Extended Thinking + Tool Use
- **时长**：15-40 分钟
- **输出**：深度报告
- **可用档位**：Pro $20 / Max $100+
- **特色**：**质量最高、长上下文强、但速度最慢**

### 其他入场者
- **xAI Grok Deep Search**（2025-Q3）
- **Kimi 探索版**（月之暗面，中国）
- **You.com Research**
- **豆包深度探索**（字节）

## 性能对比（2026-Q1 主观综合评分）

| 产品 | 深度 | 速度 | 引用质量 | 报告结构 | 成本 | 可用性 |
|---|---|---|---|---|---|---|
| **ChatGPT DR** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 高 | 全球 |
| **Gemini DR** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 中 | 全球 |
| **Perplexity DR** | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | 低 | 全球 |
| **Claude DR** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | 中 | 全球 |

## Deep Research 技术栈解剖

### 组件
```
用户 query
  ↓
规划 Agent:
  - 分解为 5-20 个 sub-question
  - 决定搜索策略
  ↓
并行检索 Agents（Multi-Agent 经典应用）:
  - Web search
  - Academic search
  - 内部知识库（如有）
  ↓
验证 Agent:
  - 去重
  - 事实检查
  - 冲突解决
  ↓
综合 Agent:
  - 结构化大纲
  - 引用标注
  - 生成报告
```

### 与普通搜索对比
| 维度 | 普通搜索（Google）| Deep Research |
|---|---|---|
| 查询数 | 1 | 50-300 |
| 时长 | 3 秒 | 10-30 分钟 |
| 输出 | 链接列表 | 结构化报告 |
| 引用数 | 0 | 20-100+ |
| 成本 | 几乎 0 | $0.5-3（API 成本）|

## 用 [颠覆创新 框架](../../99_方法论/框架_颠覆创新.md) 看 Deep Research

Deep Research 颠覆的是：
- **低端咨询服务**（行业研究、调研公司、学生外包）
- **分析师初稿生成**（投行、咨询、法律）
- **个人研究**（学生论文、记者素材、博主素材）

**颠覆逻辑**：
- 质量不如顶级分析师
- 但**速度 10x + 成本 1/100**
- **"够用就行"** 的市场被快速吞并

## 用 [跨越鸿沟 框架](../../99_方法论/框架_跨越鸿沟.md) 看采用周期

| 阶段 | 用户群 | 2026 状态 |
|---|---|---|
| Innovators | 极客、AI 研究者 | 已过 |
| **Early Adopters** | **分析师、记者、研究员、学生** | **主流** |
| Early Majority | 知识工作者（MBA、咨询、金融）| 2026 正在 |
| Late Majority | 传统行业管理者 | 2027+ |

Deep Research 是 2025 年 **AI 应用层最接近 Early Majority** 的产品类别之一。

## 典型使用场景

### 场景 1 · 行业调研
> "Give me a comprehensive analysis of the humanoid robotics market in 2026, major players, funding, China vs US competition"
→ 产出 30 页英文报告，引用 50+ 源

### 场景 2 · 学术文献综述
> "Summarize the latest research on diffusion transformers from 2023 to 2026"
→ 产出 15 页报告，引用 ArXiv / NeurIPS / ICML 论文

### 场景 3 · 投资尽调
> "Due diligence on Company X: background, competitors, risks, valuation"
→ 产出结构化 DD 报告

### 场景 4 · 购物决策
> "Compare top 5 electric SUVs under $60k"
→ 产出对照表 + 推荐

## 2026 关键变量

1. **OpenAI 把 Deep Research 对外 API**：让所有产品内嵌
2. **垂直 Deep Research 涌现**：Harvey Research（法律）、Hebbia（金融）
3. **速度 + 成本降低**：目前 $1-5/次，是否降到 $0.1 级别
4. **中文 Deep Research 爆发**：DeepSeek / Kimi / 豆包 追赶
5. **企业私有知识库整合**：Deep Research + Glean 类企业搜索

## 我的判断

> **我的看法**：
>
> 1. **Deep Research 是 2025 最成功的 Agent 商用案例**——把 L2 Agent 能力包装成清晰 JTBD
> 2. **Perplexity 最有可能成为"Deep Research 代名词"**：产品体验 + 品牌
> 3. **低端咨询 / 调研行业未来 3 年被冲击 30-50%**
> 4. **Deep Research 会成为所有 AI 产品的标配**：不是独立产品，是功能
> 5. **"Deep Research + 私有知识" 是下一个蓝海**：企业内部深度研究
>
> **我可能错在哪里**：
> - OpenAI / Google 在质量上彻底碾压，Perplexity 被挤出
> - 研究报告的"真实性"遭到质疑（引用造假 / 幻觉），信任崩塌
> - 中国 DeepSeek R2 / Kimi 出现颠覆性 Deep Research 产品

## 延伸阅读

- OpenAI · ChatGPT Deep Research 发布博客（2025-02）
- Google · Gemini Deep Research 2024-12
- Perplexity · Deep Research 2025-02
- 本站 · [Computer Use Agent](Computer_Use_Agent.md) · [Perplexity 公司研究](../../01_AI/11_公司研究/Perplexity.md) · [NotebookLM 产品研究](../../01_AI/12_产品研究/Notebook_LM.md) · [颠覆创新 框架](../../99_方法论/框架_颠覆创新.md)
