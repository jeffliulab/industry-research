# AI 芯片初创：Cerebras · Groq · Tenstorrent · SambaNova

> 最后更新：2026-04-24
>
> NVIDIA GPU 统治 90%+ 市场的同时，一批 AI 芯片初创公司正从不同维度挑战：**推理专用（Groq, Cerebras）· 训练替代（Tenstorrent）· 系统集成（SambaNova, Rebellions）· 可重构架构（Graphcore 余温）**。本文梳理格局与商业化状态。

## 一句话结论

AI 芯片初创 **整体还未打破 NVIDIA 垄断**，但在**推理专用 + 低延迟** 细分已建立小而重要的位置。**Groq / Cerebras 活下来了**，**Graphcore / SambaNova 转型艰难**，**Tenstorrent 是最被低估的挑战者**。

## 三条关键要点

1. **推理专用芯片胜出逻辑**：NVIDIA 做训练极好，但推理的"低延迟 + 高吞吐 + 低成本"三角 NVIDIA 不是最优
2. **SRAM on-chip 路线 vs HBM**：Groq / Cerebras / SambaNova 用大 SRAM 实现确定性低延迟
3. **中国自研芯片快速成熟**：华为昇腾、寒武纪、燧原、摩尔线程等占国内市场逐步可观

## 主要玩家

### Groq（推理专用）
- **创立**：2016，创始人 Jonathan Ross（前 Google TPU 首席架构师）
- **产品**：LPU（Language Processing Unit）
- **独特点**：确定性低延迟（~10ms/token），比 NVIDIA H100 快 10x
- **估值**：~$2.8B（2024 Series D）
- **商业化**：Groq Cloud（API）+ 企业合同
- **用户群**：对延迟极度敏感（金融、实时对话）

### Cerebras（晶圆级芯片）
- **独特产品**：**Wafer-Scale Engine (WSE)**，单颗 85 万核心
- **2024 IPO 申请**：计划上市（具体时间延迟中）
- **2024 年公开新闻**：**最快推理服务**（1800 tokens/s 运行 Llama 3.1）
- **客户**：G42、医药公司、国家实验室
- **挑战**：单颗成本高（$2-3M / 系统），难大众化

### Tenstorrent（可扩展训练 + 推理）
- **创始人**：Jim Keller（传奇芯片设计师，AMD Zen / Apple A4/5 / Tesla FSD 主导者）
- **架构**：Tensix 核心，可 scale 出训练集群
- **开源策略**：与 NVIDIA 封闭生态对打
- **2024 Series D**：~$2B 估值
- **最被低估**：Keller 的执行力 + 开源路线

### SambaNova（企业专用）
- **定位**：Enterprise AI platform（芯片 + 软件 + 模型一体）
- **Dataflow 架构**：可重构数据流
- **商业化**：主要卖给政府 / 国防 / 大企业
- **估值**：~$5B（2021 peak）
- **挑战**：商业化规模起不来

### Rebellions（韩国）
- **产品**：RBLN 芯片
- **2024 与 Sapeon 合并**
- **强项**：韩国本土市场 + 政府支持

### Graphcore（英国，跌落）
- 曾是欧洲 AI 芯片希望
- 2023-2024 收入下滑、裁员
- 2024-07 **被 SoftBank 收购**（低估值退场）
- 商业化失败案例

### 中国玩家（详见 [AI 训练基础设施](AI训练基础设施.md)）
- **华为昇腾 910B / 910C**：国内替代 NVIDIA 主力
- **寒武纪**：A 股上市，思元系列
- **燧原科技**：邃思系列
- **摩尔线程 MT-600x**：消费级 GPU 替代
- **阿里平头哥 含光 / 壁仞科技**：各有布局

## 技术路线对比

