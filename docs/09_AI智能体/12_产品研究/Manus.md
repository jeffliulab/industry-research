# Manus

> 最后更新：2026-04-24
>
> Manus 是 **2025-03-06 发布的通用 AI Agent 产品**——**中国公司（Butterfly Effect / 蝴蝶效应）出品，全球爆款**。发布当日社交媒体疯传，**申请 beta 等待列表破 200 万**。能力：**给一个自然语言任务，Manus 在云端沙箱里自主完成**（研究 / 编程 / 数据分析 / 报告）。**被称为"中国 Devin / 中国 Operator"**。公司详见 [Butterfly Effect 公司研究](../11_公司研究/Butterfly_Effect_Manus.md)。

## 一、产品定位

Manus 是 **"通用 AI 助手 Agent"**——**不限于 Coding**（区别于 Devin）、**不限于浏览器**（区别于 ChatGPT Operator），介于两者之间。**给任意任务，它都尝试做完**：研究报告、编程、数据分析、网站生成、旅行规划。**C 端定价，面向专业知识工作者**。

## 二、核心能力与架构

### 核心能力
- **Research**：深度研究 + 报告生成（30+ 页）
- **Coding**：Web 应用开发 + 部署
- **Data Analysis**：CSV / Excel 分析 + 可视化
- **Browser Automation**：网站填表、订票、搜索
- **File Processing**：PDF、Word、Excel
- **Multi-turn**：长对话 + 记忆

### 底层
- **主要调用 Claude 3.5 Sonnet / Claude 4 Sonnet**（2025 初期）
- 也接 DeepSeek R1 + GPT-4o
- **自研 Agent orchestration 层**
- **云端 Ubuntu 沙箱**

### Agent Workflow
```
用户任务 → 规划 Agent 拆解 →
├── 执行 Agent 1（搜索）
├── 执行 Agent 2（代码）
└── 执行 Agent 3（文档）
    ↓
聚合 Agent → 最终输出
```

## 三、版本与路线图

| 时间 | 里程碑 |
|---|---|
| 2025-03-06 | **Manus 首发**（邀请码模式）|
| 2025-03-07 | 等待列表破 200 万，社交刷屏 |
| 2025-04 | 开放更多用户 + 定价稳定 |
| 2025-08 | 多语言支持（英 / 日 / 韩）|
| 2025-10 | Pro 版企业功能 |
| 2025-Q4 | iOS App 上线 |
| 2026-Q1 | 持续迭代，新 "Manus 2.0" 传言 |

## 四、定价与商业化

### 订阅
| 层级 | 月费 | 配额 |
|---|---|---|
| **Free** | $0 | 试用（~3 次任务）|
| **Starter** | $39 | 日常使用 |
| **Pro** | $199 | 深度任务 + 多 Agent 并行 |
| **Business** | $500+ | 企业功能 |

### 收入估算
- 2025 ARR ~$20-40M（推测）
- 海外 ~60%，国内 ~40%
- 用户数：~50-100 万 Paid

### 挑战
- **token 成本**：每 Agent 任务 $0.5-5
- **国际汇款合规**
- **获客成本上升**：免费爆款之后

## 五、用户反馈

### 正面
- **"中国 AI 能做全球产品了"**
- **研究报告质量好**：Deep Research 类任务
- **UI 体验顺畅**
- **价格比 Devin / Operator 低**

### 批评
- **套壳 Claude"** 疑虑
- **长任务不稳定**：30-50% 失败
- **地缘政治风险**：美国用户担心数据
- **产品深度不够**：覆盖广但不精

### 社交反应
- 2025-03 Twitter / 微信 / TikTok 疯传
- 中国团队做出全球产品的骄傲情绪
- 硅谷开发者混杂认可 + 警惕

## 六、竞品对比

| 维度 | Manus | ChatGPT Agent | Devin | Perplexity DR |
|---|---|---|---|---|
| 任务范围 | 通用 | 浏览器为主 | Coding 为主 | 研究为主 |
| 价格 | $39-200 | $200 | $500+ | $20 |
| 中文 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ |
| 成功率 | 50-65% | 60-70% | 30-50% | 80%+（研究）|
| 底层模型 | Claude + 多 | GPT-5 | Multi | Multi |
| 地理 | 全球 | 全球 | 主要美国 | 全球 |

## 七、使用笔记

### 最适合
1. **中文用户**的通用 Agent 需求
2. **研究 / 报告 / 数据分析**中等复杂度任务
3. **"帮我做个 Web 原型"** 类创作任务
4. **替代 ChatGPT Plus + Perplexity Pro 双订阅**

### 不太适合
- **深度 Coding 项目**（Claude Code / Devin 强）
- **企业敏感数据**（云沙箱 + 数据主权担忧）
- **实时快速任务**（Manus 慢）

### 典型 session
```
用户：帮我写一份"2026 中国锂电池产业研报"，20 页，带图表
Manus: [规划：10 个子问题]
       [搜索：中国锂电池生产数据、CATL / BYD 财报、欧洲进口...]
       [执行多个研究 sub-agent]
       [生成 Python 图表]
       [汇总成报告]
       [2 小时后交付 PDF]
```

## 八、信息源

- Manus 官方（manus.im）
- 肖弘（Yichao Ji）访谈 · 晚点 / 36氪
- TechCrunch · 2025-03 全球报道
- X / Reddit · Manus 评测帖
- 本站 · [Butterfly Effect 公司研究](../11_公司研究/Butterfly_Effect_Manus.md) · [Deep Research 产品](../03_通用Agent/Deep_Research产品.md) · [Devin](Devin.md) · [ChatGPT Agent](ChatGPT_Agent.md)
