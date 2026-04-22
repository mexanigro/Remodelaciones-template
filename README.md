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
- `src/lib/firebase.ts`: inicializacion segura de Firebase (degrada sin romper si no hay config)
- `firebase-applet-config.json`: credenciales Firebase por cliente (se reemplaza en cada clon)
- `firestore.rules`: reglas base de Firestore

## Variables sensibles
Todas las variables se documentan en `.env.example`.
El archivo `.env` real no se debe versionar.

## Setup Firebase por cliente
1. Crear proyecto Firebase del cliente.
2. Reemplazar `firebase-applet-config.json` con su SDK config.
3. Actualizar email admin en:
   - `.env` -> `VITE_ADMIN_EMAIL`
   - `firestore.rules` -> `isAdmin()`
4. Publicar reglas con Firebase CLI.

Si `firebase-applet-config.json` queda incompleto, el template funciona igual y solo desactiva funciones Firebase.

## Checklist rapido para clonar y personalizar
1. Duplicar repo template.
2. Editar `src/config/presets/remodelaciones.ts` (branding, textos, portfolio, testimonios).
3. Configurar `.env`.
4. Reemplazar `firebase-applet-config.json` si el cliente usa base de datos.
5. Ejecutar `npm run lint` y `npm run build`.

## Build
- `npm run lint`
- `npm run build`
