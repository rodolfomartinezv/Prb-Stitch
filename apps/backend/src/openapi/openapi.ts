export const openApiDocument = {
  openapi: "3.1.0",
  info: {
    title: "Seahorse Estudio Creativo API",
    version: "1.0.0",
    description:
      "API REST oficial de Seahorse Estudio Creativo. Centraliza catálogo, reglas de descuento, pedidos personalizados y contacto.",
  },
  servers: [
    {
      url: "http://localhost:4000/api/v1",
      description: "Servidor local de desarrollo",
    },
  ],
  paths: {
    "/health": {
      get: {
        summary: "Estado del servicio y conectividad PostgreSQL",
        responses: {
          "200": {
            description: "Estado del servicio backend y base de datos",
          },
        },
      },
    },
    "/products": {
      get: {
        summary: "Listar productos del catálogo",
        parameters: [
          { name: "category", in: "query", schema: { type: "string" } },
          { name: "search", in: "query", schema: { type: "string" } },
          { name: "maxPrice", in: "query", schema: { type: "number" } },
          {
            name: "sort",
            in: "query",
            schema: {
              type: "string",
              enum: ["featured", "price-asc", "price-desc", "name"],
            },
          },
        ],
        responses: {
          "200": { description: "Lista de productos filtrada y ordenada" },
          "400": { description: "Parámetros de consulta inválidos" },
        },
      },
    },
    "/products/{id}": {
      get: {
        summary: "Obtener detalle de un producto por ID",
        parameters: [
          { name: "id", in: "path", required: true, schema: { type: "string" } },
        ],
        responses: {
          "200": { description: "Producto encontrado" },
          "404": { description: "Producto no encontrado" },
        },
      },
    },
    "/cart/quote": {
      post: {
        summary: "Calcular subtotal, descuentos (10% volumen / 15% orden) y total del carrito",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["items"],
                properties: {
                  items: {
                    type: "array",
                    items: {
                      type: "object",
                      required: ["id", "price", "quantity"],
                      properties: {
                        id: { type: "string" },
                        name: { type: "string" },
                        price: { type: "number", minimum: 0 },
                        quantity: { type: "integer", minimum: 1 },
                      },
                    },
                  },
                  shippingFee: { type: "number", minimum: 0 },
                },
              },
            },
          },
        },
        responses: {
          "200": { description: "Cotización calculada por el servidor" },
          "400": { description: "Datos de carrito inválidos" },
        },
      },
    },
    "/custom-orders": {
      post: {
        summary: "Registrar una solicitud de obra personalizada",
        responses: {
          "201": { description: "Solicitud registrada" },
          "400": { description: "Error de validación Zod" },
        },
      },
    },
    "/contact": {
      post: {
        summary: "Enviar mensaje de contacto",
        responses: {
          "201": { description: "Mensaje registrado" },
          "400": { description: "Error de validación Zod" },
        },
      },
    },
  },
} as const;

