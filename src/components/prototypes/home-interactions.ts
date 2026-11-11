import { formatPriceCOP } from "@shared/utils/formatPrice";
export { formatPriceCOP };
export { goToCustomStep, highlightCatCard, simulateUpload, submitCustomForm } from "@features/customizer/services/customizer-interactions";
export { switchAdminTab, toggleMFAStatus, toggleStockAlert } from "@features/admin-dashboard/services/dashboard-interactions";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  status: string;
  statusClass: string;
  desc: string;
  imgDesc: string;
  image?: string;
}

export interface CartItem {
  id: string;
  name: string;
  category: string;
  price: number;
  qty: number;
}

export type CartLine = CartItem;

import type { MouseEvent as ReactMouseEvent } from "react";

// ESTADO GLOBAL DE PRODUCTOS - Obtenidos de Obras y Objetos Destacados
const PRODUCTS_DATA: Product[] = [
  {
    id: "cuadros-virgen",
    name: "Cuadros de la virgen",
    category: "Arte en papel",
    price: 140000,
    status: "Disponible",
    statusClass: "bg-[#83D9D9]/40 text-[#173D68]",
    desc: "Tamaño 20 x 25 cm, marco en MDF, diseño personalizable.",
    imgDesc: "Cuadros de la virgen. Arte en papel tamaño 20 x 25 cm con marco en MDF.",
    image: "images/0197345be6c5208dd361de97febfb42531c7f40b63.JPG",
  },
  {
    id: "cuadro-amor",
    name: "Cuadro Amor",
    category: "Arte en papel",
    price: 140000,
    status: "Bajo pedido",
    statusClass: "bg-[#F5D35E]/40 text-[#281B18]",
    desc: "Tamaño 20 x 25 cm, marco en MDF, ideal para regalar a quien mas quieres.",
    imgDesc: "Cuadro Amor. Arte en papel tamaño 20 x 25 cm con marco en MDF.",
    image: "images/01cf20ba5ae58b56de15f51843dfc4d717eb5aa0e7.JPG",
  },
  {
    id: "florero-escultorico",
    name: "Florero Escultórico",
    category: "Cemento blanco",
    price: 380000,
    status: "Personalizable",
    statusClass: "bg-[#B7A1DF]/40 text-[#173D68]",
    desc: "Moldeado a mano en cemento blanco de alta densidad y acabado satinado.",
    imgDesc:
      "Handcrafted sculptural arch vase made of white cast concrete holding delicate dried lavender stems.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBIRHsNj0FbSzjKSr8PQhpn6jOMnEbKMJFYjxR_7SPgXTqxdFjhon4d0j6HsYtakuFKECaO1_rmRiNOA9gO5fgYImCQrMO9a8pvGE851WYCIkqxIj_RYdnXpKP-3Vse3UAltvHw0KgcmU16ng9CZ900JgWxYWx61mOUdSzSZ6THNQrs20SiVshzSCwlGD8pzkSFUjiVGdu0AWOicVhUBpKCn9CkoqcarCEHmVdEDL0",
  },
  {
    id: "domino",
    name: "Dominó",
    category: "Resina",
    price: 120000,
    status: "Agotado",
    statusClass: "bg-surface-container text-outline line-through",
    desc: "Ideal para entretenimiento en tu hogar y como detalle.",
    imgDesc: "Set Juego de Dominó Artesanal en resina.",
    image: "images/Domino.JPG",
  },
];

// ESTADO DEL CARRITO
let CART: CartLine[] = [
  {
    id: "cuadros-virgen",
    name: "Cuadros de la virgen",
    category: "Arte en papel",
    price: 140000,
    qty: 1,
  },
  {
    id: "florero-escultorico",
    name: "Florero Escultórico",
    category: "Cemento blanco",
    price: 380000,
    qty: 1,
  },
];

const CART_STORAGE_KEY = "seahorse-cart";
let CATALOG_SORT = "featured";

