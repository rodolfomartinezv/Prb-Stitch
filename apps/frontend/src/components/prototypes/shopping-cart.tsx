"use client";

import Link from "next/link";
import { MaterialSymbol } from "./material-symbol";
import { PrototypePage } from "./prototype-page";

export default function CarritoPrototype() {
  return (
    <PrototypePage className="prototype-route-carrito bg-background text-on-surface font-body-md text-body-md antialiased min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary">
      <>
        {/* TOP NAV BAR (Shared Component Exact Match) */}
        <header className="docked full-width top-0 sticky z-50 bg-surface/90 dark:bg-inverse-surface/90 backdrop-blur-md shadow-sm dark:shadow-none border-b border-outline-variant/30 dark:border-outline/20">
          <div className="flex justify-between items-center w-full px-6 lg:px-12 py-4 max-w-7xl mx-auto">
            {/* Brand Logo / Official Identity */}
            <a className="flex items-center gap-3 group focus:outline-none" href="#top">
              <div className="w-12 h-12 rounded-full overflow-hidden p-0.5 border border-outline-variant/40 bg-surface-container-lowest flex items-center justify-center shadow-xs">
                <img
                  alt="Logotipo oficial Seahorse Estudio Creativo by Andrea Sosa"
                  className="w-full h-full object-contain"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFBfoyzftgas6147yOZabAsUhuq4FBLD7CP4Hq4yvYgC3bXe2Gq5V8rUiRSILBJP_kHulYP27bEAiunMAnjnTvMhnnxESLY91UKJ4c47Mr2BYft7T21XwX6Tk01urFaerAXkLYyTiRV8hcfbB_o1YVmk8D6tdyDXtcmUtAb6SOEJi-8LhN-NqY14uH4pMXB-Xjwnpd6c0NR6DZCyX1uAaUxX7TC7vdPc__Ui8YCk98kT1s7rUi-Lr-"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline-md text-headline-md text-secondary dark:text-secondary-fixed tracking-tight font-medium leading-none">
                  Seahorse Estudio Creativo
                </span>
                <span className="font-caption text-caption text-primary dark:text-inverse-primary tracking-wide">
                  by Andrea Sosa &bull; Atelier de Autor
                </span>
              </div>
            </a>
            {/* Desktop Nav Links */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md"
                href="/"
              >
                Inicio
              </Link>
              <Link
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md"
                href="/tienda"
              >
                Tienda
              </Link>
              <Link
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md"
                href="/personaliza"
              >
                Personaliza
              </Link>
              <Link
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md"
                href="/sobre-nosotros"
              >
                Sobre Nosotros
              </Link>
              <Link
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md"
                href="/contacto"
              >
                Contacto
              </Link>
            </nav>
            {/* Trailing Action Icons & Cart Focus */}
            <div className="flex items-center gap-3 sm:gap-4">
              <button
                aria-label="Buscar piezas"
                className="p-2 text-on-surface-variant hover:text-primary transition-colors duration-150 rounded-full hover:bg-surface-container"
                type="button"
              >
                <MaterialSymbol className="material-symbols-outlined text-[22px]">
                  search
                </MaterialSymbol>
              </button>
              <button
                aria-label="Mi Cuenta"
                className="p-2 text-on-surface-variant hover:text-primary transition-colors duration-150 rounded-full hover:bg-surface-container hidden sm:inline-flex"
                type="button"
              >
                <MaterialSymbol className="material-symbols-outlined text-[22px]">
                  account_circle
                </MaterialSymbol>
              </button>
              {/* Cart Primary Action with Badge '2' */}
              <a
                className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-on-primary hover:bg-on-primary-container shadow-sm transition-all duration-200"
                href="#checkout-view"
              >
                <MaterialSymbol
                  className="material-symbols-outlined text-[20px]"
                  data-weight="fill"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  shopping_bag
                </MaterialSymbol>
                <span className="font-body-sm text-body-sm font-medium hidden sm:inline">
                  Carrito
                </span>
                <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary-container text-on-primary-container font-label-badge text-label-badge font-bold">
                  2
                </span>
              </a>
            </div>
          </div>
        </header>
        {/* MAIN CANVAS: CART & CHECKOUT */}
        <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12 py-8 lg:py-12">
          {/* Editorial Header Stage */}
          <div className="mb-8 lg:mb-12">
            <div className="flex items-center gap-2 mb-3">
              <a
                className="text-on-surface-variant hover:text-primary font-caption text-caption flex items-center gap-1 transition-colors"
                href="#top"
              >
                <MaterialSymbol className="material-symbols-outlined text-[16px]">
                  west
                </MaterialSymbol>{" "}
                Volver a la galer&iacute;a
              </a>
              <span className="text-outline-variant font-caption text-caption">/</span>
              <span className="text-primary font-caption text-caption font-medium">
                Bolsa curada &amp; Transacci&oacute;n
              </span>
            </div>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant/30 pb-6">
              <div>
                <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-secondary font-medium tracking-tight">
                  Tu Carrito de Obras &amp; Proceso de Pago
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant mt-1.5 max-w-2xl">
                  Piezas elaboradas a mano y en series limitadas. Revisa la asignaci&oacute;n de tu
                  pedido antes de continuar con la transacci&oacute;n cifrada.
                </p>
              </div>
              <div className="flex items-center gap-2 bg-surface-container px-3.5 py-1.5 rounded-full self-start md:self-auto border border-outline-variant/30">
                <MaterialSymbol
                  className="material-symbols-outlined text-[18px] text-primary"
                  data-weight="fill"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified_user
                </MaterialSymbol>
                <span className="font-caption text-caption text-secondary font-medium tracking-tight">
                  Transacci&oacute;n 100% Protegida en Colombia
                </span>
              </div>
            </div>
          </div>
          {/* Asymmetrical Layout: 7 Cols (Items & Forms) / 5 Cols (Financial Summary & Sticky Action) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* LEFT COLUMN: Items in Cart & Shipping + Payment Form (7 Cols) */}
            <div className="lg:col-span-7 space-y-8">
              {/* SECTION 1: ITEMS CURATION REVIEW */}
              <section aria-labelledby="curated-items-title" className="space-y-4">
                <div className="flex items-center justify-between">
                  <h2
                    className="font-headline-sm text-headline-sm text-on-surface flex items-center gap-2"
                    id="curated-items-title"
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-primary-container inline-block" />
                    Obras Seleccionadas (2)
                  </h2>
                  <span className="font-caption text-caption text-on-surface-variant">
                    Moneda local: COP ($)
                  </span>
                </div>
                {/* Product Card 1: Posavasos Océano & Hortensias */}
                <article className="bg-surface-container-lowest rounded-2xl p-4 sm:p-5 border border-outline-variant/30 ocean-shadow-1 transition-all duration-200 hover:border-primary-container/50">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                    {/* Image Preview with Badge */}
                    <div className="relative w-full sm:w-36 h-40 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
                      <img
                        alt="Posavasos Océano y Hortensias, set de cuatro"
                        className="w-full h-full object-cover"
                        data-alt="A refined overhead editorial studio photograph of a set of four handcrafted resin botanical coasters capturing vivid blue ocean pigments, translucent turquoise layers, and encapsulated real white hydrangea petals. The pieces rest on raw natural linen cloth bathed in warm organic afternoon light. The aesthetic reflects a luxury coastal art atelier in Colombia with high craftsmanship, intricate details, and ivory serene tones."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQptUHc2OqlnIyNECkw_u0QUL5Ixv0Fj6D3jsNger-8wiCW2DhOsbirEKMdiFCBrIRXSQyGJkeQnvW_4erc6DBwiO4qLQF7J9C9fN4tlbl4kCn4OpdUxDA8PF6FaC8HXd8PNhs3LnWs7-P3YdpGWiQQ-FU5OjUSF1YQ-PNeBUd8gB-qwDaZLNnJakUJmSu7t0nSYG8mpWtXXNVDPjI2-1_DNVJJEjb-jqYMMRz2_4"
                      />
                      <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full font-label-badge text-label-badge text-on-primary bg-primary shadow-xs">
                        Entrega inmediata
                      </span>
                    </div>
                    {/* Content and Spec Details */}
                    <div className="flex-grow flex flex-col justify-between w-full h-full min-h-[140px]">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-headline-sm text-headline-sm text-secondary font-medium">
                            Posavasos Oc&eacute;ano &amp; Hortensias (Set x4)
                          </h3>
                          <button
                            aria-label="Eliminar pieza"
                            className="text-outline hover:text-error transition-colors p-1"
                            title="Quitar del carrito"
                            type="button"
                          >
                            <MaterialSymbol className="material-symbols-outlined text-[20px]">
                              delete_outline
                            </MaterialSymbol>
                          </button>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          T&eacute;cnica: Resina ep&oacute;xica y bot&aacute;nica encapsulada sobre
                          base circular nivelada.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 mt-2 font-caption text-caption text-on-surface-variant">
                          <span className="inline-flex items-center gap-1 text-primary">
                            <MaterialSymbol className="material-symbols-outlined text-[16px]">
                              check_circle
                            </MaterialSymbol>
                            Inventario en taller
                          </span>
                          <span>&bull;</span>
                          <span>Cantidad: 1 set</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-surface-container-high">
                        <div className="flex items-center border border-outline-variant/40 rounded-full px-2 py-0.5 bg-surface-container-lowest">
                          <button
                            className="px-2 py-0.5 text-on-surface-variant hover:text-primary font-bold text-sm"
                            disabled={true}
                          >
                            -
                          </button>
                          <span className="px-2 text-sm font-medium">1</span>
                          <button
                            className="px-2 py-0.5 text-on-surface-variant hover:text-primary font-bold text-sm"
                            disabled={true}
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <span className="font-label-price text-label-price text-primary tracking-tight font-semibold">
                            $65.000 COP
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
                {/* Product Card 2: Florero Escultórico Arco Sol */}
                <article className="bg-surface-container-lowest rounded-2xl p-4 sm:p-5 border border-outline-variant/30 ocean-shadow-1 transition-all duration-200 hover:border-primary-container/50">
                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                    {/* Image Preview with Badge */}
                    <div className="relative w-full sm:w-36 h-40 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
                      <img
                        alt="Florero escultórico Arco Sol"
                        className="w-full h-full object-cover"
                        data-alt="An artisanal minimalist modern sculpted arch vase made of smooth white high-density cement with sun-inspired tactile geometric ridges. The vase stands on an ivory travertine display block inside an art studio, illuminated by gentle organic gallery lighting with coastal ocean hints. Warm soft shadows, high aesthetic curation, and serene architectural harmony in soft natural light."
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwsuuzFkZaSgvsEXFAnT3GFeOUQ7l_hKTBzMiGmEiPXPR7ME6PX8ApQIFJNZptFLYlcMM_HZTFK9zI4WZTZci-8Y6i_ORpWyuhlJ8nN41WM4BMYuvTEGuGlQ_qlkCeF_v5zVLGaiHXbi_SlRhUBZC0gKgFpT_YvEO-M8psNv7zn-BV7ubzNV61BX5TU7vhs5PephrjtuitOy45KikILp8BTzqOyMwpxdos_r8oRgo"
                      />
                      <span className="absolute top-2 left-2 px-2.5 py-0.5 rounded-full font-label-badge text-label-badge text-on-background bg-secondary-fixed shadow-xs">
                        4 d&iacute;as de secado
                      </span>
                    </div>
                    {/* Content and Spec Details */}
                    <div className="flex-grow flex flex-col justify-between w-full h-full min-h-[140px]">
                      <div>
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-headline-sm text-headline-sm text-secondary font-medium">
                            Florero Escult&oacute;rico Arco Sol
                          </h3>
                          <button
                            aria-label="Eliminar pieza"
                            className="text-outline hover:text-error transition-colors p-1"
                            title="Quitar del carrito"
                            type="button"
                          >
                            <MaterialSymbol className="material-symbols-outlined text-[20px]">
                              delete_outline
                            </MaterialSymbol>
                          </button>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                          Material: Cemento blanco sellado de alta densidad con
                          impermeabilizaci&oacute;n satinada.
                        </p>
                        <div className="flex flex-wrap items-center gap-3 mt-2 font-caption text-caption text-on-surface-variant">
                          <span className="inline-flex items-center gap-1 text-secondary">
                            <MaterialSymbol className="material-symbols-outlined text-[16px]">
                              hourglass_top
                            </MaterialSymbol>
                            En curadur&iacute;a &amp; desmolde
                          </span>
                          <span>&bull;</span>
                          <span>Cantidad: 1 unidad</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-surface-container-high">
                        <div className="flex items-center border border-outline-variant/40 rounded-full px-2 py-0.5 bg-surface-container-lowest">
                          <button
                            className="px-2 py-0.5 text-on-surface-variant hover:text-primary font-bold text-sm"
                            disabled={true}
                          >
                            -
                          </button>
                          <span className="px-2 text-sm font-medium">1</span>
                          <button
                            className="px-2 py-0.5 text-on-surface-variant hover:text-primary font-bold text-sm"
                            disabled={true}
                          >
                            +
                          </button>
                        </div>
                        <div className="text-right">
                          <span className="font-label-price text-label-price text-primary tracking-tight font-semibold">
                            $140.000 COP
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </section>
              {/* SECTION 2: DATOS DE ENVÍO EN COLOMBIA */}
              <section
                aria-labelledby="shipping-form-title"
                className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-outline-variant/30 ocean-shadow-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed font-headline-sm text-body-md font-semibold">
                    1
                  </span>
                  <div>
                    <h2
                      className="font-headline-sm text-headline-sm text-secondary font-medium"
                      id="shipping-form-title"
                    >
                      Datos de Env&iacute;o en Colombia
                    </h2>
                    <p className="font-caption text-caption text-on-surface-variant">
                      Env&iacute;os garantizados y asegurados a nivel nacional.
                    </p>
                  </div>
                </div>
                <form
                  className="space-y-4"
                  onSubmit={(event) => {
                    event.preventDefault();
                  }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nombre Completo */}
                    <div>
                      <label
                        className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5"
                        htmlFor="full_name"
                      >
                        Nombre Completo del Destinatario *
                      </label>
                      <input
                        className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 focus:outline-none transition-all font-body-md text-body-md"
                        id="full_name"
                        name="full_name"
                        placeholder="Ej. Carolina Restrepo"
                        required
                        type="text"
                        defaultValue="Valentina Morales Duque"
                      />
                    </div>
                    {/* Cédula o NIT */}
                    <div>
                      <label
                        className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5"
                        htmlFor="tax_id"
                      >
                        C&eacute;dula de Ciudadan&iacute;a o NIT *
                      </label>
                      <input
                        className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 focus:outline-none transition-all font-body-md text-body-md"
                        id="tax_id"
                        name="tax_id"
                        placeholder="Requerido por transportadora"
                        required
                        type="text"
                        defaultValue="1.020.458.912"
                      />
                    </div>
                  </div>
                  {/* Dirección Colombiana Nomenclatura */}
                  <div>
                    <label
                      className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5"
                      htmlFor="address"
                    >
                      Direcci&oacute;n con Nomenclatura Urbana *
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl pl-4 pr-10 py-3 text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 focus:outline-none transition-all font-body-md text-body-md"
                        id="address"
                        name="address"
                        placeholder="Ej: Calle 127 # 15-30, Bloque 4 Apto 201"
                        required
                        type="text"
                        defaultValue="Carrera 11 # 84 - 42, Apto 502"
                      />
                      <MaterialSymbol className="material-symbols-outlined absolute right-3 top-3 text-outline-variant text-[20px]">
                        pin_drop
                      </MaterialSymbol>
                    </div>
                    <span className="font-caption text-caption text-on-surface-variant block mt-1">
                      Incluye especificaciones como Carrera, Calle, Torre, Edificio o Conjunto
                      residencial.
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Departamento y Ciudad */}
                    <div>
                      <label
                        className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5"
                        htmlFor="city_dept"
                      >
                        Ciudad y Departamento *
                      </label>
                      <select
                        className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl px-4 py-3 text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 focus:outline-none transition-all font-body-md text-body-md"
                        id="city_dept"
                        name="city_dept"
                      >
                        <option>Bogot&aacute; D.C. (Cundinamarca)</option>
                        <option>Medell&iacute;n (Antioquia)</option>
                        <option>Cali (Valle del Cauca)</option>
                        <option>Barranquilla (Atl&aacute;ntico)</option>
                        <option>Cartagena de Indias (Bol&iacute;var)</option>
                        <option>Bucaramanga (Santander)</option>
                        <option>Pereira (Risaralda)</option>
                        <option>Manizales (Caldas)</option>
                        <option>Otra ciudad intermedia / Municipio</option>
                      </select>
                    </div>
                    {/* Teléfono Celular */}
                    <div>
                      <label
                        className="block font-body-sm text-body-sm font-medium text-on-surface mb-1.5"
                        htmlFor="phone"
                      >
                        Tel&eacute;fono Celular / WhatsApp *
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-3.5 text-on-surface-variant text-sm font-medium">
                          +57
                        </span>
                        <input
                          className="w-full bg-surface-container-low border border-outline-variant/50 rounded-xl pl-12 pr-4 py-3 text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 focus:outline-none transition-all font-body-md text-body-md"
                          id="phone"
                          name="phone"
                          placeholder="300 000 0000"
                          required
                          type="tel"
                          defaultValue="315 892 4110"
                        />
                      </div>
                    </div>
                  </div>
                  {/* SELECTOR DE TRANSPORTADORA */}
                  <div className="pt-4 border-t border-outline-variant/20">
                    <span className="block font-body-sm text-body-sm font-medium text-on-surface mb-3">
                      Selecciona la Empresa Transportadora Preferida:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {/* Coordinadora */}
                      <label aria-label="Coordinadora" htmlFor="shipping-coordinadora" className="relative flex items-center p-3.5 rounded-xl border border-primary/50 bg-secondary-fixed/20 cursor-pointer hover:border-primary transition-all">
                        <input
                          id="shipping-coordinadora"
                          defaultChecked={true}
                          className="text-primary focus:ring-primary-container"
                          name="shipping_carrier"
                          type="radio"
                          value="coordinadora"
                        />
                        <div className="ml-3">
                          <span className="block font-body-sm text-body-sm font-semibold text-on-surface">
                            Coordinadora
                          </span>
                          <span className="block font-caption text-caption text-primary">
                            Trazabilidad en tiempo real
                          </span>
                        </div>
                      </label>
                      {/* Inter Rapidísimo */}
                      <label aria-label="Inter Rapidísimo" htmlFor="shipping-inter" className="relative flex items-center p-3.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest cursor-pointer hover:border-primary transition-all">
                        <input
                          className="text-primary focus:ring-primary-container"
                          id="shipping-inter"
                          name="shipping_carrier"
                          type="radio"
                          value="inter_rapidisimo"
                        />
                        <div className="ml-3">
                          <span className="block font-body-sm text-body-sm font-semibold text-on-surface">
                            Inter Rapid&iacute;simo
                          </span>
                          <span className="block font-caption text-caption text-on-surface-variant">
                            Entrega express
                          </span>
                        </div>
                      </label>
                      {/* Servientrega */}
                      <label aria-label="Servientrega" htmlFor="shipping-servientrega" className="relative flex items-center p-3.5 rounded-xl border border-outline-variant/40 bg-surface-container-lowest cursor-pointer hover:border-primary transition-all">
                        <input
                          className="text-primary focus:ring-primary-container"
                          id="shipping-servientrega"
                          name="shipping_carrier"
                          type="radio"
                          value="servientrega"
                        />
                        <div className="ml-3">
                          <span className="block font-body-sm text-body-sm font-semibold text-on-surface">
                            Servientrega
                          </span>
                          <span className="block font-caption text-caption text-on-surface-variant">
                            Cobertura nacional
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                </form>
              </section>
              {/* SECTION 3: MEDIOS DE PAGO COLOMBIA */}
              <section
                aria-labelledby="payment-section-title"
                className="bg-surface-container-lowest rounded-2xl p-6 sm:p-8 border border-outline-variant/30 ocean-shadow-1"
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed font-headline-sm text-body-md font-semibold">
                    2
                  </span>
                  <div>
                    <h2
                      className="font-headline-sm text-headline-sm text-secondary font-medium"
                      id="payment-section-title"
                    >
                      M&eacute;todo de Pago Seguro
                    </h2>
                    <p className="font-caption text-caption text-on-surface-variant">
                      Selecciona la pasarela o canal directo de tu preferencia.
                    </p>
                  </div>
                </div>
                <div
                  aria-label="M\xE9todos de pago en Colombia"
                  className="space-y-3.5"
                  role="radiogroup"
                >
                  {/* Opción 1: Mercado Pago (PSE / Tarjetas) */}
                  <label aria-label="Mercado Pago Colombia" htmlFor="payment-mercadopago" className="block p-4 rounded-xl border-2 border-primary bg-surface cursor-pointer ocean-shadow-1 transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          id="payment-mercadopago"
                          defaultChecked={true}
                          className="text-primary focus:ring-primary-container"
                          name="payment_method"
                          type="radio"
                          value="mercadopago"
                        />
                        <div>
                          <span className="font-body-md text-body-md font-medium text-secondary flex items-center gap-2">
                            Mercado Pago Colombia
                            <span className="bg-primary/10 text-primary text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                              Recomendado
                            </span>
                          </span>
                          <span className="font-caption text-caption text-on-surface-variant block mt-0.5">
                            Tarjetas de Cr&eacute;dito / D&eacute;bito, PSE, Tarjeta &Eacute;xito,
                            Alkosto
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 opacity-90 hidden sm:flex">
                        <span className="px-2 py-1 bg-surface-container text-[11px] font-semibold rounded text-secondary">
                          PSE
                        </span>
                        <span className="px-2 py-1 bg-surface-container text-[11px] font-semibold rounded text-secondary">
                          VISA
                        </span>
                        <span className="px-2 py-1 bg-surface-container text-[11px] font-semibold rounded text-secondary">
                          Mastercard
                        </span>
                      </div>
                    </div>
                  </label>
                  {/* Opción 2: Nequi */}
                  <label aria-label="Nequi" htmlFor="payment-nequi" className="block p-4 rounded-xl border border-outline-variant/40 bg-surface-container-lowest hover:border-primary-container cursor-pointer transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          className="text-primary focus:ring-primary-container"
                          id="payment-nequi"
                          name="payment_method"
                          type="radio"
                          value="nequi"
                        />
                        <div>
                          <span className="font-body-md text-body-md font-medium text-on-surface flex items-center gap-2">
                            Nequi
                            <span className="bg-tertiary-fixed text-on-tertiary-fixed text-[10px] font-bold px-2 py-0.5 rounded-full">
                              QR o Celular
                            </span>
                          </span>
                          <span className="font-caption text-caption text-on-surface-variant block mt-0.5">
                            Paga al instante escaneando c&oacute;digo QR o notificaci&oacute;n Push
                            a tu n&uacute;mero m&oacute;vil.
                          </span>
                        </div>
                      </div>
                      <MaterialSymbol className="material-symbols-outlined text-secondary text-[24px]">
                        qr_code_scanner
                      </MaterialSymbol>
                    </div>
                  </label>
                  {/* Opción 3: Daviplata */}
                  <label aria-label="Daviplata" htmlFor="payment-daviplata" className="block p-4 rounded-xl border border-outline-variant/40 bg-surface-container-lowest hover:border-primary-container cursor-pointer transition-all">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <input
                          className="text-primary focus:ring-primary-container"
                          id="payment-daviplata"
                          name="payment_method"
                          type="radio"
                          value="daviplata"
                        />
                        <div>
                          <span className="font-body-md text-body-md font-medium text-on-surface flex items-center gap-2">
                            Daviplata
                          </span>
                          <span className="font-caption text-caption text-on-surface-variant block mt-0.5">
                            Transferencia bancaria directa con tu c&eacute;dula y n&uacute;mero de
                            cuenta Daviplata.
                          </span>
                        </div>
                      </div>
                      <MaterialSymbol className="material-symbols-outlined text-secondary text-[24px]">
                        account_balance_wallet
                      </MaterialSymbol>
                    </div>
                  </label>
                </div>
                <div className="mt-4 flex items-center gap-2 text-on-surface-variant bg-surface-container-low p-3 rounded-lg border border-outline-variant/30">
                  <MaterialSymbol
                    className="material-symbols-outlined text-[18px] text-primary"
                    data-weight="fill"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    lock
                  </MaterialSymbol>
                  <span className="font-caption text-caption">
                    Tus datos financieros se procesan con encriptaci&oacute;n SSL de 256 bits y
                    nunca se almacenan en nuestros servidores.
                  </span>
                </div>
              </section>
            </div>
            {/* RIGHT COLUMN: FINANCIAL SUMMARY & CHECKOUT SUBMISSION (5 Cols) */}
            <aside className="lg:col-span-5 sticky top-24 space-y-6">
              {/* Summary Box */}
              <div className="bg-surface-container-lowest rounded-2xl p-6 sm:p-7 border border-outline-variant/30 ocean-shadow-2 relative overflow-hidden">
                {/* Subtle coastal decorative accent bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-primary-container to-secondary" />
                <h3 className="font-headline-sm text-headline-sm text-secondary font-medium mb-5 pb-3 border-b border-outline-variant/20 flex items-center justify-between">
                  <span>Resumen Financiero</span>
                  <MaterialSymbol className="material-symbols-outlined text-primary text-[22px]">
                    receipt_long
                  </MaterialSymbol>
                </h3>
                {/* Breakdown List */}
                <dl className="space-y-3.5 mb-6 text-on-surface">
                  <div className="flex justify-between items-center text-sm">
                    <dt className="text-on-surface-variant font-body-md text-body-md">
                      Subtotal de piezas (2 obras):
                    </dt>
                    <dd className="font-headline-sm text-body-md font-medium text-on-surface">
                      $205.000 COP
                    </dd>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <dt className="text-on-surface-variant font-body-md text-body-md flex items-center gap-1.5">
                      Env&iacute;o nacional cotizado:
                      <span
                        className="cursor-pointer text-outline hover:text-primary"
                        title="Env\xEDo con seguro de mercanc\xEDa y embalaje r\xEDgido"
                      >
                        <MaterialSymbol className="material-symbols-outlined text-[16px]">
                          info
                        </MaterialSymbol>
                      </span>
                    </dt>
                    <dd className="font-headline-sm text-body-md font-medium text-on-surface">
                      $15.000 COP
                    </dd>
                  </div>
                  <div className="flex justify-between items-center text-xs text-on-surface-variant pl-2 border-l-2 border-outline-variant/40">
                    <dt className="font-caption text-caption">Destino:</dt>
                    <dd className="font-caption text-caption font-medium">
                      Bogot&aacute; D.C. / Ciudades principales
                    </dd>
                  </div>
                  <div className="pt-4 border-t border-outline-variant/30 flex justify-between items-baseline">
                    <dt>
                      <span className="block font-headline-md text-headline-md text-secondary font-semibold">
                        Total a pagar:
                      </span>
                      <span className="font-caption text-caption text-primary">
                        IVA y embalaje especial incluidos
                      </span>
                    </dt>
                    <dd className="text-right">
                      <span className="font-headline-xl text-headline-xl text-primary font-bold tracking-tight">
                        $220.000
                      </span>
                      <span className="block font-caption text-caption text-on-surface-variant font-semibold">
                        COP
                      </span>
                    </dd>
                  </div>
                </dl>
                {/* Packaging & Artisan Guarantee Card */}
                <div className="bg-surface-container-low rounded-xl p-4 border border-outline-variant/30 mb-6 space-y-2">
                  <div className="flex items-center gap-2 text-primary font-medium font-body-sm text-body-sm">
                    <MaterialSymbol className="material-symbols-outlined text-[18px]">
                      verified
                    </MaterialSymbol>
                    <span>Garant&iacute;a de Empaque Curado Artesanal</span>
                  </div>
                  <p className="font-caption text-caption text-on-surface-variant leading-relaxed">
                    Cada creaci&oacute;n es envuelta en papel mantequilla con sello en cera,
                    protegida con esquineros de cart&oacute;n prensado y embalaje acolchado de alta
                    seguridad para resistir traslados terrestres o a&eacute;reos.
                  </p>
                </div>
                {/* Checkout Primary Button */}
                <button
                  className="w-full bg-primary-container text-on-primary hover:bg-primary font-headline-sm text-headline-sm font-medium py-4 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-3 group active:scale-[0.98]"
                  type="button"
                >
                  <MaterialSymbol
                    className="material-symbols-outlined text-[22px] transition-transform group-hover:scale-110"
                    data-weight="fill"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    lock
                  </MaterialSymbol>
                  <span>Pagar $220.000 COP con Transacci&oacute;n Segura</span>
                </button>
                {/* Complementary reassurance badges */}
                <div className="mt-4 pt-4 border-t border-outline-variant/20 flex items-center justify-center gap-4 text-outline text-xs">
                  <span className="flex items-center gap-1 font-caption text-caption text-on-surface-variant">
                    <MaterialSymbol className="material-symbols-outlined text-[16px] text-primary">
                      local_shipping
                    </MaterialSymbol>
                    Gu&iacute;a con rastreo
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1 font-caption text-caption text-on-surface-variant">
                    <MaterialSymbol className="material-symbols-outlined text-[16px] text-primary">
                      palette
                    </MaterialSymbol>
                    Piezas de autora colombiana
                  </span>
                </div>
              </div>
              {/* Andrea Sosa Studio Note */}
              <div className="frosted-half rounded-2xl p-5 border border-outline-variant/30 bg-surface-container/60 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-center text-primary flex-shrink-0">
                  <MaterialSymbol className="material-symbols-outlined text-[20px]">
                    brush
                  </MaterialSymbol>
                </div>
                <div>
                  <h4 className="font-headline-sm text-body-md text-secondary font-medium">
                    Nota del Atelier
                  </h4>
                  <p className="font-caption text-caption text-on-surface-variant mt-0.5">
                    Al finalizar tu compra, recibir&aacute;s un mensaje directo al WhatsApp
                    registrado con la confirmaci&oacute;n de alistamiento y el certificado digital
                    firmado por Andrea Sosa.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </main>
        {/* FOOTER (Shared Component Exact Match) */}
        <footer className="full-width bg-surface-container dark:bg-inverse-surface border-t border-outline-variant/20 dark:border-outline/10 flat no shadows mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 lg:px-12 py-8 max-w-7xl mx-auto gap-4">
            {/* Brand & Origin Identity */}
            <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
              <span className="font-headline-md text-headline-md text-secondary dark:text-secondary-fixed tracking-tight">
                Seahorse
              </span>
              <span className="hidden md:inline text-outline-variant">&bull;</span>
              <p className="font-body-sm text-body-sm text-primary dark:text-inverse-primary">
                &copy; 2024 Seahorse Estudio Creativo by Andrea Sosa. Hecho a mano y con
                dise&ntilde;o de autor en Colombia. Todos los derechos reservados.
              </p>
            </div>
            {/* Links List from Component JSON */}
            <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6">
              <Link
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-150 font-body-sm text-body-sm"
                href="/tienda"
              >
                Cat&aacute;logo
              </Link>
              <Link
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-150 font-body-sm text-body-sm"
                href="/personaliza"
              >
                Personalizaci&oacute;n
              </Link>
              <a
                className="text-primary dark:text-primary-fixed underline font-body-sm text-body-sm"
                href="#top"
              >
                Env&iacute;os en Colombia
              </a>
              <a
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-150 font-body-sm text-body-sm"
                href="#top"
              >
                T&eacute;rminos y Condiciones
              </a>
              <a
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-150 font-body-sm text-body-sm"
                href="#top"
              >
                Privacidad
              </a>
              <Link
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors duration-150 font-body-sm text-body-sm"
                href="/dashboard"
              >
                Panel Admin
              </Link>
            </nav>
          </div>
        </footer>
      </>
    </PrototypePage>
  );
}
