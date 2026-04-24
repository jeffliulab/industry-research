# Factory AI

> 最后更新：2026-04-24
>
> Factory AI 是 **2024-2025 企业级 Coding Agent 赛道的"第三极"**——不做 IDE（Cursor 路线）、不做 CLI（Claude Code 路线）、不做公共云 Web（Devin 路线），而是**做"进入企业内网的 Coding Agent 平台"**。2025-09 B 轮融 $15M，估值 ~$200M，**主打合规 + 私有化 + 企业工作流集成**。定位窄但针对大型企业需求精准。

## 一句话定位

Factory AI 是 **"企业级 Devin 替代品"**——面向不想用公共云（Devin）、需要深度定制（非 Cursor SaaS）的**大型软件工程团队**，提供**私有化部署 + 安全合规 + 多 Agent 协作**的平台。创始人 Matan Grinberg 2023 离开 Anthropic 创立。

## 一、公司速览

- **创立**：2023
- **总部**：旧金山
- **创始人 / CEO**：**Matan Grinberg**（前 Anthropic 研究员 + 产品）
- **联合创始人**：Eno Reyes
- **员工**：~30（2025 末）
- **估值**：**~$200M**（2025-09，B 轮 $15M）
- **主要投资方**：Sequoia、Lux Capital、NVentures（NVIDIA）、SV Angel

## 二、历史沿革

| 时间 | 里程碑 |
|---|---|
| 2023-06 | Factory 成立 |
| 2023-11 | 种子 $5M（Sequoia 领投）|
| 2024-06 | A 轮 $5M 追加 |
| 2024-09 | 产品公开（Factory Platform）|
| 2025-02 | 首批 Enterprise 客户（Fortune 500）|
| 2025-09 | **B 轮 $15M，估值 $200M** |
| 2025-Q4 | Factory Droid（新 Agent 产品）|

## 三、业务与产品

### Factory Platform
- **企业私有 Coding Agent 平台**
- 部署到客户 VPC（AWS / GCP / Azure）
- 集成企业身份认证（SSO）

### Droids（Agents）
- **Fix Droid**：修 bug / issue
- **Refactor Droid**：重构代码
- **Review Droid**：PR 审查
- **Doc Droid**：文档生成
- **Onboarding Droid**：新员工上手

### 核心能力
- **Multi-repo 协调**：大公司多仓库任务
- **Codebase 理解**：对企业全部代码训练 embedding
- **Governance**：审计、权限、合规
- **Workflow 集成**：Jira、Linear、GitHub Actions

### 目标客户
- **Fortune 500 软件团队**（金融、医疗、政府）
- **对数据主权有要求**的客户
- **不信任公共云 Agent**（Devin）的企业

### 2025 客户代表
- Goldman Sachs（部分）
- Ramp
- Anthropic（内部用于基础设施）
- 一些未公开 Fortune 500

## 四、技术路线

### 底层模型
- 调用 Claude 4 Opus / GPT-5 / 开源
- 企业可选
- Fine-tune 在客户 codebase（可选）

### Agent 架构
- **Multi-Agent Orchestration**：多 Droid 协作
- **Long-context RAG**：企业 codebase 语义化
- **Human-in-the-loop 门控**

### 差异化
- **企业部署经验**：Matan 团队做过 Anthropic 企业客户
- **合规认证**：SOC 2 Type II、ISO 27001
- **Air-gapped 部署选项**（军事 / 政府）

## 五、商业模式

### 定价
- **Enterprise 合同**：$50k-2M ACV
- Seat + Usage 混合
- 私有化部署附加费

### 2025 ARR 估算
- ~$10-15M（粗估）
- 比 Devin 小，但客户 ACV 高
- 增长快但基数低

### 单位经济
- 毛利 70%+（企业软件正常）
- 私有化部署 + 定制化让 CAC 高
- LTV 高（企业合同长期）

## 六、竞争与壁垒

### 直接对标
- **Devin**：Devin 偏公共云，Factory 偏私有
- **Cursor**：Cursor SaaS IDE，Factory 企业平台
- **Claude Code**：Anthropic 自家 CLI，Factory 专注企业
- **GitHub Copilot Enterprise**：MS 的企业产品

### 壁垒
- **Matan Grinberg 从 Anthropic 带出的企业销售关系**
- **合规认证领先**
- **Private deployment 经验**
- **多 Agent orchestration** 工程

### 弱点
- **规模小**：30 人公司对比 Cursor 150 人 / Devin 100 人
- **基础模型依赖**：受 Claude / GPT 涨价影响
- **品牌知名度低**：C 端完全无认知

## 七、关键风险

- **被 GitHub Copilot Enterprise 压制**：MS 生态 + 合规 + 免费赠送给 Azure 客户
- **资金消耗**：企业销售周期长
- **Matan 小团队负担**：30 人公司做 Fortune 500 销售很吃力
- **Anthropic 自家出 Claude Enterprise Agent**：直接冲击

## 八、我的判断

> **我的看法**：
>
> 1. **Factory AI 是"小而美" Agent 公司的典型**：2-3B 估值上限，不会是 $50B
> 2. **企业 Coding Agent 赛道真实需求存在**：Fortune 500 不愿用公共云 AI
> 3. **Factory 的最大风险是 GitHub Copilot Enterprise**：MS 捆绑销售
> 4. **终局**：**被 GitHub / GitLab / JetBrains 收购**，或小众赢家
> 5. **Multi-Agent / Droid 抽象** 是 Factory 真正创新：可能被大厂学走
>
> **我可能错在哪里**：
> - Factory 企业销售爆发，2027 ARR 破 $100M
> - 被 Microsoft 或 Google 以 $2B+ 收购
> - 多 Agent 架构成为行业标准，Factory 占有专利 / 技术优势

## 九、信息源

- Factory AI 官方（factory.ai）
- Matan Grinberg 访谈 · AI Deep Dive 播客
- TechCrunch · B 轮融资报道
- 本站 · [Devin](../12_产品研究/Devin.md) · [Coding Agent 格局](../02_Coding_Agent/Coding_Agent格局.md) · [Anthropic](../../01_AI/11_公司研究/Anthropic.md)
