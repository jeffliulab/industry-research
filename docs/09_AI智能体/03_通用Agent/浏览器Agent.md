# 浏览器 Agent：Browser Use · Comet · Dia · AI 浏览器重塑

> 最后更新：2026-04-24
>
> 浏览器是 **Agent 时代的主战场之一**——95% 的企业应用是 Web 应用，Agent 能操作浏览器就能替代大量 SaaS 任务。2025 年三条路线并行：**(a) Agent 操作现有浏览器**（ChatGPT Operator）、**(b) AI 原生新浏览器**（Arc / Dia / Comet）、**(c) 开源浏览器 Agent 框架**（Browser Use）。

## 一句话结论

**浏览器 Agent 是 Computer Use 的"收缩版"** —— 只管浏览器不管桌面，**牺牲通用性换稳定性**。三条路线中，**Browser Use 开源方案最灵活**、**ChatGPT Operator 商业化最领先**、**Arc / Dia / Comet 浏览器** 企图重新定义浏览入口但**规模仍小**。

## 三条关键要点

1. **ChatGPT Operator → ChatGPT Agent（2025-07）**：OpenAI 旗舰浏览器 Agent，云端 Chrome 实例
2. **Browser Use 是 2024-2025 GitHub 最快成长 Agent 库**：开源、支持多模型、企业可自托管
3. **"AI 原生浏览器"** 虽然声量大（Arc / Dia / Perplexity Comet）但**用户规模仍不足 Chrome / Safari 的 1%**

## 浏览器 Agent 的三条路线

### 路线 1 · 基于现有浏览器的 Agent
**代表**：ChatGPT Operator、Claude Computer Use（浏览器部分）、Browser Use、Google Project Mariner
**方式**：
- 启动 Chromium / Playwright 实例
- 截图 → 模型推理 → 鼠标键盘操作
- 或 DOM 解析 → 点击 / 填表
**优势**：兼容一切网站
**劣势**：速度慢 + 可能被 Bot 检测

### 路线 2 · AI 原生浏览器
**代表**：Arc（The Browser Company）、Dia、Perplexity Comet、Opera AI Browser
**方式**：
- 重新设计浏览器 UI + AI 集成
- 侧边栏 AI / 自动摘要 / Agent 任务
**优势**：深度集成、体验顺畅
**劣势**：用户迁移成本高、规模小

### 路线 3 · 开发者框架（自建浏览器 Agent）
**代表**：Browser Use、Playwright + AI、Stagehand
**方式**：
- 提供 Python/JS SDK
- 支持任意 LLM 后端
- 企业可自托管
**优势**：灵活、成本可控
**劣势**：需要工程投入

## 主要产品详解

### ChatGPT Operator / Agent（OpenAI）
- **发布**：2025-01 Beta，2025-07 正式改名 Agent
- **核心技术**：CUA 模型（Computer Using Agent）+ GPT-5
- **形态**：ChatGPT Pro 内的云端 Chrome Agent
- **典型任务**：订机票 / 网购 / 填表 / 预约
- **成功率**：60-70%（浏览器任务）
- **价格**：Pro $200/月，有 Action 限额

### Perplexity Comet
- **发布**：2025-Q1
- **形态**：Chromium fork + Perplexity 深度集成
- **特色**：**每个 Tab 带 AI 摘要 + Agent 侧边栏**
- **策略**：让用户换浏览器 → 锁定 Perplexity 使用

### The Browser Company · Arc / Dia
- **Arc**：2024-2025 小众但狂热粉丝
- **Dia**：2025 新产品，更 AI 原生
- **状态**：MAU 几百万级，规模远小于 Chrome

### Browser Use（开源）
- **GitHub**：github.com/browser-use/browser-use
- **Stars**：30k+（2026-Q1）
- **语言**：Python
- **支持模型**：GPT / Claude / Gemini / DeepSeek / 任意 LLM
- **特色**：**企业自托管 + 定制化强**

### Stagehand（Browserbase 出品）
- 专注企业 Web Agent 自动化
- Browserbase 公司 2024 估值 $40M+

## 浏览器 Agent 的六个关键挑战

### 1. Bot 检测
- Cloudflare / Akamai / reCAPTCHA 升级
- 2025 已能识别 95%+ 自动浏览器流量
- Agent 公司 vs Bot 防御 的长期对抗

