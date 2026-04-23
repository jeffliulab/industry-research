# Sim2Real 与仿真平台：Isaac · MuJoCo · Genesis

> 最后更新：2026-04-23
>
> 仿真是具身智能的"训练加速器"。问题是：**在仿真里 work 的模型，在真机上会不会 work（Sim-to-Real gap）**？2024-2025 年新一代仿真平台（Genesis、MuJoCo MJX）+ 物理求解器改进让这个 gap 显著缩小，但"完全消除"仍是研究问题。

## 一句话结论

主流仿真平台分三派：**NVIDIA Isaac**（GPU 加速 + 商业生态）、**MuJoCo**（学术主流）、**Genesis**（2024 CMU 开源，性能极高但生态尚早）。**Sim2Real gap 从 50% 缩到 10-15%**，但精细操作仍有差距。

## 三条关键要点

1. **训练成本差异巨大**：真机遥操作 $50-500/小时，仿真 $1-10/小时 → **50-100x 性价比**，但质量不同
2. **Sim2Real gap 2024-2025 显著缩小**：物理求解器改进 + domain randomization + photo-realistic 渲染共同改善
3. **Genesis（CMU 2024 开源）性能惊人**：RTX 4090 单卡跑 43M FPS，是 MuJoCo 100x+

## 主要仿真平台

### NVIDIA Isaac Sim / Isaac Lab
- **Isaac Sim**：物理真实性好，photo-realistic 渲染，基于 Omniverse
- **Isaac Lab**：强化学习导向的轻量级 fork
- **硬件亲和**：GPU 加速，适合大规模并行训练
- **生态**：多数商业机器人公司（Agility / Boston Dynamics / Figure）在用
- **缺点**：学习曲线陡；Omniverse 依赖

### MuJoCo（DeepMind 维护，2021 开源）
- 传统 RL 研究的默认平台
- **MuJoCo MJX**：2024 年推出 GPU 加速版，追赶 Isaac 性能
- **强项**：物理求解器精度高、代码简洁、学术友好
- **弱项**：视觉渲染不如 Isaac

### Genesis（CMU 2024 开源）
- 2024-12 开源，学术界震动
- **性能**：单 RTX 4090 跑 43M FPS（MuJoCo 的 100x+）
- **特点**：统一物理 + 视觉 + 可微分模拟
- **现状**：生态尚年轻，但增长极快

### 其他
- **Meta Habitat**：室内家庭场景导航仿真
- **Unity ML-Agents + Unreal Engine**：游戏引擎改造
- **PyBullet**：轻量级、教学友好
- **MuJoCo XLA (MJX)**：JAX 版，高度并行
- **Drake**（丰田研究院）：机器人操控

## Sim2Real 技术

### 核心挑战
**真机与仿真的差异**：
- 接触力学（接触、摩擦、变形）
- 传感器噪声
- 执行器延迟与非线性
- 光照、材质、遮挡

### 缩小 gap 的方法

1. **Domain Randomization**：仿真里随机化光照、材质、摩擦等参数，强制模型学泛化
2. **System Identification**：精确测量真机参数，写入仿真
3. **Photo-realistic 渲染**：视觉接近真机
4. **Differentiable Simulation**：可微分物理 → 梯度驱动系统辨识
5. **Real-to-Sim-to-Real**：先用真机数据改进仿真，再用改良仿真训练

### 2024-2025 新进展
- Genesis 的可微分物理一下子降低了 Sim2Real 工作量
- Anthropic / Figure 的"Real-to-Sim"工具链让"看一段真机视频 → 构造仿真场景"成为现实

## 用 Wardley Maps 看仿真生态

（参考 [Wardley Maps](../../99_方法论/框架_Wardley_Maps.md)）

| 组件 | 演化阶段 |
|---|---|
| 基础物理求解器 | Commodity（Bullet / MuJoCo 开源） |
| 机器人仿真平台 | **Product → Commodity**（Isaac 付费，Genesis / MuJoCo 免费）|
| 可微分仿真 | **Custom-Built**（Genesis 引领） |
| Real-to-Sim pipeline | **Genesis**（探索期）|
| 具身基础模型 | Genesis |

## 数据工作流

一个典型 RFM 训练流程：

```
1. 采集 1000 小时真机遥操作数据（昂贵但高质量）
    ↓
2. 在仿真里 Domain Randomize 放大 100x → 10 万小时等效数据
    ↓
3. 训练 VLA / World Model
    ↓
4. 少量真机 fine-tune 关闭 Sim2Real gap
    ↓
5. 部署到真机
```

详见 [具身智能数据采集](数据采集.md)。

## 各家策略

- **Physical Intelligence (π)**：以真机数据为主（10k+ 小时），仿真辅助。π0/π0.5 主要在真机上训练
- **NVIDIA GR00T**：重仓 Isaac 仿真 + 合成数据，目标是"海量仿真 + 少量真机"
- **Tesla Optimus**：复用 FSD 世界模型 + 工厂场景仿真
- **Skild AI**：多源数据（仿真 + 真机 + 视频）
- **DeepMind RT 系列**：跨机器人数据集 RT-X + 仿真混合

## 2026 关键变量

1. **Genesis 生态成熟**：能不能成为 Isaac 的开源替代
2. **Sim2Real gap 能否再降一半**：15% → 7-8% 意味着完全仿真训练的商业可用
3. **视频预训练 + 具身 fine-tune**：能否把 YouTube 海量视频转成具身训练数据
4. **Isaac Lab / Isaac Sim 定价策略**：NVIDIA 是否会加速商品化还是继续提价

## 延伸阅读

- Genesis 开源仓库
- NVIDIA Isaac 文档
- DeepMind MuJoCo 论文
- 本站 · [具身智能技术路线](../01_技术路线/技术路线.md) · [数据采集](数据采集.md) · [Physical Intelligence](../11_公司研究/Physical_Intelligence.md)
