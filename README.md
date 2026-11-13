# Seahorse Estudio Creativo

El frontend inicial se modeló en Stitch. El código generado se convirtió y adaptó a TypeScript, Next.js, React y Tailwind CSS; después se ajustaron los elementos gráficos y el contenido a la identidad de Seahorse Estudio Creativo. El resultado es un prototipo frontend: todavía no se conecta a una API ni a una base de datos.

## Requisitos

- Node.js 20.9 o posterior
- npm

## Ejecutar en desarrollo

```powershell
npm install
npm run dev
```

Abre <

> .

## Rutas

| Pantalla                     | Ruta              |
| ---------------------------- | ----------------- |
| Portada y prototipo integral | `/`               |
| Tienda                       | `/tienda`         |
| Carrito y checkout           | `/carrito`        |
| Personalización              | `/personaliza`    |
| Sobre nosotros               | `/sobre-nosotros` |
| Contacto                     | `/contacto`       |
| Panel administrativo         | `/dashboard`      |

## Validar y compilar

```powershell
npm run typecheck
npm run build
npm start
```

Las fuentes y algunas imágenes se cargan desde servicios externos, por lo que requieren conexión a Internet. Las confirmaciones de pago, formularios y datos administrativos siguen siendo demostrativos; no se conectan a una pasarela, API o base de datos.

## Pruebas automatizadas

```powershell
npm test
npm run test:e2e
npm run test:security
npm run audit:deps
```

El código de aplicación está organizado bajo `src/app/` y `src/components/`; los archivos de configuración y `public/` permanecen en la raíz, como recomienda Next.js. Las pruebas unitarias, de componentes, integración y seguridad están en `tests/`; las pruebas de navegador usan Playwright y Chromium. La matriz y los casos pendientes están documentados en [tests/TEST-MATRIX.md](./tests/TEST-MATRIX.md). La auditoría de dependencias necesita acceso al registro de npm. La ruta `/dashboard` todavía no tiene autenticación y permanece pública; no considerar aprobada su privacidad hasta configurar un proveedor y protección de servidor.
