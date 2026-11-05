"use client";

import { handleCustomizerSubmit, handleObjectTypeChange } from "./customizer-interactions";
import Link from "next/link";
import { MaterialSymbol } from "./material-symbol";
import { PrototypePage } from "./prototype-page";

export default function PersonalizaPrototype() {
  return (
    <PrototypePage className="prototype-route-personaliza scroll-smooth bg-surface text-on-surface min-h-screen flex flex-col selection:bg-primary-container selection:text-on-primary-container font-body-md text-body-md antialiased">
      <><div className="flex flex-col flex-grow">{ /* TopNavBar (Shared Component) */ }
      <header className="bg-surface/90 dark:bg-inverse-surface/90 backdrop-blur-md docked full-width top-0 sticky z-50 shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 py-4 max-w-7xl mx-auto">
      { /* Brand Logo & Isotype */ }
      <a className="flex items-center gap-3 group" href="#">
      <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-lowest p-1 border border-outline-variant/30 shadow-xs flex-shrink-0">
      <img alt="Logotipo oficial Seahorse Estudio Creativo by Andrea Sosa" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFBfoyzftgas6147yOZabAsUhuq4FBLD7CP4Hq4yvYgC3bXe2Gq5V8rUiRSILBJP_kHulYP27bEAiunMAnjnTvMhnnxESLY91UKJ4c47Mr2BYft7T21XwX6Tk01urFaerAXkLYyTiRV8hcfbB_o1YVmk8D6tdyDXtcmUtAb6SOEJi-8LhN-NqY14uH4pMXB-Xjwnpd6c0NR6DZCyX1uAaUxX7TC7vdPc__Ui8YCk98kT1s7rUi-Lr-" />
      </div>
      <div className="flex flex-col">
      <span className="font-headline-md text-headline-md text-secondary dark:text-secondary-fixed tracking-tight font-medium leading-none">
                  Seahorse Estudio Creativo
                </span>
      <span className="font-caption text-caption text-on-surface-variant tracking-wider font-light mt-0.5">
                  by Andrea Sosa
                </span>
      </div>
      </a>
      { /* Desktop Nav Links */ }
      <nav className="hidden md:flex items-center space-x-8">
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="/">
                Inicio
              </Link>
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="/tienda">
                Tienda
              </Link>
      { /* ACTIVE TAB: Personaliza */ }
      <Link className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-headline-sm text-body-md flex items-center gap-1.5" href="/personaliza">
      <span>Personaliza</span>
      <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary-container" />
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
      { /* Trailing Actions */ }
      <div className="flex items-center space-x-4 lg:space-x-6">
      <button className="text-on-surface-variant hover:text-primary transition-colors p-1" title="Buscar">
      <MaterialSymbol className="material-symbols-outlined text-[22px]">search</MaterialSymbol>
      </button>
      <span className="font-label-badge text-label-badge text-primary bg-primary-fixed/30 px-2 py-0.5 rounded-full border border-primary-container/20">
                COP
              </span>
      <button className="relative flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors" title="Carrito de compras">
      <MaterialSymbol className="material-symbols-outlined text-[20px] text-primary" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</MaterialSymbol>
      <span className="font-label-badge text-label-badge text-on-surface font-semibold">2</span>
      <span className="sr-only">Carrito</span>
      </button>
      <button className="hidden sm:flex text-on-surface-variant hover:text-primary transition-colors p-1" title="Mi Cuenta">
      <MaterialSymbol className="material-symbols-outlined text-[22px]">account_circle</MaterialSymbol>
      </button>
      <button className="hidden lg:flex text-on-surface-variant hover:text-primary transition-colors p-1" title="Panel Admin">
      <MaterialSymbol className="material-symbols-outlined text-[22px]">admin_panel_settings</MaterialSymbol>
      </button>
      </div>
      </div>
      </header>
      { /* Main Editorial Content Area */ }
      <main className="flex-grow max-w-7xl mx-auto px-6 lg:px-12 py-10">
      { /* Hero Editorial Asymmetric Banner */ }
      <section className="mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-surface-container-low rounded-xl p-8 lg:p-14 border border-outline-variant/30 art-shadow-1 relative overflow-hidden">
      { /* Subtle Oceanic Radial Decorative Glow */ }
      <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-primary-container/10 blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-tertiary-container/15 blur-3xl pointer-events-none" />
      { /* Left Column: Editorial Manifesto (7 cols) */ }
      <div className="lg:col-span-7 space-y-6 relative z-10">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed/40 text-on-primary-fixed-variant border border-primary-fixed font-label-badge text-label-badge uppercase tracking-wider">
      <MaterialSymbol className="material-symbols-outlined text-[16px]">palette</MaterialSymbol>
      <span>Taller a Medida &bull; Hecho a Mano en Colombia</span>
      </div>
      <h1 className="font-display-hero text-headline-xl lg:text-display-hero text-secondary font-semibold tracking-tight leading-tight">
                  Crea Tu Pieza &Uacute;nica con Andrea Sosa
                </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl font-light leading-relaxed">
                  Un di&aacute;logo &iacute;ntimo entre tus memorias, la serenidad marina y el arte bot&aacute;nico contempor&aacute;neo. Co-dise&ntilde;amos cuadros sobre lino de autor, bandejas vertidas con resina cristalina, objetos escult&oacute;ricos en cemento blanco y acr&iacute;licos texturizados irrepetibles.
                </p>
      { /* Key Curatorial Pillars */ }
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-outline-variant/30">
      <div>
      <span className="font-headline-sm text-headline-sm text-primary block">5 - 8 D&iacute;as</span>
      <span className="font-caption text-caption text-on-surface-variant">Taller artesanal pausado</span>
      </div>
      <div>
      <span className="font-headline-sm text-headline-sm text-secondary block">100% &Uacute;nica</span>
      <span className="font-caption text-caption text-on-surface-variant">Certificado de autor&iacute;a</span>
      </div>
      <div>
      <span className="font-headline-sm text-headline-sm text-primary block">Todo el Pa&iacute;s</span>
      <span className="font-caption text-caption text-on-surface-variant">Env&iacute;os seguros en Colombia</span>
      </div>
      </div>
      </div>
      { /* Right Column: Visual Frame Showcase (5 cols) */ }
      <div className="lg:col-span-5 relative z-10">
      <div className="relative group rounded-lg overflow-hidden art-shadow-2 bg-surface-container-lowest p-2 border border-outline-variant/40">
      <img className="w-full h-80 lg:h-96 object-cover rounded-DEFAULT transition-transform duration-700 group-hover:scale-105" data-alt="An artist's hands carefully pouring translucent aquamarine and gold pigmented epoxy resin onto a handcrafted ivory white concrete sculpture in a serene sunlit creative studio in Colombia, surrounded by dried coastal botanicals and linen textures." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjOAoJIeF3JtG6UyUATBYC-zEF2wx8bBVN5QY1AkTUQiLY2DqAy16anNspEwWNiYwP48jhinr_wnavP0YYDLf1bQQcUCCtlQnyBSWftxogN9BiLZJcwcaczCxkZMDtGS6f3-9tJkRVxXTOg3A7LCj5vXpQUPJmEwg3DFPtmp-ZsqldN_PXwJFouRARW9T_p7eEQcvpbqjEWnoPcxZPZA3MAb_5rQ7Q9qZqi_lSdEk" />
      <div className="absolute bottom-4 left-4 right-4 bg-surface/90 backdrop-blur-md p-3 rounded-DEFAULT border border-outline-variant/20 flex items-center justify-between">
      <div>
      <p className="font-headline-sm text-body-md text-on-surface font-medium leading-none">Taller Seahorse, Colombia</p>
      <p className="font-caption text-caption text-on-surface-variant mt-1">Acabado bot&aacute;nico y pigmentaci&oacute;n marina</p>
      </div>
      <MaterialSymbol className="material-symbols-outlined text-primary text-[24px]">verified</MaterialSymbol>
      </div>
      </div>
      </div>
      </div>
      </section>
      { /* Multi-step Customization Configurator */ }
      <section className="mb-20">
      <div className="text-center max-w-3xl mx-auto mb-12">
      <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest block mb-2">Configurador Sensorial</span>
      <h2 className="font-headline-xl text-headline-xl text-secondary font-medium">Configura Tu Obra en 5 Pasos</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-2">
                Selecciona formas, materias primas de la costa, texturas minerales y dimensiones para que Andrea elabore una propuesta personalizada.
              </p>
      </div>
      { /* Configurator Shell */ }
      <form className="space-y-12" id="customizer-form" onChange={event => { handleObjectTypeChange(event); }} onSubmit={event => { handleCustomizerSubmit(event); }}>
      { /* STEP 1: Object Type Selection */ }
      <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-xl border border-outline-variant/20 art-shadow-1">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/20">
      <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-body-md font-semibold">1</span>
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface font-medium">Selecci&oacute;n de Tipo de Objeto</h3>
      <p className="font-caption text-caption text-on-surface-variant">Elige el soporte base para tu intervenci&oacute;n art&iacute;stica</p>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      { /* Option 1 */ }
      <label className="cursor-pointer group relative flex flex-col p-4 rounded-lg border-2 border-primary-container bg-surface hover:bg-surface-container-low transition-all">
      <input defaultChecked={true} className="sr-only" name="object_type" type="radio" value="cuadro" />
      <div className="w-full h-32 rounded-DEFAULT overflow-hidden mb-3 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Modern textured artwork on raw linen with layered seafoam turquoise and soft gold leaf accents, mounted in a refined minimalist light oak floating frame, softly illuminated." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh64rTmZtz_qG3L3O2p_bTnuipwXzAX1SH8De52zDOykj2KkOXhAkNPB-rpUymLLkrcwzsZLyH6SiFh_LSzv8haFaiUyuOhQPeT_j-sPAe02HLo_G8eilCtQ6Fu-PHEUKV660iDCwVkGBLsHIbYVrmf1ZSgRAcAEFVD-TPaTqKXtGkC7xqLaZ1jeg926TEOAX642JLj_HvlaAf7YKxnIGO9Ux4u6rcj9Z07UiB40s" />
      </div>
      <span className="font-headline-sm text-body-md font-medium text-on-surface">Cuadro sobre Lino</span>
      <span className="font-caption text-caption text-on-surface-variant mt-1">T&eacute;cnica mixta &amp; acr&iacute;lico</span>
      <div className="mt-3 flex items-center justify-between text-primary">
      <span className="font-label-badge text-label-badge">Desde $190.000 COP</span>
      <MaterialSymbol className="material-symbols-outlined text-[20px]">check_circle</MaterialSymbol>
      </div>
      </label>
      { /* Option 2 */ }
      <label className="cursor-pointer group relative flex flex-col p-4 rounded-lg border-2 border-outline-variant/30 bg-surface hover:border-primary-container transition-all">
      <input className="sr-only" name="object_type" type="radio" value="florero" />
      <div className="w-full h-32 rounded-DEFAULT overflow-hidden mb-3 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Handcrafted sculptural bud vase cast in pure white concrete with organic ocean ripple geometry and subtle embedded sea glass fragments, warm natural morning lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPHyuxjtim-b0SPJNQUuqEy7wdtqSgy1wld5mhEsJMsEKWrPEy3AaOtNM5dDyp10KTZuxpWGNAMYIIxZoYSD_nJvfP6NBksgklo42idwVJqZOphTPzbvVnD_z-EQf2i5C5gPzU8qCYuyOMSu2tzUnn5TTGDErsuRImDEHsq3DxDZusnmSqlukHYgW1pBafCevpO4AmtASicCoZBltHMF2Haz9Wo2Shpr2Wg-GbeMs" />
      </div>
      <span className="font-headline-sm text-body-md font-medium text-on-surface">Florero Escult&oacute;rico</span>
      <span className="font-caption text-caption text-on-surface-variant mt-1">Cemento blanco mineral</span>
      <div className="mt-3 flex items-center justify-between text-on-surface-variant">
      <span className="font-label-badge text-label-badge">Desde $120.000 COP</span>
      <MaterialSymbol className="material-symbols-outlined text-[20px] text-outline-variant">radio_button_unchecked</MaterialSymbol>
      </div>
      </label>
      { /* Option 3 */ }
      <label className="cursor-pointer group relative flex flex-col p-4 rounded-lg border-2 border-outline-variant/30 bg-surface hover:border-primary-container transition-all">
      <input className="sr-only" name="object_type" type="radio" value="bandeja" />
      <div className="w-full h-32 rounded-DEFAULT overflow-hidden mb-3 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Curved decorative tray and coasters set cast with deep sea blue and clear epoxy resin with delicate encapsulated dried sea fern botanicals and shimmering golden dust." src="https://lh3.googleusercontent.com/aida-public/AB6AXuChVE3jzuHyqcEaAHnX_nbmC6y3hc0k7V4Emmr_vsG0SzExhkGJcqV2th0uYHX0sU2h9k2b0nqxdZtXRKYTCllcXoU6vZKpu-3oOWAuXRqcCtdHEpBccGwLXWuopDIw-tMSr2ZO_qx_D56oJmejPo7pL-LnOHkrDlWwvJd8idL8pr8WtsTudBsyaRRnDD-343VPs1WdcR5FH1efYndjEY4oP0RmIpZjA_2FAiCH5ao" />
      </div>
      <span className="font-headline-sm text-body-md font-medium text-on-surface">Bandeja o Posavasos</span>
      <span className="font-caption text-caption text-on-surface-variant mt-1">Resina cristal de r&iacute;o</span>
      <div className="mt-3 flex items-center justify-between text-on-surface-variant">
      <span className="font-label-badge text-label-badge">Desde $95.000 COP</span>
      <MaterialSymbol className="material-symbols-outlined text-[20px] text-outline-variant">radio_button_unchecked</MaterialSymbol>
      </div>
      </label>
      { /* Option 4 */ }
      <label className="cursor-pointer group relative flex flex-col p-4 rounded-lg border-2 border-outline-variant/30 bg-surface hover:border-primary-container transition-all">
      <input className="sr-only" name="object_type" type="radio" value="peluche" />
      <div className="w-full h-32 rounded-DEFAULT overflow-hidden mb-3 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Artisanal designer seahorse plush toy crafted from natural dyed linen and soft velour, with embroidered coastal filigree patterns and hand-stitched coral details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKWMeQrQqYoBSMm_2xZPtQZ_7ruKsktr0VyfHdSYZbaAT8XDfaiK_5Y8TWMRX0DeWqHs4xnatEdYFSYOYd2XhPjYxeO_d-gE8es0cXjABilc_wS2_qhZNfPqWhxO4W9jp_hiC9SDmF0UtdZ4N294Lna6LuKasmZjrRlxqHrRr3fzpQ_i1CyAYo8AbO6hRJJ0Pu4hS5LrQiNSa5svOpVo2uWWAW4fZROIsFldpJTFY" />
      </div>
      <span className="font-headline-sm text-body-md font-medium text-on-surface">Peluche de Autor</span>
      <span className="font-caption text-caption text-on-surface-variant mt-1">Textil lino &amp; bordado</span>
      <div className="mt-3 flex items-center justify-between text-on-surface-variant">
      <span className="font-label-badge text-label-badge">Desde $145.000 COP</span>
      <MaterialSymbol className="material-symbols-outlined text-[20px] text-outline-variant">radio_button_unchecked</MaterialSymbol>
      </div>
      </label>
      { /* Option 5 */ }
      <label className="cursor-pointer group relative flex flex-col p-4 rounded-lg border-2 border-outline-variant/30 bg-surface hover:border-primary-container transition-all">
      <input className="sr-only" name="object_type" type="radio" value="prenda" />
      <div className="w-full h-32 rounded-DEFAULT overflow-hidden mb-3 bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Editorial close-up of a raw linen kimonostyle jacket with fine hand-embroidered marine seahorse illustrations using vibrant silk threads in turquoise and warm ochre." src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5h7valmE3TkkfXS-N6AJ4_mqG1v6ncwHOHfecM-Jrc4P1l-TTb_gcEVg5Uldm-NesmLfn8LZ0LWD4nsj09CNUmYd5YVNfC3Yuh_qehTXrJTp1dstFFV9z4OIM1vJjZtbUcSe7mNBCie6ql5MBlzUcmQg_Dx8Erov2xWttf836WiII4LqE_95jVm3iifTq0EHU6K0usTr7DXGqKVKTRWY97zMiCR4bWYO36HeaH9E" />
      </div>
      <span className="font-headline-sm text-body-md font-medium text-on-surface">Prenda Bordada</span>
      <span className="font-caption text-caption text-on-surface-variant mt-1">Dise&ntilde;o bot&aacute;nico sobre lino</span>
      <div className="mt-3 flex items-center justify-between text-on-surface-variant">
      <span className="font-label-badge text-label-badge">Desde $220.000 COP</span>
      <MaterialSymbol className="material-symbols-outlined text-[20px] text-outline-variant">radio_button_unchecked</MaterialSymbol>
      </div>
      </label>
      </div>
      </div>
      { /* STEP 2: Chromatic Palette & Material Textures */ }
      <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-xl border border-outline-variant/20 art-shadow-1">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/20">
      <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-body-md font-semibold">2</span>
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface font-medium">Paleta Crom&aacute;tica y Materiales Singulares</h3>
      <p className="font-caption text-caption text-on-surface-variant">Selecciona hasta 3 elementos sensoriales para incorporar a tu pieza</p>
      </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      { /* Material Card 1 */ }
      <div className="p-5 rounded-lg border border-outline-variant/30 bg-surface flex flex-col justify-between hover:border-primary transition-all">
      <div>
      <div className="flex items-center justify-between mb-3">
      <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary">
      <MaterialSymbol className="material-symbols-outlined text-[18px]">water_drop</MaterialSymbol>
      </span>
      <input defaultChecked={true} className="w-5 h-5 rounded text-primary focus:ring-primary border-outline" type="checkbox" />
      </div>
      <h4 className="font-headline-sm text-body-md font-semibold text-secondary">Pigmentos Oc&eacute;ano Profundo</h4>
      <p className="font-caption text-caption text-on-surface-variant mt-1">Gradientes en turquesa caribe&ntilde;o, azul marino y aguamarina transparente.</p>
      </div>
      <div className="flex gap-1.5 mt-4">
      <span className="w-5 h-5 rounded-full bg-primary inline-block" />
      <span className="w-5 h-5 rounded-full bg-primary-container inline-block" />
      <span className="w-5 h-5 rounded-full bg-secondary inline-block" />
      </div>
      </div>
      { /* Material Card 2 */ }
      <div className="p-5 rounded-lg border border-outline-variant/30 bg-surface flex flex-col justify-between hover:border-primary transition-all">
      <div>
      <div className="flex items-center justify-between mb-3">
      <span className="w-8 h-8 rounded-full bg-tertiary-fixed-variant text-surface flex items-center justify-center">
      <MaterialSymbol className="material-symbols-outlined text-[18px]">local_florist</MaterialSymbol>
      </span>
      <input defaultChecked={true} className="w-5 h-5 rounded text-primary focus:ring-primary border-outline" type="checkbox" />
      </div>
      <h4 className="font-headline-sm text-body-md font-semibold text-secondary">Bot&aacute;nica Marina Encapsulada</h4>
      <p className="font-caption text-caption text-on-surface-variant mt-1">Flores silvestres deshidratadas, algas secas preservadas y hojas de helecho.</p>
      </div>
      <div className="flex gap-1.5 mt-4">
      <span className="w-5 h-5 rounded-full bg-tertiary-container inline-block" />
      <span className="w-5 h-5 rounded-full bg-tertiary-fixed-dim inline-block" />
      <span className="w-5 h-5 rounded-full bg-outline-variant inline-block" />
      </div>
      </div>
      { /* Material Card 3 */ }
      <div className="p-5 rounded-lg border border-outline-variant/30 bg-surface flex flex-col justify-between hover:border-primary transition-all">
      <div>
      <div className="flex items-center justify-between mb-3">
      <span className="w-8 h-8 rounded-full bg-secondary-fixed text-on-secondary-fixed flex items-center justify-center">
      <MaterialSymbol className="material-symbols-outlined text-[18px]">auto_awesome</MaterialSymbol>
      </span>
      <input className="w-5 h-5 rounded text-primary focus:ring-primary border-outline" type="checkbox" />
      </div>
      <h4 className="font-headline-sm text-body-md font-semibold text-secondary">Destellos de Oro &amp; Cobre</h4>
      <p className="font-caption text-caption text-on-surface-variant mt-1">Hojilla de pan de oro flotante y micropart&iacute;culas met&aacute;licas que capturan la luz.</p>
      </div>
      <div className="flex gap-1.5 mt-4">
      <span className="w-5 h-5 rounded-full bg-amber-400 inline-block" />
      <span className="w-5 h-5 rounded-full bg-amber-600 inline-block" />
      <span className="w-5 h-5 rounded-full bg-amber-200 inline-block" />
      </div>
      </div>
      { /* Material Card 4 */ }
      <div className="p-5 rounded-lg border border-outline-variant/30 bg-surface flex flex-col justify-between hover:border-primary transition-all">
      <div>
      <div className="flex items-center justify-between mb-3">
      <span className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center">
      <MaterialSymbol className="material-symbols-outlined text-[18px]">texture</MaterialSymbol>
      </span>
      <input className="w-5 h-5 rounded text-primary focus:ring-primary border-outline" type="checkbox" />
      </div>
      <h4 className="font-headline-sm text-body-md font-semibold text-secondary">Cemento Crudo Marfil</h4>
      <p className="font-caption text-caption text-on-surface-variant mt-1">Textura porosa natural, tacto p&eacute;treo y suavizado satinado con ceras vegetales.</p>
      </div>
      <div className="flex gap-1.5 mt-4">
      <span className="w-5 h-5 rounded-full bg-surface-container-highest inline-block" />
      <span className="w-5 h-5 rounded-full bg-surface-container-low inline-block" />
      <span className="w-5 h-5 rounded-full bg-outline-variant/50 inline-block" />
      </div>
      </div>
      </div>
      </div>
      { /* STEP 3: Personalized Details & Dimensions */ }
      <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-xl border border-outline-variant/20 art-shadow-1">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/20">
      <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-body-md font-semibold">3</span>
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface font-medium">Detalles Personalizados &amp; Dimensiones</h3>
      <p className="font-caption text-caption text-on-surface-variant">Dedicatorias, fechas de aniversario o escalas arquitect&oacute;nicas</p>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="space-y-2">
      <label className="block font-headline-sm text-body-md text-on-surface">Grabado o Texto en Bajo Relieve</label>
      <input className="w-full bg-surface border border-outline-variant rounded-DEFAULT px-4 py-3 text-on-surface placeholder:text-outline focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all text-body-md" placeholder="Ej. 'Marea Alta, 2024' o nombres / monograma" type="text" />
      <span className="font-caption text-caption text-on-surface-variant block">Grabado a mano en el reverso o en placa discreta.</span>
      </div>
      <div className="space-y-2">
      <label className="block font-headline-sm text-body-md text-on-surface">Dimensiones Aproximadas</label>
      <select className="w-full bg-surface border border-outline-variant rounded-DEFAULT px-4 py-3 text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all text-body-md" defaultValue="mediano">
      <option value="pequeno">Peque&ntilde;o / Sobremesa (20 x 20 cm o &Oslash; 15 cm)</option>
      <option value="mediano">Mediano / Galer&iacute;a (40 x 50 cm o &Oslash; 30 cm)</option>
      <option value="gran_formato">Gran Formato de Colecci&oacute;n (80 x 100 cm en adelante)</option>
      <option value="dimension_custom">Dimensi&oacute;n personalizada seg&uacute;n plano arquitect&oacute;nico</option>
      </select>
      <span className="font-caption text-caption text-on-surface-variant block">Adaptamos los moldes y marcos a tu espacio.</span>
      </div>
      <div className="space-y-2">
      <label className="block font-headline-sm text-body-md text-on-surface">Ocasi&oacute;n de Creaci&oacute;n</label>
      <select className="w-full bg-surface border border-outline-variant rounded-DEFAULT px-4 py-3 text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all text-body-md">
      <option value="hogar">Decoraci&oacute;n para mi hogar</option>
      <option value="boda">Regalo de Boda o Matrimonio</option>
      <option value="aniversario">Aniversario Especial</option>
      <option value="corporativo">Obsequio de Autor Corporativo</option>
      </select>
      <span className="font-caption text-caption text-on-surface-variant block">Permite a&ntilde;adir notas caligr&aacute;ficas a la entrega.</span>
      </div>
      <div className="md:col-span-2 lg:col-span-3 space-y-2">
      <label className="block font-headline-sm text-body-md text-on-surface">Notas y Visi&oacute;n del Proyecto</label>
      <textarea className="w-full bg-surface border border-outline-variant rounded-DEFAULT px-4 py-3 text-on-surface placeholder:text-outline focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 transition-all text-body-md" placeholder="Cu\xE9ntale a Andrea qu\xE9 emociones o paleta buscas evocar, d\xF3nde ir\xE1 ubicada la pieza o si tienes una tem\xE1tica marina predilecta..." rows={3} />
      </div>
      </div>
      </div>
      { /* STEP 4: Reference Photo Upload */ }
      <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-xl border border-outline-variant/20 art-shadow-1">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/20">
      <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-body-md font-semibold">4</span>
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface font-medium">Fotos de Referencia o Paleta de Tu Espacio</h3>
      <p className="font-caption text-caption text-on-surface-variant">Sube fotos del muro, colores de cojines o inspiraci&oacute;n que ames</p>
      </div>
      </div>
      <div className="border-2 border-dashed border-outline-variant/60 rounded-xl p-8 text-center hover:border-primary-container bg-surface-container-low transition-colors group cursor-pointer">
      <div className="w-16 h-16 rounded-full bg-primary-fixed/40 text-primary mx-auto flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
      <MaterialSymbol className="material-symbols-outlined text-[32px]">cloud_upload</MaterialSymbol>
      </div>
      <p className="font-headline-sm text-body-md text-on-surface font-medium">
                    Arrastra tus im&aacute;genes aqu&iacute; o haz clic para explorar tus archivos
                  </p>
      <p className="font-caption text-caption text-on-surface-variant mt-1">
                    Admite formatos JPG, PNG, WEBP o PDF hasta 20MB. (Fotos de la sala, muestras textiles, bocetos)
                  </p>
      <button className="mt-4 px-6 py-2 rounded-full border border-secondary text-secondary font-label-badge text-label-badge hover:bg-secondary-fixed/20 transition-colors" type="button">
                    Seleccionar Archivos
                  </button>
      </div>
      </div>
      { /* STEP 5: Delivery in Colombia & Submission */ }
      <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-xl border border-outline-variant/20 art-shadow-1">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-outline-variant/20">
      <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-headline-sm text-body-md font-semibold">5</span>
      <div>
      <h3 className="font-headline-md text-headline-md text-on-surface font-medium">Opciones de Contacto &amp; Entrega en Colombia</h3>
      <p className="font-caption text-caption text-on-surface-variant">Detalles de env&iacute;o para calcular embalaje protector de galer&iacute;a</p>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="space-y-2">
      <label className="block font-headline-sm text-body-md text-on-surface">Nombre Completo</label>
      <input className="w-full bg-surface border border-outline-variant rounded-DEFAULT px-4 py-3 text-on-surface placeholder:text-outline focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-body-md" placeholder="Tu nombre y apellido" type="text" />
      </div>
      <div className="space-y-2">
      <label className="block font-headline-sm text-body-md text-on-surface">WhatsApp / Celular (+57)</label>
      <input className="w-full bg-surface border border-outline-variant rounded-DEFAULT px-4 py-3 text-on-surface placeholder:text-outline focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-body-md" placeholder="+57 300 000 0000" type="tel" />
      </div>
      <div className="space-y-2">
      <label className="block font-headline-sm text-body-md text-on-surface">Ciudad o Municipio de Entrega</label>
      <select className="w-full bg-surface border border-outline-variant rounded-DEFAULT px-4 py-3 text-on-surface focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-body-md">
      <option value="bogota">Bogot&aacute; D.C.</option>
      <option value="medellin">Medell&iacute;n / Valle de Aburr&aacute;</option>
      <option value="cali">Cali / Valle del Cauca</option>
      <option value="barranquilla">Barranquilla</option>
      <option value="cartagena">Cartagena de Indias</option>
      <option value="bucaramanga">Bucaramanga</option>
      <option value="otra">Otra ciudad o municipio en Colombia</option>
      </select>
      </div>
      </div>
      { /* CTAs and Direct Consultation Cluster */ }
      <div className="p-6 rounded-lg bg-surface-container border border-outline-variant/30 flex flex-col lg:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container-lowest p-1 border border-outline-variant/30 flex-shrink-0">
      <img alt="Logotipo oficial Seahorse Estudio Creativo by Andrea Sosa" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFBfoyzftgas6147yOZabAsUhuq4FBLD7CP4Hq4yvYgC3bXe2Gq5V8rUiRSILBJP_kHulYP27bEAiunMAnjnTvMhnnxESLY91UKJ4c47Mr2BYft7T21XwX6Tk01urFaerAXkLYyTiRV8hcfbB_o1YVmk8D6tdyDXtcmUtAb6SOEJi-8LhN-NqY14uH4pMXB-Xjwnpd6c0NR6DZCyX1uAaUxX7TC7vdPc__Ui8YCk98kT1s7rUi-Lr-" />
      </div>
      <div>
      <p className="font-headline-sm text-headline-sm text-on-surface font-medium">Cotizaci&oacute;n guiada por Andrea Sosa</p>
      <p className="font-caption text-caption text-on-surface-variant">Respuesta personalizada en menos de 24 horas h&aacute;biles con render o paleta sugerida.</p>
      </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
      { /* WhatsApp Direct Action */ }
      <a className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border-2 border-primary text-primary hover:bg-primary-fixed/30 font-headline-sm text-body-md font-semibold transition-all duration-200" href="https://wa.me/573000000000?text=Hola%20Andrea,%20quiero%20crear%20una%20pieza%20personalizada%20con%20Seahorse%20Estudio" target="_blank">
      <MaterialSymbol className="material-symbols-outlined text-[20px]">chat</MaterialSymbol>
      <span>WhatsApp (+57) con Andrea</span>
      </a>
      { /* Submit Request Action */ }
      <button className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary-container text-surface hover:bg-primary transition-all duration-200 art-shadow-2 font-headline-sm text-body-md font-semibold" type="submit">
      <span>Enviar Solicitud de Cotizaci&oacute;n</span>
      <MaterialSymbol className="material-symbols-outlined text-[20px]">arrow_forward</MaterialSymbol>
      </button>
      </div>
      </div>
      </div>
      </form>
      </section>
      { /* Artisanal Production Timelines & Unique Guarantee Callout */ }
      <section className="mb-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 flex flex-col justify-between art-shadow-1">
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6">
      <MaterialSymbol className="material-symbols-outlined text-[28px]">hourglass_top</MaterialSymbol>
      </div>
      <div>
      <h4 className="font-headline-md text-headline-md text-secondary font-semibold">Tiempos de Taller</h4>
      <p className="font-label-price text-label-price text-primary my-2">5 a 8 D&iacute;as H&aacute;biles</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    El fraguado del cemento blanco, el curado t&eacute;rmico de la resina cristal y las capas al &oacute;leo exigen paciencia para garantizar resistencia eterna y brillo cristalino.
                  </p>
      </div>
      </div>
      <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 flex flex-col justify-between art-shadow-1">
      <div className="w-12 h-12 rounded-full bg-tertiary/10 text-tertiary flex items-center justify-center mb-6">
      <MaterialSymbol className="material-symbols-outlined text-[28px]">fingerprint</MaterialSymbol>
      </div>
      <div>
      <h4 className="font-headline-md text-headline-md text-secondary font-semibold">Garant&iacute;a Irrepetible</h4>
      <p className="font-label-price text-label-price text-tertiary my-2">Dise&ntilde;o de Autor</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Cada vaciado en resina y cada trazo sobre lino responde a un flujo org&aacute;nico no reproducible en masa. Se entrega con sello de autenticidad firmado y numerado por Andrea Sosa.
                  </p>
      </div>
      </div>
      <div className="bg-surface-container-low p-8 rounded-xl border border-outline-variant/30 flex flex-col justify-between art-shadow-1">
      <div className="w-12 h-12 rounded-full bg-secondary/10 text-secondary flex items-center justify-center mb-6">
      <MaterialSymbol className="material-symbols-outlined text-[28px]">inventory_2</MaterialSymbol>
      </div>
      <div>
      <h4 className="font-headline-md text-headline-md text-secondary font-semibold">Embalaje de Galer&iacute;a</h4>
      <p className="font-label-price text-label-price text-secondary my-2">Protecci&oacute;n Total</p>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Empacado en estuche de madera liviana reciclable o caja r&iacute;gida acolchada con esquineros de tela, asegurando que tu pieza llegue intacta a cualquier rinc&oacute;n de Colombia.
                  </p>
      </div>
      </div>
      </div>
      </section>
      { /* Curatorial Showcase: Previous Custom Commissions */ }
      <section className="mb-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
      <div>
      <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest block mb-1">Portafolio Curatorial</span>
      <h2 className="font-headline-xl text-headline-xl text-secondary font-semibold">Encargos Personalizados Previos</h2>
      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Descubre piezas nacidas de conversaciones y recuerdos compartidos.</p>
      </div>
      <div className="mt-4 md:mt-0">
      <a className="inline-flex items-center gap-1.5 font-headline-sm text-body-md text-primary hover:underline" href="#">
      <span>Explorar cat&aacute;logo completo de autor</span>
      <MaterialSymbol className="material-symbols-outlined text-[18px]">arrow_forward</MaterialSymbol>
      </a>
      </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      { /* Piece 1 */ }
      <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden art-shadow-1 group">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close up photograph of a custom commission decorative tray blending white marble dust with clear sea-glass green resin and delicate gold foil, shot in soft diffuse natural gallery lighting." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAN2u77qJyFQpeMWkBAxHUoRo7rmmcSHCgygo_7nVIC2viAKeGdqPb3XfWnLNl8ip-A_ztppCP7ofDt1dYvqGgf4Ahbp-HlErq9J8j9-4rdWWfLJlErEwySWLs-tfiFBgFuzMvacxa5Ir_StbAzhzVAhkvDuT77BQlZPF1Dwp11YwUyKtpPJOW7Jbi5xnDIxK5AKsNoZK0li8RNgapNX7BiwlBhWSicXDwgTWlYZT8" />
      <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-badge text-label-badge text-primary border border-outline-variant/30">
                    Personalizado para Carolina &bull; Medell&iacute;n
                  </span>
      </div>
      <div className="p-6">
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Bandeja &apos;Marea Caribe&ntilde;a&apos;</h3>
      <p className="font-caption text-caption text-on-surface-variant my-2">Resina ep&oacute;xica, arena de Santa Marta y pigmento turquesa</p>
      <blockquote className="font-body-sm text-body-sm text-on-surface-variant italic border-l-2 border-primary-container pl-3 py-1 mt-4">
                    &quot;Andrea logr&oacute; capturar los tonos exactos del mar donde nos comprometimos. Es la pieza central de nuestra sala.&quot;
                  </blockquote>
      </div>
      </article>
      { /* Piece 2 */ }
      <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden art-shadow-1 group">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="An expansive abstract modern painting on raw woven linen featuring organic ocean waves created with white plaster relief and deep indigo blue inks in a bright minimalist apartment." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDD9sYaxJdDLHA3pIUBiDhBf9_VVG9CZ0OEivHvsJp8RmdTq42g4oEvzNf_eXJRcS9L3U6aos291EI_nWJnm3DGBNHiF8AF4ECT9GuDCXgo_585CEZrV9x6XJ9d_2F6lEDLLbZAHzlCBVIH9UsN9QebPCepCVehuRdD4EB95HpYMpc7SvDxZuUEFvnFCGCBEww0eb29e3o3ko3v2m_TBU44VEwtYnAPS69kkIJGr7Y" />
      <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-badge text-label-badge text-secondary border border-outline-variant/30">
                    Personalizado para Juli&aacute;n &bull; Bogot&aacute;
                  </span>
      </div>
      <div className="p-6">
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Cuadro &apos;Coral y Silencio&apos;</h3>
      <p className="font-caption text-caption text-on-surface-variant my-2">Lino crudo 120 x 80 cm, acr&iacute;licos y texturas minerales</p>
      <blockquote className="font-body-sm text-body-sm text-on-surface-variant italic border-l-2 border-primary-container pl-3 py-1 mt-4">
                    &quot;El empaque de galer&iacute;a y el certificado de Andrea fueron una grata sorpresa. La textura tridimensional es fascinante.&quot;
                  </blockquote>
      </div>
      </article>
      { /* Piece 3 */ }
      <article className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden art-shadow-1 group">
      <div className="relative aspect-[4/5] overflow-hidden bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Handcrafted organic vase in off-white smooth architectural cement containing dried botanical eucalyptus, sitting on a sunlit textured travertine side table." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhSM_AEp41U3RYysODrLTTVQlQAOyd6ojBKtOAF6YqJLviRCeEmlp6r2arzrmvZs7hKR5RcQUOJA0DEm8QLDX45eeNYvBO3DTkmmLdDUkxmdYAyVGbconH3Ji3U1eL56UuXNstm2s8mg6MriohH0r03Q84A2qwWYFygPmZEDue3CcpLnuMQj_JlHjlZdDxoISpx8Jm6zmdVhNGb9tbQSaEkQlY07lJbCn8M4QD39s" />
      <span className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full font-label-badge text-label-badge text-tertiary border border-outline-variant/30">
                    Personalizado para Valeria &bull; Cali
                  </span>
      </div>
      <div className="p-6">
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">Florero Escult&oacute;rico &apos;Atol&oacute;n&apos;</h3>
      <p className="font-caption text-caption text-on-surface-variant my-2">Cemento blanco, grabado de iniciales y sellado satinado</p>
      <blockquote className="font-body-sm text-body-sm text-on-surface-variant italic border-l-2 border-primary-container pl-3 py-1 mt-4">
                    &quot;Ped&iacute; un grabado sutil de nuestra fecha de bodas en la base. Una verdadera obra de arte con alma artesanal.&quot;
                  </blockquote>
      </div>
      </article>
      </div>
      </section>
      </main>
      </div>
      { /* Footer (Shared Component) */ }
      <footer className="bg-surface-container dark:bg-inverse-surface full-width border-t border-outline-variant/20 dark:border-outline/10 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 lg:px-12 py-8 max-w-7xl mx-auto gap-4">
      { /* Brand & Origin Identity */ }
      <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container-lowest p-0.5 border border-outline-variant/30">
      <img alt="Logotipo oficial Seahorse Estudio Creativo by Andrea Sosa" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFBfoyzftgas6147yOZabAsUhuq4FBLD7CP4Hq4yvYgC3bXe2Gq5V8rUiRSILBJP_kHulYP27bEAiunMAnjnTvMhnnxESLY91UKJ4c47Mr2BYft7T21XwX6Tk01urFaerAXkLYyTiRV8hcfbB_o1YVmk8D6tdyDXtcmUtAb6SOEJi-8LhN-NqY14uH4pMXB-Xjwnpd6c0NR6DZCyX1uAaUxX7TC7vdPc__Ui8YCk98kT1s7rUi-Lr-" />
      </div>
      <div className="flex flex-col">
      <span className="font-headline-md text-headline-sm text-secondary dark:text-secondary-fixed tracking-tight">
                  Seahorse Estudio Creativo by Andrea Sosa
                </span>
      <p className="font-caption text-caption text-on-surface-variant">
                  &copy; 2024 Seahorse Estudio Creativo by Andrea Sosa. Hecho a mano y con dise&ntilde;o de autor en Colombia. Todos los derechos reservados.
                </p>
      </div>
      </div>
      { /* Links Cluster */ }
      <nav className="flex flex-wrap items-center justify-center gap-6">
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-sm text-body-sm transition-colors duration-150" href="/tienda">
                Cat&aacute;logo
              </Link>
      <Link className="text-primary dark:text-primary-fixed underline font-body-sm text-body-sm" href="/personaliza">
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
      </footer>
      { /* Interactive Radio/Option Switching Micro-script */ }</>
    </PrototypePage>
  );
}
