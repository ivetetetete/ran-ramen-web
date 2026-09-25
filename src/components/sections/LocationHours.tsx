import React from "react";
import { Button } from "@/components/ui/Button";
import { MapPin, Clock, Phone, ShoppingBag } from "lucide-react";
import { InstagramIcon } from "@/components/ui/Icons";

export function LocationHours() {
  return (
    <section id="horarios" className="border-t-2 border-stone-900 bg-[#f5ece1] py-16 sm:py-24 md:py-28 relative overflow-hidden">
      <div className="pointer-events-none select-none absolute bottom-4 right-4 sm:right-8 text-[80px] sm:text-[130px] md:text-[150px] font-black text-amber-950/5 leading-none z-0">
        営業時間
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-stone-950 sm:text-4xl md:text-5xl">
              Ven a visitarnos o pide para llevar
            </h2>
            <p className="mt-2.5 sm:mt-3 text-sm sm:text-base text-stone-700 font-medium leading-relaxed">
              Disfruta de nuestros currys, donburis, gyozas, opciones 100% veganas, postres artesanos y bebidas japonesas en nuestro
              restaurante en Vilanova i la Geltrú o haz tu pedido por teléfono para
              recoger caliente.
            </p>

            <div className="mt-6 sm:mt-8 space-y-3.5 sm:space-y-5">
              <div className="flex items-start gap-3.5 sm:gap-4 rounded-2xl border-2 border-stone-900 bg-white p-3.5 sm:p-4 shadow-[3px_3px_0px_#1c1917]">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400 text-stone-950 border border-stone-900">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-stone-950">
                    Horario de Apertura
                  </h4>
                  <div className="mt-1 space-y-1 text-xs sm:text-sm text-stone-700">
                    <p className="flex items-center gap-2 sm:gap-3">
                      <span className="font-bold text-stone-500">Mediodía:</span>
                      <span className="font-mono font-black text-stone-950">12:30H - 16:00H</span>
                    </p>
                    <p className="flex items-center gap-2 sm:gap-3">
                      <span className="font-bold text-stone-500">Noche:</span>
                      <span className="font-mono font-black text-stone-950">20:00H - 23:00H</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4 rounded-2xl border-2 border-stone-900 bg-white p-3.5 sm:p-4 shadow-[3px_3px_0px_#1c1917]">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-red-600 text-white border border-stone-900">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-stone-950">
                    Teléfono & Pedidos
                  </h4>
                  <a
                    href="tel:931546287"
                    className="mt-1 block font-mono text-base sm:text-lg font-black text-red-600 hover:text-red-700 hover:underline"
                  >
                    931 546 287
                  </a>
                  <p className="text-xs text-stone-500 font-medium">
                    Llámanos para consultar disponibilidad o encargar tu comida para llevar
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4 rounded-2xl border-2 border-stone-900 bg-white p-3.5 sm:p-4 shadow-[3px_3px_0px_#1c1917]">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-rose-50 text-red-600 border border-stone-900">
                  <InstagramIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-stone-950">Instagram Oficial</h4>
                  <a
                    href="https://www.instagram.com/ranramen_vilanova"
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1 block text-sm font-bold text-red-600 hover:text-red-700 hover:underline"
                  >
                    @ranramen_vilanova
                  </a>
                  <p className="text-xs text-stone-500 font-medium">
                    Fotos de platos, novedades y comunidad
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 sm:gap-4 rounded-2xl border-2 border-stone-900 bg-white p-3.5 sm:p-4 shadow-[3px_3px_0px_#1c1917]">
                <div className="flex h-10 w-10 sm:h-11 sm:w-11 shrink-0 items-center justify-center rounded-xl bg-stone-100 text-stone-900 border border-stone-900">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-black text-stone-950">Ubicación</h4>
                  <p className="mt-1 text-xs sm:text-sm text-stone-700 font-medium">
                    <a href="https://maps.app.goo.gl/pmtvdvZLbGh8yiD19" target="_blank" rel="noreferrer" className="font-mono font-bold text-stone-950">
                      Rambla de la Pau, 6, 08800 Vilanova i la Geltrú, Barcelona
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border-2 border-stone-900 bg-white p-5 sm:p-8 shadow-[4px_4px_0px_#1c1917] sm:shadow-[6px_6px_0px_#1c1917]">
            <div className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-red-600 text-white border-2 border-stone-900 shadow-[2px_2px_0px_#1c1917] mb-4 sm:mb-6">
              <ShoppingBag className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-stone-950">
              ¿Quieres pedir para llevar?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-stone-700 leading-relaxed font-medium">
              Todos los platos de nuestra carta están disponibles para llevar.
              Llámanos por teléfono con los códigos de los platos que deseas (ej.
              A1, G2, C2) y lo tendremos recién preparado a la hora que nos indiques.
            </p>

            <div className="mt-5 sm:mt-6 rounded-2xl border-2 border-stone-900 bg-amber-50 p-3.5 sm:p-4 space-y-2 text-xs text-stone-700">
              <div className="flex justify-between items-center py-1 border-b border-amber-200">
                <span className="font-bold text-stone-700">Teléfono directo:</span>
                <span className="font-mono text-red-600 font-black text-sm">931 546 287</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-amber-200">
                <span className="font-bold text-stone-700">Mediodía:</span>
                <span className="font-mono font-bold text-stone-900">12:30H - 16:00H</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="font-bold text-stone-700">Noche:</span>
                <span className="font-mono font-bold text-stone-900">20:00H - 23:00H</span>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <a href="tel:931546287" className="flex-1">
                <Button
                  className="w-full border-2 border-stone-900 bg-red-600 hover:bg-red-500 text-white font-black py-3 sm:py-3.5 shadow-[3px_3px_0px_#1c1917] hover:shadow-[1px_1px_0px_#1c1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer text-xs sm:text-sm"
                  size="lg"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Llamar para Pedir
                </Button>
              </a>
              <a
                href="https://www.instagram.com/ranramen_vilanova"
                target="_blank"
                rel="noreferrer"
                className="flex-1"
              >
                <Button
                  className="w-full border-2 border-stone-900 bg-white hover:bg-stone-50 text-stone-950 font-black py-3 sm:py-3.5 shadow-[3px_3px_0px_#1c1917] hover:shadow-[1px_1px_0px_#1c1917] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer text-xs sm:text-sm"
                  size="lg"
                  variant="secondary"
                >
                  <InstagramIcon className="mr-2 h-4 w-4 text-red-600" />
                  Instagram
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
