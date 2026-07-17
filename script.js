

const SKILLS = [
  { name: "Figma", icon: "figma", level: 4 },
  { name: "Adobe Photoshop", icon: "photoshop", level: 5 },
  { name: "Adobe Illustrator", icon: "illustrator", level: 5 },
  { name: "Adobe InDesign", icon: "indesign", level: 4 },
  { name: "Adobe After Effects", icon: "aftereffects", level: 4 },
  { name: "Adobe Premiere Pro", icon: "premiere", level: 3 },
  { name: "CorelDRAW", icon: "coreldraw", level: 4 },
  { name: "Blender", icon: "blender", level: 3 }
];

const PROJECTS = [
  {
    id: "Fast Bowling-logotype",
    title: "Fast Bowling",
    category: "логотипы",
    description: "Современный формат динамичных боулинг-дуэлей, разработанный Континентальной Лигой Боулинга (КЛБ).",
    image: "assets/images/projects/project-01.png",
    goals: "Разработать современный и узнаваемый логотип для боулинг-клуба Fast Bowling, отражающий динамику игры и соответствующий фирменному стилю проекта.",
    result: "Создан лаконичный логотип, который легко масштабируется, хорошо воспринимается на различных носителях и стал основой визуальной айдентики клуба.",
    software: ["Figma", "Illustrator", "InDesign"],
    gallery: ["assets/images/projects/project-01.png", "assets/images/projects/project-01_1.png", "assets/images/projects/project-02.png"]
  },
  {
    id: "фили",
    title: "ФИЛИ",
    category: "брендинг",
    description: "Разработка логотипа и фирменного стиля для ледовой арены «ФИЛИ» (Москва).",
    image: "assets/images/projects/project-03.png",
    goals: "Создать современный и запоминающийся логотип с универсальной системой айдентики для цифровых и печатных носителей.",
    result: "Разработан динамичный фирменный знак в цветах заказчика. Логотип адаптирован для фасада, навигации, формы, сувенирной продукции и рекламных материалов.",
    software: ["Illustrator", "Figma", "Photoshop"],
    gallery: ["assets/images/projects/project-03.png", "assets/images/projects/project-04.png", "assets/images/projects/project-05.png"]
  },
  {
    id: "Linebet",
    title: "Linebet",
    category: "мерч",
    description: "Разработка дизайна фирменного мерча Linebet для выставок и промо-мероприятий.",
    image: "assets/images/projects/project-06.png",
    goals: "Разработать яркий и узнаваемый дизайн мерча, который привлекает внимание, усиливает визуальную идентичность бренда и эффективно представляет компанию на выставках.",
    result: "Выполнен дизайн жилета, разработана выкройка спортивной формы, подготовлены макеты и произведена полная предпечатная подготовка для производства. Итоговый мерч соответствует фирменному стилю Linebet и готов к серийному изготовлению.",
    software: ["Illustrator", "Photoshop"],
    gallery: ["assets/images/projects/project-06.png", "assets/images/projects/project-07_2.png", "assets/images/projects/project-08.png"]
  },
  {
    id: "Кузнецкбизнесбанк",
    title: "Кузнецкбизнесбанк",
    category: "полиграфия",
    description: "Разработка дизайна полиграфической продукции для рекламной кампании Кузнецкбизнесбанка.",
    image: "assets/images/projects/project-09.png",
    goals: "Создать серию рекламных материалов в фирменном стиле банка и подготовить макеты к качественной тиражной печати. ",
    result: "Разработаны дизайн-макеты широкоформатного баннера, плаката и рекламной листовки. Выполнена предпечатная подготовка всех материалов, что обеспечило их корректное изготовление и размещение в городской среде.",
    software: ["Illustrator", "Photoshop"],
    gallery: ["assets/images/projects/project-09.png", "assets/images/projects/project-10.png"]   
  },
  {
    id: "Клаксон",
    title: "Автошкола Клаксон",
    category: "баннера РСЯ",
    description: "Разработка и адаптация рекламных баннеров для рекламной сети Яндекса (РСЯ).",
    image: "assets/images/projects/project-11.png",
    goals: "Создать привлекательные рекламные креативы, которые эффективно привлекают внимание аудитории и соответствуют требованиям Яндекс Рекламы.",
    result: "На основе технического задания и предоставленных рекламных офферов разработана серия баннеров в различных форматах для размещения в Рекламной сети Яндекса. Все макеты адаптированы под требования площадки и выдержаны в едином фирменном стиле.",
    software: ["Figma", "Photoshop"],
    gallery: ["assets/images/projects/project-11.png", "assets/images/projects/project-12.png", "assets/images/projects/project-13.png", "assets/images/projects/project-14.png"]
  },
  {
    id: "craft-marketplace",
    title: "Kapous Professional",
    category: "карточки для маркетплейсов",
    description: "Оформление карточек товаров для линейки средств по уходу за волосами Kapous Professional.",
    image: "assets/images/projects/project-15.png",
    goals: "Повысить привлекательность карточки, визуально выделить продукт среди конкурентов и увеличить конверсию за счет понятной презентации преимуществ.",
    result: "Создана серия продающих карточек с современной визуальной концепцией и четкой структурой информации. Новый дизайн помог повысить продажи товара на 28% и улучшить восприятие бренда на маркетплейсе.",
    software: ["Photoshop", "Figma"],
    gallery: ["assets/images/projects/project-15.png", "assets/images/projects/project-16.png"]
  },
  {
    id: "Linebet_2",
    title: "Linebet",
    category: "баннера",
    description: "Дизайн сторис, публикаций и рекламных баннеров для социальных сетей Linebet.",
    image: "assets/images/projects/project-17.png",
    goals: "Создать единую визуальную систему контента на основе фирменного стиля бренда.",
    result: "Разработана серия сторис, постов и баннеров в единой стилистике, повысившая узнаваемость бренда и обеспечившая единый визуальный образ во всех социальных сетях.",
    software: ["Illustrator", "Photoshop", "Figma"],
    gallery: ["assets/images/projects/project-17.png", "assets/images/projects/project-18.png", "assets/images/projects/project-19.png", "assets/images/projects/project-20.png"]
  }
];


