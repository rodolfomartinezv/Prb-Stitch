import type { ProductDto } from "@seahorse/shared";
import { getPrismaClient } from "../infrastructure/db/prisma.js";

const FALLBACK_PRODUCTS: ProductDto[] = [
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
        framecolors: [
          { id: "amor-blanco", name: "Blanco", hexCode: "#FFFFFF", stock: 2 },
          { id: "amor-madera", name: "Madera Natural", hexCode: "#A67B5B", stock: 2 },
        ],
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
    description:
      "Handcrafted sculptural arch vase made of white cast concrete holding delicate dried lavender stems.",
    imgDesc:
      "Handcrafted sculptural arch vase made of white cast concrete holding delicate dried lavender stems.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIRHsNj0FbSzjKSr8PQhpn6jOMnEbKMJFYjxR_7SPgXTqxdFjhon4d0j6HsYtakuFKECaO1_rmRiNOA9gO5fgYImCQrMO9a8pvGE851WYCIkqxIj_RYdnXpKP-3Vse3UAltvHw0KgcmU16ng9CZ900JgWxYWx61mOUdSzSZ6THNQrs20SiVshzSCwlGD8pzkSFUjiVGdu0AWOicVhUBpKCn9CkoqcarCEHmVdEDL0",
    stock: 5,
    sizes: [
      {
        id: "florero-estandar",
        size: "Estándar",
        price: 380000,
        stock: 5,
        framecolors: [{ id: "florero-blanco", name: "Blanco", hexCode: "#FFFFFF", stock: 5 }],
      },
    ],
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
    sizes: [
      {
        id: "domino-estandar",
        size: "Estándar",
        price: 120000,
        stock: 0,
        framecolors: [
          { id: "domino-translucido", name: "Translúcido", hexCode: "#F5F5F5", stock: 0 },
        ],
      },
    ],
  },
];

function shouldUsePrisma(): boolean {
  return Boolean(process.env.DATABASE_URL && process.env.NODE_ENV !== "test");
}

function mapProductToDto(record: {
  id: string;
  name: string;
  category: string;
  subcategory: string[];
  status: string;
  imgDesc: string | null;
  imageUrl: string | null;
  stock: number;
  sizes?: Array<{
    id: string;
    size: string;
    price: number;
    stock: number;
    framecolors?: Array<{
      id: string;
      name: string;
      hexCode: string | null;
      stock: number;
      imageUrl: string | null;
    }>;
  }>;
}): ProductDto {
  const basePrice = record.sizes?.[0]?.price ?? 0;

  return {
    id: record.id,
    name: record.name,
    category: record.category,
    subcategory: record.subcategory,
    price: basePrice,
    status: record.status,
    description: record.imgDesc ?? "",
    imgDesc: record.imgDesc ?? undefined,
    imageUrl: record.imageUrl ?? undefined,
    stock: record.stock,
    sizes: record.sizes?.map((s) => ({
      id: s.id,
      size: s.size,
      price: s.price,
      stock: s.stock,
      framecolors: s.framecolors?.map((c) => ({
        id: c.id,
        name: c.name,
        hexCode: c.hexCode ?? undefined,
        stock: c.stock,
        imageUrl: c.imageUrl ?? undefined,
      })),
    })),
  };
}

export class ProductRepository {
  async findAll(): Promise<ProductDto[]> {
    if (!shouldUsePrisma()) {
      return [...FALLBACK_PRODUCTS];
    }

    const prisma = getPrismaClient();
    const rows = await prisma.product.findMany({
      include: {
        sizes: {
          orderBy: { price: "asc" },
          include: { framecolors: { orderBy: { name: "asc" } } },
        },
      },
      orderBy: { createdAt: "asc" },
    });
    return rows.map(mapProductToDto);
  }

  async findById(id: string): Promise<ProductDto | null> {
    if (!shouldUsePrisma()) {
      return FALLBACK_PRODUCTS.find((item) => item.id === id) ?? null;
    }

    const prisma = getPrismaClient();
    const row = await prisma.product.findUnique({
      where: { id },
      include: {
        sizes: {
          orderBy: { price: "asc" },
          include: { framecolors: { orderBy: { name: "asc" } } },
        },
      },
    });
    return row ? mapProductToDto(row) : null;
  }
}
