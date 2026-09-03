/*
  EDIT THIS FILE to personalise your website.
  修改这个文件即可填写你的个人信息。

  Keep the punctuation and quotation marks in place.
  请保留标点、引号和括号结构。
*/

window.PORTFOLIO_CONTENT = {
  settings: {
    defaultLanguage: "en",
    photo: "assets/profile.jpg",
    resumeUrl: "", // Example: "assets/resume.pdf"
  },

  profile: {
    name: { en: "Zhanbo Gong", zh: "龚展博" },
    role: {
      en: "Software Engineering Master's Student",
      zh: "软件工程硕士研究生（人工智能方向）",
    },
    location: {
      en: "",
      zh: "",
    },
    intro: {
      en: "Software engineering master's student specialising in artificial intelligence, with a Bachelor of Information Technology and internship experience in software maintenance, software engineering and development. Proficient in Java, Python and SQL, and familiar with Spring Boot, Vue, Django, MySQL, PostgreSQL and modern development tools. Interested in building reliable software and applying AI to real-world problems.",
      zh: "软件工程硕士研究生，专注于人工智能方向，拥有信息技术学士背景以及软件维护、软件工程和软件开发相关实习经历。熟练掌握 Java、Python 和 SQL，熟悉 Spring Boot、Vue、Django、MySQL、PostgreSQL 及常用开发工具。关注可靠软件系统的开发，以及人工智能在真实场景中的应用。",
    },
  },

  contact: {
    email: "zhanbogong11@gmail.com",
    linkedin: "",
    github: "https://github.com/ZhanboGong",
    other: "",
  },

  highlights: [
    {
      label: { en: "Nationality", zh: "国籍" },
      value: { en: "China", zh: "中国" },
    },
  ],

  about: {
    paragraphs: [],
  },

  experience: [
    {
      period: { en: "Sep 2026 — Present", zh: "2026.9 — 至今" },
      role: { en: "Software Development Intern", zh: "软件开发实习生" },
      company: { en: "Google (Alphabet)", zh: "Google（Alphabet）" },
      location: { en: "Internship", zh: "实习" },
      bullets: [],
    },
    {
      period: { en: "Dec 2025 — Mar 2026", zh: "2025.12 — 2026.3" },
      role: { en: "Software Development Intern", zh: "软件开发实习生" },
      company: { en: "Wuhan Dingbi Technology Co., Ltd.", zh: "武汉鼎碧科技有限公司" },
      location: { en: "Wuhan, China · Internship", zh: "武汉 · 实习" },
      bullets: [
        {
          en: "Contributed to the development of a health check-up appointment system using Java, Spring Boot and Vue.js.",
          zh: "基于 Java、Spring Boot 和 Vue.js 参与体检预约系统的开发。",
        },
        {
          en: "Implemented core frontend and backend business logic for user appointments and organisation-side administration, integrating Redis and database operations for data processing and API integration.",
          zh: "完成用户端预约与机构端管理的前后端核心业务逻辑，并结合 Redis 与数据库完成数据处理及接口联调。",
        },
      ],
    },
    {
      period: { en: "Jul 2024 — Aug 2024", zh: "2024.7 — 2024.8" },
      role: { en: "Software Engineering Intern", zh: "软件工程实习生" },
      company: {
        en: "Shenzhen Research Institute of Big Data, CUHK-Shenzhen",
        zh: "香港中文大学（深圳）深圳市大数据研究院",
      },
      location: { en: "Shenzhen, China · Internship", zh: "深圳 · 实习" },
      bullets: [
        {
          en: "Supported wind farm power forecasting and employee attrition analysis, covering data preparation, exploratory data analysis (EDA), feature extraction and model testing.",
          zh: "参与风电场功率预测与员工离职数据分析，负责数据整理、探索性数据分析（EDA）、特征提取及模型测试。",
        },
        {
          en: "Produced analytical findings to help the team identify data patterns and evaluate model performance.",
          zh: "汇总并输出分析结果，协助团队识别数据规律并验证模型效果。",
        },
      ],
    },
    {
      period: { en: "Jul 2023 — Aug 2023", zh: "2023.7 — 2023.8" },
      role: { en: "Software Maintenance Intern", zh: "软件维护实习生" },
      company: {
        en: "Winning Health Technology Group — Jiangxi Branch",
        zh: "卫宁健康科技集团股份有限公司江西分公司",
      },
      location: { en: "Jiangxi, China · Internship", zh: "江西 · 实习" },
      bullets: [
        {
          en: "Supported the day-to-day maintenance of hospital information system modules, including inpatient and outpatient physician workstations.",
          zh: "参与医院信息系统相关业务模块的日常维护，协助维护住院及门诊医师工作站系统。",
        },
        {
          en: "Documented nurse workstation workflows and PDA data interaction scenarios, providing practical references for ongoing maintenance and troubleshooting.",
          zh: "梳理护士工作站流程及移动设备（PDA）的数据交互场景，为后续系统维护和问题排查提供参考。",
        },
      ],
    },
  ],

  skills: [
    {
      name: { en: "Programming Languages", zh: "编程语言" },
      items: [
        { en: "Proficient: Java, Python, SQL", zh: "熟练：Java、Python、SQL" },
        {
          en: "Familiar: C, JavaScript, TypeScript, HTML, CSS",
          zh: "熟悉：C、JavaScript、TypeScript、HTML、CSS",
        },
      ],
    },
    {
      name: { en: "Development Frameworks", zh: "开发框架" },
      items: [{ en: "Spring Boot, Vue, Django", zh: "Spring Boot、Vue、Django" }],
    },
    {
      name: { en: "Databases & Tools", zh: "数据库与开发工具" },
      items: [
        { en: "Familiar: MySQL, PostgreSQL, Maven", zh: "熟悉：MySQL、PostgreSQL、Maven" },
        { en: "Working knowledge: Redis, Docker", zh: "了解：Redis、Docker" },
      ],
    },
  ],

  education: [
    {
      period: { en: "Jul 2026 — Present", zh: "2026.7 — 至今" },
      degree: {
        en: "Master of Software Engineering — Artificial Intelligence",
        zh: "软件工程硕士（人工智能方向）",
      },
      institution: { en: "The University of Melbourne", zh: "墨尔本大学" },
      details: [{ en: "Currently enrolled", zh: "在读" }],
    },
    {
      period: "2023 — 2026",
      degree: { en: "Bachelor of Information Technology", zh: "信息技术学士" },
      institution: { en: "Southern Cross University", zh: "南十字星大学" },
      details: [
        { en: "GPA: 6.5 / 7.0", zh: "绩点：6.5 / 7.0" },
        { en: "Recognition of Academic Excellence in 2025", zh: "2025 年学术卓越荣誉" },
        { en: "Recognition of Academic Excellence in 2024", zh: "2024 年学术卓越荣誉" },
      ],
    },
  ],
};