function isCartLine(value: unknown): value is CartLine {
  if (typeof value !== "object" || value === null) return false;

  return (
    "id" in value &&
    typeof value.id === "string" &&
    "name" in value &&
    typeof value.name === "string" &&
    "category" in value &&
    typeof value.category === "string" &&
    "price" in value &&
    typeof value.price === "number" &&
    Number.isSafeInteger(value.price) &&
    value.price >= 0 &&
    "qty" in value &&
    typeof value.qty === "number" &&
    Number.isSafeInteger(value.qty) &&
    value.qty > 0
  );
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

function restoreCart(): void {
  const savedCart = window.sessionStorage.getItem(CART_STORAGE_KEY);
  if (!savedCart) return;

  let parsedCart: unknown;
  try {
    parsedCart = JSON.parse(savedCart);
  } catch (error) {
    console.error("No se pudo restaurar el carrito guardado.", error);
    window.sessionStorage.removeItem(CART_STORAGE_KEY);
    return;
  }

  if (!Array.isArray(parsedCart) || !parsedCart.every(isCartLine)) {
    console.error("El carrito guardado tiene un formato no válido.");
    window.sessionStorage.removeItem(CART_STORAGE_KEY);
    return;
  }

  CART = parsedCart;
}

function persistCart(): void {
  window.sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(CART));
}

// RENDER INICIAL DEL CATÁLOGO
export function renderCatalogItems(items: Product[]): void {
  const container = document.getElementById("catalog-items-container");
  if (!container) return;
  container.innerHTML = "";

  const countEl = document.getElementById("catalog-count-text");
  if (countEl) countEl.innerHTML = `Mostrando <strong>${items.length}</strong> piezas de autor`;

  if (items.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className =
      "col-span-full rounded-2xl bg-surface-container-lowest p-6 text-center text-on-surface-variant";
    emptyState.textContent = "No hay productos que coincidan con estos filtros.";
    container.appendChild(emptyState);
    return;
  }

  items.forEach((prod) => {
    const card = document.createElement("div");
    card.className =
      "group bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/15 artistic-shadow-1 hover:artistic-shadow-2 transition-all flex flex-col justify-between";
    card.innerHTML = `
          <div>
            <div class="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-surface-container-low cursor-pointer" data-home-action="open-product" data-product-id="${prod.id}">
              <img src="${prod.image ?? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}" alt="${escapeHtml(prod.name)}" data-alt="${prod.imgDesc} Aesthetic art gallery photograph in warm ivory atelier lighting." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-label-badge uppercase tracking-wider ${prod.statusClass} font-bold">
                ${prod.status}
              </span>
            </div>
            <p class="font-caption text-caption text-outline">${escapeHtml(prod.category)}</p>
            <h3 data-home-action="open-product" data-product-id="${prod.id}" class="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors cursor-pointer">${escapeHtml(prod.name)}</h3>
            <p class="font-caption text-caption text-on-surface-variant line-clamp-2 mt-1">${escapeHtml(prod.desc)}</p>
          </div>
          <div class="mt-4 pt-3 border-t border-outline-variant/15 flex items-center justify-between">
            <div>
              <span class="text-[10px] text-outline uppercase block">COP</span>
              <span class="font-label-price text-label-price text-on-surface font-semibold">$${prod.price.toLocaleString("es-CO")}</span>
            </div>
            <div class="flex gap-1.5">
              <button data-home-action="open-product" data-product-id="${prod.id}" title="Ver detalle" class="w-8 h-8 rounded-full border border-outline-variant/40 flex items-center justify-center text-secondary hover:bg-surface-container">
                <span class="material-symbols-outlined text-sm">visibility</span>
              </button>
              ${
                prod.status !== "Agotado"
                  ? `
                <button data-home-action="add-product" data-product-id="${prod.id}" title="Agregar" class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-surface-tint active:scale-95 shadow-sm">
                  <span class="material-symbols-outlined text-sm">add</span>
                </button>
              `
                  : `
                <button data-home-action="customize" title="Encargar" class="px-2 py-1 rounded-full bg-primary-fixed/30 text-primary text-[11px] font-label-badge">Encargar</button>
              `
              }
            </div>
          </div>
        `;
    container.appendChild(card);
  });
}