| 路线 | 代表 | 优势 | 劣势 |
|---|---|---|---|
| **GPU 通用**（NVIDIA 主流）| H100/B100 | 生态成熟、多功能 | 非最优推理 / 训练 |
| **大 SRAM on-chip** | Groq, Cerebras | 超低延迟、确定性 | 单颗极贵 |
| **Dataflow / 可重构** | SambaNova, Graphcore | 灵活、某些场景高效 | 生态难建 |
| **可 scale 的小核心** | Tenstorrent | 类似 GPU 但开源 | 生态追赶中 |
| **专用 ASIC** | Google TPU, Meta MTIA, Amazon Trainium | 成本低 | 仅自家用 |

## 用 [7 Powers 框架](../../99_方法论/框架_7_Powers.md) 看 NVIDIA 护城河

为什么挑战 NVIDIA 困难（参考 [NVIDIA 深度 / AI 训练基础设施](AI训练基础设施.md)）：

| Power | NVIDIA 成立？ |
|---|---|
| Scale Economies（TSMC 先进制程优先） | ✅ |
| Cornered Resource（CUDA 生态）| ✅✅ |
| Process Power（10 年 GPU 工程）| ✅ |
| Switching Costs（CUDA 代码）| ✅✅ |
| Network Economies（开发者）| ✅ |

**CUDA 是真正的 moat**。初创芯片公司即使硬件更好，软件迁移成本足以劝退多数客户。

## 用 [BCG Advantage Matrix 框架](../../99_方法论/框架_BCG_Advantage.md) 看

AI 芯片 = **Volume 象限**（少数赢家 + 规模经济）：
- **NVIDIA + AMD + 3 家超大云厂自研 = 5 玩家格局**
- 初创公司能做 **Specialization**（推理细分 / 低延迟细分）但无法在 Volume 象限胜出
- Groq / Cerebras 的战略本质：**在 Specialization 小池子里做王**

## 商业化挑战

### 1. 软件生态（最大挑战）
- PyTorch / HuggingFace / vLLM 等都围绕 CUDA
- 迁移到其他芯片需要 ROCm、TT-BUDA、ASICs 等
- **2024-2025 年 ROCm 明显进步**，AMD MI300X 部分替代

### 2. 大客户验证
- 头部 AI 公司（OpenAI / Anthropic / Meta）主要用 NVIDIA
- 芯片初创需要找**二线 AI 公司**（Mistral、Cohere、地区大客户）验证

### 3. 资本密集
- 单颗流片 $50-200M
- 从设计到量产 3-5 年
- VC 支持周期不够长

## 2026 关键变量

1. **Tenstorrent 首款大规模量产芯片**：Blackhole / Grendel 的企业采用情况
2. **Cerebras IPO**：定价 + 市场接受度
3. **NVIDIA Blackwell / Rubin 供需**：如果供应紧张，初创获得喘息
4. **CUDA 替代进展**：ROCm / Triton 能否真正做到"无缝切换"
5. **中国自研芯片出货量**：昇腾能否达到 NVIDIA 在中国市场的 30%+

## 我的判断

> **我的看法**：
>
> 1. **AI 芯片初创整体命运不乐观**——CUDA 护城河太深，初创需要 5-10 年才能真正挑战
> 2. **Groq / Cerebras 在"推理专用 + 低延迟"细分会存活**，但规模有限（单家可能 $500M-1B 收入天花板）
> 3. **Tenstorrent 是最值得押注的挑战者**——Jim Keller + 开源 + 可 scale 路线
> 4. **真正替代 NVIDIA 的是 TPU / Trainium / MTIA**，不是初创——大厂自研才有规模
> 5. **中国自研芯片会在中国市场跑通独立生态**
>
> **我可能错在哪里**：
> - CUDA 替代（ROCm / Triton）突破比预期快
> - Groq / Cerebras 中某一家突然签到大客户（如 Anthropic / OpenAI）
> - **代理商业模式**（不卖硬件卖 token）让初创芯片公司找到新路径

## 延伸阅读

- SemiAnalysis · AI 芯片深度
- 本站 · [AI 训练基础设施](AI训练基础设施.md) · [GPU 云初创](GPU云初创.md) · [7 Powers 框架](../../99_方法论/框架_7_Powers.md) · [BCG Advantage 框架](../../99_方法论/框架_BCG_Advantage.md)
