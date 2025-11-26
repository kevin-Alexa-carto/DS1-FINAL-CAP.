import React, { useState } from 'react';
import { Plus, X, ChevronDown } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "¿Cómo sé que hice bien mi operación?",
      answer: "Una vez realizada la registrada la operación se te enviará un correo mostrando el registro y finalización de tu operación. En caso de no haber realizado algún paso correcto nos comunicaremos contigo mediante whatsapp."
    },
    {
      question: "¿En cuánto tiempo recibiré mi dinero?",
      answer: "Para operaciones inmediatas, el tiempo de procesamiento es de 5 a 15 minutos desde que verificamos tu transferencia. El dinero será depositado directamente en la cuenta bancaria que hayas registrado en nuestra plataforma, sin demoras ni complicaciones adicionales."
    },
    {
      question: "¿Con qué entidades bancarias trabajan?",
      answer: (
        <div className="space-y-2">
          <p>Trabajamos con los principales bancos del Perú para brindarte máxima flexibilidad:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Operaciones inmediatas:</strong> Banco de Crédito del Perú (BCP) - Tiempo de ejecución: 5 a 15 minutos</li>
            <li><strong>Operaciones interbancarias:</strong> BBVA e Interbank - Tiempo de procesamiento: de 3 a 24 horas hábiles, dependiendo de los tiempos interbancarios</li>
          </ul>
        </div>
      )
    },
    {
      question: "¿Qué tan seguro es cambiar dinero de forma online?",
      answer: (
        <div className="space-y-3">
          <p>Cambiar divisas en línea con Market Capital es completamente seguro por tres razones fundamentales:</p>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Comodidad sin riesgos:</strong> Realizas tus operaciones desde la seguridad de tu hogar, eliminando riesgos asociados al transporte de efectivo.</li>
            <li><strong>Regulación oficial:</strong> Todas nuestras operaciones están debidamente registradas y supervisadas por la Superintendencia de Banca, (SBS), garantizando total transparencia.</li>
            <li><strong>Respaldo legal:</strong> Contamos con autorización de la Municipalidad de Chiclayo y operamos bajo estricto cumplimiento normativo, brindándote respaldo institucional en cada transacción.</li>
          </ul>
        </div>
      )
    }
  ];

  return (
    <section className="w-full py-20 px-4 relative z-10 bg-[#F4F2EB] dark:bg-brand-dark-bg transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24 items-start">
        
        {/* Title Section */}
        <div className="lg:w-1/3 lg:sticky lg:top-32">
          <RevealOnScroll>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight transition-colors duration-500">
              Preguntas <br />
              <span className="text-brand-green">Frecuentes</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg font-medium leading-relaxed">
              Resolvemos tus dudas principales para que operes con total confianza.
            </p>
          </RevealOnScroll>
        </div>

        {/* Accordion Section */}
        <div className="lg:w-2/3 w-full space-y-4">
          {faqs.map((faq, index) => (
            <RevealOnScroll key={index} delay={index * 100} className="w-full">
              <div 
                className={`group rounded-[2rem] transition-all duration-500 border overflow-hidden
                  ${openIndex === index 
                    ? 'bg-[#0f172a] border-[#0f172a] shadow-xl scale-[1.02]' 
                    : 'bg-white dark:bg-white/5 border-transparent hover:border-slate-200 dark:hover:border-white/10 shadow-sm hover:shadow-md'
                  }
                `}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left focus:outline-none"
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {faq.question}
                  </span>
                  
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openIndex === index ? 'bg-brand-green rotate-45' : 'bg-brand-green/10 dark:bg-white/10 group-hover:bg-brand-green'}`}>
                    {openIndex === index ? (
                       <Plus className="text-slate-900 w-5 h-5 transition-transform duration-300 rotate-45" strokeWidth={2.5} />
                    ) : (
                       <Plus className="text-brand-green dark:text-white group-hover:text-slate-900 w-5 h-5 transition-colors duration-300" strokeWidth={2.5} />
                    )}
                  </div>
                </button>

                <div 
                  className={`grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.04,0.62,0.23,0.98)] ${openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <div className={`px-8 pb-8 pt-0 text-base leading-relaxed ${openIndex === index ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

      </div>
    </section>
  );
};