// NAVEGACIÓN DINÁMICA POR TABS
export function navigateTo(viewId: string): void {
  if (window.location.pathname === "/tienda" || window.location.pathname === "/product-catalog") {
    const catalog = document.getElementById("view-catalogo");
    const product = document.getElementById("view-producto");

    if (catalog && product && (viewId === "catalogo" || viewId === "producto")) {
      catalog.classList.toggle("hidden", viewId === "producto");
      product.classList.toggle("hidden", viewId === "catalogo");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
  }

  const routes: Record<string, string> = {
    home: "/",
    catalogo: "/product-catalog",
    tienda: "/product-catalog",
    "product-catalog": "/product-catalog",
    producto: "/product-catalog",
    personaliza: "/customizer",
    customizer: "/customizer",
    nosotros: "/about-us",
    "sobre-nosotros": "/about-us",
    "about-us": "/about-us",
    contacto: "/contact",
    contact: "/contact",
    admin: "/admin-dashboard",
    dashboard: "/admin-dashboard",
    "admin-dashboard": "/admin-dashboard",
    checkout: "/shopping-cart",
    carrito: "/shopping-cart",
    "shopping-cart": "/shopping-cart",
  };
  window.location.assign(routes[viewId] ?? "/");
}

// FILTRO DIRECTO DESDE CATEGORÍA EN HOME
export function filterCatalog(categoryName: string): void {
  if (window.location.pathname !== "/tienda" && window.location.pathname !== "/product-catalog") {
    window.location.assign(`/product-catalog?categoria=${encodeURIComponent(categoryName)}`);
    return;
  }

  navigateTo("catalogo");
  const radio = document.querySelector<HTMLInputElement>(
    `input[name="cat-filter"][value="${categoryName}"]`,
  );
  if (radio) {
    radio.checked = true;
    applyCatalogFilters();
  }
}

// APLICAR FILTROS DEL CATÁLOGO
export function applyCatalogFilters(): void {
  const searchVal = (
    document.querySelector<HTMLInputElement>("#catalog-search-input")?.value || ""
  ).toLowerCase();
  const selectedCat =
    document.querySelector<HTMLInputElement>('input[name="cat-filter"]:checked')?.value || "all";
  const maxPrice = Number.parseInt(
    document.querySelector<HTMLInputElement>("#price-range-input")?.value || "500000",
    10,
  );

  const allowDisponible =
    document.querySelector<HTMLInputElement>("#filter-disp-disponible")?.checked;
  const allowPedido = document.querySelector<HTMLInputElement>("#filter-disp-pedido")?.checked;
  const allowPersonalizable = document.querySelector<HTMLInputElement>(
    "#filter-disp-personalizable",
  )?.checked;
  const allowAgotado = document.querySelector<HTMLInputElement>("#filter-disp-agotado")?.checked;

  const filtered = PRODUCTS_DATA.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(searchVal) ||
      p.desc.toLowerCase().includes(searchVal) ||
      p.category.toLowerCase().includes(searchVal);
    const matchCat = selectedCat === "all" || p.category === selectedCat;
    const matchPrice = p.price <= maxPrice;

    let matchStatus = false;
    if (p.status === "Disponible" && allowDisponible) matchStatus = true;
    if (p.status === "Bajo pedido" && allowPedido) matchStatus = true;
    if (p.status === "Personalizable" && allowPersonalizable) matchStatus = true;
    if (p.status === "Agotado" && allowAgotado) matchStatus = true;

    return matchSearch && matchCat && matchPrice && matchStatus;
  });

  if (CATALOG_SORT === "price-asc") filtered.sort((a, b) => a.price - b.price);
  else if (CATALOG_SORT === "price-desc") filtered.sort((a, b) => b.price - a.price);
  else if (CATALOG_SORT === "name") {
    filtered.sort((a, b) => a.name.localeCompare(b.name));
  }

  renderCatalogItems(filtered);
}

