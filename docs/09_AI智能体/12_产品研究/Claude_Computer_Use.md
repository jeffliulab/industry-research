# Claude Computer Use

> 最后更新：2026-04-24
>
> Claude Computer Use（CU）是 **Anthropic 2024-10-22 首发的"操作电脑" Agent 能力**——Claude **直接看屏幕 + 控制鼠标键盘** 操作任意软件。作为 **API-first 产品**（不是独立应用），面向开发者 / 企业集成。**是 AI 历史上第一个商用级 Computer Use 产品**，比 OpenAI Operator 早 3 个月。

## 一、产品定位

Claude Computer Use 是 **"Claude 的 GUI 操作能力"**——不是消费产品，是 **API 能力**：开发者通过 Anthropic API 调用 `computer` tool，让 Claude 操作自己或云端的电脑。**定位 B 端 + 技术开发者**，**比 Operator / ChatGPT Agent 更通用**（不限于浏览器）。

## 二、核心能力与架构

### 核心能力
- **Screenshot 屏幕**
- **Click / type / scroll / key 动作**
- **任意软件**（不限浏览器）：VS Code、Figma、Excel、Chrome、Terminal、任何 Native App
- **坐标级精度**：~10-20px 误差
- **Multi-turn 循环**：看 → 动作 → 看 → 动作

### 底层
- **Claude 3.5 Sonnet V2**（首发，2024-10）
- **Claude 4 Opus / Sonnet**（2025 升级）
- **Vision 模型** 专训坐标预测
- **Action API**：click / type / scroll / key

### API 调用示例
```python
response = anthropic.messages.create(
    model="claude-opus-4",
    tools=[{"type": "computer_20250115", "name": "computer"}],
    messages=[{"role": "user", "content": "打开 Slack 给 @alice 发消息"}]
)
# Claude 返回 tool use: 
#   {"action": "screenshot"}
#   {"action": "left_click", "coordinate": [450, 300]}
```

## 三、版本与路线图

| 时间 | 里程碑 |
|---|---|
| 2024-10-22 | **Claude Computer Use 首发**（Claude 3.5 Sonnet V2）|
| 2024-12 | 企业客户 beta 扩大 |
| 2025-02 | Claude 3.7 + Extended Thinking 集成 |
| 2025-Q3 | **Claude 4 Opus + CU**：精度 + 速度提升 |
| 2025-Q4 | 集成到 Claude Code（"Claude 能操作你屏幕了"）|
| 2026-Q1 | API 价格下调 + 速度优化 |

## 四、定价与商业化

### API 定价
- Claude API tokens 标准计价
- **Vision 部分按 tokens 算**
- 每 action 包括 screenshot → 成本 ~$0.02-0.05
- 100 步任务 ~$2-5

### 典型使用
- **企业 RPA 替代**：UiPath 任务用 Claude CU 实现
- **测试自动化**：QA 工具替代 Selenium
- **数据搬运**：legacy 系统间集成
- **Claude Code 集成**（2025-Q4）：Coding + GUI 混合任务

### 代表客户
- Anthropic 内部（很多内部工作流）
- 数家 Fortune 500 B 端客户
- 具体未公开（企业 NDA）

## 五、用户反馈

### 正面
- **"AI 真能操作电脑了"**：2024-10 发布日震动
- **API-first 设计被赞**：开发者可定制
- **精度稳步提升**：从 Claude 3.5 → 4，错误率下降 30%+

### 批评
- **速度慢**：每 action 3-5 秒
- **成本高**：企业级大规模部署太贵
- **Prompt Injection 脆弱**：早期演示即有注入攻击
- **Mac / Linux / Windows 兼容性不一**

### HN / Reddit
- "Claude CU 是 Agent 时代的 stdlib"
- "代价是慢 + 贵，但能干的事多"
- "OpenAI Operator 更易上手，但 Claude CU 更强大"

## 六、竞品对比

| 维度 | Claude CU | OpenAI Operator | Google Mariner | Browser Use |
|---|---|---|---|---|
| 运行环境 | 任意 GUI | 云 Chrome | Chrome 扩展 | 自建 |
| API-first | ✅ | ❌（ChatGPT 内）| ❌ | ✅ |
| 开源 | ❌ | ❌ | ❌ | ✅ |
| OSWorld 分数 | ~35% | ~25%（浏览器）| ~20% | ~25% |
| 价格 | Token-based | Pro $200/月 | 免费 beta | 自托管 |
| 主要用户 | B 端开发者 | C 端 Pro 订阅 | 试验用户 | 开源开发者 |

## 七、使用笔记

### 最适合
1. **B 端自动化集成**（Claude API 调用）
2. **RPA 替代**（企业内 UiPath 替换）
3. **测试工具**（视觉 UI 测试）
4. **数据搬运**（多系统操作）

### 不太适合
- **C 端用户直接使用**（没有消费 App）
- **高频实时任务**（速度慢）
- **成本敏感项目**（每步 $0.02-0.05）

### 关键安全
- **强烈建议沙箱运行**
- **不要给 CU 访问敏感账户**
- **Approval gates 必装**

## 八、信息源

- Anthropic · Computer Use 发布博客（2024-10）
- Claude API Docs · computer tool 文档
- Anthropic Research · 安全与对齐讨论
- HN · Claude CU 多次讨论
- 本站 · [Computer Use Agent](../03_通用Agent/Computer_Use_Agent.md) · [ChatGPT Agent](ChatGPT_Agent.md) · [Agent 安全边界](../05_评测与安全/Agent安全边界.md) · [Anthropic](../../01_AI/11_公司研究/Anthropic.md)