const CATEGORY_MAP = {
  logotypes: "логотипы",
  branding: "брендинг",
  print: "полиграфия",
  merch: "мерч",
  bannersYAN: "баннера РСЯ",
  marketplace: "карточки для маркетплейсов",
  banners: "баннера"
};


const SKILL_ICONS = {
  figma: '<img src="assets/images/Figma-logo.png" alt="figma" width="28" height="28">',
  photoshop: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#001E36"/><text x="12" y="16" text-anchor="middle" fill="#31A8FF" font-size="10" font-weight="700" font-family="Arial">Ps</text></svg>',
  illustrator: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#330000"/><text x="12" y="16" text-anchor="middle" fill="#FF9A00" font-size="10" font-weight="700" font-family="Arial">Ai</text></svg>',
  indesign: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#490021"/><text x="12" y="16" text-anchor="middle" fill="#FF3366" font-size="9" font-weight="700" font-family="Arial">Id</text></svg>',
  aftereffects: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#00005B"/><text x="12" y="16" text-anchor="middle" fill="#9999FF" font-size="9" font-weight="700" font-family="Arial">Ae</text></svg>',
  premiere: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none"><rect width="24" height="24" rx="4" fill="#00005B"/><text x="12" y="16" text-anchor="middle" fill="#EA77FF" font-size="9" font-weight="700" font-family="Arial">Pr</text></svg>',
  coreldraw: '<img src="assets/images/coreldraw-logo.png" alt="coreldraw" width="28" height="28">',
  blender: '<img src="assets/images/blender-logo.png" alt="Blender" width="28" height="28">'
};



const header = document.getElementById("header");
const mainNav = document.getElementById("mainNav");
const burgerMenu = document.getElementById("burgerMenu");
const mobileMenu = document.getElementById("mobileMenu");
const themeToggle = document.getElementById("themeToggle");
const scrollProgressBar = document.getElementById("scrollProgressBar");
const backToTop = document.getElementById("backToTop");
const skillsGrid = document.getElementById("skillsGrid");
const projectsGrid = document.getElementById("projectsGrid");
const projectFilter = document.getElementById("projectFilter");
const projectModal = document.getElementById("projectModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");
const modalContent = document.getElementById("modalContent");
const lightbox = document.getElementById("lightbox");
const lightboxOverlay = document.getElementById("lightboxOverlay");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxImage = document.getElementById("lightboxImage");
const customCursor = document.getElementById("customCursor");
const customCursorFollower = document.getElementById("customCursorFollower");



function renderSkills() {
  skillsGrid.innerHTML = SKILLS.map((skill) => {
    const dots = Array.from({ length: 5 }, (_, i) =>
      `<span class="skill-card__dot${i < skill.level ? " is-filled" : ""}"></span>`
    ).join("");

    return `
      <article class="skill-card reveal">
        <div class="skill-card__icon" aria-hidden="true">${SKILL_ICONS[skill.icon] || ""}</div>
        <h3 class="skill-card__name">${skill.name}</h3>
        <div class="skill-card__level" aria-label="Proficiency ${skill.level} out of 5">${dots}</div>
      </article>
    `;
  }).join("");
}



