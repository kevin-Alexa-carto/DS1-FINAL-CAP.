import React from 'react';
import { Smartphone, FileText, Landmark } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const HowItWorks: React.FC = () => {
  return (
    <section className="w-full px-4 py-16 md:py-24 max-w-7xl mx-auto relative">
      
      <div className="relative z-10">
        {/* Top Badge */}
        <RevealOnScroll className="mb-8" delay={0}>
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full border-[3px] border-brand-green bg-[#F4F2EB] dark:bg-slate-900 shadow-sm transition-colors duration-500 group hover:shadow-md cursor-default">
            <Landmark className="w-5 h-5 text-slate-700 dark:text-slate-300" strokeWidth={1.5} />
            <span className="text-slate-900 dark:text-white font-bold text-sm tracking-wide">
                Regulados por la SBS N° 00867-2025
            </span>
          </div>
        </RevealOnScroll>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <RevealOnScroll className="max-w-3xl" delay={100}>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] transition-colors duration-500 tracking-tight">
                    ¿Por qué elegir <span className="text-brand-green">Capital Market Green</span> como tu <span className="text-brand-green">casa de cambio digital?</span>
                </h2>
            </RevealOnScroll>
             
             {/* Description Text */}
            <RevealOnScroll className="max-w-md pb-2" delay={200}>
                <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl font-medium leading-relaxed transition-colors duration-500">
                Las mejores tasas de cambio del mercado con la seguridad y rapidez que necesitas para tus operaciones.
                </p>
            </RevealOnScroll>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1 */}
          <RevealOnScroll delay={300} className="h-full">
            <div className="group rounded-[2rem] p-8 flex flex-col h-full shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(9,233,137,0.4)] transition-all duration-500 hover:-translate-y-2 cursor-default relative overflow-hidden bg-gradient-to-br from-brand-green/5 via-transparent to-transparent hover:from-brand-green/20 hover:via-brand-green/5 border border-brand-green/10 hover:border-brand-green/30 dark:border-brand-green/5 dark:hover:border-brand-green/20">
              
              <div className="w-14 h-14 bg-black/5 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-black/5 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                <Smartphone className="text-slate-900 dark:text-white w-7 h-7" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-slate-900 dark:text-brand-green font-extrabold text-2xl mb-3 tracking-tight transition-colors duration-300">
                Seguridad Garantizada
              </h3>
              
              <p className="text-slate-800 dark:text-slate-200 font-medium text-lg leading-relaxed opacity-90">
                Todas las transacciones están protegidas, cumpliendo con las regulaciones de la SBS.
              </p>
            </div>
          </RevealOnScroll>

          {/* Card 2 */}
          <RevealOnScroll delay={400} className="h-full">
            <div className="group rounded-[2rem] p-8 flex flex-col h-full shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(9,233,137,0.4)] transition-all duration-500 hover:-translate-y-2 cursor-default relative overflow-hidden bg-gradient-to-br from-brand-green/5 via-transparent to-transparent hover:from-brand-green/20 hover:via-brand-green/5 border border-brand-green/10 hover:border-brand-green/30 dark:border-brand-green/5 dark:hover:border-brand-green/20">
              
              <div className="w-14 h-14 bg-black/5 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-black/5 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                <FileText className="text-slate-900 dark:text-white w-7 h-7" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-slate-900 dark:text-brand-green font-extrabold text-2xl mb-3 tracking-tight transition-colors duration-300">
                Rapidez
              </h3>
              
              <p className="text-slate-800 dark:text-slate-200 font-medium text-lg leading-relaxed opacity-90">
                La operación se procesa en minutos, enviando el dinero a tu cuenta de destino.
              </p>
            </div>
          </RevealOnScroll>

          {/* Card 3 */}
          <RevealOnScroll delay={500} className="h-full">
            <div className="group rounded-[2rem] p-8 flex flex-col h-full shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(9,233,137,0.4)] transition-all duration-500 hover:-translate-y-2 cursor-default relative overflow-hidden bg-gradient-to-br from-brand-green/5 via-transparent to-transparent hover:from-brand-green/20 hover:via-brand-green/5 border border-brand-green/10 hover:border-brand-green/30 dark:border-brand-green/5 dark:hover:border-brand-green/20">
              
              <div className="w-14 h-14 bg-black/5 dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 border border-black/5 dark:border-white/10 group-hover:scale-110 transition-transform duration-300">
                <Landmark className="text-slate-900 dark:text-white w-7 h-7" strokeWidth={1.5} />
              </div>
              
              <h3 className="text-slate-900 dark:text-brand-green font-extrabold text-2xl mb-3 tracking-tight transition-colors duration-300">
                Comodidad Total
              </h3>
              
              <p className="text-slate-800 dark:text-slate-200 font-medium text-lg leading-relaxed opacity-90">
                Tasas de cambio competitivas con la seguridad y rapidez que necesitas para tus operaciones.
              </p>
            </div>
          </RevealOnScroll>

        </div>
      </div>
    </section>
  );
};