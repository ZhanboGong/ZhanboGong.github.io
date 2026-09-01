(() => {
  "use strict";

  const content = window.PORTFOLIO_CONTENT;
  if (!content) return;

  const labels = {
    en: {
      profile: "Profile",
      experience: "Experience",
      education: "Education",
      details: "Details",
      skills: "Skills",
      download: "Download PDF",
    },
    zh: {
      profile: "个人简介",
      experience: "工作经历",
      education: "教育背景",
      details: "基本信息",
      skills: "专业技能",
      download: "下载 PDF 简历",
    },
  };

  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  const textFor = (value, lang) => {
    if (value === null || value === undefined) return "";
    if (typeof value === "object" && !Array.isArray(value)) {
      return value[lang] ?? value.en ?? value.zh ?? "";
    }
    return String(value);
  };
  const make = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const setText = (selector, text) => {
    const node = $(selector);
    if (node) node.textContent = text;
  };

  let language = localStorage.getItem("resume-language") || content.settings.defaultLanguage || "en";
  if (!labels[language]) language = "en";

  function renderContacts(lang) {
    const list = $("#contact-list");
    list.replaceChildren();
    const location = textFor(content.profile.location, lang);
    if (location) list.append(make("span", "", location));

    if (content.contact.email) {
      const email = make("a", "", content.contact.email);
      email.href = `mailto:${content.contact.email}`;
      list.append(email);
    }

    [
      ["LinkedIn", content.contact.linkedin],
      ["GitHub", content.contact.github],
      ["Website", content.contact.other],
    ].forEach(([name, url]) => {
      if (!url) return;
      const link = make("a", "", name);
      link.href = url;
      link.target = "_blank";
      link.rel = "noreferrer";
      list.append(link);
    });
  }

  function renderAbout(lang) {
    const container = $("#about-copy");
    container.replaceChildren();
    container.closest(".resume-section").hidden = content.about.paragraphs.length === 0;
    content.about.paragraphs.forEach((paragraph) => {
      container.append(make("p", "", textFor(paragraph, lang)));
    });
  }

  function renderExperience(lang) {
    const container = $("#experience-list");
    container.replaceChildren();
    content.experience.forEach((job) => {
      const article = make("article", "entry");
      const header = make("div", "entry-header");
      header.append(
        make("h3", "", textFor(job.role, lang)),
        make("p", "entry-period", textFor(job.period, lang)),
      );
      article.append(header, make("p", "entry-subtitle", textFor(job.company, lang)));
      const location = textFor(job.location, lang);
      if (location) article.append(make("p", "entry-meta", location));
      if (job.bullets.length) {
        const bullets = make("ul", "");
        job.bullets.forEach((bullet) => bullets.append(make("li", "", textFor(bullet, lang))));
        article.append(bullets);
      }
      container.append(article);
    });
  }

  function renderEducation(lang) {
    const container = $("#education-list");
    container.replaceChildren();
    content.education.forEach((item) => {
      const article = make("article", "entry");
      const header = make("div", "entry-header");
      header.append(
        make("h3", "", textFor(item.degree, lang)),
        make("p", "entry-period", textFor(item.period, lang)),
      );
      article.append(header, make("p", "entry-subtitle", textFor(item.institution, lang)));
      const details = item.details || (item.detail ? [item.detail] : []);
      if (details.length) {
        const list = make("ul", "");
        details.forEach((detail) => list.append(make("li", "", textFor(detail, lang))));
        article.append(list);
      }
      container.append(article);
    });
  }

  function renderDetails(lang) {
    const container = $("#details-list");
    container.replaceChildren();
    content.highlights.slice(0, 3).forEach((item) => {
      const row = make("div", "detail-row");
      row.append(
        make("dt", "", textFor(item.label, lang)),
        make("dd", "", textFor(item.value, lang)),
      );
      container.append(row);
    });
  }

  function renderSkills(lang) {
    const container = $("#skills-list");
    container.replaceChildren();
    content.skills.forEach((group) => {
      const section = make("div", "skill-group");
      section.append(make("h3", "", textFor(group.name, lang)));
      const list = make("ul", "");
      group.items.forEach((item) => list.append(make("li", "", textFor(item, lang))));
      section.append(list);
      container.append(section);
    });
  }

  function render(lang) {
    const copy = labels[lang];
    const profile = content.profile;

    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    const displayName = textFor(profile.name, lang);
    document.title = `${displayName} — ${textFor(profile.role, lang)}`;
    setText("#profile-name", displayName);
    setText("#profile-role", textFor(profile.role, lang));
    setText("#profile-summary", textFor(profile.intro, lang));
    setText("#about-title", copy.profile);
    setText("#experience-title", copy.experience);
    setText("#education-title", copy.education);
    setText("#details-title", copy.details);
    setText("#skills-title", copy.skills);
    setText("#footer-copy", `© ${new Date().getFullYear()} ${displayName}`);

    const photo = $("#profile-photo");
    photo.src = content.settings.photo || "assets/profile.jpg";
    photo.alt = lang === "zh" ? `${displayName}的个人照片` : `Portrait of ${displayName}`;

    const download = $("#resume-download");
    download.hidden = !content.settings.resumeUrl;
    download.textContent = copy.download;
    if (content.settings.resumeUrl) download.href = content.settings.resumeUrl;

    const footerEmail = $("#footer-email");
    footerEmail.textContent = content.contact.email;
    footerEmail.href = `mailto:${content.contact.email}`;

    renderContacts(lang);
    renderAbout(lang);
    renderExperience(lang);
    renderEducation(lang);
    renderDetails(lang);
    renderSkills(lang);

    $$(".language-button").forEach((button) => {
      const active = button.dataset.lang === lang;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", String(active));
    });
  }

  $$(".language-button").forEach((button) => {
    button.addEventListener("click", () => {
      language = button.dataset.lang;
      localStorage.setItem("resume-language", language);
      render(language);
    });
  });

  render(language);
})();
