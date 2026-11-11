import type { CatalogCategorySlug } from "@shared/utils/catalog-categories";

export interface ProductCatalogFilter {
  category: CatalogCategorySlug;
  searchQuery?: string;
}

export interface ProductCatalogItem {
  id: string;
  name: string;
  price: number;
  category: CatalogCategorySlug;
  imageUrl: string;
}
