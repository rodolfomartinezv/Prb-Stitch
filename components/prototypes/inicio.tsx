"use client";

import { initializeHomePrototype, handleHomeInteraction, renderCatalogItems, navigateTo, filterCatalog, applyCatalogFilters, updatePriceFilter, resetFilters, sortCatalog, openProductDetail, openProductModal, switchDetailImage, selectVariant, addCurrentDetailToCart, addToCart, removeCartItem, updateCartUI, toggleCartDrawer, updateCheckoutView, updateShippingCost, processPaymentSimulator, goToCustomStep, highlightCatCard, simulateUpload, submitCustomForm, switchAdminTab, toggleMFAStatus, toggleStockAlert, focusSearch, toggleWishlist, toggleMobileMenu } from "./home-interactions";
import { useEffect } from "react";
import { MaterialSymbol } from "./material-symbol";
import { PrototypePage } from "./prototype-page";

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
      <div className="w-11 h-11 rounded-full p-1 bg-surface-container-lowest border border-outline-variant/20 shadow-sm flex items-center justify-center overflow-hidden">
      <img alt="Logotipo oficial Seahorse Estudio Creativo by Andrea Sosa" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYa50HIwq_N1cUX6eP-g5MjqBAyJriFiaGjUg2XTSn7qGDhwXkHJTefH53FTtjS9ya_AzFGcB_-dHeAivThW9rWsAo-JGTrIKNb0X_krF-dLOy8pn43bGSxkB6W9x4DeK2-fk2uiRY-qKGdF0tnn0Gk5Qjd0Sz3zMp7C71vP1SzDrxalrksF5vQhrGIh5RsGbuUgsfNVOi_2ch1aRBre1QQUCIVGN6YFWLBv7MtW2gh_6BKetO2yk" />
      </div>
      <div className="flex flex-col">
      <span className="font-headline-md text-headline-md text-secondary dark:text-secondary-fixed tracking-tight font-medium leading-none">
                  Seahorse
                </span>
      <span className="font-caption text-caption text-outline tracking-wider uppercase mt-0.5">Estudio Creativo &middot; by Andrea Sosa</span>
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
                    Descubre creaciones contempor&aacute;neas elaboradas a mano por la dise&ntilde;adora <strong className="text-secondary font-medium">Andrea Sosa</strong>. Una exploraci&oacute;n po&eacute;tica entre resina cristalina, cuadros de t&eacute;cnica mixta, cemento blanco escult&oacute;rico, peluches coleccionables y textiles ilustrados.
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
      <p className="font-caption text-caption text-outline">Hecho a mano en CO</p>
      </div>
      <div>
      <p className="font-headline-md text-headline-md font-bold text-primary">5 a 8 d&iacute;as</p>
      <p className="font-caption text-caption text-outline">Tiempos de autor</p>
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
      <img alt="Sello oficial Seahorse Estudio Creativo by Andrea Sosa" className="w-8 h-8 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYa50HIwq_N1cUX6eP-g5MjqBAyJriFiaGjUg2XTSn7qGDhwXkHJTefH53FTtjS9ya_AzFGcB_-dHeAivThW9rWsAo-JGTrIKNb0X_krF-dLOy8pn43bGSxkB6W9x4DeK2-fk2uiRY-qKGdF0tnn0Gk5Qjd0Sz3zMp7C71vP1SzDrxalrksF5vQhrGIh5RsGbuUgsfNVOi_2ch1aRBre1QQUCIVGN6YFWLBv7MtW2gh_6BKetO2yk" />
      <span className="text-[9px] font-label-badge text-secondary font-bold tracking-tight uppercase mt-0.5">Original</span>
      </div>
      { /* Imagen Principal de Inspiración del Taller */ }
      <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden artistic-shadow-2 border border-outline-variant/20 relative group bg-surface-container-low">
      <img alt="Florero blanco y vela sobre una bandeja rosa, junto a un cuadro de flores artesanales." className="w-full h-full object-contain object-center" src="/images/florero y cuadro.jpg" />
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
                    Explora universos t&aacute;ctiles creados para convivir en tus espacios cotidianos con belleza y calidez.
                  </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
      { /* 1. Cuadros */ }
      <div className="group cursor-pointer rounded-2xl bg-surface-container-lowest p-4 artistic-shadow-1 hover:artistic-shadow-2 transition-all duration-300 border border-outline-variant/15 flex flex-col" onClick={event => { filterCatalog('Cuadros'); }}>
      <div className="w-full aspect-square rounded-xl overflow-hidden relative mb-4 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Contemporary mixed media canvas artwork hanging in a gallery. Features soft botanical acrylic paint strokes, intricate organic thread embroidery, and oceanic turquoise and ivory textures. Bright soft studio illumination showcasing tactile relief and handmade details with modern art collector refinement." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOZMgHnrriMtymY1WwXu7ag8Sv8LWi7ifHwoz2ulrABTbnCfDMxDAAsqnh6GSm99fGRxOjAUtO-plxOPfgIFumxt9aCnMvZS-kCvggaU-iTcS8OcEbbXgv2x_uaZscwAkHtlr8D-zk1Wak5iz_anWKtbZzUT47FyHMJ_oa1Dmy8zYp69km89e6Ev93OVsO100MCWTbehf5pk2JqoSeU_B7lQNEtpe4oOycNOPbu0Y" />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-secondary text-surface-container-lowest text-[11px] font-label-badge font-bold">Cat. 01</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Cuadros</h3>
      <p className="font-caption text-caption text-outline mt-1 flex-grow">Arte textil, bot&aacute;nico y acr&iacute;licos sobre lienzo de lino crudo.</p>
      <span className="font-label-badge text-caption text-primary flex items-center gap-1 mt-3">Ver 12 obras <MaterialSymbol className="material-symbols-outlined text-[14px]">arrow_forward</MaterialSymbol></span>
      </div>
      { /* 2. Ropa */ }
      <div className="group cursor-pointer rounded-2xl bg-surface-container-lowest p-4 artistic-shadow-1 hover:artistic-shadow-2 transition-all duration-300 border border-outline-variant/15 flex flex-col" onClick={event => { filterCatalog('Ropa'); }}>
      <div className="w-full aspect-square rounded-xl overflow-hidden relative mb-4 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High-end artisanal embroidered relaxed-fit cotton shirt. Detailed close-up showing custom illustrated coastal motifs, fine thread work, delicate seahorse nuances, and warm ivory fabric tones in a bright natural light editorial setting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGHQCkhZZn-GX_Eu8WSCe42RIPqpSiN0Moc_dqv68ID1apeGqDTwLS7Lhdq0bRcMaWtVmvg6jZ3LAPe3Xk8RmO-fRCnY0zzmW4sAW0Wm6w3MFIQNf0nR5H_WQrCzHeq4kxINBRbu6RMQQzNe1A2IreDNQYqUsg7FRWrFO857ryQzSmDMGE2py6RvLZuLb92R_jMrdbcY3Lph0NHVeH0YZAzqxe2UVKV9wqMBjdaXA" />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-secondary text-surface-container-lowest text-[11px] font-label-badge font-bold">Cat. 02</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Ropa</h3>
      <p className="font-caption text-caption text-outline mt-1 flex-grow">Prendas ilustradas de autor, bordadas a mano en fibras nobles.</p>
      <span className="font-label-badge text-caption text-primary flex items-center gap-1 mt-3">Ver prendas <MaterialSymbol className="material-symbols-outlined text-[14px]">arrow_forward</MaterialSymbol></span>
      </div>
      { /* 3. Peluches */ }
      <div className="group cursor-pointer rounded-2xl bg-surface-container-lowest p-4 artistic-shadow-1 hover:artistic-shadow-2 transition-all duration-300 border border-outline-variant/15 flex flex-col" onClick={event => { filterCatalog('Peluches'); }}>
      <div className="w-full aspect-square rounded-xl overflow-hidden relative mb-4 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Charming hand-crafted textile collectible plush doll designed by an artist. Made from soft textured linen, organic knit fabrics in soft lavender, mustard, and turquoise tones, resting on a wooden studio shelf with artful character details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhlmrlPwL6sdgfjuTPXJjfygmYOHikF9WZtxlycScDDAOF2p1i9Wc4YlnhQRKP6zIdXRnvDx5DSK4ICvWmJeXRwvvxBfm-5o8njG5Jt6h6kIUqp5gtAv7oBZMltIPbd7ts0l5-kxGp6Hx3N0OQavs51V7qD12BgmRXDvd9p3Os_bvLQRiBFa7yTMPsDAKGBLPqAEv1RSOuzaI-wR4h8ZMfmIPYpjN6kDpc4eCP4lk" />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-secondary text-surface-container-lowest text-[11px] font-label-badge font-bold">Cat. 03</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Peluches</h3>
      <p className="font-caption text-caption text-outline mt-1 flex-grow">Personajes textiles de colecci&oacute;n, bordados y confeccionados a mano.</p>
      <span className="font-label-badge text-caption text-primary flex items-center gap-1 mt-3">Ver colecci&oacute;n <MaterialSymbol className="material-symbols-outlined text-[14px]">arrow_forward</MaterialSymbol></span>
      </div>
      { /* 4. Resina */ }
      <div className="group cursor-pointer rounded-2xl bg-surface-container-lowest p-4 artistic-shadow-1 hover:artistic-shadow-2 transition-all duration-300 border border-outline-variant/15 flex flex-col" onClick={event => { filterCatalog('Resina'); }}>
      <div className="w-full aspect-square rounded-xl overflow-hidden relative mb-4 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Exquisite crystal clear epoxy resin botanical coaster and jewelry display piece. Encapsulated tiny real dried hydrangeas, gold leaf flakes, and translucent oceanic turquoise swirls illuminated by direct sunlight creating pure optical prism reflections." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZWrDPrAoMjfAuX5HDAqWIXm4nlRZpcx_IJLoIN8SbSkRFxpa5h1yFF4Ci9qwev5ww6VWUp4x9SornJ6bu2C0QqOLTNysj7zADH4Q5dW2BI9p8gA6JsP_IBlXMIq333gBkrImTE5mh9b7sRTDvukxjDvL0_jMJK-x7cLgCm7UFC2DJ68zywfxIaB0tnShPL4aJAJmhGWFyhWPTerliEPX2a4mTEpDX9EZFByJff0g" />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-secondary text-surface-container-lowest text-[11px] font-label-badge font-bold">Cat. 04</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Resina</h3>
      <p className="font-caption text-caption text-outline mt-1 flex-grow">Llaveros encapsulados, aretes bot&aacute;nicos y posavasos art&iacute;sticos.</p>
      <span className="font-label-badge text-caption text-primary flex items-center gap-1 mt-3">Ver piezas <MaterialSymbol className="material-symbols-outlined text-[14px]">arrow_forward</MaterialSymbol></span>
      </div>
      { /* 5. Cemento blanco */ }
      <div className="group cursor-pointer rounded-2xl bg-surface-container-lowest p-4 artistic-shadow-1 hover:artistic-shadow-2 transition-all duration-300 border border-outline-variant/15 flex flex-col" onClick={event => { filterCatalog('Cemento blanco'); }}>
      <div className="w-full aspect-square rounded-xl overflow-hidden relative mb-4 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Handcrafted architectural white cement arched vase and ribbed candle tray on an ivory stone pedestal. Smooth sealed matte stone texture, sculptural Scandinavian curves, minimalist modern aesthetic with warm studio backlighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbXH8jmzu_LQZnQqJIwH1uTnkFuzDdg2uppDCxOU-0FF-WOem0TQA1oR-alFSQVCQ3wSlVMm4xCyMj_9s-qQjokw8diyrBFOpma8i1MMw72iFUsZLSA1Z8k4kn11tGE7nSwbZO2A4Q9F3m-YDkm9PXnpypTlpGU28GwtSeCrgECbKGpdj-5V1KE3ZrNwnAK_Jc-RM9gDz3W6696uNnDPwA0-mNA8YfypFsvnF6mo0" />
      <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-secondary text-surface-container-lowest text-[11px] font-label-badge font-bold">Cat. 05</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors">Cemento blanco</h3>
      <p className="font-caption text-caption text-outline mt-1 flex-grow">Floreros geom&eacute;tricos, bandejas onduladas y portavelas artesanales.</p>
      <span className="font-label-badge text-caption text-primary flex items-center gap-1 mt-3">Ver esculturas <MaterialSymbol className="material-symbols-outlined text-[14px]">arrow_forward</MaterialSymbol></span>
      </div>
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
      { /* Item 1: Resina */ }
      <div className="group bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/15 artistic-shadow-1 hover:artistic-shadow-2 transition-all flex flex-col justify-between">
      <div>
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-surface-container-low">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="High angle shot of a luxury resin botanical coaster duo with blue hydrangeas and genuine gold leaf inclusions set against pale linen fabric. Crystal clarity, clean reflections, elegant high-end home decor." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_nDCohobTa2LsJ_VLo4-dDDORgM65RoOOVrmKetgFIWB9R7wXe0PmU240cx9HOL0zgg85eIDyIKouw2Nd65If_H2ghLe2RzVnhlTjqCs1qaQ-RHMJkAheBHgnLTnajFT6eQUKNSiR_bVsONDbI_THI7HtHOPynglu3q64I0FyLLwG5f1PPFFCpT6dmtSRPEezVWeuvzVmwzeJxYj9W2XrOzbokRSSJQbogxcQlSQ" />
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-label-badge uppercase tracking-wider bg-[#83D9D9]/40 text-[#173D68] font-bold">
                        Disponible
                      </span>
      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-outline hover:text-error transition-colors" onClick={event => { toggleWishlist(event.currentTarget); }}>
      <MaterialSymbol className="material-symbols-outlined text-sm">favorite</MaterialSymbol>
      </button>
      </div>
      <p className="font-caption text-caption text-outline">Resina Ep&oacute;xica &amp; Bot&aacute;nica</p>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">Posavasos Oc&eacute;ano &amp; Hortensias</h3>
      <p className="font-caption text-caption text-on-surface-variant line-clamp-2 mt-1">D&uacute;o de posavasos con flores naturales del oriente antioque&ntilde;o y destellos dorados.</p>
      </div>
      <div className="mt-4 pt-3 border-t border-outline-variant/15 flex items-center justify-between">
      <div>
      <span className="text-[11px] text-outline block">Precio colombia</span>
      <span className="font-label-price text-label-price text-on-surface font-semibold">$65.000 COP</span>
      </div>
      <div className="flex gap-1.5">
      <button className="w-9 h-9 rounded-full border border-outline-variant/40 flex items-center justify-center text-secondary hover:bg-surface-container transition-colors" onClick={event => { openProductModal('posavasos-oceano'); }} title="Vista r\xE1pida">
      <MaterialSymbol className="material-symbols-outlined text-sm">visibility</MaterialSymbol>
      </button>
      <button className="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-surface-tint shadow-sm transition-transform active:scale-90" onClick={event => { addToCart('Posavasos Océano & Hortensias', 65000, 'Resina'); }} title="Agregar al carrito">
      <MaterialSymbol className="material-symbols-outlined text-sm">add</MaterialSymbol>
      </button>
      </div>
      </div>
      </div>
      { /* Item 2: Cemento Blanco */ }
      <div className="group bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/15 artistic-shadow-1 hover:artistic-shadow-2 transition-all flex flex-col justify-between">
      <div>
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-surface-container-low">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Handcrafted sculptural arch vase made of pure white cast concrete with an organic ribbed base holding delicate dried lavender stems. Minimalist architectural still life in warm sunny room." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIRHsNj0FbSzjKSr8PQhpn6jOMnEbKMJFYjxR_7SPgXTqxdFjhon4d0j6HsYtakuFKECaO1_rmRiNOA9gO5fgYImCQrMO9a8pvGE851WYCIkqxIj_RYdnXpKP-3Vse3UAltvHw0KgcmU16ng9CZ900JgWxYWx61mOUdSzSZ6THNQrs20SiVshzSCwlGD8pzkSFUjiVGdu0AWOicVhUBpKCn9CkoqcarCEHmVdEDL0" />
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-label-badge uppercase tracking-wider bg-[#F5D35E]/40 text-[#281B18] font-bold">
                        Bajo pedido
                      </span>
      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-outline hover:text-error transition-colors" onClick={event => { toggleWishlist(event.currentTarget); }}>
      <MaterialSymbol className="material-symbols-outlined text-sm">favorite</MaterialSymbol>
      </button>
      </div>
      <p className="font-caption text-caption text-outline">Cemento Blanco Sellado</p>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">Florero Escult&oacute;rico Arco Sol</h3>
      <p className="font-caption text-caption text-on-surface-variant line-clamp-2 mt-1">Moldeado a mano en cemento blanco de alta densidad y acabado satinado hidr&oacute;fugo.</p>
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
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Original contemporary painting framed in natural light oak, presenting stylized seahorses, coastal botanical shapes, soft gold ink, and deep ocean blue mixed media relief on linen." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsOPrVQEn0VNpT_CdIP_IFypkRRD1eL99MQuqXTMF_aoeRsTFPKDS1PfxSoxW_NkmHppSSnr3dpOvYDnjJ9A942-Fvn-ZbnYtR97sagb2Axr8mSO4E-ckc3n0R4ImIh4VxlYjt4jEmN43W4F0CUQ0y9o7uJB6LsQx4dYqXT7tda-HZYamkeRGNCo6TRex9zAfM3W4Q1gp1YYjy2N-d0x4ZgW1MVN_oqNSO719AYUQ" />
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-label-badge uppercase tracking-wider bg-[#B7A1DF]/40 text-[#173D68] font-bold">
                        Personalizable
                      </span>
      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-outline hover:text-error transition-colors" onClick={event => { toggleWishlist(event.currentTarget); }}>
      <MaterialSymbol className="material-symbols-outlined text-sm">favorite</MaterialSymbol>
      </button>
      </div>
      <p className="font-caption text-caption text-outline">Arte Textil &amp; Acr&iacute;lico</p>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">Lienzo &apos;Mareas de Andrea&apos;</h3>
      <p className="font-caption text-caption text-on-surface-variant line-clamp-2 mt-1">Obra original de 50x70cm con relieve textil y paleta marina de la firma.</p>
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
      { /* Item 4: Peluches */ }
      <div className="group bg-surface-container-lowest rounded-2xl p-4 border border-outline-variant/15 artistic-shadow-1 hover:artistic-shadow-2 transition-all flex flex-col justify-between">
      <div>
      <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4 bg-surface-container-low">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Artisan seahorse plush doll collector toy with hand-stitched coral embroidery, soft mint and lavender linen textures, and handcrafted whimsical eyes resting in a boutique basket." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDbP-QshmnxJKuvwvCpf0KNM0tGKUFLTMnYLgFOJsYBmEQj-SeVc8oPxX4chMgFrO3dBhxMGT0DzqVUn_L8QMTLfUvUdruezVPGxd56VJVbuU-cbQmElnbdGEdcfnSHAK4Qlcm43t9-LxJYU8bCO6c6d0wrATsL1KMlEvDWmZbbropHzjCdynUZWqbAYQx3vqhONOzRGyIYmcXCzZ5BC7oyn0yAeQKBZj7FzHrsCM" />
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[11px] font-label-badge uppercase tracking-wider bg-surface-container text-outline line-through font-bold">
                        Agotado
                      </span>
      <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-surface-container-lowest/80 backdrop-blur-sm flex items-center justify-center text-outline hover:text-error transition-colors" onClick={event => { toggleWishlist(event.currentTarget); }}>
      <MaterialSymbol className="material-symbols-outlined text-sm">favorite</MaterialSymbol>
      </button>
      </div>
      <p className="font-caption text-caption text-outline">Personajes Textiles</p>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-1 group-hover:text-primary transition-colors">Caballito Textil &apos;Aureliano&apos;</h3>
      <p className="font-caption text-caption text-on-surface-variant line-clamp-2 mt-1">Peluche de edici&oacute;n coleccionable con certificado de autor&iacute;a firmado.</p>
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
                      En Seahorse Estudio Creativo co-creamos contigo. Elige gamas de color de temporada, flores bot&aacute;nicas encapsuladas de tus momentos especiales, leyendas grabadas o dimensiones especiales adaptadas a tu arquitectura interior.
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
      <img className="w-full h-full object-cover" data-alt="Portrait of artist Andrea Sosa in her bright creative studio surrounded by drying resin art plates, natural paint pigment jars, and textile samples. Natural warm lighting, sincere creative expression, genuine handmade artisan atmosphere." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDL0nk9boD38NcI2YP-jWih5KyH6RDGFxZx7wGN4v9zwil2Vj3X-ZEtdFKvlrODDvwMufug9gqYc48c1j8CqpGB5lUcD-IMb7Nbn__6VOiLJIBEZWUmp7tPuTwKE1CYTYP6t0pCQ6ckag1hueBpOvKmikg718YR9R4ZS5yqo305Vfdq-73VWG_ADTETg0z21dYzdGSZkNGIXxIs2iv2wqb-4z-LAQfUgSguljlYrKE" />
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
                      Seahorse naci&oacute; como una b&uacute;squeda visceral por rescatar la cadencia lenta de los oficios artesanales en un entorno saturado de producci&oacute;n en serie. Cada objeto que sale de nuestro taller en Colombia lleva consigo horas de experimentaci&oacute;n qu&iacute;mica con resinas de alta pureza, pulido a mano de cementos arquitect&oacute;nicos y puntadas minuciosas en lino natural.
                    </p>
      <p>
                      El caballito de mar, s&iacute;mbolo central de nuestra identidad, representa la fragilidad resiliente, la fidelidad al detalle y la belleza de lo org&aacute;nico. No creamos productos descartables: concebimos compa&ntilde;eros de vida que aportan serenidad visual y memorias tangibles a tu hogar.
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
      { /* TESTIMONIOS REALES MOCKUP */ }
      <section className="py-16 bg-surface-container-low px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-12">
      <span className="px-3 py-1 rounded-full bg-surface-container text-outline text-[11px] font-label-badge uppercase tracking-wider">Demostraci&oacute;n / Mockups reales de clientes</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mt-2">Lo que dicen quienes habitan nuestras piezas</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      { /* Review 1 */ }
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
      { /* Review 2 */ }
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
      { /* Review 3 */ }
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
      </section>
      { /* ================= VIEW 2: CATÁLOGO / TIENDA COMPLETA ================= */ }
      <section className="tab-content py-10 px-6 lg:px-12 max-w-7xl mx-auto" id="view-catalogo">
      { /* Encabezado de Tienda */ }
      <div className="mb-8">
      <nav className="flex items-center gap-2 text-caption text-outline mb-2">
      <button className="hover:underline" onClick={event => { navigateTo('home'); }}>Inicio</button>
      <span>/</span>
      <span className="text-on-surface font-medium">Cat&aacute;logo Oficial</span>
      </nav>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
      <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight">Tienda &amp; Cat&aacute;logo de Autor</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Explora piezas disponibles de entrega inmediata o solicita elaboraci&oacute;n por encargo.</p>
      </div>
      <div className="flex items-center gap-3">
      <span className="text-caption font-label-badge text-outline">Moneda fija:</span>
      <span className="px-3 py-1 bg-surface-container-high rounded-full font-label-badge text-caption text-secondary">Pesos Colombianos (COP)</span>
      </div>
      </div>
      </div>
      { /* Barra de Filtros Rápidos + Búsqueda */ }
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      { /* Sidebar de Filtros (3 cols) */ }
      <aside className="lg:col-span-3 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/20 artistic-shadow-1 space-y-6">
      { /* Filtro Búsqueda */ }
      <div>
      <label className="font-label-badge text-caption text-outline uppercase tracking-wider block mb-2" htmlFor="catalog-search-input">B&uacute;squeda r&aacute;pida</label>
      <div className="relative">
      <input className="w-full text-body-sm rounded-xl border border-outline-variant/40 bg-surface-container-low pl-9 pr-3 py-2 focus:border-primary focus:ring-0" id="catalog-search-input" onKeyUp={applyCatalogFilters} placeholder="Buscar por t\xE9cnica, flor..." type="text" />
      <MaterialSymbol className="material-symbols-outlined text-outline text-[18px] absolute left-3 top-2.5">search</MaterialSymbol>
      </div>
      </div>
      { /* Filtro por las 5 Categorías Oficiales */ }
      <div>
      <span className="font-label-badge text-caption text-outline uppercase tracking-wider block mb-3">Categor&iacute;a de Autor</span>
      <div className="space-y-2">
      <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
      <input defaultChecked={true} className="text-primary focus:ring-0 rounded-full" name="cat-filter" onChange={applyCatalogFilters} type="radio" value="all" />
      <span>Todas las categor&iacute;as (24)</span>
      </label>
      <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
      <input className="text-primary focus:ring-0 rounded-full" name="cat-filter" onChange={applyCatalogFilters} type="radio" value="Cuadros" />
      <span>Cuadros (5)</span>
      </label>
      <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
      <input className="text-primary focus:ring-0 rounded-full" name="cat-filter" onChange={applyCatalogFilters} type="radio" value="Ropa" />
      <span>Ropa ilustrada (4)</span>
      </label>
      <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
      <input className="text-primary focus:ring-0 rounded-full" name="cat-filter" onChange={applyCatalogFilters} type="radio" value="Peluches" />
      <span>Peluches de autor (4)</span>
      </label>
      <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
      <input className="text-primary focus:ring-0 rounded-full" name="cat-filter" onChange={applyCatalogFilters} type="radio" value="Resina" />
      <span>Resina bot&aacute;nica (6)</span>
      </label>
      <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
      <input className="text-primary focus:ring-0 rounded-full" name="cat-filter" onChange={applyCatalogFilters} type="radio" value="Cemento blanco" />
      <span>Cemento blanco (5)</span>
      </label>
      </div>
      </div>
      { /* Filtro por Estado / Disponibilidad */ }
      <div className="pt-4 border-t border-outline-variant/20">
      <span className="font-label-badge text-caption text-outline uppercase tracking-wider block mb-3">Disponibilidad</span>
      <div className="space-y-2">
      <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
      <input defaultChecked={true} className="rounded text-primary focus:ring-0" id="filter-disp-disponible" onChange={applyCatalogFilters} type="checkbox" />
      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-500" /> Disponible</span>
      </label>
      <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
      <input defaultChecked={true} className="rounded text-primary focus:ring-0" id="filter-disp-pedido" onChange={applyCatalogFilters} type="checkbox" />
      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500" /> Bajo pedido</span>
      </label>
      <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
      <input defaultChecked={true} className="rounded text-primary focus:ring-0" id="filter-disp-personalizable" onChange={applyCatalogFilters} type="checkbox" />
      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-purple-500" /> Personalizable</span>
      </label>
      <label className="flex items-center gap-2.5 text-body-sm text-on-surface cursor-pointer">
      <input defaultChecked={true} className="rounded text-primary focus:ring-0" id="filter-disp-agotado" onChange={applyCatalogFilters} type="checkbox" />
      <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-gray-400" /> Agotado</span>
      </label>
      </div>
      </div>
      { /* Rango de Precios en COP */ }
      <div className="pt-4 border-t border-outline-variant/20">
      <div className="flex justify-between items-center mb-2">
      <span className="font-label-badge text-caption text-outline uppercase tracking-wider">Precio m&aacute;ximo</span>
      <span className="font-body-sm font-semibold text-primary" id="price-range-label">$450.000 COP</span>
      </div>
      <input className="w-full accent-primary" id="price-range-input" max="500000" min="30000" onInput={event => { updatePriceFilter(event.currentTarget.value); }} step="10000" type="range" value="450000" />
      <div className="flex justify-between text-[11px] text-outline mt-1">
      <span>$30.000 COP</span>
      <span>$500.000 COP</span>
      </div>
      </div>
      <button className="w-full py-2 rounded-xl text-caption font-label-badge text-secondary bg-surface-container hover:bg-surface-container-high transition-colors" onClick={resetFilters}>
                  Restablecer Filtros
                </button>
      </aside>
      { /* Grilla de Resultados (9 cols) */ }
      <div className="lg:col-span-9 space-y-6">
      { /* Barra de Ordenamiento y Conteo */ }
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-surface-container-low border border-outline-variant/20">
      <span className="font-body-sm text-body-sm text-on-surface" id="catalog-count-text">Mostrando <strong>8</strong> obras seleccionadas</span>
      <div className="flex items-center gap-2">
      <label className="text-caption text-outline" htmlFor="catalog-sort-select">Ordenar por:</label>
      <select className="rounded-lg text-body-sm border-outline-variant/40 bg-surface-container-lowest py-1.5 pl-3 pr-8 focus:border-primary focus:ring-0" id="catalog-sort-select" onChange={event => { sortCatalog(event.currentTarget.value); }}>
      <option value="featured">Destacados del Atelier</option>
      <option value="price-asc">Menor precio COP</option>
      <option value="price-desc">Mayor precio COP</option>
      <option value="name">Nombre (A - Z)</option>
      </select>
      </div>
      </div>
      { /* Grilla de Cards del Catálogo */ }
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="catalog-items-container">
      { /* Los items se renderizan dinámicamente o por plantilla */ }
      </div>
      </div>
      </div>
      </section>
      { /* ================= VIEW 3: FICHA DE DETALLE DE PRODUCTO ================= */ }
      <section className="tab-content py-10 px-6 lg:px-12 max-w-7xl mx-auto" id="view-producto">
      { /* Navegación de migas de pan */ }
      <nav className="flex items-center gap-2 text-caption text-outline mb-6">
      <button className="hover:underline" onClick={event => { navigateTo('home'); }}>Inicio</button>
      <span>/</span>
      <button className="hover:underline" onClick={event => { navigateTo('catalogo'); }}>Cat&aacute;logo</button>
      <span>/</span>
      <span className="text-outline" id="detail-category-bread">Resina</span>
      <span>/</span>
      <span className="text-on-surface font-medium" id="detail-title-bread">Bandeja Bot&aacute;nica Marfil &amp; Hortensias</span>
      </nav>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      { /* Galería Fotográfica (7 cols) */ }
      <div className="lg:col-span-7 space-y-4">
      <div className="relative aspect-[4/3] sm:aspect-[1/1] rounded-3xl overflow-hidden bg-surface-container-low border border-outline-variant/20 artistic-shadow-2 group">
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="High-end botanical tray crafted with crystal epoxy resin, preserved Colombian hydrangeas, gold leaf embellishments, and smooth polished edges. Bright modern artisanal product photography on warm ivory tabletop." id="detail-main-img" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPS6OmHlDJ3uBrRgi0tgQr2GRAuKPrHwdYksBuEZnOApQXg11U1KvyNkLdZdHfrZ1DgehGgN4y4KZW66HCTCywtWp6_KN6iTyCz3f-SpXNtR1qJMihSpG-ebBln39M3YNIhv9gV4H915Gqyhw0pKbODM7TnyMNHuNprqGhl18L3fPuDUiIPO3ITzfRbudbB_MPfyW4qvb-PinbCjaPaDq-D_66B0Yr1t8zDpK5htM" />
      <span className="absolute top-4 left-4 px-3.5 py-1 rounded-full text-caption font-label-badge uppercase tracking-wider bg-[#F5D35E]/40 text-[#281B18] font-bold" id="detail-badge">
                    Bajo pedido &mdash; Producci&oacute;n: 5 a 7 d&iacute;as h&aacute;biles
                  </span>
      </div>
      { /* Miniaturas Interactivas */ }
      <div className="grid grid-cols-4 gap-4">
      <button className="aspect-square rounded-xl overflow-hidden border-2 border-primary artistic-shadow-1" onClick={event => { switchDetailImage(0); }}>
      <img className="w-full h-full object-cover" data-alt="Close-up detail of encapsulated dried purple and blue hydrangeas inside glassy clear resin with floating gold dust particles." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXfL8ojP6syqQAu1zzm2-6Y0RTM9uQbTCNQQ0i_FDMI24g8_PlMV3thZcP_XfJ0PJVPvDhUzZ-HKYz4l0gfOIs-nxb5XsKbdQsb0TZPt9QkjCATL0FOCp_UPuF9IvCGOip8b0_4n8Ypou3dpShVXbq-e0cdZOcWyFUvCU-nlxyhFglPrEd4CobpWLKqMX-8kyI6WipYid5RxfwR_2zeojpH-i2DJYxD5JnY-qXt2o" />
      </button>
      <button className="aspect-square rounded-xl overflow-hidden border border-outline-variant/30 opacity-80 hover:opacity-100" onClick={event => { switchDetailImage(1); }}>
      <img className="w-full h-full object-cover" data-alt="Angled perspective of botanical serving tray on an architectural marble and ivory table setting with sunlight glares." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAV07cKbj81JeJqYEbBHfiLzOewFRf_hToQSbaq3KKB9DLA_k3khnjzSrQRusmVJNIMpY2cBYxBfOmVSQ3hi-4usHTCKdltlXG9-UqPqX4fWxAztp9JvJUPGFoswQCBVzom5sKQXw5eWgMk7CdljksVCeQDp_2tgNdy3WlB3R5H0ZTiS52gAjQMDv5q4CQTlOZQmafwBYrKHnmEKpuKvrUXjM6bFxrWrrg3lsdv7yA" />
      </button>
      <button className="aspect-square rounded-xl overflow-hidden border border-outline-variant/30 opacity-80 hover:opacity-100" onClick={event => { switchDetailImage(2); }}>
      <img className="w-full h-full object-cover" data-alt="Hand of artist holding the finished botanical resin tray showing edge finish and delicate transparent gradient layers." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXIXbbVx0tlbhm6JLdy7iAWFAOnkhOBIBpdLBZLugmpRcCbQMy_jHf3-1Nqv0EW23ohtJJU6Au2OraxU1Kstw9Hd7L24hAybyiYnC3OUF3f5xhdxAdIHFHk6wRAvCgp2Lw8qkiwxwFZSLR8HxFEM44GGRBdb3CZCgqM4PFvlyf9mjvZ5xsOvj85QfU5o2croG_9VfHZYxI5WS3p2YCMeditXqqqxu6mDbZpFLB4uY" />
      </button>
      <button className="aspect-square rounded-xl overflow-hidden border border-outline-variant/30 opacity-80 hover:opacity-100" onClick={event => { switchDetailImage(3); }}>
      <img className="w-full h-full object-cover" data-alt="Gift packaging aesthetic box with official Seahorse Estudio Creativo wax stamp and handwritten author card." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2s893A1uj3XFKasIdL0mJ9hNTSjoxN0m1mgEXhkNxCOX4yF7tp_zBluFzi3p-0Ir0pmM7yLbH1Ac5TuexVMq0D3EzZObx6YSjipHXMv3iTA0NAqiBArgqusa0FyRH4HoOm4hVFVVaE1iFoOFvNxkARF-p3hrEETObAaVmg0RH0vVVPbT0jMBVjLF54C33RIr2lHkzeOMvl1fYTGZSMnmQsk-xVtvkqjxHFBw2he0" />
      </button>
      </div>
      </div>
      { /* Ficha de Información de Compra (5 cols) */ }
      <div className="lg:col-span-5 space-y-6">
      <div>
      <div className="flex items-center gap-2 text-caption text-secondary font-medium">
      <MaterialSymbol className="material-symbols-outlined text-sm">verified</MaterialSymbol>
      <span>Dise&ntilde;o original by Andrea Sosa &middot; Hecho en Colombia</span>
      </div>
      <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight mt-1" id="detail-title">
                    Bandeja Bot&aacute;nica Marfil &amp; Hortensias
                  </h1>
      <div className="flex items-baseline gap-3 mt-3">
      <span className="font-display-hero-mobile text-display-hero-mobile text-primary font-bold tracking-tight" id="detail-price">
                      $185.000 COP
                    </span>
      <span className="text-caption text-outline">IVA e impuestos locales incluidos</span>
      </div>
      </div>
      { /* Selector de Variantes (Tamaño / Flor) */ }
      <div className="space-y-4 pt-4 border-t border-outline-variant/20">
      <div>
      <span className="font-label-badge text-caption text-on-surface uppercase tracking-wider block mb-2">Selecciona Tama&ntilde;o de la Pieza:</span>
      <div className="grid grid-cols-2 gap-3" id="detail-sizes">
      <button className="variant-pill py-2.5 px-3 rounded-xl border-2 border-primary bg-primary-fixed/20 text-on-primary-fixed-variant font-body-sm font-medium text-left" onClick={event => { selectVariant(event.currentTarget, 'Mediano (25 x 18 cm)'); }}>
      <span className="block">Mediano (25 x 18 cm)</span>
      <span className="text-caption text-outline">Ideal para mesa de noche</span>
      </button>
      <button className="variant-pill py-2.5 px-3 rounded-xl border border-outline-variant/40 bg-surface-container-low text-on-surface font-body-sm font-medium text-left" onClick={event => { selectVariant(event.currentTarget, 'Grande (35 x 24 cm)'); }}>
      <span className="block">Grande (35 x 24 cm)</span>
      <span className="text-caption text-outline">+$45.000 COP</span>
      </button>
      </div>
      </div>
      <div>
      <span className="font-label-badge text-caption text-on-surface uppercase tracking-wider block mb-2">Gama Bot&aacute;nica:</span>
      <div className="flex gap-3">
      <button className="px-3.5 py-1.5 rounded-full border border-primary bg-primary/10 text-primary text-body-sm font-medium">Hortensias &amp; Oro</button>
      <button className="px-3.5 py-1.5 rounded-full border border-outline-variant/40 text-on-surface-variant text-body-sm">Lavanda Silvestre</button>
      <button className="px-3.5 py-1.5 rounded-full border border-outline-variant/40 text-on-surface-variant text-body-sm">Oc&eacute;ano &amp; Perla</button>
      </div>
      </div>
      </div>
      { /* Ficha de Materiales Curatorial */ }
      <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 space-y-2 text-body-sm">
      <p className="font-label-badge text-caption text-outline uppercase tracking-wider">Ficha de Materialidad:</p>
      <div className="grid grid-cols-2 gap-2 text-on-surface-variant text-caption">
      <div>&bull; Resina ep&oacute;xica no t&oacute;xica UV</div>
      <div>&bull; Flores preservadas a mano</div>
      <div>&bull; Pigmentos minerales puros</div>
      <div>&bull; Cera protectora selladora</div>
      </div>
      </div>
      { /* Acciones Principales */ }
      <div className="space-y-3 pt-2">
      <button className="w-full py-4 rounded-full bg-primary text-on-primary font-body-md font-semibold tracking-wide hover:bg-surface-tint shadow-md transition-all active:scale-95 flex items-center justify-center gap-2" onClick={addCurrentDetailToCart}>
      <MaterialSymbol className="material-symbols-outlined text-lg">shopping_bag</MaterialSymbol>
      <span>Agregar al carrito ($185.000 COP)</span>
      </button>
      <button className="w-full py-3.5 rounded-full border-2 border-secondary text-secondary hover:bg-surface-container font-body-md font-medium transition-all flex items-center justify-center gap-2" onClick={event => { navigateTo('personaliza'); }}>
      <MaterialSymbol className="material-symbols-outlined text-lg">edit</MaterialSymbol>
      <span>Personalizar este dise&ntilde;o a mi gusto</span>
      </button>
      </div>
      { /* Garantías de Taller */ }
      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-outline-variant/20 text-caption text-outline">
      <div className="flex items-center gap-2">
      <MaterialSymbol className="material-symbols-outlined text-secondary text-[20px]">local_shipping</MaterialSymbol>
      <span>Env&iacute;os a todo Colombia por Coordinadora / Env&iacute;a</span>
      </div>
      <div className="flex items-center gap-2">
      <MaterialSymbol className="material-symbols-outlined text-secondary text-[20px]">verified</MaterialSymbol>
      <span>Certificado de autenticidad incluido</span>
      </div>
      </div>
      </div>
      </div>
      { /* PRODUCTOS RELACIONADOS RECOMENDADOS */ }
      <div className="mt-20 pt-12 border-t border-outline-variant/30">
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold mb-8">Tambi&eacute;n te podr&iacute;a inspirar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="group cursor-pointer rounded-2xl bg-surface-container-lowest p-4 border border-outline-variant/20 artistic-shadow-1 hover:artistic-shadow-2 transition-all" onClick={event => { openProductModal('posavasos-oceano'); }}>
      <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-surface-container-low">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Set of handmade botanical resin coasters with dried eucalyptus leaves and gold foil." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz5GQgHwjoQPKpjicb2ee94cYa3pesdhbAnT2ApzasQlRRUK9ZNqImuWPEEJtnRn8AZB0FXqNSaUkwh3IAiXSDe6Hpg3mhEkl3P1luPZSErtlRp7id2bnmiF-z5uTI5jKfZGKXI_FKuyjmslwgni6jOww5s-S1-6GdXxG_5hGriS4TSsRSPMXMomXTkw1Eb6Udq4PaXzd7zRK1E69cgFa7OKfKSxrYCcMx1hWsQm4" />
      </div>
      <p className="font-caption text-caption text-outline">Resina Bot&aacute;nica</p>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">D&uacute;o Posavasos Eucalipto</h3>
      <p className="font-label-price text-label-price text-on-surface font-semibold mt-2">$65.000 COP</p>
      </div>
      <div className="group cursor-pointer rounded-2xl bg-surface-container-lowest p-4 border border-outline-variant/20 artistic-shadow-1 hover:artistic-shadow-2 transition-all" onClick={event => { openProductModal('florero-arco'); }}>
      <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-surface-container-low">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Minimalist white cement arched flower vase." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCP-Mxs1RuyF2Se5I877ByvoVJ9bTwyhAchcfC3sHHFblpNXduj8XCIXQ7ehr2KvVQjX-IN4P7au60x47Tdim6Z7E0n-ppxkcRhlauRylP73rXMmejp00cdd_b0gigRYX0DASRda0xBk70grGTsKooDQPxM98tbd4IVVhOzBKeVjqGnvPYTtUyuzkug5jAI1BMdXtvkf6qAPcWVvrMrF7h5wZDtUGb68ZipG_HkAS0" />
      </div>
      <p className="font-caption text-caption text-outline">Cemento Blanco</p>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Florero Arco Esculpido</h3>
      <p className="font-label-price text-label-price text-on-surface font-semibold mt-2">$140.000 COP</p>
      </div>
      <div className="group cursor-pointer rounded-2xl bg-surface-container-lowest p-4 border border-outline-variant/20 artistic-shadow-1 hover:artistic-shadow-2 transition-all" onClick={event => { openProductModal('lienzo-mareas'); }}>
      <div className="aspect-square rounded-xl overflow-hidden mb-3 bg-surface-container-low">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Small mixed media framed coastal canvas painting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIwgx_zo6g40-f3EDbMAIs6MJyRDEnT0sO2CqYbTLhTMe2WWxnOUfFrkuFxl8cI51en_v2OLta_Pgy3lg_mK8pN_H9M6cX32fi-EdNUubHH8RAOBMAyT34s3ySpte-ToXaZFaHQC71_voWuFd5vHEAgyXW6J10fLEv-IY1xBIOZtazNXH0cR1oGzEu1Fbi1ydmYumkjtgaU-8i7m8kqKUWo02aZHdv4kGwBmpihno" />
      </div>
      <p className="font-caption text-caption text-outline">Cuadros &amp; Lienzo</p>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">Lienzo &apos;Espuma y Arena&apos;</h3>
      <p className="font-label-price text-label-price text-on-surface font-semibold mt-2">$210.000 COP</p>
      </div>
      </div>
      </div>
      </section>
      { /* ================= VIEW 4: TALLER DE PERSONALIZACIÓN INTERACTIVO ================= */ }
      <section className="tab-content py-10 px-6 lg:px-12 max-w-5xl mx-auto" id="view-personaliza">
      { /* Encabezado de la experiencia de personalización */ }
      <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="px-4 py-1.5 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant font-label-badge text-caption uppercase tracking-wider inline-flex items-center gap-1.5">
      <MaterialSymbol className="material-symbols-outlined text-[16px]">draw</MaterialSymbol>
                Taller de Co-Creaci&oacute;n a Medida
              </span>
      <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight mt-3">
                Dise&ntilde;a tu pieza &uacute;nica con Andrea Sosa
              </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Sigue el flujo interactivo de 5 pasos para definir la materialidad, est&eacute;tica y concepto de tu encargo artesanal.
              </p>
      </div>
      { /* Barra de Pasos / Stepper */ }
      <div className="flex items-center justify-between mb-12 relative px-4 max-w-3xl mx-auto">
      <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 h-0.5 bg-outline-variant/30 -z-0" />
      <div className="step-marker relative z-10 w-10 h-10 rounded-full bg-primary text-on-primary font-bold text-sm flex items-center justify-center shadow-md" id="step-marker-1">1</div>
      <div className="step-marker relative z-10 w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant font-bold text-sm flex items-center justify-center" id="step-marker-2">2</div>
      <div className="step-marker relative z-10 w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant font-bold text-sm flex items-center justify-center" id="step-marker-3">3</div>
      <div className="step-marker relative z-10 w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant font-bold text-sm flex items-center justify-center" id="step-marker-4">4</div>
      <div className="step-marker relative z-10 w-10 h-10 rounded-full bg-surface-container-high text-on-surface-variant font-bold text-sm flex items-center justify-center" id="step-marker-5">5</div>
      </div>
      { /* Contenedor del Formulario Paso a Paso */ }
      <div className="bg-surface-container-lowest rounded-3xl p-6 sm:p-10 border border-outline-variant/20 artistic-shadow-2">
      { /* PASO 1: Selección de Categoría Base */ }
      <div className="custom-step space-y-6" id="custom-step-1">
      <div className="border-b border-outline-variant/20 pb-4">
      <span className="font-label-badge text-caption text-secondary uppercase tracking-wider">Paso 1 de 5</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Elige la categor&iacute;a o t&eacute;cnica base</h2>
      <p className="font-body-sm text-body-sm text-outline mt-1">Selecciona sobre qu&eacute; disciplina creativa deseas estructurar tu encargo:</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <label className="custom-cat-card p-4 rounded-2xl border-2 border-primary bg-primary-fixed/15 cursor-pointer flex flex-col justify-between transition-all">
      <input defaultChecked={true} className="hidden" name="custom_category" onChange={event => { highlightCatCard(event.currentTarget); }} type="radio" value="Cuadros" />
      <div className="flex items-center justify-between mb-3">
      <MaterialSymbol className="material-symbols-outlined text-primary text-2xl">brush</MaterialSymbol>
      <span className="text-caption font-bold text-primary">01</span>
      </div>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Cuadros</h3>
      <p className="text-caption text-outline mt-1">Lienzos textiles, acr&iacute;lico, pan de oro o bajo relieves bot&aacute;nicos.</p>
      </div>
      </label>
      <label className="custom-cat-card p-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex flex-col justify-between transition-all">
      <input className="hidden" name="custom_category" onChange={event => { highlightCatCard(event.currentTarget); }} type="radio" value="Resina" />
      <div className="flex items-center justify-between mb-3">
      <MaterialSymbol className="material-symbols-outlined text-secondary text-2xl">water_drop</MaterialSymbol>
      <span className="text-caption font-bold text-outline">02</span>
      </div>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Resina Bot&aacute;nica</h3>
      <p className="text-caption text-outline mt-1">Bandejas, encapsulados conmemorativos de ramos de novia, posavasos.</p>
      </div>
      </label>
      <label className="custom-cat-card p-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex flex-col justify-between transition-all">
      <input className="hidden" name="custom_category" onChange={event => { highlightCatCard(event.currentTarget); }} type="radio" value="Cemento blanco" />
      <div className="flex items-center justify-between mb-3">
      <MaterialSymbol className="material-symbols-outlined text-secondary text-2xl">home_app_logo</MaterialSymbol>
      <span className="text-caption font-bold text-outline">03</span>
      </div>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Cemento Blanco</h3>
      <p className="text-caption text-outline mt-1">Floreros arquitect&oacute;nicos, portavelas o bandejas esculpidas.</p>
      </div>
      </label>
      <label className="custom-cat-card p-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex flex-col justify-between transition-all">
      <input className="hidden" name="custom_category" onChange={event => { highlightCatCard(event.currentTarget); }} type="radio" value="Peluches" />
      <div className="flex items-center justify-between mb-3">
      <MaterialSymbol className="material-symbols-outlined text-secondary text-2xl">cruelty_free</MaterialSymbol>
      <span className="text-caption font-bold text-outline">04</span>
      </div>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Peluches Coleccionables</h3>
      <p className="text-caption text-outline mt-1">Personajes marinos textiles confeccionados a medida.</p>
      </div>
      </label>
      <label className="custom-cat-card p-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex flex-col justify-between transition-all">
      <input className="hidden" name="custom_category" onChange={event => { highlightCatCard(event.currentTarget); }} type="radio" value="Ropa" />
      <div className="flex items-center justify-between mb-3">
      <MaterialSymbol className="material-symbols-outlined text-secondary text-2xl">apparel</MaterialSymbol>
      <span className="text-caption font-bold text-outline">05</span>
      </div>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Ropa Ilustrada</h3>
      <p className="text-caption text-outline mt-1">Prendas bordadas a mano y personalizadas con tu motivo favorito.</p>
      </div>
      </label>
      </div>
      <div className="flex justify-end pt-4">
      <button className="px-8 py-3 rounded-full bg-primary text-on-primary font-body-md font-medium flex items-center gap-2 hover:bg-surface-tint" onClick={event => { goToCustomStep(2); }}>
      <span>Continuar a Est&eacute;tica</span>
      <MaterialSymbol className="material-symbols-outlined text-sm">arrow_forward</MaterialSymbol>
      </button>
      </div>
      </div>
      { /* PASO 2: Personalización Estética */ }
      <div className="custom-step hidden space-y-6" id="custom-step-2">
      <div className="border-b border-outline-variant/20 pb-4">
      <span className="font-label-badge text-caption text-secondary uppercase tracking-wider">Paso 2 de 5</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Gama crom&aacute;tica y detalles especiales</h2>
      <p className="font-body-sm text-body-sm text-outline mt-1">Elige los acentos visuales y el lenguaje decorativo:</p>
      </div>
      <div className="space-y-5">
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-2">Paleta de color preferida:</label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <label className="p-3 rounded-xl border-2 border-primary bg-primary-fixed/20 cursor-pointer flex items-center gap-2">
      <input defaultChecked={true} className="text-primary focus:ring-0" name="color_palette" type="radio" value="Marfil & Oc\xE9ano" />
      <span className="font-body-sm text-on-surface">Marfil &amp; Oc&eacute;ano</span>
      </label>
      <label className="p-3 rounded-xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex items-center gap-2">
      <input className="text-primary focus:ring-0" name="color_palette" type="radio" value="Coral & Atardecer" />
      <span className="font-body-sm text-on-surface">Coral &amp; Atardecer</span>
      </label>
      <label className="p-3 rounded-xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex items-center gap-2">
      <input className="text-primary focus:ring-0" name="color_palette" type="radio" value="Lavanda & Aguamarina" />
      <span className="font-body-sm text-on-surface">Lavanda &amp; Aqua</span>
      </label>
      <label className="p-3 rounded-xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex items-center gap-2">
      <input className="text-primary focus:ring-0" name="color_palette" type="radio" value="Monocrom\xE1tico Blanco" />
      <span className="font-body-sm text-on-surface">Blanco Escult&oacute;rico</span>
      </label>
      </div>
      </div>
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-2">Detalles bot&aacute;nicos o minerales:</label>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      <label className="p-3 rounded-xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex items-center gap-2">
      <input defaultChecked={true} className="text-primary rounded focus:ring-0" id="detail-foil" type="checkbox" />
      <span className="font-body-sm text-on-surface">Hoja de oro / Foil met&aacute;lico</span>
      </label>
      <label className="p-3 rounded-xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex items-center gap-2">
      <input defaultChecked={true} className="text-primary rounded focus:ring-0" id="detail-flores" type="checkbox" />
      <span className="font-body-sm text-on-surface">Flores secas encapsuladas</span>
      </label>
      <label className="p-3 rounded-xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex items-center gap-2">
      <input className="text-primary rounded focus:ring-0" id="detail-bordado" type="checkbox" />
      <span className="font-body-sm text-on-surface">Relieve de hilo de seda</span>
      </label>
      </div>
      </div>
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-2" htmlFor="custom-text-field">Texto, frase o nombres a incluir (opcional):</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3 focus:border-primary focus:ring-0" id="custom-text-field" placeholder="Ej: 'A & S \xB7 12.10.2024' o una frase significativa..." type="text" />
      </div>
      </div>
      <div className="flex justify-between pt-4">
      <button className="px-6 py-2.5 rounded-full border border-outline-variant text-on-surface font-body-sm" onClick={event => { goToCustomStep(1); }}>Atr&aacute;s</button>
      <button className="px-8 py-3 rounded-full bg-primary text-on-primary font-body-md font-medium flex items-center gap-2 hover:bg-surface-tint" onClick={event => { goToCustomStep(3); }}>
      <span>Continuar a Referencias</span>
      <MaterialSymbol className="material-symbols-outlined text-sm">arrow_forward</MaterialSymbol>
      </button>
      </div>
      </div>
      { /* PASO 3: Subida Simulada de Referencias */ }
      <div className="custom-step hidden space-y-6" id="custom-step-3">
      <div className="border-b border-outline-variant/20 pb-4">
      <span className="font-label-badge text-caption text-secondary uppercase tracking-wider">Paso 3 de 5</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Im&aacute;genes de referencia o espacio</h2>
      <p className="font-body-sm text-body-sm text-outline mt-1">Comparte fotos de tu espacio, paleta de tu boda o bocetos visuales:</p>
      </div>
      <div className="border-2 border-dashed border-primary/40 rounded-3xl p-8 text-center bg-surface-container-low/50 hover:bg-surface-container-low transition-colors">
      <MaterialSymbol className="material-symbols-outlined text-4xl text-primary mb-2">cloud_upload</MaterialSymbol>
      <p className="font-body-md font-medium text-on-surface">Arrastra o sube tus archivos de inspiraci&oacute;n</p>
      <p className="text-caption text-outline mt-1">Formatos JPG, PNG, PDF (M&aacute;x. 15MB)</p>
      <button className="mt-4 px-5 py-2 rounded-full border border-primary text-primary font-label-badge text-caption hover:bg-primary-fixed/20 transition-colors" onClick={simulateUpload} type="button">
                    Simular Carga de Boceto
                  </button>
      <div className="mt-3 text-caption text-emerald-600 font-medium hidden" id="upload-status">
                    &checkmark; Archivo &quot;referencia_paleta_sala.jpg&quot; cargado con &eacute;xito.
                  </div>
      </div>
      <div className="flex justify-between pt-4">
      <button className="px-6 py-2.5 rounded-full border border-outline-variant text-on-surface font-body-sm" onClick={event => { goToCustomStep(2); }}>Atr&aacute;s</button>
      <button className="px-8 py-3 rounded-full bg-primary text-on-primary font-body-md font-medium flex items-center gap-2 hover:bg-surface-tint" onClick={event => { goToCustomStep(4); }}>
      <span>Continuar a Cantidad</span>
      <MaterialSymbol className="material-symbols-outlined text-sm">arrow_forward</MaterialSymbol>
      </button>
      </div>
      </div>
      { /* PASO 4: Cantidad y Notas Creativas */ }
      <div className="custom-step hidden space-y-6" id="custom-step-4">
      <div className="border-b border-outline-variant/20 pb-4">
      <span className="font-label-badge text-caption text-secondary uppercase tracking-wider">Paso 4 de 5</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Cantidad, dimensiones y notas</h2>
      <p className="font-body-sm text-body-sm text-outline mt-1">Aclara cualquier detalle espec&iacute;fico con el taller:</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-2" htmlFor="custom-qty">N&uacute;mero de piezas:</label>
      <select className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3 focus:border-primary focus:ring-0" id="custom-qty">
      <option value="1">1 pieza exclusiva</option>
      <option value="2">2 piezas (Juego o par)</option>
      <option value="5-10">5 a 10 piezas (Regalos corporativos / Evento)</option>
      <option value="15+">M&aacute;s de 15 piezas (Producci&oacute;n especial)</option>
      </select>
      </div>
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-2" htmlFor="custom-dimension">Dimensiones aproximadas:</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3 focus:border-primary focus:ring-0" id="custom-dimension" placeholder="Ej: 30x40 cm, formato circular, etc." type="text" />
      </div>
      </div>
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-2" htmlFor="custom-notes">Instrucciones o notas creativas para Andrea:</label>
      <textarea className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3 focus:border-primary focus:ring-0" id="custom-notes" placeholder="Cu\xE9ntanos el significado emocional, para qui\xE9n es, qu\xE9 emoci\xF3n buscas transmitir..." rows={4} />
      </div>
      <div className="flex justify-between pt-4">
      <button className="px-6 py-2.5 rounded-full border border-outline-variant text-on-surface font-body-sm" onClick={event => { goToCustomStep(3); }}>Atr&aacute;s</button>
      <button className="px-8 py-3 rounded-full bg-primary text-on-primary font-body-md font-medium flex items-center gap-2 hover:bg-surface-tint" onClick={event => { goToCustomStep(5); }}>
      <span>Continuar al Env&iacute;o</span>
      <MaterialSymbol className="material-symbols-outlined text-sm">arrow_forward</MaterialSymbol>
      </button>
      </div>
      </div>
      { /* PASO 5: Datos y Envío Formal / WhatsApp */ }
      <div className="custom-step hidden space-y-6" id="custom-step-5">
      <div className="border-b border-outline-variant/20 pb-4">
      <span className="font-label-badge text-caption text-secondary uppercase tracking-wider">Paso 5 de 5</span>
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Tus datos de contacto para la cotizaci&oacute;n</h2>
      <p className="font-body-sm text-body-sm text-outline mt-1">Recibir&aacute;s respuesta en menos de 24 horas con el presupuesto en COP y tiempos de taller:</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-1" htmlFor="custom-client-name">Nombre completo:</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" id="custom-client-name" placeholder="Ej: Mariana Restrepo" type="text" />
      </div>
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-1" htmlFor="custom-client-phone">Celular / WhatsApp (Colombia):</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" id="custom-client-phone" placeholder="Ej: 310 456 7890" type="tel" />
      </div>
      <div className="sm:col-span-2">
      <label className="block font-label-badge text-caption text-outline uppercase mb-1" htmlFor="custom-client-email">Correo electr&oacute;nico:</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" id="custom-client-email" placeholder="mariana@ejemplo.com" type="email" />
      </div>
      </div>
      { /* Resumen del requerimiento antes de enviar */ }
      <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 text-body-sm">
      <span className="font-label-badge text-caption text-primary uppercase block mb-1">Resumen del encargo:</span>
      <p className="text-on-surface-variant" id="custom-summary-text">Categor&iacute;a: Cuadros &middot; Gama: Marfil &amp; Oc&eacute;ano &middot; Detalles bot&aacute;nicos y pan de oro.</p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <button className="flex-1 py-3.5 rounded-full bg-primary text-on-primary font-body-md font-semibold hover:bg-surface-tint shadow-md transition-all flex items-center justify-center gap-2" onClick={event => { submitCustomForm('formal'); }}>
      <MaterialSymbol className="material-symbols-outlined text-sm">send</MaterialSymbol>
      <span>Enviar solicitud formal</span>
      </button>
      <button className="flex-1 py-3.5 rounded-full bg-emerald-700 text-white font-body-md font-semibold hover:bg-emerald-800 shadow-md transition-all flex items-center justify-center gap-2" onClick={event => { submitCustomForm('whatsapp'); }}>
      <MaterialSymbol className="material-symbols-outlined text-sm">chat</MaterialSymbol>
      <span>Cotizar directo por WhatsApp</span>
      </button>
      </div>
      <div className="hidden p-4 rounded-2xl bg-emerald-100 text-emerald-900 border border-emerald-300 text-center font-body-md" id="custom-success-msg">
                  &#127881; <strong>&iexcl;Solicitud enviada con &eacute;xito!</strong> El equipo de Andrea Sosa se comunicar&aacute; contigo v&iacute;a WhatsApp en menos de 24 horas h&aacute;biles.
                </div>
      <div className="flex justify-start pt-2">
      <button className="px-6 py-2 rounded-full border border-outline-variant text-on-surface font-body-sm" onClick={event => { goToCustomStep(4); }}>Atr&aacute;s</button>
      </div>
      </div>
      </div>
      </section>
      { /* ================= VIEW 5: CARRITO & CHECKOUT COLOMBIANO ================= */ }
      <section className="tab-content py-10 px-6 lg:px-12 max-w-7xl mx-auto" id="view-checkout">
      <div className="mb-8">
      <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight">Tu Carrito &amp; Finalizaci&oacute;n de Compra</h1>
      <p className="font-body-sm text-body-sm text-outline">Proceso de pago en Colombia en pesos (COP) con despacho asegurado.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
      { /* Formulario Checkout Colombia (7 cols) */ }
      <div className="lg:col-span-7 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant/20 artistic-shadow-1 space-y-6">
      { /* Paso 1: Datos Personales */ }
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2 mb-4">
      <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs flex items-center justify-center font-bold">1</span>
      <span>Datos del Comprador (Facturaci&oacute;n)</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-1" htmlFor="buyer-cedula">C&eacute;dula o NIT:</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" id="buyer-cedula" placeholder="Ej: 1020456789" type="text" />
      </div>
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-1" htmlFor="buyer-name">Nombre y Apellido:</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" id="buyer-name" placeholder="Ej: Luisa G\xF3mez" type="text" />
      </div>
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-1" htmlFor="buyer-phone">Celular (Para gu&iacute;a):</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" id="buyer-phone" placeholder="Ej: 301 234 5678" type="tel" />
      </div>
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-1" htmlFor="buyer-email">Correo electr&oacute;nico:</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" id="buyer-email" placeholder="luisa@correo.com" type="email" />
      </div>
      </div>
      </div>
      { /* Paso 2: Dirección y Despacho Nacional */ }
      <div className="pt-6 border-t border-outline-variant/20">
      <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2 mb-4">
      <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs flex items-center justify-center font-bold">2</span>
      <span>Destino del Env&iacute;o en Colombia</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-1" htmlFor="shipping-dept">Departamento:</label>
      <select className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" id="shipping-dept" onChange={updateShippingCost}>
      <option value="Antioquia">Antioquia</option>
      <option value="Cundinamarca">Cundinamarca (Bogot&aacute; D.C.)</option>
      <option value="Valle del Cauca">Valle del Cauca</option>
      <option value="Santander">Santander</option>
      <option value="Atl\xE1ntico">Atl&aacute;ntico</option>
      <option value="Especial">Otro departamento (Especial)</option>
      </select>
      </div>
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-1" htmlFor="shipping-city">Ciudad / Municipio:</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" id="shipping-city" placeholder="Ej: Medell\xEDn / Envigado" type="text" defaultValue="Medell\xEDn" />
      </div>
      <div className="sm:col-span-2">
      <label className="block font-label-badge text-caption text-outline uppercase mb-1" htmlFor="shipping-address">Direcci&oacute;n completa y barrio / apto:</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" id="shipping-address" placeholder="Ej: Calle 10 # 32-15 Apto 402, El Poblado" type="text" />
      </div>
      </div>
      </div>
      { /* Paso 3: Pasarelas Colombianas de Pago */ }
      <div className="pt-6 border-t border-outline-variant/20">
      <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold flex items-center gap-2 mb-4">
      <span className="w-6 h-6 rounded-full bg-primary text-on-primary text-xs flex items-center justify-center font-bold">3</span>
      <span>Medio de Pago Seguro Colombia</span>
      </h2>
      <div className="space-y-3">
      { /* Opción Mercado Pago / PSE */ }
      <label className="payment-method-card p-4 rounded-2xl border-2 border-primary bg-primary-fixed/15 flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-3">
      <input defaultChecked={true} className="text-primary focus:ring-0" name="payment_method" type="radio" value="mercadopago" />
      <div>
      <p className="font-body-md font-semibold text-on-surface">Mercado Pago / PSE</p>
      <p className="text-caption text-outline">Tarjetas d&eacute;bito/cr&eacute;dito, transferencias bancarias y PSE.</p>
      </div>
      </div>
      <MaterialSymbol className="material-symbols-outlined text-primary text-2xl">credit_card</MaterialSymbol>
      </label>
      { /* Opción Nequi */ }
      <label className="payment-method-card p-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-3">
      <input className="text-primary focus:ring-0" name="payment_method" type="radio" value="nequi" />
      <div>
      <p className="font-body-md font-semibold text-on-surface">Nequi (Pago directo QR / Celular)</p>
      <p className="text-caption text-outline">Transferencia inmediata a la cuenta oficial de Seahorse.</p>
      </div>
      </div>
      <span className="px-2.5 py-1 rounded bg-[#20002c] text-white font-bold text-caption">NEQUI</span>
      </label>
      { /* Opción Daviplata */ }
      <label className="payment-method-card p-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low flex items-center justify-between cursor-pointer">
      <div className="flex items-center gap-3">
      <input className="text-primary focus:ring-0" name="payment_method" type="radio" value="daviplata" />
      <div>
      <p className="font-body-md font-semibold text-on-surface">Daviplata</p>
      <p className="text-caption text-outline">Transfiere desde tu app Daviplata sin costo extra.</p>
      </div>
      </div>
      <span className="px-2.5 py-1 rounded bg-[#ed1c24] text-white font-bold text-caption">DAVIPLATA</span>
      </label>
      </div>
      </div>
      { /* Botón de Simulación de Pago */ }
      <div className="pt-6">
      <button className="w-full py-4 rounded-full bg-primary text-on-primary font-body-md font-semibold hover:bg-surface-tint shadow-lg transition-transform active:scale-95 flex items-center justify-center gap-2" onClick={processPaymentSimulator}>
      <MaterialSymbol className="material-symbols-outlined text-lg">lock</MaterialSymbol>
      <span>Confirmar y Pagar Pedido ($ COP)</span>
      </button>
      <p className="text-caption text-outline text-center mt-2 flex items-center justify-center gap-1">
      <MaterialSymbol className="material-symbols-outlined text-[14px]">shield</MaterialSymbol>
                    Transacci&oacute;n protegida con cifrado SSL de 256 bits
                  </p>
      </div>
      { /* Simulador de Respuesta de Pago */ }
      <div className="hidden p-5 rounded-2xl border transition-all" id="payment-status-box">
      { /* Rellenado por JS: Exitoso, Pendiente o Rechazado */ }
      </div>
      </div>
      { /* Resumen de Pedido y Artículos (5 cols) */ }
      <div className="lg:col-span-5 bg-surface-container-lowest p-6 sm:p-8 rounded-3xl border border-outline-variant/20 artistic-shadow-1 space-y-6">
      <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold border-b border-outline-variant/20 pb-3">Resumen de la Orden</h2>
      <div className="space-y-4" id="checkout-items-list">
      { /* Rellenado dinámicamente */ }
      </div>
      { /* Cálculos Financieros en COP */ }
      <div className="space-y-3 pt-4 border-t border-outline-variant/20 text-body-sm">
      <div className="flex justify-between text-on-surface-variant">
      <span>Subtotal productos</span>
      <span className="font-medium" id="checkout-subtotal">$250.000 COP</span>
      </div>
      <div className="flex justify-between text-on-surface-variant">
      <span className="flex items-center gap-1">
                      Flete nacional
                      <MaterialSymbol className="material-symbols-outlined text-[14px] text-outline" title="Ciudades principales: $14.000 COP">info</MaterialSymbol>
      </span>
      <span className="font-medium" id="checkout-shipping">$14.000 COP</span>
      </div>
      <div className="flex justify-between text-on-surface font-headline-sm pt-3 border-t border-outline-variant/20">
      <span className="font-bold">Total a pagar</span>
      <span className="font-bold text-primary" id="checkout-total">$264.000 COP</span>
      </div>
      </div>
      <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex items-start gap-3 text-caption text-outline">
      <MaterialSymbol className="material-symbols-outlined text-secondary text-xl">inventory_2</MaterialSymbol>
      <div>
      <strong className="text-on-surface">Empaque de Regalo Gratis:</strong> Todas nuestras piezas viajan protegidas con viruta de papel reciclado, caja r&iacute;gida y lazo de autor.
                  </div>
      </div>
      </div>
      </div>
      </section>
      { /* ================= VIEW 6: PANEL ADMINISTRATIVO PRIVADO ================= */ }
      <section className="tab-content py-8 px-6 lg:px-12 max-w-7xl mx-auto" id="view-admin">
      { /* Barra Superior de Sesión Admin */ }
      <div className="bg-inverse-surface text-inverse-on-surface p-5 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-surface-container-lowest p-1 flex items-center justify-center">
      <img alt="Admin Seahorse" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYa50HIwq_N1cUX6eP-g5MjqBAyJriFiaGjUg2XTSn7qGDhwXkHJTefH53FTtjS9ya_AzFGcB_-dHeAivThW9rWsAo-JGTrIKNb0X_krF-dLOy8pn43bGSxkB6W9x4DeK2-fk2uiRY-qKGdF0tnn0Gk5Qjd0Sz3zMp7C71vP1SzDrxalrksF5vQhrGIh5RsGbuUgsfNVOi_2ch1aRBre1QQUCIVGN6YFWLBv7MtW2gh_6BKetO2yk" />
      </div>
      <div>
      <div className="flex items-center gap-2">
      <h1 className="font-headline-sm text-headline-sm font-semibold">Panel de Control &middot; Seahorse Atelier</h1>
      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-label-badge font-bold">Sesi&oacute;n Activa</span>
      </div>
      <p className="font-caption text-caption text-surface-variant">Usuario: andrea.sosa@seahorse.com.co &middot; Rol: Propietaria / Dise&ntilde;adora</p>
      </div>
      </div>
      <div className="flex items-center gap-3">
      <button className="px-3.5 py-1.5 rounded-full bg-surface-container-highest/20 hover:bg-surface-container-highest/30 text-surface font-label-badge text-caption flex items-center gap-1.5 transition-colors" onClick={event => { toggleMFAStatus(event.currentTarget); }}>
      <MaterialSymbol className="material-symbols-outlined text-[16px] text-emerald-400">verified_user</MaterialSymbol>
      <span id="mfa-badge-text">MFA Activado (2FA)</span>
      </button>
      <button className="px-4 py-1.5 rounded-full bg-primary-container text-surface-container-lowest font-body-sm font-medium hover:bg-primary transition-colors" onClick={event => { navigateTo('home'); }}>
                  Volver a Tienda
                </button>
      </div>
      </div>
      { /* Métricas Clave */ }
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/20 artistic-shadow-1">
      <div className="flex justify-between items-center text-outline mb-2">
      <span className="text-caption font-label-badge uppercase">Ventas del Mes</span>
      <MaterialSymbol className="material-symbols-outlined text-primary">payments</MaterialSymbol>
      </div>
      <p className="font-headline-lg text-headline-lg font-bold text-on-surface">$8.450.000 COP</p>
      <span className="text-caption text-emerald-600 font-medium">&uarr; +18.4% vs mes anterior</span>
      </div>
      <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/20 artistic-shadow-1">
      <div className="flex justify-between items-center text-outline mb-2">
      <span className="text-caption font-label-badge uppercase">Pedidos por Despachar</span>
      <MaterialSymbol className="material-symbols-outlined text-amber-500">local_shipping</MaterialSymbol>
      </div>
      <p className="font-headline-lg text-headline-lg font-bold text-on-surface">14 &oacute;rdenes</p>
      <span className="text-caption text-outline">Coordinadora / Env&iacute;a pendientes</span>
      </div>
      <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/20 artistic-shadow-1">
      <div className="flex justify-between items-center text-outline mb-2">
      <span className="text-caption font-label-badge uppercase">Personalizaciones</span>
      <MaterialSymbol className="material-symbols-outlined text-purple-500">palette</MaterialSymbol>
      </div>
      <p className="font-headline-lg text-headline-lg font-bold text-on-surface">6 solicitudes</p>
      <span className="text-caption text-purple-600 font-medium">3 esperan aprobaci&oacute;n de boceto</span>
      </div>
      <div className="bg-surface-container-lowest p-5 rounded-2xl border border-outline-variant/20 artistic-shadow-1">
      <div className="flex justify-between items-center text-outline mb-2">
      <span className="text-caption font-label-badge uppercase">Obras en Inventario</span>
      <MaterialSymbol className="material-symbols-outlined text-secondary">inventory_2</MaterialSymbol>
      </div>
      <p className="font-headline-lg text-headline-lg font-bold text-on-surface">48 piezas</p>
      <span className="text-caption text-outline">En 5 categor&iacute;as activas</span>
      </div>
      </div>
      { /* Pestañas Internas del Admin */ }
      <div className="bg-surface-container-lowest rounded-3xl border border-outline-variant/20 artistic-shadow-1 overflow-hidden">
      <div className="flex border-b border-outline-variant/20 bg-surface-container-low px-6 overflow-x-auto">
      <button className="admin-tab-btn px-4 py-3.5 font-label-badge text-body-sm border-b-2 border-primary text-primary font-bold" id="admin-tab-btn-pedidos" onClick={event => { switchAdminTab('pedidos'); }}>
                  Pedidos Recientes
                </button>
      <button className="admin-tab-btn px-4 py-3.5 font-label-badge text-body-sm text-outline hover:text-on-surface" id="admin-tab-btn-custom" onClick={event => { switchAdminTab('custom'); }}>
                  Bandeja Personalizaciones
                </button>
      <button className="admin-tab-btn px-4 py-3.5 font-label-badge text-body-sm text-outline hover:text-on-surface" id="admin-tab-btn-inventario" onClick={event => { switchAdminTab('inventario'); }}>
                  Gesti&oacute;n de Inventario
                </button>
      <button className="admin-tab-btn px-4 py-3.5 font-label-badge text-body-sm text-outline hover:text-on-surface" id="admin-tab-btn-seguridad" onClick={event => { switchAdminTab('seguridad'); }}>
                  Seguridad &amp; Auditor&iacute;a
                </button>
      </div>
      { /* Tab 1: Pedidos */ }
      <div className="admin-subview p-6 overflow-x-auto" id="admin-view-pedidos">
      <table className="w-full text-left text-body-sm">
      <thead className="text-caption font-label-badge text-outline uppercase border-b border-outline-variant/20">
      <tr>
      <th className="pb-3">ID Pedido</th>
      <th className="pb-3">Cliente</th>
      <th className="pb-3">Ciudad</th>
      <th className="pb-3">Total COP</th>
      <th className="pb-3">Estado</th>
      <th className="pb-3">Gu&iacute;a / Operador</th>
      <th className="pb-3 text-right">Acci&oacute;n</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/15 text-on-surface">
      <tr>
      <td className="py-3.5 font-mono text-caption font-bold">#SH-2024-891</td>
      <td>Laura Restrepo G&oacute;mez</td>
      <td>Medell&iacute;n (Ant)</td>
      <td className="font-semibold">$199.000 COP</td>
      <td><span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800">En producci&oacute;n</span></td>
      <td>Coordinadora: 772183921</td>
      <td className="text-right">
      <button className="px-3 py-1 rounded-lg border border-outline-variant/40 hover:bg-surface-container text-caption" onClick={event => { alert('Detalle de orden #SH-2024-891: Listo para rotular empaque.'); }}>Ver Ficha</button>
      </td>
      </tr>
      <tr>
      <td className="py-3.5 font-mono text-caption font-bold">#SH-2024-890</td>
      <td>Felipe Jaramillo</td>
      <td>Bogot&aacute; D.C.</td>
      <td className="font-semibold">$394.000 COP</td>
      <td><span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800">Enviado</span></td>
      <td>Env&iacute;a: 092837411</td>
      <td className="text-right">
      <button className="px-3 py-1 rounded-lg border border-outline-variant/40 hover:bg-surface-container text-caption" onClick={event => { alert('Guía Envía #092837411 en tránsito a terminal Puente Aranda.'); }}>Rastrear</button>
      </td>
      </tr>
      <tr>
      <td className="py-3.5 font-mono text-caption font-bold">#SH-2024-889</td>
      <td>Mar&iacute;a Paula Uribe</td>
      <td>Bucaramanga</td>
      <td className="font-semibold">$79.000 COP</td>
      <td><span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800">Entregado</span></td>
      <td>Interrapid&iacute;simo: 449201</td>
      <td className="text-right">
      <span className="text-caption text-outline">Archivado</span>
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      { /* Tab 2: Personalizaciones */ }
      <div className="admin-subview hidden p-6 space-y-4" id="admin-view-custom">
      <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
      <span className="px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-800 text-caption font-bold">Encargo #CUSTOM-41</span>
      <h3 className="font-headline-sm text-headline-sm font-semibold mt-1">Lienzo 80x100cm para Sala de Estar</h3>
      <p className="text-caption text-outline">Cliente: Juliana Estrada (Cali) &middot; Cel: 312 889 0012 &middot; Paleta: Marfil, Coral y Oc&eacute;ano</p>
      </div>
      <div className="flex gap-2">
      <button className="px-4 py-2 rounded-xl bg-primary text-on-primary text-body-sm font-medium" onClick={event => { alert('Boceto digital enviado a cliente para feedback.'); }}>Aprobar Boceto</button>
      <button className="px-4 py-2 rounded-xl border border-outline-variant text-body-sm" onClick={event => { alert('Abriendo WhatsApp con cliente...'); }}>Contactar</button>
      </div>
      </div>
      <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div>
      <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-caption font-bold">Encargo #CUSTOM-42</span>
      <h3 className="font-headline-sm text-headline-sm font-semibold mt-1">Bandeja Bot&aacute;nica con Ramo de Boda Preservado</h3>
      <p className="text-caption text-outline">Cliente: Daniel &amp; Sof&iacute;a (Medell&iacute;n) &middot; Cel: 300 456 1234 &middot; Flores enviadas al taller</p>
      </div>
      <div className="flex gap-2">
      <button className="px-4 py-2 rounded-xl bg-primary text-on-primary text-body-sm font-medium" onClick={event => { alert('Flores recibidas en el taller. Iniciando secado silica gel.'); }}>Confirmar Flores</button>
      <button className="px-4 py-2 rounded-xl border border-outline-variant text-body-sm" onClick={event => { alert('Abriendo WhatsApp con cliente...'); }}>Contactar</button>
      </div>
      </div>
      </div>
      { /* Tab 3: Inventario Editable */ }
      <div className="admin-subview hidden p-6 overflow-x-auto" id="admin-view-inventario">
      <table className="w-full text-left text-body-sm">
      <thead className="text-caption font-label-badge text-outline uppercase border-b border-outline-variant/20">
      <tr>
      <th className="pb-3">Pieza</th>
      <th className="pb-3">Categor&iacute;a</th>
      <th className="pb-3">Precio COP</th>
      <th className="pb-3">Stock F&iacute;sico</th>
      <th className="pb-3">Estado</th>
      <th className="pb-3 text-right">Switch de Stock</th>
      </tr>
      </thead>
      <tbody className="divide-y divide-outline-variant/15 text-on-surface">
      <tr>
      <td className="py-3 font-medium">Posavasos Oc&eacute;ano &amp; Hortensias</td>
      <td>Resina</td>
      <td>$65.000 COP</td>
      <td>8 juegos</td>
      <td><span className="text-emerald-700 font-medium">Disponible</span></td>
      <td className="text-right">
      <input defaultChecked={true} className="rounded text-primary focus:ring-0" onChange={event => { toggleStockAlert(event.currentTarget, 'Posavasos'); }} type="checkbox" />
      </td>
      </tr>
      <tr>
      <td className="py-3 font-medium">Florero Escult&oacute;rico Arco Sol</td>
      <td>Cemento blanco</td>
      <td>$140.000 COP</td>
      <td>3 unidades</td>
      <td><span className="text-amber-700 font-medium">Bajo pedido</span></td>
      <td className="text-right">
      <input defaultChecked={true} className="rounded text-primary focus:ring-0" onChange={event => { toggleStockAlert(event.currentTarget, 'Florero'); }} type="checkbox" />
      </td>
      </tr>
      <tr>
      <td className="py-3 font-medium">Caballito Textil Aureliano</td>
      <td>Peluches</td>
      <td>$120.000 COP</td>
      <td>0 unidades</td>
      <td><span className="text-gray-500 font-medium">Agotado</span></td>
      <td className="text-right">
      <input className="rounded text-primary focus:ring-0" onChange={event => { toggleStockAlert(event.currentTarget, 'Caballito'); }} type="checkbox" />
      </td>
      </tr>
      </tbody>
      </table>
      </div>
      { /* Tab 4: Seguridad & Auditoría */ }
      <div className="admin-subview hidden p-6 space-y-4" id="admin-view-seguridad">
      <div className="flex items-center justify-between pb-3 border-b border-outline-variant/20">
      <div>
      <h3 className="font-headline-sm text-headline-sm font-semibold">Registro de Auditor&iacute;a de Sesi&oacute;n</h3>
      <p className="text-caption text-outline">Monitoreo continuo de integridad y prevenci&oacute;n de intrusiones.</p>
      </div>
      <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-caption font-bold">Estado: Seguro (0 alertas activas)</span>
      </div>
      <div className="space-y-3 font-mono text-caption text-on-surface-variant">
      <div className="p-3 rounded-xl bg-surface-container-low flex justify-between items-center">
      <span>[2024-10-30 15:45:10] LOGIN_SUCCESS: IP 181.129.45.10 (Medell&iacute;n, CO) &middot; MFA Verificado (Authy)</span>
      <span className="text-emerald-600 font-bold">OK</span>
      </div>
      <div className="p-3 rounded-xl bg-surface-container-low flex justify-between items-center">
      <span>[2024-10-30 11:20:05] PRODUCT_UPDATE: Precio modificado para #SH-409 por andrea.sosa</span>
      <span className="text-primary font-bold">REGISTRADO</span>
      </div>
      <div className="p-3 rounded-xl bg-surface-container-low flex justify-between items-center">
      <span>[2024-10-29 23:14:00] BLOCK_ATTEMPT: 3 intentos fallidos desde IP 45.142.12.89 (Tor Exit Node)</span>
      <span className="text-error font-bold">BLOQUEADO</span>
      </div>
      </div>
      </div>
      </div>
      </section>
      { /* ================= VIEW 7: SOBRE NOSOTROS ================= */ }
      <section className="tab-content py-12 px-6 lg:px-12 max-w-5xl mx-auto" id="view-nosotros">
      <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto">
      <span className="font-label-badge text-caption text-primary uppercase tracking-widest">Identidad &amp; Coraz&oacute;n</span>
      <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight mt-2">
                  Seahorse Estudio Creativo by Andrea Sosa
                </h1>
      <p className="font-body-md text-body-md text-on-surface-variant mt-3">
                  Un refugio creativo donde convergen las artes pl&aacute;sticas, el dise&ntilde;o industrial y la ternura de la confecci&oacute;n artesanal.
                </p>
      </div>
      <div className="aspect-[16/9] rounded-3xl overflow-hidden artistic-shadow-2 border border-outline-variant/20 relative">
      <img className="w-full h-full object-cover" data-alt="Panoramic atelier studio view showing craft tables filled with cured botanical epoxy resin art pieces, sculpted white concrete vessels, and colorful thread embroidery hoops bathed in clean golden sunlight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBniOE9C242FbihWh85IUdihipra89sNz37HnqqCtg3tktBe3T4KKi7FQYYdP_M36pfXCDQax9-Jw-JIqFbGy-hyDV1WLoyo2i-obwgj-Ljgf0q_9a6r-xlvgh5ohhLlTtji9qBwCiF0A-du2qBhrMWxFNEo7fzNNgJVmOSC_xv-JTQbHXWAdFsGjGTCQRRoTyoibssEaUTELBX8WwucjwdQzsPF72BCtypmhfVVsU" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 artistic-shadow-1">
      <MaterialSymbol className="material-symbols-outlined text-primary text-3xl mb-2">eco</MaterialSymbol>
      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Materiales Conscientes</h3>
      <p className="font-body-sm text-body-sm text-outline mt-2">Resinas libres de solventes vol&aacute;tiles, cemento blanco nacional y textiles de fibras recuperadas.</p>
      </div>
      <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 artistic-shadow-1">
      <MaterialSymbol className="material-symbols-outlined text-secondary text-3xl mb-2">handshake</MaterialSymbol>
      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Comercio Justo</h3>
      <p className="font-body-sm text-body-sm text-outline mt-2">Cada pieza dignifica las horas de investigaci&oacute;n, pulido y costura hechas por manos colombianas.</p>
      </div>
      <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 artistic-shadow-1">
      <MaterialSymbol className="material-symbols-outlined text-tertiary text-3xl mb-2">hotel_class</MaterialSymbol>
      <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">Dise&ntilde;o de Autor</h3>
      <p className="font-body-sm text-body-sm text-outline mt-2">No seguimos tendencias de hiper-consumo. Producimos colecciones pausadas para perdurar.</p>
      </div>
      </div>
      </div>
      </section>
      { /* ================= VIEW 8: CONTACTO ================= */ }
      <section className="tab-content py-12 px-6 lg:px-12 max-w-4xl mx-auto" id="view-contacto">
      <div className="bg-surface-container-lowest rounded-3xl p-8 sm:p-12 border border-outline-variant/20 artistic-shadow-2">
      <div className="text-center max-w-xl mx-auto mb-10">
      <span className="font-label-badge text-caption text-secondary uppercase tracking-widest">Hablemos de tu Proyecto</span>
      <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight mt-1">Contacto Directo</h1>
      <p className="font-body-sm text-body-sm text-outline mt-2">Vis&iacute;tanos con cita previa en nuestro taller en Medell&iacute;n o escr&iacute;benos directamente.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
      <div>
      <span className="text-caption font-bold text-primary uppercase">Atelier Principal:</span>
      <p className="font-body-md text-on-surface">Medell&iacute;n, Antioquia &mdash; Colombia</p>
      </div>
      <div>
      <span className="text-caption font-bold text-primary uppercase">WhatsApp Oficial:</span>
      <p className="font-body-md text-on-surface">+57 (300) 000-0000</p>
      </div>
      <div>
      <span className="text-caption font-bold text-primary uppercase">Instagram:</span>
      <p className="font-body-md text-secondary">@seahorse.estudiocreativo</p>
      </div>
      <div>
      <span className="text-caption font-bold text-primary uppercase">Horarios de Atenci&oacute;n:</span>
      <p className="font-body-md text-on-surface-variant">Lunes a Viernes: 9:00 AM &ndash; 6:00 PM COT</p>
      </div>
      </div>
      <form className="space-y-4" onSubmit={event => { event.preventDefault(); alert('¡Mensaje enviado a Andrea Sosa! Nos pondremos en contacto pronto.'); }}>
      <div>
      <label className="block text-caption font-label-badge text-outline uppercase mb-1">Nombre:</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" placeholder="Tu nombre" required type="text" />
      </div>
      <div>
      <label className="block text-caption font-label-badge text-outline uppercase mb-1">Correo:</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" placeholder="tu@correo.com" required type="email" />
      </div>
      <div>
      <label className="block text-caption font-label-badge text-outline uppercase mb-1">Mensaje:</label>
      <textarea className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" placeholder="\xBFEn qu\xE9 podemos ayudarte?" required rows={3} />
      </div>
      <button className="w-full py-3 rounded-full bg-primary text-on-primary font-body-md font-medium hover:bg-surface-tint shadow-md" type="submit">
                    Enviar Mensaje
                  </button>
      </form>
      </div>
      </div>
      </section>
      </main>
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
      { /* ================= JAVASCRIPT: ROUTING DINÁMICO & INTERACTIVIDAD ================= */ }</>
    </PrototypePage>
  );
}
