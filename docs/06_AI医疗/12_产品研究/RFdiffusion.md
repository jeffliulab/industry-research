# RFdiffusion

> 最后更新：2026-04-24
>
> RFdiffusion 是 **Baker Lab（University of Washington）2023 发布的从头蛋白设计模型**——**扩散模型在蛋白结构空间的成功应用**。2024-10 **David Baker 获诺贝尔化学奖**（与 AlphaFold 团队共享）。**开源 + 免费**让全球实验室都能设计新蛋白。

## 一、产品定位

RFdiffusion = **"从头蛋白设计开源黄金工具"** —— 与 AlphaFold 的**"结构预测"**互补：**AlphaFold 预测已知蛋白结构，RFdiffusion 设计新蛋白**。**开源 + Github 500+ stars** 是学术社区标配。

## 二、核心能力

- **给定约束**（binding site / symmetry / 骨架）
- **扩散模型生成新蛋白结构**
- **与 ProteinMPNN 组合**：结构 → 序列
- **支持多种设计任务**：binder、enzyme、scaffold

### 典型用例
- 设计 **新抗体**
- 设计 **酶**（绿色化学）
- 设计 **疫苗 epitope**

## 三、版本演化

| 时间 | 版本 |
|---|---|
| 2022 | RoseTTAFold（结构预测）|
| 2023-07 | **RFdiffusion 发布**（Science）|
| 2023 | ProteinMPNN 配套 |
| 2024-10 | **David Baker 诺贝尔奖** |
| 2025 | 持续扩展 |

## 四、访问

- **开源**（GitHub: RosettaCommons / RFdiffusion）
- **学术免费 + 商业需授权**
- **Generate Biomedicines 等公司商业化版本**

## 五、用户反馈

- **全球生物实验室标配**
- **扩散模型 + 蛋白**是 **AI 生物学标杆论文**
- 社区：Rosetta Commons + 蛋白设计社群

## 六、竞品 / 相关

| 工具 | 机构 | 特点 |
|---|---|---|
| **RFdiffusion** | Baker Lab | 开源标杆 |
| **Chroma** | Generate Biomed | 商业化 |
| **AlphaFold Multimer** | DeepMind | 复合体预测 |
| **ProteinMPNN** | Baker Lab | 序列设计（配套）|

## 七、使用笔记

- **Python + PyTorch + GPU** 依赖
- **运行成本低**（相对训练大模型）

## 八、信息源

- Baker Lab · Science 论文 2023
- GitHub: RosettaCommons/RFdiffusion
- 诺奖 2024-10
- 本站 · [AlphaFold](AlphaFold.md) · [蛋白质设计](../02_药物发现与合成生物/蛋白质设计.md) · [Generate_Biomedicines](../11_公司研究/Generate_Biomedicines.md)
