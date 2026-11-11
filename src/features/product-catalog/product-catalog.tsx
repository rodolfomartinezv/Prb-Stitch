"use client";

import {
  addCurrentDetailToCart,
  applyCatalogFilters,
  navigateTo,
  openProductModal,
  resetFilters,
  selectVariant,
  sortCatalog,
  switchDetailImage,
  updatePriceFilter,
} from "@shared/utils/home-interactions";
import { MaterialSymbol } from "@shared/components/material-symbol";
import { ContentShared } from "@shared/components/content-shared";
import { THEMATIC_CATEGORIES } from "@shared/utils/catalog-categories";

export default function ProductCatalog() {
  return (
    <ContentShared page="tienda">
      <section className="py-10 px-6 lg:px-12 max-w-7xl mx-auto" id="view-catalogo">
        {/* Encabezado de Tienda */}
        <div className="mb-8">
          <nav className="flex items-center gap-2 text-caption text-outline mb-2">
            <button
              className="hover:underline"
              onClick={(event) => {
                navigateTo("home");
              }}
            >
              Inicio
            </button>
            <span>/</span>
            <span className="text-on-surface font-medium">Cat&aacute;logo Oficial</span>
          </nav>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight">
                Tienda &amp; Cat&aacute;logo de Autor
              </h1>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Explora piezas disponibles de entrega inmediata o solicita elaboraci&oacute;n por
                encargo.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-caption font-label-badge text-outline">Moneda fija:</span>
              <span className="px-3 py-1 bg-surface-container-high rounded-full font-label-badge text-caption text-secondary">
                Pesos Colombianos (COP)
              </span>
            </div>
          </div>
        </div>
        {/* Barra de Filtros Rápidos + Búsqueda */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar de Filtros (3 cols) */}
          <aside className="lg:col-span-3 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/20 artistic-shadow-1 space-y-6">
            {/* Filtro Búsqueda */}
            <div>
              <label
                className="font-label-badge text-caption text-outline uppercase tracking-wider block mb-2"
                htmlFor="catalog-search-input"
              >
                B&uacute;squeda r&aacute;pida
              </label>
              <div className="relative">
                <input
                  className="w-full text-body-sm rounded-xl border border-outline-variant/40 bg-surface-container-low pl-9 pr-3 py-2 focus:border-primary focus:ring-0"
                  id="catalog-search-input"
                  onKeyUp={applyCatalogFilters}
                  placeholder=" "
                  type="text"
                />
                <MaterialSymbol className="material-symbols-outlined text-outline text-[18px] absolute left-3 top-2.5">
                  search
                </MaterialSymbol>
              </div>
            </div>
            {/* Filtro por Categorías */}
            <div>
              <span className="font-label-badge text-caption text-outline uppercase tracking-wider block mb-3">
                Categor&iacute;as
              </span>
              <div className="space-y-2">
                <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
                  <input
                    defaultChecked={true}
                    className="text-primary focus:ring-0 rounded-full"
                    name="cat-filter"
                    onChange={applyCatalogFilters}
                    type="radio"
                    value="all"
                  />
                  <span>Todas las categor&iacute;as (4)</span>
                </label>
                <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
                  <input
                    className="text-primary focus:ring-0 rounded-full"
                    name="cat-filter"
                    onChange={applyCatalogFilters}
                    type="radio"
                    value="Arte en papel"
                  />
                  <span>Arte en papel (2)</span>
                </label>
                <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
                  <input
                    className="text-primary focus:ring-0 rounded-full"
                    name="cat-filter"
                    onChange={applyCatalogFilters}
                    type="radio"
                    value="Cemento blanco"
                  />
                  <span>Cemento blanco (1)</span>
                </label>
                <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
                  <input
                    className="text-primary focus:ring-0 rounded-full"
                    name="cat-filter"
                    onChange={applyCatalogFilters}
                    type="radio"
                    value="Resina"
                  />
                  <span>Resina (1)</span>
                </label>
                <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
                  <input
                    className="text-primary focus:ring-0 rounded-full"
                    name="cat-filter"
                    onChange={applyCatalogFilters}
                    type="radio"
                    value="Cuadros"
                  />
                  <span>Cuadros (0)</span>
                </label>
                <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
                  <input
                    className="text-primary focus:ring-0 rounded-full"
                    name="cat-filter"
                    onChange={applyCatalogFilters}
                    type="radio"
                    value="Estampados"
                  />
                  <span>Estampados (0)</span>
                </label>
                <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
                  <input
                    className="text-primary focus:ring-0 rounded-full"
                    name="cat-filter"
                    onChange={applyCatalogFilters}
                    type="radio"
                    value="Velas"
                  />
                  <span>Velas (0)</span>
                </label>
                <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
                  <input
                    className="text-primary focus:ring-0 rounded-full"
                    name="cat-filter"
                    onChange={applyCatalogFilters}
                    type="radio"
                    value="Papelería kawaii"
                  />
                  <span>Papeler&iacute;a kawaii</span>
                </label>
                {THEMATIC_CATEGORIES.map((category) => (
                  <label
                    className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer"
                    key={category.name}
                  >
                    <input
                      className="text-primary focus:ring-0 rounded-full"
                      name="cat-filter"
                      onChange={applyCatalogFilters}
                      type="radio"
                      value={category.name}
                    />
                    <span>{category.name}</span>
                  </label>
                ))}
              </div>
            </div>
            {/* Filtro por Estado / Disponibilidad */}
            <div className="pt-4 border-t border-outline-variant/20">
              <span className="font-label-badge text-caption text-outline uppercase tracking-wider block mb-3">
                Disponibilidad
              </span>
              <div className="space-y-2">
                <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
                  <input
                    defaultChecked={true}
                    className="rounded text-primary focus:ring-0"
                    id="filter-disp-disponible"
                    onChange={applyCatalogFilters}
                    type="checkbox"
                  />
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" /> Disponible
                  </span>
                </label>
                <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
                  <input
                    defaultChecked={true}
                    className="rounded text-primary focus:ring-0"
                    id="filter-disp-pedido"
                    onChange={applyCatalogFilters}
                    type="checkbox"
                  />
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" /> Bajo pedido
                  </span>
                </label>
                <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
                  <input
                    defaultChecked={true}
                    className="rounded text-primary focus:ring-0"
                    id="filter-disp-personalizable"
                    onChange={applyCatalogFilters}
                    type="checkbox"
                  />
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-purple-500" /> Personalizable
                  </span>
                </label>
                <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
                  <input
                    defaultChecked={true}
                    className="rounded text-primary focus:ring-0"
                    id="filter-disp-agotado"
                    onChange={applyCatalogFilters}
                    type="checkbox"
                  />
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-gray-400" /> Agotado
                  </span>
                </label>
              </div>
            </div>
            {/* Rango de Precios en COP */}
            <div className="pt-4 border-t border-outline-variant/20">
              <div className="flex justify-between items-center mb-2">
                <span className="font-label-badge text-caption text-outline uppercase tracking-wider">
                  Precio m&aacute;ximo
                </span>
                <span className="font-body-sm font-semibold text-primary" id="price-range-label">
                  $450.000 COP
                </span>
              </div>
              <input
                className="w-full accent-primary"
                id="price-range-input"
                max="500000"
                min="30000"
                onInput={(event) => {
                  updatePriceFilter(event.currentTarget.value);
                }}
                step="10000"
                type="range"
                value="450000"
              />
              <div className="flex justify-between text-[11px] text-outline mt-1">
                <span>$30.000 COP</span>
                <span>$500.000 COP</span>
              </div>
            </div>
            <button
              className="w-full py-2 rounded-xl text-caption font-label-badge text-secondary bg-surface-container hover:bg-surface-container-high transition-colors"
              onClick={resetFilters}
            >
              Restablecer Filtros
            </button>
          </aside>
          {/* Grilla de Resultados (9 cols) */}
          <div className="lg:col-span-9 space-y-6">
            {/* Barra de Ordenamiento y Conteo */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
              <span className="font-body-sm text-body-sm text-on-surface" id="catalog-count-text">
                Mostrando <strong>4</strong> obras seleccionadas
              </span>
              <div className="flex items-center gap-2">
                <label className="text-caption text-outline" htmlFor="catalog-sort-select">
                  Ordenar por:
                </label>
                <select
                  className="rounded-lg text-body-sm border-outline-variant/40 bg-surface-container-lowest py-1.5 pl-3 pr-8 focus:border-primary focus:ring-0"
                  id="catalog-sort-select"
                  onChange={(event) => {
                    sortCatalog(event.currentTarget.value);
                  }}
                >
                  <option value="featured">Destacados del Atelier</option>
                  <option value="price-asc">Menor precio COP</option>
                  <option value="price-desc">Mayor precio COP</option>
                  <option value="name">Nombre (A - Z)</option>
                </select>
              </div>
            </div>
            {/* Grilla de Cards del Catálogo */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              id="catalog-items-container"
            >
              {/* Los items se renderizan dinámicamente o por plantilla */}
            </div>
          </div>
        </div>
      </section>
      <section className="hidden py-10 px-6 lg:px-12 max-w-7xl mx-auto" id="view-producto">
        {/* Navegación de migas de pan */}
        <nav className="flex items-center gap-2 text-caption text-outline mb-6">
          <button
            className="hover:underline"
            onClick={(event) => {
              navigateTo("home");
            }}
          >
            Inicio
          </button>
          <span>/</span>
          <button
            className="hover:underline"
            onClick={(event) => {
              navigateTo("catalogo");
            }}
          >
            Cat&aacute;logo
          </button>
          <span>/</span>
          <span className="text-outline" id="detail-category-bread">
            Arte en papel
          </span>
          <span>/</span>
          <span className="text-on-surface font-medium" id="detail-title-bread">
            Cuadros de la virgen
          </span>
        </nav>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Galería Fotográfica (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[4/3] sm:aspect-[1/1] rounded-3xl overflow-hidden bg-surface-container-low border border-outline-variant/20 artistic-shadow-2 group">
              <img
                alt="Cuadros de la virgen. Arte en papel tamaño 20 x 25 cm con marco en MDF."
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                id="detail-main-img"
                src="images/0197345be6c5208dd361de97febfb42531c7f40b63.JPG"
              />
              <span
                className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-caption font-label-badge uppercase tracking-wider bg-[#83D9D9]/40 text-[#173D68] font-bold"
                id="detail-badge"
              >
                Disponible &mdash; Hecho en Colombia
              </span>
            </div>
            {/* Miniaturas Interactivas */}
            <div className="grid grid-cols-4 gap-4">
              <button
                className="aspect-square rounded-xl overflow-hidden border-2 border-primary artistic-shadow-1"
                onClick={(event) => {
                  switchDetailImage(0);
                }}
              >
                <img
                  alt="Close-up detail of encapsulated dried purple and blue hydrangeas inside glassy clear resin with floating gold dust particles."
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXfL8ojP6syqQAu1zzm2-6Y0RTM9uQbTCNQQ0i_FDMI24g8_PlMV3thZcP_XfJ0PJVPvDhUzZ-HKYz4l0gfOIs-nxb5XsKbdQsb0TZPt9QkjCATL0FOCp_UPuF9IvCGOip8b0_4n8Ypou3dpShVXbq-e0cdZOcWyFUvCU-nlxyhFglPrEd4CobpWLKqMX-8kyI6WipYid5RxfwR_2zeojpH-i2DJYxD5JnY-qXt2o"
                />
              </button>
              <button
                className="aspect-square rounded-xl overflow-hidden border border-outline-variant/30 opacity-80 hover:opacity-100"
                onClick={(event) => {
                  switchDetailImage(1);
                }}
              >
                <img
                  alt="Angled perspective of botanical serving tray on an architectural marble and ivory table setting with sunlight glares."
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV07cKbj81JeJqYEbBHfiLzOewFRf_hToQSbaq3KKB9DLA_k3khnjzSrQRusmVJNIMpY2cBYxBfOmVSQ3hi-4usHTCKdltlXG9-UqPqX4fWxAztp9JvJUPGFoswQCBVzom5sKQXw5eWgMk7CdljksVCeQDp_2tgNdy3WlB3R5H0ZTiS52gAjQMDv5q4CQTlOZQmafwBYrKHnmEKpuKvrUXjM6bFxrWrrg3lsdv7yA"
                />
              </button>
              <button
                className="aspect-square rounded-xl overflow-hidden border border-outline-variant/30 opacity-80 hover:opacity-100"
                onClick={(event) => {
                  switchDetailImage(2);
                }}
              >
                <img
                  alt="Hand of artist holding the finished botanical resin tray showing edge finish and delicate transparent gradient layers."
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXIXbbVx0tlbhm6JLdy7iAWFAOnkhOBIBpdLBZLugmpRcCbQMy_jHf3-1Nqv0EW23ohtJJU6Au2OraxU1Kstw9Hd7L24hAybyiYnC3OUF3f5xhdxAdIHFHk6wRAvCgp2Lw8qkiwxwFZSLR8HxFEM44GGRBdb3CZCgqM4PFvlyf9mjvZ5xsOvj85QfU5o2croG_9VfHZYxI5WS3p2YCMeditXqqqxu6mDbZpFLB4uY"
                />
              </button>
              <button
                className="aspect-square rounded-xl overflow-hidden border border-outline-variant/30 opacity-80 hover:opacity-100"
                onClick={(event) => {
                  switchDetailImage(3);
                }}
              >
                <img
                  alt="Gift packaging aesthetic box with official Seahorse Estudio Creativo wax stamp and handwritten author card."
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2s893A1uj3XFKasIdL0mJ9hNTSjoxN0m1mgEXhkNxCOX4yF7tp_zBluFzi3p-0Ir0pmM7yLbH1Ac5TuexVMq0D3EzZObx6YSjipHXMv3iTA0NAqiBArgqusa0FyRH4HoOm4hVFVVaE1iFoOFvNxkARF-p3hrEETObAaVmg0RH0vVVPbT0jMBVjLF54C33RIr2lHkzeOMvl1fYTGZSMnmQsk-xVtvkqjxHFBw2he0"
                />
              </button>
            </div>
          </div>
          {/* Ficha de Información de Compra (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-caption text-secondary font-medium">
                <MaterialSymbol className="material-symbols-outlined text-sm">
                  verified
                </MaterialSymbol>
                <span>Dise&ntilde;o original by Andrea Sosa &middot; Hecho en Colombia</span>
              </div>
              <h1
                className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight mt-1"
                id="detail-title"
              >
                Cuadros de la virgen
              </h1>
              <div className="flex items-baseline gap-3 mt-3">
                <span
                  className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold tracking-tight"
                  id="detail-price"
                >
                  $140.000 COP
                </span>
                <span className="text-caption text-outline">IVA e impuestos locales incluidos</span>
              </div>
            </div>
            {/* Selector de Variantes (Tamaño / Flor) */}
            <div className="space-y-4 pt-4 border-t border-outline-variant/20">
              <div>
                <span className="font-label-badge text-caption text-on-surface uppercase tracking-wider block mb-2">
                  Selecciona Tama&ntilde;o de la Pieza:
                </span>
                <div className="grid grid-cols-2 gap-3" id="detail-sizes">
                  <button
                    className="variant-pill py-2.5 px-3 rounded-xl border-2 border-primary bg-primary-fixed/20 text-on-primary-fixed-variant font-body-sm font-medium text-left"
                    onClick={(event) => {
                      selectVariant(event.currentTarget, "Mediano (25 x 18 cm)");
                    }}
                  >
                    <span className="block">Mediano (25 x 18 cm)</span>
                    <span className="text-caption text-outline">Ideal para mesa de noche</span>
                  </button>
                  <button
                    className="variant-pill py-2.5 px-3 rounded-xl border border-outline-variant/40 bg-surface-container-low text-on-surface font-body-sm font-medium text-left"
                    onClick={(event) => {
                      selectVariant(event.currentTarget, "Grande (35 x 24 cm)");
                    }}
                  >
                    <span className="block">Grande (35 x 24 cm)</span>
                    <span className="text-caption text-outline">+$45.000 COP</span>
                  </button>
                </div>
              </div>
              <div>
                <span className="font-label-badge text-caption text-on-surface uppercase tracking-wider block mb-2">
                  Gama Bot&aacute;nica:
                </span>
                <div className="flex gap-3">
                  <button className="px-3.5 py-1.5 rounded-full border border-primary bg-primary/10 text-primary text-body-sm font-medium">
                    Hortensias &amp; Oro
                  </button>
                  <button className="px-3.5 py-1.5 rounded-full border border-outline-variant/40 text-on-surface-variant text-body-sm">
                    Lavanda Silvestre
                  </button>
                  <button className="px-3.5 py-1.5 rounded-full border border-outline-variant/40 text-on-surface-variant text-body-sm">
                    Oc&eacute;ano &amp; Perla
                  </button>
                </div>
              </div>
            </div>
            {/* Ficha de Materiales Curatorial */}
            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 space-y-2 text-body-sm">
              <p className="font-label-badge text-caption text-outline uppercase tracking-wider">
                Ficha de Materialidad:
              </p>
              <div className="grid grid-cols-2 gap-2 text-on-surface-variant text-caption">
                <div>&bull; Resina ep&oacute;xica no t&oacute;xica UV</div>
                <div>&bull; Flores preservadas a mano</div>
                <div>&bull; Pigmentos minerales puros</div>
                <div>&bull; Cera protectora selladora</div>
              </div>
            </div>
            {/* Acciones Principales */}
            <div className="space-y-3 pt-2">
              <button
                className="w-full py-4 rounded-full bg-primary text-on-primary font-body-md font-semibold tracking-wide hover:bg-surface-tint shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                onClick={addCurrentDetailToCart}
              >
                <MaterialSymbol className="material-symbols-outlined text-lg">
                  shopping_bag
                </MaterialSymbol>
                <span>Agregar al carrito ($185.000 COP)</span>
              </button>
              <button
                className="w-full py-3.5 rounded-full border-2 border-secondary text-secondary hover:bg-surface-container font-body-md font-medium transition-all flex items-center justify-center gap-2"
                onClick={(event) => {
                  navigateTo("personaliza");
                }}
              >
                <MaterialSymbol className="material-symbols-outlined text-lg">edit</MaterialSymbol>
                <span>Personalizar este dise&ntilde;o a mi gusto</span>
              </button>
            </div>
            {/* Garantías de Taller */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20 text-caption text-outline">
              <div className="flex items-center gap-2">
                <MaterialSymbol className="material-symbols-outlined text-secondary text-[20px]">
                  local_shipping
                </MaterialSymbol>
                <span>Env&iacute;os a todo Colombia por Coordinadora / Env&iacute;a</span>
              </div>
              <div className="flex items-center gap-2">
                <MaterialSymbol className="material-symbols-outlined text-secondary text-[20px]">
                  verified
                </MaterialSymbol>
                <span>Certificado de autenticidad incluido</span>
              </div>
            </div>
          </div>
        </div>
        {/* PRODUCTOS RELACIONADOS RECOMENDADOS */}
        <div className="mt-20 pt-12 border-t border-outline-variant/30">
          <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mb-8">
            Tambi&eacute;n te podr&iacute;a inspirar
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="group relative rounded-2xl bg-surface-container-lowest p-4 border border-outline-variant/20 artistic-shadow-1 hover:artistic-shadow-2 transition-all">
              <button
                aria-label="Abrir Dúo Posavasos Eucalipto"
                className="absolute inset-0 z-10 cursor-pointer rounded-2xl border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                onClick={(event) => {
                  if (event.button === 0 && event.detail > 0) openProductModal("posavasos-oceano");
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    openProductModal("posavasos-oceano");
                  }
                }}
                type="button"
              />
              <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-surface-container-low">
                <img
                  alt="Set of handmade botanical resin coasters with dried eucalyptus leaves and gold foil."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz5GQgHwjoQPKpjicb2ee94cYa3pesdhbAnT2ApzasQlRRUK9ZNqImuWPEEJtnRn8AZB0FXqNSaUkwh3IAiXSDe6Hpg3mhEkl3P1luPZSErtlRp7id2bnmiF-z5uTI5jKfZGKXI_FKuyjmslwgni6jOww5s-S1-6GdXxG_5hGriS4TSsRSPMXMomXTkw1Eb6Udq4PaXzd7zRK1E69cgFa7OKfKSxrYCcMx1hWsQm4"
                />
              </div>
              <p className="font-caption text-caption text-outline">Resina Bot&aacute;nica</p>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
                D&uacute;o Posavasos Eucalipto
              </h3>
              <p className="font-label-price text-label-price text-on-surface font-semibold mt-2">
                $65.000 COP
              </p>
            </article>
            <article className="group relative rounded-2xl bg-surface-container-lowest p-4 border border-outline-variant/20 artistic-shadow-1 hover:artistic-shadow-2 transition-all">
              <button
                aria-label="Abrir Florero Arco Esculpido"
                className="absolute inset-0 z-10 cursor-pointer rounded-2xl border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                onClick={(event) => {
                  if (event.button === 0 && event.detail > 0) openProductModal("florero-arco");
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    openProductModal("florero-arco");
                  }
                }}
                type="button"
              />
              <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-surface-container-low">
                <img
                  alt="Minimalist white cement arched flower vase."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP-Mxs1RuyF2Se5I877ByvoVJ9bTwyhAchcfC3sHHFblpNXduj8XCIXQ7ehr2KvVQjX-IN4P7au60x47Tdim6Z7E0n-ppxkcRhlauRylP73rXMmejp00cdd_b0gigRYX0DASRda0xBk70grGTsKooDQPxM98tbd4IVVhOzBKeVjqGnvPYTtUyuzkug5jAI1BMdXtvkf6qAPcWVvrMrF7h5wZDtUGb68ZipG_HkAS0"
                />
              </div>
              <p className="font-caption text-caption text-outline">Cemento Blanco</p>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
                Florero Arco Esculpido
              </h3>
              <p className="font-label-price text-label-price text-on-surface font-semibold mt-2">
                $140.000 COP
              </p>
            </article>
            <article className="group relative rounded-2xl bg-surface-container-lowest p-4 border border-outline-variant/20 artistic-shadow-1 hover:artistic-shadow-2 transition-all">
              <button
                aria-label="Abrir Lienzo 'Espuma y Arena'"
                className="absolute inset-0 z-10 cursor-pointer rounded-2xl border-0 bg-transparent p-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                onClick={(event) => {
                  if (event.button === 0 && event.detail > 0) openProductModal("lienzo-mareas");
                }}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    event.preventDefault();
                    openProductModal("lienzo-mareas");
                  }
                }}
                type="button"
              />
              <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-surface-container-low">
                <img
                  alt="Small mixed media framed coastal canvas painting."
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIwgx_zo6g40-f3EDbMAIs6MJyRDEnT0sO2CqYbTLhTMe2WWxnOUfFrkuFxl8cI51en_v2OLta_Pgy3lg_mK8pN_H9M6cX32fi-EdNUubHH8RAOBMAyT34s3ySpte-ToXaZFaHQC71_voWuFd5vHEAgyXW6J10fLEv-IY1xBIOZtazNXH0cR1oGzEu1Fbi1ydmYumkjtgaU-8i7m8kqKUWo02aZHdv4kGwBmpihno"
                />
              </div>
              <p className="font-caption text-caption text-outline">Cuadros &amp; Lienzo</p>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
                Lienzo &apos;Espuma y Arena&apos;
              </h3>
              <p className="font-label-price text-label-price text-on-surface font-semibold mt-2">
                $210.000 COP
              </p>
            </article>
          </div>
        </div>
      </section>
    </ContentShared>
  );
}