function renderProjects() {
  projectsGrid.innerHTML = PROJECTS.map((project) => `
    <article class="project-card reveal" data-category="${project.category}" data-id="${project.id}">
      <button type="button" class="project-card__link" data-project="${project.id}" aria-label="View ${project.title} project">
        <div class="project-card__image-wrap">
          <img
            src="${project.image}"
            alt="${project.title} preview"
            class="project-card__image"
            loading="lazy"
            width="640"
            height="400"
          >
          <span class="project-card__category">${project.category}</span>
        </div>
        <div class="project-card__body">
          <h3 class="project-card__title">${project.title}</h3>
          <p class="project-card__desc">${project.description}</p>
          <span class="btn btn--ghost">Посмотреть проект</span>
        </div>
      </button>
    </article>
  `).join("");
}



function toggleMobileMenu(forceClose) {
  const isOpen = forceClose ? false : !mobileMenu.classList.contains("is-open");

  mobileMenu.classList.toggle("is-open", isOpen);
  burgerMenu.classList.toggle("is-active", isOpen);
  burgerMenu.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("menu-open", isOpen);
}

function initMobileMenu() {
  burgerMenu.addEventListener("click", () => toggleMobileMenu());

  mobileMenu.querySelectorAll(".mobile-menu__link").forEach((link) => {
    link.addEventListener("click", () => toggleMobileMenu(true));
  });
}



function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      event.preventDefault();
      toggleMobileMenu(true);

      const headerOffset = header.offsetHeight;
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerOffset;

      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    });
  });
}


function updateActiveNav() {
  const sections = ["projects", "skills", "about", "contact"];
  const scrollPos = window.scrollY + header.offsetHeight + 100;

  let currentSection = "";

  sections.forEach((id) => {
    const section = document.getElementById(id);
    if (section && section.offsetTop <= scrollPos) {
      currentSection = id;
    }
  });

  document.querySelectorAll(".nav__link").forEach((link) => {
    const navTarget = link.dataset.nav;
    const isActive =
      (navTarget === "works" && currentSection === "projects") ||
      navTarget === currentSection;

    link.classList.toggle("is-active", isActive);
  });
}



function updateHeaderOnScroll() {
  header.classList.toggle("is-scrolled", window.scrollY > 20);
}



function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  scrollProgressBar.style.width = `${progress}%`;
}


function updateBackToTop() {
  backToTop.classList.toggle("is-visible", window.scrollY > 600);
}

function initBackToTop() {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}



function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((el) => observer.observe(el));
}



let activeFilter = "all";

function filterProjects(filter) {
  activeFilter = filter;
  const cards = projectsGrid.querySelectorAll(".project-card");

  projectFilter.querySelectorAll(".filter__btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.filter === filter);
  });

  cards.forEach((card) => {
    card.classList.add("is-fading");
  });

  setTimeout(() => {
    cards.forEach((card) => {
      const category = card.dataset.category;
      const shouldShow = filter === "all" || category === filter;

      card.classList.toggle("is-hidden", !shouldShow);
      card.classList.remove("is-fading");
    });
  }, 250);
}

function initCategoryFilter() {
  projectFilter.addEventListener("click", (event) => {
    const btn = event.target.closest(".filter__btn");
    if (!btn) return;
    filterProjects(btn.dataset.filter);
  });

  document.querySelectorAll(".category-pill").forEach((pill) => {
    pill.addEventListener("click", (event) => {
      const href = pill.getAttribute("href");
      const anchorId = href.replace("#", "");
      const filter = CATEGORY_MAP[anchorId.replace("category-", "")];

      if (filter) {
        event.preventDefault();
        filterProjects(filter);

        const projectsSection = document.getElementById("projects");
        const headerOffset = header.offsetHeight;
        const targetPosition = projectsSection.getBoundingClientRect().top + window.scrollY - headerOffset;
        window.scrollTo({ top: targetPosition, behavior: "smooth" });
      }
    });
  });
}


