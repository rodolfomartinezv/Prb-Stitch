"use client";

import { useEffect, type ReactNode } from "react";
import {
  applyCatalogFilters,
  handleHomeInteraction,
  initializeHomePrototype,
  navigateTo,
  focusSearch,
  toggleCartDrawer,
  toggleMobileMenu,
} from "./home-interactions";
import { MaterialSymbol } from "./material-symbol";
import { PrototypePage } from "./prototype-page";

export type SharedPage = "tienda" | "personaliza" | "sobre-nosotros" | "contacto";
type NavigationItemId = "home" | "catalogo" | "personaliza" | "nosotros" | "contacto";

const ACTIVE_NAV_ITEM: Record<SharedPage, NavigationItemId> = {
  tienda: "catalogo",
  personaliza: "personaliza",
  "sobre-nosotros": "nosotros",
  contacto: "contacto",
};

const NAV_ITEMS: ReadonlyArray<{
  id: NavigationItemId;
  desktopLabel: string;
  mobileLabel: string;
  target: string;
}> = [
  { id: "home", desktopLabel: "Inicio", mobileLabel: "Inicio", target: "home" },
  { id: "catalogo", desktopLabel: "Tienda", mobileLabel: "Tienda / Catálogo", target: "catalogo" },
  { id: "personaliza", desktopLabel: "Personaliza", mobileLabel: "Personaliza a Medida", target: "personaliza" },
  { id: "nosotros", desktopLabel: "Sobre Nosotros", mobileLabel: "Sobre Nosotros", target: "nosotros" },
  { id: "contacto", desktopLabel: "Contacto", mobileLabel: "Contacto", target: "contacto" },
];

function DesktopNavigation({
  activeNavItem,
}: Readonly<{ activeNavItem: NavigationItemId }>) {
  return (
    <nav className="hidden md:flex items-center gap-6 lg:gap-8" id="main-nav-links">
      {NAV_ITEMS.map((item) => {
        const isActive = activeNavItem === item.id;
        const activeClassName = "text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-headline-sm text-body-md";
        const inactiveClassName = "text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-md text-body-md";

        return (
          <button
            aria-current={isActive ? "page" : undefined}
            className={`nav-item ${isActive ? activeClassName : inactiveClassName} transition-colors`}
            id={`nav-btn-${item.id}`}
            key={item.id}
            onClick={() => navigateTo(item.target)}
          >
            {item.desktopLabel}
          </button>
        );
      })}
      <button className="nav-item text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high/60" id="nav-btn-admin" onClick={() => navigateTo("admin")}>
        <MaterialSymbol className="material-symbols-outlined text-[16px]">admin_panel_settings</MaterialSymbol>
        <span className="font-label-badge text-label-badge">Admin</span>
      </button>
    </nav>
  );
}

function MobileNavigation({
  activeNavItem,
}: Readonly<{ activeNavItem: NavigationItemId }>) {
  return (
    <div className="hidden md:hidden px-6 py-4 bg-surface-container-low border-b border-outline-variant/20 flex flex-col gap-3" id="mobile-nav-panel">
      {NAV_ITEMS.map((item) => {
        const isActive = activeNavItem === item.id;
        const activeClassName = "font-headline-sm text-primary font-medium";
        const inactiveClassName = "font-body-md text-on-surface-variant";

        return (
          <button
            aria-current={isActive ? "page" : undefined}
            className={`text-left py-2 ${isActive ? activeClassName : inactiveClassName} text-body-md`}
            key={item.id}
            onClick={() => {
              navigateTo(item.target);
              toggleMobileMenu();
            }}
          >
            {item.mobileLabel}
          </button>
        );
      })}
      <button className="text-left py-2 font-body-md text-body-md text-tertiary flex items-center gap-2" onClick={() => { navigateTo("admin"); toggleMobileMenu(); }}>
        <MaterialSymbol className="material-symbols-outlined text-sm">admin_panel_settings</MaterialSymbol> Panel Admin
      </button>
    </div>
  );
}

