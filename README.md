# Remodelaciones Template

Template base para vender sitios de remodelaciones/aperturas comerciales y clonarlo rapido para nuevos clientes.

## Stack
- React + Vite
- Tailwind CSS
- Framer Motion

## Puesta en marcha
1. `npm install`
2. Copiar `.env.example` a `.env`
3. (Opcional) Idioma UI: `VITE_UI_LANGUAGE=he` o `en` en `.env`, **o** sin tocar `.env` usar `npm run dev:he` / `npm run dev:en`.
4. `npm run dev` (respeta `.env`; para forzar idioma usar `dev:he` / `dev:en`).

## Estructura para personalizar por cliente
- `src/config/presets/remodelaciones.he.ts` y `remodelaciones.en.ts`: contenido del nicho (marca, textos, portfolio, etc.) **en hebreo e ingles**; deben mantenerse alineados.
- `src/config/locales/he.ts` y `src/config/locales/en.ts`: textos de UI (nav, modales, CTA, `a11y`); el ingles se verifica con `satisfies` frente al hebreo.
- `src/config/locale.ts`: reexporta el pack activo segun `VITE_UI_LANGUAGE`.
- `src/config/site.ts`: une el preset de idioma + integraciones
- `src/config/env.ts` y `VITE_UI_LANGUAGE`: idioma de la build (he / en)
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
2. Configurar `VITE_UI_LANGUAGE` (`he` o `en`) y revisar ambos presets/locales si cambias copys.
3. Editar `src/config/presets/remodelaciones.he.ts` y `remodelaciones.en.ts`, y los strings en `src/config/locales/` **en paralelo**.
4. Configurar `.env`.
5. Reemplazar `firebase-applet-config.json` si el cliente usa base de datos.
6. Ejecutar `npm run lint`, `npm run build` y `npm run verify:locales` (build en hebreo y en ingles).

## QA bilingüe / responsive
- Cambios en copy o layout: revisar **he + en** y breakpoints **mobile / tablet / desktop** (`VITE_UI_LANGUAGE` distinto requiere nuevo `npm run dev` o nueva build).

## Build
- `npm run lint`
- `npm run build`
- `npm run verify:locales` — corre `lint` + `build` con `he` y con `en`
