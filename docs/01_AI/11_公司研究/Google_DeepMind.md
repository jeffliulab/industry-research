# Google DeepMind

> 最后更新：2026-04-23
>
> Google DeepMind 是**全球 AI 研究资源最深**的机构——合并了原 Google Brain 与 DeepMind 两大 lab（2023-04 合并）。但在 ChatGPT 时代**产品化速度长期落后**，直到 2024-2025 年 Gemini 2.x 才真正进入第一梯队。

## 一、公司速览

- **母公司**：Alphabet（Google）
- **成立**：2010 年 DeepMind 伦敦成立；2014 被 Google 收购；2023-04 与 Google Brain 合并
- **总部**：伦敦 + 山景城 + 苏黎世等多地
- **领导**：Demis Hassabis（CEO）· Jeff Dean（Chief Scientist）· Koray Kavukcuoglu
- **员工数**：数千人（具体不公开）
- **母公司市值**：Alphabet ~$2.2T+（2026 初）
- **一句话业务**：研究 + 工程并重的 AI 实验室，旗舰 Gemini、AlphaFold、Gemma 开源线

## 二、历史沿革

| 时间 | 事件 | 影响 |
|---|---|---|
| 2010 | DeepMind 伦敦成立（Hassabis + Legg + Suleyman） | 博弈 AI 起点 |
| 2014 | Google 收购 DeepMind（$400-500M） | 进入 Google 生态 |
| 2016 | **AlphaGo** 击败李世石 | AI 认知冲击里程碑 |
| 2017 | Google Brain 发表 **Transformer** 论文 | 奠定大模型基础 |
| 2020 | **AlphaFold 2** 蛋白质结构预测 | 科学 AI 里程碑 |
| 2023-04 | **Google Brain + DeepMind 合并** | 资源整合 |
| 2023-12 | **Gemini 1.0** 发布 | 第一代正式产品 |
| 2024-12 | **Gemini 2.0** | 开始真正跟上 |
| 2025-03 | **Gemini 2.5 Pro with Thinking** | 进入第一梯队 |
| 2025 末 | **Gemini Robotics** 发布 | 向具身领域扩张 |

## 三、业务与产品

### 基础模型
- **Gemini 系列**：Ultra / Pro / Flash / Nano 多档
- **Gemma**：开源小模型线（v1 → v3）
- Google AI Studio + Vertex AI 分发

### 消费应用
- **Gemini App**（原 Bard）：C 端 chatbot
- **AI Overviews**：Google 搜索里的 AI 答案（全球 100+ 国家）
- **NotebookLM**：多文档综合研究助手，口碑极好
- **Gemini Workspace 集成**：Gmail / Docs / Sheets 内置 AI

### 企业 / 开发者
- **Vertex AI**：Gemini API 企业分销
- **AI Studio**：开发者入口

### 科研
- **AlphaFold** / **Isomorphic Labs** / **AlphaProof / AlphaGeometry** / **Gemini Robotics**

## 四、技术路线

### 核心优势
1. **TPU 自研算力**（v5p / Ironwood v7）—— 详见 [AI 训练基础设施](../03_基础设施/AI训练基础设施.md)
2. **多模态原生**：Gemini 从 v1 起就是 natively multimodal
3. **长上下文**：Gemini 1.5 / 2.5 的百万级 token
4. **研究深度**：DeepMind 传统 + Brain 传统

### 产品化长期落后的原因
- **组织惯性**：Google "不确定就不发"文化 vs OpenAI 快速迭代
- **广告业务 cannibalization 风险**：AI 答案侵蚀搜索广告（[颠覆创新框架](../../99_方法论/框架_颠覆创新.md) 的经典情境）
- **合并初期磨合**

## 五、商业模式

Google DeepMind 本身不单独披露收入。贡献体现在：
1. **搜索收入保护**：AI Overviews 防止 ChatGPT 夺流量
2. **Google Cloud 增长**：Gemini API + Vertex AI
3. **Workspace 付费升级**：AI for Workspace 加价订阅
4. **YouTube / Ads**：AI 改善广告定向

Google 整体 AI 相关收入 2025 约 **$10-15B**，难独立归因给 DeepMind。

## 六、竞争与壁垒

### 用 [VRIO](../../99_方法论/框架_VRIO.md) 分析

| 资源 | V | R | I | O |
|---|---|---|---|---|
| TPU 自研 | ✅ | ✅ | ✅ | ✅ |
| 全球分发渠道（Chrome / Android / Search / Workspace） | ✅ | ✅ | ✅ | ✅ |
| 研究人才密度 | ✅ | ✅ | 🟡 | 🟡 |
| Google 搜索数据 | ✅ | ✅ | ✅ | 🟡 |

**最强 Power**：**分发渠道** —— Chrome + Android + Workspace 让 Gemini 有天然入口。

### 用 [7 Powers](../../99_方法论/框架_7_Powers.md)
- **Scale Economies**（TPU + 基础设施）✅
- **Cornered Resource**（搜索数据 + 分发）✅
- **Process Power**（广告技术栈）✅

## 七、关键风险

1. **AI Overviews 的广告变现挑战**：AI 答案侵蚀点击
2. **Apple + ChatGPT 生态合作**：iPhone Siri 集成削弱 Google 在 iOS 的位置
3. **反垄断压力**：美国 / 欧盟对 Google 搜索的反垄断案
4. **组织速度**：产品化仍慢于 OpenAI / Anthropic
5. **DeepMind vs Brain 文化整合**

## 八、我的判断

> **我的看法**：
>
> 1. Google DeepMind 是唯一能在**算力 + 算法 + 数据 + 分发**四维都自持的 AI 公司——**长期最不容易被颠覆**
> 2. **产品化节奏落后**会持续——这是 Google 规模的诅咒，**但不致命**，因为分发优势让它"不是第一，也能赢"
> 3. **Gemini Robotics + AlphaFold / AlphaProof / Isomorphic Labs** 的科学 AI 方向，**长期可能是 Google 最独特的贡献**
> 4. Alphabet 的 AI 路线**成功与否直接挂钩广告业务能否转型**——这是 $200B+/年广告收入的保卫战
>
> **我可能错在哪里**：
>
> - Apple-OpenAI 合作的冲击可能比预期更快
> - Google 内部组织摩擦可能拖慢到关键节点

## 九、延伸阅读

- deepmind.google 官方研究博客
- Dwarkesh Podcast · Demis Hassabis
- Stratechery · Google AI 系列
- 本站 · [AI 训练基础设施](../03_基础设施/AI训练基础设施.md) · [Anthropic](Anthropic.md) · [OpenAI](OpenAI.md)
