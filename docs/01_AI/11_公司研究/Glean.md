# Glean

> 最后更新：2026-04-24
>
> Glean 是 **企业搜索 + AI 知识助手 的黄金赛道领跑者** —— 2019 年由 Google 前搜索工程 Arvind Jain、Piyush Prahladka 等创立，把"员工搜索公司内部所有工具"做成一个产品。2025 估值 $7.2B，ARR $100M+，是企业 AI 落地 RAG 模式的代表。

## 一句话定位

Glean 提供 **"企业内部的 Google"** —— 连接 Google Workspace / Slack / Confluence / Salesforce / GitHub / Jira 等 100+ 企业工具，做统一搜索 + AI 生成答案 + Agent 工作流。目标客户：500-5 万人规模的企业。

## 一、公司速览

- **创立**：2019
- **总部**：Palo Alto, CA
- **创始人**：
  - **Arvind Jain**（CEO，前 Google 搜索、Rubrik 联合创始人）
  - **Piyush Prahladka**、Tony Gentilcore、T.R. Vishwanath（均 Google 背景）
- **员工**：~800（2025 末）
- **估值**：**$7.2B**（2025-09，F 轮 $260M）
- **主要投资方**：Kleiner Perkins、Sequoia、General Catalyst、ICONIQ、Lightspeed、SoftBank Vision Fund 2、Altimeter

## 二、历史沿革

| 时间 | 里程碑 |
|---|---|
| 2019 | Glean 成立 |
| 2021-03 | A 轮 $15M |
| 2022-04 | C 轮 $100M，估值 $1B（独角兽）|
| 2023-05 | D 轮 $100M，估值 $2.2B |
| 2024-02 | E 轮 $260M，估值 $4.6B |
| 2024-09 | **Glean Agents** 发布（从搜索到 Agent）|
| 2025-09 | **F 轮 $260M，估值 $7.2B** |
| 2025-Q4 | ARR 突破 $100M（粗估）|

## 三、业务与产品

### 产品矩阵
| 产品 | 定位 |
|---|---|
| **Glean Search** | 核心搜索产品 |
| **Glean Assistant** | AI 问答 / 摘要 / 起草 |
| **Glean Agents** | 企业 Agent 平台（2024-09 发布）|
| **Glean Apps** | 企业自建 AI 应用平台 |

### 连接器（100+）
- 文档：Google Drive、Dropbox、Box、SharePoint、Notion
- 通讯：Slack、Teams、Zoom
- 代码：GitHub、GitLab、Bitbucket
- 工单：Jira、Linear、Zendesk、ServiceNow
- CRM / ERP：Salesforce、Workday、NetSuite
- 邮件：Gmail、Outlook

### 目标客户
- 500-50000 员工的企业
- **代表客户**：Databricks、Duolingo、Sony、Instacart、Citizens Bank、Deutsche Telekom、Okta、Samsara、Rubrik、Reddit、Gamesys

## 四、技术路线

### 搜索技术栈（自研深度）
- **Neural ranking**（自研模型）
- **Personalization engine**：每个员工看到不同排名
- **Permissions-aware**：严格遵循原系统权限
- **Multimodal search**：文档 + 图像 + 视频

### AI Assistant
- **模型层**：调用 GPT / Claude / 开源
- **RAG 架构**：检索 Glean 索引 + LLM 生成
- **引用返回**：每个回答都链接到原文档

### Glean Agents
- **Workflow builder**：可视化 Agent 流程
- **Tool use**：调用 Slack、Jira、GitHub 等工具
- **Knowledge integration**：Glean 索引作为 grounding

## 五、商业模式

### 定价
- **Per-seat**：$40-60/seat/月
- **企业合同**：$100k-5M+ ACV
- **平均客户规模**：3000-5000 员工

### ARR 增长
| 年份 | ARR（估算）|
|---|---|
| 2022 | $15M |
| 2023 | $40M |
| 2024 | $75M |
| **2025** | **$100M+** |

### 单位经济
- 毛利 ~75%
- NRR（Net Retention）150%+（excellent）
- CAC payback ~18 个月

## 六、竞争与壁垒

### 直接对标
- **Microsoft 365 Copilot**：微软自带 + SharePoint 整合（最大威胁）
- **Google Workspace AI**：Google 原生
- **Notion AI** / **Slack AI**：单工具内 AI（非跨工具）
- **Moveworks**：企业 IT 自助服务 AI
- **Perplexity Enterprise**：搜索类

### 壁垒
- **连接器生态 100+**：新对手难短期复制
- **权限 / 安全工程**：企业数据权限传递是复杂难题
- **品牌 / 客户背书**：Databricks / Sony 等 logo 吸引同行
- **Arvind Jain 的销售能力**（Rubrik 创始人光环）

### 弱点
- **Microsoft 整合风险**：Copilot 原生 + 365 → 不选 Glean 的动力
- **毛利被 LLM 成本挤压**：每次 query 都要调用 LLM
- **竞争激烈**：Cohere / Harvey / Moveworks / Hebbia / Sana 都在做类似事

## 七、关键风险

- **Microsoft Copilot 的 catch up**：最大单一风险
- **OpenAI 推出企业搜索**：ChatGPT Enterprise 若集成多工具连接器
- **基础模型价格波动**：GPT / Claude 涨价直接冲击毛利
- **员工离职**：前 Google 工程团队被挖角
- **融资市场变化**：若 AI 估值回调，$7.2B 的下一轮难做

## 八、我的判断

> **我的看法**：
>
> 1. **Glean 是企业 RAG / 搜索最典型赢家**——ARR 增长 + 客户 logo 验证
> 2. **真正的终极敌人是 Microsoft**：365 Copilot 若做好跨工具搜索，Glean 差异化被侵蚀
> 3. **Glean 的终局**：**被 Salesforce / Oracle / SAP 收购** 或 IPO（$15-20B 级）
> 4. **Glean Agents 是关键押注**：从搜索到 Agent 平台，估值叙事从 SaaS 变 AI-native
> 5. **估值 $7.2B 偏高**：ARR $100M → 72x 倍数，Revenue growth 必须维持 100%+
>
> **我可能错在哪里**：
> - Microsoft 365 Copilot 产品力不达预期，Glean 占据企业 AI 搜索绝对龙头
> - Glean Agents 成为企业 Agent 平台标杆
> - 被 SAP / Salesforce 收购，估值 $10B+

## 九、信息源

- Glean 官方博客（glean.com）
- Arvind Jain 访谈 · Acquired 播客
- Menlo Ventures · State of Gen AI in the Enterprise
- 本站 · [垂直 AI 全景](../04_智能体与应用/垂直AI全景.md) · [企业 AI 落地模式](../04_智能体与应用/企业AI落地模式.md)
