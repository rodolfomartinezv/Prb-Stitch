"use client";

import Link from "next/link";
import { MaterialSymbol } from "./material-symbol";
import { PrototypePage } from "./prototype-page";

export default function ContactoPrototype() {
  return (
    <PrototypePage className="prototype-route-contacto scroll-smooth bg-background text-on-surface antialiased min-h-screen flex flex-col selection:bg-primary-container/30 selection:text-primary">
      <><div className="flex flex-col flex-grow">{ /* TOP APP BAR */ }
      <header className="docked full-width top-0 sticky z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 py-4 max-w-7xl mx-auto">
      { /* Brand Logo & Identity */ }
      <a className="flex items-center gap-3.5 group" href="#">
      <img alt="Logotipo oficial Seahorse Estudio Creativo by Andrea Sosa" className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFBfoyzftgas6147yOZabAsUhuq4FBLD7CP4Hq4yvYgC3bXe2Gq5V8rUiRSILBJP_kHulYP27bEAiunMAnjnTvMhnnxESLY91UKJ4c47Mr2BYft7T21XwX6Tk01urFaerAXkLYyTiRV8hcfbB_o1YVmk8D6tdyDXtcmUtAb6SOEJi-8LhN-NqY14uH4pMXB-Xjwnpd6c0NR6DZCyX1uAaUxX7TC7vdPc__Ui8YCk98kT1s7rUi-Lr-" />
      <div className="flex flex-col">
      <span className="font-headline-md text-headline-sm lg:text-headline-md text-secondary tracking-tight font-medium">
                  Seahorse
                </span>
      <span className="font-caption text-caption text-on-surface-variant font-medium tracking-wider -mt-1">
                  ESTUDIO CREATIVO BY ANDREA SOSA
                </span>
      </div>
      </a>
      { /* Desktop Navigation Links */ }
      <nav className="hidden md:flex items-center gap-7">
      <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md hover:text-primary transition-all duration-200" href="/">Inicio</Link>
      <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md hover:text-primary transition-all duration-200" href="/tienda">Tienda</Link>
      <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md hover:text-primary transition-all duration-200" href="/personaliza">Personaliza</Link>
      <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md hover:text-primary transition-all duration-200" href="/sobre-nosotros">Sobre Nosotros</Link>
      { /* ACTIVE LINK: Contacto */ }
      <Link className="text-primary border-b-2 border-primary pb-1 font-headline-sm text-body-md" href="/contacto">Contacto</Link>
      <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md hover:text-primary transition-all duration-200" href="/dashboard">Admin</Link>
      </nav>
      { /* Trailing Action Cluster */ }
      <div className="flex items-center gap-3 sm:gap-4">
      { /* Currency Pill */ }
      <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container-low text-secondary font-label-badge text-caption border border-outline-variant/30">
                COP
              </span>
      { /* Search Icon Action */ }
      <button aria-label="Buscar" className="p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-low">
      <MaterialSymbol className="material-symbols-outlined text-[22px]">search</MaterialSymbol>
      </button>
      { /* Account Circle Icon Action */ }
      <button aria-label="Cuenta" className="hidden sm:inline-flex p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-low">
      <MaterialSymbol className="material-symbols-outlined text-[22px]">account_circle</MaterialSymbol>
      </button>
      { /* Admin Panel Icon Action */ }
      <button aria-label="Panel Admin" className="hidden sm:inline-flex p-2 text-on-surface-variant hover:text-primary transition-colors rounded-full hover:bg-surface-container-low">
      <MaterialSymbol className="material-symbols-outlined text-[22px]">admin_panel_settings</MaterialSymbol>
      </button>
      { /* Shopping Cart with 2 items Badge */ }
      <button aria-label="Carrito de compras" className="relative flex items-center gap-2 pl-3 pr-4 py-2 rounded-full bg-primary-container/15 text-primary hover:bg-primary-container/25 transition-all duration-200">
      <MaterialSymbol className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</MaterialSymbol>
      <span className="font-body-md text-body-sm font-medium">Carrito</span>
      <span className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-badge text-[11px] font-bold">2</span>
      </button>
      </div>
      </div>
      </header>
      { /* MAIN CANVAS */ }
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-16">
      { /* Hero / Editorial Header */ }
      <div className="mb-12 lg:mb-16 max-w-3xl">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-on-primary-container mb-4">
      <MaterialSymbol className="material-symbols-outlined text-[16px]">palette</MaterialSymbol>
      <span className="font-label-badge text-label-badge uppercase tracking-wider">Atelier de Autor &bull; Colombia</span>
      </div>
      <h1 className="font-display-hero text-headline-xl-mobile md:font-display-hero md:text-display-hero text-on-surface tracking-tight leading-tight">
              Hablemos de Arte, Espacios y Dise&ntilde;os Especiales
            </h1>
      <p className="font-body-lg text-body-md md:text-body-lg text-on-surface-variant mt-4 leading-relaxed">
              Cada pieza de autor nace de una conversaci&oacute;n entre materialidad, naturaleza marina y prop&oacute;sito. Escr&iacute;benos para comisiones personalizadas, consultas curatoriales o seguimiento directo de tus piezas en taller.
            </p>
      </div>
      { /* 2-COLUMN MAIN CONTENT (Asymmetric Bento Editorial Pattern) */ }
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
      { /* LEFT COLUMN: Información directa del taller & FAQ (Col 1-5) */ }
      <div className="lg:col-span-5 space-y-6">
      { /* Atelier Details Card */ }
      <div className="bg-surface-container-lowest p-7 lg:p-8 rounded-lg shadow-artistic-1 border border-outline-variant/30 space-y-6">
      <div className="border-b border-outline-variant/20 pb-4">
      <h2 className="font-headline-sm text-headline-sm text-secondary flex items-center gap-2">
      <MaterialSymbol className="material-symbols-outlined text-primary text-[24px]">storefront</MaterialSymbol>
                    Atelier &amp; Atenci&oacute;n Directa
                  </h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Atenci&oacute;n personalizada y despacho certificado a todo el territorio nacional.
                  </p>
      </div>
      { /* Contact items list */ }
      <div className="space-y-5">
      { /* Ubicación */ }
      <div className="flex items-start gap-3.5">
      <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0">
      <MaterialSymbol className="material-symbols-outlined text-[20px]">location_on</MaterialSymbol>
      </div>
      <div>
      <span className="font-label-badge text-caption text-on-surface-variant block uppercase tracking-wider">Ubicaci&oacute;n del Taller</span>
      <span className="font-body-md text-body-md text-on-surface font-medium block">Bogot&aacute; D.C., Colombia</span>
      <span className="font-caption text-caption text-primary flex items-center gap-1 mt-0.5">
      <MaterialSymbol className="material-symbols-outlined text-[14px]">local_shipping</MaterialSymbol> Env&iacute;os asegurados a todo el pa&iacute;s
                      </span>
      </div>
      </div>
      { /* WhatsApp & Teléfono */ }
      <div className="flex items-start gap-3.5">
      <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0">
      <MaterialSymbol className="material-symbols-outlined text-[20px]">call</MaterialSymbol>
      </div>
      <div className="flex-grow">
      <span className="font-label-badge text-caption text-on-surface-variant block uppercase tracking-wider">WhatsApp &amp; L&iacute;nea Telef&oacute;nica</span>
      <a className="font-headline-sm text-body-md text-on-surface hover:text-primary transition-colors font-medium flex items-center gap-2" href="https://wa.me/573118492011" rel="noopener noreferrer" target="_blank">
                        +57 311 849 2011
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[11px] font-label-badge">Activo</span>
      </a>
      <span className="font-caption text-caption text-on-surface-variant mt-0.5 block">Respuesta inmediata en horario h&aacute;bil</span>
      </div>
      </div>
      { /* Correo Oficial */ }
      <div className="flex items-start gap-3.5">
      <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0">
      <MaterialSymbol className="material-symbols-outlined text-[20px]">mail</MaterialSymbol>
      </div>
      <div>
      <span className="font-label-badge text-caption text-on-surface-variant block uppercase tracking-wider">Correo Oficial</span>
      <a className="font-body-md text-body-md text-on-surface hover:text-primary transition-colors underline decoration-outline-variant/60" href="mailto:contacto@seahorseestudio.com">
                        contacto@seahorseestudio.com
                      </a>
      </div>
      </div>
      { /* Horarios */ }
      <div className="flex items-start gap-3.5">
      <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0">
      <MaterialSymbol className="material-symbols-outlined text-[20px]">schedule</MaterialSymbol>
      </div>
      <div>
      <span className="font-label-badge text-caption text-on-surface-variant block uppercase tracking-wider">Horarios de Atenci&oacute;n</span>
      <span className="font-body-md text-body-md text-on-surface font-medium block">Lunes a S&aacute;bado</span>
      <span className="font-caption text-caption text-on-surface-variant block">9:00 AM &ndash; 6:00 PM COT</span>
      </div>
      </div>
      </div>
      { /* Quick WhatsApp CTA Button */ }
      <div className="pt-2">
      <a className="w-full flex items-center justify-center gap-2 py-3 px-5 rounded-full bg-[#23B7C5] hover:bg-[#1fa3b0] text-surface font-caption font-medium transition-all shadow-artistic-1 hover:shadow-artistic-2" href="https://wa.me/573118492011?text=Hola%20Andrea,%20me%20gustar%C3%ADa%20consultar%20sobre%20una%20pieza%20de%20Seahorse" rel="noopener noreferrer" target="_blank">
      <MaterialSymbol className="material-symbols-outlined text-[18px]">chat</MaterialSymbol>
      <span>Iniciar Chat en WhatsApp</span>
      </a>
      </div>
      </div>
      { /* Quick FAQ Card Accordion */ }
      <div className="bg-surface-container-lowest p-7 lg:p-8 rounded-lg shadow-artistic-1 border border-outline-variant/30 space-y-4">
      <div className="flex items-center justify-between pb-2 border-b border-outline-variant/20">
      <h3 className="font-headline-sm text-body-lg text-secondary font-semibold flex items-center gap-2">
      <MaterialSymbol className="material-symbols-outlined text-primary text-[20px]">help_outline</MaterialSymbol>
                    Preguntas Frecuentes
                  </h3>
      <span className="font-caption text-caption text-on-surface-variant">Respuestas r&aacute;pidas</span>
      </div>
      <div className="space-y-3 pt-1">
      { /* FAQ Item 1 */ }
      <details className="group bg-surface-container-low rounded-xl p-3.5 border border-outline-variant/20 transition-all duration-200 open:bg-surface open:shadow-sm">
      <summary className="flex justify-between items-center font-body-md text-body-sm font-medium text-on-surface cursor-pointer list-none">
      <span>&iquest;Cu&aacute;les son los tiempos de env&iacute;o nacional?</span>
      <MaterialSymbol className="material-symbols-outlined text-primary text-[20px] transition-transform duration-200 group-open:rotate-180">expand_more</MaterialSymbol>
      </summary>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-2.5 pt-2 border-t border-outline-variant/20 leading-relaxed">
                      Para piezas en stock disponible, el despacho toma de 2 a 4 d&iacute;as h&aacute;biles hacia ciudades principales de Colombia (Bogot&aacute;, Medell&iacute;n, Cali, Barranquilla). Los encargos por cat&aacute;logo o piezas personalizadas requieren entre 7 y 12 d&iacute;as calendario de producci&oacute;n artesanal y curado antes de env&iacute;o.
                    </div>
      </details>
      { /* FAQ Item 2 */ }
      <details className="group bg-surface-container-low rounded-xl p-3.5 border border-outline-variant/20 transition-all duration-200 open:bg-surface open:shadow-sm">
      <summary className="flex justify-between items-center font-body-md text-body-sm font-medium text-on-surface cursor-pointer list-none">
      <span>&iquest;C&oacute;mo cuidar piezas de resina y cemento?</span>
      <MaterialSymbol className="material-symbols-outlined text-primary text-[20px] transition-transform duration-200 group-open:rotate-180">expand_more</MaterialSymbol>
      </summary>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-2.5 pt-2 border-t border-outline-variant/20 leading-relaxed">
                      Nuestras piezas de autor cuentan con sellador mineral impermeable de acabado satinado. Limpia suavemente con un pa&ntilde;o de microfibra seco o ligeramente humedecido con agua templada. Evita el uso de solventes abrasivos, cloro y la exposici&oacute;n directa constante al sol intenso para preservar la fidelidad de los pigmentos marinos.
                    </div>
      </details>
      { /* FAQ Item 3 */ }
      <details className="group bg-surface-container-low rounded-xl p-3.5 border border-outline-variant/20 transition-all duration-200 open:bg-surface open:shadow-sm">
      <summary className="flex justify-between items-center font-body-md text-body-sm font-medium text-on-surface cursor-pointer list-none">
      <span>&iquest;Cu&aacute;l es la pol&iacute;tica de garant&iacute;a y cambios?</span>
      <MaterialSymbol className="material-symbols-outlined text-primary text-[20px] transition-transform duration-200 group-open:rotate-180">expand_more</MaterialSymbol>
      </summary>
      <div className="font-body-sm text-body-sm text-on-surface-variant mt-2.5 pt-2 border-t border-outline-variant/20 leading-relaxed">
                      Garantizamos la integridad de cada env&iacute;o mediante empaque de triple protecci&oacute;n antigolpes. Si tu obra presenta cualquier da&ntilde;o durante el trayecto, reponemos la pieza sin costo notific&aacute;ndonos dentro de las primeras 48 horas tras la entrega con fotograf&iacute;a del paquete.
                    </div>
      </details>
      </div>
      </div>
      </div>
      { /* RIGHT COLUMN: Elegant Curatorial Contact Form (Col 6-12) */ }
      <div className="lg:col-span-7">
      <div className="bg-surface-container-lowest p-8 lg:p-10 rounded-lg shadow-artistic-1 border border-outline-variant/30">
      <div className="mb-8">
      <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest block mb-1">Formulario de Consulta</span>
      <h2 className="font-headline-md text-headline-md text-on-surface">Env&iacute;anos un mensaje al taller</h2>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-1.5">
                    Andrea Sosa y el equipo de taller revisan cada solicitud para acompa&ntilde;arte en tus ideas y proyectos.
                  </p>
      </div>
      <form action="#" className="space-y-6" method="POST" onSubmit={event => { event.preventDefault(); alert('¡Gracias por tu mensaje! Andrea Sosa o el equipo del taller te responderá a la brevedad.'); }}>
      { /* Row 1: Nombre & Teléfono */ }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      { /* Nombre Completo */ }
      <div>
      <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2" htmlFor="full_name">
                        Nombre completo <span className="text-error">*</span>
      </label>
      <div className="relative">
      <input className="w-full bg-surface border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" id="full_name" name="full_name" placeholder="Ej. Sof\xEDa Restrepo" required type="text" />
      </div>
      </div>
      { /* Teléfono / WhatsApp */ }
      <div>
      <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2" htmlFor="phone_number">
                        Tel&eacute;fono / WhatsApp <span className="text-error">*</span>
      </label>
      <div className="relative">
      <input className="w-full bg-surface border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" id="phone_number" name="phone_number" placeholder="+57 300 000 0000" required type="tel" />
      </div>
      </div>
      </div>
      { /* Row 2: Ciudad / Departamento & Motivo de consulta */ }
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      { /* Ciudad o Departamento */ }
      <div>
      <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2" htmlFor="location_colombia">
                        Ciudad o Departamento de Colombia <span className="text-error">*</span>
      </label>
      <input className="w-full bg-surface border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" id="location_colombia" name="location_colombia" placeholder="Ej. Medell\xEDn, Antioquia" required type="text" />
      </div>
      { /* Motivo de consulta */ }
      <div>
      <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2" htmlFor="inquiry_reason">
                        Motivo de consulta <span className="text-error">*</span>
      </label>
      <div className="relative">
      <select className="w-full bg-surface border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md text-body-md text-on-surface focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none appearance-none" defaultValue="" id="inquiry_reason" name="inquiry_reason" required>
      <option disabled={true} value="">Selecciona una opci&oacute;n</option>
      <option value="encargo_especial">Encargo especial o pieza personalizada</option>
      <option value="estado_pedido">Estado de pedido en tr&aacute;nsito</option>
      <option value="colaboracion">Colaboraci&oacute;n de galer&iacute;a o arquitectura</option>
      <option value="duda_general">Duda general o cat&aacute;logo disponible</option>
      </select>
      <MaterialSymbol className="material-symbols-outlined absolute right-3 top-3.5 text-on-surface-variant pointer-events-none text-[20px]">
                          arrow_drop_down
                        </MaterialSymbol>
      </div>
      </div>
      </div>
      { /* Correo Electrónico Adicional */ }
      <div>
      <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2" htmlFor="email_user">
                      Correo electr&oacute;nico
                    </label>
      <input className="w-full bg-surface border border-outline-variant/50 rounded-xl px-4 py-3 font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none" id="email_user" name="email_user" placeholder="tuemail@ejemplo.com" type="email" />
      </div>
      { /* Mensaje */ }
      <div>
      <label className="block font-body-sm text-body-sm font-medium text-on-surface mb-2" htmlFor="user_message">
                      Mensaje detallado <span className="text-error">*</span>
      </label>
      <textarea className="w-full bg-surface border border-outline-variant/50 rounded-xl p-4 font-body-md text-body-md text-on-surface placeholder:text-outline focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all outline-none resize-none" id="user_message" name="user_message" placeholder="Cu\xE9ntanos las medidas de tu espacio, colores de preferencia o detalles de la obra que sue\xF1as crear..." required rows={5} />
      </div>
      { /* Privacy Policy Checkbox */ }
      <div className="flex items-start gap-3 pt-1">
      <input className="w-4 h-4 mt-0.5 rounded border-2 border-secondary text-primary focus:ring-primary/30" id="privacy_policy" required type="checkbox" />
      <label className="font-body-sm text-body-sm text-on-surface-variant" htmlFor="privacy_policy">
                      Acepto el tratamiento de mis datos personales para coordinar la consulta de acuerdo con la pol&iacute;tica de privacidad de Seahorse Estudio Creativo.
                    </label>
      </div>
      { /* Form Submission Action */ }
      <div className="pt-3">
      <button className="w-full md:w-auto min-w-[220px] px-8 py-3.5 rounded-full bg-primary-container text-surface hover:bg-primary transition-all duration-300 font-headline-sm text-body-md font-medium shadow-artistic-1 hover:shadow-artistic-2 flex items-center justify-center gap-2 group cursor-pointer" type="submit">
      <span>Enviar Mensaje</span>
      <MaterialSymbol className="material-symbols-outlined text-[18px] transition-transform duration-200 group-hover:translate-x-1">send</MaterialSymbol>
      </button>
      </div>
      </form>
      </div>
      </div>
      </div>
      { /* BANNER DE TRANSPORTADORAS ALIADAS EN COLOMBIA */ }
      <section className="mt-20 pt-12 border-t border-outline-variant/30">
      <div className="text-center max-w-2xl mx-auto mb-8">
      <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest block mb-1">
                Cobertura y Log&iacute;stica de Alto Nivel
              </span>
      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Env&iacute;os protegidos a todos los rincones de Colombia
              </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Colaboramos con las principales transportadoras oficiales de Colombia, garantizando rastreo en tiempo real y embalajes con seguro de arte integral.
              </p>
      </div>
      { /* Carrier Badges Grid */ }
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
      { /* Coordinadora */ }
      <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/25 shadow-artistic-1 text-center hover:border-primary/40 transition-colors">
      <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary mb-2.5">
      <MaterialSymbol className="material-symbols-outlined text-[22px]">local_shipping</MaterialSymbol>
      </div>
      <span className="font-headline-sm text-body-md text-on-surface font-semibold">Coordinadora</span>
      <span className="font-caption text-caption text-on-surface-variant mt-0.5">Rastreo Express Nacional</span>
      </div>
      { /* Servientrega */ }
      <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/25 shadow-artistic-1 text-center hover:border-primary/40 transition-colors">
      <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary mb-2.5">
      <MaterialSymbol className="material-symbols-outlined text-[22px]">markunread_mailbox</MaterialSymbol>
      </div>
      <span className="font-headline-sm text-body-md text-on-surface font-semibold">Servientrega</span>
      <span className="font-caption text-caption text-on-surface-variant mt-0.5">Entrega Puerta a Puerta</span>
      </div>
      { /* Inter Rapidísimo */ }
      <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/25 shadow-artistic-1 text-center hover:border-primary/40 transition-colors">
      <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary mb-2.5">
      <MaterialSymbol className="material-symbols-outlined text-[22px]">rocket_launch</MaterialSymbol>
      </div>
      <span className="font-headline-sm text-body-md text-on-surface font-semibold">Inter Rapid&iacute;simo</span>
      <span className="font-caption text-caption text-on-surface-variant mt-0.5">Cobertura Regional Total</span>
      </div>
      { /* Envía */ }
      <div className="flex flex-col items-center justify-center p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/25 shadow-artistic-1 text-center hover:border-primary/40 transition-colors">
      <div className="w-10 h-10 rounded-full bg-surface-container-low flex items-center justify-center text-secondary mb-2.5">
      <MaterialSymbol className="material-symbols-outlined text-[22px]">inventory_2</MaterialSymbol>
      </div>
      <span className="font-headline-sm text-body-md text-on-surface font-semibold">Env&iacute;a</span>
      <span className="font-caption text-caption text-on-surface-variant mt-0.5">Manejo Delicado de Carga</span>
      </div>
      </div>
      </section>
      </main>
      </div>
      { /* FOOTER OFICIAL SEAHORSE */ }
      <footer className="full-width bg-surface-container border-t border-outline-variant/20 mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 lg:px-12 py-8 max-w-7xl mx-auto gap-4">
      { /* Logo & Copyright */ }
      <div className="flex flex-col md:flex-row items-center gap-3 text-center md:text-left">
      <span className="font-headline-md text-headline-sm text-secondary tracking-tight">
                Seahorse
              </span>
      <span className="hidden md:inline text-outline-variant">&bull;</span>
      <p className="font-body-sm text-caption text-on-surface-variant">
                &copy; 2024 Seahorse Estudio Creativo by Andrea Sosa. Hecho a mano y con dise&ntilde;o de autor en Colombia. Todos los derechos reservados.
              </p>
      </div>
      { /* Footer Navigation Links */ }
      <nav className="flex flex-wrap justify-center gap-5 text-center">
      <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" href="/tienda">Cat&aacute;logo</Link>
      <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" href="/personaliza">Personalizaci&oacute;n</Link>
      <a className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" href="#">Env&iacute;os en Colombia</a>
      <a className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" href="#">T&eacute;rminos y Condiciones</a>
      <a className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" href="#">Privacidad</a>
      <Link className="text-on-surface-variant hover:text-primary transition-colors font-body-sm text-body-sm" href="/dashboard">Panel Admin</Link>
      </nav>
      </div>
      </footer></>
    </PrototypePage>
  );
}
