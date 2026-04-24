# Sora（OpenAI）

> 最后更新：2026-04-24
>
> Sora 是 **OpenAI 2024-02-15 公开预览** 的 AI 视频生成模型——**1 分钟、1080p、保留物理一致性**——发布当天 Demo 视频引爆全球："AI 视频已到人眼难分"的分水岭事件。2024-12-09 正式开放给 ChatGPT Plus / Pro 用户，2025 持续迭代到 Sora 2。

## 一、产品定位

Sora 是 **"文本 / 图像 → 高保真视频"** 的旗舰级 AI 生成工具——适合**创意工作者、广告 / 营销、电影预览、社交内容创作**。相比 Runway / Midjourney 视频， Sora 的**物理一致性 + 长时长（可达 20 秒）+ 场景复杂度**是关键差异。

## 二、核心能力与架构

### 核心能力
- **文本 → 视频**：自然语言生成
- **图像 → 视频**：静图动起来
- **视频 → 视频**：风格化 / 延展
- **Storyboard**：多镜头串联
- **Remix**：修改已生成视频
- **Blend**：合并两段视频

### 技术架构
- **Diffusion Transformer（DiT）架构**
- **Spatio-temporal patches**：将视频切分为时空 patch
- **Latent Space Diffusion**：压缩 + denoise
- **训练数据**：海量视频（具体来源争议）
- **与 GPT-4o 多模态协同**：用 GPT 理解 prompt 后调度 Sora

### 规格（Sora 2）
- 分辨率：1080p（Pro 用户）
- 时长：最长 20 秒
- 帧率：30 fps
- Prompt 最长：数千字

## 三、版本与路线图

| 时间 | 里程碑 |
|---|---|
| 2024-02-15 | **Sora 首发 Demo**（限量研究预览）|
| 2024-10 | 有限 beta 开放给艺术家 |
| 2024-12-09 | **Sora 正式开放 ChatGPT Plus / Pro** |
| 2025-Q2 | Sora 故事板 + Remix |
| 2025-Q3 | **Sora 2 发布** —— 分辨率 + 时长提升 |
| 2025-Q4 | Sora Voiceover（加声音）|
| 2026-Q1 | Sora + Agent 集成 |

## 四、定价与商业化

### 访问方式
- **免费版 ChatGPT**：不能用 Sora
- **ChatGPT Plus ($20/月)**：50 次低清 + 5 次 720p
- **ChatGPT Pro ($200/月)**：500 次 + 1080p + 无水印
- **API**（2025 Q4 开放 beta）：$0.5-2/视频

### 商业表现
- 直接收入有限
- **ChatGPT Pro 订阅吸引力**：Sora 是主要 differentiator
- **估算 Sora 对 OpenAI ARR 贡献**：间接 $200-300M（Pro 订阅）

## 五、用户反馈

### 发布日社交风暴
- **2024-02-15 Twitter 刷屏**："AI 视频时代到了"
- Hollywood / 广告业震动："失业危机"讨论
- 艺术家两极反应：惊艳 vs 担忧

### 开放后实测反馈
- **物理一致性** 远胜 Runway / Pika
- **复杂场景** 处理比竞品强
- **但"人物走动" / "手部动作" 仍有 artifacts**
- **对 prompt 敏感**：好 prompt → 好输出

### 批评
- **训练数据争议**：OpenAI 没披露来源，涉嫌用 YouTube 视频未授权
- **价格高**：ChatGPT Pro $200/月才有充足配额
- **与预告片差距**：实际生成质量略低于发布 Demo
- **API 迟迟不开**：直到 2025-Q4

## 六、竞品对比

| 维度 | Sora 2 | Runway Gen-3 / 4 | Kling 1.5 / 2 | Veo 3（Google）|
|---|---|---|---|---|
| 物理一致性 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| 最长时长 | 20 秒 | 10 秒 | 10 秒 | 12 秒 |
| 分辨率 | 1080p | 1080p | 1080p | 1080p |
| 创意控制 | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| 价格 | $20-200 | $15-95 | ¥99 起 | Google One |
| API | ✅ | ✅ | ✅ | 🟡 |

## 七、使用笔记

### 最适合
1. **广告 / 营销短视频**
2. **电影 / 动画预览**
3. **社交内容创作**
4. **教育 / 培训视频**
5. **艺术创作实验**

### 不太适合
- **精细动作 / 人物对话**：仍有 artifacts
- **高度一致的多镜头故事**：需要手动拼接
- **成本敏感用户**

### 典型工作流
```
1. ChatGPT Plus / Pro 登录
2. 切换到 Sora
3. prompt: "A cinematic shot of a astronaut walking on Mars,
   golden hour, dust swirls around feet, 35mm film look"
4. 选择时长、比例、style
5. Generate → 等待 30-180 秒
6. Remix / Extend / Storyboard 迭代
```

## 八、信息源

- OpenAI Sora 官方（openai.com/sora）
- Sora Technical Report（DiT 论文）
- The Verge / Vox · Sora 发布日报道
- NYT · Sora 训练数据调查
- 本站 · [OpenAI 公司研究](../11_公司研究/OpenAI.md) · [Runway 产品研究](Runway.md) · [多模态模型进展](../02_技术前沿/多模态模型进展.md)
