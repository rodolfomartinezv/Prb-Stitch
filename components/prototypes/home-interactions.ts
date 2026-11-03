interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  status: string;
  statusClass: string;
  desc: string;
  imgDesc: string;
}

interface CartLine {
  id: string;
  name: string;
  category: string;
  price: number;
  qty: number;
}

import type { MouseEvent as ReactMouseEvent } from "react";


    // ESTADO GLOBAL DE PRODUCTOS
    const PRODUCTS_DATA: Product[] = [
      { id: 'posavasos-oceano', name: 'Posavasos Océano & Hortensias', category: 'Resina', price: 65000, status: 'Disponible', statusClass: 'bg-[#83D9D9]/40 text-[#173D68]', desc: 'Dúo de posavasos con flores naturales del oriente antioqueño y destellos dorados.', imgDesc: 'Pair of round resin botanical coasters with natural hydrangeas and gold flake particles.' },
      { id: 'florero-arco', name: 'Florero Escultórico Arco Sol', category: 'Cemento blanco', price: 140000, status: 'Bajo pedido', statusClass: 'bg-[#F5D35E]/40 text-[#281B18]', desc: 'Moldeado a mano en cemento blanco de alta densidad con acabado satinado.', imgDesc: 'Sculptural matte white cement arch vase with single eucalyptus stem.' },
      { id: 'lienzo-mareas', name: "Lienzo 'Mareas de Andrea'", category: 'Cuadros', price: 380000, status: 'Personalizable', statusClass: 'bg-[#B7A1DF]/40 text-[#173D68]', desc: 'Obra original de 50x70cm con relieve textil y paleta marina de la firma.', imgDesc: 'Framed contemporary abstract coastal painting with textile relief.' },
      { id: 'peluche-aureliano', name: "Caballito Textil 'Aureliano'", category: 'Peluches', price: 120000, status: 'Agotado', statusClass: 'bg-surface-container text-outline line-through', desc: 'Peluche de edición coleccionable con certificado de autoría firmado.', imgDesc: 'Artisanal seahorse fabric plush doll in soft pastel linen colors.' },
      { id: 'camisa-caballito', name: 'Camisa Guayabera Ilustrada', category: 'Ropa', price: 210000, status: 'Disponible', statusClass: 'bg-[#83D9D9]/40 text-[#173D68]', desc: 'Lino 100% colombiano con bordado manual de la silueta del caballito.', imgDesc: 'Ivory relaxed linen shirt with handcrafted subtle seahorse embroidery on collar.' },
      { id: 'bandeja-botanica', name: 'Bandeja Botánica Marfil & Hortensias', category: 'Resina', price: 185000, status: 'Bajo pedido', statusClass: 'bg-[#F5D35E]/40 text-[#281B18]', desc: 'Bandeja multiusos de servicio con resina de ultra alta transparencia.', imgDesc: 'Luxurious epoxy resin serving tray featuring encapsulated blue and ivory blossoms.' },
      { id: 'portavela-cemento', name: 'Portavelas Onda Estriada', category: 'Cemento blanco', price: 55000, status: 'Disponible', statusClass: 'bg-[#83D9D9]/40 text-[#173D68]', desc: 'Pieza de cemento blanco moldeado para vela de té o aromaterapia.', imgDesc: 'White concrete fluted candle holder with gentle organic waves.' },
      { id: 'cuadro-botanico', name: 'Cuadro Botánico Miniatura', category: 'Cuadros', price: 115000, status: 'Personalizable', statusClass: 'bg-[#B7A1DF]/40 text-[#173D68]', desc: 'Lienzo de 20x20cm con flores prensadas y técnica mixta al óleo.', imgDesc: 'Small framed natural flower botanical pressed artwork.' }
    ];

    // ESTADO DEL CARRITO
    let CART: CartLine[] = [
      { id: 'posavasos-oceano', name: 'Posavasos Océano & Hortensias', category: 'Resina', price: 65000, qty: 1 },
      { id: 'florero-arco', name: 'Florero Escultórico Arco Sol', category: 'Cemento blanco', price: 140000, qty: 1 }
    ];

    // RENDER INICIAL DEL CATÁLOGO
    export function renderCatalogItems(items: Product[]): void {
      const container = document.getElementById('catalog-items-container');
      if (!container) return;
      container.innerHTML = '';
      
      const countEl = document.getElementById('catalog-count-text');
      if (countEl) countEl.innerHTML = `Mostrando <strong>${items.length}</strong> piezas de autor`;

      items.forEach(prod => {
        const card = document.createElement('div');
        card.className = "group bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/15 artistic-shadow-1 hover:artistic-shadow-2 transition-all flex flex-col justify-between";
        card.innerHTML = `
          <div>
            <div class="relative w-full aspect-square rounded-xl overflow-hidden mb-3 bg-surface-container-low cursor-pointer" data-home-action="open-product" data-product-id="${prod.id}">
              <img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-alt="${prod.imgDesc} Aesthetic art gallery photograph in warm ivory atelier lighting." class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500">
              <span class="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[11px] font-label-badge uppercase tracking-wider ${prod.statusClass} font-bold">
                ${prod.status}
              </span>
            </div>
            <p class="font-caption text-caption text-outline">${prod.category}</p>
            <h3 data-home-action="open-product" data-product-id="${prod.id}" class="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors cursor-pointer">${prod.name}</h3>
            <p class="font-caption text-caption text-on-surface-variant line-clamp-2 mt-1">${prod.desc}</p>
          </div>
          <div class="mt-4 pt-3 border-t border-outline-variant/15 flex items-center justify-between">
            <div>
              <span class="text-[10px] text-outline uppercase block">COP</span>
              <span class="font-label-price text-label-price text-on-surface font-semibold">$${prod.price.toLocaleString('es-CO')}</span>
            </div>
            <div class="flex gap-1.5">
              <button data-home-action="open-product" data-product-id="${prod.id}" title="Ver detalle" class="w-8 h-8 rounded-full border border-outline-variant/40 flex items-center justify-center text-secondary hover:bg-surface-container">
                <span class="material-symbols-outlined text-sm">visibility</span>
              </button>
              ${prod.status !== 'Agotado' ? `
                <button data-home-action="add-product" data-product-id="${prod.id}" title="Agregar" class="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-surface-tint active:scale-95 shadow-sm">
                  <span class="material-symbols-outlined text-sm">add</span>
                </button>
              ` : `
                <button data-home-action="customize" title="Encargar" class="px-2 py-1 rounded-full bg-primary-fixed/30 text-primary text-[11px] font-label-badge">Encargar</button>
              `}
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }

    // NAVEGACIÓN DINÁMICA POR TABS
    export function navigateTo(viewId: string): void {
      // Ocultar todas las vistas
      document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('active'));

      // Mostrar la vista seleccionada
      const target = document.getElementById(`view-${viewId}`);
      if (target) {
        target.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Actualizar estados visuales de navegación principal
      const navLinks = ['home', 'catalogo', 'personaliza', 'nosotros', 'contacto', 'admin'];
      navLinks.forEach(item => {
        const btn = document.getElementById(`nav-btn-${item}`);
        if (btn) {
          if (item === viewId) {
            btn.className = "nav-item text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-headline-sm text-body-md transition-colors";
          } else {
            btn.className = "nav-item text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md";
          }
        }
      });

      if (viewId === 'catalogo') {
        renderCatalogItems(PRODUCTS_DATA);
      } else if (viewId === 'checkout') {
        updateCheckoutView();
      }
    }

    // FILTRO DIRECTO DESDE CATEGORÍA EN HOME
    export function filterCatalog(categoryName: string): void {
      navigateTo('catalogo');
      const radio = document.querySelector<HTMLInputElement>(`input[name="cat-filter"][value="${categoryName}"]`);
      if (radio) {
        radio.checked = true;
        applyCatalogFilters();
      }
    }

    // APLICAR FILTROS DEL CATÁLOGO
    export function applyCatalogFilters(): void {
      const searchVal = (document.querySelector<HTMLInputElement>('#catalog-search-input')?.value || '').toLowerCase();
      const selectedCat = document.querySelector<HTMLInputElement>('input[name="cat-filter"]:checked')?.value || 'all';
      const maxPrice = parseInt(document.querySelector<HTMLInputElement>('#price-range-input')?.value || '500000', 10);
      
      const allowDisponible = document.querySelector<HTMLInputElement>('#filter-disp-disponible')?.checked;
      const allowPedido = document.querySelector<HTMLInputElement>('#filter-disp-pedido')?.checked;
      const allowPersonalizable = document.querySelector<HTMLInputElement>('#filter-disp-personalizable')?.checked;
      const allowAgotado = document.querySelector<HTMLInputElement>('#filter-disp-agotado')?.checked;

      const filtered = PRODUCTS_DATA.filter(p => {
        const matchSearch = p.name.toLowerCase().includes(searchVal) || p.desc.toLowerCase().includes(searchVal) || p.category.toLowerCase().includes(searchVal);
        const matchCat = (selectedCat === 'all') || (p.category === selectedCat);
        const matchPrice = p.price <= maxPrice;
        
        let matchStatus = false;
        if (p.status === 'Disponible' && allowDisponible) matchStatus = true;
        if (p.status === 'Bajo pedido' && allowPedido) matchStatus = true;
        if (p.status === 'Personalizable' && allowPersonalizable) matchStatus = true;
        if (p.status === 'Agotado' && allowAgotado) matchStatus = true;

        return matchSearch && matchCat && matchPrice && matchStatus;
      });

      renderCatalogItems(filtered);
    }

    export function updatePriceFilter(val: string | number): void {
      const label = document.getElementById('price-range-label');
      if (label) label.textContent = `$${parseInt(String(val), 10).toLocaleString('es-CO')} COP`;
      applyCatalogFilters();
    }

    export function resetFilters(): void {
      const searchInput = document.querySelector<HTMLInputElement>('#catalog-search-input');
      if (searchInput) searchInput.value = '';
      const allCatRadio = document.querySelector<HTMLInputElement>('input[name="cat-filter"][value="all"]');
      if (allCatRadio) allCatRadio.checked = true;
      const priceInput = document.querySelector<HTMLInputElement>('#price-range-input');
      if (priceInput) {
        priceInput.value = '450000';
        updatePriceFilter(450000);
      }
      applyCatalogFilters();
    }

    export function sortCatalog(sortType: string): void {
      let sorted = [...PRODUCTS_DATA];
      if (sortType === 'price-asc') sorted.sort((a,b) => a.price - b.price);
      else if (sortType === 'price-desc') sorted.sort((a,b) => b.price - a.price);
      else if (sortType === 'name') sorted.sort((a,b) => a.name.localeCompare(b.name));
      renderCatalogItems(sorted);
    }

    // ABRIR FICHA DE PRODUCTO
    export function openProductDetail(productId: string): void {
      const prod = PRODUCTS_DATA.find(p => p.id === productId);
      if (!prod) return;

      const title = document.getElementById('detail-title');
      const breadcrumbTitle = document.getElementById('detail-title-bread');
      const breadcrumbCategory = document.getElementById('detail-category-bread');
      const price = document.getElementById('detail-price');
      const badge = document.getElementById('detail-badge');
      if (!title || !breadcrumbTitle || !breadcrumbCategory || !price || !badge) return;
      title.textContent = prod.name;
      breadcrumbTitle.textContent = prod.name;
      breadcrumbCategory.textContent = prod.category;
      price.textContent = `$${prod.price.toLocaleString('es-CO')} COP`;
      badge.textContent = `${prod.status} — Hecho en Colombia`;
      
      navigateTo('producto');
    }

    export function openProductModal(prodId: string): void {
      openProductDetail(prodId);
    }

    export function switchDetailImage(index: number): void {
      const mainImg = document.getElementById('detail-main-img');
      if (mainImg) {
        mainImg.style.opacity = '0.5';
        setTimeout(() => { mainImg.style.opacity = '1'; }, 200);
      }
    }

    export function selectVariant(btn: HTMLElement, variantText: string): void {
      document.querySelectorAll('.variant-pill').forEach(b => {
        b.className = "variant-pill py-2.5 px-3 rounded-xl border border-outline-variant/40 bg-surface-container-low text-on-surface font-body-sm font-medium text-left";
      });
      btn.className = "variant-pill py-2.5 px-3 rounded-xl border-2 border-primary bg-primary-fixed/20 text-on-primary-fixed-variant font-body-sm font-medium text-left";
    }

    export function addCurrentDetailToCart(): void {
      const title = document.getElementById('detail-title')?.textContent;
      const priceText = document.getElementById('detail-price')?.textContent;
      if (!title || !priceText) return;
      const price = parseInt(priceText.replace(/[^0-9]/g, ''), 10) || 185000;
      addToCart(title, price, 'Arte de Autor');
    }

    // MANEJO DE CARRITO
    export function addToCart(name: string, price: number, category: string): void {
      const existing = CART.find(item => item.name === name);
      if (existing) {
        existing.qty += 1;
      } else {
        CART.push({ id: 'item-' + Date.now(), name, price, category, qty: 1 });
      }
      updateCartUI();
      toggleCartDrawer(true);
    }

    export function removeCartItem(index: number): void {
      CART.splice(index, 1);
      updateCartUI();
    }

    export function updateCartUI(): void {
      const badge = document.getElementById('cart-counter-badge');
      const totalQty = CART.reduce((sum, item) => sum + item.qty, 0);
      if (badge) badge.textContent = String(totalQty);

      const container = document.getElementById('cart-drawer-items');
      if (!container) return;

      if (CART.length === 0) {
        container.innerHTML = '<div class="text-center py-12 text-outline"><p>Tu carrito está vacío.</p><button data-home-action="explore" class="mt-3 text-primary font-bold text-body-sm underline">Explorar obras</button></div>';
        const subtotalEl = document.getElementById('drawer-subtotal-price');
        if (subtotalEl) subtotalEl.textContent = '$0 COP';
        return;
      }

      let subtotal = 0;
      container.innerHTML = '';

      CART.forEach((item, idx) => {
        subtotal += item.price * item.qty;
        const div = document.createElement('div');
        div.className = "p-3.5 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex items-center justify-between gap-3";
        div.innerHTML = `
          <div class="flex-grow">
            <h4 class="font-headline-sm text-body-md font-semibold text-on-surface leading-snug">${item.name}</h4>
            <span class="text-caption text-outline">${item.category} · $${item.price.toLocaleString('es-CO')} COP</span>
            <div class="flex items-center gap-2 mt-2">
              <span class="text-caption text-on-surface font-medium">Cant: ${item.qty}</span>
            </div>
          </div>
          <div class="text-right">
            <span class="font-label-price text-body-md font-bold text-on-surface block">$${(item.price * item.qty).toLocaleString('es-CO')} COP</span>
            <button data-home-action="remove-cart-item" data-cart-index="${idx}" class="text-caption text-error hover:underline mt-1">Eliminar</button>
          </div>
        `;
        container.appendChild(div);
      });

      const subtotalEl = document.getElementById('drawer-subtotal-price');
      if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString('es-CO')} COP`;
    }

    export function toggleCartDrawer(open: boolean): void {
      const overlay = document.getElementById('cart-drawer-overlay');
      const panel = document.getElementById('cart-drawer-panel');
      if (!overlay || !panel) return;
      if (open) {
        overlay.classList.remove('hidden');
        panel.classList.remove('translate-x-full');
        updateCartUI();
      } else {
        overlay.classList.add('hidden');
        panel.classList.add('translate-x-full');
      }
    }

    // CHECKOUT Y FLETE
    export function updateCheckoutView(): void {
      const itemsList = document.getElementById('checkout-items-list');
      if (!itemsList) return;
      itemsList.innerHTML = '';
      
      let subtotal = 0;
      CART.forEach(item => {
        subtotal += item.price * item.qty;
        const row = document.createElement('div');
        row.className = "flex justify-between items-center text-body-sm";
        row.innerHTML = `
          <div>
            <p class="font-medium text-on-surface">${item.name} <span class="text-outline text-caption">× ${item.qty}</span></p>
            <span class="text-caption text-outline">${item.category}</span>
          </div>
          <span class="font-semibold text-on-surface">$${(item.price * item.qty).toLocaleString('es-CO')} COP</span>
        `;
        itemsList.appendChild(row);
      });

      const subtotalEl = document.getElementById('checkout-subtotal');
      if (subtotalEl) subtotalEl.textContent = `$${subtotal.toLocaleString('es-CO')} COP`;
      updateShippingCost();
    }

    export function updateShippingCost(): void {
      const dept = document.querySelector<HTMLSelectElement>('#shipping-dept')?.value;
      const shippingCost = (dept === 'Especial') ? 18000 : 14000;
      
      const subtotalVal = CART.reduce((sum, i) => sum + (i.price * i.qty), 0);
      const total = subtotalVal + shippingCost;

      const shipping = document.getElementById('checkout-shipping');
      const totalElement = document.getElementById('checkout-total');
      if (shipping) shipping.textContent = `$${shippingCost.toLocaleString('es-CO')} COP`;
      if (totalElement) totalElement.textContent = `$${total.toLocaleString('es-CO')} COP`;
    }

    export function processPaymentSimulator(): void {
      const statusBox = document.getElementById('payment-status-box');
      if (!statusBox) return;

      statusBox.classList.remove('hidden');
      statusBox.className = "p-4 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900";
      statusBox.innerHTML = `
        <div class="flex items-center gap-2 font-headline-sm font-semibold">
          <span class="material-symbols-outlined text-amber-600 animate-spin">sync</span>
          <span>Procesando pago con la pasarela colombiana...</span>
        </div>
        <p class="text-caption mt-1">Conectando de forma segura con el nodo bancario...</p>
      `;

      setTimeout(() => {
        statusBox.className = "p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 space-y-2";
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

    // TALLER DE PERSONALIZACIÓN
    export function goToCustomStep(stepNum: number): void {
      document.querySelectorAll('.custom-step').forEach(s => s.classList.add('hidden'));
      const activeStep = document.getElementById(`custom-step-${stepNum}`);
      if (activeStep) activeStep.classList.remove('hidden');

      // Actualizar markers
      for (let i = 1; i <= 5; i++) {
        const marker = document.getElementById(`step-marker-${i}`);
        if (!marker) continue;
        if (i < stepNum) {
          marker.className = "step-marker relative z-10 w-10 h-10 rounded-full bg-emerald-600 text-white font-bold text-sm flex items-center justify-center shadow-md";
          marker.innerHTML = "✓";
        } else if (i === stepNum) {
          marker.className = "step-marker relative z-10 w-10 h-10 rounded-full bg-primary text-on-primary font-bold text-sm flex items-center justify-center shadow-md";
          marker.innerHTML = `${i}`;
        } else {
          marker.className = "step-marker relative z-10 w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant font-bold text-sm flex items-center justify-center";
          marker.innerHTML = `${i}`;
        }
      }
    }

    export function highlightCatCard(input: HTMLInputElement): void {
      document.querySelectorAll('.custom-cat-card').forEach(c => {
        c.className = "custom-cat-card p-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex flex-col justify-between transition-all";
      });
      const parent = input.closest('label');
      if (parent) {
        parent.className = "custom-cat-card p-4 rounded-2xl border-2 border-primary bg-primary-fixed/15 cursor-pointer flex flex-col justify-between transition-all";
      }
    }

    export function simulateUpload(): void {
      const status = document.getElementById('upload-status');
      if (status) {
        status.classList.remove('hidden');
      }
    }

    export function submitCustomForm(mode: string): void {
      const success = document.getElementById('custom-success-msg');
      if (mode === 'whatsapp') {
        const phone = '573000000000';
        const msg = encodeURIComponent("¡Hola Andrea! Acabo de completar el formulario en tu taller web para encargar una pieza personalizada de Seahorse.");
        window.open(`https://wa.me/${phone}?text=${msg}`, '_blank');
      }
      if (success) success.classList.remove('hidden');
    }

    // PANEL ADMIN SUBTABS
    export function switchAdminTab(tabKey: string): void {
      document.querySelectorAll('.admin-tab-btn').forEach(btn => {
        btn.className = "admin-tab-btn px-4 py-3.5 font-label-badge text-body-sm text-outline hover:text-on-surface";
      });
      document.querySelectorAll('.admin-subview').forEach(view => view.classList.add('hidden'));

      const activeBtn = document.getElementById(`admin-tab-btn-${tabKey}`);
      if (activeBtn) activeBtn.className = "admin-tab-btn px-4 py-3.5 font-label-badge text-body-sm border-b-2 border-primary text-primary font-bold";

      const activeView = document.getElementById(`admin-view-${tabKey}`);
      if (activeView) activeView.classList.remove('hidden');
    }

    export function toggleMFAStatus(btn: HTMLElement): void {
      const text = document.getElementById('mfa-badge-text');
      alert('Autenticación de Dos Factores (MFA) verificada con token biométrico TOTP.');
    }

    export function toggleStockAlert(checkbox: HTMLInputElement, prodName: string): void {
      const status = checkbox.checked ? 'Habilitado en catálogo' : 'Puesto como AGOTADO';
      alert(`Inventario actualizado para ${prodName}: ${status}`);
    }

    // INTERACCIONES GENERALES
    export function focusSearch(): void {
      navigateTo('catalogo');
      setTimeout(() => {
        const inp = document.getElementById('catalog-search-input');
        if (inp) inp.focus();
      }, 200);
    }

    export function toggleWishlist(btn: HTMLElement): void {
      const icon = btn.querySelector<HTMLElement>('.material-symbols-outlined');
      if (icon) {
        const isFav = icon.style.fontVariationSettings?.includes("'FILL' 1");
        if (isFav) {
          icon.style.fontVariationSettings = "'FILL' 0";
          icon.classList.remove('text-error');
        } else {
          icon.style.fontVariationSettings = "'FILL' 1";
          icon.classList.add('text-error');
        }
      }
    }

    export function toggleMobileMenu(): void {
      const panel = document.getElementById('mobile-nav-panel');
      if (panel) panel.classList.toggle('hidden');
    }

    // INICIALIZACIÓN
    export function initializeHomePrototype(): void {
  renderCatalogItems(PRODUCTS_DATA);
  updateCartUI();
}

    export function handleHomeInteraction(
      event: ReactMouseEvent<HTMLDivElement>,
    ): void {
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
          const product = PRODUCTS_DATA.find(
            (item) => item.id === actionElement.dataset.productId,
          );
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
