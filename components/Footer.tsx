import React from 'react';
import { Phone, Mail, MapPin, Facebook, Youtube, Instagram } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-16 pb-8 px-4 font-sans relative z-20 overflow-hidden transition-colors duration-500 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
      {/* Decorative top border gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green/50 to-transparent opacity-50"></div>

      <div className="max-w-7xl mx-auto">
        <RevealOnScroll>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Column 1: Brand & Description (Span 4) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Logo */}
              <div className="mb-6">
                 <Logo className="w-10 h-10 text-brand-green" textClassName="text-slate-900 dark:text-white" />
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-sm font-medium transition-colors duration-500">
                Las mejores tasas de cambio del mercado con la seguridad y rapidez que necesitas para tus operaciones.
              </p>
            </div>

            {/* Column 2: Links (Span 2) */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-500 mb-4">Empresa</h3>
              <ul className="space-y-3">
                {['Preguntas Frecuentes', 'Términos y condiciones', 'Política de privacidad', 'Libro de reclamaciones'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-slate-600 dark:text-slate-400 text-sm hover:text-brand-green transition-colors duration-300 block w-fit font-medium">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Schedule (Span 2) */}
            <div className="lg:col-span-2 space-y-6">
               <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-500 mb-4">Horarios</h3>
               <div className="space-y-1 text-slate-600 dark:text-slate-400 text-sm font-medium transition-colors duration-500">
                  <p>Lun-Vie: 9 am - 6 pm |</p>
                  <p>Sáb: 9 am - 1 pm</p>
               </div>
            </div>

            {/* Column 4: Contact & Socials (Span 3) */}
            <div className="lg:col-span-3 space-y-6">
               <h3 className="text-lg font-bold text-slate-900 dark:text-white transition-colors duration-500 mb-4">Empresa</h3> 
               
               <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm group font-medium transition-colors duration-500">
                     <Phone className="w-4 h-4 text-brand-green mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                     <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">+51 945694219</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm group font-medium transition-colors duration-500">
                     <Mail className="w-4 h-4 text-brand-green mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                     <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer break-all">capital.market.green@gmail.com</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-600 dark:text-slate-400 text-sm group font-medium transition-colors duration-500">
                     <MapPin className="w-4 h-4 text-brand-green mt-0.5 shrink-0 group-hover:scale-110 transition-transform" />
                     <span className="hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer">
                        Av. José Balta 635<br/>Chiclayo - Perú
                     </span>
                  </li>
               </ul>

               <div className="pt-2">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-500">Síguenos:</h4>
                  <div className="flex gap-3">
                     {[
                       { Icon: Facebook, href: '#' },
                       { Icon: Youtube, href: '#' },
                       { Icon: Instagram, href: '#' }
                     ].map(({ Icon, href }, idx) => (
                       <a 
                         key={idx} 
                         href={href} 
                         className="w-8 h-8 rounded-full bg-brand-green flex items-center justify-center hover:bg-slate-900 dark:hover:bg-white transition-colors duration-300 group shadow-sm"
                       >
                         <Icon size={16} className="text-slate-900 group-hover:text-brand-green dark:group-hover:text-slate-900 transition-colors" strokeWidth={2.5} />
                       </a>
                     ))}
                  </div>
               </div>
            </div>

          </div>
        </RevealOnScroll>

        {/* Copyright Bar */}
        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 dark:text-slate-500 transition-colors duration-500">
           <p>&copy; {new Date().getFullYear()} Capital Market Green. Todos los derechos reservados.</p>
           <div className="flex gap-6">
              <a href="#" className="hover:text-brand-green transition-colors">Privacidad</a>
              <a href="#" className="hover:text-brand-green transition-colors">Términos</a>
           </div>
        </div>
      </div>
    </footer>
  );
};