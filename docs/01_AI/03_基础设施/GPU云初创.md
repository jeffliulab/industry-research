# GPU 云初创：CoreWeave · Lambda · Together · Nebius

> 最后更新：2026-04-24
>
> "AI neocloud"（AI 新云）是 2023-2026 最快增长的基础设施赛道之一。CoreWeave 从加密挖矿转型为 NVIDIA 最大战投方之一，Lambda / Together / Nebius 等各自切分 AI 训练 / 推理 / 开源模型托管赛道。本文梳理 GPU 云格局。

## 一句话结论

GPU 云初创**抓住了四大云厂商（AWS / Azure / GCP / Oracle）在 AI 时代相对落后的窗口**，2024-2025 年 CoreWeave IPO、Nebius 拆分独立、Lambda 持续扩张。**格局由 NVIDIA 背书主导**——谁拿到 NVIDIA 先发 GPU 谁赢。

## 三条关键要点

1. **CoreWeave 是最大赢家**：2024 IPO，成为 NVIDIA 最大外部战投方、微软 OpenAI Azure 容量不足的备选供应商
2. **Together AI 走开源模型托管路线**：Llama / Mistral / 自研模型的推理服务，毛利率 40%+
3. **中国 GPU 云**是另一个生态：火山引擎、阿里云神龙、百度云等与 AWS-CoreWeave 模式差异大

## 主要玩家

### CoreWeave（美国第一）
- **创立**：2017，加密矿场起家
- **转型**：2022-2023 转 AI GPU 云
- **IPO**：2024-Q4 纽交所上市（IPO 后估值数百亿）
- **规模**：2024 年约 25 万 GPU
- **关键客户**：Microsoft（Azure 容量补充给 OpenAI）、Mistral、Inflection
- **NVIDIA 关系**：最大战投方之一（Nvidia 持股 + GPU 分配优先）
- **2025 收入**：$20-30 亿（估）

### Lambda Labs
- **创立**：2012
- **定位**：面向**开发者 / 研究员** 的 GPU 云
- **产品**：Lambda On-Demand（按分钟计费）+ Lambda Reserved
- **价格**：通常是 AWS 的 50%
- **2025 估值**：~$1.5B

### Together AI
- **创立**：2022
- **独特定位**：**开源模型推理云** —— 托管 Llama / Mistral / DeepSeek 等
- **技术**：自研推理优化（FlexAttention 等）
- **商业**：按 token 收费，与闭源 API 相仿但用开源模型
- **2024 Series B**：~$1.3B 估值
- **毛利率**：40%+（开源模型 + 工程效率）

### Nebius（原 Yandex 拆分）
- **背景**：2022 俄罗斯 Yandex 国际业务拆分
- **欧洲 GPU 云龙头**：总部阿姆斯特丹，欧洲合规优势
- **2024-09 纳斯达克上市**：独立交易
- **2025 规模**：数万 GPU，持续扩张

### Modal Labs
- **定位**：Serverless GPU（类似 AWS Lambda，但 GPU）
- **用户**：中小 AI 创业公司、研究者
- **特色**：按秒计费、冷启动快

### RunPod · Paperspace
- **小型 GPU 云**：面向长尾用户、学术研究
- **价格战**最激烈的地带

### 中国 GPU 云（详见 [AI 训练基础设施](AI训练基础设施.md)）
- **字节火山引擎**：豆包 / Seed 自用 + 对外
- **阿里云灵骏**：Qwen 自用 + 对外
- **腾讯云 HCC**：混元自用
- **百度云 AIPOD**
- **国家智算中心**（政府主导）

## 商业模式对比

| 玩家 | 计费方式 | 目标客户 | 毛利率（估）|
|---|---|---|---|
| **CoreWeave** | H100/B200 按小时租 | 超大客户（Microsoft、Mistral）| 20-30% |
| **Lambda** | 按分钟 / 预留 | 开发者、中型企业 | 25-35% |
| **Together** | 按 token（推理）| 用开源模型的应用 | **40-50%** |
| **Modal** | Serverless 按秒 | 中小创业 | 30-40% |
| **四大云厂** | 多层级 | 所有客户 | 30-40%（AI 细分）|

**Together 毛利最高**因为：
1. 推理端定价（不用承担训练的 capex）
2. 开源模型免 license 费
3. 自研推理优化降低成本

## 与四大云厂的博弈

### 四大云厂优势
- 规模（AWS EC2 全球数百万台机器）
- 客户关系（已锁定企业 IT）
- 一站式（compute + storage + networking + DB）

### 四大云厂劣势
- **NVIDIA GPU 分配**：NVIDIA 为了反垄断和分散，不把所有最新 GPU 都给四大云
- 定价：大云产品溢价高
- **AI-native 优化不足**：通用架构非 AI 专用

### CoreWeave 等初创机会
- **NVIDIA 的"备选通道"**：Microsoft 借 CoreWeave 弥补 Azure 容量
- **快速上新**：Blackwell B200 上线速度比 AWS 快 3-6 月
- **专业工程**：网络 / 存储 / 调度都 AI-first

## 用 [7 Powers 框架](../../99_方法论/框架_7_Powers.md) 看

CoreWeave 的护城河：
- **Cornered Resource**：NVIDIA GPU 优先分配 ✅
- **Scale Economies**：数据中心自建降成本 ✅
- **Switching Costs**：客户基础设施绑定 🟡

Together AI 的护城河：
- **Process Power**：推理优化工程 ✅
- **Branding**：开源社区信任 🟡
- **Cornered Resource**：？ **相对弱**

## 用 [BCG Advantage Matrix](../../99_方法论/框架_BCG_Advantage.md) 看

- **GPU 云整体** = **Volume 象限**（规模经济 + 资本密集）
- **推理专业云（Together）** = **Specialization 象限**
- 长尾 GPU 云 = **Fragmentation**（被四大云 + 初创双向挤压）

## 2026 关键变量

1. **CoreWeave 第二次扩张**：从 Microsoft 独家扩张到更多大客户（谷歌？Anthropic？）
2. **Blackwell / Rubin 分配博弈**：NVIDIA 如何平衡四大云 vs 初创
3. **Together 能否 ARR $1B+**：证明开源推理云独立成立
4. **电力瓶颈**：CoreWeave 的数据中心选址和电力获取
5. **AI 云价格战**：是否会出现类似 2010s 云计算价格战（AWS vs Google vs Azure）

## 我的判断

> **我的看法**：
>
> 1. **CoreWeave 是 AI 基础设施最清晰的赢家**，but 估值很可能短期见顶（数据中心 capex + 折旧压力）
> 2. **Together / Modal / Lambda 在细分有生态位**，但整体规模有限
> 3. **四大云不会输**——最终会把 CoreWeave 之类合并或自己扩张追上
> 4. **中国 GPU 云**是独立生态，美国产品难以进入
>
> **我可能错在哪里**：
> - CoreWeave 成功扩张到 Google / Anthropic 客户 → 估值进一步上涨
> - Together AI 真正挑战 Bedrock / Vertex → 开源推理云成为标配
> - 电力 / 供应链危机让初创 GPU 云商业模式崩溃

## 延伸阅读

- SemiAnalysis · GPU Cloud 深度
- CoreWeave S-1 文件（IPO 前披露）
- 本站 · [AI 训练基础设施](AI训练基础设施.md) · [AI 芯片初创](AI芯片初创.md) · [数据中心与电力](数据中心与电力.md)
