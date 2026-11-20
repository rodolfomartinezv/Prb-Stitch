import "dotenv/config";
import { getPrismaClient } from "../src/infrastructure/db/prisma.js";

const INITIAL_PRODUCTS = [
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

async function main(): Promise<void> {
  const prisma = getPrismaClient();

  for (const product of INITIAL_PRODUCTS) {
    await prisma.product.upsert({
      where: { id: product.id },
      update: product,
      create: product,
    });
  }

  console.log(`Seeded ${INITIAL_PRODUCTS.length} products into Neon PostgreSQL.`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error("Failed to seed database:", err);
  process.exit(1);
});

