// 顶部标签页悬停下拉预览菜单（支持二级→三级子菜单，三级带链接）
// 此文件由 hooks/generate_dropdown.py 自动生成，请勿手动编辑
// 如需修改 UI 逻辑，请编辑 hooks/tab_dropdown.tpl.js
(function () {
  var tabData = {"人工智能": [{"name": "市场与资本", "path": "", "pages": [["2026 AI 行业格局", "01_AI/01_%E5%B8%82%E5%9C%BA%E4%B8%8E%E8%B5%84%E6%9C%AC/AI%E8%A1%8C%E4%B8%9A%E6%A0%BC%E5%B1%802026/"], ["AI 商业化：订阅 · API · Token 经济", "01_AI/01_%E5%B8%82%E5%9C%BA%E4%B8%8E%E8%B5%84%E6%9C%AC/AI%E5%95%86%E4%B8%9A%E5%8C%96%E6%A8%A1%E5%BC%8F/"], ["AI 融资与估值全景", "01_AI/01_%E5%B8%82%E5%9C%BA%E4%B8%8E%E8%B5%84%E6%9C%AC/AI%E8%9E%8D%E8%B5%84%E4%BC%B0%E5%80%BC%E5%85%A8%E6%99%AF/"], ["企业 AI 支出结构", "01_AI/01_%E5%B8%82%E5%9C%BA%E4%B8%8E%E8%B5%84%E6%9C%AC/%E4%BC%81%E4%B8%9AAI%E6%94%AF%E5%87%BA%E7%BB%93%E6%9E%84/"]]}, {"name": "技术前沿", "path": "", "pages": [["大模型路线：Dense · MoE · Reasoning", "01_AI/02_%E6%8A%80%E6%9C%AF%E5%89%8D%E6%B2%BF/%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%B7%AF%E7%BA%BF%E5%AF%B9%E6%AF%94/"], ["推理模型专题：从 o1 到 R1 到 Claude 4", "01_AI/02_%E6%8A%80%E6%9C%AF%E5%89%8D%E6%B2%BF/%E6%8E%A8%E7%90%86%E6%A8%A1%E5%9E%8B%E4%B8%93%E9%A2%98/"], ["多模态进展：文生图 · 视频 · 语音", "01_AI/02_%E6%8A%80%E6%9C%AF%E5%89%8D%E6%B2%BF/%E5%A4%9A%E6%A8%A1%E6%80%81%E6%A8%A1%E5%9E%8B%E8%BF%9B%E5%B1%95/"], ["小语言模型 SLM 专题", "01_AI/02_%E6%8A%80%E6%9C%AF%E5%89%8D%E6%B2%BF/SLM%E4%B8%93%E9%A2%98/"], ["大模型评测体系：MMLU · SWE-bench · GPQA", "01_AI/02_%E6%8A%80%E6%9C%AF%E5%89%8D%E6%B2%BF/%E5%A4%A7%E6%A8%A1%E5%9E%8B%E8%AF%84%E6%B5%8B%E4%BD%93%E7%B3%BB/"]]}, {"name": "基础设施", "path": "", "pages": [["AI 训练基础设施：GPU 供需与云厂格局", "01_AI/03_%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/AI%E8%AE%AD%E7%BB%83%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/"], ["AI 芯片初创：Cerebras · Groq · Tenstorrent", "01_AI/03_%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/AI%E8%8A%AF%E7%89%87%E5%88%9D%E5%88%9B/"], ["GPU 云初创：CoreWeave · Lambda · Together", "01_AI/03_%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/GPU%E4%BA%91%E5%88%9D%E5%88%9B/"], ["AI 训练数据提供商：Scale · Surge · Snorkel", "01_AI/03_%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/AI%E8%AE%AD%E7%BB%83%E6%95%B0%E6%8D%AE%E6%8F%90%E4%BE%9B%E5%95%86/"], ["数据中心与电力瓶颈", "01_AI/03_%E5%9F%BA%E7%A1%80%E8%AE%BE%E6%96%BD/%E6%95%B0%E6%8D%AE%E4%B8%AD%E5%BF%83%E4%B8%8E%E7%94%B5%E5%8A%9B/"]]}, {"name": "智能体与应用", "path": "", "pages": [["AI Agent 行业现状与路线分歧", "01_AI/04_%E6%99%BA%E8%83%BD%E4%BD%93%E4%B8%8E%E5%BA%94%E7%94%A8/Agent%E8%A1%8C%E4%B8%9A%E7%8E%B0%E7%8A%B6/"], ["企业 AI 落地模式：Copilot · RAG · Agent", "01_AI/04_%E6%99%BA%E8%83%BD%E4%BD%93%E4%B8%8E%E5%BA%94%E7%94%A8/%E4%BC%81%E4%B8%9AAI%E8%90%BD%E5%9C%B0%E6%A8%A1%E5%BC%8F/"], ["垂直 AI 玩家全景", "01_AI/04_%E6%99%BA%E8%83%BD%E4%BD%93%E4%B8%8E%E5%BA%94%E7%94%A8/%E5%9E%82%E7%9B%B4AI%E5%85%A8%E6%99%AF/"]]}, {"name": "开源与生态", "path": "", "pages": [["开源 vs 闭源：生态格局演变", "01_AI/05_%E5%BC%80%E6%BA%90%E4%B8%8E%E7%94%9F%E6%80%81/%E5%BC%80%E6%BA%90vs%E9%97%AD%E6%BA%90/"]]}, {"name": "地缘与国家竞争", "path": "", "pages": [["中美 AI 竞争全景", "01_AI/06_%E5%9C%B0%E7%BC%98%E4%B8%8E%E5%9B%BD%E5%AE%B6%E7%AB%9E%E4%BA%89/%E4%B8%AD%E7%BE%8EAI%E7%AB%9E%E4%BA%89/"], ["芯片出口管制与反制", "01_AI/06_%E5%9C%B0%E7%BC%98%E4%B8%8E%E5%9B%BD%E5%AE%B6%E7%AB%9E%E4%BA%89/%E8%8A%AF%E7%89%87%E5%87%BA%E5%8F%A3%E7%AE%A1%E5%88%B6/"], ["中国 AI 梯队结构", "01_AI/06_%E5%9C%B0%E7%BC%98%E4%B8%8E%E5%9B%BD%E5%AE%B6%E7%AB%9E%E4%BA%89/%E4%B8%AD%E5%9B%BDAI%E6%A2%AF%E9%98%9F%E7%BB%93%E6%9E%84/"], ["欧洲 AI 路线与 EU AI Act", "01_AI/06_%E5%9C%B0%E7%BC%98%E4%B8%8E%E5%9B%BD%E5%AE%B6%E7%AB%9E%E4%BA%89/%E6%AC%A7%E6%B4%B2AI%E8%B7%AF%E7%BA%BF/"]]}, {"name": "政策与治理", "path": "", "pages": [["全球 AI 监管对照：美 · 欧 · 中 · 英", "01_AI/07_%E6%94%BF%E7%AD%96%E4%B8%8E%E6%B2%BB%E7%90%86/%E5%85%A8%E7%90%83AI%E7%9B%91%E7%AE%A1%E5%AF%B9%E7%85%A7/"]]}, {"name": "安全与负责任 AI", "path": "", "pages": [["AI 安全与对齐研究产业化", "01_AI/08_%E5%AE%89%E5%85%A8%E4%B8%8E%E8%B4%9F%E8%B4%A3%E4%BB%BB/AI%E5%AE%89%E5%85%A8%E4%B8%8E%E5%AF%B9%E9%BD%90/"], ["AI 失败案例与事件库", "01_AI/08_%E5%AE%89%E5%85%A8%E4%B8%8E%E8%B4%9F%E8%B4%A3%E4%BB%BB/AI%E5%A4%B1%E8%B4%A5%E6%A1%88%E4%BE%8B/"]]}, {"name": "人才与实验室", "path": "", "pages": [["AI 人才流动地图", "01_AI/09_%E4%BA%BA%E6%89%8D%E4%B8%8E%E5%AE%9E%E9%AA%8C%E5%AE%A4/AI%E4%BA%BA%E6%89%8D%E6%B5%81%E5%8A%A8%E5%9C%B0%E5%9B%BE/"], ["顶级 AI 实验室概览", "01_AI/09_%E4%BA%BA%E6%89%8D%E4%B8%8E%E5%AE%9E%E9%AA%8C%E5%AE%A4/%E9%A1%B6%E7%BA%A7%E5%AE%9E%E9%AA%8C%E5%AE%A4%E6%A6%82%E8%A7%88/"]]}, {"name": "年度展望", "path": "", "pages": [["2026 年度预测与自评", "01_AI/10_%E5%B9%B4%E5%BA%A6%E5%B1%95%E6%9C%9B/2026%E5%B9%B4%E5%BA%A6%E9%A2%84%E6%B5%8B/"]]}, {"name": "公司研究", "path": "", "pages": [["Anthropic", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Anthropic/"], ["OpenAI", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/OpenAI/"], ["Google DeepMind", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Google_DeepMind/"], ["Meta AI / FAIR", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Meta_AI_FAIR/"], ["xAI", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/xAI/"], ["Mistral AI", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Mistral/"], ["Cohere", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Cohere/"], ["Perplexity", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Perplexity/"], ["Cursor（Anysphere）", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Anysphere/"], ["Harvey AI", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Harvey/"], ["Glean", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Glean/"], ["DeepSeek", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/DeepSeek/"], ["Moonshot 月之暗面", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Moonshot/"], ["智谱 AI", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E6%99%BA%E8%B0%B1AI/"], ["MiniMax", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/MiniMax/"], ["阿里通义", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E9%98%BF%E9%87%8C%E9%80%9A%E4%B9%89/"], ["字节豆包 / Seed", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E5%AD%97%E8%8A%82Seed/"], ["百川智能", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E7%99%BE%E5%B7%9D%E6%99%BA%E8%83%BD/"], ["阶跃星辰", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E9%98%B6%E8%B7%83%E6%98%9F%E8%BE%B0/"], ["腾讯混元", "01_AI/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E8%85%BE%E8%AE%AF%E6%B7%B7%E5%85%83/"]]}, {"name": "产品研究", "path": "", "pages": [["Claude 家族", "01_AI/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Claude%E5%AE%B6%E6%97%8F/"], ["ChatGPT 与 Codex", "01_AI/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/ChatGPT/"], ["Gemini 系列", "01_AI/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Gemini%E7%B3%BB%E5%88%97/"], ["DeepSeek V3 / R1", "01_AI/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/DeepSeek_V3_R1/"], ["Qwen 系列", "01_AI/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Qwen%E7%B3%BB%E5%88%97/"], ["Claude Code", "01_AI/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Claude_Code/"], ["Cursor", "01_AI/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Cursor/"], ["Windsurf", "01_AI/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Windsurf/"], ["v0", "01_AI/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/v0/"], ["Notebook LM", "01_AI/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Notebook_LM/"], ["Sora", "01_AI/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Sora/"], ["Runway", "01_AI/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Runway/"], ["Midjourney", "01_AI/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Midjourney/"]]}], "机器人": [{"name": "市场与格局", "path": "", "pages": [["2026 人形机器人格局", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/01_%E5%B8%82%E5%9C%BA%E4%B8%8E%E6%A0%BC%E5%B1%80/%E4%BA%BA%E5%BD%A2%E6%A0%BC%E5%B1%802026/"], ["三类机器人市场：工业 · 协作 · 服务", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/01_%E5%B8%82%E5%9C%BA%E4%B8%8E%E6%A0%BC%E5%B1%80/%E4%B8%89%E7%B1%BB%E6%9C%BA%E5%99%A8%E4%BA%BA%E5%B8%82%E5%9C%BA/"], ["中美人形机器人产业对比", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/01_%E5%B8%82%E5%9C%BA%E4%B8%8E%E6%A0%BC%E5%B1%80/%E4%B8%AD%E7%BE%8E%E4%BA%A7%E4%B8%9A%E5%AF%B9%E6%AF%94/"]]}, {"name": "产业链", "path": "", "pages": [["核心零部件：减速器 · 丝杠 · 电机", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E4%BA%A7%E4%B8%9A%E9%93%BE/%E6%A0%B8%E5%BF%83%E9%9B%B6%E9%83%A8%E4%BB%B6/"], ["量产的关键瓶颈", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/02_%E4%BA%A7%E4%B8%9A%E9%93%BE/%E9%87%8F%E4%BA%A7%E7%93%B6%E9%A2%88/"]]}, {"name": "大脑与数据", "path": "", "pages": [["机器人基础模型 RFM 趋势", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/03_%E5%A4%A7%E8%84%91%E4%B8%8E%E6%95%B0%E6%8D%AE/RFM%E8%B6%8B%E5%8A%BF/"], ["数据飞轮：从采集到训练", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/03_%E5%A4%A7%E8%84%91%E4%B8%8E%E6%95%B0%E6%8D%AE/%E6%95%B0%E6%8D%AE%E9%A3%9E%E8%BD%AE/"]]}, {"name": "公司研究", "path": "", "pages": [["Tesla Optimus", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Tesla_Optimus/"], ["Figure AI", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Figure/"], ["Boston Dynamics", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Boston_Dynamics/"], ["Agility Robotics", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Agility/"], ["1X Technologies", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/1X/"], ["Apptronik", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Apptronik/"], ["Sanctuary AI", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Sanctuary/"], ["宇树科技", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E5%AE%87%E6%A0%91/"], ["智元机器人", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E6%99%BA%E5%85%83/"], ["优必选", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E4%BC%98%E5%BF%85%E9%80%89/"], ["傅利叶", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E5%82%85%E5%88%A9%E5%8F%B6/"], ["星动纪元", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E6%98%9F%E5%8A%A8%E7%BA%AA%E5%85%83/"], ["乐聚机器人", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E4%B9%90%E8%81%9A/"]]}, {"name": "产品研究", "path": "", "pages": [["Optimus 系列", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Optimus/"], ["Figure 02 / 03", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Figure_02_03/"], ["Unitree G1 / H1", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Unitree_G1_H1/"], ["Atlas Electric", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Atlas_Electric/"], ["1X NEO", "02_%E6%9C%BA%E5%99%A8%E4%BA%BA/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/NEO/"]]}], "具身智能": [{"name": "技术路线", "path": "", "pages": [["技术路线：VLA · VLM · World Model", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/01_%E6%8A%80%E6%9C%AF%E8%B7%AF%E7%BA%BF/%E6%8A%80%E6%9C%AF%E8%B7%AF%E7%BA%BF/"], ["评测基准", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/01_%E6%8A%80%E6%9C%AF%E8%B7%AF%E7%BA%BF/%E8%AF%84%E6%B5%8B%E5%9F%BA%E5%87%86/"], ["Scaling Law 讨论", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/01_%E6%8A%80%E6%9C%AF%E8%B7%AF%E7%BA%BF/Scaling_Law%E8%AE%A8%E8%AE%BA/"]]}, {"name": "数据与仿真", "path": "", "pages": [["数据采集：遥操作 · 仿真 · 真机", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/02_%E6%95%B0%E6%8D%AE%E4%B8%8E%E4%BB%BF%E7%9C%9F/%E6%95%B0%E6%8D%AE%E9%87%87%E9%9B%86/"], ["Sim2Real 与仿真平台：Isaac · MuJoCo · Genesis", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/02_%E6%95%B0%E6%8D%AE%E4%B8%8E%E4%BB%BF%E7%9C%9F/Sim2Real%E4%B8%8E%E4%BB%BF%E7%9C%9F%E5%B9%B3%E5%8F%B0/"]]}, {"name": "公司研究", "path": "", "pages": [["Physical Intelligence（π）", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Physical_Intelligence/"], ["Skild AI", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Skild/"], ["Covariant", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Covariant/"], ["Wayve", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Wayve/"], ["银河通用 Galbot", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E9%93%B6%E6%B2%B3%E9%80%9A%E7%94%A8/"], ["千寻智能", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E5%8D%83%E5%AF%BB%E6%99%BA%E8%83%BD/"], ["穹彻智能", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E7%A9%B9%E5%BD%BB%E6%99%BA%E8%83%BD/"]]}, {"name": "产品研究", "path": "", "pages": [["π0 / π0.5", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/%CF%800/"], ["Helix（Figure）", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Helix/"], ["GR00T（NVIDIA）", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/GR00T/"], ["RT-2 / OpenVLA", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/RT2_OpenVLA/"], ["RDT（清华）", "03_%E5%85%B7%E8%BA%AB%E6%99%BA%E8%83%BD/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/RDT/"]]}], "AI 金融": [{"name": "全景与场景", "path": "", "pages": [["金融 AI 六类场景落地", "04_AI%E9%87%91%E8%9E%8D/01_%E5%85%A8%E6%99%AF%E4%B8%8E%E5%9C%BA%E6%99%AF/%E9%87%91%E8%9E%8D%E8%90%BD%E5%9C%B0%E5%85%A8%E6%99%AF/"], ["大模型在投研的应用", "04_AI%E9%87%91%E8%9E%8D/01_%E5%85%A8%E6%99%AF%E4%B8%8E%E5%9C%BA%E6%99%AF/%E6%8A%95%E7%A0%94%E5%BA%94%E7%94%A8%E7%8E%B0%E7%8A%B6/"], ["AI 在银行 · 保险 · 券商的差异化落地", "04_AI%E9%87%91%E8%9E%8D/01_%E5%85%A8%E6%99%AF%E4%B8%8E%E5%9C%BA%E6%99%AF/%E9%93%B6%E4%BF%9D%E8%AF%81%E5%B7%AE%E5%BC%82%E5%8C%96/"]]}, {"name": "专题", "path": "", "pages": [["AI 量化 vs 传统量化", "04_AI%E9%87%91%E8%9E%8D/02_%E4%B8%93%E9%A2%98/AI%E9%87%8F%E5%8C%96/"], ["Agent 在金融流程自动化的应用", "04_AI%E9%87%91%E8%9E%8D/02_%E4%B8%93%E9%A2%98/Agent%E5%9C%A8%E9%87%91%E8%9E%8D/"]]}, {"name": "治理与监管", "path": "", "pages": [["金融大模型的监管与合规", "04_AI%E9%87%91%E8%9E%8D/03_%E6%B2%BB%E7%90%86%E4%B8%8E%E7%9B%91%E7%AE%A1/%E9%87%91%E8%9E%8D%E7%9B%91%E7%AE%A1%E5%90%88%E8%A7%84/"]]}, {"name": "公司研究", "path": "", "pages": [["BlackRock Aladdin AI", "04_AI%E9%87%91%E8%9E%8D/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/BlackRock/"], ["JPMorgan COIN / IndexGPT", "04_AI%E9%87%91%E8%9E%8D/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/JPMorgan/"], ["Renaissance · Two Sigma · Bridgewater", "04_AI%E9%87%91%E8%9E%8D/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Renaissance_Two_Sigma_Bridgewater/"], ["Bloomberg 与 BloombergGPT", "04_AI%E9%87%91%E8%9E%8D/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Bloomberg/"], ["AlphaSense", "04_AI%E9%87%91%E8%9E%8D/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/AlphaSense/"], ["Kensho（S&P）", "04_AI%E9%87%91%E8%9E%8D/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Kensho/"], ["同花顺 · 恒生电子", "04_AI%E9%87%91%E8%9E%8D/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E5%90%8C%E8%8A%B1%E9%A1%BA_%E6%81%92%E7%94%9F%E7%94%B5%E5%AD%90/"], ["蚂蚁 支小宝 / 百灵", "04_AI%E9%87%91%E8%9E%8D/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/%E8%9A%82%E8%9A%81/"], ["Stripe AI 与 Ramp", "04_AI%E9%87%91%E8%9E%8D/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Stripe%E4%B8%8ERamp/"], ["DeepSeek 在金融的应用案例", "04_AI%E9%87%91%E8%9E%8D/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/DeepSeek%E9%87%91%E8%9E%8D%E5%BA%94%E7%94%A8/"]]}, {"name": "产品研究", "path": "", "pages": [["BloombergGPT", "04_AI%E9%87%91%E8%9E%8D/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/BloombergGPT/"], ["Claude for Financial Analysis", "04_AI%E9%87%91%E8%9E%8D/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Claude_for_Financial_Analysis/"], ["IndexGPT（JPM）", "04_AI%E9%87%91%E8%9E%8D/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/IndexGPT/"], ["Aladdin Copilot", "04_AI%E9%87%91%E8%9E%8D/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Aladdin_Copilot/"], ["AlphaSense 产品拆解", "04_AI%E9%87%91%E8%9E%8D/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/AlphaSense%E4%BA%A7%E5%93%81/"]]}], "AI 互联网": [{"name": "入口重构", "path": "", "pages": [["生成式搜索革命：Perplexity · SearchGPT · AI Overviews", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/01_%E5%85%A5%E5%8F%A3%E9%87%8D%E6%9E%84/%E7%94%9F%E6%88%90%E5%BC%8F%E6%90%9C%E7%B4%A2%E9%9D%A9%E5%91%BD/"], ["AI 浏览器崛起：Comet · Arc · Dia", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/01_%E5%85%A5%E5%8F%A3%E9%87%8D%E6%9E%84/AI%E6%B5%8F%E8%A7%88%E5%99%A8%E5%B4%9B%E8%B5%B7/"]]}, {"name": "产品品类", "path": "", "pages": [["AI Coding 产品格局", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/02_%E4%BA%A7%E5%93%81%E5%93%81%E7%B1%BB/AI_Coding%E4%BA%A7%E5%93%81%E6%A0%BC%E5%B1%80/"], ["AI 原生社交与陪伴", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/02_%E4%BA%A7%E5%93%81%E5%93%81%E7%B1%BB/AI%E5%8E%9F%E7%94%9F%E7%A4%BE%E4%BA%A4/"]]}, {"name": "商业与地理", "path": "", "pages": [["广告 vs 订阅：AI 产品商业模式", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/03_%E5%95%86%E4%B8%9A%E4%B8%8E%E5%9C%B0%E7%90%86/AI%E4%BA%A7%E5%93%81%E5%95%86%E4%B8%9A%E6%A8%A1%E5%BC%8F/"], ["中国 AI 应用层大战：豆包 · Kimi · 元宝 · 通义", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/03_%E5%95%86%E4%B8%9A%E4%B8%8E%E5%9C%B0%E7%90%86/%E4%B8%AD%E5%9B%BDAI%E5%BA%94%E7%94%A8%E5%B1%82%E5%A4%A7%E6%88%98/"]]}, {"name": "公司研究", "path": "", "pages": [["Perplexity", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Perplexity/"], ["The Browser Company（Arc / Dia）", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/The_Browser_Company/"], ["Anysphere（Cursor）", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Anysphere/"], ["Vercel（v0）", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Vercel/"], ["Replit", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Replit/"], ["Lovable", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Lovable/"], ["Bolt.new", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Bolt/"], ["Character.AI", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/11_%E5%85%AC%E5%8F%B8%E7%A0%94%E7%A9%B6/Character/"]]}, {"name": "产品研究", "path": "", "pages": [["Perplexity Pro 与 Comet 浏览器", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Perplexity_Pro/"], ["Arc Search / Dia", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Arc_Search_Dia/"], ["Google AI Overviews", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Google_AI_Overviews/"], ["Microsoft Copilot Pages", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Copilot_Pages/"], ["ChatGPT 作为互联网入口的演变", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/ChatGPT%E4%BD%9C%E4%B8%BA%E5%85%A5%E5%8F%A3/"], ["Kimi 探索版", "05_AI%E4%BA%92%E8%81%94%E7%BD%91/12_%E4%BA%A7%E5%93%81%E7%A0%94%E7%A9%B6/Kimi%E6%8E%A2%E7%B4%A2%E7%89%88/"]]}], "方法论": [{"name": "基石", "path": "", "pages": [["如何做一次公司研究", "99_%E6%96%B9%E6%B3%95%E8%AE%BA/%E5%A6%82%E4%BD%95%E5%81%9A%E4%B8%80%E6%AC%A1%E5%85%AC%E5%8F%B8%E8%B0%83%E7%A0%94/"], ["产品调研模板", "99_%E6%96%B9%E6%B3%95%E8%AE%BA/%E4%BA%A7%E5%93%81%E8%B0%83%E7%A0%94%E6%A8%A1%E6%9D%BF/"], ["行业研究框架：SCP · 波特五力 · 价值链", "99_%E6%96%B9%E6%B3%95%E8%AE%BA/%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6%E6%A1%86%E6%9E%B6/"]]}, {"name": "信息源与工具", "path": "", "pages": [["一手信息源清单：财报 · 招股书 · 访谈 · 播客", "99_%E6%96%B9%E6%B3%95%E8%AE%BA/%E4%B8%80%E6%89%8B%E4%BF%A1%E6%81%AF%E6%BA%90%E6%B8%85%E5%8D%95/"], ["常用行业数据源：Gartner · IDC · 艾瑞", "99_%E6%96%B9%E6%B3%95%E8%AE%BA/%E8%A1%8C%E4%B8%9A%E6%95%B0%E6%8D%AE%E6%BA%90/"], ["用 AI 辅助行业研究的工作流", "99_%E6%96%B9%E6%B3%95%E8%AE%BA/%E7%94%A8AI%E8%BE%85%E5%8A%A9%E8%A1%8C%E4%B8%9A%E7%A0%94%E7%A9%B6%E7%9A%84%E5%B7%A5%E4%BD%9C%E6%B5%81/"]]}], "关于": [{"name": "关于本站", "path": "%E5%85%B3%E4%BA%8E%E6%9C%AC%E7%AB%99/", "pages": []}, {"name": "更新日志", "path": "%E6%9B%B4%E6%96%B0%E6%97%A5%E5%BF%97/", "pages": []}]};

  if (typeof tabData === "undefined") return;

  function getBase() {
    if (typeof __md_scope !== "undefined" && __md_scope.pathname) {
      return __md_scope.pathname.endsWith("/") ? __md_scope.pathname : __md_scope.pathname + "/";
    }
    var path = new URL(".", window.location.href).pathname;
    return path.endsWith("/") ? path : path + "/";
  }

  var currentDropdown = null;
  var currentTab = null;
  var currentSubMenu = null;

  function hideAll() {
    if (currentSubMenu) { currentSubMenu.remove(); currentSubMenu = null; }
    if (currentDropdown) { currentDropdown.remove(); currentDropdown = null; currentTab = null; }
  }

  function hideSubMenu() {
    if (currentSubMenu) { currentSubMenu.remove(); currentSubMenu = null; }
  }

  function showSubMenu(itemEl, pages, base, parentRect) {
    hideSubMenu();
    var sub = document.createElement("div");
    sub.className = "tab-dropdown tab-submenu";
    pages.forEach(function (p) {
      var a = document.createElement("a");
      a.className = "tab-dropdown__item";
      a.textContent = p[0];
      a.href = base + p[1];
      sub.appendChild(a);
    });
    var itemRect = itemEl.getBoundingClientRect();
    sub.style.position = "fixed";
    sub.style.top = itemRect.top + "px";
    sub.style.left = parentRect.right + 2 + "px";
    document.body.appendChild(sub);
    currentSubMenu = sub;
  }

  function show(link, sections) {
    if (currentTab === link) return;
    hideAll();
    currentTab = link;
    var base = getBase();
    var rect = link.getBoundingClientRect();
    var el = document.createElement("div");
    el.className = "tab-dropdown";
    sections.forEach(function (sec) {
      var a = document.createElement("a");
      a.className = "tab-dropdown__item";
      a.textContent = sec.name;
      a.href = sec.path ? base + sec.path : (link.getAttribute("href") || link.href);
      if (sec.pages && sec.pages.length > 0) {
        a.classList.add("has-submenu");
        a.addEventListener("mouseenter", function () {
          showSubMenu(a, sec.pages, base, el.getBoundingClientRect());
        });
      } else {
        a.addEventListener("mouseenter", hideSubMenu);
      }
      el.appendChild(a);
    });
    el.style.position = "fixed";
    el.style.top = rect.bottom + "px";
    el.style.left = rect.left + rect.width / 2 + "px";
    el.style.transform = "translateX(-50%)";
    document.body.appendChild(el);
    currentDropdown = el;
  }

  function init() {
    var tabsBar = document.querySelector(".md-tabs");
    if (!tabsBar || tabsBar.getAttribute("data-dd")) return;
    tabsBar.setAttribute("data-dd", "1");

    document.querySelectorAll(".md-tabs__link").forEach(function (link) {
      var text = link.textContent.trim();
      var sections = tabData[text];
      if (!sections) return;
      link.addEventListener("mouseenter", function () { show(link, sections); });
    });

    document.addEventListener("mousemove", function (e) {
      if (!currentDropdown) return;
      var tbr = document.querySelector(".md-tabs").getBoundingClientRect();
      var ddr = currentDropdown.getBoundingClientRect();
      var inTabs = e.clientY >= tbr.top && e.clientY <= tbr.bottom + 4
                   && e.clientX >= tbr.left && e.clientX <= tbr.right;
      var inDd = e.clientY >= ddr.top - 4 && e.clientY <= ddr.bottom
                 && e.clientX >= ddr.left && e.clientX <= ddr.right;
      var inSub = false;
      if (currentSubMenu) {
        var sr = currentSubMenu.getBoundingClientRect();
        inSub = e.clientY >= sr.top && e.clientY <= sr.bottom
                && e.clientX >= sr.left - 4 && e.clientX <= sr.right;
      }
      if (!inTabs && !inDd && !inSub) hideAll();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
  if (typeof document$ !== "undefined") {
    document$.subscribe(function () { init(); });
  }
})();
