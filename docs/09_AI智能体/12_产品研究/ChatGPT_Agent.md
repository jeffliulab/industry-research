# ChatGPT Agent（原 Operator）

> 最后更新：2026-04-24
>
> ChatGPT Agent 是 **OpenAI 2025-07 推出的旗舰通用 Agent**——**2025-01 以 "Operator" 名字 beta 首发**，2025-07 更名为 ChatGPT Agent 正式版并深度集成 ChatGPT。能力：**在云端虚拟浏览器里操作网站 + 深度研究 + 数据分析 + 生成报告**。**是 OpenAI 对 Claude Computer Use（2024-10）的反击**。

## 一、产品定位

ChatGPT Agent 是 **"ChatGPT Pro 订阅的旗舰功能"**——$200/月 Pro 用户独享（2025-10 起 Plus 有限额试用）。用户给 Agent 指令如"订一张机票"、"做个行业报告"、"帮我网购"，**Agent 在云端自主完成**，过程可被用户观察 + 干预。

## 二、核心能力与架构

### 两种形态
1. **Browser Agent**：云端 Chrome 实例操作网站
2. **Terminal / Code Agent**：沙箱里写代码 + 跑测试

### 核心能力
- **网站操作**：登录、搜索、填表、购物
- **Deep Research**（继承旧功能）
- **数据分析**：上传 CSV / 生成图表
- **文档处理**：PDF 阅读 + 处理
- **代码执行**：Python 沙箱

### 底层
- **CUA Model**（Computer Using Agent）：专门训练的 Vision + Action 模型
- **GPT-5**：主推理
- **o3 / o4**：深度任务
- **Integration**：Gmail / Calendar / GitHub（用户授权后）

## 三、版本与路线图

| 时间 | 里程碑 |
|---|---|
| 2025-01-23 | **Operator beta 发布**（Pro 专享）|
| 2025-02 | Deep Research 整合 |
| 2025-04 | Plus 用户有限访问 |
| 2025-07 | **更名 ChatGPT Agent 正式版** |
| 2025-09 | **整合到 ChatGPT 对话入口**（不再单独菜单）|
| 2025-Q4 | 与 GPT Store Actions 集成 |
| 2026-Q1 | 企业版 Enterprise Agent |

## 四、定价与商业化

### 访问层级
| 订阅 | 访问 |
|---|---|
| Free | ❌ |
| Plus ($20) | 有限（每月 ~40 次 Agent 任务）|
| **Pro ($200)** | **主要入口，高配额** |
| Team | 按 seat |
| Enterprise | 自定义 |

### 2025 商业影响
- **ChatGPT Pro $200 订阅的主要 differentiator**
- OpenAI 2025 ARR $4B 中 Pro 订阅贡献估算 $500M+
- Agent 功能让 Pro 留存大幅提升

## 五、用户反馈

### 正面
- **"订机票成功率不错"** —— 社交反馈
- **Deep Research 质量高**
- **UI 体验好**：实时看 Agent 操作
- **Cancel / Pause 能力** 及时

### 批评
- **速度慢**：简单任务也要 2-10 分钟
- **身份验证卡壳**：2FA / CAPTCHA 常见失败
- **不可靠**：60-70% 成功率，不够实际代替人
- **贵**：Pro $200/月 + Action 额度
- **部分网站检测拦截**：Expedia / Booking 等反 Bot 严

## 六、竞品对比

| 维度 | ChatGPT Agent | Claude Computer Use | Manus | Devin |
|---|---|---|---|---|
| 运行环境 | 云端 Chrome | 客户 API 自部署 | 云沙箱 | 云沙箱 |
| 可操作范围 | 浏览器为主 | 任意 GUI | 浏览器 + 代码 | Coding 为主 |
| 用户交互 | ChatGPT 集成 | API + 企业部署 | Web UI | Web UI |
| 成功率（粗估）| 60-70% | 50-60% | 50-65% | 30-50% |
| 价格 | Pro $200/月 | Claude API $0.02-0.05/action | $39-200/月 | $500+/月 |
| 主要用户 | ChatGPT Pro 订户 | 企业 / 开发者 | 全球 C 端 | 企业 |

## 七、使用笔记

### 最适合
1. **研究 / 报告类 JTBD**（继承 Deep Research 优势）
2. **例行网购 / 订票**
3. **数据分析 + 可视化**
4. **有 ChatGPT Pro 订阅的用户**

### 不太适合
- **时效紧急的任务**（Agent 慢）
- **私密 / 金融敏感**（云端 Agent 隐私担忧）
- **跨多 App 桌面任务**（Claude Computer Use 范围更广）

### 典型 session
```
用户：预订明天下午 LAX → SFO 经济舱最便宜机票
Agent: [打开 Google Flights]
       [搜索日期 / 路线]
       [对比 3 家航空]
       [选最便宜]
       "我找到联航 $127，需要你的账户登录吗？"
用户：[登录]
Agent: [Booking]
       [支付]  // 此步需用户介入 CVV
       "已预订，确认号 ABC123"
```

## 八、信息源

- OpenAI · ChatGPT Agent 发布博客（2025-07）
- Operator System Card（2025-01）
- YouTube · ChatGPT Agent demo 视频
- Reddit r/OpenAI · Agent 反馈
- 本站 · [Computer Use Agent](../03_通用Agent/Computer_Use_Agent.md) · [Claude Computer Use](Claude_Computer_Use.md) · [Manus](Manus.md) · [浏览器 Agent](../03_通用Agent/浏览器Agent.md)
