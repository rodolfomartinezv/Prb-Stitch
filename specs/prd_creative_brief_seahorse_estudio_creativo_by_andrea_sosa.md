# Product Requirement Document (PRD) & Creative Brief
## Seahorse Estudio Creativo by Andrea Sosa — E-Commerce & Admin Platform

---

### 1. Resumen Ejecutivo & Visión del Producto
**Seahorse Estudio Creativo by Andrea Sosa** es una plataforma de comercio electrónico editorial y contemporánea enfocada en el diseño de autor, objetos escultóricos, textiles ilustrados y piezas de colección artesanal radicada en Colombia.

A diferencia de los entornos genéricos de e-commerce masivo, la plataforma fusiona la narrativa curatorial y estética de una **galería de arte contemporáneo** con la solidez operativa y transaccional de un sistema de comercio electrónico de alta conversión, adaptado integralmente a las necesidades del mercado colombiano (moneda en **COP**, logística por transportadoras nacionales y pasarelas de pago locales como **Mercado Pago, Nequi y Daviplata**).

---

### 2. Objetivos Estratégicos & Métricas Clave (OKRs / KPIs)
1. **Posicionamiento de Marca:** Elevar el valor percibido del trabajo artesanal de Andrea Sosa, proyectando exclusividad.
2. **Conversión y Retención:** Facilitar un proceso de compra claro, transparente y de fricción reducida para clientes de 18 a 60 años.
3. **Canal de Co-creación (Personaliza):** Capturar prospectos de alto valor para piezas personalizadas conectando el configurador interactivo con atención directa vía WhatsApp.
4. **Eficiencia Operativa:** Unificar la gestión de pedidos, tiempos de elaboración en taller y despacho con transportadoras oficiales mediante un Dashboard Administrativo privado.

#### KPIs de Medición:
* **Tasa de conversión de catálogo a carrito:** Meta ≥ 3.2%
* **Tasa de finalización en configurador de piezas personalizadas:** Meta ≥ 18%
* **Tiempo medio de despacho logístico:** Reducción a ≤ 24-48 horas hábiles para productos disponibles.
* **Satisfacción del cliente (NPS / Calificación de empaque):** Meta ≥ 95%.

---

### 3. Audiencia Objetivo & Arquetipos de Usuario
* **Rango etario:** 18 a 60 años.
* **Ubicación:** Residentes en las principales ciudades y regiones de Colombia (Bogotá, Medellín, Cali, Barranquilla, Bucaramanga, etc.) y colombianos en el exterior que envían detalles a sus familias.
* **Intereses:** Arte contemporáneo, interiorismo, objetos religiosos, decoración curada y regalos memorables fuera de serie.

---

### 4. Sistema de Diseño & Dirección de Arte

#### 4.1 Identidad de Marca & Logotipo
* **Logotipo Oficial:** Se preserva con estricta fidelidad el isotipo del caballito de mar ilustrado con ornamentaciones botánico-marinas junto a la firma caligráfica *"Seahorse Estudio Creativo by Andrea Sosa"*.
* **Voz y Tono:** Íntimo, sereno, curatorial, poético y profesional. Transmite paciencia artesanal, respeto por la materia prima y sofisticación contemporánea.

#### 4.2 Sistema Cromático Oficial
| Nombre del Tono | Valor HEX | Rol en la Interfaz |
| :--- | :--- | :--- |
| **Marfil** | `#FFFCF7` | Fondo principal cálido, lienzo de galería y contenedores suaves. |
| **Azul Oceánico** | `#173D68` | Color estructural, titulares de alto contraste, jerarquía y bordes. |
| **Turquesa** | `#23B7C5` | Primario interactivo, botones CTA, acentos de estado activo. |
| **Aguamarina** | `#83D9D9` | Badges de disponibilidad, microinteracciones y acentos biológicos. |
| **Lavanda** | `#B7A1DF` | Etiquetas secundarias, estados personalizables y notas líricas. |
| **Coral Suave** | `#F29A9C` | Etiquetas de advertencia o stock bajo, detalles de acento. |
| **Amarillo** | `#F5D35E` | Calificaciones, sellos de autor y destacados solares. |
| **Café Profundo** | `#281B18` | Acentos terrosos, pie de página y detalles contrastantes. |