export function updatePriceFilter(val: string | number): void {
  const label = document.getElementById("price-range-label");
  if (label) label.textContent = `$${Number.parseInt(String(val), 10).toLocaleString("es-CO")} COP`;
  applyCatalogFilters();
}

export function resetFilters(): void {
  const searchInput = document.querySelector<HTMLInputElement>("#catalog-search-input");
  if (searchInput) searchInput.value = "";
  CATALOG_SORT = "featured";
  const sortSelect = document.querySelector<HTMLSelectElement>("#catalog-sort-select");
  if (sortSelect) sortSelect.value = "featured";
  const allCatRadio = document.querySelector<HTMLInputElement>(
    'input[name="cat-filter"][value="all"]',
  );
  if (allCatRadio) allCatRadio.checked = true;
  const priceInput = document.querySelector<HTMLInputElement>("#price-range-input");
  if (priceInput) {
    priceInput.value = "450000";
    updatePriceFilter(450000);
  }
  ["disponible", "pedido", "personalizable", "agotado"].forEach((status) => {
    const checkbox = document.getElementById(`filter-disp-${status}`);
    if (checkbox instanceof HTMLInputElement) checkbox.checked = true;
  });
  applyCatalogFilters();
}

export function sortCatalog(sortType: string): void {
  CATALOG_SORT = sortType;
  applyCatalogFilters();
}

// ABRIR FICHA DE PRODUCTO
export function openProductDetail(productId: string): void {
  const prod =
    PRODUCTS_DATA.find((p) => p.id === productId) ||
    (productId === "florero-arco"
      ? PRODUCTS_DATA.find((p) => p.id === "cuadro-amor")
      : undefined) ||
    (productId === "lienzo-mareas"
      ? PRODUCTS_DATA.find((p) => p.id === "florero-escultorico")
      : undefined);
  if (!prod) return;

  const title = document.getElementById("detail-title");
  const breadcrumbTitle = document.getElementById("detail-title-bread");
  const breadcrumbCategory = document.getElementById("detail-category-bread");
  const price = document.getElementById("detail-price");
  const badge = document.getElementById("detail-badge");
  const mainImg = document.getElementById("detail-main-img") as HTMLImageElement | null;
  if (!title || !breadcrumbTitle || !breadcrumbCategory || !price || !badge) return;
  title.textContent = prod.name;
  breadcrumbTitle.textContent = prod.name;
  breadcrumbCategory.textContent = prod.category;
  price.textContent = `$${prod.price.toLocaleString("es-CO")} COP`;
  badge.textContent = `${prod.status} — Hecho en Colombia`;
  if (mainImg && prod.image) {
    mainImg.src = prod.image;
    mainImg.alt = prod.imgDesc;
  }

  navigateTo("producto");
}

export function openProductModal(prodId: string): void {
  openProductDetail(prodId);
}

export function switchDetailImage(index: number): void {
  const mainImg = document.getElementById("detail-main-img");
  if (mainImg) {
    mainImg.style.opacity = "0.5";
    setTimeout(() => {
      mainImg.style.opacity = "1";
    }, 200);
  }
}

export function selectVariant(btn: HTMLElement, variantText: string): void {
  document.querySelectorAll(".variant-pill").forEach((b) => {
    b.className =
      "variant-pill py-2.5 px-3 rounded-xl border border-outline-variant/40 bg-surface-container-low text-on-surface font-body-sm font-medium text-left";
  });
  btn.className =
    "variant-pill py-2.5 px-3 rounded-xl border-2 border-primary bg-primary-fixed/20 text-on-primary-fixed-variant font-body-sm font-medium text-left";
}

export function addCurrentDetailToCart(): void {
  const title = document.getElementById("detail-title")?.textContent;
  const priceText = document.getElementById("detail-price")?.textContent;
  if (!title || !priceText) return;
  const price = Number.parseInt(priceText.replace(/\D/g, ""), 10) || 185000;
  addToCart(title, price, "Arte de Autor");
}

