# Computer Use Agent：Claude CU · Operator · 人机操作 AI

> 最后更新：2026-04-24
>
> Computer Use Agent（CU）是 Agent 家族中**最激进的形态**——AI 直接**看屏幕 + 控制鼠标键盘**，像人一样操作任意软件。**Anthropic 2024-10 首发 Claude Computer Use**，**OpenAI 2025-01 推出 Operator**，**Google 2025 Project Astra / Gemini Robotics** 紧随。**但准确率 + 速度 + 成本都仍是 2026 大挑战**。

## 一句话结论

Computer Use 是 **"最通用的 Agent 能力，但也最脆弱"** —— 理论上能操作任意软件（Figma / Excel / 任何网站 / 任何 GUI），但**在真实业务场景的成功率 30-60%**，速度慢（每操作 2-5 秒），成本高（每任务 $0.5-5）。**2026 仍是"Demo 好、生产难"阶段**。

## 三条关键要点

1. **Claude Computer Use（2024-10）是首款商用 CU**，开创"截屏 → 模型推理 → mouse/keyboard action"范式
2. **OpenAI Operator（2025-01 beta → 2025-07 正式）更聚焦浏览器，限制范围但稳定性更高**
3. **当前 CU 瓶颈：像素级交互 + 延迟 + CAPTCHA / 2FA / 隐私 / 法律边界**

## Computer Use 技术架构

### 核心循环
```
1. Screenshot 屏幕
2. LLM 推理：
   - "当前截图显示什么？"
   - "距离目标差多少？"
   - "下一步动作？"
3. Action: click(x, y) / type("...") / scroll(dy)
4. Wait + 再 screenshot
5. Loop 直到完成或放弃
```

### 关键技术组件
- **Vision 模型**：理解 GUI 截图（button、input、link）
- **坐标预测**：像素级精度（Anthropic / OpenAI 都在此下功夫）
- **Action 抽象**：click / type / scroll / keyboard shortcuts
- **等待策略**：页面加载时机判断
- **错误恢复**：识别"不正常"状态并纠偏

## 主流产品对比

### Claude Computer Use（Anthropic）
- **发布**：2024-10-22
- **形态**：Anthropic API 提供 `computer` 工具
- **能力**：任意 GUI 操作（不限浏览器）
- **精度**：屏幕坐标级（~10-20px 误差）
- **速度**：每 action ~3-5 秒
- **定价**：按 Claude API tokens 算（贵）
- **用例**：填表单、跨 App 数据搬运、RPA 替代

### OpenAI Operator（ChatGPT Agent）
- **发布**：2025-01-23 beta，2025-07 正式版改名 "ChatGPT Agent"
- **形态**：ChatGPT Pro 特权，云端虚拟浏览器
- **能力**：**仅限浏览器**（Chrome 实例云端运行）
- **精度**：CUA（Computer Using Agent）模型专训
- **速度**：每 action ~2-4 秒
- **定价**：Pro $200/月含 + Action 限额
- **用例**：订机票、网购、预约、表单填写

### Google Project Mariner（2024-12 实验）
- **形态**：Chrome 扩展 + Gemini
- **能力**：浏览器操作
- **状态**：Beta，小范围用户

### Browser Use（开源框架）
- **形态**：开源 Python 库
- **支持模型**：GPT-4o / Claude / Gemini
- **可自托管**
- **开发者友好**

### OSWorld / AndroidWorld（研究基准）
- 不是产品，是 benchmark
- Ubuntu / Android 任务集

## 精度对比（2026-Q1）

| 产品 | 基准任务成功率 |
|---|---|
| Claude Computer Use（Opus 4）| **~55%**（OSWorld）|
| OpenAI Operator / ChatGPT Agent | ~45%（浏览器限定）|
| Gemini Project Mariner | ~35%（浏览器）|
| **Human baseline** | **~80%** |

**观察**：CU Agent **仍未追平人类**，差距还大。

## 典型应用场景

### 场景 1 · RPA（机器人流程自动化）替代
- 传统 RPA（UiPath / Automation Anywhere）靠规则脚本
- CU Agent 靠模型适应变化
- **优势**：UI 变了不用改脚本
- **劣势**：不稳定 + 慢 + 贵

### 场景 2 · 个人 Assistant
- 替用户订餐 / 订机票 / 预约医生
- ChatGPT Operator 主推方向
- **挑战**：身份验证、支付、隐私

