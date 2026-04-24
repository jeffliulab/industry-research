# BCI 技术路线：侵入式 vs 非侵入式

> 最后更新：2026-04-24
>
> 脑机接口（BCI）分 **侵入式（Invasive）** vs **非侵入式（Non-invasive）**。**侵入式**：手术植入电极（Neuralink N1、Synchron Stentrode、Blackrock Utah Array）；**非侵入式**：头戴 EEG / fNIRS（Kernel、BrainCo Focus）。**侵入式精度高但风险高，非侵入式安全但分辨率低**。

## 一句话结论

BCI 技术 2026：**侵入式 + AI 解码**取得**第一批人体商用**（Neuralink、Synchron），**非侵入式**停留在 **消费 / 增强** 领域。**真正改变瘫痪患者命运**的**只有侵入式**。

## 三条关键要点

1. **Neuralink N1（2024 首例人体试验成功）** 让侵入式 BCI 进入公众视野
2. **Synchron Stentrode（血管内 BCI）** 是介于侵入 / 非侵入的创新路径
3. **Kernel（Flux）+ BrainCo**代表消费级非侵入式

## 侵入式 BCI

### 分类
| 方式 | 代表公司 | 特点 |
|---|---|---|
| **皮层表面**（ECoG）| NeuroPace | 中等侵入 |
| **皮层穿透**（ECoG 穿）| Utah Array / Blackrock | 经典学术 |
| **Neural Lace**（网状）| Neuralink N1 | 2023-2024 FDA 批准 |
| **血管内**（stentrode）| Synchron | 无开颅 |

### 关键进展
- **2004 BrainGate 首次人类 Utah Array 植入**
- **2021-11 Stentrode FDA 批准**（首例血管内）
- **2024-01 Neuralink 首例人体**
- **2024-05 第二例 Neuralink**
- **2025 多家公司人体试验加速**

## 非侵入式 BCI

### 分类
- **EEG**（脑电）：便携 + 低成本 + 低分辨率
- **fNIRS**（近红外）：Kernel Flux
- **MEG**（脑磁）：实验室
- **fMRI**（功能磁共振）：不便携

### 代表产品
- **Kernel Flux**：头戴 fNIRS
- **BrainCo Focus**：EEG 头带
- **Muse**：消费 EEG
- **Emotiv**：研究用

## 关键技术组件

### 信号采集
- **电极数量**：从 Utah Array 64-128 → Neuralink N1 1024 → 未来 1 万 +
- **信号质量**：SNR 逐年提升
- **功耗 / 电池**：越来越低

### 信号解码（AI）
- **LSTM / Transformer**（深度学习）
- **Speech decoder**（语音解码）：2023 UCSF
- **运动解码**：手部 / 光标（Neuralink）
- **2024-2025 LLM 集成解码**

### 双向 BCI
- 不只读 + 也写（刺激）
- **精神疾病治疗**（DBS 深部脑刺激）
- **感觉反馈**

## 用 [Wardley Maps 框架](../../99_方法论/框架_Wardley_Maps.md) 看演化

| 组件 | 阶段 |
|---|---|
| 电极硬件 | **Genesis → Custom-Built**（Neuralink 量产努力）|
| 信号解码 AI | **Custom-Built** |
| 手术机器人 | Custom-Built（Neuralink）|
| 临床应用 | **Genesis**（早期）|

## 2026 关键变量

1. **Neuralink 商业化批准**（FDA）
2. **Synchron 大规模人体试验**
3. **非侵入式消费产品爆款**
4. **AI + BCI 新应用**（如沉浸式 VR）

## 我的判断

> 1. **侵入式 2026-2030 限定医疗应用**（瘫痪 / ALS / 失语）
> 2. **非侵入式** 短期商用受限（信号差）
> 3. **血管内 BCI（Synchron）** 是可能的"侵入轻量化"路径
> 4. **消费级 BCI** 2030+ 才可能
>
> **我可能错在哪里**：Kernel / BrainCo 2027-2028 消费爆款。

## 延伸阅读

- 本站 · [电极与信号](电极与信号.md) · [BCI 医疗应用](../02_应用场景/BCI医疗应用.md) · [Neuralink 公司](../11_公司研究/Neuralink.md) · [Wardley Maps 框架](../../99_方法论/框架_Wardley_Maps.md)
