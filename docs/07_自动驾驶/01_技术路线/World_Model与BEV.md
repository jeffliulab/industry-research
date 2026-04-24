# World Model 与 BEV+Transformer

> 最后更新：2026-04-24
>
> **BEV（Bird's-Eye View）+ Transformer** 是 2022-2024 自驾感知主流架构，**World Model** 是 2024-2026 新兴方向（Wayve GAIA、Sora-style 视频生成）。**两者共同重塑自驾技术栈**——从 **"摄像头 + 手工规则"** → **"端到端神经网络 + 物理世界理解"**。

## 一句话结论

**BEV + Transformer**: 已成**自驾感知事实标准**（2022-2025 主流），Tesla FSD / 小鹏 / 华为都用。**World Model**: 2024-2026 新一代方向，**用生成式模型学习物理世界**，**Wayve GAIA-1 + GAIA-2 + NVIDIA Cosmos** 是代表作品。

## 三条关键要点

1. **BEV（鸟瞰图）**：把多摄像头输入投影到 3D 鸟瞰坐标，让感知一体化
2. **Transformer for Vision**：DETR / BEVFormer / MaskFormer 系列
3. **World Model**：**生成视频 = 理解物理规律 = 更好规划**

## BEV + Transformer

### 关键论文 / 模型
- **BEVFormer**（清华 2022）：时序 BEV
- **BEVFusion**（MIT）：多传感器融合
- **PETR / StreamPETR**
- **Occupancy Network**（Tesla 2022）：3D 占据网络

### Tesla 实现
- **Vector Space**：Tesla 自研 BEV 类方案
- **Occupancy Network 2022 发布**
- **端到端 FSD v12** 继承 + 扩展

### 小鹏 / 华为 / 蔚来实现
- **XNet**（小鹏）
- **华为 ADS GOD 网络**
- **蔚来 NAD**

## World Model

### 关键模型
- **Wayve GAIA-1（2023）**：自驾视频生成
- **GAIA-2（2024）**：改进 + 推理
- **NVIDIA Cosmos（2025-01）**：物理世界 foundation model
- **Sora for Driving** 方向

### 作用
- **模拟 + 数据增强**：生成稀有场景数据
- **规划 planning**：预测"如果我这样做会怎样"
- **Safety validation**：模拟危险场景

### 对自驾的意义
- **解决长尾问题**：不可能真车遇到的情况可以模拟
- **端到端策略的 groundtruth 提供**

## 技术演化（2020-2026）

```
2020  Tesla HydraNet（多任务网络）
2022  BEVFormer + Occupancy Network
2023  Wayve GAIA-1（World Model 起步）
2024  Tesla FSD v12 端到端
2024  NVIDIA Cosmos
2025  端到端 + World Model 融合
```

## 挑战

- **计算量巨大**（World Model 视频生成）
- **Sim2Real gap**：仿真再真实也不等于真实
- **评估困难**：生成视频"看起来真实" ≠ 对决策有用

## 2026 关键变量

1. **World Model 真实商用落地**（Wayve 产品化 / NVIDIA Cosmos 生态）
2. **Tesla FSD v14 / v15** 是否采用 World Model
3. **中国厂商 World Model 追赶**

## 我的判断

> 1. **BEV + Transformer** 是 2024-2026 主流，2027-2028 会被 World Model 部分替代
> 2. **World Model** 真正价值在 **长尾 + 仿真**，不是直接感知
> 3. **Tesla + Wayve + NVIDIA 三强** 领跑 World Model
>
> **我可能错在哪里**：World Model 始终只是"demo 好看"，不进生产。

## 延伸阅读

- 本站 · [自驾技术路线](自驾技术路线.md) · [Wayve 公司](../../03_具身智能/11_公司研究/Wayve.md) · [GR00T](../../03_具身智能/12_产品研究/GR00T.md)
