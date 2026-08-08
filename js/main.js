const els = document.querySelectorAll('.fade-in');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('visible'); io.unobserve(e.target); } });
}, { threshold: 0.15 });
els.forEach(el => io.observe(el));

const translations = {
  en: {
    "nav.experience": "Experience",
    "nav.projets": "Projects",
    "nav.competences": "Skills",
    "nav.formation": "Education",
    "nav.contact": "Contact",
    "hero.eyebrow": "Antananarivo, Madagascar — available for work",
    "hero.role": "Software Engineer & Electronics — desktop, web, mobile & embedded systems",
    "hero.lede": "A developer trained at the intersection of software and electronics: desktop apps in C#/.NET, web and mobile experiences in React, and embedded electrical systems.",
    "hero.cta.projects": "View projects",
    "hero.cta.email": "Send an email",
    "sec.experience.title": "Professional experience",
    "exp.location": "67 Ha headquarters",
    "exp.duration": "Internship — 3 months",
    "exp.role": "Solo .NET / WinForms Developer",
    "exp.b1": "Development and maintenance of desktop applications",
    "exp.b2": "Three-month internship under the supervision of a qualified professional team",
    "exp.b3": "Performance optimization and bug fixing",
    "exp.b4": "Set up testing to ensure code quality and software durability",
    "sec.projets.title": "Personal projects",
    "status.done": "Done",
    "status.wip": "In progress",
    "proj.link.github": "View on GitHub ↗",
    "proj.link.soon": "Coming soon on GitHub",
    "proj.u1.title": "Stock management tool",
    "proj.u1.desc": "Desktop app to track stock inflows and outflows.",
    "proj.u2.title": "Showcase website",
    "proj.u2.desc": "Static presentation site with a custom structure and style.",
    "proj.u3.title": "Game simulation",
    "proj.u3.desc": "Simulation logic and rendering in a C# application.",
    "proj.u4.title": "Web mini-game",
    "proj.u4.desc": "Small browser-playable game.",
    "proj.u5.title": "Cooking app",
    "proj.u5.desc": "Mobile app for recipes and cooking tracking.",
    "proj.u6.title": "Bus trip app",
    "proj.u6.desc": "Mobile app to track and plan bus trips.",
    "proj.u7.title": "Cooking desktop software",
    "proj.u7.desc": "Desktop application dedicated to cooking management.",
    "proj.u8.title": "Information website",
    "proj.u8.desc": "Web information platform in development.",
    "sec.competences.title": "Skills",
    "ds.langages.label": "LANGUAGES",
    "ds.outils.label": "TOOLS & FRAMEWORKS",
    "ds.bdd.label": "DATABASES",
    "ds.os.label": "OPERATING SYSTEMS",
    "ds.os.value": "Windows, Linux",
    "ds.electro.label": "ELECTRONICS",
    "ds.electro.value": "Advanced electrical systems",
    "ds.ontologies.label": "ONTOLOGIES",
    "ds.ontologies.value": "Knowledge modeling, data representation and structuring via ontologies",
    "sec.formation.title": "Education & background",
    "form.licence.title": "Bachelor's in Computer Science — ISPM",
    "form.licence.desc": "1st to 3rd year: showcase website, health monitoring, web mini-game, kinetic energy converter, institution management system, web/mobile home automation, building electro-computer system.",
    "form.bac.title": "High school diploma, science track — Lycée Moderne Ampefiloha",
    "footer.title": "Got a project in mind? Let's talk.",
    "footer.location": "Antananarivo, Madagascar"
  }
};

function setLang(lang){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-lang-btn]').forEach(b => b.classList.toggle('active', b.dataset.langBtn === lang));
  if(lang === 'fr'){
    document.querySelectorAll('[data-i18n]').forEach(el => {
      if(el.dataset.frOriginal){ el.innerHTML = el.dataset.frOriginal; }
    });
    return;
  }
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if(!el.dataset.frOriginal){ el.dataset.frOriginal = el.innerHTML; }
    const key = el.getAttribute('data-i18n');
    const val = translations[lang] && translations[lang][key];
    if(val){ el.innerHTML = val; }
  });
}
