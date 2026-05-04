# Portfolio Personal - Arquitectura Moderna

Este repositorio contiene un portfolio personal construido con un enfoque técnico robusto, diseñado para ser escalable, rápido y profesional.

## 🚀 Stack Tecnológico

- **Framework:** [Astro 6.x](https://astro.build/)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS (v4)
- **Gestión de Contenido:** Content Collections (Zod schemas)
- **Despliegue:** Optimizado para Cloudflare Pages / Vercel

## ✨ Características Principales

- **Arquitectura de Contenido Estricta:** Uso de *Content Collections* con validación de esquemas (Zod). Cada proyecto debe cumplir un contrato de datos definido en `src/content.config.ts`.
- **Diseño "Premium":** Estética *Dark Mode* editorial, tipografía de alto contraste (Inter/JetBrains Mono) y layouts asimétricos.
- **Interacciones Fluidas:** Implementación de `astro:transitions` para navegación nativa tipo SPA.
- **Efectos Visuales:** Efecto *spotlight* de fondo (glow) integrado para profundidad.
- **Tipado Fuerte:** Toda la lógica está respaldada por TypeScript para garantizar mantenibilidad.

## 📁 Estructura del Proyecto

```text
/
├── src/
│   ├── components/    # Bloques de UI reutilizables (Hero, Card, SEO, etc.)
│   ├── content/       # Contenido en Markdown (Colecciones)
│   ├── layouts/       # Estructuras base (Layout.astro)
│   ├── pages/         # Rutas del sitio (index, about, proyectos/[slug])
│   └── styles/        # Estilos globales y configuración Tailwind
├── astro.config.mjs   # Configuración de Astro
└── src/content.config.ts # Definición de colecciones y esquemas (Astro v6)
```

## 🛠️ Cómo utilizar este portfolio

### 1. Desarrollo Local
Primero, instala las dependencias:
```bash
pnpm install
```
Inicia el servidor de desarrollo:
```bash
pnpm dev
```

### 2. Añadir Proyectos
Para añadir un nuevo proyecto, crea un archivo `.md` en `src/content/projects/`. El archivo debe seguir estrictamente este *frontmatter*:

```markdown
---
title: "Nombre del Proyecto"
description: "Breve descripción."
image: "url-de-la-imagen"
date: YYYY-MM-DD
tags: ["tech1", "tech2"]
link: "https://url-del-proyecto.com"
---

# Contenido del proyecto en Markdown aquí
```

### 3. Ajustar el Diseño
- **Estilos Globales:** Modifica `src/styles/global.css` para cambiar paleta de colores o variables de tema.
- **Componentes:** Todos los elementos son componentes modulares en `src/components/`.
- **Despliegue:** El comando `pnpm build` genera los archivos estáticos en `/dist`.

## ⚙️ Notas sobre Astro v6
Este proyecto utiliza la nueva API de *Loaders* de Astro 6. Si deseas añadir nuevas colecciones, asegúrate de actualizar `src/content.config.ts` definiendo el `loader` (ej. `glob(...)`) correspondiente.
