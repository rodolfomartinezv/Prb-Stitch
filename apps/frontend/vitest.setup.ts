import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import type { ProductDto } from "@seahorse/shared";

const TEST_BACKEND_PRODUCTS: ProductDto[] = [
  {
    id: "cuadro-virgen-guadalupe",
    name: "Cuadro Virgen de Guadalupe",
    category: "Arte en papel",
    subcategory: ["Cuadro", "Religioso", "Virgen"],
    price: 140000,
    status: "Disponible",
    description: "Cuadro Virgen de Guadalupe. Arte en papel varios tamaños con marco en MDF.",
    imgDesc: "Cuadro Virgen de Guadalupe. Arte en papel varios tamaños con marco en MDF.",
    imageUrl: "images/0197345be6c5208dd361de97febfb42531c7f40b63.JPG",
    stock: 2,
    sizes: [
      {
        id: "virgen-25x25",
        size: "25 x 25 cm",
        price: 140000,
        stock: 2,
        framecolors: [{ id: "color-blanco", name: "Blanco", hexCode: "#FFFFFF", stock: 2 }],
      },
    ],
  },
  {
    id: "cuadro-amor",
    name: "Cuadro Amor",
    category: "Arte en papel",
    subcategory: ["Cuadro", "Amor", "Regalo"],
    price: 140000,
    status: "Bajo pedido",
    description: "Cuadro Amor. Arte en papel varios tamaños con marco en MDF.",
    imgDesc: "Cuadro Amor. Arte en papel varios tamaños con marco en MDF.",
    imageUrl: "images/01cf20ba5ae58b56de15f51843dfc4d717eb5aa0e7.JPG",
    stock: 4,
    sizes: [
      {
        id: "amor-20x25",
        size: "20 x 25 cm",
        price: 140000,
        stock: 4,
        framecolors: [{ id: "amor-blanco", name: "Blanco", hexCode: "#FFFFFF", stock: 2 }],
      },
    ],
  },
  {
    id: "florero-escultorico",
    name: "Florero Escultórico",
    category: "Cemento blanco",
    subcategory: ["Florero", "Decoración", "Cemento"],
    price: 380000,
    status: "Personalizable",
    description: "Moldeado a mano en cemento blanco de alta densidad y acabado satinado.",
    imgDesc: "Handcrafted sculptural arch vase made of white cast concrete.",
    imageUrl: "images/florero.JPG",
    stock: 5,
  },
  {
    id: "domino",
    name: "Dominó",
    category: "Resina",
    subcategory: ["Juego", "Resina", "Hogar"],
    price: 120000,
    status: "Agotado",
    description: "Set Juego de Dominó Artesanal en resina.",
    imgDesc: "Set Juego de Dominó Artesanal en resina.",
    imageUrl: "images/Domino.JPG",
    stock: 0,
  },
];

vi.mock("@infrastructure/api/http-client", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@infrastructure/api/http-client")>();
  return {
    ...actual,
    getProducts: vi.fn().mockResolvedValue(TEST_BACKEND_PRODUCTS),
  };
});

// Limpieza automática del DOM después de cada test de componentes
afterEach(() => {
  cleanup();
});