### 2. 身份验证 / 支付
- 2FA / OTP 输入
- 支付 CVV / 指纹
- 用户必须介入，Agent 不能完全自主

### 3. 速度
- 每 action 2-5 秒
- 10 步任务 = 30-60 秒
- 比人类慢 3-5x

### 4. 成本
- 云端 Chrome 实例 + LLM tokens
- ChatGPT Operator 每任务 $0.5-3
- 大规模使用成本不菲

### 5. 法律边界
- Agent 以"谁"的身份操作？
- 违反 Terms of Service 的责任
- 爬虫 vs Agent 的法律区分

### 6. 隐私
- Agent 看到屏幕 / Cookie / 登录状态
- 用户数据保护
- OpenAI 2025-Q1 在 Operator 中强制显示"Agent 正在看你的屏幕"提示

## 用 [Aggregation Theory 框架](../../99_方法论/框架_聚合理论.md) 看浏览器 Agent

传统浏览器的 Aggregation：**Chrome + Google Search** 聚合网页流量。

浏览器 Agent 改变 Aggregation：
- **AI 成为新的流量聚合点**
- 用户不再点 Google → 点网站，而是**"让 Agent 替我做"**
- 网站变成 Agent 的后端，流量逻辑完全改变

**战略影响**：
- **Google 搜索广告模式受威胁**
- **网站变成 API**（而不是面向人的 UI）
- **Perplexity / OpenAI 有机会在"Agent 入口"层成为新 Aggregator**

## 用 [7 Powers 框架](../../99_方法论/框架_7_Powers.md) 看各路线

| Power | ChatGPT Operator | Comet / Dia | Browser Use |
|---|---|---|---|
| Cornered Resource | ⭐⭐⭐⭐（OpenAI 模型）| ⭐（产品设计）| ⭐（开源社区）|
| Network Economies | ⭐⭐⭐⭐（ChatGPT 生态）| ⭐⭐（Perplexity）| ⭐⭐⭐（贡献者）|
| Switching Costs | ⭐⭐（订阅）| ⭐⭐⭐（浏览器换不易）| ⭐⭐（工程投入）|
| Scale Economies | ⭐⭐⭐⭐（OpenAI Scale）| ⭐⭐ | ⭐ |
| Branding | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

## 2026 关键变量

1. **Google Chrome 官方 Agent 功能**：Chrome 2026 Q2 测试 "AI Mode"
2. **Perplexity Comet MAU**：能否突破 500 万
3. **Apple / iOS 浏览器 Agent**：Safari AI Mode 2026 计划
4. **Bot 检测军备竞赛**：Cloudflare 新一代防御
5. **欧盟 DMA 对 Agent 浏览器的新规**：公平竞争 / 数据保护

## 我的判断

> **我的看法**：
>
> 1. **浏览器 Agent 2026 处于"Demo 到规模"的关键跃迁**：ChatGPT Agent / Comet 是风向标
> 2. **AI 原生浏览器（Arc / Dia / Comet）短期不会取代 Chrome**，长期可能形成 5-10% 小众市场
> 3. **Browser Use 成为开源 Agent 开发事实标准**：类似 Flask 在 Web 开发地位
> 4. **Chrome + Google AI 反击** 是最大变数：Chrome 60%+ 市占率 + Gemini 集成能瞬间改变格局
> 5. **浏览器 Agent 最大受益者是 OpenAI / Perplexity**，最大受损者可能是 Google 搜索广告
>
> **我可能错在哪里**：
> - Chrome AI Mode 出现"ChatGPT 时刻"，一夜主流化
> - 浏览器 Agent 始终解决不了 Bot 检测，生产化失败
> - Apple Safari + iPhone AI 后发先至

## 延伸阅读

- OpenAI · ChatGPT Agent / Operator 文档
- Browser Use GitHub（browser-use/browser-use）
- The Browser Company · Arc / Dia 博客
- Perplexity · Comet 发布
- 本站 · [ChatGPT Agent](../12_产品研究/ChatGPT_Agent.md) · [Computer Use Agent](Computer_Use_Agent.md) · [Aggregation Theory 框架](../../99_方法论/框架_聚合理论.md)
