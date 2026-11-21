import "dotenv/config";
import { getPrismaClient } from "../src/infrastructure/db/prisma.js";

const INITIAL_PRODUCTS = [
  {
    id: "cuadro-virgen-guadalupe",
    name: "Cuadro Virgen de Guadalupe",
    category: "Arte en papel",
    subcategory: ["Cuadro", "Religioso", "Virgen"],
    status: "Disponible",
    imgDesc: "Cuadro Virgen de Guadalupe. Arte en papel varios tamaños con marco en MDF.",
    imageUrl: "images/0197345be6c5208dd361de97febfb42531c7f40b63.JPG",
    stock: 2,
    sizes: [
      {
        size: "25 x 25 cm",
        price: 140000,
        stock: 2,
        framecolors: [
          // { name: "Dorado", hexCode: "#D4AF37", stock: 4 },
          { name: "Blanco", hexCode: "#FFFFFF", stock: 2 },
        ],
      },
      /*
      {
        size: "30 x 40 cm",
        price: 210000,
        stock: 5,
        framecolors: [
          { name: "Dorado", hexCode: "#D4AF37", stock: 3 },
          { name: "Madera Natural", hexCode: "#A67B5B", stock: 2 },
        ],
      },
      {
        size: "50 x 70 cm",
        price: 320000,
        stock: 2,
        framecolors: [{ name: "Dorado", hexCode: "#D4AF37", stock: 2 }],
      },
      */
    ],
  },
  {
    id: "cuadro-amor",
    name: "Cuadro Amor",
    category: "Arte en papel",
    subcategory: ["Cuadro", "Amor", "Regalo"],
    status: "Bajo pedido",
    imgDesc: "Cuadro Amor. Arte en papel varios tamaños con marco en MDF.",
    imageUrl: "images/01cf20ba5ae58b56de15f51843dfc4d717eb5aa0e7.JPG",
    stock: 4,
    sizes: [
      {
        size: "20 x 25 cm",
        price: 140000,
        stock: 4,
        framecolors: [
          { name: "Blanco", hexCode: "#FFFFFF", stock: 2 },
          { name: "Madera Natural", hexCode: "#A67B5B", stock: 2 },
        ],
      },
    ],
  },
  {
    id: "florero-escultorico",
    name: "Florero Escultórico",
    category: "Cemento blanco",
    subcategory: ["Florero", "Decoración", "Cemento"],
    status: "Personalizable",
    imgDesc:
      "Handcrafted sculptural arch vase made of white cast concrete holding delicate dried lavender stems.",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIRHsNj0FbSzjKSr8PQhpn6jOMnEbKMJFYjxR_7SPgXTqxdFjhon4d0j6HsYtakuFKECaO1_rmRiNOA9gO5fgYImCQrMO9a8pvGE851WYCIkqxIj_RYdnXpKP-3Vse3UAltvHw0KgcmU16ng9CZ900JgWxYWx61mOUdSzSZ6THNQrs20SiVshzSCwlGD8pzkSFUjiVGdu0AWOicVhUBpKCn9CkoqcarCEHmVdEDL0",
    stock: 5,
    sizes: [
      {
        size: "Estándar",
        price: 380000,
        stock: 5,
        framecolors: [{ name: "Blanco", hexCode: "#FFFFFF", stock: 5 }],
      },
    ],
  },
  {
    id: "domino",
    name: "Dominó",
    category: "Resina",
    subcategory: ["Juego", "Resina", "Hogar"],
    status: "Agotado",
    imgDesc: "Set Juego de Dominó Artesanal en resina.",
    imageUrl: "images/Domino.JPG",
    stock: 0,
    sizes: [
      {
        size: "Estándar",
        price: 120000,
        stock: 0,
        framecolors: [{ name: "Translúcido", hexCode: "#F5F5F5", stock: 0 }],
      },
    ],
  },
];

async function main(): Promise<void> {
  const prisma = getPrismaClient();
  const activeIds = INITIAL_PRODUCTS.map((product) => product.id);

  await prisma.product.deleteMany({
    where: {
      id: { notIn: activeIds },
    },
  });

  for (const product of INITIAL_PRODUCTS) {
    const { sizes = [], ...productData } = product;

    await prisma.product.upsert({
      where: { id: productData.id },
      update: productData,
      create: productData,
    });

    const activeSizes = sizes.map((variant) => variant.size);
    await prisma.productSize.deleteMany({
      where: {
        productId: productData.id,
        size: { notIn: activeSizes },
      },
    });

    for (const variant of sizes) {
      const { framecolors = [], ...sizeData } = variant;

      const savedSize = await prisma.productSize.upsert({
        where: {
          productId_size: {
            productId: productData.id,
            size: sizeData.size,
          },
        },
        update: {
          price: sizeData.price,
          stock: sizeData.stock,
        },
        create: {
          productId: productData.id,
          size: sizeData.size,
          price: sizeData.price,
          stock: sizeData.stock,
        },
      });

      const activeColors = framecolors.map((color) => color.name);
      await prisma.productColor.deleteMany({
        where: {
          productSizeId: savedSize.id,
          name: { notIn: activeColors },
        },
      });

      for (const color of framecolors) {
        await prisma.productColor.upsert({
          where: {
            productSizeId_name: {
              productSizeId: savedSize.id,
              name: color.name,
            },
          },
          update: {
            hexCode: color.hexCode,
            stock: color.stock,
          },
          create: {
            productSizeId: savedSize.id,
            name: color.name,
            hexCode: color.hexCode,
            stock: color.stock,
          },
        });
      }
    }
  }

  console.log(`Seeded ${INITIAL_PRODUCTS.length} products into Neon PostgreSQL.`);
  await prisma.$disconnect();
}

main().catch((err) => {
  console.error("Failed to seed database:", err);
  process.exit(1);
});
