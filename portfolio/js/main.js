/* ==========================================================
   RFA.dev — i18n (FR/EN) + thème clair/sombre + navigation
   ========================================================== */

const translations = {
  fr: {
    "nav.exp": "Expérience",
    "nav.projects": "Projets",
    "nav.skills": "Compétences",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    "hero.location": "Antananarivo, Madagascar — disponible pour missions",
    "hero.role": "Informaticien &amp; Électronique — logiciel, web, mobile &amp; systèmes embarqués",
    "hero.bio": "Développeur formé au croisement du logiciel et de l'électronique&nbsp;: applications desktop en C#/.NET, expériences web et mobile en React, et systèmes électriques embarqués.",
    "hero.cta.projects": "Voir les projets",
    "hero.cta.mail": "Écrire un email",
    "hero.spec.title": "Fiche technique",
    "hero.spec.location": "Localisation",
    "hero.spec.profile": "Profil",
    "hero.spec.profileValue": "Logiciel &amp; électronique",
    "hero.spec.stack": "Stack clé",
    "hero.spec.status": "Disponibilité",
    "hero.spec.statusValue": "Ouvert aux missions",
    "exp.title": "Expérience professionnelle",
    "exp.duration": "Stage — 3 mois",
    "exp.role": "Développeur solo .NET / WinForms",
    "exp.b1": "Développement et maintenance d'applications desktop",
    "exp.b2": "Stage de trois mois sous la supervision d'une équipe de professionnels qualifiés",
    "exp.b3": "Optimisation des performances du logiciel et correction des bugs",
    "exp.b4": "Mise en place de tests pour assurer la qualité du code et la durabilité du logiciel",
    "proj.title": "Projets personnels",
    "proj.github": "Voir sur GitHub ↗",
    "proj.soon": "Bientôt sur GitHub",
    "status.done": "Terminé",
    "status.progress": "En cours",
    "proj.u1.title": "Jeu — Morpion",
    "proj.u1.desc": "Jeu web avec ML. 1 vs 1 joueur, ou 1 vs ordinateur (IA) avec plusieurs niveaux.",
    "proj.u2.title": "Site web vitrine",
    "proj.u2.desc": "Site de présentation statique, structure et style personnalisés.",
    "proj.u3.title": "Simulation de jeu",
    "proj.u3.desc": "Logique de simulation et rendu en application C#.",
    "proj.u4.title": "Mini jeu web",
    "proj.u4.desc": "Petit jeu jouable directement dans le navigateur.",
    "proj.u5.title": "Application culinaire",
    "proj.u5.desc": "Application mobile de recettes et de suivi culinaire.",
    "proj.u6.title": "Application de trajets de bus",
    "proj.u6.desc": "Application mobile pour suivre et planifier des trajets de bus.",
    "proj.u7.title": "Logiciel Windows culinaire",
    "proj.u7.desc": "Application desktop dédiée à la gestion culinaire.",
    "proj.u8.title": "Site web de renseignement",
    "proj.u8.desc": "Plateforme web d'information, en développement.",
    "proj.u9.title": "Outil de gestion de stock",
    "proj.u9.desc": "Application desktop qui suit les entrées et sorties de produits, et génère des graphiques d'analyse.",
    "skills.title": "Compétences",
    "skills.languages": "Langages",
    "skills.tools": "Outils &amp; frameworks",
    "skills.db": "Bases de données",
    "skills.os": "Systèmes d'exploitation",
    "skills.electronics": "Électronique",
    "skills.electronicsValue": "Systèmes électriques avancés",
    "skills.ontologies": "Ontologies",
    "skills.ontologiesValue": "Modélisation de connaissances, représentation et structuration de données",
    "edu.title": "Formation &amp; parcours",
    "edu.degree1": "Licence en Informatique — ISPM",
    "edu.degree1desc": "1ère à 3ème année&nbsp;: site vitrine, surveillance de santé, mini jeu web, convertisseur d'énergie cinétique, gestion d'établissement, domotique web/mobile, système électro-bâtiment.",
    "edu.degree2": "Baccalauréat, série D — Lycée Moderne Ampefiloha",
    "contact.title": "Un projet en tête&nbsp;? Parlons-en."
  },
  en: {
    "nav.exp": "Experience",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "hero.location": "Antananarivo, Madagascar — available for opportunities",
    "hero.role": "Software &amp; Electronics Engineer — web, mobile &amp; embedded systems",
    "hero.bio": "Developer trained at the crossroads of software and electronics: C#/.NET desktop applications, React web and mobile experiences, and embedded electrical systems.",
    "hero.cta.projects": "View projects",
    "hero.cta.mail": "Send an email",
    "hero.spec.title": "Fact sheet",
    "hero.spec.location": "Location",
    "hero.spec.profile": "Profile",
    "hero.spec.profileValue": "Software &amp; electronics",
    "hero.spec.stack": "Core stack",
    "hero.spec.status": "Availability",
    "hero.spec.statusValue": "Open to opportunities",
    "exp.title": "Professional experience",
    "exp.duration": "Internship — 3 months",
    "exp.role": "Solo .NET / WinForms developer",
    "exp.b1": "Development and maintenance of desktop applications",
    "exp.b2": "Three-month internship under the supervision of a qualified team",
    "exp.b3": "Software performance optimization and bug fixing",
    "exp.b4": "Set up testing to ensure code quality and software longevity",
    "proj.title": "Personal projects",
    "proj.github": "View on GitHub ↗",
    "proj.soon": "Coming soon on GitHub",
    "status.done": "Done",
    "status.progress": "In progress",
    "proj.u1.title": "Tic-Tac-Toe game",
    "proj.u1.desc": "Web game with ML. 1 vs 1 player, or 1 vs computer (AI) with several difficulty levels.",
    "proj.u2.title": "Showcase website",
    "proj.u2.desc": "Static presentation site with custom structure and styling.",
    "proj.u3.title": "Game simulation",
    "proj.u3.desc": "Simulation logic and rendering in a C# application.",
    "proj.u4.title": "Mini web game",
    "proj.u4.desc": "Small game playable directly in the browser.",
    "proj.u5.title": "Cooking app",
    "proj.u5.desc": "Mobile app for recipes and cooking tracking.",
    "proj.u6.title": "Bus route app",
    "proj.u6.desc": "Mobile app to track and plan bus routes.",
    "proj.u7.title": "Cooking desktop software",
    "proj.u7.desc": "Desktop application dedicated to cooking management.",
    "proj.u8.title": "Information website",
    "proj.u8.desc": "Web information platform, under development.",
    "proj.u9.title": "Inventory management tool",
    "proj.u9.desc": "Desktop app that tracks stock in and out, and generates analysis charts.",
    "skills.title": "Skills",
    "skills.languages": "Languages",
    "skills.tools": "Tools &amp; frameworks",
    "skills.db": "Databases",
    "skills.os": "Operating systems",
    "skills.electronics": "Electronics",
    "skills.electronicsValue": "Advanced electrical systems",
    "skills.ontologies": "Ontologies",
    "skills.ontologiesValue": "Knowledge modelling, data representation and structuring",
    "edu.title": "Education &amp; background",
    "edu.degree1": "Bachelor's in Computer Science — ISPM",
    "edu.degree1desc": "Years 1 to 3: showcase site, health monitoring, mini web game, kinetic energy converter, facility management, web/mobile home automation, building electro-system.",
    "edu.degree2": "Baccalaureate, science track — Lycée Moderne Ampefiloha",
    "contact.title": "Got a project in mind? Let's talk."
  }
};

function setLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = translations[lang][key];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });
  localStorage.setItem("rfa-lang", lang);
}

function setTheme(theme){
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("rfa-theme", theme);
}

document.addEventListener("DOMContentLoaded", () => {
  // --- i18n init ---
  const savedLang = localStorage.getItem("rfa-lang") ||
    (navigator.language && navigator.language.startsWith("en") ? "en" : "fr");
  setLang(savedLang);

  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  // --- theme init ---
  const savedTheme = localStorage.getItem("rfa-theme") ||
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  setTheme(savedTheme);

  document.getElementById("theme-toggle").addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "dark" ? "light" : "dark");
  });

  // --- mobile nav ---
  const navToggle = document.getElementById("nav-toggle");
  const mainNav = document.getElementById("main-nav");
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  mainNav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
});
