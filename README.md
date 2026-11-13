# Seahorse Estudio Creativo

El frontend inicial se modeló en Stitch. El código generado se convirtió y adaptó a TypeScript, Next.js, React y Tailwind CSS; después se ajustaron los elementos gráficos y el contenido a la identidad de Seahorse Estudio Creativo. El resultado es un prototipo frontend: todavía no se conecta a una API ni a una base de datos.

**Uso actual: demostración local. No está preparado para recibir pedidos, pagos ni datos reales de clientes.**

## Requisitos

- Node.js 20.9 o posterior
- npm

## Ejecutar en desarrollo

```powershell
npm install
npm run dev
```

Abre <http://localhost:3000>.

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

## Alcance del prototipo

| Función | Estado actual |
| --- | --- |
| Catálogo | Productos y precios de ejemplo definidos en código; no hay inventario conectado. |
| Carrito | El panel lateral conserva datos en `sessionStorage` y comienza con artículos de ejemplo. La página de checkout muestra productos y totales fijos y no está conectada a ese carrito. |
| Pagos y envíos | Los métodos de pago, importes y opciones de envío son demostrativos; no se procesan transacciones ni se generan órdenes o guías. |
| Contacto | El formulario muestra una confirmación local, pero no envía el mensaje. |
| Personalización | La carga de archivos y la solicitud formal son simuladas. La opción de WhatsApp abre un enlace con un número de ejemplo; no envía la solicitud automáticamente. |
| Administración | `/dashboard` y `/admin-dashboard` muestran datos de ejemplo y son públicos. No existe protección real de acceso ni MFA. |
| Autenticación | Las utilidades de sesión simulada en `src/infrastructure/auth/` no son una protección para producción. |

Algunos textos de la interfaz sugieren pagos, envíos o confirmaciones reales, pero esas operaciones aún no están implementadas. No usar datos personales reales en el prototipo. Las fuentes y algunas imágenes se cargan desde servicios externos, por lo que requieren conexión a Internet.

## Pruebas automatizadas

```powershell
npm test
npm run test:e2e
npm run test:security
npm run audit:deps
```

Las rutas de `src/app/` utilizan actualmente componentes de `src/components/prototypes/`; también existen implementaciones bajo `src/features/`, `src/shared/`, `src/context/` y `src/infrastructure/`. Las pruebas unitarias, de componentes, integración y seguridad están en `tests/`; las pruebas de navegador usan Playwright y Chromium. La línea base y los casos pendientes están documentados en [tests/TEST-MATRIX.md](./tests/TEST-MATRIX.md). La auditoría de dependencias necesita acceso al registro de npm.