### 场景 3 · 数据搬运
- 从 A 系统读 → 改 → 写 B 系统
- 企业内部 legacy 系统整合
- Claude CU 主推 B 端场景

### 场景 4 · 测试自动化
- QA 测试 UI 流程
- 类似 Selenium 但 AI 驱动
- 新兴用例

## 用 [颠覆创新 框架](../../99_方法论/框架_颠覆创新.md) 看 CU 对 RPA 的颠覆

传统 RPA（UiPath $10B+ 市值）的 JTBD：
- "让非开发者自动化 UI 流程"
- 依赖 record-replay 或可视化脚本

CU Agent 的 JTBD：
- 一样的目标，但
- 不需要录制，自然语言指令
- 抗 UI 变化

**潜在颠覆路径**：
- 2026-2028 CU 稳定性上升
- **UiPath 市值受冲击**（2024 已从 $40B 跌到 $10B）
- 可能被 Anthropic / OpenAI Agent 产品吞并

## 用 [Wardley Maps 框架](../../99_方法论/框架_Wardley_Maps.md) 看 CU 演化

| 组件 | 2024 | 2026 |
|---|---|---|
| Screenshot 理解 | Custom-Built | **Product**（视觉模型成熟）|
| 坐标预测 | Genesis | Custom-Built（在改善）|
| Action 抽象 | Custom-Built | **Product**（共通接口）|
| 错误恢复 | Genesis | Genesis（仍是难题）|
| 商业包装 | Genesis | Custom-Built（Claude CU / Operator）|

**战略洞察**：Screenshot 理解商品化后，下一个瓶颈是**错误恢复 + 长时程可靠性**——这是 2026-2028 研究重点。

## 关键挑战

### 1. **CAPTCHA / 2FA / Bot 防御**
- 越来越多网站识别并拦截 AI Agent
- 道德 / 法律争议（OpenAI 2024 被曝让 CU Agent "假装视障" 通过 CAPTCHA）

### 2. **速度**
- 每 action 2-5 秒
- 10 步任务 = 20-50 秒（人类 5-10 秒）
- **对实时交互极不友好**

### 3. **成本**
- 每次 Screenshot → Vision 推理 = tokens
- Opus 4 + Vision 每 action ~$0.02-0.05
- 100 步任务 = $2-5
- **对大规模商用偏贵**

### 4. **准确率**
- 坐标偏差 / 识别错位置
- 长时程 task 误差累积

### 5. **隐私 + 法律**
- Agent 看到用户屏幕 → 敏感信息
- 自动登录 / 支付 / 法律文件签署 的责任划分

## 2026 关键变量

1. **OpenAI Operator 主流化**：ChatGPT Pro 中 Operator 使用率
2. **企业 CU 落地**：有无 Fortune 500 Case Study
3. **新 benchmark OSWorld v2 / VisualAgentBench**：标准化评测
4. **CAPTCHA 网站 vs AI 的博弈**：Cloudflare / Google reCAPTCHA 对抗升级
5. **CU 与手机 / 物联网扩展**：Android / iOS CU Agent

## 我的判断

> **我的看法**：
>
> 1. **Computer Use 是 Agent 的终极形态，但 2026-2027 仍是"半成品"**：Demo 好看、生产难用
> 2. **OpenAI Operator 路线更务实**（限定浏览器）比 Claude CU 通用型更容易落地
> 3. **RPA 行业（UiPath）未来 5 年会被挤压** 但不会消失——Legacy 系统 + 合规场景仍需要
> 4. **CU 的 killer app 可能是 B2B 数据搬运**，而非 C 端助手
> 5. **2027-2028 CU 会与 手机 OS 深度集成**（iOS / Android 自带 AI Agent 接管 App）
>
> **我可能错在哪里**：
> - Claude CU 2026 出现突破，成功率跳到 80%+，成为主流
> - 监管（欧盟）快速限制 Agent 操作第三方服务，CU 被法律锁死
> - 手机厂商（Apple / Google）做得比 Anthropic / OpenAI 更好

## 延伸阅读

- Anthropic · Claude Computer Use 发布博客（2024-10）
- OpenAI · Operator System Card
- 本站 · [ChatGPT Agent（Operator）](../12_产品研究/ChatGPT_Agent.md) · [Claude Computer Use](../12_产品研究/Claude_Computer_Use.md) · [浏览器 Agent](浏览器Agent.md) · [Deep Research 产品](Deep_Research产品.md) · [颠覆创新 框架](../../99_方法论/框架_颠覆创新.md)
