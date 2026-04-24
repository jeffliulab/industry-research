# Sierra

> 最后更新：2026-04-24
>
> Sierra 是 **2024-2025 企业 Agent 最受关注的新公司**——2023-10 由 **Bret Taylor**（Salesforce 前联合 CEO、Google Maps 联合创始人、OpenAI 现任董事长）和 **Clay Bavor**（Google AR/VR 前副总裁）创立，专注**客服 / 服务 Agent**。2024-10 A 轮估值 $4.25B（B+ 轮后 2025 已破 $10B），**开创"按成功工单付费"outcome-based pricing** 模式，震动传统 SaaS 行业。

## 一句话定位

Sierra 是 **"AI Agent 版 Salesforce"**——用 Agent 重写客服 / 服务领域，**对标 Zendesk / Intercom / Salesforce Service Cloud**。商业模式创新是"**只在工单被成功解决时才收钱**"（outcome-based）。**Bret Taylor 的企业 Brand + OpenAI 董事长身份** 让 Sierra 在 Enterprise 销售拥有独特优势。

## 一、公司速览

- **创立**：2023-10
- **总部**：旧金山
- **创始人 / 联席 CEO**：
  - **Bret Taylor**（前 Salesforce 联合 CEO、Facebook CTO、Google Maps 联合创立者、**OpenAI 现任董事长**）
  - **Clay Bavor**（前 Google AR/VR 负责人）
- **员工**：~200（2025 末）
- **估值**：**$10B+**（2025-10，C 轮 $350M）
- **主要投资方**：Benchmark、Sequoia、Greenoaks、Iconiq、Thrive

## 二、历史沿革

| 时间 | 里程碑 |
|---|---|
| 2023-10 | Sierra 正式成立 |
| 2024-02 | 种子 $85M（Benchmark 领投），估值 $1B 直接独角兽 |
| 2024-09 | Sierra 产品公开发布，首批客户 WeightWatchers / SiriusXM / Sonos |
| 2024-10 | **B 轮 $175M，估值 $4.25B**（Sequoia 领投）|
| 2025-04 | 美国用户突破 5000 万 Agent 对话 |
| 2025-10 | **C 轮 $350M，估值 $10B+** |
| 2026-Q1 | 扩展到欧洲 + 更多行业（电信 / 保险）|

## 三、业务与产品

### 核心产品
- **Sierra Agent**：企业可配置客服 / 服务 Agent
- **Sierra AgentOS**：Agent 操作系统 / 平台
- **Sierra Voice**（2025）：电话客服 AI

### 代表客户
- **WeightWatchers**：健康咨询 Agent
- **SiriusXM**：订阅服务客服
- **Sonos**：硬件支持
- **Casper**：电商客服
- **OluKai**（zappos 同级别鞋类）：售前售后
- **Telefónica**（西班牙电信）：2025 落地

### 关键能力
- **自然语言客服**：替代 80% 低复杂度工单
- **Escalate to Human**：判断不确定 → 转人工
- **品牌定制**：每个客户独立 "persona"
- **Policy 合规**：按公司规则回答
- **多渠道**：Chat / Email / Voice / WhatsApp

## 四、技术路线

### 底层模型
- 调用 OpenAI GPT-4 / GPT-5 + Claude
- 可能有自研 fine-tune 层
- Bret Taylor 是 OpenAI 董事长，模型访问优先

### Agent 架构
- **企业知识库 RAG**
- **Tool Use**：调用客户现有系统（订单 / 账户 / 物流）
- **Voice ASR + TTS**：电话客服
- **Policy enforcement layer**

### 差异化工程
- **AgentOS 平台**：客户企业用 UI 自建 Agent
- **Simulation 测试框架**：上线前模拟 1000+ 对话
- **Observability**：实时监控 + 干预

## 五、商业模式（关键创新）

### Outcome-based Pricing
- **按成功解决的工单数付费**
- 每工单 $0.1-1（视行业 / 复杂度）
- 失败 = 不收费 / 打折
- 与客户利益深度对齐

### 2025 ARR 估算
- ~$100-200M（一些报道称已突破 $200M）
- 对比 Zendesk $1.7B ARR（2024）、Intercom $300M+

### 单位经济
- 工单成功率 60-80%（视客户）
- Gross margin 60%+
- CAC 高（企业销售 + Bret Taylor 帮背书）

### Bret Taylor 的"双赢"
- Sierra CEO
- 同时 **OpenAI 董事长**（非对称优势：优先访问 OpenAI 模型、合作谈判）

## 六、竞争与壁垒

### 直接对标
- **Zendesk AI / Intercom Fin**：老牌 + AI 功能，但非 outcome-based
- **Salesforce Einstein Agents**：大厂对手，Bret Taylor 自己原来的公司
- **Ada / Forethought**：独立 AI 客服老玩家

### 壁垒
- **Bret Taylor brand**：企业客户信任
- **OpenAI 董事长身份**：独特竞争力
- **Outcome-based 先发者**
- **客户 logo 壁垒**（WeightWatchers 等）
- **AgentOS 平台**（企业 lock-in）

### 弱点
- **客服是 saturated 市场**：无数老玩家 + AI pivot
- **毛利偏低**（outcome-based 风险内吸）
- **大规模化挑战**：2025 快速扩张压力

## 七、关键风险

- **大型客户流失**：1 个 $5M+ 客户走会震动 ARR
- **模型成本飙升**：Bret Taylor 的"OpenAI 折扣"是否能持久
- **Salesforce 反击**：Agentforce 全面推出
- **Bret Taylor 精力分散**：OpenAI 董事会 + Sierra CEO
- **outcome 定义争议**：客户是否接受 Sierra 的"成功"定义

## 八、我的判断

> **我的看法**：
>
> 1. **Sierra 是 2024-2026 企业 Agent 最大赢家**：品牌 + 模式 + 时机三合一
> 2. **Outcome-based 定价会扩散到其他垂直**（法律、医疗、销售）
> 3. **估值 $10B+ 偏高但可持续**：ARR 200M → 预期 2026 年底破 $500M
> 4. **Bret Taylor 的终极目标是 Salesforce 级别公司**：$200B+ 市值 10 年愿景
> 5. **Sierra 真正风险不是竞争**，是**模型价格变化**（GPT / Claude 涨价挤毛利）
>
> **我可能错在哪里**：
> - Salesforce Agentforce 规模碾压 Sierra
> - Outcome 定义争议 → 客户大量流失
> - Bret Taylor 因 OpenAI 董事会职责退出 Sierra CEO

## 九、信息源

- Sierra 官方博客（sierra.ai）
- Bret Taylor 访谈 · Acquired / No Priors
- The Information · Sierra 内部
- 本站 · [Agent 定价与商业模式](../04_企业Agent/Agent定价与商业模式.md) · [Agent 行业现状](../04_企业Agent/Agent行业现状.md)
