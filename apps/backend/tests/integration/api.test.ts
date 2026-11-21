import request from "supertest";
import { describe, expect, it } from "vitest";
import { createApp } from "../../src/app.js";

const ALLOWED_ORIGIN = "http://localhost:3000";
const API_PREFIX = "/api/v1";
const CONTENT_TYPE_JSON = /application\/json/;

describe("Backend API Integration", () => {
  const app = createApp({ corsOrigin: ALLOWED_ORIGIN });

  it("GET /api/v1/health returns service health and CORS header for allowed origin", async () => {
    const res = await request(app)
      .get(`${API_PREFIX}/health`)
      .set("Origin", ALLOWED_ORIGIN);

    expect(res.status).toBe(200);
    expect(res.headers["access-control-allow-origin"]).toBe(ALLOWED_ORIGIN);
    expect(res.body.success).toBe(true);
    expect(res.body.data.service).toBe("@seahorse/backend");
  });

  it("GET /api/v1/openapi.json returns the OpenAPI specification", async () => {
    const res = await request(app).get(`${API_PREFIX}/openapi.json`);

    expect(res.status).toBe(200);
    expect(res.headers["content-type"]).toMatch(CONTENT_TYPE_JSON);
    expect(res.body.openapi).toBeDefined();
    expect(res.body.paths).toBeDefined();
  });

  it("GET /api/v1/products returns product catalog list", async () => {
    const res = await request(app).get(`${API_PREFIX}/products`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  it("GET /api/v1/products/cuadro-virgen-guadalupe returns the matching product", async () => {
    const res = await request(app).get(`${API_PREFIX}/products/cuadro-virgen-guadalupe`);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.id).toBe("cuadro-virgen-guadalupe");
  });

  it("GET /api/v1/products/unknown returns 404", async () => {
    const res = await request(app).get(`${API_PREFIX}/products/unknown`);

    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
    expect(res.body.error.code).toBe("PRODUCT_NOT_FOUND");
  });

  it("POST /api/v1/cart/quote returns 200 for valid payload and 400 for invalid payload", async () => {
    const validRes = await request(app)
      .post(`${API_PREFIX}/cart/quote`)
      .send({
        items: [{ id: "cuadro-virgen-guadalupe", price: 140000, quantity: 5 }],
        shippingFee: 10000,
      });

    expect(validRes.status).toBe(200);
    expect(validRes.body.success).toBe(true);
    expect(validRes.body.data.subtotal).toBe(700000);

    const invalidRes = await request(app)
      .post(`${API_PREFIX}/cart/quote`)
      .send({
        items: [{ id: "", price: -10, quantity: 0 }],
      });

    expect(invalidRes.status).toBe(400);
    expect(invalidRes.body.success).toBe(false);
  });

  it("POST /api/v1/custom-orders returns 201 for valid payload and 400 for invalid payload", async () => {
    const validRes = await request(app)
      .post(`${API_PREFIX}/custom-orders`)
      .send({
        customerName: "María Gómez",
        customerEmail: "maria@example.com",
        category: "Arte en papel",
        dimensions: "30 x 40 cm",
        notes: "Quisiera un cuadro personalizado en tonos azules y dorados.",
      });

    expect(validRes.status).toBe(201);
    expect(validRes.body.success).toBe(true);
    expect(validRes.body.data.status).toBe("PENDING");

    const invalidRes = await request(app)
      .post(`${API_PREFIX}/custom-orders`)
      .send({
        customerName: "M",
        customerEmail: "invalid-email",
        category: "",
        notes: "corto",
      });

    expect(invalidRes.status).toBe(400);
    expect(invalidRes.body.success).toBe(false);
  });

  it("POST /api/v1/contact returns 201 for valid payload and 400 for invalid payload", async () => {
    const validRes = await request(app)
      .post(`${API_PREFIX}/contact`)
      .send({
        name: "Carlos Pérez",
        email: "carlos@example.com",
        subject: "Consulta sobre envíos",
        message: "Hola, quisiera saber cuánto tarda el envío a Medellín.",
      });

    expect(validRes.status).toBe(201);
    expect(validRes.body.success).toBe(true);
    expect(validRes.body.data.id).toBeDefined();

    const invalidRes = await request(app)
      .post(`${API_PREFIX}/contact`)
      .send({
        name: "C",
        email: "not-an-email",
        subject: "Hi",
        message: "short",
      });

    expect(invalidRes.status).toBe(400);
    expect(invalidRes.body.success).toBe(false);
  });
});
