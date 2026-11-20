import type { ProductDto, ProductFilterQuery } from "@seahorse/shared";
import { ProductRepository } from "../repositories/product.repository.js";

export class ProductService {
  constructor(private readonly productRepository = new ProductRepository()) {}

  async listProducts(query: ProductFilterQuery): Promise<ProductDto[]> {
    let items = await this.productRepository.findAll();

    if (query.category && query.category !== "all") {
      const normalizedCat = query.category.toLowerCase();
      items = items.filter((item) => item.category.toLowerCase() === normalizedCat);
    }

    if (query.search) {
      const term = query.search.toLowerCase();
      items = items.filter(
        (item) =>
          item.name.toLowerCase().includes(term) ||
          item.description.toLowerCase().includes(term) ||
          item.category.toLowerCase().includes(term)
      );
    }

    if (typeof query.maxPrice === "number") {
      items = items.filter((item) => item.price <= query.maxPrice!);
    }

    if (query.sort === "price-asc") {
      items.sort((a, b) => a.price - b.price);
    } else if (query.sort === "price-desc") {
      items.sort((a, b) => b.price - a.price);
    } else if (query.sort === "name") {
      items.sort((a, b) => a.name.localeCompare(b.name, "es"));
    }

    return items;
  }

  async getProductById(id: string): Promise<ProductDto | null> {
    return this.productRepository.findById(id);
  }
}