// MANEJO DE CARRITO
export function addToCart(name: string, price: number, category: string): void {
  const existing = CART.find((item) => item.name === name);
  if (existing) {
    existing.qty += 1;
  } else {
    CART.push({ id: "item-" + Date.now(), name, price, category, qty: 1 });
  }
  persistCart();
  updateCartUI();
  toggleCartDrawer(true);
}

export function removeCartItem(index: number): void {
  CART.splice(index, 1);
  persistCart();
  updateCartUI();
}

export function updateCartUI(): void {
  const badge = document.getElementById("cart-counter-badge");
  const totalQty = CART.reduce((sum, item) => sum + item.qty, 0);
  if (badge) badge.textContent = String(totalQty);

  const container = document.getElementById("cart-drawer-items");
  if (!container) return;

  if (CART.length === 0) {
    container.innerHTML =
      '<div class="text-center py-12 text-outline"><p>Tu carrito está vacío.</p><button data-home-action="explore" class="mt-3 text-primary font-bold text-body-sm underline">Explorar obras</button></div>';
    const subtotalEl = document.getElementById("drawer-subtotal-price");
    if (subtotalEl) subtotalEl.textContent = "$0 COP";
    return;
  }

  let subtotal = 0;
  container.innerHTML = "";

  CART.forEach((item, idx) => {
    subtotal += item.price * item.qty;
    const div = document.createElement("div");
    div.className =
      "p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-between gap-3";
    div.innerHTML = `
          <div class="flex-grow">
            <h4 class="font-headline-sm text-body-md font-semibold text-on-surface leading-snug">${escapeHtml(item.name)}</h4>
            <span class="text-caption text-outline">${escapeHtml(item.category)} · $${item.price.toLocaleString("es-CO")} COP</span>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-caption text-on-surface font-medium">Cant: ${item.qty}</span>
            </div>
          </div>
          <div class="text-right">
            <span class="font-label-price text-body-md font-bold text-on-surface block">$${(item.price * item.qty).toLocaleString("es-CO")} COP</span>
            <button data-home-action="remove-cart-item" data-cart-index="${idx}" class="text-caption text-error hover:underline mt-1">Eliminar</button>
          </div>
        `;
    container.appendChild(div);
  });

  const subtotalEl = document.getElementById("drawer-subtotal-price");
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString("es-CO")} COP`;
}

export function toggleCartDrawer(open: boolean): void {
  const overlay = document.getElementById("cart-drawer-overlay");
  const panel = document.getElementById("cart-drawer-panel");
  if (!overlay || !panel) return;
  if (open) {
    overlay.classList.remove("hidden");
    panel.classList.remove("translate-x-full");
    updateCartUI();
  } else {
    overlay.classList.add("hidden");
    panel.classList.add("translate-x-full");
  }
}

// CHECKOUT Y FLETE
export function updateCheckoutView(): void {
  const itemsList = document.getElementById("checkout-items-list");
  if (!itemsList) return;
  itemsList.innerHTML = "";

  let subtotal = 0;
  CART.forEach((item) => {
    subtotal += item.price * item.qty;
    const row = document.createElement("div");
    row.className = "flex justify-between items-center text-body-sm";
    row.innerHTML = `
          <div>
            <p class="font-medium text-on-surface">${escapeHtml(item.name)} <span class="text-outline text-caption">× ${item.qty}</span></p>
            <span class="text-caption text-outline">${escapeHtml(item.category)}</span>
          </div>
          <span class="font-semibold text-on-surface">$${(item.price * item.qty).toLocaleString("es-CO")} COP</span>
        `;
    itemsList.appendChild(row);
  });

  const subtotalEl = document.getElementById("checkout-subtotal");
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString("es-CO")} COP`;
  updateShippingCost();
}

export function updateShippingCost(): void {
  const dept = document.querySelector<HTMLSelectElement>("#shipping-dept")?.value;
  const shippingCost = dept === "Especial" ? 18000 : 14000;

  const subtotalVal = CART.reduce((sum, i) => sum + i.price * i.qty, 0);
  const total = subtotalVal + shippingCost;

  const shipping = document.getElementById("checkout-shipping");
  const totalElement = document.getElementById("checkout-total");
  if (shipping) shipping.textContent = `$${shippingCost.toLocaleString("es-CO")} COP`;
  if (totalElement) totalElement.textContent = `$${total.toLocaleString("es-CO")} COP`;
}

