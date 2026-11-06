"use client";

import {
  filterCatalog,
  focusSearch,
  handleHomeInteraction,
  initializeHomePrototype,
  navigateTo,
  openProductModal,
  addToCart,
  toggleWishlist,
  toggleCartDrawer,
  toggleMobileMenu,
} from "./home-interactions";
import { useEffect } from "react";
import { MaterialSymbol } from "./material-symbol";
import { PrototypePage } from "./prototype-page";
import { THEMATIC_CATEGORIES } from "./catalog-categories";

export default function InicioPrototype() {
  useEffect(() => {
    initializeHomePrototype();
  }, []);

  return (
    <PrototypePage className="prototype-route-inicio scroll-smooth bg-background text-on-surface antialiased font-body-md min-h-screen flex flex-col selection:bg-primary-container/30 selection:text-primary" onClick={handleHomeInteraction}>
      <>{ /* ================= TOP APP BAR (From Shared Components JSON) ================= */ }
      <header className="docked full-width top-0 sticky z-50 bg-surface/90 dark:bg-inverse-surface/90 backdrop-blur-md shadow-sm dark:shadow-none border-b border-outline-variant/30 dark:border-outline/20">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 py-4 max-w-7xl mx-auto">
      { /* Brand Logo & Isotype */ }
      <a className="flex items-center gap-3 group transition-transform active:scale-95" href="#" onClick={event => { event.preventDefault(); navigateTo('home'); }}>
      <div className="w-20 h-20 rounded-full p-1 bg-surface-container-lowest border border-outline-variant/20 shadow-sm flex items-center justify-center overflow-hidden">
      <img alt="Logotipo oficial Seahorse Estudio Creativo by Andrea Sosa" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYa50HIwq_N1cUX6eP-g5MjqBAyJriFiaGjUg2XTSn7qGDhwXkHJTefH53FTtjS9ya_AzFGcB_-dHeAivThW9rWsAo-JGTrIKNb0X_krF-dLOy8pn43bGSxkB6W9x4DeK2-fk2uiRY-qKGdF0tnn0Gk5Qjd0Sz3zMp7C71vP1SzDrxalrksF5vQhrGIh5RsGbuUgsfNVOi_2ch1aRBre1QQUCIVGN6YFWLBv7MtW2gh_6BKetO2yk" />
      </div>
      <div className="w-40 h-14 flex items-center">
      <img alt="Seahorse Estudio Creativo by Andrea Sosa" className="w-full h-full object-contain object-left" src="/images/Tipografia%20Seahorse.png" />
      </div>
      </a>
      { /* Desktop Navigation Links (Direct match from Shared JSON) */ }
      <nav className="hidden md:flex items-center gap-6 lg:gap-8" id="main-nav-links">
      <button className="nav-item text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-headline-sm text-body-md transition-colors" id="nav-btn-home" onClick={event => { navigateTo('home'); }}>
                Inicio
              </button>
      <button className="nav-item text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" id="nav-btn-catalogo" onClick={event => { navigateTo('catalogo'); }}>
                Tienda
              </button>
      <button className="nav-item text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" id="nav-btn-personaliza" onClick={event => { navigateTo('personaliza'); }}>
                Personaliza
              </button>
      <button className="nav-item text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" id="nav-btn-nosotros" onClick={event => { navigateTo('nosotros'); }}>
                Sobre Nosotros
              </button>
      <button className="nav-item text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" id="nav-btn-contacto" onClick={event => { navigateTo('contacto'); }}>
                Contacto
              </button>
      <button className="nav-item text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high/60" id="nav-btn-admin" onClick={event => { navigateTo('admin'); }}>
      <MaterialSymbol className="material-symbols-outlined text-[16px]">admin_panel_settings</MaterialSymbol>
      <span className="font-label-badge text-label-badge">Admin</span>
      </button>
      </nav>
      { /* Trailing Action Cluster (Exact actions from Shared Components JSON) */ }
      <div className="flex items-center gap-3">
      { /* Badge Moneda COP Fija */ }
      <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-caption font-label-badge bg-surface-container text-on-surface-variant border border-outline-variant/30">
                COP ($)
              </span>
      { /* Search Icon Toggle */ }
      <button aria-label="Buscar" className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" onClick={focusSearch}>
      <MaterialSymbol className="material-symbols-outlined" data-icon="search">search</MaterialSymbol>
      </button>
      { /* Account Circle */ }
      <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" onClick={event => { navigateTo('admin'); }} title="Perfil Administrador">
      <MaterialSymbol className="material-symbols-outlined" data-icon="account_circle">account_circle</MaterialSymbol>
      </button>
      { /* Shopping Bag / Cart Action */ }
      <button className="relative flex items-center gap-2 px-3 py-2 rounded-full bg-primary text-on-primary hover:bg-surface-tint shadow-sm transition-transform active:scale-95" onClick={event => { toggleCartDrawer(true); }}>
      <MaterialSymbol className="material-symbols-outlined text-[20px]" data-icon="shopping_bag">shopping_bag</MaterialSymbol>
      <span className="font-body-sm text-body-sm font-medium hidden sm:inline">Carrito</span>
      <span className="w-5 h-5 rounded-full bg-surface-container-lowest text-primary text-[11px] font-bold flex items-center justify-center" id="cart-counter-badge">2</span>
      </button>
      { /* Mobile Menu Toggle Button */ }
      <button className="md:hidden w-10 h-10 flex items-center justify-center text-on-surface-variant" onClick={toggleMobileMenu}>
      <MaterialSymbol className="material-symbols-outlined" data-icon="menu" id="mobile-menu-icon">menu</MaterialSymbol>
      </button>
      </div>
      </div>
      { /* Mobile Navigation Drawer */ }
      <div className="hidden md:hidden px-6 py-4 bg-surface-container-low border-b border-outline-variant/20 flex flex-col gap-3" id="mobile-nav-panel">
      <button className="text-left py-2 font-headline-sm text-body-md text-primary font-medium" onClick={event => { navigateTo('home'); toggleMobileMenu(); }}>Inicio</button>
      <button className="text-left py-2 font-body-md text-body-md text-on-surface-variant" onClick={event => { navigateTo('catalogo'); toggleMobileMenu(); }}>Tienda / Cat&aacute;logo</button>
      <button className="text-left py-2 font-body-md text-body-md text-on-surface-variant" onClick={event => { navigateTo('personaliza'); toggleMobileMenu(); }}>Personaliza a Medida</button>
      <button className="text-left py-2 font-body-md text-body-md text-on-surface-variant" onClick={event => { navigateTo('nosotros'); toggleMobileMenu(); }}>Sobre Nosotros</button>
      <button className="text-left py-2 font-body-md text-body-md text-on-surface-variant" onClick={event => { navigateTo('contacto'); toggleMobileMenu(); }}>Contacto</button>
      <button className="text-left py-2 font-body-md text-body-md text-tertiary flex items-center gap-2" onClick={event => { navigateTo('admin'); toggleMobileMenu(); }}>
      <MaterialSymbol className="material-symbols-outlined text-sm">admin_panel_settings</MaterialSymbol> Panel Admin
            </button>
      </div>
      </header>
      { /* ================= MAIN ROUTED CONTENT CONTAINER ================= */ }
      <main className="flex-grow w-full">
      { /* ================= VIEW 1: INICIO (HOME EDITORIAL) ================= */ }
      <section className="tab-content active" id="view-home">
      { /* HERO ASIMÉTRICO EDITORIAL */ }
      <div className="relative overflow-hidden pt-8 pb-16 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
      { /* Columna Texto 7 cols */ }
      <div className="lg:col-span-7 flex flex-col items-start space-y-6 z-10">
      <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant text-caption font-label-badge tracking-wider uppercase">
      <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                    Atelier &amp; Taller de Autor en Colombia
                  </div>
      <h1 className="font-display-hero text-display-hero-mobile sm:text-display-hero text-on-surface font-semibold tracking-tight">
                    Arte, color y objetos &uacute;nicos hechos para inspirar.
                  </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                    Descubre creaciones contempor&aacute;neas elaboradas a mano por la dise&ntilde;adora <strong className="text-secondary font-medium">Andrea Sosa</strong>. Una exploraci&oacute;n po&eacute;tica entre resina cristalina, cuadros de t&eacute;cnica mixta, cemento blanco escult&oacute;rico, peluches y textiles estampados.
                  </p>
      <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
      <button className="px-8 py-3.5 rounded-full bg-primary-container text-surface-container-lowest font-body-md font-medium tracking-wide hover:bg-primary transition-all duration-300 shadow-md flex items-center justify-center gap-2 active:scale-95" onClick={event => { navigateTo('catalogo'); }}>
      <span>Explorar colecci&oacute;n</span>
      <MaterialSymbol className="material-symbols-outlined text-sm">arrow_forward</MaterialSymbol>
      </button>
      <button className="px-7 py-3.5 rounded-full border border-secondary text-secondary font-body-md font-medium hover:bg-surface-container transition-all duration-300 flex items-center justify-center gap-2 active:scale-95" onClick={event => { navigateTo('personaliza'); }}>
      <MaterialSymbol className="material-symbols-outlined text-sm">palette</MaterialSymbol>
      <span>Personaliza tu producto</span>
      </button>
      </div>
      { /* Mini stats de confianza */ }
      <div className="pt-6 grid grid-cols-3 gap-6 border-t border-outline-variant/30 w-full max-w-md">
      <div>
      <p className="font-headline-md text-headline-md font-bold text-secondary">100%</p>
      <p className="font-caption text-caption text-outline">Hecho a mano</p>
      </div>
      <div>
      {/* <p className="font-hea{dline-md text-headline-md font-bold text-primary">5 a 8 d&iacute;as</p> */}
      {/*<p className="font-caption text-caption text-outline">Tiempos de autor</p>*/}
      </div>
      <div>
      <p className="font-headline-md text-headline-md font-bold text-tertiary">Env&iacute;os</p>
      <p className="font-caption text-caption text-outline">Nacionales con gu&iacute;a</p>
      </div>
      </div>
      </div>
      { /* Columna Imagen Editorial 5 cols con Marco Orgánico */ }
      <div className="lg:col-span-5 relative">
      <div className="relative mx-auto max-w-md lg:max-w-none">
      { /* Sello distintivo flotante de Andrea Sosa */ }
      <div className="absolute -top-4 -right-4 z-20 w-24 h-24 rounded-full bg-surface-container-lowest/95 backdrop-blur-md p-3 artistic-shadow-2 flex flex-col items-center justify-center text-center border border-outline-variant/20 rotate-6">
      <img alt="Sello oficial Seahorse Estudio Creativo by Andrea Sosa" className="w-14 h-14 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYa50HIwq_N1cUX6eP-g5MjqBAyJriFiaGjUg2XTSn7qGDhwXkHJTefH53FTtjS9ya_AzFGcB_-dHeAivThW9rWsAo-JGTrIKNb0X_krF-dLOy8pn43bGSxkB6W9x4DeK2-fk2uiRY-qKGdF0tnn0Gk5Qjd0Sz3zMp7C71vP1SzDrxalrksF5vQhrGIh5RsGbuUgsfNVOi_2ch1aRBre1QQUCIVGN6YFWLBv7MtW2gh_6BKetO2yk" />
      <span className="text-[9px] font-label-badge text-secondary font-bold tracking-tight uppercase mt-0.5">Original</span>
      </div>
      { /* Imagen Principal de Inspiración del Taller */ }
      <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden artistic-shadow-2 border border-outline-variant/20 relative group bg-surface-container-low">
      <img alt="Florero y cuadro" className="w-full h-full object-contain object-center" src="/images/florero y cuadro.jpg" />
      <div className="absolute inset-0 bg-gradient-to-t from-on-surface/50 via-transparent to-transparent opacity-60" />
      <div className="absolute bottom-6 left-6 right-6 text-surface-container-lowest">
      </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      { /* MOSAICO OFICIAL DE LAS 5 CATEGORÍAS (Sin categoría independiente de accesorios) */ }
      <section className="py-16 bg-surface-container-low px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
      <span className="text-caption font-label-badge text-primary uppercase tracking-widest">Curadur&iacute;a por Material y T&eacute;cnica</span>
      <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight mt-1">
                      Las 5 Categor&iacute;as del Estudio
                    </h2>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mt-2 md:mt-0">
                    Explora universos t&aacute;ctiles creados para convivir en tus espacios cotidianos con belleza o para regalar a quienes amas.
                  </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      { /* 1. Cuadros */ }
      <div className="group cursor-pointer rounded-2xl bg-surface-container-lowest p-4 artistic-shadow-1 hover:artistic-shadow-2 transition-all duration-300 border border-outline-variant/15 flex flex-col" onClick={event => { filterCatalog('Cuadros'); }}>
      <div className="w-full aspect-square rounded-xl overflow-hidden relative mb-4 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Cuadro corazon" src="images/01cf20ba5ae58b56de15f51843dfc4d717eb5aa0e7.JPG"/>
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-secondary text-surface-container-lowest text-[11px] font-label-badge font-bold">Cat. 01</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Cuadros</h3>
      <p className="font-caption text-caption text-outline mt-1 flex-grow">Siluetas en papel de distintos colores en marcos de madera y acrílico.</p>
      <span className="font-label-badge text-caption text-primary flex items-center gap-1 mt-3">Ver obras <MaterialSymbol className="material-symbols-outlined text-[14px]">arrow_forward</MaterialSymbol></span>
      </div>
      { /* 2. Estampados */ }
      <div className="group cursor-pointer rounded-2xl bg-surface-container-lowest p-4 artistic-shadow-1 hover:artistic-shadow-2 transition-all duration-300 border border-outline-variant/15 flex flex-col" onClick={event => { filterCatalog('Estampados'); }}>
      <div className="w-full aspect-square rounded-xl overflow-hidden relative mb-4 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Estampados en tela para ropa o peluches" src="images/01a684720d54dc1d2cea2c0c1486cf69f57f8f3ab0.JPG" />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-secondary text-surface-container-lowest text-[11px] font-label-badge font-bold">Cat. 02</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Estampados</h3>
      <p className="font-caption text-caption text-outline mt-1 flex-grow">Dise&ntilde;os ilustrados de autor aplicados a prendas y piezas textiles.</p>
      <span className="font-label-badge text-caption text-primary flex items-center gap-1 mt-3">Ver estampados <MaterialSymbol className="material-symbols-outlined text-[14px]">arrow_forward</MaterialSymbol></span>
      </div>
      { /* 3. Resina */ }
      <div className="group cursor-pointer rounded-2xl bg-surface-container-lowest p-4 artistic-shadow-1 hover:artistic-shadow-2 transition-all duration-300 border border-outline-variant/15 flex flex-col" onClick={event => { filterCatalog('Resina'); }}>
      <div className="w-full aspect-square rounded-xl overflow-hidden relative mb-4 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Exquisite crystal clear epoxy resin botanical coaster and jewelry display piece. Encapsulated tiny real dried hydrangeas, gold leaf flakes, and translucent oceanic turquoise swirls illuminated by direct sunlight creating pure optical prism reflections." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZWrDPrAoMjfAuX5HDAqWIXm4nlRZpcx_IJLoIN8SbSkRFxpa5h1yFF4Ci9qwev5ww6VWUp4x9SornJ6bu2C0QqOLTNysj7zADH4Q5dW2BI9p8gA6JsP_IBlXMIq333gBkrImTE5mh9b7sRTDvukxjDvL0_jMJK-x7cLgCm7UFC2DJ68zywfxIaB0tnShPL4aJAJmhGWFyhWPTerliEPX2a4mTEpDX9EZFByJff0g" />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-secondary text-surface-container-lowest text-[11px] font-label-badge font-bold">Cat. 03</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Resina</h3>
      <p className="font-caption text-caption text-outline mt-1 flex-grow">Llaveros, aretes, juegos y objetos decorativos para el hogar.</p>
      <span className="font-label-badge text-caption text-primary flex items-center gap-1 mt-3">Ver piezas <MaterialSymbol className="material-symbols-outlined text-[14px]">arrow_forward</MaterialSymbol></span>
      </div>
      { /* 4. Cemento blanco */ }
      <div className="group cursor-pointer rounded-2xl bg-surface-container-lowest p-4 artistic-shadow-1 hover:artistic-shadow-2 transition-all duration-300 border border-outline-variant/15 flex flex-col" onClick={event => { filterCatalog('Cemento blanco'); }}>
      <div className="w-full aspect-square rounded-xl overflow-hidden relative mb-4 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Handcrafted architectural white cement arched vase and ribbed candle tray on an ivory stone pedestal. Smooth sealed matte stone texture, sculptural Scandinavian curves, minimalist modern aesthetic with warm studio backlighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbXH8jmzu_LQZnQqJIwH1uTnkFuzDdg2uppDCxOU-0FF-WOem0TQA1oR-alFSQVCQ3wSlVMm4xCyMj_9s-qQjokw8diyrBFOpma8i1MMw72iFUsZLSA1Z8k4kn11tGE7nSwbZO2A4Q9F3m-YDkm9PXnpypTlpGU28GwtSeCrgECbKGpdj-5V1KE3ZrNwnAK_Jc-RM9gDz3W6696uNnDPwA0-mNA8YfypFsvnF6mo0" />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-secondary text-surface-container-lowest text-[11px] font-label-badge font-bold">Cat. 04</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Cemento blanco</h3>
      <p className="font-caption text-caption text-outline mt-1 flex-grow">Floreros geom&eacute;tricos, bandejas onduladas y portavelas artesanales.</p>
      <span className="font-label-badge text-caption text-primary flex items-center gap-1 mt-3">Ver esculturas <MaterialSymbol className="material-symbols-outlined text-[14px]">arrow_forward</MaterialSymbol></span>
      </div>
      { /* 5. Papelería kawaii */ }
      <button className="group w-full text-left cursor-pointer rounded-2xl bg-surface-container-lowest p-4 artistic-shadow-1 hover:artistic-shadow-2 transition-all duration-300 border border-outline-variant/15 flex flex-col" onClick={() => filterCatalog('Papelería kawaii')} type="button">
      <div className="w-full aspect-square rounded-xl overflow-hidden relative mb-4 bg-[#FCE7F3] flex items-center justify-center">
      <MaterialSymbol className="material-symbols-outlined text-6xl text-[#C65F9B]">auto_awesome</MaterialSymbol>
      <span className="absolute bottom-4 right-4 text-[#C65F9B]"><MaterialSymbol className="material-symbols-outlined text-3xl">favorite</MaterialSymbol></span>
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-secondary text-surface-container-lowest text-[11px] font-label-badge font-bold">Cat. 05</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Papeler&iacute;a kawaii</h3>
      <p className="font-caption text-caption text-outline mt-1 flex-grow">Detalles ilustrados para escribir, decorar y regalar.</p>
      <span className="font-label-badge text-caption text-primary flex items-center gap-1 mt-3">Ver papeler&iacute;a <MaterialSymbol className="material-symbols-outlined text-[14px]">arrow_forward</MaterialSymbol></span>
      </button>
      </div>
      </div>
      </section>
      { /* CATEGORÍAS DE TEMPORADA Y TEMÁTICAS */ }
      <section className="py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
      <div>
      <span className="text-caption font-label-badge text-primary uppercase tracking-widest">Ideas para cada ocasi&oacute;n</span>
      <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight mt-1">Categor&iacute;as de Temporada y Tem&aacute;ticas</h2>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md mt-2 md:mt-0">Encuentra piezas especiales para celebrar fechas y momentos importantes.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {THEMATIC_CATEGORIES.map((category, index) => (
      <button className="group w-full text-left cursor-pointer rounded-2xl bg-surface-container-lowest p-4 artistic-shadow-1 hover:artistic-shadow-2 transition-all duration-300 border border-outline-variant/15 flex flex-col" key={category.name} onClick={() => filterCatalog(category.name)} type="button">
      <div className={`w-full aspect-square rounded-xl overflow-hidden relative mb-4 ${category.backgroundClass} flex items-center justify-center`}>
      <MaterialSymbol className={`material-symbols-outlined text-6xl ${category.iconClass}`}>{category.icon}</MaterialSymbol>
      <span className={`absolute bottom-4 right-4 ${category.iconClass}`}><MaterialSymbol className="material-symbols-outlined text-3xl">auto_awesome</MaterialSymbol></span>
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-secondary text-surface-container-lowest text-[11px] font-label-badge font-bold">Cat. {String(index + 6).padStart(2, "0")}</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">{category.name}</h3>
      <p className="font-caption text-caption text-outline mt-1 flex-grow">{category.description}</p>
      <span className="font-label-badge text-caption text-primary flex items-center gap-1 mt-3">Ver categor&iacute;a <MaterialSymbol className="material-symbols-outlined text-[14px]">arrow_forward</MaterialSymbol></span>
      </button>
      ))}
      </div>
      </div>
      </section>
      { /* GRILLA DE PRODUCTOS DESTACADOS */ }
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
      <div>
      <span className="text-caption font-label-badge text-secondary tracking-widest uppercase">Selecci&oacute;n Exclusiva</span>
      <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight mt-1">
                    Obras y Objetos Destacados
                  </h2>
      </div>
      <button className="mt-4 sm:mt-0 font-body-sm text-body-sm text-primary font-medium flex items-center gap-1.5 hover:underline" onClick={event => { navigateTo('catalogo'); }}>
      <span>Ver cat&aacute;logo completo (24 piezas)</span>
      <MaterialSymbol className="material-symbols-outlined text-sm">east</MaterialSymbol>
      </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="featured-products-grid">
      { /* Item 1: Cuadro Virgen */ }
      <div className="group bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/15 artistic-shadow-1 hover:artistic-shadow-2 transition-all flex flex-col justify-between">
      <div>
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-surface-container-low">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Cuadro virgen" src="images/0197345be6c5208dd361de97febfb42531c7f40b63.JPG" />
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-label-badge uppercase tracking-wider bg-[#83D9D9]/40 text-[#173D68] font-bold">
                        Disponible
                      </span>
      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-outline hover:text-error transition-colors" onClick={event => { toggleWishlist(event.currentTarget); }}>
      <MaterialSymbol className="material-symbols-outlined text-sm">favorite</MaterialSymbol>
      </button>
      </div>
      <p className="font-caption text-caption text-outline">Arte en papel</p>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">Cuadros de la virgen</h3>
      <p className="font-caption text-caption text-on-surface-variant line-clamp-2 mt-1">Tamaño 20 x 25 cm, marco en MDF, diseño personalizable</p>
      </div>
      <div className="mt-4 pt-3 border-t border-outline-variant/15 flex items-center justify-between">
      <div>
      <span className="text-[11px] text-outline block">Precio colombia</span>
      <span className="font-label-price text-label-price text-on-surface font-semibold">$140.000 COP</span>
      </div>
      <div className="flex gap-1.5">
      <button className="w-9 h-9 rounded-full border border-outline-variant/40 flex items-center justify-center text-secondary hover:bg-surface-container transition-colors" onClick={event => { openProductModal('cuadros-virgen'); }} title="Vista r\xE1pida">
      <MaterialSymbol className="material-symbols-outlined text-sm">visibility</MaterialSymbol>
      </button>
      <button className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-surface-tint shadow-sm transition-transform active:scale-90" onClick={event => { addToCart('Cuadros de la virgen', 140000, 'Papel'); }} title="Agregar al carrito">
      <MaterialSymbol className="material-symbols-outlined text-sm">add</MaterialSymbol>
      </button>
      </div>
      </div>
      </div>
      { /* Item 2: Cuadro Amor */ }
      <div className="group bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/15 artistic-shadow-1 hover:artistic-shadow-2 transition-all flex flex-col justify-between">
      <div>
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-surface-container-low">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Cuadro amor" src="images/01cf20ba5ae58b56de15f51843dfc4d717eb5aa0e7.JPG" />
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-label-badge uppercase tracking-wider bg-[#F5D35E]/40 text-[#281B18] font-bold">
                        Bajo pedido
                      </span>
      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-outline hover:text-error transition-colors" onClick={event => { toggleWishlist(event.currentTarget); }}>
      <MaterialSymbol className="material-symbols-outlined text-sm">favorite</MaterialSymbol>
      </button>
      </div>
      <p className="font-caption text-caption text-outline">Arte en papel</p>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">Cuadro Amor</h3>
      <p className="font-caption text-caption text-on-surface-variant line-clamp-2 mt-1">Tamaño 20 x 25 cm, marco en MDF, ideal para regalar a quien mas quieres.</p>
      </div>
      <div className="mt-4 pt-3 border-t border-outline-variant/15 flex items-center justify-between">
      <div>
      <span className="text-[11px] text-outline block">Precio colombia</span>
      <span className="font-label-price text-label-price text-on-surface font-semibold">$140.000 COP</span>
      </div>
      <div className="flex gap-1.5">
      <button className="w-9 h-9 rounded-full border border-outline-variant/40 flex items-center justify-center text-secondary hover:bg-surface-container transition-colors" onClick={event => { openProductModal('florero-arco'); }} title="Vista r\xE1pida">
      <MaterialSymbol className="material-symbols-outlined text-sm">visibility</MaterialSymbol>
      </button>
      <button className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-surface-tint shadow-sm transition-transform active:scale-90" onClick={event => { addToCart('Florero Escultórico Arco Sol', 140000, 'Cemento blanco'); }} title="Agregar al carrito">
      <MaterialSymbol className="material-symbols-outlined text-sm">add</MaterialSymbol>
      </button>
      </div>
      </div>
      </div>
      { /* Item 3: Cuadros */ }
      <div className="group bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/15 artistic-shadow-1 hover:artistic-shadow-2 transition-all flex flex-col justify-between">
      <div>
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-surface-container-low">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Handcrafted sculptural arch vase made of pure white cast concrete with an organic ribbed base holding delicate dried lavender stems. Minimalist architectural still life in warm sunny room." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIRHsNj0FbSzjKSr8PQhpn6jOMnEbKMJFYjxR_7SPgXTqxdFjhon4d0j6HsYtakuFKECaO1_rmRiNOA9gO5fgYImCQrMO9a8pvGE851WYCIkqxIj_RYdnXpKP-3Vse3UAltvHw0KgcmU16ng9CZ900JgWxYWx61mOUdSzSZ6THNQrs20SiVshzSCwlGD8pzkSFUjiVGdu0AWOicVhUBpKCn9CkoqcarCEHmVdEDL0" />

      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-label-badge uppercase tracking-wider bg-[#B7A1DF]/40 text-[#173D68] font-bold">
                        Personalizable
                      </span>
      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-outline hover:text-error transition-colors" onClick={event => { toggleWishlist(event.currentTarget); }}>
      <MaterialSymbol className="material-symbols-outlined text-sm">favorite</MaterialSymbol>
      </button>
      </div>
      <p className="font-caption text-caption text-outline">Cemento Blanco Sellado</p>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">Florero Escultórico</h3>
      <p className="font-caption text-caption text-on-surface-variant line-clamp-2 mt-1">Moldeado a mano en cemento blanco de alta densidad y acabado satinado.</p>
      </div>
      <div className="mt-4 pt-3 border-t border-outline-variant/15 flex items-center justify-between">
      <div>
      <span className="text-[11px] text-outline block">Precio colombia</span>
      <span className="font-label-price text-label-price text-on-surface font-semibold">$380.000 COP</span>
      </div>
      <div className="flex gap-1.5">
      <button className="w-9 h-9 rounded-full border border-outline-variant/40 flex items-center justify-center text-secondary hover:bg-surface-container transition-colors" onClick={event => { openProductModal('lienzo-mareas'); }} title="Vista r\xE1pida">
      <MaterialSymbol className="material-symbols-outlined text-sm">visibility</MaterialSymbol>
      </button>
      <button className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-surface-tint shadow-sm transition-transform active:scale-90" onClick={event => { addToCart('Lienzo Mareas de Andrea', 380000, 'Cuadros'); }} title="Agregar al carrito">
      <MaterialSymbol className="material-symbols-outlined text-sm">add</MaterialSymbol>
      </button>
      </div>
      </div>
      </div>
      { /* Item 4: Estampados textiles */ }
      <div className="group bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/15 artistic-shadow-1 hover:artistic-shadow-2 transition-all flex flex-col justify-between">
      <div>
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-surface-container-low">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Dominó" src="images/Domino.JPG" />
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-label-badge uppercase tracking-wider bg-surface-container text-outline line-through font-bold">
                        Agotado
                      </span>
      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-outline hover:text-error transition-colors" onClick={event => { toggleWishlist(event.currentTarget); }}>
      <MaterialSymbol className="material-symbols-outlined text-sm">favorite</MaterialSymbol>
      </button>
      </div>
      <p className="font-caption text-caption text-outline">Arte en resina para Juegos</p>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">Dominó</h3>
      <p className="font-caption text-caption text-on-surface-variant line-clamp-2 mt-1">Ideal para entretenimiento en tu hogar y como detalle.</p>
      </div>
      <div className="mt-4 pt-3 border-t border-outline-variant/15 flex items-center justify-between">
      <div>
      <span className="text-[11px] text-outline block">Precio colombia</span>
      <span className="font-label-price text-label-price text-on-surface font-semibold">$120.000 COP</span>
      </div>
      <div className="flex gap-1.5">
      <button className="px-3 py-1.5 rounded-full text-caption font-label-badge text-primary bg-primary-fixed/40 hover:bg-primary-fixed transition-colors" onClick={event => { navigateTo('personaliza'); }} title="Pedir personalizado">
                        Encargar
                      </button>
      </div>
      </div>
      </div>
      </div>
      </section>
      { /* CALLOUT EDITORIAL: TALLER A TU MEDIDA (PERSONALIZACIÓN) */ }
      <section className="py-16 px-6 lg:px-12 bg-surface-container">
      <div className="max-w-7xl mx-auto rounded-3xl bg-surface-container-lowest p-8 lg:p-14 artistic-shadow-2 border border-outline-variant/20 relative overflow-hidden">
      <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-primary-fixed/20 pointer-events-none blur-3xl" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
      <div className="lg:col-span-8 space-y-4">
      <span className="px-3.5 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-badge text-caption uppercase tracking-wider">
                      Taller a Tu Medida
                    </span>
      <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight">
                      &iquest;Buscas una pieza irrepetible para un espacio o un regalo memorable?
                    </h2>
      <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                      En Seahorse Estudio Creativo co-creamos contigo. Elige gamas de color de temporada, flores en papel de distintos colores, leyendas grabadas o dimensiones especiales adaptadas a tus necesidades.
                    </p>
      <div className="flex flex-wrap gap-4 pt-2">
      <button className="px-7 py-3 rounded-full bg-primary text-on-primary font-body-md font-medium hover:bg-surface-tint shadow-sm transition-all active:scale-95 flex items-center gap-2" onClick={event => { navigateTo('personaliza'); }}>
      <span>Iniciar taller interactivo</span>
      <MaterialSymbol className="material-symbols-outlined text-sm">tune</MaterialSymbol>
      </button>
      <a className="px-7 py-3 rounded-full border border-outline-variant text-on-surface hover:bg-surface-container font-body-md font-medium transition-all flex items-center gap-2" href="https://wa.me/573000000000?text=Hola%20Andrea,%20quiero%20cotizar%20un%20proyecto%20personalizado" target="_blank">
      <MaterialSymbol className="material-symbols-outlined text-sm text-green-600">chat</MaterialSymbol>
      <span>Hablar directo por WhatsApp</span>
      </a>
      </div>
      </div>
      <div className="lg:col-span-4 flex justify-center">
      <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-surface-container-low p-4 flex items-center justify-center border-2 border-dashed border-secondary/30">
      <img alt="Logotipo Seahorse" className="w-28 h-28 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYa50HIwq_N1cUX6eP-g5MjqBAyJriFiaGjUg2XTSn7qGDhwXkHJTefH53FTtjS9ya_AzFGcB_-dHeAivThW9rWsAo-JGTrIKNb0X_krF-dLOy8pn43bGSxkB6W9x4DeK2-fk2uiRY-qKGdF0tnn0Gk5Qjd0Sz3zMp7C71vP1SzDrxalrksF5vQhrGIh5RsGbuUgsfNVOi_2ch1aRBre1QQUCIVGN6YFWLBv7MtW2gh_6BKetO2yk" />
      <span className="absolute -bottom-2 bg-secondary text-surface-container-lowest px-4 py-1 rounded-full text-caption font-label-badge font-bold">100% Original</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      { /* MANIFIESTO & HISTORIA DE MARCA BY ANDREA SOSA */ }
      <section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      <div className="lg:col-span-5 order-2 lg:order-1">
      <div className="relative rounded-3xl overflow-hidden aspect-[4/5] artistic-shadow-2 border border-outline-variant/20">
      <img className="w-full h-full object-cover" data-alt="Ilustracion Andrea Sosa" src="images/9C642C46-FF97-4F00-A976-005C189CF20E.PNG" />
      <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl glass-panel border border-outline-variant/30 text-on-surface">
      <p className="font-headline-sm text-headline-sm font-semibold text-secondary">Andrea Sosa</p>
      <p className="font-caption text-caption text-outline">Fundadora y Directora de Arte de Seahorse</p>
      </div>
      </div>
      </div>
      <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
      <span className="text-caption font-label-badge text-primary uppercase tracking-widest">Manifiesto de Autor</span>
      <h2 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight">
                    &quot;El mar y la materia org&aacute;nica como lenguaje de calma y autenticidad&quot;
                  </h2>
      <div className="space-y-4 font-body-md text-body-md text-on-surface-variant leading-relaxed">
      <p>
                      Seahorse naci&oacute; como una b&uacute;squeda visceral por rescatar la cadencia lenta de los oficios artesanales en un entorno saturado de producci&oacute;n en serie. Cada objeto que sale de nuestro taller en Colombia lleva consigo horas de trabajo manual y experimentaci&oacute;n qu&iacute;mica con resinas de alta pureza y cementos arquitect&oacute;nicos, pulidos a mano.
                    </p>
      <p>
                      El caballito de mar, s&iacute;mbolo central de nuestra identidad, representa la fragilidad resiliente, la fidelidad al detalle y la belleza de lo org&aacute;nico. No creamos productos descartables: concebimos compa&ntilde;eros de vida que aportan serenidad visual y memorias tangibles a tu hogar y a quienes desees regalar estas obras de arte.
                    </p>
      </div>
      <div className="pt-4 flex items-center gap-4">
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm text-secondary italic font-serif">Andrea Sosa</span>
      <span className="font-caption text-caption text-outline">Dise&ntilde;adora &amp; Curadora Principal</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      { /* TESTIMONIOS REALES MOCKUP 
      <section className="py-16 bg-surface-container-low px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-12">
      <span className="px-3 py-1 rounded-full bg-surface-container text-outline text-[11px] font-label-badge uppercase tracking-wider">Demostraci&oacute;n / Mockups reales de clientes</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-2">Lo que dicen quienes habitan nuestras piezas</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      { /* Review 1 
      <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 artistic-shadow-1 flex flex-col justify-between">
      <div className="space-y-3">
      <div className="flex text-amber-500 text-sm">
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                        &quot;El set de posavasos bot&aacute;nicos super&oacute; cualquier expectativa. La transparencia de la resina parece vidrio &oacute;ptico y las flores conservan un color vivo impresionante. Lleg&oacute; a Bogot&aacute; perfectamente empacado.&quot;
                      </p>
      </div>
      <div className="mt-6 pt-4 border-t border-outline-variant/15">
      <p className="font-body-sm font-semibold text-on-surface">Camila Rengifo</p>
      <p className="font-caption text-caption text-outline">Bogot&aacute; D.C. &middot; Compr&oacute; Set Resina</p>
      </div>
      </div>
      { /* Review 2 
      <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 artistic-shadow-1 flex flex-col justify-between">
      <div className="space-y-3">
      <div className="flex text-amber-500 text-sm">
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                        &quot;Encargu&eacute; un florero en cemento blanco personalizado para mi nuevo consultorio en Medell&iacute;n. La textura es sedosa, pesada y arquitect&oacute;nica. Andrea me mantuvo al tanto con fotos del proceso.&quot;
                      </p>
      </div>
      <div className="mt-6 pt-4 border-t border-outline-variant/15">
      <p className="font-body-sm font-semibold text-on-surface">Sebasti&aacute;n Montoya</p>
      <p className="font-caption text-caption text-outline">Medell&iacute;n, Antioquia &middot; Encargo a Medida</p>
      </div>
      </div>
      { /* Review 3 
      <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 artistic-shadow-1 flex flex-col justify-between">
      <div className="space-y-3">
      <div className="flex text-amber-500 text-sm">
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      <MaterialSymbol className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</MaterialSymbol>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant italic">
                        &quot;El peluche coleccionable textil es una ternura de alt&iacute;simo nivel. Se nota el trabajo paciente en cada costura y los materiales son ultra suaves. Un regalo inigualable.&quot;
                      </p>
      </div>
      <div className="mt-6 pt-4 border-t border-outline-variant/15">
      <p className="font-body-sm font-semibold text-on-surface">Valeria Duque</p>
      <p className="font-caption text-caption text-outline">Cali, Valle &middot; Coleccionista de Arte</p>
      </div>
      </div>
      </div>
      </div>
      </section>
      </section>*/ }
      </section>
      </main>
      { /* ================= FOOTER EDITORIAL (From Shared Components JSON) ================= */ }
      <footer className="full-width bg-surface-container dark:bg-inverse-surface border-t border-outline-variant/20 dark:border-outline/10 flat no shadows">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 lg:px-12 py-8 max-w-7xl mx-auto gap-4">
      { /* Brand & Copyright from JSON */ }
      <div className="flex items-center gap-4 text-center md:text-left">
      <div className="w-10 h-10 rounded-full p-1 bg-surface-container-lowest flex items-center justify-center overflow-hidden border border-outline-variant/30 flex-shrink-0">
      <img alt="Logotipo oficial Seahorse Estudio Creativo by Andrea Sosa" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYa50HIwq_N1cUX6eP-g5MjqBAyJriFiaGjUg2XTSn7qGDhwXkHJTefH53FTtjS9ya_AzFGcB_-dHeAivThW9rWsAo-JGTrIKNb0X_krF-dLOy8pn43bGSxkB6W9x4DeK2-fk2uiRY-qKGdF0tnn0Gk5Qjd0Sz3zMp7C71vP1SzDrxalrksF5vQhrGIh5RsGbuUgsfNVOi_2ch1aRBre1QQUCIVGN6YFWLBv7MtW2gh_6BKetO2yk" />
      </div>
      <div>
      <p className="font-headline-sm text-headline-sm text-secondary dark:text-secondary-fixed tracking-tight font-medium">
                  Seahorse Estudio Creativo by Andrea Sosa
                </p>
      <p className="font-body-sm text-body-sm text-outline mt-0.5">
                  &copy; 2024 Seahorse Estudio Creativo by Andrea Sosa. Hecho a mano y con dise&ntilde;o de autor en Colombia. Todos los derechos reservados.
                </p>
      </div>
      </div>
      { /* Links from Shared Components JSON */ }
      <nav className="flex flex-wrap items-center justify-center gap-4 text-body-sm">
      <button className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-sm text-body-sm" onClick={event => { navigateTo('catalogo'); }}>Cat&aacute;logo</button>
      <button className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-sm text-body-sm" onClick={event => { navigateTo('personaliza'); }}>Personalizaci&oacute;n</button>
      <button className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-sm text-body-sm" onClick={event => { alert('Envíos a todo el territorio colombiano asegurados con Coordinadora, Envía e Interrapidísimo.'); }}>Env&iacute;os en Colombia</button>
      <button className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-sm text-body-sm" onClick={event => { alert('Términos y condiciones de obras de autor y pedidos personalizados.'); }}>T&eacute;rminos y Condiciones</button>
      <button className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-sm text-body-sm" onClick={event => { alert('Política de tratamiento de datos personales conforme a la ley colombiana 1581 de 2012.'); }}>Privacidad</button>
      <button className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-sm text-body-sm font-medium underline" onClick={event => { navigateTo('admin'); }}>Panel Admin</button>
      </nav>
      </div>
      </footer>
      { /* ================= CARRITO LATERAL (DRAWER FLOTANTE) ================= */ }
      <div className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-50 hidden transition-opacity" id="cart-drawer-overlay" onClick={event => { toggleCartDrawer(false); }} />
      <div className="fixed top-0 right-0 h-full w-full max-w-md bg-surface-container-lowest z-50 shadow-2xl transform translate-x-full transition-transform duration-300 flex flex-col" id="cart-drawer-panel">
      <div className="p-6 border-b border-outline-variant/20 flex items-center justify-between">
      <div className="flex items-center gap-2">
      <MaterialSymbol className="material-symbols-outlined text-primary text-2xl">shopping_bag</MaterialSymbol>
      <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Carrito de Obras</h2>
      </div>
      <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-surface-container text-outline" onClick={event => { toggleCartDrawer(false); }}>
      <MaterialSymbol className="material-symbols-outlined">close</MaterialSymbol>
      </button>
      </div>
      { /* Lista de Items en Carrito */ }
      <div className="flex-grow overflow-y-auto p-6 space-y-4" id="cart-drawer-items">
      { /* Rellenado por JS */ }
      </div>
      { /* Pie del Drawer */ }
      <div className="p-6 border-t border-outline-variant/20 bg-surface-container-low space-y-4">
      <div className="flex justify-between items-center">
      <span className="font-body-md text-on-surface-variant">Subtotal estimado:</span>
      <span className="font-label-price text-label-price text-on-surface font-bold" id="drawer-subtotal-price">$205.000 COP</span>
      </div>
      <p className="text-caption text-outline">Los gastos de env&iacute;o se calcular&aacute;n seg&uacute;n tu ciudad en Colombia en el paso siguiente.</p>
      <button className="w-full py-3.5 rounded-full bg-primary text-on-primary font-body-md font-semibold hover:bg-surface-tint shadow-md transition-all flex items-center justify-center gap-2" onClick={event => { toggleCartDrawer(false); navigateTo('checkout'); }}>
      <span>Ir a pagar en Colombia</span>
      <MaterialSymbol className="material-symbols-outlined text-sm">arrow_forward</MaterialSymbol>
      </button>
      </div>
      </div>
      { /* ================= JAVASCRIPT: ROUTING DINÁMICO & INTERACTIVIDAD ================= */ }</>
    </PrototypePage>
  );
}
