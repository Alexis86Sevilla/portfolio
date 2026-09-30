export interface CvContactLink {
  label: string;
  href: string;
}

export interface CvIdentity {
  name: string;
  headline: string;
  location: string;
  email: string;
  linkedin: CvContactLink;
  github: CvContactLink;
  website: CvContactLink;
}

export interface CvExperienceSubBlock {
  name: string;
  context: string;
  tags: string[];
  bullets: string[];
}

export interface CvExperienceRole {
  role: string;
  company: string;
  meta: string;
  summary: string;
  subBlocks: CvExperienceSubBlock[];
}

export interface CvLabelValue {
  label: string;
  value: string;
}

export interface Cv {
  identity: CvIdentity;
  profile: string;
  experience: CvExperienceRole;
  stack: CvLabelValue[];
  projects: CvLabelValue[];
  education: CvLabelValue[];
}

export const cv: Cv = {
  identity: {
    name: "Alexis García Mancha",
    headline: "Desarrollador Web Full Stack · Angular · Java · Producto",
    location: "Sevilla, España — remoto",
    email: "alegarman86@gmail.com",
    linkedin: {
      label: "linkedin.com/in/alexis-gm",
      href: "https://www.linkedin.com/in/alexis-gm/",
    },
    github: {
      label: "github.com/Alexis86Sevilla",
      href: "https://github.com/Alexis86Sevilla",
    },
    website: {
      label: "www.portfolio-alexis.workers.dev",
      href: "https://www.portfolio-alexis.workers.dev",
    },
  },

  profile:
    "Desarrollador web full stack con 4 años de experiencia en producto, con el peso en Angular y capacidad de bajar a Java y Spring Boot. Modernizo aplicaciones vivas y arranco nuevas: migré un SaaS empresarial de Angular 13 a 21 sin parar el servicio, y definí el stack de otros dos productos desde cero. Decido qué se construye a partir de datos de uso reales, no de intuición.",

  experience: {
    role: "Desarrollador Web Full Stack",
    company: "Nunsys",
    meta: "Septiembre 2022 – Actualidad · Remoto · Equipos de 2 a 4 personas",
    summary:
      "Fullstack (Angular + Spring Boot) → responsable técnico de frontend en dos productos: decido stack, librerías y arquitectura, redacto y priorizo mis propios tickets, y trabajo directamente con producto, diseño y marketing.",
    subBlocks: [
      {
        name: "Pydo",
        context: "comunicación interna para empresas sobre Microsoft 365",
        tags: ["SAAS B2B", "TEAMS STORE"],
        bullets: [
          "Migración de Angular 13 a 21 — ocho versiones mayores, cuatro años de deuda técnica, sobre un producto en producción y con clientes. En dos fases (13 → 20, después 20 → 21), atravesando standalone components, el nuevo control flow, signals y el modelo zoneless.",
          "Producto publicado en la Microsoft Teams Store y certificado en el programa de aplicaciones de Microsoft 365: SSO con Entra ID e integración con Microsoft Graph. Eliminé código y dependencias residuales, y modernicé la UI y la UX junto a diseño.",
        ],
      },
      {
        name: "Golftomic",
        context: "app para jugadores de golf",
        tags: ["B2C", "STACK PROPIO"],
        bullets: [
          "Registro de puntuaciones, historial de partidas y funciones sociales. Elegí las librerías y definí el stack de frontend, con signals como modelo de estado reactivo y GSAP para animación.",
        ],
      },
      {
        name: "Fenotractor",
        context: "plataforma web para un robot de fenotipado agrícola",
        tags: ["DESDE CERO"],
        bullets: [
          "Frontend arrancado desde cero —stack, arquitectura y convenciones— para un robot que recorre cultivos capturando vídeo multicámara: CRUD de recorridos y misiones, integración de Lichtblick (visualización robótica, ecosistema Foxglove/ROS) y reconstrucciones 3D de parcelas en navegador con Spark sobre Three.js.",
        ],
      },
      {
        name: "Analítica de producto",
        context: "",
        tags: ["TRANSVERSAL"],
        bullets: [
          "Instrumenté Mixpanel y construí los dashboards de producto: el equipo pasó de decidir funcionalidades por intuición a priorizar sobre uso real.",
          "Con marketing, Google Analytics y Looker Studio sobre landing pages —rebote por página, scroll, clics, botones y formularios— para dirigir la optimización.",
        ],
      },
    ],
  },

  stack: [
    {
      label: "FRONTEND",
      value:
        "Angular 13 → 21 (standalone, signals, nuevo control flow, SSR) · TypeScript · SCSS / BEM · Tailwind · PrimeNG · GSAP · Astro",
    },
    {
      label: "BACKEND Y PLATAFORMA",
      value:
        "Java · Spring Boot · PostgreSQL · Microsoft Graph · Entra ID (SSO) · Azure · CI/CD",
    },
    {
      label: "PRODUCTO Y DATOS",
      value: "Mixpanel · Google Analytics · Looker Studio · Figma",
    },
  ],

  projects: [
    {
      label: "URBAN-OASIS",
      value:
        "Angular 21 · Tailwind · Leaflet · Spring Boot · Java 21 · PostgreSQL — buscador de refugios climáticos en Sevilla con datos de OpenStreetMap. Fullstack, con CI/CD y en producción en urban-oasis.info.",
    },
    {
      label: "API-SENTINEL",
      value:
        "Java — auditoría de infraestructura: protocolos HTTP, CORS, cabeceras OWASP y certificados SSL.",
    },
  ],

  education: [
    {
      label: "2020 – 2022",
      value:
        "FP Superior en Desarrollo de Aplicaciones Web · Bootcamp Fullstack (Nunsys, 2022)",
    },
    {
      label: "2007 – 2011",
      value:
        "Diplomatura en Educación Especial — base de mi trabajo en accesibilidad: diseño pensando en cómo se usa, no en cumplir un checklist.",
    },
    {
      label: "IDIOMAS",
      value: "Español nativo · Inglés B1 (Cambridge)",
    },
  ],
};
