# Waymo Driver

> 最后更新：2026-04-24
>
> Waymo Driver 是 **Waymo 的 L4 自驾技术平台**——覆盖**感知 + 规划 + 控制 + 硬件 + 高精地图** 全栈。**累计 4000 万 + 英里 L4 运营**（2025）。**是全球唯一长期大规模 L4 商业运营的系统**。公司详见 [Waymo](../11_公司研究/Waymo.md)。

## 一、产品定位

Waymo Driver = **"L4 自驾技术金标准"** —— **不单独授权**（与早期的 Waymo Via 卡车不同），而是用于 Waymo One Robotaxi 业务。**2024-2025 集成到 Jaguar I-Pace、Zeekr RT、Hyundai IONIQ 5** 等车型。

## 二、核心能力

- **Multi-sensor**：LiDAR + 摄像头 + 雷达
- **全场景 L4**：城市 + 高速（2024-10 加州批准全区）
- **High-Definition Maps**：厘米级精度
- **Remote Assistance**：远程支援（不是远程驾驶）
- **World Model + Simulation**（CarCraft / Simulator）

## 三、硬件

### 第 6 代（2024 起）
- **LiDAR 阵列**：长距 + 中距 + 短距
- **摄像头阵列**：30 +
- **雷达**
- **计算**：自研 + NVIDIA

### 车型
- **Jaguar I-Pace**（主力）
- **Zeekr RT**（2025 量产）
- **Hyundai IONIQ 5**（2025）

## 四、软件栈

- 模块化 + 端到端融合
- Google DeepMind 合作
- Gemini 类 LLM 集成研究

## 五、运营数据

- **4000 万 + 英里 L4**（累计 2025）
- **每周 15 万次付费乘车**（2025-Q1）
- **累计 300 万乘客**

## 六、安全记录

- **事故率比人类 driver 低 70%+**（Waymo 报告）
- **0 致命事故** at L4 运营
- 多起小事故（剐蹭 / 误判）

## 七、竞品对比

| 维度 | Waymo Driver | Tesla FSD | Apollo |
|---|---|---|---|
| 级别 | L4 | L2+ | L4 |
| 传感器 | LiDAR + 全面 | 纯视觉 | LiDAR + 视觉 |
| 规模 | Robotaxi 运营 | 500万车主 | 武汉 Robotaxi |
| 累计里程 | 4000万+ L4 | 数十亿 L2+ | 数千万 L4 |

## 八、信息源

- Waymo 官方 + 年度 Safety Report
- 本站 · [Waymo 公司](../11_公司研究/Waymo.md) · [Tesla FSD 产品](Tesla_FSD产品.md) · [自驾技术路线](../01_技术路线/自驾技术路线.md)
