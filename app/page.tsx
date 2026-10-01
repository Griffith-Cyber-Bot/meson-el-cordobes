"use client";
import { useState } from "react";
import { MapPin, Clock, Phone, BookOpen, ChevronLeft, ChevronRight, Star } from "lucide-react";

export default function Home() {
  const [paginaLibro, setPaginaLibro] = useState(1);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Ajustamos el offset según la sección para lograr un centrado perfecto
      let headerOffset = 80;
      if (id === "carta") headerOffset = 60;
      if (id === "resenas") {
        // Centramos verticalmente la sección de reseñas en pantalla
        const elementHeight = element.offsetHeight;
        const windowHeight = window.innerHeight;
        headerOffset = Math.max(0, (windowHeight - elementHeight) / 2);
      }

      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF5ED] text-[#2C221E] font-sans selection:bg-[#D4A373] selection:text-white">
      {/* ESTILOS CSS PARA LAS ANIMACIONES DE PARTÍCULAS ASCENDENTES HASTA ARRIBA */}
      <style jsx global>{`
        @keyframes floatToTop {
          0% {
            transform: translateY(0px) scale(0.8);
            opacity: 0;
          }
          15% {
            opacity: 0.9;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-450px) scale(1.2);
            opacity: 0;
          }
        }
        .particle-fire {
          animation: floatToTop 5s infinite ease-in-out;
        }
      `}</style>

      {/* 1. CABECERA */}
      <header className="sticky top-0 z-50 bg-[#2C221E]/95 backdrop-blur-md text-[#FAF5ED] border-b border-[#7A431D]/30 shadow-lg">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="cursor-pointer" onClick={() => scrollToSection("inicio")}>
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4A373] block font-semibold">Mesón Restaurante</span>
            <span className="text-2xl font-serif tracking-wider font-bold">EL CORDOBÉS</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm uppercase tracking-widest font-medium">
            <button onClick={() => scrollToSection("inicio")} className="hover:text-[#D4A373] transition-colors pb-1 border-b-2 border-transparent hover:border-[#D4A373]">Inicio</button>
            <button onClick={() => scrollToSection("historia")} className="hover:text-[#D4A373] transition-colors pb-1 border-b-2 border-transparent hover:border-[#D4A373]">Nuestra Casa</button>
            <button onClick={() => scrollToSection("carta")} className="hover:text-[#D4A373] transition-colors pb-1 border-b-2 border-transparent hover:border-[#D4A373]">La Carta</button>
            <button onClick={() => scrollToSection("resenas")} className="hover:text-[#D4A373] transition-colors pb-1 border-b-2 border-transparent hover:border-[#D4A373]">Reseñas</button>
            <button onClick={() => scrollToSection("ubicacion")} className="hover:text-[#D4A373] transition-colors pb-1 border-b-2 border-transparent hover:border-[#D4A373]">Ubicación</button>
          </nav>
        </div>
      </header>

      {/* 2. CONTENIDO PRINCIPAL */}
      <main>
        {/* SECCIÓN INICIO CON PARTÍCULAS ASCENDENTES QUE LLEGAN HASTA ARRIBA */}
        <section id="inicio" className="relative py-32 px-6 bg-[#2C221E] text-[#FAF5ED] text-center overflow-hidden">
          {/* Patrón de fondo sutil */}
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D4A373_1px,transparent_1px)] [background-size:16px_16px]"></div>

          {/* Partículas de fuego / cenizas ascendentes que cruzan toda la pantalla hasta arriba */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            <div className="particle-fire absolute bottom-0 left-[10%] w-2 h-2 bg-orange-500 rounded-full blur-[1px]" style={{ animationDelay: '0s', animationDuration: '4.5s' }}></div>
            <div className="particle-fire absolute bottom-0 left-[22%] w-1.5 h-1.5 bg-amber-400 rounded-full blur-[1px]" style={{ animationDelay: '1.2s', animationDuration: '5.2s' }}></div>
            <div className="particle-fire absolute bottom-0 left-[35%] w-2.5 h-2.5 bg-red-500 rounded-full blur-[1px]" style={{ animationDelay: '0.5s', animationDuration: '4s' }}></div>
            <div className="particle-fire absolute bottom-0 left-[50%] w-2 h-2 bg-orange-400 rounded-full blur-[1px]" style={{ animationDelay: '2s', animationDuration: '6s' }}></div>
            <div className="particle-fire absolute bottom-0 left-[63%] w-1.5 h-1.5 bg-amber-300 rounded-full blur-[1px]" style={{ animationDelay: '0.8s', animationDuration: '4.8s' }}></div>
            <div className="particle-fire absolute bottom-0 left-[75%] w-2.5 h-2.5 bg-orange-600 rounded-full blur-[1px]" style={{ animationDelay: '1.7s', animationDuration: '5.5s' }}></div>
            <div className="particle-fire absolute bottom-0 left-[88%] w-2 h-2 bg-amber-500 rounded-full blur-[1px]" style={{ animationDelay: '0.3s', animationDuration: '4.2s' }}></div>
          </div>

          <div className="max-w-4xl mx-auto relative z-10 pt-4">
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 tracking-wide">El sabor de siempre, cocinado a fuego lento en Ibi.</h1>
            <p className="text-lg md:text-xl text-[#FAF5ED]/80 mb-10 max-w-2xl mx-auto font-light leading-relaxed">Disfrute de nuestras carnes a la brasa con carbón de encina, embutidos caseros y el calor de un mesón de pueblo.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button onClick={() => scrollToSection("carta")} className="bg-[#7A431D] hover:bg-[#5E3215] text-white px-8 py-4 text-xs font-sans uppercase tracking-widest font-bold shadow-lg transition-all flex items-center justify-center gap-2">
                <BookOpen className="w-4 h-4" /> Abrir la Carta del Mesón
              </button>
              <button onClick={() => scrollToSection("resenas")} className="bg-transparent hover:bg-[#FAF5ED]/10 border border-[#FAF5ED]/30 text-[#FAF5ED] px-8 py-4 text-xs font-sans uppercase tracking-widest font-bold transition-all">
                Ver Opiniones Reales
              </button>
            </div>
          </div>
        </section>

        {/* GALERÍA DE PLATOS */}
        <section className="py-20 px-6 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#7A431D] uppercase tracking-widest text-xs font-bold block mb-2">Nuestra Cocina en Imágenes</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C221E]">Especialidades de la Casa</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#7A431D]/10">
              <div className="h-56 overflow-hidden">
                <img src="/plato1.jpg" alt="Especialidad a la Brasa" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl mb-2 text-[#7A431D]">Especialidad a la Brasa</h3>
                <p className="text-sm text-[#2C221E]/70">Elaborado al calor de las brasas con aliño tradicional y limón fresco.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#7A431D]/10">
              <div className="h-56 overflow-hidden">
                <img src="/plato2.jpg" alt="Carnes con Patatas Caseras" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl mb-2 text-[#7A431D]">Carnes con Patatas Caseras</h3>
                <p className="text-sm text-[#2C221E]/70">Cortes seleccionados acompañados de patatas asadas y guarnición.</p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-md border border-[#7A431D]/10">
              <div className="h-56 overflow-hidden">
                <img src="/plato3.jpg" alt="Embutido y Tapas de la Tierra" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="font-serif font-bold text-xl mb-2 text-[#7A431D]">Embutido y Tapas de la Tierra</h3>
                <p className="text-sm text-[#2C221E]/70">Surtido de ibéricos y embutido casero servido sobre pan tostado.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN HISTORIA */}
        <section id="historia" className="py-20 bg-[#F4EBE1] px-6 border-y border-[#7A431D]/10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-[#7A431D] uppercase tracking-widest text-xs font-bold block mb-2">Nuestros Orígenes</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-[#2C221E]">Un mesón con alma de pueblo</h2>
            <div className="space-y-6 text-[#2C221E]/80 font-light leading-relaxed text-lg">
              <p>El Cordobés abrió sus puertas con una premisa inquebrantable: ofrecer un espacio de encuentro donde el producto de calidad y el trato familiar fueran los protagonistas indiscutibles de cada jornada.</p>
              <p>Ubicados en el corazón de Ibi, nuestro fogón huele a leña de encina, a guisos tradicionales y a estofados hechos con la paciencia que requiere la buena cocina. Aquí no hay prisas; cada plato se elabora respetando los tiempos y las recetas heredadas de nuestros mayores.</p>
              <p className="font-medium text-[#7A431D]">Venga a disfrutar con su familia y amigos de un ambiente entrañable y el auténtico sabor de la montaña alicantina.</p>
            </div>
          </div>
        </section>

        {/* SECCIÓN CARTA */}
        <section id="carta" style={{ scrollMarginTop: '100px' }} className="py-20 px-6 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[#7A431D] uppercase tracking-widest text-xs font-bold block mb-2">Menú del Mesón</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">La Carta de El Cordobés</h2>
            <p className="text-[#2C221E]/70">Pase las páginas de nuestro libro de recetas tradicionales</p>
          </div>

          <div className="bg-[#FFFDF9] border-2 border-[#7A431D]/30 p-8 md:p-12 rounded-lg shadow-xl relative">
            <div className="flex justify-between items-center border-b border-[#7A431D]/20 pb-4 mb-8">
              <span className="font-serif italic text-lg text-[#7A431D]">
                {paginaLibro === 1 && "Capítulo I — Carnes a la Brasa"}
                {paginaLibro === 2 && "Capítulo II — Tapas y Entrantes"}
                {paginaLibro === 3 && "Capítulo III — Postres Caseros"}
              </span>
              <span className="text-xs font-bold uppercase tracking-widest bg-[#7A431D]/10 text-[#7A431D] px-3 py-1 rounded">Página {paginaLibro} de 3</span>
            </div>

            <div className="min-h-[300px]">
              {paginaLibro === 1 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline border-b border-dashed border-[#7A431D]/20 pb-4">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#2C221E]">Entrecot de Ternera a la Brasa</h3>
                      <p className="text-sm text-[#2C221E]/70">Corte seleccionado al carbón de encina con patatas caseras asadas.</p>
                    </div>
                    <span className="font-serif font-bold text-[#7A431D] text-lg">19,50 €</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-dashed border-[#7A431D]/20 pb-4">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#2C221E]">Chuletas de Cordero Lechal</h3>
                      <p className="text-sm text-[#2C221E]/70">Tiernas chuletas asadas al punto con un toque de ajo y perejil.</p>
                    </div>
                    <span className="font-serif font-bold text-[#7A431D] text-lg">16,00 €</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-dashed border-[#7A431D]/20 pb-4">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#2C221E]">Solomillo al Rescoldo</h3>
                      <p className="text-sm text-[#2C221E]/70">Jugoso solomillo acompañado de guarnición de la huerta.</p>
                    </div>
                    <span className="font-serif font-bold text-[#7A431D] text-lg">18,50 €</span>
                  </div>
                </div>
              )}

              {paginaLibro === 2 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline border-b border-dashed border-[#7A431D]/20 pb-4">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#2C221E]">Embutido Artesano de la Comarca</h3>
                      <p className="text-sm text-[#2C221E]/70">Selección curada servida sobre pan tostado de pueblo.</p>
                    </div>
                    <span className="font-serif font-bold text-[#7A431D] text-lg">9,50 €</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-dashed border-[#7A431D]/20 pb-4">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#2C221E]">Croquetas Caseras de Jamón Ibérico</h3>
                      <p className="text-sm text-[#2C221E]/70">Elaboradas diariamente con bechamel cremosa y trocitos de jamón.</p>
                    </div>
                    <span className="font-serif font-bold text-[#7A431D] text-lg">7,00 €</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-dashed border-[#7A431D]/20 pb-4">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#2C221E]">Surtido de Tapas del Día</h3>
                      <p className="text-sm text-[#2C221E]/70">Pequeña muestra de guisos y preparaciones tradicionales.</p>
                    </div>
                    <span className="font-serif font-bold text-[#7A431D] text-lg">12,00 €</span>
                  </div>
                </div>
              )}

              {paginaLibro === 3 && (
                <div className="space-y-6">
                  <div className="flex justify-between items-baseline border-b border-dashed border-[#7A431D]/20 pb-4">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#2C221E]">Flan Tradicional de Huevo</h3>
                      <p className="text-sm text-[#2C221E]/70">Receta de la abuela con caramelo artesanal y nata.</p>
                    </div>
                    <span className="font-serif font-bold text-[#7A431D] text-lg">4,50 €</span>
                  </div>
                  <div className="flex justify-between items-baseline border-b border-dashed border-[#7A431D]/20 pb-4">
                    <div>
                      <h3 className="font-serif font-bold text-lg text-[#2C221E]">Tarta de Queso Casera</h3>
                      <p className="text-sm text-[#2C221E]/70">Cremosa al horno con mermelada de frutos rojos.</p>
                    </div>
                    <span className="font-serif font-bold text-[#7A431D] text-lg">5,00 €</span>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-between items-center mt-10 pt-6 border-t border-[#7A431D]/20">
              <button
                onClick={() => setPaginaLibro(prev => Math.max(prev - 1, 1))}
                disabled={paginaLibro === 1}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-bold border border-[#7A431D] flex items-center gap-1 ${paginaLibro === 1 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#7A431D] hover:text-white transition-colors"}`}
              >
                <ChevronLeft className="w-4 h-4" /> Anterior
              </button>
              <button
                onClick={() => setPaginaLibro(prev => Math.min(prev + 1, 3))}
                disabled={paginaLibro === 3}
                className={`px-4 py-2 text-xs uppercase tracking-widest font-bold border border-[#7A431D] flex items-center gap-1 ${paginaLibro === 3 ? "opacity-30 cursor-not-allowed" : "hover:bg-[#7A431D] hover:text-white transition-colors"}`}
              >
                Siguiente <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>

        {/* SECCIÓN RESEÑAS REALES (CENTRADA EXACTAMENTE EN EL MEDIO DE LA PANTALLA) */}
        <section id="resenas" className="py-20 bg-[#F4EBE1] px-6 border-y border-[#7A431D]/10 min-h-screen flex flex-col justify-center">
          <div className="max-w-6xl mx-auto w-full">
            <div className="text-center mb-16">
              <span className="text-[#7A431D] uppercase tracking-widest text-xs font-bold block mb-2">Opiniones de Google</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C221E]">Lo que dicen nuestros clientes</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md border border-[#7A431D]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#2C221E]/80 text-sm italic mb-6 leading-relaxed">
                    &quot;Local amb molt bona il·luminació. Servei ràpid i eficaç i menjar de gran qualitat, saborosa amb grans racions. Disposen de graella amb foc per a carn a la brasa (sempre és un plus).&quot;
                  </p>
                </div>
                <div className="border-t border-[#7A431D]/10 pt-4 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#7A431D]">Antonio Vera G</span>
                  <span className="text-[#2C221E]/50">Local Guide · fa 2 anys</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-[#7A431D]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#2C221E]/80 text-sm italic mb-6 leading-relaxed">
                    &quot;molt bon restaurant molta professionalitat. molt amables. i el menjar riquíssim el salmorejo és el més bo de tota la comarca. per això són cordovesos&quot;
                  </p>
                </div>
                <div className="border-t border-[#7A431D]/10 pt-4 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#7A431D]">susana vilaplana bermejo</span>
                  <span className="text-[#2C221E]/50">Local Guide · fa 5 mesos</span>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-md border border-[#7A431D]/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-500 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-[#2C221E]/80 text-sm italic mb-6 leading-relaxed">
                    &quot;L&apos;atenció un 10 i serveis molt atents ho recomano&quot;
                  </p>
                </div>
                <div className="border-t border-[#7A431D]/10 pt-4 flex items-center justify-between text-xs">
                  <span className="font-bold text-[#7A431D]">Juan Carlos Cintas Barrachina</span>
                  <span className="text-[#2C221E]/50">Local Guide · fa 2 mesos</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECCIÓN UBICACIÓN Y RESERVAS */}
        <section id="ubicacion" style={{ scrollMarginTop: '100px' }} className="py-20 px-6 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <span className="text-[#7A431D] uppercase tracking-widest text-xs font-bold block mb-2">Cómo Encontrarnos</span>
              <h2 className="text-3xl font-serif font-bold mb-6 text-[#2C221E]">Ubicación y Reservas</h2>
              <p className="text-[#2C221E]/70 mb-8">Venga a visitarnos o reserve su mesa con antelación para disfrutar de la experiencia completa.</p>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#7A431D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2C221E]">Dirección:</strong>
                    <span className="text-[#2C221E]/70">C. Espronceda, 79, 03440 Ibi, Alicante</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#7A431D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2C221E]">Teléfono de Reservas:</strong>
                    <span className="text-[#2C221E]/70">965 55 48 58</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#7A431D] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#2C221E]">Horario de Apertura:</strong>
                    <span className="text-[#2C221E]/70">Martes a Sábado (Almuerzos y Comidas). Domingos y Lunes cerrado.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md border border-[#7A431D]/10">
              <h3 className="text-xl font-serif font-bold mb-6 text-[#2C221E]">Reservar Mesa</h3>
              <form onSubmit={(e) => { e.preventDefault(); alert("¡Solicitud de reserva enviada correctamente!"); }} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C221E]/70 mb-1">Su Nombre</label>
                  <input type="text" required className="w-full bg-[#FAF5ED] border border-[#7A431D]/20 p-3 rounded text-sm focus:outline-none focus:border-[#7A431D]" placeholder="Ej. Juan Pérez" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C221E]/70 mb-1">Fecha</label>
                  <input type="date" required className="w-full bg-[#FAF5ED] border border-[#7A431D]/20 p-3 rounded text-sm focus:outline-none focus:border-[#7A431D]" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C221E]/70 mb-1">Comensales</label>
                  <select className="w-full bg-[#FAF5ED] border border-[#7A431D]/20 p-3 rounded text-sm focus:outline-none focus:border-[#7A431D]">
                    <option>2 Personas</option>
                    <option>4 Personas</option>
                    <option>6 Personas</option>
                    <option>Más de 6</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#2C221E]/70 mb-1">Teléfono</label>
                  <input type="tel" required className="w-full bg-[#FAF5ED] border border-[#7A431D]/20 p-3 rounded text-sm focus:outline-none focus:border-[#7A431D]" placeholder="Ej. 600000000" />
                </div>
                <button type="submit" className="w-full bg-[#7A431D] hover:bg-[#5E3215] text-white p-3 rounded text-xs uppercase tracking-widest font-bold transition-all shadow-md mt-2">
                  Confirmar Solicitud de Reserva
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-[#2C221E] text-[#FAF5ED]/60 py-8 text-center text-xs tracking-wider border-t border-[#7A431D]/20">
        <p>© {new Date().getFullYear()} Mesón Restaurante El Cordobés — Ibi (Alicante). Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}