#### 4.3 Jerarquía Tipográfica
* **Titulares y Titulillos:** `Outfit` (Medium / Bold / Italic) — Tipografía geométrica expresiva con matiz artístico.
* **Textos Corridos, Formularios y Datos:** `DM Sans` (Regular / Medium / SemiBold) — Máxima legibilidad, limpieza suiza y claridad transaccional.

---

### 5. Arquitectura de Información & Pantallas del Ecosistema

#### 5.1 Pantallas Públicas (Storefront)
1. **Home / Portada de Autor (`/`):**
   * Hero editorial asimétrico con fotografía ambientada y CTAs duales (*Explorar colección* y *Personaliza tu producto*).
   * Presentación de las **4 categorías de autor exclusivas**:
     1. *Cuadros* (acrílicos y técnicas mixtas sobre lino crudo)
     2. *Estampados* (diseños ilustrados de autor aplicados a prendas y piezas textiles)
     3. *Resina* (posavasos, aretes, dijes y encapsulados botánicos)
     4. *Cemento blanco* (floreros escultóricos, bandejas onduladas y portavelas)
   * Selección de Obras y Objetos Destacados con etiquetado dinámico.
   * Manifiesto de taller *"El mar y la materia orgánica como lenguaje de calma"*.
   * Bloque de validación social y testimonios de compradores reales.

2. **Tienda / Catálogo General (`/tienda`):**
   * Encabezado con selector rápido de disciplinas.
   * Barra de herramientas con buscador por técnica/material, segmentación por estado (*Todos, Disponible, Bajo pedido, Personalizable, Agotado*) y ordenamiento por novedad o precio.
   * Cuadrícula de tarjetas con precio transparente en COP ($), tiempo estimado de taller y acción contextual rápida (*Añadir, Encargar, Personalizar, Avisarme*).
   * Banner de confianza con transportadoras aliadas de Colombia.

3. **Personaliza / Taller Interactivo (`/personaliza`):**
   * Configurador sensorial guiado en 5 fases secuenciales:
     * *Paso 1:* Tipo de soporte base (con precios base referenciales).
     * *Paso 2:* Paleta cromática y materias primas.
     * *Paso 3:* Dimensiones sugeridas, ocasión de la pieza y dedicatoria/grabado.
     * *Paso 4:* Carga drag & drop de imágenes de referencia o fotografías del espacio a decorar.
     * *Paso 5:* Datos de contacto, ciudad en Colombia y llamada dual: Envío de solicitud web o apertura asistida de chat en WhatsApp con Andrea Sosa.
   * Galería de casos previos de clientes con testimonio y especificaciones técnicas.

4. **Sobre Nosotros / Manifiesto de Taller (`/sobre-nosotros`):**
   * Historia curatorial de Andrea Sosa y propósito del taller en Colombia.
  
5. **Contacto & Atelier Directo (`/contacto`):**
   * Datos de atención directa: Taller físico en Bogotá D.C., WhatsApp oficial (+57 315 802 5407), correo y horarios de atención.
   * Formulario estructurado con selector de motivo de consulta.
   * Módulo de Preguntas Frecuentes (acordeón interactivo para envíos, cuidados de piezas y garantías).
   * Respaldo logístico nacional de transportadoras.

6. **Carrito & Checkout Integrado (`/carrito`):**
   * Inspección de obras seleccionadas (cantidades, tiempos de elaboración en taller, importes unitarios en COP).
   * Formulario de entrega adaptado a nomenclatura urbana colombiana (Carrera, Calle, Avenida, Apto/Torre, Ciudad y Departamento).
   * Selección de empresa de encomienda de preferencia: **Coordinadora, Servientrega o Inter Rapidísimo**.
   * Resumen financiero transparente: desglose de subtotal de piezas y flete nacional.
   * Pasarelas de pago colombianas integradas: **Mercado Pago** (tarjetas/PSE), **Nequi** (notificación Push / QR) y **Daviplata**.

