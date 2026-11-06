"use client";

import { MaterialSymbol } from "./material-symbol";
import { ContentShared } from "./content-shared";

export default function ContactoPrototype() {
  return (
    <ContentShared page="contacto">
<section className="py-12 px-6 lg:px-12 max-w-4xl mx-auto" id="view-contacto">
      <div className="bg-surface-container-lowest rounded-3xl p-8 sm:p-12 border border-outline-variant/20 artistic-shadow-2">
      <div className="text-center max-w-xl mx-auto mb-10">
      <span className="font-label-badge text-caption text-secondary uppercase tracking-widest">Hablemos de tu Proyecto</span>
      <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight mt-1">Contacto Directo</h1>
      <p className="font-body-sm text-body-sm text-outline mt-2">Escr&iacute;benos directamente.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
      <div>
      <span className="text-caption font-bold text-primary uppercase">Atelier Principal:</span>
      <p className="font-body-md text-on-surface">Bogotá, Colombia</p>
      </div>
      <div>
      <span className="text-caption font-bold text-primary uppercase">WhatsApp Oficial:</span>
      <p className="font-body-md text-on-surface">+57 (315) 802-5407</p>
      </div>
      <div>
      <span className="text-caption font-bold text-primary uppercase">Instagram:</span>
      <p className="font-body-md text-secondary">@la_tiendita_de_andre_kawaii</p>
      <p className="font-body-md text-secondary">@seahorsedesign</p>
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
      <textarea className="w-full rounded-xl border-outline-variant/40 bg-surface-container-low text-body-sm p-3" placeholder="¿En qué podemos ayudarte?" required rows={3} />
      </div>
      <button className="w-full py-3 rounded-full bg-primary text-on-primary font-body-md font-medium hover:bg-surface-tint shadow-md" type="submit">
                    Enviar Mensaje
                  </button>
      </form>
      </div>
      </div>
      </section>
    </ContentShared>
  );
}
