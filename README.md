# Modern Art Gallery Website

Este proyecto es un sitio web responsivo para una galería de arte moderna, desarrollado utilizando HTML5, SASS y siguiendo la metodología BEM para la estructuración del CSS.

## Características

- Diseño totalmente responsivo
- Arquitectura SASS con metodología 7-1
- Metodología BEM para naming de clases
- Optimización de imágenes para diferentes dispositivos
- Transiciones y efectos hover en botones
- Integración de mapas interactivos
- Iconos SVG para mejor escalabilidad

## Breakpoints

El sitio web está optimizado para los siguientes tamaños de pantalla:

```scss
// Mobile (diseño base)
- Ancho: 320px y superior

// Tablet
- Ancho mínimo: 768px (bp-tablet)
- Tablet horizontal: 1024px (bp-tablet-horizontal)

// Desktop
- Ancho mínimo: 1200px (bp-desktop)
- Desktop XL: 1440px (bp-desktop-xl)
```

## Estructura del Proyecto

```
├── sass/
│   ├── abstracts/         # Variables, mixins, funciones
│   ├── base/             # Estilos base
│   ├── components/       # Componentes reutilizables
│   ├── layout/          # Maquetación principal
│   ├── pages/           # Estilos específicos por página
│   ├── themes/          # Temas
│   └── vendors/         # Estilos de terceros
├── css/                 # CSS compilado
├── img/                 # Imágenes y SVGs
└── src/                 # Archivos fuente JavaScript
```

## Características Responsivas

### Mobile (320px+)
- Diseño en una columna
- Menú de navegación simplificado
- Imágenes optimizadas para móvil
- Altura del header: 267px
- Espaciado base: 16px

### Tablet (768px+)
- Layout en grid para galería
- Header con altura de 700px
- Navegación mejorada
- Espaciado aumentado a 40px
- Diseño en dos columnas para secciones principales

### Desktop (1200px+)
- Layout de tres columnas
- Hero section con recuadro negro (450x799px)
- Imagen principal de 540x800px
- Máximo aprovechamiento del espacio
- Navegación expandida
- Espaciado optimizado para pantallas grandes

## Elementos Destacados

### Header
- Mobile: Altura 267px
- Tablet: Altura 700px, ancho 437px
- Desktop: Altura 800px, ancho 540px

### Botones
- Altura: 60px
- Tipografía: Big Shoulders Display
- Interacción hover con cambio de color
- Iconos SVG integrados

### Tipografía
- Títulos: Big Shoulders Display
- Texto: Outfit
- Tamaños responsivos según viewport

## Paleta de Colores

```scss
$color-orange: #d5966c;
$color-black: #151515;
$color-grey: #444444;
```

## Dependencias

- Vite como bundler
- SASS para preprocesamiento CSS
- Google Fonts (Big Shoulders Display, Outfit)

## Comandos

```bash
# Instalación
npm install

# Desarrollo
npm run dev

# Construcción
npm run build

# Vista previa
npm run preview
```

## Navegadores Soportados

- Chrome (última versión)
- Firefox (última versión)
- Safari (última versión)
- Edge (última versión)
