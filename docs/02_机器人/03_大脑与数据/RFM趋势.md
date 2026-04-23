# 机器人基础模型 RFM 趋势

> 最后更新：2026-04-23
>
> Robotic Foundation Model (RFM) 是 2023-2026 年最激烈的 AI 方向之一——所有人都相信"机器人需要自己的 GPT 时刻"，但路线还没收敛。本文梳理 RFM 的技术路线、玩家格局、与 LLM 的关系。

## 一句话结论

RFM 正处于 **Pre-ChatGPT 状态**——多条路线并行（VLA / VLM + 动作头 / World Model / 端到端模仿）、数据稀缺、泛化不足。**2026-2027 很可能是 RFM 的"GPT-3 时刻"**——一个主流路线确立，能力出现非线性跃升。

## 三条关键要点

1. **数据是第一瓶颈**：与 LLM 不同，**互联网上没有机器人数据**。头部玩家积累真机 + 遥操作 + 仿真数据
2. **Physical Intelligence 的 π0/π0.5 是当前最受关注的"纯大脑"公司**（不做整机）
3. **Figure Helix / Tesla 端到端路线是"整机 + 大脑"一体化的代表**——与纯大脑路线形成对照

## RFM 主要技术路线

### 路线 A · VLA（Vision-Language-Action）端到端
- **原理**：一个大模型同时吃（图像 + 语言指令），直接输出动作 token
- **代表**：RT-2（Google 2023）、OpenVLA（Stanford 2024）、π0 / π0.5（Physical Intelligence 2024-2025）、RDT（清华 2024）
- **优势**：工程简单；Scaling law 类似 LLM
- **劣势**：需要海量动作数据；动作空间高维

### 路线 B · VLM + 动作头（分层）
- **原理**：顶层用通用 VLM 做任务规划（Claude / GPT），底层用小专家模型 / 运控策略执行
- **代表**：Figure Helix（2025）、Say-Can（Google 2022）、NVIDIA GR00T
- **优势**：利用现有 VLM 通识能力；顶层易调试
- **劣势**：顶层与底层接口损耗；高动态任务难

### 路线 C · World Model
- **原理**：先学会预测物理世界下一秒发生什么，然后用"想象"规划动作
- **代表**：Dreamer（DeepMind 路线）、V-JEPA（Meta LeCun 2024-2025）、Genie 2（Google DeepMind）
- **优势**：样本效率高；泛化性理论最好
- **劣势**：技术不成熟；产业化最晚

### 路线 D · 端到端模仿学习
- **原理**：大量遥操作数据 → 纯行为克隆
- **代表**：Tesla Optimus、ALOHA 系列
- **优势**：简单、数据驱动、成熟度上升
- **劣势**：泛化弱，难到新任务

详见 [具身智能技术路线](../../03_具身智能/01_技术路线/技术路线.md)。

## 主要玩家（RFM 维度）

### 纯大脑派
- **Physical Intelligence (π)**（2024 成立）：π0、π0.5 模型，10k+ 小时真机数据
- **Skild AI**（CMU 系）：Skild Brain 通用操作模型
- **Covariant**：工业场景 RFM-1（核心团队 2024 被 Amazon 吸收）
- **Wayve**：自动驾驶世界模型 LINGO / GAIA

### 整机 + 大脑派
- **Figure AI**：Helix 系统，2025 年与 Figure 02 深度绑定
- **Tesla**：端到端 FSD 架构复用到 Optimus
- **NVIDIA GR00T**：开放平台策略（提供给所有机器人厂）
- **Boston Dynamics**：Atlas Electric + RT 系列集成

### 学术主导的 RFM
- Google DeepMind · RT 系列 / Gemini Robotics（2025 末）
- UC Berkeley · Pieter Abbeel / Sergey Levine 组
- Stanford HAI Robotics
- CMU · Matthew Johnson-Roberson 组
- 清华 RDT、上海 AI Lab、北大

## 数据：RFM 的 GPT-3 数据集瓶颈

### 数据类型与性价比

| 数据类型 | 单小时成本 | 质量 | 可扩展 |
|---|---|---|---|
| 真机随机探索 | $10-50 | 低 | 高 |
| 真机遥操作（VR/手柄） | $50-200 | 中-高 | 中 |
| 真机专家采集 | $200-500+ | 高 | 低 |
| 仿真（Isaac/MuJoCo/Genesis） | $1-10 | 随物理保真度 | 极高 |
| 视频预训练（YouTube 人类视频） | ~$0 | 质量低（无动作标签） | 极高 |

### 各家数据规模（截至 2025 末公开）
- **Physical Intelligence (π)**：10,000+ 小时多形态真机
- **Google RT-X Dataset**：22 家实验室、22 种机器人、100 万+ episodes
- **Tesla Optimus**：未披露，FSD 数据架构可复用 → 积累快
- **中国国家具身智能创新中心**：正在建立万亿 token 级具身数据基础设施

## 跨形态迁移

一个大难点：**A 机器人上训的模型能用在 B 机器人吗？**
- RT-X 项目证明**有**跨形态迁移性，但效果大打折扣
- Physical Intelligence 的 π0 设计时考虑了 action tokenization 跨形态兼容
- 2026 的关键问题：**跨形态是否足够好**到让"一个模型驱动所有机器人"成为产品现实

## 用 Scaling Laws 看 RFM

（参考 [Scaling Laws 框架](../../99_方法论/框架_Scaling_Laws.md)）

- LLM 的 Scaling Law 在 RFM 上**部分成立**：加数据 + 加算力 → 能力上升
- **但**：RFM 的 data scaling 远未饱和——可能一旦数据规模上来 10-100x，能力跃升明显
- **Compute overhang**：RFM 的 compute overhang 非常大（当前训练算力远小于可用算力）

这意味着 **2026-2027 可能看到 RFM 的"GPT-3 时刻"**——数据 + 算力规模突然到阈值时能力跃迁。

## 能力基准

| 基准 | 测什么 | 头部成绩（2025 末） |
|---|---|---|
| RT-2 / CALVIN | 桌面操作 | 80-95%（已见任务） |
| RLBench | 多任务仿真 | 60-80% |
| BEHAVIOR-1k (Stanford) | 家庭长时程 | 30-50% |
| LIBERO | 任务泛化 | 70-85%（已见），<30%（零样本） |

**核心 gap**：**长时程 × 零样本 × 高成功率**——三个维度同时满足仍是研究问题。

## 2026 关键变量

1. **π1（Physical Intelligence 下一代）**：是否会延续数量级能力提升 → "RFM 的 GPT-3 时刻"
2. **Gemini Robotics 的公开进展**：Google 的开源 / 发布节奏
3. **NVIDIA GR00T 的生态**：Android of robotics？
4. **中美差距**：中国具身数据基础设施是否真能缩小与 π、Figure 的差距
5. **整机厂选择**：Tesla / Figure 等整机厂是否会与"纯大脑"派（π / Skild）合并

## 延伸阅读

- Physical Intelligence blog · π0 / π0.5 技术报告
- Google DeepMind · Gemini Robotics 发布
- NVIDIA · Isaac GR00T platform
- 本站 · [具身智能技术路线](../../03_具身智能/01_技术路线/技术路线.md) · [人形格局2026](../01_市场与格局/人形格局2026.md) · [数据飞轮](数据飞轮.md) · [Physical Intelligence](../../03_具身智能/11_公司研究/Physical_Intelligence.md)
