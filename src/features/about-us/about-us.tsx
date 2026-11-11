"use client";

import { MaterialSymbol } from "@shared/components/material-symbol";
import { ContentShared } from "@shared/components/content-shared";

export default function AboutUs() {
  return (
    <ContentShared page="sobre-nosotros">
      <section className="py-12 px-6 lg:px-12 max-w-5xl mx-auto" id="view-nosotros">
        <div className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-label-badge text-caption text-primary uppercase tracking-widest">
              Identidad &amp; Coraz&oacute;n
            </span>
            <h1 className="font-headline-xl text-headline-xl-mobile sm:text-headline-xl text-on-surface font-semibold tracking-tight mt-2">
              Seahorse Estudio Creativo by Andrea Sosa
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-3">
              Un refugio creativo donde convergen las artes pl&aacute;sticas, el dise&ntilde;o
              industrial y el amor en cada objeto elaborado.
            </p>
          </div>
          <div className="aspect-[16/9] rounded-3xl overflow-hidden artistic-shadow-2 border border-outline-variant/20 relative">
            <img
              className="w-full h-full object-cover"
              alt="Taller Seahorse Estudio Creativo"
              src="/images/img-taller-creativo.jpeg"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 artistic-shadow-1">
              <MaterialSymbol className="material-symbols-outlined text-secondary text-3xl mb-2">
                handshake
              </MaterialSymbol>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Comercio Justo
              </h3>
              <p className="font-body-sm text-body-sm text-outline mt-2">
                Cada pieza dignifica las horas de investigaci&oacute;n, pulido y trabajo hecho por
                manos colombianas.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/20 artistic-shadow-1">
              <MaterialSymbol className="material-symbols-outlined text-tertiary text-3xl mb-2">
                hotel_class
              </MaterialSymbol>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                Dise&ntilde;o de Autor
              </h3>
              <p className="font-body-sm text-body-sm text-outline mt-2">
                No seguimos tendencias de hiper-consumo. Producimos colecciones pausadas para
                perdurar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </ContentShared>
  );
}
