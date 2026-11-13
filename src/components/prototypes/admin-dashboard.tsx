"use client";

import { triggerButtonPress } from "./dashboard-interactions";
import Link from "next/link";
import { MaterialSymbol } from "./material-symbol";
import { PrototypePage } from "./prototype-page";

export default function DashboardPrototype() {
  return (
    <PrototypePage className="prototype-route-dashboard min-h-screen flex flex-col overflow-x-hidden bg-background text-on-surface selection:bg-primary-container selection:text-on-primary-container font-body-md text-body-md">
      <>
        {/* TOP APP BAR (from Shared Components JSON Blueprint) */}
        <header className="bg-surface/90 dark:bg-inverse-surface/90 backdrop-blur-md text-primary dark:text-inverse-primary docked full-width top-0 sticky z-50 shadow-sm dark:shadow-none">
          <div className="flex justify-between items-center w-full px-6 lg:px-12 py-4 max-w-7xl mx-auto">
            {/* Brand & Title Anchor */}
            <div className="flex items-center gap-4">
              <a className="flex items-center gap-3 group" href="#">
                <img
                  alt="Logotipo oficial Seahorse Estudio Creativo by Andrea Sosa"
                  className="w-10 h-10 object-contain rounded-full shadow-sm ring-1 ring-primary/20 bg-surface-container-lowest p-0.5 transition-transform group-hover:scale-105"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaJyDtkYggjZrnGV-LZBLosb1SFTsQg16jvwb8LgORtzvSEKpLLiONc7KCV1rYTLwtXXF79_n0cvjPwsl22oVnYUR7BG2_TbQ1aW1ibxFee03fpZHpLC7hSs63zHihvkwywLIfPtQTVv5xw7da1eSL5n4PiQT4_C6lvMiKdM6GXeT77eGcGjLJkqbChT5QmPiMbzVJgidhWxng5ZHS2SbEIvOG6ZGauxqROjWPsG-9RVE8rY2LFwM6"
                />
                <div className="flex flex-col">
                  <span className="font-headline-md text-headline-md text-secondary dark:text-secondary-fixed tracking-tight font-medium leading-none">
                    Seahorse Estudio Creativo by Andrea Sosa
                  </span>
                  <span className="font-caption text-caption text-primary flex items-center gap-1 mt-1">
                    <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse inline-block" />
                    Panel de Control Administrativo &middot; Colombia
                  </span>
                </div>
              </a>
            </div>
            {/* Navigation Links from Blueprint */}
            <nav className="hidden md:flex items-center space-x-6">
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
              <Link
                className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-headline-sm text-body-md"
                href="/dashboard"
              >
                Admin
              </Link>
            </nav>
            {/* Trailing Action Cluster */}
            <div className="flex items-center gap-3">
              {/* Currency Badge */}
              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-caption font-label-badge bg-surface-container text-on-surface font-semibold ring-1 ring-outline-variant/30">
                COP ($)
              </span>
              {/* Search icon */}
              <button
                className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container"
                title="Buscar"
                onClick={(event) => {
                  triggerButtonPress(event.currentTarget);
                }}
              >
                <MaterialSymbol
                  className="material-symbols-outlined text-[20px]"
                  data-icon="search"
                >
                  search
                </MaterialSymbol>
              </button>
              {/* Shopping Bag Action from JSON */}
              <button
                className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container relative"
                title="Carrito"
                onClick={(event) => {
                  triggerButtonPress(event.currentTarget);
                }}
              >
                <MaterialSymbol
                  className="material-symbols-outlined text-[20px]"
                  data-icon="shopping_bag"
                >
                  shopping_bag
                </MaterialSymbol>
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
              </button>
              {/* Admin Security Shield */}
              <button
                className="p-2 text-primary hover:text-primary-container transition-colors rounded-full hover:bg-surface-container"
                title="Panel de seguridad"
                onClick={(event) => {
                  triggerButtonPress(event.currentTarget);
                }}
              >
                <MaterialSymbol
                  className="material-symbols-outlined text-[20px]"
                  data-icon="admin_panel_settings"
                >
                  admin_panel_settings
                </MaterialSymbol>
              </button>
              {/* User avatar / Account */}
              <div className="flex items-center gap-2 pl-2 border-l border-outline-variant/40">
                <button
                  className="flex items-center gap-2 p-1 text-on-surface hover:text-primary rounded-full"
                  title="Perfil Andrea Sosa"
                  onClick={(event) => {
                    triggerButtonPress(event.currentTarget);
                  }}
                >
                  <MaterialSymbol
                    className="material-symbols-outlined text-[24px] text-secondary"
                    data-icon="account_circle"
                  >
                    account_circle
                  </MaterialSymbol>
                  <div className="hidden xl:flex flex-col text-left">
                    <span className="font-label-badge text-label-badge leading-tight">
                      Andrea Sosa
                    </span>
                    <span className="font-caption text-[10px] text-primary leading-tight">
                      Curadora &amp; Directora
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* MAIN ADMIN WORKSPACE */}
        <div className="flex-1 flex max-w-7xl w-full mx-auto px-4 lg:px-12 py-6 gap-6">
          {/* SUB-NAV SIDEBAR (Admin Specific Curatorial Navigation) */}
          <aside className="w-64 flex-shrink-0 hidden lg:flex flex-col gap-4">
            <div className="bg-surface-container-lowest rounded-2xl p-5 ocean-card-shadow border border-outline-variant/20 flex flex-col gap-3">
              {/* Admin Profile Snapshot */}
              <div className="flex items-center gap-3 pb-3 border-b border-surface-container">
                <div className="w-11 h-11 rounded-full bg-surface-container-low ring-2 ring-primary/20 flex items-center justify-center p-0.5 overflow-hidden">
                  <img
                    alt="Andrea Sosa Logotipo"
                    className="w-full h-full object-contain"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaJyDtkYggjZrnGV-LZBLosb1SFTsQg16jvwb8LgORtzvSEKpLLiONc7KCV1rYTLwtXXF79_n0cvjPwsl22oVnYUR7BG2_TbQ1aW1ibxFee03fpZHpLC7hSs63zHihvkwywLIfPtQTVv5xw7da1eSL5n4PiQT4_C6lvMiKdM6GXeT77eGcGjLJkqbChT5QmPiMbzVJgidhWxng5ZHS2SbEIvOG6ZGauxqROjWPsG-9RVE8rY2LFwM6"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline-sm text-sm font-semibold text-secondary leading-tight">
                    Andrea Sosa
                  </h4>
                  <span className="font-caption text-caption text-primary flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Administradora
                  </span>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-2.5 flex items-center gap-2 text-caption font-caption text-on-surface-variant">
                <MaterialSymbol
                  className="material-symbols-outlined text-primary text-[18px]"
                  data-icon="verified_user"
                >
                  verified_user
                </MaterialSymbol>
                <span>Producci&oacute;n Segura &bull; MFA DIAN</span>
              </div>
              {/* Navigation Menu */}
              <nav className="flex flex-col gap-1 mt-2">
                <a
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all"
                  href="#"
                >
                  <MaterialSymbol
                    className="material-symbols-outlined text-[20px]"
                    data-icon="dashboard"
                  >
                    dashboard
                  </MaterialSymbol>
                  <span>Resumen General</span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-body-sm text-body-sm bg-primary/10 text-primary font-medium transition-all shadow-sm"
                  href="#"
                >
                  <MaterialSymbol
                    className="material-symbols-outlined text-[20px]"
                    data-icon="local_shipping"
                  >
                    local_shipping
                  </MaterialSymbol>
                  <span className="flex-1">Pedidos &amp; Env&iacute;os</span>
                  <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-badge text-[10px]">
                    24
                  </span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all"
                  href="#"
                >
                  <MaterialSymbol
                    className="material-symbols-outlined text-[20px]"
                    data-icon="palette"
                  >
                    palette
                  </MaterialSymbol>
                  <span>Cat&aacute;logo &amp; Obras</span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all"
                  href="#"
                >
                  <MaterialSymbol
                    className="material-symbols-outlined text-[20px]"
                    data-icon="handyman"
                  >
                    handyman
                  </MaterialSymbol>
                  <span className="flex-1">Taller de Resina</span>
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all"
                  href="#"
                >
                  <MaterialSymbol
                    className="material-symbols-outlined text-[20px]"
                    data-icon="group"
                  >
                    group
                  </MaterialSymbol>
                  <span>Coleccionistas &amp; Clientes</span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all"
                  href="#"
                >
                  <MaterialSymbol
                    className="material-symbols-outlined text-[20px]"
                    data-icon="inventory_2"
                  >
                    inventory_2
                  </MaterialSymbol>
                  <span>Transportadoras Colombia</span>
                </a>
                <a
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl font-body-sm text-body-sm text-on-surface-variant hover:text-primary hover:bg-surface-container-low transition-all"
                  href="#"
                >
                  <MaterialSymbol
                    className="material-symbols-outlined text-[20px]"
                    data-icon="receipt_long"
                  >
                    receipt_long
                  </MaterialSymbol>
                  <span>Facturaci&oacute;n Electr&oacute;nica DIAN</span>
                </a>
              </nav>
            </div>
            {/* Logística Recolección Widget */}
            <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/20 flex flex-col gap-2.5">
              <div className="flex items-center justify-between">
                <span className="font-label-badge text-label-badge text-secondary flex items-center gap-1.5">
                  <MaterialSymbol
                    className="material-symbols-outlined text-[16px] text-primary"
                    data-icon="schedule"
                  >
                    schedule
                  </MaterialSymbol>
                  Recolecci&oacute;n Hoy en Taller
                </span>
                <span className="text-caption text-primary font-semibold">16:30 COT</span>
              </div>
              <div className="bg-surface-container-lowest p-2.5 rounded-xl border border-outline-variant/30 flex items-center justify-between">
                <div>
                  <div className="font-body-sm text-body-sm font-semibold text-on-surface">
                    Coordinadora
                  </div>
                  <div className="font-caption text-[11px] text-on-surface-variant">
                    Ruta Bogot&aacute; Chapinero / 14 bultos
                  </div>
                </div>
                <MaterialSymbol
                  className="material-symbols-outlined text-primary text-[20px]"
                  data-icon="check_circle"
                >
                  check_circle
                </MaterialSymbol>
              </div>
              <div className="bg-surface-container-lowest p-2.5 rounded-xl border border-outline-variant/30 flex items-center justify-between">
                <div>
                  <div className="font-body-sm text-body-sm font-semibold text-on-surface">
                    Inter Rapid&iacute;simo
                  </div>
                  <div className="font-caption text-[11px] text-on-surface-variant">
                    Ruta Nacional / 6 bultos
                  </div>
                </div>
                <span className="font-caption text-[10px] text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md font-medium">
                  En espera
                </span>
              </div>
            </div>
          </aside>
          {/* MAIN EDITORIAL CONTENT CANVAS */}
          <main className="flex-1 flex flex-col gap-6 overflow-hidden">
            {/* Hero Header & Breadcrumb */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 font-caption text-caption text-on-surface-variant mb-1">
                  <span>Atelier &middot; Colombia</span>
                  <span>/</span>
                  <span>Log&iacute;stica &amp; Env&iacute;os Nacionales</span>
                  <span>/</span>
                  <span className="text-primary font-medium">Despachos Activos</span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-secondary tracking-tight">
                  Gesti&oacute;n de Pedidos &amp; Log&iacute;stica de Autor
                </h1>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Monitoreo en tiempo real de piezas de dise&ntilde;o, empaques curados y
                  gu&iacute;as nacionales en Colombia.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary text-secondary hover:bg-secondary/10 transition-colors font-body-sm text-body-sm font-medium"
                  onClick={(event) => {
                    triggerButtonPress(event.currentTarget);
                  }}
                >
                  <MaterialSymbol
                    className="material-symbols-outlined text-[18px]"
                    data-icon="file_download"
                  >
                    file_download
                  </MaterialSymbol>
                  Manifiesto DIAN
                </button>
                <button
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-container text-on-primary-container hover:opacity-90 transition-all font-body-sm text-body-sm font-medium shadow-sm"
                  onClick={(event) => {
                    triggerButtonPress(event.currentTarget);
                  }}
                >
                  <MaterialSymbol
                    className="material-symbols-outlined text-[18px]"
                    data-icon="add_circle"
                  >
                    add_circle
                  </MaterialSymbol>
                  Nueva Gu&iacute;a de Env&iacute;o
                </button>
              </div>
            </div>
            {/* METRIC / KPI CARDS (Bento Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
              {/* KPI 1 */}
              <div className="bg-surface-container-lowest rounded-2xl p-5 ocean-card-shadow border border-outline-variant/20 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">
                    Por Despachar
                  </span>
                  <span className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                    <MaterialSymbol
                      className="material-symbols-outlined text-[20px]"
                      data-icon="outgoing_mail"
                    >
                      outgoing_mail
                    </MaterialSymbol>
                  </span>
                </div>
                <div className="mt-4">
                  <div className="font-display-hero-mobile text-headline-xl text-secondary font-bold">
                    24
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-caption font-caption text-primary">
                    <MaterialSymbol
                      className="material-symbols-outlined text-[14px]"
                      data-icon="package_2"
                    >
                      package_2
                    </MaterialSymbol>
                    <span>8 listos para recolecci&oacute;n hoy</span>
                  </div>
                </div>
              </div>
              {/* KPI 2 */}
              <div className="bg-surface-container-lowest rounded-2xl p-5 ocean-card-shadow border border-outline-variant/20 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">
                    En Tr&aacute;nsito Colombia
                  </span>
                  <span className="w-9 h-9 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
                    <MaterialSymbol
                      className="material-symbols-outlined text-[20px]"
                      data-icon="local_shipping"
                    >
                      local_shipping
                    </MaterialSymbol>
                  </span>
                </div>
                <div className="mt-4">
                  <div className="font-display-hero-mobile text-headline-xl text-secondary font-bold">
                    18
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-caption font-caption text-on-surface-variant">
                    <span className="w-2 h-2 rounded-full bg-primary-container" />
                    <span>12 ciudades destino activas</span>
                  </div>
                </div>
              </div>
              {/* KPI 3 */}
              <div className="bg-surface-container-lowest rounded-2xl p-5 ocean-card-shadow border border-outline-variant/20 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">
                    En Taller / Secado
                  </span>
                  <span className="w-9 h-9 rounded-full bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
                    <MaterialSymbol
                      className="material-symbols-outlined text-[20px]"
                      data-icon="brush"
                    >
                      brush
                    </MaterialSymbol>
                  </span>
                </div>
                <div className="mt-4">
                  <div className="font-display-hero-mobile text-headline-xl text-secondary font-bold">
                    7
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-caption font-caption text-tertiary">
                    <MaterialSymbol
                      className="material-symbols-outlined text-[14px]"
                      data-icon="hourglass_top"
                    >
                      hourglass_top
                    </MaterialSymbol>
                    <span>Cemento &amp; Resina org&aacute;nica</span>
                  </div>
                </div>
              </div>
              {/* KPI 4 */}
              <div className="bg-surface-container-lowest rounded-2xl p-5 ocean-card-shadow border border-outline-variant/20 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="font-caption text-caption text-on-surface-variant uppercase tracking-wider font-semibold">
                    Facturaci&oacute;n Mensual
                  </span>
                  <span className="w-9 h-9 rounded-full bg-surface-container text-primary flex items-center justify-center">
                    <MaterialSymbol
                      className="material-symbols-outlined text-[20px]"
                      data-icon="payments"
                    >
                      payments
                    </MaterialSymbol>
                  </span>
                </div>
                <div className="mt-4">
                  <div className="font-label-price text-headline-sm text-secondary font-bold">
                    $12.450.000{" "}
                    <span className="text-caption text-on-surface-variant font-normal">COP</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-1 text-caption font-caption text-emerald-700">
                    <MaterialSymbol
                      className="material-symbols-outlined text-[14px]"
                      data-icon="trending_up"
                    >
                      trending_up
                    </MaterialSymbol>
                    <span>98.4% entregas en tiempo estimado</span>
                  </div>
                </div>
              </div>
            </div>
            {/* FILTER & SEARCH BAR SECTION */}
            <div className="bg-surface-container-lowest rounded-2xl p-4 ocean-card-shadow border border-outline-variant/20 flex flex-col gap-3">
              <div className="flex flex-col lg:flex-row gap-3 items-stretch lg:items-center justify-between">
                {/* Live Search Input */}
                <div className="relative flex-1 max-w-md">
                  <MaterialSymbol
                    className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline text-[20px]"
                    data-icon="search"
                  >
                    search
                  </MaterialSymbol>
                  <input
                    className="w-full pl-10 pr-4 py-2.5 bg-surface-container-low rounded-xl border border-outline-variant/40 focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 font-body-sm text-body-sm transition-all text-on-surface placeholder:text-outline"
                    placeholder="Buscar por #ID Pedido, cliente, gu\xEDa o destino..."
                    type="text"
                  />
                </div>
                {/* Transport Filter Buttons */}
                <div className="flex items-center gap-2 overflow-x-auto pb-1 lg:pb-0 custom-scroll">
                  <button
                    className="px-3.5 py-1.5 rounded-full font-caption text-caption font-medium bg-primary text-on-primary whitespace-nowrap shadow-sm"
                    onClick={(event) => {
                      triggerButtonPress(event.currentTarget);
                    }}
                  >
                    Todas las Gu&iacute;as
                  </button>
                  <button
                    className="px-3 py-1.5 rounded-full font-caption text-caption font-medium bg-surface-container-low hover:bg-surface-container text-on-surface-variant whitespace-nowrap transition-colors border border-outline-variant/30 flex items-center gap-1.5"
                    onClick={(event) => {
                      triggerButtonPress(event.currentTarget);
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-600" /> Coordinadora
                  </button>
                  <button
                    className="px-3 py-1.5 rounded-full font-caption text-caption font-medium bg-surface-container-low hover:bg-surface-container text-on-surface-variant whitespace-nowrap transition-colors border border-outline-variant/30 flex items-center gap-1.5"
                    onClick={(event) => {
                      triggerButtonPress(event.currentTarget);
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-emerald-600" /> Servientrega
                  </button>
                  <button
                    className="px-3 py-1.5 rounded-full font-caption text-caption font-medium bg-surface-container-low hover:bg-surface-container text-on-surface-variant whitespace-nowrap transition-colors border border-outline-variant/30 flex items-center gap-1.5"
                    onClick={(event) => {
                      triggerButtonPress(event.currentTarget);
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-500" /> Inter Rapid&iacute;simo
                  </button>
                  <button
                    className="px-3 py-1.5 rounded-full font-caption text-caption font-medium bg-surface-container-low hover:bg-surface-container text-on-surface-variant whitespace-nowrap transition-colors border border-outline-variant/30 flex items-center gap-1.5"
                    onClick={(event) => {
                      triggerButtonPress(event.currentTarget);
                    }}
                  >
                    <span className="w-2 h-2 rounded-full bg-rose-500" /> Env&iacute;a Colvanes
                  </button>
                </div>
              </div>
              {/* Filter Sub-row (Status & Geo Departments) */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-surface-container text-caption font-caption">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-on-surface-variant font-medium">Estado del pedido:</span>
                  <span className="px-2.5 py-1 rounded-md bg-secondary-fixed/50 text-on-secondary-fixed font-semibold">
                    Pago Confirmado (8)
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-tertiary-fixed/50 text-on-tertiary-fixed font-semibold">
                    Taller / Fabricaci&oacute;n (7)
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 font-semibold">
                    Listo para Despacho (5)
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-sky-100 text-sky-800 font-semibold">
                    En Tr&aacute;nsito (18)
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-semibold">
                    Novedad (1)
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-on-surface-variant">Regi&oacute;n:</span>
                  <select className="bg-surface-container-low text-on-surface border border-outline-variant/30 rounded-lg px-2.5 py-1 font-caption text-caption focus:ring-1 focus:ring-primary">
                    <option>Todos los Departamentos</option>
                    <option>Bogot&aacute; D.C. &amp; Cundinamarca</option>
                    <option>Antioquia (Medell&iacute;n &amp; Valles)</option>
                    <option>Valle del Cauca (Cali)</option>
                    <option>Atl&aacute;ntico &amp; Costa Caribe</option>
                    <option>Santander &amp; Bucaramanga</option>
                  </select>
                </div>
              </div>
            </div>
            {/* MAIN SPLIT VIEW: ORDERS TABLE + LOGISTICS DETAIL DRAWER */}
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
              {/* ORDERS TABLE (8 cols on XL) */}
              <div className="xl:col-span-8 bg-surface-container-lowest rounded-2xl ocean-card-shadow border border-outline-variant/20 overflow-hidden flex flex-col">
                <div className="px-5 py-4 border-b border-surface-container flex items-center justify-between bg-surface-container-low/40">
                  <div className="flex items-center gap-2">
                    <span className="font-headline-sm text-base text-secondary font-semibold">
                      Despachos &amp; Gu&iacute;as Registradas
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-caption font-label-badge font-bold">
                      50 registros
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="p-1.5 text-on-surface-variant hover:text-primary rounded-lg hover:bg-surface-container"
                      title="Refrescar"
                      onClick={(event) => {
                        triggerButtonPress(event.currentTarget);
                      }}
                    >
                      <MaterialSymbol
                        className="material-symbols-outlined text-[18px]"
                        data-icon="refresh"
                      >
                        refresh
                      </MaterialSymbol>
                    </button>
                    <button
                      className="p-1.5 text-on-surface-variant hover:text-primary rounded-lg hover:bg-surface-container"
                      title="Exportar CSV"
                      onClick={(event) => {
                        triggerButtonPress(event.currentTarget);
                      }}
                    >
                      <MaterialSymbol
                        className="material-symbols-outlined text-[18px]"
                        data-icon="download"
                      >
                        download
                      </MaterialSymbol>
                    </button>
                  </div>
                </div>
                <div className="overflow-x-auto custom-scroll">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-surface-container text-caption font-caption text-on-surface-variant uppercase tracking-wider bg-surface-container-low/20">
                        <th className="py-3 px-4">Pedido / Fecha</th>
                        <th className="py-3 px-4">Cliente / Destino</th>
                        <th className="py-3 px-4">Piezas Curadas</th>
                        <th className="py-3 px-4">Total COP &amp; Pago</th>
                        <th className="py-3 px-4">Estado</th>
                        <th className="py-3 px-4">Gu&iacute;a &amp; Flete</th>
                        <th className="py-3 px-4 text-right">Acciones</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-surface-container font-body-sm text-body-sm">
                      {/* ROW 1 (Selected Row) */}
                      <tr className="bg-primary/5 hover:bg-primary/10 transition-colors cursor-pointer border-l-4 border-primary">
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="font-label-badge text-body-sm text-primary font-bold">
                            #SH-2024-1089
                          </div>
                          <div className="font-caption text-caption text-on-surface-variant">
                            Hoy, 10:24 AM
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-headline-sm text-sm text-on-surface font-semibold">
                            Camila Rengifo
                          </div>
                          <div className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
                            <MaterialSymbol
                              className="material-symbols-outlined text-[14px] text-primary"
                              data-icon="location_on"
                            >
                              location_on
                            </MaterialSymbol>
                            Bogot&aacute; D.C., Chapinero Alto
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-surface-container-high flex-shrink-0 flex items-center justify-center text-primary text-caption font-bold">
                              <MaterialSymbol
                                className="material-symbols-outlined text-[16px]"
                                data-icon="water_drop"
                              >
                                water_drop
                              </MaterialSymbol>
                            </div>
                            <div>
                              <div className="text-xs font-medium text-on-surface leading-tight">
                                Set Posavasos Oc&eacute;ano x4
                              </div>
                              <div className="font-caption text-[11px] text-on-surface-variant">
                                Resina transl&uacute;cida &amp; azul marino
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="font-label-price text-sm text-secondary font-bold">
                            $185.000 COP
                          </div>
                          <span className="inline-block px-1.5 py-0.5 rounded bg-purple-100 text-purple-800 text-[10px] font-bold">
                            Nequi
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-caption font-semibold bg-emerald-100 text-emerald-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            Listo Despacho
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1 text-xs font-semibold text-secondary">
                            <span>Coordinadora</span>
                            <span className="text-caption font-mono text-primary font-bold">
                              #9842109
                            </span>
                          </div>
                          <div className="font-caption text-[11px] text-on-surface-variant">
                            $14.500 COP (Pagado)
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 text-primary hover:bg-primary/20 rounded-lg"
                              title="Imprimir R\xF3tulo Fr\xE1gil"
                              onClick={(event) => {
                                triggerButtonPress(event.currentTarget);
                              }}
                            >
                              <MaterialSymbol
                                className="material-symbols-outlined text-[18px]"
                                data-icon="print"
                              >
                                print
                              </MaterialSymbol>
                            </button>
                            <button
                              className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg"
                              title="WhatsApp Gu\xEDa"
                              onClick={(event) => {
                                triggerButtonPress(event.currentTarget);
                              }}
                            >
                              <MaterialSymbol
                                className="material-symbols-outlined text-[18px]"
                                data-icon="chat"
                              >
                                chat
                              </MaterialSymbol>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* ROW 2 */}
                      <tr className="hover:bg-surface-container-low/70 transition-colors">
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="font-label-badge text-body-sm text-secondary font-bold">
                            #SH-2024-1088
                          </div>
                          <div className="font-caption text-caption text-on-surface-variant">
                            Ayer, 4:15 PM
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-headline-sm text-sm text-on-surface font-semibold">
                            Sebasti&aacute;n Montoya
                          </div>
                          <div className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
                            <MaterialSymbol
                              className="material-symbols-outlined text-[14px] text-primary"
                              data-icon="location_on"
                            >
                              location_on
                            </MaterialSymbol>
                            Medell&iacute;n, El Poblado (Antioquia)
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-surface-container-high flex-shrink-0 flex items-center justify-center text-secondary text-caption font-bold">
                              <MaterialSymbol
                                className="material-symbols-outlined text-[16px]"
                                data-icon="potted_plant"
                              >
                                potted_plant
                              </MaterialSymbol>
                            </div>
                            <div>
                              <div className="text-xs font-medium text-on-surface leading-tight">
                                Florero Arco Sol
                              </div>
                              <div className="font-caption text-[11px] text-on-surface-variant">
                                Cemento blanco sellado al vac&iacute;o
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="font-label-price text-sm text-secondary font-bold">
                            $240.000 COP
                          </div>
                          <span className="inline-block px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">
                            Mercado Pago
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-caption font-semibold bg-sky-100 text-sky-800">
                            <span className="w-1.5 h-1.5 rounded-full bg-sky-600" />
                            En Tr&aacute;nsito
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1 text-xs font-semibold text-secondary">
                            <span>Inter Rapid&iacute;simo</span>
                            <span className="text-caption font-mono text-primary font-bold">
                              #2041982
                            </span>
                          </div>
                          <div className="font-caption text-[11px] text-on-surface-variant">
                            $13.800 COP (Contraentrega)
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 text-on-surface-variant hover:text-primary rounded-lg"
                              title="Imprimir R\xF3tulo"
                              onClick={(event) => {
                                triggerButtonPress(event.currentTarget);
                              }}
                            >
                              <MaterialSymbol
                                className="material-symbols-outlined text-[18px]"
                                data-icon="print"
                              >
                                print
                              </MaterialSymbol>
                            </button>
                            <button
                              className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg"
                              title="WhatsApp Gu\xEDa"
                              onClick={(event) => {
                                triggerButtonPress(event.currentTarget);
                              }}
                            >
                              <MaterialSymbol
                                className="material-symbols-outlined text-[18px]"
                                data-icon="chat"
                              >
                                chat
                              </MaterialSymbol>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* ROW 3 */}
                      <tr className="hover:bg-surface-container-low/70 transition-colors">
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="font-label-badge text-body-sm text-secondary font-bold">
                            #SH-2024-1087
                          </div>
                          <div className="font-caption text-caption text-on-surface-variant">
                            Ayer, 11:02 AM
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-headline-sm text-sm text-on-surface font-semibold">
                            Valeria Duque
                          </div>
                          <div className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
                            <MaterialSymbol
                              className="material-symbols-outlined text-[14px] text-primary"
                              data-icon="location_on"
                            >
                              location_on
                            </MaterialSymbol>
                            Cali, Ciudad Jard&iacute;n (Valle)
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-surface-container-high flex-shrink-0 flex items-center justify-center text-primary text-caption font-bold">
                              <MaterialSymbol
                                className="material-symbols-outlined text-[16px]"
                                data-icon="auto_awesome"
                              >
                                auto_awesome
                              </MaterialSymbol>
                            </div>
                            <div>
                              <div className="text-xs font-medium text-on-surface leading-tight">
                                Caballito Textil Aureliano
                              </div>
                              <div className="font-caption text-[11px] text-on-surface-variant">
                                Pieza &uacute;nica bordada a mano
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="font-label-price text-sm text-secondary font-bold">
                            $380.000 COP
                          </div>
                          <span className="inline-block px-1.5 py-0.5 rounded bg-red-100 text-red-800 text-[10px] font-bold">
                            Daviplata
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-caption font-semibold bg-tertiary-fixed/60 text-on-tertiary-fixed">
                            <span className="w-1.5 h-1.5 rounded-full bg-tertiary" />
                            En Taller / Secado
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="text-xs font-semibold text-on-surface-variant">
                            Servientrega
                          </div>
                          <div className="font-caption text-[11px] text-amber-600 font-medium">
                            Por programar recolecci&oacute;n
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 text-on-surface-variant hover:text-primary rounded-lg"
                              title="Detalles"
                              onClick={(event) => {
                                triggerButtonPress(event.currentTarget);
                              }}
                            >
                              <MaterialSymbol
                                className="material-symbols-outlined text-[18px]"
                                data-icon="visibility"
                              >
                                visibility
                              </MaterialSymbol>
                            </button>
                            <button
                              className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg"
                              title="WhatsApp Gu\xEDa"
                              onClick={(event) => {
                                triggerButtonPress(event.currentTarget);
                              }}
                            >
                              <MaterialSymbol
                                className="material-symbols-outlined text-[18px]"
                                data-icon="chat"
                              >
                                chat
                              </MaterialSymbol>
                            </button>
                          </div>
                        </td>
                      </tr>
                      {/* ROW 4 */}
                      <tr className="hover:bg-surface-container-low/70 transition-colors">
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="font-label-badge text-body-sm text-secondary font-bold">
                            #SH-2024-1086
                          </div>
                          <div className="font-caption text-caption text-on-surface-variant">
                            22 Nov, 3:30 PM
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="font-headline-sm text-sm text-on-surface font-semibold">
                            Mateo Silva
                          </div>
                          <div className="font-caption text-caption text-on-surface-variant flex items-center gap-1">
                            <MaterialSymbol
                              className="material-symbols-outlined text-[14px] text-primary"
                              data-icon="location_on"
                            >
                              location_on
                            </MaterialSymbol>
                            Barranquilla, Alto Prado (Atl&aacute;ntico)
                          </div>
                        </td>
                        <td className="py-4 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-lg bg-surface-container-high flex-shrink-0 flex items-center justify-center text-secondary text-caption font-bold">
                              <MaterialSymbol
                                className="material-symbols-outlined text-[16px]"
                                data-icon="water_drop"
                              >
                                water_drop
                              </MaterialSymbol>
                            </div>
                            <div>
                              <div className="text-xs font-medium text-on-surface leading-tight">
                                Bandeja Costera Coral
                              </div>
                              <div className="font-caption text-[11px] text-on-surface-variant">
                                Madera teca &amp; resina esmeralda
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="font-label-price text-sm text-secondary font-bold">
                            $310.000 COP
                          </div>
                          <span className="inline-block px-1.5 py-0.5 rounded bg-blue-100 text-blue-800 text-[10px] font-bold">
                            Mercado Pago
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-caption font-semibold bg-amber-100 text-amber-900">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                            Novedad Destino
                          </span>
                        </td>
                        <td className="py-4 px-4 whitespace-nowrap">
                          <div className="flex items-center gap-1 text-xs font-semibold text-secondary">
                            <span>Coordinadora</span>
                            <span className="text-caption font-mono text-primary font-bold">
                              #9839912
                            </span>
                          </div>
                          <div className="font-caption text-[11px] text-rose-600">
                            Intento 1 reprogramado
                          </div>
                        </td>
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1">
                            <button
                              className="p-1.5 text-amber-600 hover:bg-amber-50 rounded-lg"
                              title="Ver Novedad"
                              onClick={(event) => {
                                triggerButtonPress(event.currentTarget);
                              }}
                            >
                              <MaterialSymbol
                                className="material-symbols-outlined text-[18px]"
                                data-icon="warning"
                              >
                                warning
                              </MaterialSymbol>
                            </button>
                            <button
                              className="p-1.5 text-emerald-600 hover:bg-emerald-50 rounded-lg"
                              title="WhatsApp Gu\xEDa"
                              onClick={(event) => {
                                triggerButtonPress(event.currentTarget);
                              }}
                            >
                              <MaterialSymbol
                                className="material-symbols-outlined text-[18px]"
                                data-icon="chat"
                              >
                                chat
                              </MaterialSymbol>
                            </button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Table Pagination Footer */}
                <div className="px-5 py-3 border-t border-surface-container flex items-center justify-between font-caption text-caption text-on-surface-variant bg-surface-container-low/30">
                  <span>Mostrando 4 de 24 despachos activos</span>
                  <div className="flex items-center gap-1">
                    <button
                      className="px-2 py-1 rounded border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container disabled:opacity-40"
                      disabled={true}
                      onClick={(event) => {
                        triggerButtonPress(event.currentTarget);
                      }}
                    >
                      Anterior
                    </button>
                    <button
                      className="px-2.5 py-1 rounded bg-primary text-on-primary font-bold"
                      onClick={(event) => {
                        triggerButtonPress(event.currentTarget);
                      }}
                    >
                      1
                    </button>
                    <button
                      className="px-2.5 py-1 rounded border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container"
                      onClick={(event) => {
                        triggerButtonPress(event.currentTarget);
                      }}
                    >
                      2
                    </button>
                    <button
                      className="px-2.5 py-1 rounded border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container"
                      onClick={(event) => {
                        triggerButtonPress(event.currentTarget);
                      }}
                    >
                      3
                    </button>
                    <button
                      className="px-2 py-1 rounded border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container"
                      onClick={(event) => {
                        triggerButtonPress(event.currentTarget);
                      }}
                    >
                      Siguiente
                    </button>
                  </div>
                </div>
              </div>
              {/* LOGISTICS DETAIL DRAWER & CARRIER CALCULATOR (4 cols on XL) */}
              <div className="xl:col-span-4 flex flex-col gap-5">
                {/* Detailed Order Card */}
                <div className="bg-surface-container-lowest rounded-2xl ocean-card-shadow border border-outline-variant/20 p-5 flex flex-col gap-4">
                  <div className="flex items-center justify-between pb-3 border-b border-surface-container">
                    <div>
                      <span className="font-caption text-caption text-primary font-bold">
                        EXPEDICI&Oacute;N SELECCIONADA
                      </span>
                      <h3 className="font-headline-sm text-base text-secondary font-semibold">
                        Pedido #SH-2024-1089
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-label-badge text-caption">
                      Empacado &amp; Sellado
                    </span>
                  </div>
                  {/* Destination Address in Colombia */}
                  <div className="bg-surface-container-low rounded-xl p-3.5 flex flex-col gap-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-secondary">
                      <MaterialSymbol
                        className="material-symbols-outlined text-[16px] text-primary"
                        data-icon="pin_drop"
                      >
                        pin_drop
                      </MaterialSymbol>
                      Nomenclatura Oficial de Entrega:
                    </div>
                    <div className="font-body-sm text-sm text-on-surface font-medium">
                      Carrera 4 # 67 - 28, Apto 502
                    </div>
                    <div className="font-caption text-caption text-on-surface-variant">
                      Barrio Chapinero Alto &bull; Bogot&aacute; D.C. &bull; C&oacute;d. Postal:
                      110231
                    </div>
                    <div className="font-caption text-[11px] text-primary font-medium mt-1">
                      Destinataria: Camila Rengifo &bull; M&oacute;vil: +57 311 849 2011
                    </div>
                  </div>
                  {/* Carrier Rate Comparison Live Calculator */}
                  <div className="flex flex-col gap-2">
                    <span className="font-label-badge text-caption text-on-surface-variant uppercase tracking-wider font-semibold">
                      Cotizaci&oacute;n de Transportadoras (Tiempo Real)
                    </span>
                    {/* Option 1 (Selected) */}
                    <div className="p-3 rounded-xl border-2 border-primary bg-primary/5 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2.5">
                        <MaterialSymbol
                          className="material-symbols-outlined text-primary text-[20px]"
                          data-icon="radio_button_checked"
                        >
                          radio_button_checked
                        </MaterialSymbol>
                        <div>
                          <div className="text-xs font-bold text-on-surface">
                            Coordinadora Mercantil
                          </div>
                          <div className="font-caption text-[11px] text-on-surface-variant">
                            Entrega estimada: 24 - 48h h&aacute;biles
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-label-price text-sm text-primary font-bold">
                          $14.500 COP
                        </div>
                        <span className="font-caption text-[10px] text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded font-medium">
                          Tarifa Convenio
                        </span>
                      </div>
                    </div>
                    {/* Option 2 */}
                    <div className="p-3 rounded-xl border border-outline-variant/30 hover:border-primary/50 bg-surface-container-low/40 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2.5">
                        <MaterialSymbol
                          className="material-symbols-outlined text-outline text-[20px]"
                          data-icon="radio_button_unchecked"
                        >
                          radio_button_unchecked
                        </MaterialSymbol>
                        <div>
                          <div className="text-xs font-semibold text-on-surface">
                            Inter Rapid&iacute;simo
                          </div>
                          <div className="font-caption text-[11px] text-on-surface-variant">
                            Entrega estimada: 24 - 36h h&aacute;biles
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-label-price text-sm text-secondary font-bold">
                          $13.800 COP
                        </div>
                        <span className="font-caption text-[10px] text-on-surface-variant">
                          Nacional
                        </span>
                      </div>
                    </div>
                    {/* Option 3 */}
                    <div className="p-3 rounded-xl border border-outline-variant/30 hover:border-primary/50 bg-surface-container-low/40 flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2.5">
                        <MaterialSymbol
                          className="material-symbols-outlined text-outline text-[20px]"
                          data-icon="radio_button_unchecked"
                        >
                          radio_button_unchecked
                        </MaterialSymbol>
                        <div>
                          <div className="text-xs font-semibold text-on-surface">Servientrega</div>
                          <div className="font-caption text-[11px] text-on-surface-variant">
                            Entrega estimada: 48h h&aacute;biles
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-label-price text-sm text-secondary font-bold">
                          $16.200 COP
                        </div>
                        <span className="font-caption text-[10px] text-on-surface-variant">
                          Servicio Ya
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* Fragile Tag Generator Preview */}
                  <div className="border border-amber-300 bg-amber-50/70 rounded-xl p-3 flex items-start gap-2.5">
                    <MaterialSymbol
                      className="material-symbols-outlined text-amber-700 text-[22px] flex-shrink-0"
                      data-icon="report_problem"
                    >
                      report_problem
                    </MaterialSymbol>
                    <div className="flex flex-col">
                      <span className="text-xs font-bold text-amber-900 leading-tight">
                        R&oacute;tulo Especial: Obra de Arte &amp; Fragilidad Alta
                      </span>
                      <span className="font-caption text-[11px] text-amber-800 mt-0.5 leading-snug">
                        Contiene resina polim&eacute;rica y pigmentos minerales marinos. Embalaje
                        protegido con viruta y burbuja biodegradable.
                      </span>
                    </div>
                  </div>
                  {/* Dispatch Action Buttons */}
                  <div className="flex flex-col gap-2 pt-2 border-t border-surface-container">
                    <button
                      className="w-full py-2.5 px-4 rounded-full bg-primary text-on-primary hover:opacity-95 transition-all font-body-sm text-body-sm font-semibold flex items-center justify-center gap-2 shadow-sm"
                      onClick={(event) => {
                        triggerButtonPress(event.currentTarget);
                      }}
                    >
                      <MaterialSymbol
                        className="material-symbols-outlined text-[18px]"
                        data-icon="local_shipping"
                      >
                        local_shipping
                      </MaterialSymbol>
                      Confirmar Despacho a Coordinadora
                    </button>
                    <button
                      className="w-full py-2 px-4 rounded-full border border-emerald-600 text-emerald-800 hover:bg-emerald-50 transition-colors font-body-sm text-body-sm font-medium flex items-center justify-center gap-2"
                      onClick={(event) => {
                        triggerButtonPress(event.currentTarget);
                      }}
                    >
                      <MaterialSymbol
                        className="material-symbols-outlined text-[18px] text-emerald-600"
                        data-icon="chat"
                      >
                        chat
                      </MaterialSymbol>
                      Notificar Gu&iacute;a por WhatsApp al Cliente
                    </button>
                    <button
                      className="w-full py-2 px-4 rounded-full border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container transition-colors font-body-sm text-body-sm flex items-center justify-center gap-2"
                      onClick={(event) => {
                        triggerButtonPress(event.currentTarget);
                      }}
                    >
                      <MaterialSymbol
                        className="material-symbols-outlined text-[18px]"
                        data-icon="print"
                      >
                        print
                      </MaterialSymbol>
                      Imprimir R&oacute;tulo &amp; Manifiesto DIAN
                    </button>
                  </div>
                </div>
                {/* Route Live Alerts Widget */}
                <div className="bg-surface-container-lowest rounded-2xl ocean-card-shadow border border-outline-variant/20 p-4 flex flex-col gap-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-label-badge text-caption text-secondary flex items-center gap-1.5 font-bold">
                      <MaterialSymbol
                        className="material-symbols-outlined text-[18px] text-primary"
                        data-icon="notifications_active"
                      >
                        notifications_active
                      </MaterialSymbol>
                      Novedades en Ruta Colombia
                    </span>
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-container-low text-xs flex flex-col gap-1">
                    <div className="flex items-center justify-between font-semibold text-secondary">
                      <span>Gu&iacute;a Coordinadora #9839912</span>
                      <span className="text-caption text-rose-600">Barranquilla</span>
                    </div>
                    <p className="font-caption text-caption text-on-surface-variant leading-snug">
                      Destinatario ausente en Carrera 58. Segundo intento programado
                      autom&aacute;ticamente para ma&ntilde;ana en horario de la ma&ntilde;ana.
                    </p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-surface-container-low text-xs flex flex-col gap-1">
                    <div className="flex items-center justify-between font-semibold text-secondary">
                      <span>V&iacute;a La L&iacute;nea &bull; Eje Cafetero</span>
                      <span className="text-caption text-emerald-700">Ruta Normal</span>
                    </div>
                    <p className="font-caption text-caption text-on-surface-variant leading-snug">
                      Paso habilitado para veh&iacute;culos de carga nacional. Despachos a Cali y
                      Pereira sin retrasos meteorol&oacute;gicos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        {/* FOOTER (Exact Match from Shared Components JSON Blueprint) */}
        <footer className="bg-surface-container dark:bg-inverse-surface text-primary dark:text-inverse-primary full-width border-t border-outline-variant/20 dark:border-outline/10 mt-auto">
          <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 lg:px-12 py-8 max-w-7xl mx-auto gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
              <span className="font-headline-md text-headline-md text-secondary dark:text-secondary-fixed tracking-tight">
                Seahorse Estudio Creativo by Andrea Sosa
              </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4 text-center font-body-sm text-body-sm">
              <Link
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors"
                href="/tienda"
              >
                Cat&aacute;logo
              </Link>
              <Link
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors"
                href="/personaliza"
              >
                Personalizaci&oacute;n
              </Link>
              <a
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors"
                href="#"
              >
                Env&iacute;os en Colombia
              </a>
              <a
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors"
                href="#"
              >
                T&eacute;rminos y Condiciones
              </a>
              <a
                className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors"
                href="#"
              >
                Privacidad
              </a>
              <Link
                className="text-primary dark:text-primary-fixed underline font-body-sm text-body-sm"
                href="/dashboard"
              >
                Panel Admin
              </Link>
            </div>
            <div className="text-caption font-caption text-on-surface-variant dark:text-surface-variant text-center md:text-right max-w-md">
              &copy; 2024 Seahorse Estudio Creativo by Andrea Sosa. Hecho a mano y con dise&ntilde;o
              de autor en Colombia. Todos los derechos reservados.
            </div>
          </div>
        </footer>
      </>
    </PrototypePage>
  );
}
