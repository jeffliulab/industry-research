# Runway

> 最后更新：2026-04-24
>
> Runway 是 **AI 视频生成领域的先行者**——2018 年由 Cristóbal Valenzuela、Anastasis Germanidis、Alejandro Matamala（NYU Tisch 研究生）在纽约创立，2023 年因 **Gen-1 / Gen-2** 视频模型走红，2024-06 **Gen-3 Alpha** 达到 Sora 同级别水平。2024 估值 $3B，**Stable Diffusion 原始论文共同作者之一**（Patrick Esser 曾在此工作）。

## 一、产品定位

Runway 是 **"创意人专业 AI 视频工作站"**——不像 Sora 那样追求"一键生成"，而是提供**完整视频编辑 + AI 生成 + 运动控制 + 风格化** 的专业工作流。主要用户：**广告创意人、独立导演、艺术家、短视频制作者**。与 Adobe Premiere / After Effects 互补（Adobe 也投资 Runway）。

## 二、核心能力与架构

### 核心能力
- **Gen-3 Alpha / Gen-4**：文本/图像 → 视频
- **Motion Brush**：画出运动区域 + 指向
- **Director Mode**：镜头语言（pan / zoom / dolly）
- **Lip Sync**：对口型
- **Green Screen**：AI 抠图
- **Infinite Image / Video Canvas**：无限画布扩展
- **Inpainting / Editing**：局部修改
- **Characters**：一致角色生成

### 技术架构
- Diffusion 模型（类似 Stable Diffusion）
- **世界模型**方向：研究"General World Models"
- Gen-3 / 4 架构接近 DiT
- 训练数据：自有许可素材 + 公开数据

### 规格（Gen-4，2025）
- 分辨率：1080p
- 最长：10 秒 + 扩展
- 帧率：24 fps（电影级）
- 一致角色 / 场景

## 三、版本与路线图

| 时间 | 里程碑 |
|---|---|
| 2018 | Runway 成立 |
| 2021 | Runway + Stability AI + LMU 共研 Stable Diffusion |
| 2023-02 | Gen-1（视频 → 视频）|
| 2023-06 | **Gen-2**（文字 → 视频，首个商业化 AI 视频）|
| 2023-12 | C 轮 $141M，估值 $1.5B |
| 2024-06 | **Gen-3 Alpha** 发布 |
| 2024-12 | D 轮 $308M，估值 $3B |
| 2025-Q2 | Gen-4 + 一致角色 |
| 2025-Q3 | Video-to-Video 专业模式 |
| 2025-Q4 | 企业版（Hollywood 合作）|

## 四、定价与商业化

### 订阅
| 层级 | 月费 | 配额 |
|---|---|---|
| **Free** | $0 | 125 credits 一次性 |
| **Standard** | $15 | 625 credits / 月 |
| **Pro** | $35 | 2250 credits |
| **Unlimited** | $95 | 无限慢速 + 2250 快速 |
| **Enterprise** | 自定义 | 商业 / 合规 |

### 商业化
- **2025 ARR 估算 ~$100-150M**
- 大部分来自 Pro / Enterprise
- Adobe / 迪士尼 等企业合作
- **Hollywood 大工作室试用**：狮门影业、A24 等

## 五、用户反馈

### 创意社区
- **"Gen-3 质量终于和 Sora 齐平"**
- **Director Mode 被 Hollywood 喜爱**
- **一致角色（Gen-4）** 是关键功能
- 独立电影节出现大量 Runway 作品

### 批评
- **相比 Sora 时长短**（10 秒 vs 20 秒）
- **控制细节需要技术**（不如 Sora 傻瓜）
- **价格对个人昂贵**（Unlimited $95/月）
- **2024-Q3 被 Sora 正式开放后用户部分流失**

### 版权诉讼
- 2024-07 Runway 被 NYT 调查涉嫌训练数据用 YouTube 视频
- 2025-Q2 被索尼音乐等起诉

## 六、竞品对比

| 维度 | Runway Gen-4 | Sora 2 | Kling 1.5 | Luma Dream Machine |
|---|---|---|---|---|
| 质量 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 时长 | 10 秒 + 扩展 | 20 秒 | 10 秒 | 10 秒 |
| 创意控制 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| 一致角色 | ⭐⭐⭐⭐⭐（Gen-4）| ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| 价格 | $15-95 | $20-200 | ¥99 起 | $10-95 |
| 专业工作流 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| API | ✅ | ✅（2025 Q4）| ✅ | ✅ |

## 七、使用笔记

### 最适合
1. **专业视频制作人** 的工作流
2. **广告 / 音乐视频 / 短片**
3. **需要细粒度控制**（motion brush / director mode）
4. **一致角色视频**（Gen-4）
5. **教育 / 企业培训**

### 不太适合
- **快速一键生成**（Sora 更好）
- **初学者 / 爱好者**：Luma / Pika 更简单
- **社交短内容**：HeyGen / Opus Clip 更快

### 典型工作流
```
1. 上传参考图（character）
2. Gen-4 生成一致角色
3. 多段视频生成不同场景
4. Director Mode 指定镜头
5. 导出到 Premiere / After Effects 后期
```

## 八、信息源

- Runway 官方（runwayml.com）
- Cristóbal Valenzuela 访谈 · a16z / Lex Fridman
- Hollywood Reporter · Runway 影视合作报道
- NYT · 训练数据调查
- 本站 · [Sora 产品研究](Sora.md) · [Midjourney 产品研究](Midjourney.md) · [多模态模型进展](../02_技术前沿/多模态模型进展.md)
