# Remodelaciones Template

Template base para vender sitios de remodelaciones/aperturas comerciales y clonarlo rapido para nuevos clientes.

## Stack
- React + Vite
- Tailwind CSS
- Framer Motion

## Puesta en marcha
1. `npm install`
2. Copiar `.env.example` a `.env`
3. `npm run dev`

## Estructura para personalizar por cliente
- `src/config/presets/remodelaciones.ts`: contenido editable (marca, textos, proyectos, testimonios, etc.)
- `src/config/site.ts`: preset activo + configuracion transversal del template
- `src/config/env.ts`: lectura centralizada de variables de entorno
- `src/types/site.ts`: contratos tipados para mantener consistencia

## Variables sensibles
Todas las variables se documentan en `.env.example`.
El archivo `.env` real no se debe versionar.

## Build
- `npm run lint`
- `npm run build`