export function ContentShared({
  page,
  children,
}: Readonly<{
  page: SharedPage;
  children: ReactNode;
}>) {
  const activeNavItem = ACTIVE_NAV_ITEM[page];

  useEffect(() => {
    initializeHomePrototype();
    if (page !== "tienda") return;

    const params = new URLSearchParams(window.location.search);
    const category = params.get("categoria");
    if (category) {
      const radio = Array.from(
        document.querySelectorAll<HTMLInputElement>('input[name="cat-filter"]'),
      ).find((option) => option.value === category);
      if (radio) {
        radio.checked = true;
        applyCatalogFilters();
      }
    }
    if (params.get("focus") === "search") {
      document.getElementById("catalog-search-input")?.focus();
    }
  }, [page]);

  return (
    <PrototypePage
      className={`prototype-route-${page} scroll-smooth bg-background text-on-surface antialiased font-body-md min-h-screen flex flex-col selection:bg-primary-container/30 selection:text-primary`}
      onClick={handleHomeInteraction}
    >
      <header className="docked full-width top-0 sticky z-50 bg-surface/90 dark:bg-inverse-surface/90 backdrop-blur-md shadow-sm dark:shadow-none border-b border-outline-variant/30 dark:border-outline/20">
        <div className="flex justify-between items-center w-full px-6 lg:px-12 py-4 max-w-7xl mx-auto">
          { /* Brand Logo & Isotype */ }
          <button className="flex items-center gap-3 group transition-transform active:scale-95 border-0 bg-transparent p-0 text-left" onClick={() => navigateTo("home")} type="button">
            <div className="w-20 h-20 rounded-full p-1 bg-surface-container-lowest border border-outline-variant/20 shadow-sm flex items-center justify-center overflow-hidden">
              <img alt="Logotipo oficial Seahorse Estudio Creativo by Andrea Sosa" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbYa50HIwq_N1cUX6eP-g5MjqBAyJriFiaGjUg2XTSn7qGDhwXkHJTefH53FTtjS9ya_AzFGcB_-dHeAivThW9rWsAo-JGTrIKNb0X_krF-dLOy8pn43bGSxkB6W9x4DeK2-fk2uiRY-qKGdF0tnn0Gk5Qjd0Sz3zMp7C71vP1SzDrxalrksF5vQhrGIh5RsGbuUgsfNVOi_2ch1aRBre1QQUCIVGN6YFWLBv7MtW2gh_6BKetO2yk" />
            </div>
            <div className="w-40 h-14 flex items-center">
              <img alt="Seahorse Estudio Creativo by Andrea Sosa" className="w-full h-full object-contain object-left" src="/images/Tipografia%20Seahorse.png" />
            </div>
          </button>
          { /* Desktop Navigation Links (Direct match from Shared JSON) */ }
          <DesktopNavigation activeNavItem={activeNavItem} />
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
            <button className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" onClick={event => { navigateTo("admin"); }} title="Perfil Administrador">
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
        <MobileNavigation activeNavItem={activeNavItem} />
      </header>
      <main className="flex-grow">{children}</main>
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
            <button className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-sm text-body-sm" onClick={event => { navigateTo("catalogo"); }}>Cat&aacute;logo</button>
            <button className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-sm text-body-sm" onClick={event => { navigateTo("personaliza"); }}>Personalizaci&oacute;n</button>
            <button className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-sm text-body-sm" onClick={event => { alert("Envíos a todo el territorio colombiano asegurados con Coordinadora, Envía e Interrapidísimo."); }}>Env&iacute;os en Colombia</button>
            <button className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-sm text-body-sm" onClick={event => { alert("Términos y condiciones de obras de autor y pedidos personalizados."); }}>T&eacute;rminos y Condiciones</button>
            <button className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-sm text-body-sm" onClick={event => { alert("Política de tratamiento de datos personales conforme a la ley colombiana 1581 de 2012."); }}>Privacidad</button>
            <button className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-sm text-body-sm font-medium underline" onClick={event => { navigateTo("admin"); }}>Panel Admin</button>
          </nav>
        </div>
      </footer>
      <button aria-label="Cerrar carrito" className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm z-50 hidden transition-opacity border-0 p-0" id="cart-drawer-overlay" onClick={() => toggleCartDrawer(false)} type="button" />
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
          <button className="w-full py-3.5 rounded-full bg-primary text-on-primary font-body-md font-semibold hover:bg-surface-tint shadow-md transition-all flex items-center justify-center gap-2" onClick={event => { toggleCartDrawer(false); navigateTo("checkout"); }}>
            <span>Ir a pagar en Colombia</span>
            <MaterialSymbol className="material-symbols-outlined text-sm">arrow_forward</MaterialSymbol>
          </button>
        </div>
      </div>
    </PrototypePage>
  );
}
