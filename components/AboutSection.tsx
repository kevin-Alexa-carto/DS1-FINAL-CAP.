
import React from 'react';
import { User, ShieldCheck, MapPin, Smartphone, Globe, Clock, Lock, Landmark, BarChart3 } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { Logo } from './Logo';

export const AboutSection: React.FC = () => {
  const orbitIcons = [
    { icon: <Landmark size={20} />, angle: 0 },
    { icon: <Globe size={20} />, angle: 60 },
    { icon: <Clock size={20} />, angle: 120 },
    { icon: <User size={20} />, angle: 180 },
    { icon: <Lock size={20} />, angle: 240 },
    { icon: <Smartphone size={20} />, angle: 300 },
  ];

  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-12 md:py-24 px-4 bg-[#F4F2EB] dark:bg-brand-dark-bg transition-colors duration-500 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* --- COLUMNA IZQUIERDA: Contenido --- */}
        <div className="flex flex-col gap-8 relative z-10">
          
          <RevealOnScroll>
            <div className="inline-block bg-brand-green px-4 py-1.5 rounded-full mb-4 shadow-sm transform -rotate-1">
              <span className="text-slate-900 font-extrabold text-xs uppercase tracking-wider">Sobre nosotros</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.1]">
              ¿Quiénes somos?
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={100}>
            <p className="text-slate-700 dark:text-slate-300 text-lg font-medium leading-relaxed">
              Somos una casa de cambio con años en Chiclayo, operando de forma presencial y, recientemente, incursionando en el mundo digital. Como Fintech peruana, ofrecemos un servicio confiable a través de plataformas web y móviles, combinando innovación con nuestra experiencia local.
            </p>
          </RevealOnScroll>

          {/* Grid de Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RevealOnScroll delay={200} className="h-full">
              <div className="bg-[#cdfae8] dark:bg-white/5 p-6 rounded-[1.8rem] h-full border border-brand-green/20 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/60 dark:bg-brand-green/20 rounded-full flex items-center justify-center text-emerald-700 dark:text-brand-green">
                     <User className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-extrabold text-lg leading-tight">Servicio Personalizado</h3>
                </div>
                <p className="text-sm text-slate-800 dark:text-slate-300 font-semibold leading-relaxed">
                  Dirigido a personas naturales y empresas con cuentas bancarias en Soles (S/) y Dólares (USD).
                </p>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={300} className="h-full">
              <div className="bg-[#cdfae8] dark:bg-white/5 p-6 rounded-[1.8rem] h-full border border-brand-green/20 shadow-sm hover:shadow-md transition-shadow group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-white/60 dark:bg-brand-green/20 rounded-full flex items-center justify-center text-emerald-700 dark:text-brand-green">
                     <ShieldCheck className="w-5 h-5" strokeWidth={2.5} />
                  </div>
                  <h3 className="text-slate-900 dark:text-white font-extrabold text-lg leading-tight">Respaldo Garantizado</h3>
                </div>
                <p className="text-sm text-slate-800 dark:text-slate-300 font-semibold leading-relaxed">
                  Entidad financiera supervisada por la Superintendencia de Banca, Seguros y AFP del Perú.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          <RevealOnScroll delay={400}>
            <div className="bg-gradient-to-br from-brand-green to-[#05d678] rounded-[2rem] p-8 shadow-xl shadow-brand-green/20 relative overflow-hidden group">
               <MapPin className="absolute -right-8 -bottom-8 w-48 h-48 text-black/5 rotate-12 transition-transform duration-700 group-hover:scale-110 pointer-events-none" />
               <div className="relative z-10 flex flex-col sm:flex-row gap-5 items-start">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shrink-0 border border-white/40 text-slate-900 shadow-inner">
                    <MapPin className="w-7 h-7" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-slate-900 font-black text-2xl mb-2 tracking-tight">Ubíquenos</h3>
                    <p className="text-slate-900 font-bold leading-relaxed mb-2 text-base">
                      Nuestra oficina principal está ubicada en <br/><span className="font-black bg-black/5 px-1 rounded">Balta N° 635, Chiclayo.</span>
                    </p>
                    <p className="text-slate-900/90 text-sm font-semibold leading-relaxed max-w-md">
                      Acérquese a conocer nuestras instalaciones y descubra más sobre nosotros. ¡Será un gusto recibir su visita!
                    </p>
                  </div>
               </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* --- COLUMNA DERECHA: Animación Circular (Unified Style) --- */}
        <RevealOnScroll delay={300} className="relative min-h-[450px] w-full flex items-center justify-center order-1 lg:order-2">
           <div className="relative w-[320px] h-[320px] md:w-[480px] md:h-[480px] flex items-center justify-center">
              
              {/* Outer faint ring/glow matching screenshot */}
              <div className="absolute inset-0 rounded-full bg-brand-green/5 dark:bg-brand-green/5 blur-sm border border-brand-green/10"></div>
              <div className="absolute inset-[15%] rounded-full bg-brand-green/5 dark:bg-brand-green/5 blur-md"></div>

              {/* Orbit Path Ring - Visualizes the rotation path */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] h-[270px] md:w-[400px] md:h-[400px] rounded-full border border-brand-green/20 z-0"></div>

              {/* Central Hub */}
              <div className="absolute z-20 w-32 h-32 md:w-40 md:h-40 bg-[#d1fae5] dark:bg-[#064e3b] rounded-full flex items-center justify-center border-[5px] border-brand-green shadow-[0_0_50px_rgba(9,233,137,0.3)] transition-colors duration-500">
                   <Logo className="w-16 h-16 md:w-20 md:h-20 text-brand-green dark:text-[#34d399]" showText={false} />
              </div>

              {/* Rotating Container */}
              <div className="absolute inset-0" style={{ animation: 'spin 30s linear infinite' }}>
                  {orbitIcons.map((item, index) => (
                    <div 
                       key={index}
                       className="absolute top-1/2 left-1/2 w-0 h-0"
                       style={{ transform: `rotate(${index * 60}deg)` }}
                    >
                       {/* Radius arm - Positions the icon on the orbit ring */}
                       <div className="absolute -top-[135px] md:-top-[200px] left-1/2 -translate-x-1/2 w-16 h-16 md:w-24 md:h-24">
                          {/* Counter-rotation 1: Cancels the continuous orbit spin */}
                          <div className="w-full h-full flex items-center justify-center" style={{ animation: 'spin 30s linear infinite reverse' }}>
                              
                              {/* Counter-rotation 2: Cancels the static position rotation so icon is perfectly upright */}
                              <div style={{ transform: `rotate(-${index * 60}deg)` }}>
                                  {/* Icon Bubble */}
                                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#e2e2e2] to-[#c4c4c4] dark:from-[#334155] dark:to-[#0f172a] border-2 border-brand-green flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 group cursor-default">
                                      <div className="text-slate-700 dark:text-gray-200 group-hover:text-brand-green transition-colors">
                                          {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28, strokeWidth: 1.5 })}
                                      </div>
                                  </div>
                              </div>

                          </div>
                       </div>
                    </div>
                  ))}
              </div>
           </div>
        </RevealOnScroll>

      </div>
    </section>
  );
};
