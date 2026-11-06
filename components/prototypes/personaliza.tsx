"use client";

import {
  goToCustomStep,
  highlightCatCard,
  simulateUpload,
  submitCustomForm,
} from "./home-interactions";
import { MaterialSymbol } from "./material-symbol";
import { ContentShared } from "./content-shared";

export default function PersonalizaPrototype() {
  return (
    <ContentShared page="personaliza">
<section className="py-10 px-6 lg:px-12 max-w-5xl mx-auto" id="view-personaliza">
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
      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">Elige la t&eacute;cnica base</h2>
      <p className="font-body-sm text-body-sm text-outline mt-1">Selecciona sobre qu&eacute; disciplina creativa deseas estructurar tu encargo:</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <label className="custom-cat-card p-4 rounded-2xl border-2 border-primary bg-primary-fixed/15 cursor-pointer flex flex-col justify-between transition-all">
      <input defaultChecked={true} className="hidden" name="custom_category" onChange={event => { highlightCatCard(event.currentTarget); }} type="radio" value="Cuadros" />
      <div className="flex items-center justify-between mb-3">
      <MaterialSymbol className="material-symbols-outlined text-primary text-2xl">brush</MaterialSymbol>
      <span className="text-caption font-bold text-primary">01</span>
      </div>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Cuadros</h3>
      <p className="text-caption text-outline mt-1">Siluetas en papel de distintos colores en marcos de madera y acrílico.</p>
      </div>
      </label>
      <label className="custom-cat-card p-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex flex-col justify-between transition-all">
      <input className="hidden" name="custom_category" onChange={event => { highlightCatCard(event.currentTarget); }} type="radio" value="Resina" />
      <div className="flex items-center justify-between mb-3">
      <MaterialSymbol className="material-symbols-outlined text-secondary text-2xl">water_drop</MaterialSymbol>
      <span className="text-caption font-bold text-outline">02</span>
      </div>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Resina </h3>
      <p className="text-caption text-outline mt-1">Llaveros, aretes, juegos y objetos decorativos para el hogar.</p>
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
      <p className="text-caption text-outline mt-1">Floreros geométricos, bandejas onduladas y portavelas artesanales.</p>
      </div>
      </label>
      <label className="custom-cat-card p-4 rounded-2xl border border-outline-variant/30 bg-surface-container-low cursor-pointer flex flex-col justify-between transition-all">
      <input className="hidden" name="custom_category" onChange={event => { highlightCatCard(event.currentTarget); }} type="radio" value="Estampados" />
      <div className="flex items-center justify-between mb-3">
      <MaterialSymbol className="material-symbols-outlined text-secondary text-2xl">texture</MaterialSymbol>
      <span className="text-caption font-bold text-outline">04</span>
      </div>
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Estampados</h3>
      <p className="text-caption text-outline mt-1">Diseños ilustrados de autor aplicados a prendas y piezas textiles.</p>
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
      <label className="block font-label-badge text-caption text-outline uppercase mb-2" htmlFor="custom-color-palette">Colores preferidos:</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3 focus:border-primary focus:ring-0" id="custom-color-palette" name="color_palette" placeholder="Ej.: azul petróleo, terracota y dorado" type="text" />
      </div>
      <div>
      <label className="block font-label-badge text-caption text-outline uppercase mb-2" htmlFor="custom-text-field">Texto, frase o nombres a incluir (opcional):</label>
      <input className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3 focus:border-primary focus:ring-0" id="custom-text-field" placeholder="Ej: A & S, 12.10.2024 o una frase significativa..." type="text" />
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
      <p className="font-body-sm text-body-sm text-outline mt-1">Comparte fotos de tu espacio, paleta o bocetos visuales:</p>
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
      <textarea className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3 focus:border-primary focus:ring-0" id="custom-notes" placeholder="Cuentanos el significado emocional, para quien es, que emoción buscas transmitir..." rows={4} />
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
      <p className="text-on-surface-variant" id="custom-summary-text">Categor&iacute;a: Cuadros</p>
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
    </ContentShared>
  );
}
