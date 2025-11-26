import React from 'react';
import { Calculator } from './Calculator';
import { RevealOnScroll } from './RevealOnScroll';
import { Typewriter } from './Typewriter';

export const Hero: React.FC = () => {
  return (
    <section className="w-full px-4 pt-8 pb-20 md:pt-12">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Headline */}
        <RevealOnScroll delay={0}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6 transition-colors duration-500">
            <span className="text-brand-green">Cambio desde la</span> seguridad de <br className="hidden md:block" />
            tu casa <span className="text-brand-green">y de forma</span>{' '}
            <Typewriter 
              words={['segura', 'rápida', 'confiable', 'eficaz']} 
              className=""
            />
          </h1>
        </RevealOnScroll>

        {/* Subheadline */}
        <RevealOnScroll delay={150}>
          <p className="text-slate-600 dark:text-slate-300 text-lg md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-500">
            Las mejores tasas de cambio del mercado con la seguridad 
            y rapidez que necesitas para tus operaciones.
          </p>
        </RevealOnScroll>

        {/* Calculator Component */}
        <Calculator />

      </div>
    </section>
  );
};