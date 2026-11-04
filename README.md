# Seahorse Estudio Creativo

Prototipos del estudio migrados a Next.js, React, TypeScript y Tailwind CSS.

## Requisitos

- Node.js 20.9 o posterior
- npm

## Ejecutar en desarrollo

```powershell
npm install
npm run dev
```

Abre <
>.

## Rutas

| Pantalla | Ruta |
| --- | --- |
| Portada y prototipo integral | `/` |
| Tienda | `/tienda` |
| Carrito y checkout | `/carrito` |
| Personalización | `/personaliza` |
| Sobre nosotros | `/sobre-nosotros` |
| Contacto | `/contacto` |
| Panel administrativo | `/dashboard` |

## Validar y compilar

```powershell
npm run typecheck
npm run build
npm start
```

Las fuentes y algunas imágenes se cargan desde servicios externos, por lo que requieren conexión a Internet. Las confirmaciones de pago, formularios y datos administrativos siguen siendo demostrativos; no se conectan a una pasarela, API o base de datos.
