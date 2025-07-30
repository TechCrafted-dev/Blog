# TechCrafted Blog

![Node.js](https://img.shields.io/badge/-Node.js-43853d?style=flat&logo=node.js&logoColor=white)
![Astro](https://img.shields.io/badge/-Astro-ff5d01?style=flat&logo=astro&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/-TailwindCSS-38bdf8?style=flat&logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-GPL%203.0-blue.svg)

> Bienvenido al **Blog TechCrafted**, el sitio donde comparto proyectos alojados en GitHub y artículos técnicos bajo mi marca personal **TechCrafted.dev**.

---

## Tabla de contenidos

- [Características](#características)
- [Requisitos](#requisitos)
- [Instalación rápida](#instalación-rápida)
- [Scripts disponibles](#scripts-disponibles)
- [Despliegue con Jenkins](#despliegue-con-jenkins)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Guía de commits y ramas](#guía-de-commits-y-ramas)
- [Cómo contribuir](#cómo-contribuir)
- [Roadmap](#roadmap)
- [Licencia](#licencia)
- [Contacto](#contacto)

---

## Características

| Funcionalidad                  | Descripción                                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------------------------ |
| **Generador estático moderno** | Construido con Astro 5 y renderizado ultrarrápido para entregar HTML estático optimizado.        |
| **Estilos con Tailwind CSS**   | Configuración lista para usar `@tailwindcss/typography` y modo oscuro por clase.                |
| **Contenido en Markdown/MDX**  | Soporte completo para MDX (`@astrojs/mdx`) y generación de RSS + sitemap automáticos.           |
| **Automatización CI/CD**       | Pipeline Jenkins disparado en cada *push* para construir y publicar en un servidor local.       |
| **SEO out‑of‑the‑box**         | Mapa del sitio, manifest PWA, meta‑tags y fuentes optimizadas por Astro.                        |

---

## Requisitos

- **Node.js** ≥ 18  
- **npm** (incluido con Node)  
- Linux, macOS o WSL  
- Jenkins (opcional para CI/CD)  

---

## Instalación rápida

```bash
# 1. Clona el repositorio
git clone https://github.com/TechCrafted-dev/Blog.git
cd Blog

# 2. Instala dependencias
npm install

# 3. Arranca en modo desarrollo
npm run dev
# El sitio estará disponible en http://localhost:5432
```

### Generar build estática y vista previa

```bash
# Compila a /dist
npm run astro build

# Sirve la build para revisión final
npm run preview
# Disponible en http://localhost:5432
```

---

## Scripts disponibles

| Comando           | Descripción                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Ejecuta Astro en modo **hot‑reload**.         |
| `npm run preview` | Sirve la carpeta `dist` para QA local.        |
| `npm run astro …` | Proxy para cualquier comando de la Astro CLI. |

---

## Estructura del proyecto

```text
.
├── public/               # Imágenes, íconos PWA, fuentes…
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── layouts/          # Layouts Astro
│   ├── pages/            # Rutas *.astro / *.mdx
│   └── styles/           # Directivas Tailwind y utilidades
├── astro.config.mjs
└── tailwind.config.js
```

---

## Cómo contribuir

1. Haz *fork* y crea tu rama:  

   ```bash
   git checkout -b feat/mi-mejora
   ```

2. Sigue Conventional Commits y agrega pruebas o ejemplos si aplica.  
3. Ejecuta `npm run astro build` antes de hacer *push* para verificar que todo compila.  
4. Abre un **Pull Request** describiendo tu cambio.  
5. ¡Gracias por apoyar el proyecto! 🙌

---

## Roadmap

- [ ] Generar página de búsqueda por etiquetas.  
- [ ] Implementar comentarios con GitHub Issues.  
- [ ] Internacionalización (i18n) automática.  
- [ ] Despliegue redundante con contenedor Docker.  

---

## Licencia

Distribuido bajo los términos de la **GPL 3.0**. Consulta el archivo [LICENSE](LICENSE) para más información.

---

## Contacto

¿Dudas o sugerencias? Abre un _issue_ o contacta al mantenedor principal.  
¡Gracias por interesarte en **Blog TechCrafted**