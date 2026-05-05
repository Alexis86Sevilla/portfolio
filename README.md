# Portfolio Personal - Alexis GM

Este repositorio contiene mi portfolio personal, construido con un enfoque técnico moderno, código limpio y un diseño mobile-first. Diseñado para ser rápido, accesible y fácil de mantener.

## 🚀 Stack Tecnológico

- **Framework:** [Astro 6.x](https://astro.build/) (SSG Mode)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS (v4)
- **Gestión de Contenido:** Content Collections con validación de esquemas (Zod)
- **Despliegue:** Optimizado para Cloudflare Pages

## ✨ Características Principales

- **Diseño Responsive & Mobile-First:** Navegación optimizada con menú tipo hamburguesa y layouts flexibles.
- **Optimización de Imágenes:** Uso nativo de `astro:assets` para carga diferida (lazy loading) y conversión automática a formatos de última generación (`.webp`).
- **Arquitectura de Contenido:** Esquema estricto definido en `src/content.config.ts` para diferenciar proyectos personales de corporativos.
- **Interacciones Fluidas:** Implementación de `astro:transitions` (View Transitions) para una experiencia tipo SPA sin perder los beneficios del SEO.
- **Efectos Visuales:** Sistema de _MouseGlow_ reactivo y fondos con gradientes dinámicos.
- **Storytelling Auténtico:** Sección "Sobre mí" personalizada que refleja mi trayectoria real desde la pandemia hasta la especialización en Frontend/Angular.

## 📁 Estructura del Proyecto

```text
/
├── src/
│   ├── assets/        # Imágenes y recursos estáticos procesados por Astro
│   ├── components/    # Componentes modulares (Hero, ProjectCard, MouseGlow, etc.)
│   ├── content/       # Contenido en Markdown para los proyectos
│   ├── layouts/       # Estructura base (Layout.astro)
│   ├── pages/         # Rutas estáticas (Index, About)
│   └── styles/        # Estilos globales y tokens de diseño
├── src/content.config.ts # Corazón de la gestión de datos y esquemas
└── astro.config.mjs   # Configuración de integraciones y adaptadores
```

## 🛠️ Desarrollo y Contenido

### 1. Instalación y Ejecución

```bash
pnpm install
pnpm dev
```

### 2. Añadir Proyectos

Los proyectos se gestionan en `src/content/projects/`. El esquema requiere los siguientes campos:

```markdown
---
title: "Nombre del Proyecto"
description: "Descripción enfocada al valor de negocio."
image: "src/assets/images/imagen.png"
type: "personal" | "empresa"
company: "Nombre de la empresa" (opcional)
date: YYYY-MM-DD
tags: ["tech1", "tech2"]
link: "https://url-del-producto.com"
codeLink: "https://github.com/repo" (opcional)
---
```

## ⚙️ Notas Técnicas

- **View Transitions:** El componente `MouseGlow` y el `Header` están preparados para sobrevivir al ciclo de vida de las transiciones de Astro mediante el evento `astro:page-load`.
- **Image Loader:** Se utiliza `import.meta.glob` para la carga dinámica de metadatos de imágenes en las colecciones, permitiendo que el componente `<Image />` de Astro optimice rutas dinámicas de Markdown.
- **Despliegue en Cloudflare:** Se recomienda el uso de **Cloudflare Pages** sobre Workers para garantizar el correcto servido de imágenes optimizadas de forma estática (SSG).

---

© 2026 Alexis García Mancha • Desarrollador Web Full Stack
