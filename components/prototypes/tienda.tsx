import Link from "next/link";
import { MaterialSymbol } from "./material-symbol";
import { PrototypePage } from "./prototype-page";

export default function TiendaPrototype() {
  return (
    <PrototypePage className="prototype-route-tienda scroll-smooth bg-background text-on-surface antialiased selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen flex flex-col font-body-md text-body-md">
      <>{ /* TopNavBar (Shared Component) */ }
      <header className="bg-surface/90 dark:bg-inverse-surface/90 backdrop-blur-md docked full-width top-0 sticky z-50 shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 py-4 max-w-7xl mx-auto">
      { /* Brand Logo / Seal */ }
      <a className="flex items-center gap-3.5 group" href="#">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-lowest p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
      <img alt="Logotipo oficial Seahorse Estudio Creativo by Andrea Sosa" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFBfoyzftgas6147yOZabAsUhuq4FBLD7CP4Hq4yvYgC3bXe2Gq5V8rUiRSILBJP_kHulYP27bEAiunMAnjnTvMhnnxESLY91UKJ4c47Mr2BYft7T21XwX6Tk01urFaerAXkLYyTiRV8hcfbB_o1YVmk8D6tdyDXtcmUtAb6SOEJi-8LhN-NqY14uH4pMXB-Xjwnpd6c0NR6DZCyX1uAaUxX7TC7vdPc__Ui8YCk98kT1s7rUi-Lr-" />
      </div>
      <div className="flex flex-col">
      <span className="font-headline-md text-headline-md text-secondary dark:text-secondary-fixed tracking-tight font-medium leading-none">
                  Seahorse Estudio Creativo by Andrea Sosa
                </span>
      <span className="font-caption text-caption text-on-surface-variant font-medium tracking-wider mt-0.5">
                  ATELIER &amp; ARTE BOT&Aacute;NICO
                </span>
      </div>
      </a>
      { /* Desktop Navigation Links */ }
      <nav className="hidden md:flex items-center gap-8">
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="/">
                Inicio
              </Link>
      <Link className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-headline-sm text-body-md" href="/tienda">
                Tienda
              </Link>
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="/personaliza">
                Personaliza
              </Link>
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="/sobre-nosotros">
                Sobre Nosotros
              </Link>
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="/contacto">
                Contacto
              </Link>
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="/dashboard">
                Admin
              </Link>
      </nav>
      { /* Trailing Icon Actions & Currency Selector */ }
      <div className="flex items-center gap-4">
      { /* Currency Pill */ }
      <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant font-label-badge text-label-badge border border-outline-variant/30">
                COP
              </span>
      { /* Search Icon */ }
      <button className="p-2 text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 rounded-full hover:bg-surface-container-low" title="Buscar">
      <MaterialSymbol className="material-symbols-outlined" data-icon="search">search</MaterialSymbol>
      </button>
      { /* Account Icon */ }
      <button className="p-2 text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 rounded-full hover:bg-surface-container-low" title="Mi Cuenta">
      <MaterialSymbol className="material-symbols-outlined" data-icon="account_circle">account_circle</MaterialSymbol>
      </button>
      { /* Cart Bag with Badge */ }
      <button className="relative p-2 text-primary hover:text-primary-container transition-all duration-200 rounded-full bg-primary/10 hover:bg-primary/20" title="Carrito">
      <MaterialSymbol className="material-symbols-outlined" data-icon="shopping_bag">shopping_bag</MaterialSymbol>
      <span className="absolute -top-1 -right-1 bg-primary text-on-primary font-label-badge text-caption w-5 h-5 rounded-full flex items-center justify-center font-bold">
                  2
                </span>
      </button>
      { /* Admin Shortcut */ }
      <button className="hidden lg:inline-flex p-2 text-on-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-all duration-200 rounded-full hover:bg-surface-container-low" title="Panel Admin">
      <MaterialSymbol className="material-symbols-outlined" data-icon="admin_panel_settings">admin_panel_settings</MaterialSymbol>
      </button>
      </div>
      </div>
      </header>
      { /* Main Content Canvas */ }
      <main className="flex-grow max-w-7xl mx-auto w-full px-6 lg:px-12 py-8 lg:py-12">
      { /* Hero Editorial Header */ }
      <section className="mb-12 relative overflow-hidden bg-surface-container-low/70 rounded-lg p-8 md:p-14 border border-outline-variant/20 art-shadow-1">
      <div className="max-w-3xl relative z-10">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-badge text-label-badge mb-4">
      <MaterialSymbol className="material-symbols-outlined text-[16px]" data-icon="filter_vintage">filter_vintage</MaterialSymbol>
                COLECCI&Oacute;N 2024 &middot; HECHO A MANO EN COLOMBIA
              </div>
      <h1 className="font-headline-xl text-headline-xl lg:text-display-hero text-on-surface tracking-tight mb-4 font-semibold">
                Cat&aacute;logo de Autor &amp; Piezas &Uacute;nicas
              </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6 font-normal">
                Explora obras artesanales donde conviven la biofilia marina, el cemento blanco escult&oacute;rico, las transparencias en resina bot&aacute;nica y el dise&ntilde;o textil. Objetos de colecci&oacute;n con alma caribe&ntilde;a y curadur&iacute;a de autor.
              </p>
      <div className="flex flex-wrap items-center gap-4 text-on-surface-variant font-caption text-caption">
      <span className="flex items-center gap-1.5">
      <MaterialSymbol className="material-symbols-outlined text-primary text-[18px]" data-icon="check_circle">check_circle</MaterialSymbol>
                  Piezas seriadas y personalizadas
                </span>
      <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
      <span className="flex items-center gap-1.5">
      <MaterialSymbol className="material-symbols-outlined text-primary text-[18px]" data-icon="palette">palette</MaterialSymbol>
                  T&eacute;cnicas mixtas bot&aacute;nicas
                </span>
      <span className="w-1.5 h-1.5 rounded-full bg-outline-variant" />
      <span className="flex items-center gap-1.5">
      <MaterialSymbol className="material-symbols-outlined text-primary text-[18px]" data-icon="local_shipping">local_shipping</MaterialSymbol>
                  Embalaje seguro nacional
                </span>
      </div>
      </div>
      { /* Ambient Decorative Organic Glow */ }
      <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary-fixed/30 filter blur-3xl pointer-events-none" />
      <div className="absolute right-12 top-10 w-48 h-48 rounded-full bg-tertiary-fixed/30 filter blur-2xl pointer-events-none" />
      </section>
      { /* Category Pills Tabs (4 Official Categories) */ }
      <section className="mb-8">
      <div className="flex items-center justify-between pb-3 mb-4">
      <h2 className="font-headline-sm text-headline-sm text-secondary tracking-tight">
                Explorar por Disciplina
              </h2>
      <span className="font-caption text-caption text-on-surface-variant">
                6 Obras disponibles
              </span>
      </div>
      { /* Categories Pills Scrollable */ }
      <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-none">
      { /* All / Active */ }
      <button className="px-5 py-2.5 rounded-full bg-primary text-on-primary font-label-badge text-body-sm shadow-sm transition-all duration-200 whitespace-nowrap flex items-center gap-2">
      <span>Todas las Obras</span>
      <span className="px-2 py-0.5 rounded-full bg-white/20 text-xs font-semibold">6</span>
      </button>
      { /* Cuadros */ }
      <button className="px-5 py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all duration-200 font-label-badge text-body-sm whitespace-nowrap flex items-center gap-2">
      <MaterialSymbol className="material-symbols-outlined text-[18px]" data-icon="palette">palette</MaterialSymbol>
      <span>Cuadros</span>
      </button>
      { /* Estampados */ }
      <button className="px-5 py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all duration-200 font-label-badge text-body-sm whitespace-nowrap flex items-center gap-2">
      <MaterialSymbol className="material-symbols-outlined text-[18px]" data-icon="texture">texture</MaterialSymbol>
      <span>Estampados</span>
      </button>
      { /* Resina */ }
      <button className="px-5 py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all duration-200 font-label-badge text-body-sm whitespace-nowrap flex items-center gap-2">
      <MaterialSymbol className="material-symbols-outlined text-[18px]" data-icon="water_drop">water_drop</MaterialSymbol>
      <span>Resina</span>
      </button>
      { /* Cemento blanco */ }
      <button className="px-5 py-2.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-primary transition-all duration-200 font-label-badge text-body-sm whitespace-nowrap flex items-center gap-2">
      <MaterialSymbol className="material-symbols-outlined text-[18px]" data-icon="architecture">architecture</MaterialSymbol>
      <span>Cemento blanco</span>
      </button>
      </div>
      </section>
      { /* Toolbar: Fast Search, Availability Chips, Sort Select */ }
      <section className="bg-surface-container-lowest p-4 lg:p-6 rounded-lg border border-outline-variant/30 mb-10 art-shadow-1 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
      { /* Search Input */ }
      <div className="relative flex-1 min-w-[260px]">
      <MaterialSymbol className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-outline" data-icon="search">search</MaterialSymbol>
      <input className="w-full pl-11 pr-4 py-2.5 rounded-xl bg-surface-container-low border border-outline-variant/40 text-on-surface font-body-sm text-body-sm placeholder:text-outline focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all" placeholder="Buscar por t\xE9cnica, flor o material..." type="text" />
      </div>
      { /* Quick Availability Chips */ }
      <div className="flex items-center gap-2 overflow-x-auto py-1">
      <span className="font-caption text-caption text-on-surface-variant hidden sm:inline-block mr-1">Estado:</span>
      <button className="px-3 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                Todos
              </button>
      <button className="px-3 py-1.5 rounded-full text-xs font-semibold bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors">
                Disponible
              </button>
      <button className="px-3 py-1.5 rounded-full text-xs font-semibold bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors">
                Bajo pedido
              </button>
      <button className="px-3 py-1.5 rounded-full text-xs font-semibold bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors">
                Personalizable
              </button>
      <button className="px-3 py-1.5 rounded-full text-xs font-semibold bg-surface-container text-on-surface-variant hover:bg-surface-container-high transition-colors">
                Agotado
              </button>
      </div>
      { /* Sorter Dropdown */ }
      <div className="flex items-center gap-2 self-end lg:self-center">
      <MaterialSymbol className="material-symbols-outlined text-outline text-[20px]" data-icon="swap_vert">swap_vert</MaterialSymbol>
      <select className="py-2.5 pl-3 pr-8 rounded-xl bg-surface-container-low border border-outline-variant/40 text-on-surface font-body-sm text-body-sm focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 cursor-pointer">
      <option>Ordenar por: Novedades</option>
      <option>Precio: Menor a Mayor</option>
      <option>Precio: Mayor a Menor</option>
      <option>Popularidad &amp; Galer&iacute;a</option>
      </select>
      </div>
      </section>
      { /* Product Grid: 6 Editorial Art Cards */ }
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      { /* Card 1: Posavasos Océano & Hortensias */ }
      <article className="group bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden art-shadow-1 art-shadow-2 transition-all duration-300 flex flex-col">
      { /* Visual Container */ }
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
      { /* Availability Badge */ }
      <div className="absolute top-3.5 left-3.5 z-10">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#83D9D9]/35 text-[#173D68] backdrop-blur-sm">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Disponible
                  </span>
      </div>
      { /* Quick Wishlist Button */ }
      <button className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-outline hover:text-[#F29A9C] transition-colors shadow-sm" title="Guardar pieza">
      <MaterialSymbol className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</MaterialSymbol>
      </button>
      { /* Product Image */ }
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="An artisanal set of circular botanical resin coasters placed on an ivory textured stone surface. The coasters encapsulate delicate real dried blue hydrangeas and subtle turquoise marine pigments with soft gold leaf accents. Shot in natural warm diffused morning light with coastal studio atmosphere and shallow depth of field." src="https://lh3.googleusercontent.com/aida-public/AB6AXuANmeS0CXFboktI-ad6f2RuIgtHCTiIVXIleZ9xetX1m_mvTw1Paqw6PxEkwx45nNnIVKcu3Fdd6-QnoOQxOmFn_rAn2Qwu1qZSLGG0OS9MBsZl2i_zHHEjAHD_--0OSCwmaEwy6Mtk-SiDUa4wMwSGdxD_YSZXJiVFHstll1Rddju7Hl0UeJvmnUTdp5l6JCwa1YYuh1PLaENhIgyP5xtuHWcaJq5dgXpOm7dn2Ts" />
      </div>
      { /* Meta & Details */ }
      <div className="p-6 flex flex-col flex-grow justify-between">
      <div>
      <div className="flex items-center justify-between text-on-surface-variant font-caption text-caption mb-1.5">
      <span>Categor&iacute;a: Resina</span>
      <span className="flex items-center gap-1 text-primary">
      <MaterialSymbol className="material-symbols-outlined text-[14px]" data-icon="eco">eco</MaterialSymbol>
                      Flores Reales
                    </span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-medium">
                    Posavasos Oc&eacute;ano &amp; Hortensias
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 line-clamp-2">
                    Resina ep&oacute;xica de alta pureza con inclusi&oacute;n de hortensias secadas al aire y tintes azulados inspirados en arrecifes.
                  </p>
      </div>
      <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
      <div className="flex flex-col">
      <span className="font-caption text-caption text-on-surface-variant">Precio de Autor</span>
      <span className="font-label-price text-label-price text-secondary font-semibold">
                      $65.000 COP
                    </span>
      </div>
      <button className="px-4 py-2.5 rounded-full bg-primary-container hover:bg-primary text-on-primary font-label-badge text-body-sm flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md">
      <MaterialSymbol className="material-symbols-outlined text-[18px]" data-icon="add_shopping_cart">add_shopping_cart</MaterialSymbol>
      <span>A&ntilde;adir</span>
      </button>
      </div>
      </div>
      </article>
      { /* Card 2: Florero Escultórico Arco Sol */ }
      <article className="group bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden art-shadow-1 art-shadow-2 transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
      { /* Availability Badge */ }
      <div className="absolute top-3.5 left-3.5 z-10">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#F5D35E]/30 text-[#281B18] backdrop-blur-sm">
      <span className="w-2 h-2 rounded-full bg-[#E5B82A]" />
                    Bajo pedido
                  </span>
      </div>
      <button className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-outline hover:text-[#F29A9C] transition-colors shadow-sm" title="Guardar pieza">
      <MaterialSymbol className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</MaterialSymbol>
      </button>
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A sculptural white cement arch-shaped minimalist vase sitting on an organic ivory linen runner. The textured white concrete features smooth geometric curves with subtle porous imperfections, holding two dried natural pampas grass stems. Soft warm sunlight creates gentle cast shadows highlighting the tactile architectural design." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5rzfANPgrKHE6nU72yGoi0_0w1HVOj8zy5bO0TgXn6-XZhTd64kFoQRE49WgBzAnfBP7CGF_h-LUaCyUSrkoU5knccoICsdVDm77Sx3EwJgbg_7jkuvl_Dd5TfriF0gWC7Y89rXgk-zwwWzeCVwimlhFQCxvUfSCEh3m9PYCmJVKjwT3IMICsqDHMfvowDvVS_C84923YyHCtRbyYYuh6a6dawAr22QtwjqDSwWU" />
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
      <div>
      <div className="flex items-center justify-between text-on-surface-variant font-caption text-caption mb-1.5">
      <span>Categor&iacute;a: Cemento blanco</span>
      <span className="text-on-secondary-container font-medium">Tiempo: 5-8 d&iacute;as</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-medium">
                    Florero Escult&oacute;rico Arco Sol
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 line-clamp-2">
                    Vaciado manual en cemento blanco puro con hidrofugante impermeable ecol&oacute;gico. L&iacute;neas neo-arquitect&oacute;nicas.
                  </p>
      </div>
      <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
      <div className="flex flex-col">
      <span className="font-caption text-caption text-on-surface-variant">Precio de Autor</span>
      <span className="font-label-price text-label-price text-secondary font-semibold">
                      $140.000 COP
                    </span>
      </div>
      <button className="px-4 py-2.5 rounded-full border border-secondary text-secondary hover:bg-[#83D9D9]/20 font-label-badge text-body-sm flex items-center gap-2 transition-all duration-200">
      <MaterialSymbol className="material-symbols-outlined text-[18px]" data-icon="edit_calendar">edit_calendar</MaterialSymbol>
      <span>Encargar</span>
      </button>
      </div>
      </div>
      </article>
      { /* Card 3: Lienzo 'Mareas de Andrea' */ }
      <article className="group bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden art-shadow-1 art-shadow-2 transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
      { /* Availability Badge */ }
      <div className="absolute top-3.5 left-3.5 z-10">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#B7A1DF]/35 text-[#173D68] backdrop-blur-sm">
      <span className="w-2 h-2 rounded-full bg-tertiary" />
                    Personalizable
                  </span>
      </div>
      <button className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-outline hover:text-[#F29A9C] transition-colors shadow-sm" title="Guardar pieza">
      <MaterialSymbol className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</MaterialSymbol>
      </button>
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="A contemporary mixed-media wall canvas artwork exhibiting thick palette-knife acrylic ocean waves textured with raw woven textile fibers and delicate seahorse motifs. Soft turquoise, seafoam cyan, and deep navy blend into sand-colored ivory linen. Gallery setting with studio lighting highlighting the rich dimensional impasto texture." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPb-THwqqxpjWmYUYSu1gziaazT_kW3bmlcIjhk3EdHetqpO_jj3UPAph_Fr1zWBNZifbfJdhC1ZL0DaGmV_KsD-zwpJm0tQGkvdLhiKINS_yZlYkGdq7Zwha5gRuEOAwA-VBw_Z1UoFFbgEDThH6lpYlv38IOMumOTK_chAnUpXfOOu78eLMcYoa_PqA10LmO-jOztRV09z3HuxVtBvcSh2kDDb5CdLgg6phh8Uk" />
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
      <div>
      <div className="flex items-center justify-between text-on-surface-variant font-caption text-caption mb-1.5">
      <span>Categor&iacute;a: Cuadros</span>
      <span className="text-tertiary font-medium">Paleta a medida</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-medium">
                    Lienzo &apos;Mareas de Andrea&apos;
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 line-clamp-2">
                    Obra de gran formato combinando hilo hilado a mano, arenas del Caribe y capas acr&iacute;licas vidriadas sobre lino.
                  </p>
      </div>
      <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
      <div className="flex flex-col">
      <span className="font-caption text-caption text-on-surface-variant">Precio Base</span>
      <span className="font-label-price text-label-price text-secondary font-semibold">
                      $380.000 COP
                    </span>
      </div>
      <button className="px-4 py-2.5 rounded-full bg-tertiary-container/40 hover:bg-tertiary-container text-on-tertiary-container font-label-badge text-body-sm flex items-center gap-2 transition-all duration-200">
      <MaterialSymbol className="material-symbols-outlined text-[18px]" data-icon="tune">tune</MaterialSymbol>
      <span>Personalizar</span>
      </button>
      </div>
      </div>
      </article>
      { /* Card 4: Caballito Textil 'Aureliano' */ }
      <article className="group bg-surface-container-lowest/80 rounded-lg border border-outline-variant/30 overflow-hidden art-shadow-1 transition-all duration-300 flex flex-col opacity-90 hover:opacity-100">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
      { /* Availability Badge */ }
      <div className="absolute top-3.5 left-3.5 z-10">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#EADCC9] text-on-surface-variant backdrop-blur-sm line-through">
                    Agotado
                  </span>
      </div>
      <button className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-outline hover:text-[#F29A9C] transition-colors shadow-sm" title="Guardar pieza">
      <MaterialSymbol className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</MaterialSymbol>
      </button>
      <img className="w-full h-full object-cover grayscale-[25%] group-hover:grayscale-0 transition-transform duration-500 group-hover:scale-105" data-alt="An artisanal plush collectible seahorse doll named Aureliano, exquisitely handcrafted from soft vintage organic cotton, cyan corduroy, and coral felt. Hand-stitched with intricate marine filigrees and iridescent thread. Posed gracefully against a warm neutral ivory art atelier background in soft studio illumination." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz6EIDf0k4DmnsyVYy14XiutxSisURooyKQEQfiZQCwQoTtRvrU0AANN-A13W3xQdER-Onpmp2cT-kSwD08JmrgvDotsMtmw2UcWDabB8LFPOtpRtctrItpkzBN_80Qdv58m4oXnMX4zLuyPIDGQ1hjlHBjsj825Zua5XJzrik_Ul9-BrDPFmWlrAUVa2slSIzzKM6iWZ39dU0JpQC7Q-U3VL35GMyHwoUYtoC73o" />
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
      <div>
      <div className="flex items-center justify-between text-on-surface-variant font-caption text-caption mb-1.5">
      <span>Categor&iacute;a: Estampados</span>
      <span className="text-error font-medium">Edici&oacute;n limitada (12/12)</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface line-through decoration-outline font-medium">
                    Caballito Textil &apos;Aureliano&apos;
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 line-clamp-2">
                    Figura escult&oacute;rica textil bordada con pedrer&iacute;a marina, algod&oacute;n reciclado y relleno hipoalerg&eacute;nico artesanal.
                  </p>
      </div>
      <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
      <div className="flex flex-col">
      <span className="font-caption text-caption text-on-surface-variant">&Uacute;ltimo Precio</span>
      <span className="font-label-price text-label-price text-on-surface-variant/70 font-semibold line-through">
                      $120.000 COP
                    </span>
      </div>
      <button className="px-4 py-2.5 rounded-full bg-surface-container text-on-surface-variant hover:text-primary font-label-badge text-body-sm flex items-center gap-2 transition-all duration-200">
      <MaterialSymbol className="material-symbols-outlined text-[18px]" data-icon="notifications">notifications</MaterialSymbol>
      <span>Avisarme</span>
      </button>
      </div>
      </div>
      </article>
      { /* Card 5: Set Aretes Gota Marina */ }
      <article className="group bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden art-shadow-1 art-shadow-2 transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
      { /* Availability Badge */ }
      <div className="absolute top-3.5 left-3.5 z-10">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#83D9D9]/35 text-[#173D68] backdrop-blur-sm">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Disponible
                  </span>
      </div>
      <button className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-outline hover:text-[#F29A9C] transition-colors shadow-sm" title="Guardar pieza">
      <MaterialSymbol className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</MaterialSymbol>
      </button>
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="Pair of botanical statement teardrop earrings made of crystal clear jewelry resin containing tiny submerged turquoise forget-me-not petals and gold leaf flakes. Mounted on handcrafted silver hardware, laid delicately on an oyster shell placed on warm ivory sand under bright soft daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIUI9AMmRSwk6VkxXpSgWgPUdSC6KgD02HPNcH9gsEF-bzGJIsszzpjaEtY0EZZV0QQdR-SZf4KcaWNI0p7ur9Qni3sWZgl1UH0pEcH4ziLdmnIjQgDYoiMdK9H5jlQni-I9pRpisq5JvW15LwbZVzoaht60CuStbTu5wnDJdwjy1ytZMiN2V_QKPnzy54YUYdgJh817PdmvrXOhwoGmyjidZN1dhaOAzYc3CC7Ac" />
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
      <div>
      <div className="flex items-center justify-between text-on-surface-variant font-caption text-caption mb-1.5">
      <span>Categor&iacute;a: Resina Bot&aacute;nica</span>
      <span className="text-primary font-medium">Pieza ligera</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-medium">
                    Set Aretes Gota Marina
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 line-clamp-2">
                    Joyer&iacute;a bot&aacute;nica encapsulada en resina UV ultra resistente con herrajes hipoalerg&eacute;nicos en acero ba&ntilde;ado.
                  </p>
      </div>
      <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
      <div className="flex flex-col">
      <span className="font-caption text-caption text-on-surface-variant">Precio de Autor</span>
      <span className="font-label-price text-label-price text-secondary font-semibold">
                      $48.000 COP
                    </span>
      </div>
      <button className="px-4 py-2.5 rounded-full bg-primary-container hover:bg-primary text-on-primary font-label-badge text-body-sm flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md">
      <MaterialSymbol className="material-symbols-outlined text-[18px]" data-icon="add_shopping_cart">add_shopping_cart</MaterialSymbol>
      <span>A&ntilde;adir</span>
      </button>
      </div>
      </div>
      </article>
      { /* Card 6: Bandeja Orgánica Nube */ }
      <article className="group bg-surface-container-lowest rounded-lg border border-outline-variant/30 overflow-hidden art-shadow-1 art-shadow-2 transition-all duration-300 flex flex-col">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container-low">
      { /* Availability Badge */ }
      <div className="absolute top-3.5 left-3.5 z-10">
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold tracking-wider uppercase bg-[#83D9D9]/35 text-[#173D68] backdrop-blur-sm">
      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    Disponible
                  </span>
      </div>
      <button className="absolute top-3.5 right-3.5 z-10 w-9 h-9 rounded-full bg-surface-container-lowest/80 backdrop-blur-md flex items-center justify-center text-outline hover:text-[#F29A9C] transition-colors shadow-sm" title="Guardar pieza">
      <MaterialSymbol className="material-symbols-outlined text-[20px]" data-icon="favorite">favorite</MaterialSymbol>
      </button>
      <img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" data-alt="An organic curved decorative trinket tray handcrafted from white cement with delicate golden painted edges in a fluid cloud shape. Placed atop a light oak wood coffee table holding a crystal perfume bottle and dried sea coral. High-end light-mode architectural lighting with soft organic textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrKuAe1jow1sWmEH0NmIcvj7uhcyjWsp5YJ9ksnVP3frG2iPw5PcywoZy0hWiPK7HTZI2WGrXz5_UqyF892l7G55omGHPu_I5FTQidM5dogIwNLYw8WvcogYZlLN1_Nxw93WRxnD1w3pVaWTHQVbuaYxCDtfduCapCehq_KYd114iNZiVWrqzbUwmjpUaP4Udlcbo67nx_iVcnnMZ-AlMy3iK9bMSQsf5W5twbz7I" />
      </div>
      <div className="p-6 flex flex-col flex-grow justify-between">
      <div>
      <div className="flex items-center justify-between text-on-surface-variant font-caption text-caption mb-1.5">
      <span>Categor&iacute;a: Cemento blanco</span>
      <span className="text-secondary font-medium">Borde Dorado</span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface group-hover:text-primary transition-colors font-medium">
                    Bandeja Org&aacute;nica Nube
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5 line-clamp-2">
                    Bandeja vaciadora biom&oacute;rfica de cemento blanco marfil, pulida a mano con finas veladuras de pigmento oro c&aacute;lido.
                  </p>
      </div>
      <div className="mt-6 pt-4 border-t border-outline-variant/20 flex items-center justify-between">
      <div className="flex flex-col">
      <span className="font-caption text-caption text-on-surface-variant">Precio de Autor</span>
      <span className="font-label-price text-label-price text-secondary font-semibold">
                      $95.000 COP
                    </span>
      </div>
      <button className="px-4 py-2.5 rounded-full bg-primary-container hover:bg-primary text-on-primary font-label-badge text-body-sm flex items-center gap-2 transition-all duration-200 shadow-sm hover:shadow-md">
      <MaterialSymbol className="material-symbols-outlined text-[18px]" data-icon="add_shopping_cart">add_shopping_cart</MaterialSymbol>
      <span>A&ntilde;adir</span>
      </button>
      </div>
      </div>
      </article>
      </section>
      { /* Shipping & National Guarantee Banner */ }
      <section className="bg-surface-container p-8 lg:p-10 rounded-lg border border-outline-variant/30 art-shadow-1 mb-12">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
      <div className="flex items-center gap-5">
      <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
      <MaterialSymbol className="material-symbols-outlined text-[34px]" data-icon="verified">verified</MaterialSymbol>
      </div>
      <div>
      <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    Env&iacute;os Asegurados a Toda Colombia
                  </h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1 max-w-xl">
                    Cada obra viaja con embalaje de alta amortiguaci&oacute;n bot&aacute;nica y seguro completo de rotura a trav&eacute;s de nuestras alianzas log&iacute;sticas oficiales:
                  </p>
      </div>
      </div>
      { /* Couriers Badges */ }
      <div className="flex flex-wrap items-center gap-3">
      <div className="px-4 py-2 bg-surface-container-lowest rounded-xl border border-outline-variant/40 flex items-center gap-2 font-label-badge text-body-sm text-on-surface">
      <MaterialSymbol className="material-symbols-outlined text-primary text-[18px]" data-icon="local_shipping">local_shipping</MaterialSymbol>
      <span>Coordinadora</span>
      </div>
      <div className="px-4 py-2 bg-surface-container-lowest rounded-xl border border-outline-variant/40 flex items-center gap-2 font-label-badge text-body-sm text-on-surface">
      <MaterialSymbol className="material-symbols-outlined text-secondary text-[18px]" data-icon="package_2">package_2</MaterialSymbol>
      <span>Servientrega</span>
      </div>
      <div className="px-4 py-2 bg-surface-container-lowest rounded-xl border border-outline-variant/40 flex items-center gap-2 font-label-badge text-body-sm text-on-surface">
      <MaterialSymbol className="material-symbols-outlined text-tertiary text-[18px]" data-icon="speed">speed</MaterialSymbol>
      <span>Inter Rapid&iacute;simo</span>
      </div>
      </div>
      </div>
      </section>
      </main>
      { /* Footer (Shared Component) */ }
      <footer className="bg-surface-container dark:bg-inverse-surface border-t border-outline-variant/20 dark:border-outline/10 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 lg:px-12 py-8 max-w-7xl mx-auto gap-4">
      { /* Brand & Copyright */ }
      <div className="flex flex-col items-center md:items-start text-center md:text-left gap-1">
      <span className="font-headline-md text-headline-md text-secondary dark:text-secondary-fixed tracking-tight">
                Seahorse Estudio Creativo by Andrea Sosa
              </span>
      <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant">
                &copy; 2024 Seahorse Estudio Creativo by Andrea Sosa. Hecho a mano y con dise&ntilde;o de autor en Colombia. Todos los derechos reservados.
              </p>
      </div>
      { /* Links Defined in JSON */ }
      <nav className="flex flex-wrap items-center justify-center md:justify-end gap-x-6 gap-y-2">
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-sm text-body-sm transition-colors duration-150" href="/tienda">
                Cat&aacute;logo
              </Link>
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-sm text-body-sm transition-colors duration-150" href="/personaliza">
                Personalizaci&oacute;n
              </Link>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-sm text-body-sm transition-colors duration-150" href="#">
                Env&iacute;os en Colombia
              </a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-sm text-body-sm transition-colors duration-150" href="#">
                T&eacute;rminos y Condiciones
              </a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-sm text-body-sm transition-colors duration-150" href="#">
                Privacidad
              </a>
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-sm text-body-sm transition-colors duration-150" href="/dashboard">
                Panel Admin
              </Link>
      </nav>
      </div>
      </footer></>
    </PrototypePage>
  );
}
