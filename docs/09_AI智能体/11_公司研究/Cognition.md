# Cognition AI（Devin）

> 最后更新：2026-04-24
>
> Cognition AI 是 **2024 年最受争议的 AI 创业公司**——2024-03 发布 **Devin** 时宣称 "世界第一个 AI 软件工程师"，引爆"AI 取代程序员" 叙事。但发布后被质疑 demo 造假（SWE-bench 仅 14%），后经多次迭代重建口碑。**2025-05 以 $4B 估值融 $150M**，并**收购 Windsurf 产品团队**（Google $2.4B 撕走 Codeium 创始团队后的剩余部分），成为 Cursor 之外最大的独立 Coding Agent 公司。

## 一句话定位

Cognition 是 **"L3 全自主 Coding Agent 代表"**——不同于 Cursor / Claude Code 的"交互式 Agent"，Devin 卖点是"把 ticket 丢给 Devin，几小时后拿 PR"。**技术激进 / 营销狂热 / 实际效果争议** 并存。

## 一、公司速览

- **创立**：2023-11
- **总部**：旧金山
- **创始人 / CEO**：**Scott Wu**（IOI 金牌、MIT、Addepar 创始团队）
- **联合创始人**：Steven Hao、Walden Yan（也是 IOI 金牌）
- **员工**：~80-100（2026-Q1，含 Windsurf 并购团队后 ~150）
- **估值**：**$4B**（2025-05，B 轮 $150M）
- **主要投资方**：Founders Fund、Khosla Ventures、Elad Gil、Jared Kushner 家族

## 二、历史沿革

| 时间 | 里程碑 |
|---|---|
| 2023-11 | Cognition 成立 |
| 2024-03 | **Devin 发布 demo 视频**，"AI 软件工程师"引爆社交 |
| 2024-04 | A 轮 $21M（Founders Fund）|
| 2024-04 | **SWE-bench 分数 14%** 被披露，争议爆发 |
| 2024-05 | B 轮扩大 $175M，估值 $2B |
| 2024-12 | Devin 2.0 发布 |
| 2025-03 | Devin 开放给更多用户 + 价格调整 |
| 2025-05 | **$150M 融资，估值 $4B** |
| 2025-07 | **收购 Windsurf 产品团队**（Codeium 创始人已被 Google 拿走）|
| 2025-Q4 | Devin 3.0 + 企业版 |

## 三、业务与产品

### Devin（核心产品）
- **形态**：Web 应用 + 云端 Agent
- **能力**：读仓库、写代码、跑测试、发 PR
- **定价**：
  - Team：$500/月起（有 Agent Credits）
  - Enterprise：定制合同
- **典型任务**：
  - 修 GitHub issue
  - 重构代码
  - 写测试
  - 搭建新项目

### Windsurf（收购产品）
- VS Code fork AI IDE
- 2025-05 Google 拿走创始团队后 Cognition 收购剩余
- 与 Devin 形成"Web Agent + IDE" 双产品
- 2026 重点整合

### Cognition API（2025 Q4）
- Devin 能力 API 化
- 给企业集成

## 四、技术路线

### Agent 架构
- **Planning-first**：先生成长远 plan
- **Long-horizon execution**：数小时自主工作
- **Self-verification**：写测试 + 跑测试
- **Memory + State management**：长会话持续

### 底层模型
- 早期：GPT-4 + 自研 orchestration
- 2025：Claude 3.5 Sonnet / Claude 4 Opus（主力）
- 混合多模型

### 独特工程
- **Devin's sandbox**：云端 VM，每个任务独立
- **Devin's planner**：自研规划模型
- **UI 可视化 Agent 思考过程**

## 五、商业模式

### 定价
- Team: $500/月（含 Credits）
- Enterprise: $10k-500k+/年
- Overage: 按 Credit 额外购买

### 2025 ARR 估算
- ~$50-80M（粗估）
- 与 Cursor $500M 有差距
- 增长快但基数小

### 单位经济
- Agent 每任务 token 成本高（数小时推理）
- 毛利承压
- 靠大合同 + 品牌

### 估值 / ARR 倍数
- $4B / ~$60M = 67x
- 高于 Cursor 的 20x
- 反映"AI 工程师叙事"溢价

## 六、竞争与壁垒

### 直接对标
- **Cursor**：Devin 是 Web 自主 Agent，Cursor 是 IDE 交互
- **Claude Code**：Anthropic 自家更便宜 + 集成好
- **Factory AI**：类似企业级 Agent
- **OpenAI Codex Cloud**：2025-Q3 OpenAI 推出的"云端自主 Coding Agent"

### 壁垒
- **Scott Wu 及创始团队**（IOI 金牌 x 3）
- **"AI 软件工程师" brand 已建立**
- **企业合同锁定**（Goldman、Ramp 等早期客户）
- **云沙箱 + Agent orchestration** 工程能力

### 弱点
- **SWE-bench 公开分数低**（信任赤字）
- **依赖 Claude / GPT 模型**
- **被 Cursor / Claude Code 性价比压制**
- **Windsurf 整合复杂度**

## 七、关键风险

- **Claude 4 + Claude Code 太强**：独立 Agent 公司受挤压
- **OpenAI 反攻**：Codex Cloud / ChatGPT Agent for Coding
- **Google 深口袋**：Gemini + Windsurf 并购团队可能反扑
- **基础模型涨价**：Devin 长时程任务成本翻倍
- **创始人 brand 疲劳**：Scott Wu 过度曝光反噬

## 八、我的判断

> **我的看法**：
>
> 1. **Devin 是"高风险高回报"公司**：成功就是 $30B+，失败就消失
> 2. **Windsurf 收购是聪明棋**：补全 IDE 入口，双产品防御
> 3. **2026 是 Devin 的"生死年"**：能否证明 SWE-bench 追平 Cursor / Claude Code
> 4. **Cognition 的真正价值不是 Devin 本身，而是 Agent orchestration 能力**：可能被收购用于其他产品
> 5. **"AI 软件工程师"这个标签 Cognition 赢不了，Claude 已经赢了**——Claude Code + 1M 上下文 + Anthropic 模型优势太大
>
> **我可能错在哪里**：
> - Devin 3.0 真的突破到 SWE-bench 80%+，重塑叙事
> - 被 OpenAI / Microsoft 以 $10B+ 收购
> - 企业端规模化成功（Sierra 式 outcome-based 定价）

## 九、信息源

- Cognition 官方（cognition.ai）
- Scott Wu 访谈 · Lex Fridman / No Priors
- TechCrunch / The Information · Devin 报道 + Windsurf 收购
- SWE-bench 官方排行榜
- 本站 · [Devin 产品研究](../12_产品研究/Devin.md) · [Coding Agent 格局](../02_Coding_Agent/Coding_Agent格局.md) · [Anysphere](Anysphere.md)
