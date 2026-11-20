import type { ProductDto } from "@seahorse/shared";
import { getPrismaClient } from "../infrastructure/db/prisma.js";

const FALLBACK_PRODUCTS: ProductDto[] = [
  {
    id: "cuadros-virgen",
    name: "Cuadros de la virgen",
    category: "Arte en papel",
    price: 140000,
    status: "Disponible",
    statusClass: "bg-[#83D9D9]/40 text-[#173D68]",
    description: "Tamaño 20 x 25 cm, marco en MDF, diseño personalizable.",
    imgDesc: "Cuadros de la virgen. Arte en papel tamaño 20 x 25 cm con marco en MDF.",
    imageUrl: "images/0197345be6c5208dd361de97febfb42531c7f40b63.JPG",
    stock: 8,
  },
  {
    id: "cuadro-amor",
    name: "Cuadro Amor",
    category: "Arte en papel",
    price: 140000,
    status: "Bajo pedido",
    statusClass: "bg-[#F5D35E]/40 text-[#281B18]",
    description: "Tamaño 20 x 25 cm, marco en MDF, ideal para regalar a quien mas quieres.",
    imgDesc: "Cuadro Amor. Arte en papel tamaño 20 x 25 cm con marco en MDF.",
    imageUrl: "images/01cf20ba5ae58b56de15f51843dfc4d717eb5aa0e7.JPG",
    stock: 4,
  },
  {
    id: "florero-escultorico",
    name: "Florero Escultórico",
    category: "Cemento blanco",
    price: 380000,
    status: "Personalizable",
    statusClass: "bg-[#B7A1DF]/40 text-[#173D68]",
    description: "Moldeado a mano en cemento blanco de alta densidad y acabado satinado.",
    imgDesc:
      "Handcrafted sculptural arch vase made of white cast concrete holding delicate dried lavender stems.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIRHsNj0FbSzjKSr8PQhpn6jOMnEbKMJFYjxR_7SPgXTqxdFjhon4d0j6HsYtakuFKECaO1_rmRiNOA9gO5fgYImCQrMO9a8pvGE851WYCIkqxIj_RYdnXpKP-3Vse3UAltvHw0KgcmU16ng9CZ900JgWxYWx61mOUdSzSZ6THNQrs20SiVshzSCwlGD8pzkSFUjiVGdu0AWOicVhUBpKCn9CkoqcarCEHmVdEDL0",
    stock: 5,
  },
  {
    id: "domino",
    name: "Dominó",
    category: "Resina",
    price: 120000,
    status: "Agotado",
    statusClass: "bg-surface-container text-outline line-through",
    description: "Ideal para entretenimiento en tu hogar y como detalle.",
    imgDesc: "Set Juego de Dominó Artesanal en resina.",
    imageUrl: "images/Domino.JPG",
    stock: 0,
  },
];

function shouldUsePrisma(): boolean {
  return Boolean(process.env.DATABASE_URL && process.env.NODE_ENV !== "test");
}

function mapProductToDto(record: {
  id: string;
  name: string;
  category: string;
  price: number;
  status: string;
  statusClass: string | null;
  description: string;
  imgDesc: string | null;
  imageUrl: string | null;
  stock: number;
}): ProductDto {
  return {
    id: record.id,
    name: record.name,
    category: record.category,
    price: record.price,
    status: record.status,
    statusClass: record.statusClass ?? undefined,
    description: record.description,
    imgDesc: record.imgDesc ?? undefined,
    imageUrl: record.imageUrl ?? undefined,
    stock: record.stock,
  };
}

export class ProductRepository {
  async findAll(): Promise<ProductDto[]> {
    if (!shouldUsePrisma()) {
      return [...FALLBACK_PRODUCTS];
    }

    const prisma = getPrismaClient();
    const rows = await prisma.product.findMany({ orderBy: { createdAt: "asc" } });
    return rows.map(mapProductToDto);
  }

  async findById(id: string): Promise<ProductDto | null> {
    if (!shouldUsePrisma()) {
      return FALLBACK_PRODUCTS.find((item) => item.id === id) ?? null;
    }

    const prisma = getPrismaClient();
    const row = await prisma.product.findUnique({ where: { id } });
    return row ? mapProductToDto(row) : null;
  }
}
