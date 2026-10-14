const translations = new Map([
  ['发表与投稿状态依据 CV 与期刊页面。', 'Publication and submission statuses are based on my CV and journal pages.'],
  ['结合集群样本方差分析与灰色关联分析，研究茶园中卵形短须螨及其天敌的空间关系、聚集分布与采样尺度，为生物防治提供依据。', 'Combines clustered sample variance and grey correlation analyses to examine spatial relationships between Brevipalpus obovatus and its natural enemies in tea plantations, including aggregation patterns and sampling scales, to inform biological control.'],
  ['关于', 'About'],
  ['研究', 'Research'],
  ['论文', 'Publications'],
  ['经历', 'Experience'],
  ['教育', 'Education'],
  ['联系我 ↗', 'Contact me ↗'],
  ['从复杂观测中，<br>理解真实世界。', 'Understanding the world<br>through complex observations.'],
  ['我是<strong>格拉斯哥大学数学学院博士一年级学生</strong>，获得<strong>全额奖学金</strong>资助。我的研究兴趣包括时空建模、统计学习与不确定性感知推断，希望在噪声、缺失数据及分布变化下，构建可靠、可解释且能够支持决策的模型。', 'I am a <strong>first-year PhD student in the School of Mathematics at the University of Glasgow</strong>, supported by a <strong>full scholarship</strong>. My research interests include spatiotemporal modelling, statistical learning and uncertainty-aware inference, with a focus on reliable, interpretable models under noise, missing data and distribution shift.'],
  ['此前，我在纽约州立大学石溪分校与安徽大学修读应用数学与统计学、应用统计学双学士项目，并在 <strong>Prof. Tengfei Ma</strong> 的指导下开展时间序列重建与异常检测研究。', 'Previously, I studied Applied Mathematics & Statistics at Stony Brook University and Applied Statistics at Anhui University through a dual bachelor’s programme. I also conducted research on time-series reconstruction and anomaly detection under the supervision of <strong>Prof. Tengfei Ma</strong>.'],
  ['研究之外，我喜欢音乐、网球，也是一名爱猫人士。🐈', 'Outside research, I enjoy music and tennis, and I am a cat lover. 🐈'],
  ['查看完整 CV ↗', 'View full CV ↗'],
  ['时空依赖 · 因果结构', 'Temporal dependencies · Causal structure'],
  ['稳健推断 ↗', 'Robust inference ↗'],
  ['研究主题示意图', 'Illustration of research themes'],
  ['研究方向', 'Research interests'],
  ['时空与统计学习', 'Spatiotemporal & statistical learning'],
  ['通过时间依赖和结构感知建模，理解复杂观测系统；探索时间序列重建、异常检测与系统层面的一致性。', 'Understanding complex observational systems through temporal dependencies and structure-aware modelling, with an emphasis on time-series reconstruction, anomaly detection and system-level consistency.'],
  ['不确定性与稳健推断', 'Uncertainty & robust inference'],
  ['研究噪声、缺失数据及分布变化下的模型行为，将不确定性量化与可解释性融入科学工作流程。', 'Studying model behaviour under noise, missing data and distribution shift, integrating uncertainty quantification and interpretability into scientific workflows.'],
  ['多源数据与科学系统', 'Data fusion & scientific systems'],
  ['融合传感器、环境及真实世界观测数据，结合因果信号与统计方法，支持有实际意义的决策。', 'Combining sensor, environmental and real-world observations with causal signals and statistical methods to support meaningful decisions.'],
  ['论文与研究工作', 'Publications & research'],
  ['发表与投稿状态依据所提供的 CV。', 'Publication and submission statuses are as listed in my CV.'],
  ['结合多尺度 Transformer、BYOL 风格的非对称自监督对齐与基于 Granger 的因果诊断，通过残差统计和结构偏差进行不确定性感知异常评分。', 'Combines multi-scale Transformers, BYOL-style asymmetric self-supervised alignment and Granger-based causal diagnostics. Residual statistics and structural deviations inform uncertainty-aware anomaly scoring.'],
  ['运用多变量统计方法研究动态环境系统，关注噪声观测数据下的不确定性感知推断。35(4), 407–428.', 'Applies multivariate statistical methods to dynamic environmental systems, focusing on uncertainty-aware inference with noisy observational data. 35(4), 407–428.'],
  ['结合模糊逻辑和灰色关联方法，对真实世界噪声数据中的非线性交互进行建模，提高低质量观测下的稳健性。', 'Combines fuzzy logic and grey correlation to model nonlinear interactions in noisy real-world data, with a focus on robustness under low-quality observations.'],
  ['DOI / 论文 ↗', 'DOI / Paper ↗'],
  ['研究与量化经历', 'Research & quantitative experience'],
  ['2025.06 — 至今*', 'Jun 2025 — Present*'],
  ['开发 TST、PatchTST 时间序列重建与异常检测模型；构建 PyTorch 自监督学习流程，在环境、金融与生物医学数据中研究噪声、缺失数据和分布变化，并开发可解释 AI 工具。', 'Developed TST and PatchTST models for time-series reconstruction and anomaly detection, built self-supervised pipelines in PyTorch, and explored robustness across environmental, financial and biomedical datasets. Developed explainable AI tools for scientific workflows.'],
  ['非线性投资组合优化与实证分析', 'Nonlinear portfolio optimisation & empirical analysis'],
  ['构建数据驱动的资产配置优化模型，应用预测建模与不确定性感知决策框架。', 'Built data-driven models for portfolio allocation using predictive modelling and uncertainty-aware decision frameworks.'],
  ['本科生创新项目', 'Undergraduate innovation project'],
  ['设计基于 IOWA 算子的区间数据融合模型；根据 CV，在不确定性条件下稳健性改善约 15%。', 'Designed interval data fusion models using the IOWA operator, improving robustness under uncertainty by approximately 15%, as reported in my CV.'],
  ['开发预测模型和优化策略，使用 LaTeX 撰写技术报告。', 'Developed predictive models and optimisation strategies, and produced technical reports in LaTeX.'],
  ['* “至今”为 CV 中的原始时间表述。', '* “Present” reflects the original dates in my CV.'],
  ['教育与技能', 'Education & skills'],
  ['数学学院 · 博士一年级在读', 'School of Mathematics · First-year PhD student'],
  ['全额奖学金资助 · 格拉斯哥，英国', 'Full scholarship · Glasgow, United Kingdom'],
  ['应用数学与统计学学士项目 · 纽约，美国', 'B.S. programme in Applied Mathematics & Statistics · New York, USA'],
  ['应用统计学学士项目 · 安徽，中国', 'B.S. programme in Applied Statistics · Anhui, China'],
  ['双学士项目 · CV 预计毕业时间：2026 年 5 月', 'Dual bachelor’s programme · Expected graduation in CV: May 2026'],
  ['GPA 3.58 / 4.00（SBU）<br>Dean’s List · College of Engineering and Applied Sciences · Fall 2025', 'GPA 3.58 / 4.00 (SBU)<br>Dean’s List · College of Engineering and Applied Sciences · Fall 2025'],
  ['课程：概率论、随机过程、时间序列分析、多变量统计、应用线性代数、数据结构、统计建模、计量经济学、自然灾害；另修读 Columbia University 的 Learning AI Through Visualization。', 'Coursework: Probability Theory, Stochastic Processes, Time Series Analysis, Multivariate Statistics, Applied Linear Algebra, Data Structures, Statistical Modelling, Econometrics and Natural Hazards; also Learning AI Through Visualization at Columbia University.'],
  ['工具与方法', 'Tools & methods'],
  ['语言', 'Languages'],
  ['中文 · 母语<br>英语 · IELTS 7<br>日语 · JLPT N2', 'Mandarin · Native<br>English · IELTS 7<br>Japanese · JLPT N2'],
  ['荣誉', 'Honours'],
  ['University of Glasgow 博士全额奖学金<br>MCM Award（2024，CV 教育栏目）<br>Outstanding Volunteer · 上海市残疾人联合会（2020）', 'University of Glasgow · Full PhD scholarship<br>MCM Award (2024, CV education section)<br>Outstanding Volunteer · Shanghai Disabled Persons’ Federation (2020)'],
  ['研究之外', 'Beyond research'],
  ['写作与科学传播', 'Writing & science communication'],
  ['安徽大学媒体中心学生记者（2022–2024），采访并为官方微信公众号撰稿，累计阅读量 50K+。参与 SEE 基金会长江江豚项目（2023–2024），设计科学传播模块。', 'Student journalist at the AHU Media Center (2022–2024), conducting interviews and writing for the university’s official WeChat platform, with 50K+ total views. Designed science communication modules for the SEE Foundation’s Yangtze Finless Porpoise programme (2023–2024).'],
  ['音乐与团队协作', 'Music & teamwork'],
  ['摇滚乐队创始人及队长（2023 年起，依据 CV），组织 4 场现场演出，负责团队协作与活动安排。', 'Founder and leader of a rock band (since 2023, as listed in my CV). Organised four live performances and managed team collaboration and event logistics.'],
  ['体育与交流', 'Sport & exchange'],
  ['2023 年大学网球公开赛女子双打八强（30+ 支队伍）。2024 年在 Cambridge University 的经济研究活动中，围绕诺贝尔经济学奖得主进行分享。', 'Placed in the top eight in women’s doubles at the 2023 College Tennis Open, among 30+ teams. Gave talks on Nobel laureates in Economics during an economics research activity at Cambridge University in 2024.'],
  ['让观测成为理解的起点。', 'Let observations lead to understanding.'],
  ['返回顶部 ↑', 'Back to top ↑']
]);

