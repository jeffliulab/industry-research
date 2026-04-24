# AI 训练数据提供商：Scale · Surge · Snorkel · LabelBox

> 最后更新：2026-04-24
>
> "数据是新石油"在 AI 时代从隐喻变成基础设施。从 RLHF 人工标注（Scale AI）到合成数据（Snorkel）再到数据整合（Databricks + Tabular），"**数据供给**"已经是独立的百亿美元产业。本文梳理核心玩家与格局。

## 一句话结论

AI 训练数据产业分两大阵营：**人工标注 + RLHF 反馈**（Scale AI、Surge HQ、Mercor）和**合成 / 程序化**（Snorkel、Scale 自家的合成数据）。**2025 Scale AI 被 Meta $14.8B 大单收购部分团队**是关键拐点——标志着数据供给已走到"大厂内部化"阶段。

## 三条关键要点

1. **Scale AI 是最大赢家但 2025 被 Meta 拆分**：创始人 Alexandr Wang 进入 Meta 超级智能实验室，Scale 剩余业务分给 Thomson Reuters 等
2. **RLHF 对齐数据** 是真正的 cornered resource——头部 AI 公司都自建（OpenAI / Anthropic）+ 采购（Scale / Surge）
3. **合成数据**（Phi / Gemma / DeepSeek 都在大量使用）正在冲击传统人工标注市场

## 主要玩家

### Scale AI（已部分被 Meta 内化）
- **创立**：2016，Alexandr Wang（MIT 辍学）
- **主营**：人工标注 + RLHF 反馈 + 政府 / 国防（Scale Defense）
- **客户曾覆盖**：OpenAI、Anthropic、Meta、Google、DoD
- **估值峰值**：$13.8B（2024 Series F）
- **2025-06 转折**：Meta 以 **$14.8B** 向 Scale "部分投资 + 人才收购"，Alexandr Wang 成为 Meta 新 "Chief AI Officer" 级职务，带团队进入 Meta 超级智能实验室
- **Scale 剩余业务**：Scale Defense、Data 产品线，与 Thomson Reuters 等深化合作

### Surge AI
- **创立**：2020，Edwin Chen
- **定位**：**高端 RLHF / 对齐数据** 的"瑞士"，多位 AI 大厂的独立供应商
- **独特**：不靠廉价劳动力，**全部用高素质美国标注员**
- **估值**：未公开，传闻 $2B+
- **客户**：Anthropic（深度合作）、Google、Meta、OpenAI

### Snorkel AI
- **创立**：2019 Stanford AI Lab 拆分
- **技术**：**Programmatic data labeling**（用规则 + 模型自动生成标签）
- **商业模式**：SaaS + 专业服务
- **估值**：~$1B（2023 Series D）
- **客户**：大企业 + 国防

### LabelBox
- **创立**：2018
- **产品**：多模态数据标注平台
- **竞品 / 相似**：SuperAnnotate、V7、Encord

### Mercor
- **创立**：2023
- **独特**：**标注员人才市场**——AI 公司发需求，Mercor 匹配高水平专家（PhD / 医生 / 律师）做标注
- **估值**：~$250M-500M（2025）
- **快速增长**：RLHF 需要越来越专业的标注员

### 中国玩家
- **海天瑞声**（A 股上市）：语音 / 图像数据
- **数据堂** / **云测数据**：综合
- **智能语音数据服务商**：百度 / 腾讯 / 阿里内部 + 外包

## 数据类型与供应商分布

| 数据类型 | 典型供应商 | 典型价格 |
|---|---|---|
| **图像标注（分类 / 边界框）**| LabelBox、Scale、Mercor | $0.05-1/label |
| **视觉语义分割**| Scale、V7 | $1-5/image |
| **语音转录** | Rev、Deepgram | $1/min |
| **RLHF 对齐反馈（文本）**| Surge、Scale、Mercor | $20-100/hour |
| **RLHF 对齐（专业领域）**| Surge、Mercor | $100-500/hour |
| **合成数据** | Snorkel、自研 | 算力 + 验证成本 |
| **专家级标注（PhD、医学）**| Mercor、专业机构 | $200-800/hour |

## 合成数据的冲击

**Microsoft Phi 系列** 开创了"**合成教科书级数据**"路径：
- 用 GPT-4 生成高质量语料
- Phi-3 用这种语料训练，benchmark 对标 Llama 3 70B
- 证明"**数据质量 > 数据数量**"

**影响**：
- 传统大规模爬取 + 人工标注部分被合成数据替代
- 但 **RLHF（对齐）阶段仍需人工**——合成数据无法替代
- 顶级 AI 公司纷纷自研合成数据管道

## 用 [Commoditize Your Complement 框架](../../99_方法论/框架_CYC.md) 看

AI 基础模型公司的 complement 是"数据"：
- Meta 2025 收购 Scale AI → **把数据层纳入内部**（防止被 Scale 卡脖子）
- OpenAI / Anthropic 自建标注团队（不完全依赖外部）
- 这**削弱了独立数据供应商**的定价权

## 用 [VRIO 框架](../../99_方法论/框架_VRIO.md) 看 Scale AI 的护城河

| 资源 | V | R | I | O |
|---|---|---|---|---|
| 全球标注员网络（数万人）| ✅ | ✅ | 🟡 | ✅ |
| 国防 / 政府关系（Scale Defense）| ✅ | ✅ | ✅ | ✅ |
| 客户关系（所有大 AI 公司都是客户）| ✅ | ✅ | 🟡 | 🟡 |
| Alexandr Wang 个人品牌 | ✅ | ✅ | ✅ | ✅ |

**最大隐忧**：客户最终会自己做（**Meta 2025 的 $14.8B 证明了**）。

## 2026 关键变量

1. **Scale AI 剩余业务去向**：Defense + Data 能否独立存活
2. **Surge 能否抓住 Scale 空缺**：成为头部独立数据供应商
3. **合成数据进展**：是否进一步挤压人工标注市场
4. **中国数据供应商国际化**：数据合规允许的前提下
5. **Mercor 模式**：专业标注员市场是否成新一代 GIG 平台

## 我的判断

> **我的看法**：
>
> 1. **独立 AI 数据供应商长期艰难**——头部 AI 公司的内化是不可逆趋势
> 2. **Surge / Mercor 在专业标注的 niche 可存活**，但规模有限
> 3. **Snorkel 的合成数据路线**是未来最大机会，但商业化节奏慢
> 4. **中国数据供应商** 在中国市场可能成立，出海困难
>
> **我可能错在哪里**：
> - RLHF 阶段人工标注永远不可替代 → 独立供应商稳定存在
> - Meta 吸收 Scale AI 后产能不足，反而给了其他供应商窗口
> - 合成数据反复被证明有局限，人工标注需求回升

## 延伸阅读

- The Information · Scale AI $14.8B 收购报道
- Snorkel 论文 · Programmatic Weak Supervision
- 本站 · [AI 训练基础设施](AI训练基础设施.md) · [Commoditize Your Complement 框架](../../99_方法论/框架_CYC.md) · [VRIO 框架](../../99_方法论/框架_VRIO.md)
