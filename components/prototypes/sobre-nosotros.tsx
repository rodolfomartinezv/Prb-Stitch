import Link from "next/link";
import { MaterialSymbol } from "./material-symbol";
import { PrototypePage } from "./prototype-page";

export default function SobreNosotrosPrototype() {
  return (
    <PrototypePage className="prototype-route-sobre-nosotros scroll-smooth bg-background text-on-surface antialiased font-body-md text-body-md selection:bg-primary-container selection:text-surface-container-lowest">
      <>{ /* TOP APP BAR */ }
      <header className="docked full-width top-0 sticky z-50 bg-surface/90 dark:bg-inverse-surface/90 backdrop-blur-md border-b border-outline-variant/30 dark:border-outline/20 shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center w-full px-6 lg:px-12 py-4 max-w-7xl mx-auto">
      { /* Brand & Emblema */ }
      <a className="flex items-center gap-3 group" href="#">
      <div className="w-11 h-11 rounded-full p-1 bg-surface-container-lowest shadow-sm flex items-center justify-center border border-outline-variant/40 group-hover:scale-105 transition-transform duration-300">
      <img alt="Logotipo oficial Seahorse Estudio Creativo by Andrea Sosa" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFBfoyzftgas6147yOZabAsUhuq4FBLD7CP4Hq4yvYgC3bXe2Gq5V8rUiRSILBJP_kHulYP27bEAiunMAnjnTvMhnnxESLY91UKJ4c47Mr2BYft7T21XwX6Tk01urFaerAXkLYyTiRV8hcfbB_o1YVmk8D6tdyDXtcmUtAb6SOEJi-8LhN-NqY14uH4pMXB-Xjwnpd6c0NR6DZCyX1uAaUxX7TC7vdPc__Ui8YCk98kT1s7rUi-Lr-" />
      </div>
      <div className="flex flex-col">
      <span className="font-headline-md text-headline-md text-secondary dark:text-secondary-fixed tracking-tight font-medium leading-none">
                  Seahorse Estudio Creativo by Andrea Sosa
                </span>
      <span className="font-caption text-caption text-primary tracking-widest mt-0.5">ATELIER &amp; ARTE DE AUTOR &middot; COLOMBIA</span>
      </div>
      </a>
      { /* Desktop Navigation Links */ }
      <nav className="hidden lg:flex items-center gap-7">
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="/">
                Inicio
              </Link>
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="/tienda">
                Tienda
              </Link>
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="/personaliza">
                Personaliza
              </Link>
      <Link className="text-primary dark:text-primary-fixed border-b-2 border-primary dark:border-primary-fixed pb-1 font-headline-sm text-body-md" href="/sobre-nosotros">
                Sobre Nosotros
              </Link>
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md" href="/contacto">
                Contacto
              </Link>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed transition-colors font-body-md text-body-md flex items-center gap-1" href="#">
      <MaterialSymbol className="material-symbols-outlined text-[18px]">admin_panel_settings</MaterialSymbol>
                Admin
              </a>
      </nav>
      { /* Actions & Cart */ }
      <div className="flex items-center gap-4">
      { /* Currency Badge */ }
      <span className="font-label-badge text-label-badge px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface-variant tracking-wider">
                COP
              </span>
      <button aria-label="Buscar piezas" className="p-2 text-on-surface-variant hover:text-primary transition-colors">
      <MaterialSymbol className="material-symbols-outlined">search</MaterialSymbol>
      </button>
      { /* Cart action */ }
      <button className="relative flex items-center gap-2 px-3.5 py-2 rounded-full bg-surface-container-low hover:bg-surface-container transition-colors border border-outline-variant/30">
      <MaterialSymbol className="material-symbols-outlined text-primary" data-weight="fill" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_bag</MaterialSymbol>
      <span className="hidden sm:inline font-body-sm text-body-sm font-medium text-on-surface">Carrito</span>
      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-primary text-on-primary font-caption text-caption font-bold">2</span>
      </button>
      </div>
      </div>
      </header>
      { /* MAIN CANVAS */ }
      <main className="w-full overflow-hidden">
      { /* HERO EDITORIAL & MANIFIESTO APERTURA */ }
      <section className="relative pt-12 md:pt-20 pb-16 md:pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
      { /* Decoración acuática y orgánica sutil */ }
      <div className="absolute -top-10 right-0 w-96 h-96 bg-primary-container/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-4 w-72 h-72 bg-tertiary-fixed/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
      <div className="lg:col-span-8 space-y-6">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container border border-outline-variant/40">
      <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
      <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">Manifiesto &amp; Atelier de Autor</span>
      </div>
      <h1 className="font-display-hero text-display-hero text-on-surface tracking-tight leading-[1.08]">
                  El Arte de lo Irrepetible: <span className="font-headline-xl text-headline-xl text-primary font-normal block sm:inline italic">La Historia detr&aacute;s de Seahorse Estudio Creativo</span>
      </h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
                  Nacimos del anhelo de detener el tiempo. En un mundo saturado de duplicados pl&aacute;sticos y algoritmos apresurados, nuestro taller en Colombia erige un santuario para la caricia manual, el pigmento mineral y la imperfecci&oacute;n sagrada de cada objeto.
                </p>
      </div>
      <div className="lg:col-span-4 flex flex-col justify-end p-6 md:p-8 rounded-xl bg-surface-container-low border border-outline-variant/30">
      <div className="flex items-center gap-4 mb-4">
      <MaterialSymbol className="material-symbols-outlined text-primary text-3xl">hourglass_bottom</MaterialSymbol>
      <div>
      <p className="font-headline-sm text-headline-sm text-secondary">Tiempo en Taller</p>
      <p className="font-caption text-caption text-on-surface-variant">48 a 96 horas por pieza &uacute;nica</p>
      </div>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant border-t border-outline-variant/30 pt-3">
                  Cada creaci&oacute;n transita un ciclo natural de secado, curado y pulido minucioso sin aceleradores industriales.
                </p>
      </div>
      </div>
      </section>
      { /* ANDREA SOSA: RETRATO EDITORIAL Y SEMBLANZA */ }
      <section className="py-16 md:py-24 bg-surface-container-low/70 border-y border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
      { /* Imagen de Andrea Sosa */ }
      <div className="lg:col-span-5 relative">
      <div className="relative rounded-lg overflow-hidden shadow-2xl bg-surface">
      <img className="w-full aspect-[4/5] object-cover rounded-lg" data-alt="A sophisticated editorial portrait of artist Andrea Sosa in her sunny Colombian art atelier. She is surrounded by hand-poured sculptural resin art, tinted mineral vessels, and raw linen textiles. The soft warm natural morning sunlight filters through open studio windows, highlighting authentic coastal textures, calming ivory plaster tones, and subtle teal pigment swatches." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn5iJFSMBjXT94YDv-h2xFxynqes_NDnh1iEsoX4VPVwCpVdyTb6e0NK9Zyo72CfFOrR05WP94YnWR5lYSr4LOa4BTN4L78YQ1uiO3TqyIP78nV0BFSbkYqyFidatink4OwGbvD-lG0cV8D_jm7pxllnjfTRIOpLEIoHYKqdn3jJNUltuMigBnZuHlJXbh0FuHoUGrJa2ShUjdxFYnsCDQcGUnUSHQ4KdAML-_GRA" />
      <div className="absolute inset-0 bg-gradient-to-t from-inverse-surface/60 via-transparent to-transparent" />
      <div className="absolute bottom-6 left-6 right-6 text-on-secondary">
      <span className="font-label-badge text-label-badge uppercase tracking-wider text-primary-fixed">Fundadora &amp; Escultora</span>
      <h3 className="font-headline-md text-headline-md text-on-secondary font-medium">Andrea Sosa</h3>
      <p className="font-caption text-caption text-surface-variant opacity-90">Bogot&aacute; &amp; Litoral Colombiano</p>
      </div>
      </div>
      { /* Detalle curatorial flotante */ }
      <div className="absolute -bottom-6 -right-4 hidden sm:block p-4 rounded-xl bg-surface/95 backdrop-blur-md shadow-lg border border-outline-variant/40 max-w-[210px]">
      <span className="font-caption text-caption text-secondary font-bold uppercase tracking-wider block mb-1">Filosof&iacute;a Vital</span>
      <p className="font-body-sm text-body-sm text-on-surface italic">&quot;Dise&ntilde;ar para conservar la respiraci&oacute;n del material.&quot;</p>
      </div>
      </div>
      { /* Semblanza de la Diseñadora */ }
      <div className="lg:col-span-7 space-y-6">
      <div className="space-y-2">
      <span className="font-caption text-caption uppercase tracking-widest text-primary font-medium">Curadur&iacute;a Principal</span>
      <h2 className="font-headline-xl text-headline-xl text-secondary">
                      Un puente entre el murmullo del mar y la escultura de mesa
                    </h2>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Andrea Sosa concibe Seahorse como la extensi&oacute;n tangible de una fascinaci&oacute;n infantil por la vida litoral colombiana. Formada en dise&ntilde;o de autor y artes pl&aacute;sticas, Andrea reh&uacute;ye de la estandarizaci&oacute;n para celebrar la belleza de los bordes org&aacute;nicos, las burbujas minerales atrapadas y las transparencias que emulan la luz refractada en un arrecife.
                  </p>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Para Andrea, cada objeto es una pieza curatorial que transforma los espacios cotidianos en templos de quietud. Desde el vaciado del cemento arquitect&oacute;nico hasta la mezcla alqu&iacute;mica de tintas de autor, su mano gu&iacute;a de principio a fin el nacimiento de cada objeto.
                  </p>
      { /* Sellos de autor */ }
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
      <div className="p-4 rounded-xl bg-surface border border-outline-variant/30">
      <span className="font-label-price text-label-price text-primary block">+8 A&ntilde;os</span>
      <span className="font-caption text-caption text-on-surface-variant">Explorando pol&iacute;meros y minerales</span>
      </div>
      <div className="p-4 rounded-xl bg-surface border border-outline-variant/30">
      <span className="font-label-price text-label-price text-secondary block">100%</span>
      <span className="font-caption text-caption text-on-surface-variant">Proceso manual y trazable</span>
      </div>
      <div className="p-4 rounded-xl bg-surface border border-outline-variant/30 col-span-2 sm:col-span-1">
      <span className="font-label-price text-label-price text-tertiary block">Ediciones</span>
      <span className="font-caption text-caption text-on-surface-variant">Firmadas y certificadas</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      { /* EL MANIFIESTO DE TALLER: FILOSOFÍA Y EL TÓTEM */ }
      <section className="py-20 md:py-28 px-6 lg:px-12 max-w-7xl mx-auto space-y-16">
      { /* Introducción al Manifiesto */ }
      <div className="max-w-3xl mx-auto text-center space-y-4">
      <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">Nuestros Principios</span>
      <h2 className="font-display-hero-mobile md:font-headline-xl text-display-hero-mobile md:text-headline-xl text-on-surface">
                El Manifiesto de Taller
              </h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
                Elogio a la pausa, al trabajo paciente con las manos y a la poes&iacute;a contenida en la materia ind&oacute;mita.
              </p>
      </div>
      { /* Bento Grid Asimétrico: La pausa & El Tótem */ }
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      { /* Bloque 1: Rescate de la calma */ }
      <div className="lg:col-span-7 rounded-lg p-8 md:p-12 bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-6">
      <div className="space-y-4">
      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
      <MaterialSymbol className="material-symbols-outlined text-2xl">spa</MaterialSymbol>
      </div>
      <h3 className="font-headline-lg text-headline-lg text-secondary">
                    La Rebeli&oacute;n de la Calma Frente a la Serie Masiva
                  </h3>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Nos negamos a la velocidad industrial. En Seahorse creemos que un objeto adquiere alma cuando ha absorbido la atenci&oacute;n ininterrumpida de su creador. Cada pieza exige un proceso de decantaci&oacute;n: esperar que el calor de la reacci&oacute;n qu&iacute;mica se disipe, sentir con las yemas el grano del pulido y respetar las cadencias irreductibles de la tierra.
                  </p>
      </div>
      <div className="border-t border-outline-variant/20 pt-6 flex items-center justify-between text-on-surface-variant font-caption text-caption">
      <span>Ritmo pausado garantizado</span>
      <span className="inline-flex items-center gap-1 font-medium text-primary">
      <MaterialSymbol className="material-symbols-outlined text-[16px]">verified</MaterialSymbol> Autor&iacute;a Andrea Sosa
                  </span>
      </div>
      </div>
      { /* Bloque 2: El Tótem Caballito de Mar */ }
      <div className="lg:col-span-5 rounded-lg p-8 md:p-12 bg-surface-container border border-outline-variant/30 shadow-sm flex flex-col justify-between space-y-6 relative overflow-hidden">
      <div className="space-y-4 relative z-10">
      <div className="w-12 h-12 rounded-full bg-secondary/15 text-secondary flex items-center justify-center">
      <MaterialSymbol className="material-symbols-outlined text-2xl">water</MaterialSymbol>
      </div>
      <h3 className="font-headline-lg text-headline-lg text-on-surface">
                    El Caballito de Mar como T&oacute;tem
                  </h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                    El hipocampo no nada con prisa: flota, se aferra con sutileza a las algas y danza con las corrientes m&aacute;s fieras. Para nosotros representa la s&iacute;ntesis suprema de la **fragilidad armada de resistencia**. Su anatom&iacute;a geom&eacute;trica y sus filigranas son el espejo sobre el que esculpimos cada curva de nuestro cat&aacute;logo.
                  </p>
      </div>
      <div className="relative z-10 pt-4 flex items-center gap-3">
      <span className="font-label-badge text-label-badge px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed">
                    Resiliencia
                  </span>
      <span className="font-label-badge text-label-badge px-3 py-1 rounded-full bg-tertiary-fixed text-on-tertiary-fixed">
                    Fragilidad
                  </span>
      <span className="font-label-badge text-label-badge px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed">
                    Belleza Viva
                  </span>
      </div>
      </div>
      </div>
      { /* LOS 5 PILARES MATERIALES */ }
      <div className="space-y-8 pt-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-outline-variant/30 pb-4">
      <div>
      <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">Nuestra Materia Prima</span>
      <h3 className="font-headline-lg text-headline-lg text-secondary">Los 5 Pilares Materiales</h3>
      </div>
      <p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
                  Sustancias seleccionadas bajo criterios de pureza t&aacute;ctil, procedencia &eacute;tica y resonancia sensorial.
                </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      { /* Pilar 1 */ }
      <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-colors space-y-4">
      <span className="font-label-price text-label-price text-primary">01</span>
      <h4 className="font-headline-sm text-headline-sm text-on-surface">Resina de Alta Pureza</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    F&oacute;rmula libre de vapores t&oacute;xicos con filtros UV activos, que conserva la diafanidad del agua profunda sin amarillear.
                  </p>
      </div>
      { /* Pilar 2 */ }
      <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-colors space-y-4">
      <span className="font-label-price text-label-price text-secondary">02</span>
      <h4 className="font-headline-sm text-headline-sm text-on-surface">Cemento Arquitect&oacute;nico</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Mezcla mineral blanca ultra fina. Otorga peso escult&oacute;rico, aplomo en mesa y una superficie suave como la seda de piedra.
                  </p>
      </div>
      { /* Pilar 3 */ }
      <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-colors space-y-4">
      <span className="font-label-price text-label-price text-tertiary">03</span>
      <h4 className="font-headline-sm text-headline-sm text-on-surface">Lino Crudo</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Tejido vegetal sin blanquear qu&iacute;micamente. Aporta la calidez org&aacute;nica del papel grabado y la textura ancestral del telar.
                  </p>
      </div>
      { /* Pilar 4 */ }
      <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-colors space-y-4">
      <span className="font-label-price text-label-price text-primary">04</span>
      <h4 className="font-headline-sm text-headline-sm text-on-surface">Fibras Textiles</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    Algodones y cordoner&iacute;as colombianas entrelazadas manualmente que abrazan y protegen las zonas de apoyo de cada objeto.
                  </p>
      </div>
      { /* Pilar 5 */ }
      <div className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/30 hover:border-primary/50 transition-colors space-y-4">
      <span className="font-label-price text-label-price text-secondary">05</span>
      <h4 className="font-headline-sm text-headline-sm text-on-surface">Pigmentos Minerales</h4>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                    &Oacute;xidos de tierra, ultramarinos y cobalto molidos. Colores vivos que nunca se evaporan y dialogan con la luz circundante.
                  </p>
      </div>
      </div>
      </div>
      </section>
      { /* RECORRIDO FOTOGRÁFICO POR EL TALLER: 4 PASOS DE ALQUIMIA */ }
      <section className="py-20 bg-surface-container-low border-t border-outline-variant/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
      <div className="max-w-2xl space-y-3">
      <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">Trazabilidad del Oficio</span>
      <h2 className="font-headline-xl text-headline-xl text-secondary">
                  De la Materia Prima al Sello de Lacre
                </h2>
      <p className="font-body-md text-body-md text-on-surface-variant">
                  Un vistazo &iacute;ntimo a los cuatro momentos cruciales que acontecen en nuestras mesas de trabajo.
                </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      { /* Paso 1 */ }
      <div className="group flex flex-col rounded-xl overflow-hidden bg-surface border border-outline-variant/30 shadow-sm">
      <div className="relative aspect-square overflow-hidden bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close up photography of Andrea Sosa mixing turquoise and deep ocean blue mineral pigments into clear liquid resin in glass beakers. Subtle studio lighting catches droplets and microscopic marble patterns, conveying slow mindful alchemy in an artisan Colombian design workshop." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC9mZErlXFFs58masg_i34487kDZqu8CUqgMXSUT9UzIVQpD4P7gcB7vWv-Jlzi04JcIoxsam-1UEISvCxIOzShRhLgt9JxrM190IUzCSde4SynkVz0dYXQAwUPUs-3s4J14hwVx_Ja2FUfabXMrBVb7Luh1gMSR2ZYquR_1pqYmnlEpQ_Hz4sRCl1HUcpetHKsTZbnKkeFPufDTcj4WxAvA8gs-kQdVCYJLFJdao" />
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-sm font-label-badge text-label-badge text-primary">
                      Fase 1 &middot; Mezclado
                    </span>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Pigmentaci&oacute;n Lenta</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Graduaci&oacute;n de tintas y &oacute;xidos gota a gota para capturar gradientes oce&aacute;nicos irrepetibles.
                      </p>
      </div>
      </div>
      </div>
      { /* Paso 2 */ }
      <div className="group flex flex-col rounded-xl overflow-hidden bg-surface border border-outline-variant/30 shadow-sm">
      <div className="relative aspect-square overflow-hidden bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Artisan hands slowly pouring creamy white architectural cement into custom organic silicone molds on a natural oak studio table. Soft atmospheric light reveals powdered textures and precise handcrafted care inside the Colombian atelier." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFx-kdGbNrFKr0EtkaQZNXTnu9B1dl0D-q-LQKc3_mAju-bE6LR-i5twx4tsDia0lQlJR8yA_wZt3FdVhR8bzq2tWxVwk0UakMVeRsTwVUntunZz2r-NljqthHtoltt22cBcyZfp3QS0zYo-AYaSY1sKpYxRQV8L503nNfNeD5kpJEPHwWcO3mdKrjL5t7D4_b05sDCbTrv3eGrHzTVlTgQUIWtddcxdvL7eOC1lE" />
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-sm font-label-badge text-label-badge text-primary">
                      Fase 2 &middot; Vaciado
                    </span>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Colado Gravitacional</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Vertido controlado en moldes biom&oacute;rficos que expulsan burbujas mediante vibraci&oacute;n mec&aacute;nica suave.
                      </p>
      </div>
      </div>
      </div>
      { /* Paso 3 */ }
      <div className="group flex flex-col rounded-xl overflow-hidden bg-surface border border-outline-variant/30 shadow-sm">
      <div className="relative aspect-square overflow-hidden bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Detailed macro shot of an artist hand sanding the curved edges of a cured sea-inspired sculptural tray with fine grit sandpaper and natural water. Water droplets gleam over the silky smooth white composite surface in soft morning daylight." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA_-VieZDJK2aUHGojnb1ar0bJE7TQNJxCVIMuhFyikDxN-TvgYTqeJO2GAc_qB7yumZxPHt65JtuvxdLgnYQebEmEpLY7sRpXfp7Whokd0dalwtWL5usO5DD-yvhkz0yHFf7HTMzMVWnNxzSSFIhhIsUf8x5KX_qFK6G0_0eznoFVnwJ4ESiHawDcvxV2Eu73Wha5kzFgLh3l6t7Rug8vbuAF6Q7SgjLa3zoFKhpI" />
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-sm font-label-badge text-label-badge text-primary">
                      Fase 3 &middot; Pulido a Mano
                    </span>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Afinaci&oacute;n T&aacute;ctil</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Tres etapas de lija al agua hasta alcanzar un tacto de concha marina pulida por el oleaje.
                      </p>
      </div>
      </div>
      </div>
      { /* Paso 4 */ }
      <div className="group flex flex-col rounded-xl overflow-hidden bg-surface border border-outline-variant/30 shadow-sm">
      <div className="relative aspect-square overflow-hidden bg-surface-container">
      <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Artisanal packaging station showing unbleached natural cardboard boxes wrapped with raw linen ribbons, finished with an authentic deep teal melted wax seal featuring a miniature seahorse crest. Fresh botanical sprigs and handwritten certificates are placed beside it." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNG1lmKIqBCdMISo2Uk-UyFyu7VDc_ZuKygrYHfCdTY7OXjZac-3XyDWc7uvOBfRYL53_sOMU6EwQcaxv4MLkim8mRon552qsDxhDjd-3R1vdrsVKnOD6bc1Ro1ifZ-FfzjO3nqxvXrLGX4Tv6zcGTL3J4FnU1Ik68aZYa7H1ky637jlQVDh3rxPTRfkDjKr-BXlmoDSE1rKBZQ-rofn3KQR3x3v98wKu23_8VhxM" />
      <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-surface/90 backdrop-blur-sm font-label-badge text-label-badge text-primary">
                      Fase 4 &middot; Empaque &amp; Lacre
                    </span>
      </div>
      <div className="p-5 flex-1 flex flex-col justify-between">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2">Curadur&iacute;a Final</h3>
      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Envoltura en lino crudo, sello en cera marina caliente y certificado de autenticidad firmado.
                      </p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </section>
      { /* COMPROMISO LOCAL: HECHO EN COLOMBIA & SOSTENIBILIDAD */ }
      <section className="py-20 md:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <div className="rounded-2xl bg-surface-container-high/40 border border-outline-variant/30 p-8 md:p-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
      <div className="lg:col-span-7 space-y-6">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-fixed text-on-primary-fixed font-label-badge text-label-badge">
      <MaterialSymbol className="material-symbols-outlined text-[16px]">public</MaterialSymbol>
                    Origen y Consciencia
                  </div>
      <h2 className="font-headline-xl text-headline-xl text-secondary">
                    Hecho en Colombia con Ra&iacute;ces Dignas y Materiales Respetuosos
                  </h2>
      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    Creemos firmemente en el poder multiplicador del dise&ntilde;o &eacute;tico. Seahorse colabora activamente con talleres artesanales locales de hilado y molder&iacute;a en Colombia, garantizando condiciones de trabajo justas y preservando saberes manuales en peligro de extinci&oacute;n.
                  </p>
      <ul className="space-y-3 font-body-sm text-body-sm text-on-surface">
      <li className="flex items-center gap-3">
      <MaterialSymbol className="material-symbols-outlined text-primary">check_circle</MaterialSymbol>
      <span><strong>Empaques 100% Biodegradables:</strong> Cajas de fibra reciclada de ca&ntilde;a de az&uacute;car y virutas naturales compostables.</span>
      </li>
      <li className="flex items-center gap-3">
      <MaterialSymbol className="material-symbols-outlined text-primary">check_circle</MaterialSymbol>
      <span><strong>Cero Desperdicio de Mezcla:</strong> Los excedentes de cemento y resina se reconvierten en mosaicos para microesculturas.</span>
      </li>
      <li className="flex items-center gap-3">
      <MaterialSymbol className="material-symbols-outlined text-primary">check_circle</MaterialSymbol>
      <span><strong>Comercio Directo y Solidario:</strong> Remuneraci&oacute;n superior al est&aacute;ndar nacional para nuestras tejedoras aliadas.</span>
      </li>
      </ul>
      </div>
      <div className="lg:col-span-5 flex flex-col justify-center items-center text-center p-8 rounded-xl bg-surface border border-outline-variant/40 shadow-sm space-y-4">
      <div className="w-20 h-20 rounded-full bg-surface-container-low flex items-center justify-center border border-outline-variant/40">
      <img alt="Logotipo oficial Seahorse Estudio Creativo by Andrea Sosa" className="w-14 h-14 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFBfoyzftgas6147yOZabAsUhuq4FBLD7CP4Hq4yvYgC3bXe2Gq5V8rUiRSILBJP_kHulYP27bEAiunMAnjnTvMhnnxESLY91UKJ4c47Mr2BYft7T21XwX6Tk01urFaerAXkLYyTiRV8hcfbB_o1YVmk8D6tdyDXtcmUtAb6SOEJi-8LhN-NqY14uH4pMXB-Xjwnpd6c0NR6DZCyX1uAaUxX7TC7vdPc__Ui8YCk98kT1s7rUi-Lr-" />
      </div>
      <div>
      <h4 className="font-headline-sm text-headline-sm text-secondary">Certificaci&oacute;n de Autor</h4>
      <p className="font-caption text-caption text-on-surface-variant max-w-xs mt-1">
                      Taller radicado en Colombia con env&iacute;os asegurados a todo el territorio nacional y coleccionistas en el exterior.
                    </p>
      </div>
      <a className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary-container text-on-primary transition-all duration-200 font-body-md text-body-md shadow-sm" href="#">
      <span>Explorar la Tienda</span>
      <MaterialSymbol className="material-symbols-outlined text-lg">arrow_forward</MaterialSymbol>
      </a>
      </div>
      </div>
      </div>
      </section>
      { /* CITA DE AUTOR Y FIRMA */ }
      <section className="py-20 md:py-24 text-center px-6 max-w-4xl mx-auto space-y-8">
      <MaterialSymbol className="material-symbols-outlined text-primary text-5xl opacity-40">format_quote</MaterialSymbol>
      <blockquote className="font-headline-lg md:font-headline-xl text-headline-lg md:text-headline-xl text-secondary font-normal italic leading-snug">
              &ldquo;No buscamos crear objetos decorativos para llenar estantes vac&iacute;os; creamos talismanes silenciosos que recuerden a quien los habita la belleza de la paciencia, el peso de la tierra y la transparencia del agua.&rdquo;
            </blockquote>
      <div className="pt-2 flex flex-col items-center">
      { /* Firma estilizada */ }
      <span className="font-headline-md text-headline-md tracking-wider text-on-surface font-medium">Andrea Sosa</span>
      <span className="font-caption text-caption uppercase tracking-widest text-primary mt-1">Directora Creativa &amp; Fundadora</span>
      <div className="w-12 h-0.5 bg-primary-container mt-4 rounded-full" />
      </div>
      </section>
      </main>
      { /* FOOTER EDITORIAL */ }
      <footer className="bg-surface-container dark:bg-inverse-surface border-t border-outline-variant/20 dark:border-outline/10">
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-6 lg:px-12 py-8 max-w-7xl mx-auto gap-4">
      { /* Brand & Copyright */ }
      <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
      <span className="font-headline-md text-headline-md text-secondary dark:text-secondary-fixed tracking-tight">
                Seahorse Estudio Creativo by Andrea Sosa
              </span>
      <span className="hidden sm:inline text-outline-variant">|</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant">
                &copy; 2024 Seahorse Estudio Creativo by Andrea Sosa. Hecho a mano y con dise&ntilde;o de autor en Colombia. Todos los derechos reservados.
              </p>
      </div>
      { /* Footer Navigation Links */ }
      <nav className="flex flex-wrap items-center justify-center gap-6">
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-sm text-body-sm" href="/tienda">
                Cat&aacute;logo
              </Link>
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-sm text-body-sm" href="/personaliza">
                Personalizaci&oacute;n
              </Link>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-sm text-body-sm" href="#">
                Env&iacute;os en Colombia
              </a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-sm text-body-sm" href="#">
                T&eacute;rminos y Condiciones
              </a>
      <a className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-sm text-body-sm" href="#">
                Privacidad
              </a>
      <Link className="text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-primary-fixed font-body-sm text-body-sm" href="/dashboard">
                Panel Admin
              </Link>
      </nav>
      </div>
      </footer></>
    </PrototypePage>
  );
}