const languageButton = document.createElement('button');
languageButton.type = 'button';
languageButton.className = 'language-toggle';
document.querySelector('.contact').after(languageButton);

const translatedElements = Array.from(document.querySelectorAll('body *'))
  .filter(element => translations.has(element.innerHTML))
  .map(element => ({ element, chinese: element.innerHTML, english: translations.get(element.innerHTML) }));

function setLanguage(language) {
  const isEnglish = language === 'en';
  document.documentElement.lang = isEnglish ? 'en' : 'zh-CN';
  translatedElements.forEach(({ element, chinese, english }) => {
    element.innerHTML = isEnglish ? english : chinese;
  });
  languageButton.textContent = isEnglish ? '中文' : 'English';
  languageButton.lang = isEnglish ? 'zh-CN' : 'en';
  languageButton.setAttribute('aria-label', isEnglish ? 'Switch to Chinese' : '切换为英文');
  document.querySelector('nav').setAttribute('aria-label', isEnglish ? 'Main navigation' : '主导航');
  document.querySelector('.research-art').setAttribute('aria-label', isEnglish ? 'Illustration of time series and uncertainty research' : '时序与不确定性研究主题示意');
  document.querySelector('meta[name="description"]').content = isEnglish
    ? 'Youlan Zhao — PhD student at the University of Glasgow. Scientific systems, time series and uncertainty-aware inference.'
    : '赵幽兰 — 格拉斯哥大学博士生，研究科学系统、时间序列与不确定性感知推断。';
}

languageButton.addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'en' ? 'zh-CN' : 'en');
});
setLanguage('en');