#### 5.2 Entorno Administrativo Privado (Backoffice)
7. **Dashboard Admin de Gestión Logística & Pedidos (`/admin`):**
   * Entorno restringido y seguro con insignia de verificación **MFA**.
   * Tarjetas de estado operativo: *Por Despachar*, *En Tránsito Colombia*, *En Taller / Secado*, *Facturación Mensual (COP)*.
   * Filtros rápidos por transportadoras nacionales (*Coordinadora, Servientrega, Inter Rapidísimo, Envía*).
   * Tabla central con número de orden, cliente, destino, técnica artesanal, pasarela de pago, estado de producción y seguimiento de guía.
   * Panel lateral de detalle de expedición con cotizador en tiempo real y solicitud de recolección en taller.

---

### 6. Requisitos Funcionales & Técnicos

#### 6.1 Catálogo y Precios
* **RF-01:** Todos los precios deben expresarse en Pesos Colombianos (**COP**) con separador de miles por punto (ej. `$65.000 COP`).
* **RF-02:** Los estados de producto deben condicionar la llamada a la acción:
  * *Disponible:* Agregar al carrito de manera inmediata.
  * *Bajo pedido:* Solicitud de encargo con advertencia de tiempo de elaboración (ej. 5 a 8 días hábiles).
  * *Personalizable:* Redirección al flujo de personalización con parámetros precargados.
  * *Agotado:* Botón de suscripción a notificación por correo o WhatsApp.

#### 6.2 Checkout & Medios de Pago
* **RF-03:** Soporte para nomenclatura colombiana estandarizada con selectores de Departamentos (32 departamentos + Bogotá D.C.) y Municipios.
* **RF-04:** Integración con pasarelas locales:
  * Mercado Pago Checkout Pro / API (Tarjetas de crédito, débito y PSE hacia todos los bancos de Colombia).
  * Canal Nequi directo con número celular / código QR dinámico.
  * Daviplata para transferencias simplificadas.
* **RF-05:** Cálculo de tarifa de flete nacional dinámico según ciudad de destino (tarifas base principales vs. trayectos especiales).

#### 6.3 Módulo de Personalización
* **RF-06:** Soporte para adjuntar archivos fotográficos (JPG, PNG, PDF de hasta 20 MB).
* **RF-07:** Generación automática de mensaje preformateado para WhatsApp Business con el resumen de la selección del cliente y guiа de seguimiento.

#### 6.4 Panel de Control & Auditoría
* **RF-08:** Acceso con autenticación multifactor (MFA).
* **RF-09:** Descarga de manifiestos de despacho e impresión de guías compatibles con las especificaciones de las transportadoras colombianas y normativas DIAN.
* **RF-10:** Registro de auditoría de conexiones administrativas (IP, fecha, nivel de riesgo).

---

### 7. Requisitos No Funcionales (Calidad, Rendimiento & UX)
* **RNF-01 (Diseño Responsivo):** Experiencia 100% fluida en Smartphone, Tablet y Desktop, priorizando el rendimiento táctil y la navegación en dispositivos móviles.
* **RNF-02 (Rendimiento):** Tiempo de carga inicial (LCP) ≤ 1.8 segundos; optimización agresiva de imágenes webp para piezas artísticas en alta resolución.
* **RNF-03 (Accesibilidad):** Cumplimiento de pautas WCAG 2.1 AA en contraste cromático entre fondos y tipografías (garantizado con `#173D68` sobre `#FFFCF7`).
* **RNF-04 (Seguridad):** Cifrado de extremo a extremo SSL/TLS de 256 bits en todos los formularios y procesamiento de pagos; no almacenamiento de datos bancarios sensibles en servidores propios.

---

### 8. Hoja de Ruta de Implementación (Roadmap)
* **Fase 1 (Completada):** Definición de identidad visual, sistema cromático, arquitectura editorial y diseño de prototipos navegables de alta fidelidad (Home, Tienda, Personaliza, Sobre Nosotros, Contacto, Carrito/Checkout y Dashboard Logístico).
* **Fase 2 (Próxima):** Exportación de componentes a código modular (React / Tailwind CSS / v0), integración de APIs de mensajería (WhatsApp Cloud API) y pasarelas de pago (Mercado Pago SDK).
* **Fase 3:** Conexión con APIs de rastreo de guías de transportadoras (Coordinadora y Servientrega) y sistema de inventario en tiempo real para taller.