export function processPaymentSimulator(): void {
  const statusBox = document.getElementById("payment-status-box");
  if (!statusBox) return;

  statusBox.classList.remove("hidden");
  statusBox.className = "p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900";
  statusBox.innerHTML = `
        <div class="flex items-center gap-2 font-headline-sm font-semibold">
          <span class="material-symbols-outlined text-amber-600 animate-spin">sync</span>
          <span>Procesando pago con la pasarela colombiana...</span>
        </div>
        <p class="text-caption mt-1">Conectando de forma segura con el nodo bancario...</p>
      `;

  setTimeout(() => {
    statusBox.className =
      "p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 space-y-2";
    statusBox.innerHTML = `
          <div class="flex items-center gap-2 font-headline-sm font-semibold text-emerald-800">
            <span class="material-symbols-outlined text-emerald-600">check_circle</span>
            <span>¡Pago Confirmado con Éxito!</span>
          </div>
          <p class="text-body-sm">Número de Transacción: <strong>COL-88912-MP</strong></p>
          <p class="text-caption text-emerald-700">Se ha enviado la confirmación y la guía de Coordinadora a tu correo. El taller de Andrea Sosa iniciará la preparación de tu obra.</p>
          <div class="pt-2">
            <button data-home-action="home" class="px-5 py-2 rounded-full bg-emerald-700 text-white font-label-badge text-caption">Volver al Inicio</button>
          </div>
        `;
  }, 1500);
}

// INTERACCIONES GENERALES
export function focusSearch(): void {
  if (window.location.pathname === "/tienda" || window.location.pathname === "/product-catalog") {
    document.getElementById("catalog-search-input")?.focus();
    return;
  }

  window.location.assign("/product-catalog?focus=search");
}

export function toggleWishlist(btn: HTMLElement): void {
  const icon = btn.querySelector<HTMLElement>(".material-symbols-outlined");
  if (icon) {
    const isFav = icon.style.fontVariationSettings?.includes("'FILL' 1");
    if (isFav) {
      icon.style.fontVariationSettings = "'FILL' 0";
      icon.classList.remove("text-error");
    } else {
      icon.style.fontVariationSettings = "'FILL' 1";
      icon.classList.add("text-error");
    }
  }
}

export function toggleMobileMenu(): void {
  const panel = document.getElementById("mobile-nav-panel");
  if (!panel) return;

  const isOpen = !panel.classList.toggle("hidden");
  const toggle = document.getElementById("mobile-menu-toggle");
  toggle?.setAttribute("aria-expanded", String(isOpen));
  toggle?.setAttribute(
    "aria-label",
    isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación",
  );
}

// INICIALIZACIÓN
export function initializeHomePrototype(): void {
  restoreCart();
  renderCatalogItems(PRODUCTS_DATA);
  updateCartUI();
}

export function handleHomeInteraction(event: ReactMouseEvent<HTMLDivElement>): void {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const actionElement = target.closest<HTMLElement>("[data-home-action]");
  if (!actionElement) return;

  switch (actionElement.dataset.homeAction) {
    case "open-product": {
      const productId = actionElement.dataset.productId;
      if (productId) openProductDetail(productId);
      break;
    }
    case "add-product": {
      const product = PRODUCTS_DATA.find((item) => item.id === actionElement.dataset.productId);
      if (product) addToCart(product.name, product.price, product.category);
      break;
    }
    case "customize":
      navigateTo("personaliza");
      break;
    case "explore":
      toggleCartDrawer(false);
      navigateTo("catalogo");
      break;
    case "remove-cart-item": {
      const index = Number(actionElement.dataset.cartIndex);
      if (Number.isInteger(index)) removeCartItem(index);
      break;
    }
    case "home":
      navigateTo("home");
      break;
  }
}