function openProjectModal(projectId) {
  const project = PROJECTS.find((p) => p.id === projectId);
  if (!project) return;

  modalContent.innerHTML = `
    <div class="modal__gallery">
      ${project.gallery.map((src, index) => `
        <button type="button" class="modal__gallery-item" data-lightbox="${src}" aria-label="Open image ${index + 1}">
          <img src="${src}" alt="${project.title} — image ${index + 1}" loading="lazy">
        </button>
      `).join("")}
    </div>
    <div class="modal__body">
      <span class="modal__category">${project.category}</span>
      <h2 class="modal__title" id="modalTitle">${project.title}</h2>
      <p class="modal__desc">${project.description}</p>
      <div class="modal__details">
        <div class="modal__detail">
          <span class="modal__detail-label">Цель проекта</span>
          <p class="modal__detail-text">${project.goals}</p>
        </div>
        <div class="modal__detail">
          <span class="modal__detail-label">Результат</span>
          <p class="modal__detail-text">${project.result}</p>
        </div>
        <div class="modal__detail">
          <span class="modal__detail-label">Инструменты</span>
          <div class="modal__tools">
            ${project.software.map((tool) => `<span class="modal__tool">${tool}</span>`).join("")}
          </div>
        </div>
      </div>
    </div>
  `;

  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modalClose.focus();

  modalContent.querySelectorAll("[data-lightbox]").forEach((btn) => {
    btn.addEventListener("click", () => openLightbox(btn.dataset.lightbox, project.title));
  });
}

function closeProjectModal() {
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function initProjectModal() {
  projectsGrid.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-project]");
    if (!trigger) return;
    openProjectModal(trigger.dataset.project);
  });

  modalClose.addEventListener("click", closeProjectModal);
  modalOverlay.addEventListener("click", closeProjectModal);
}


function openLightbox(src, alt) {
  lightboxImage.src = src;
  lightboxImage.alt = alt;
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
}

function initLightbox() {
  lightboxClose.addEventListener("click", closeLightbox);
  lightboxOverlay.addEventListener("click", closeLightbox);
}



function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("portfolio-theme", theme);

  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.content = theme === "dark" ? "#0A0A0A" : "#FAFAFA";
  }
}

function initThemeToggle() {
  const savedTheme = localStorage.getItem("portfolio-theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setTheme(savedTheme || (prefersDark ? "dark" : "light"));

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });
}



function initCustomCursor() {
  if (window.matchMedia("(hover: none)").matches || window.innerWidth <= 1024) return;

  document.body.classList.add("has-custom-cursor");
  let mouseX = 0;
  let mouseY = 0;
  let followerX = 0;
  let followerY = 0;

  document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
    customCursor.style.left = `${mouseX}px`;
    customCursor.style.top = `${mouseY}px`;
    customCursor.classList.add("is-active");
    customCursorFollower.classList.add("is-active");
  });

  function animateFollower() {
    followerX += (mouseX - followerX) * 0.15;
    followerY += (mouseY - followerY) * 0.15;
    customCursorFollower.style.left = `${followerX}px`;
    customCursorFollower.style.top = `${followerY}px`;
    requestAnimationFrame(animateFollower);
  }
  animateFollower();

  const interactiveElements = "a, button, .project-card__link, .filter__btn, .category-pill";
  document.addEventListener("mouseover", (event) => {
    if (event.target.closest(interactiveElements)) {
      customCursor.classList.add("is-hover");
    }
  });
  document.addEventListener("mouseout", (event) => {
    if (event.target.closest(interactiveElements)) {
      customCursor.classList.remove("is-hover");
    }
  });
}



function initKeyboardNav() {
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (lightbox.classList.contains("is-open")) closeLightbox();
      else if (projectModal.classList.contains("is-open")) closeProjectModal();
      else if (mobileMenu.classList.contains("is-open")) toggleMobileMenu(true);
    }
  });
}



function onScroll() {
  updateHeaderOnScroll();
  updateScrollProgress();
  updateBackToTop();
  updateActiveNav();
}


function updateSectionBackground() {
  const sections = document.querySelectorAll('.section');
  let currentSection = null;
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSection = section;
    }
  });
  if (currentSection) {
    const bgColor = currentSection.dataset.bg || 'var(--color-bg)';
    document.body.style.backgroundColor = bgColor;
    document.body.style.transition = 'background-color 0.6s ease';
  }
}
window.addEventListener('scroll', updateSectionBackground);




function initPageTransition() {
  document.body.classList.add("page-transition");
}



function init() {
  renderSkills();
  renderProjects();
  initMobileMenu();
  initSmoothScroll();
  initBackToTop();
  initCategoryFilter();
  initProjectModal();
  initLightbox();
  initThemeToggle();
  initCustomCursor();
  initKeyboardNav();
  initPageTransition();

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  requestAnimationFrame(() => {
    initScrollAnimations();
  });
}

document.addEventListener("DOMContentLoaded", init);
