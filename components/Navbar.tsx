import React, { useState, useEffect } from 'react';
import { Menu, Moon, Sun, X, ArrowRight, User } from 'lucide-react';
import { LINKS } from '../constants';
import { Logo } from './Logo';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme, onNavigate, currentPage }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleMobileNavigate = (href: string) => {
    onNavigate(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full py-6 px-4 md:px-12 flex items-center justify-between max-w-7xl mx-auto relative z-50">
        {/* Logo Area */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNavigate('home')}>
           <Logo className="w-9 h-9 text-brand-green" textClassName="text-slate-900 dark:text-white" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {LINKS.map((link) => (
            <button 
              key={link.label} 
              onClick={() => onNavigate(link.href)}
              className={`font-medium text-lg transition-colors relative group ${
                  currentPage === link.href 
                  ? 'text-brand-green font-bold' 
                  : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
              }`}
            >
              {link.label}
              {currentPage === link.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-brand-green rounded-full"></span>
              )}
            </button>
          ))}
        </div>

        {/* CTA Button and Theme Toggle */}
        <div className="flex items-center gap-4">
          
          {/* Theme Toggle Button */}
          <button 
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center border-2 border-brand-green rounded-md hover:bg-brand-green/10 transition-colors group z-50 relative"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
               <Sun size={20} className="text-white group-hover:text-brand-green transition-colors" />
            ) : (
               <Moon size={20} className="text-slate-900 group-hover:text-brand-green transition-colors" />
            )}
          </button>

          <button 
            onClick={() => onNavigate('auth')}
            className="bg-brand-green hover:bg-brand-green-hover text-slate-900 font-bold py-2.5 px-8 rounded-full transition-colors shadow-sm hidden sm:block"
          >
            Registrarse
          </button>
          
          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden text-slate-800 dark:text-white transition-colors p-1"
            aria-label="Open Menu"
          >
            <Menu size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[60] md:hidden transition-all duration-300 ${isMobileMenuOpen ? 'visible' : 'invisible delay-300'}`}>
        
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Drawer */}
        <div className={`absolute top-0 right-0 h-full w-[90%] max-w-[400px] bg-[#F4F2EB] dark:bg-[#0f172a] shadow-2xl transform transition-transform duration-300 ease-out flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          
          {/* Drawer Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-white/10">
             <Logo className="w-8 h-8 text-brand-green" textClassName="text-slate-900 dark:text-white" />
             <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-slate-200 dark:bg-white/10 rounded-full hover:bg-brand-green hover:text-slate-900 dark:text-white transition-colors"
             >
                <X size={24} />
             </button>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
             <div className="flex flex-col gap-2">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Menú</span>
                <button 
                  onClick={() => handleMobileNavigate('home')}
                  className={`text-left text-2xl font-bold py-2 ${currentPage === 'home' ? 'text-brand-green' : 'text-slate-900 dark:text-white'}`}
                >
                  Inicio
                </button>
                {LINKS.map((link) => (
                  <button 
                    key={link.label} 
                    onClick={() => handleMobileNavigate(link.href)}
                    className={`text-left text-2xl font-bold py-2 transition-colors ${
                        currentPage === link.href 
                        ? 'text-brand-green' 
                        : 'text-slate-900 dark:text-white'
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
             </div>
          </div>

          {/* Promo Card (Bottom) */}
          <div className="p-4">
             <div className="bg-[#0f172a] rounded-[2rem] p-6 relative overflow-hidden shadow-xl">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#10b981] rounded-full blur-[40px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute -left-10 bottom-0 w-24 h-24 bg-brand-green rounded-full blur-[30px] opacity-10"></div>
                
                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                   <div className="mb-4">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">Otras páginas</span>
                      <Logo className="w-6 h-6 text-brand-green" textClassName="text-white" />
                   </div>

                   <h3 className="text-2xl font-black text-white leading-tight mb-3">
                      Únete a la nueva era del <span className="text-brand-green">cambio digital</span>
                   </h3>

                   <p className="text-slate-400 text-xs font-medium leading-relaxed mb-6">
                      Regístrate en minutos y accede a las mejores tasas de cambio del mercado con total seguridad.
                   </p>

                   {/* Action Buttons */}
                   <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm">
                      <button 
                         onClick={() => handleMobileNavigate('auth')}
                         className="w-full py-3 px-4 flex items-center justify-between text-white border-b border-white/10 hover:bg-white/5 transition-colors group"
                      >
                         <span className="text-xs font-bold uppercase tracking-wide">¿Ya tienes una cuenta?</span>
                         <ArrowRight size={16} className="text-brand-green group-hover:translate-x-1 transition-transform" />
                      </button>
                      
                      <button 
                         onClick={() => handleMobileNavigate('auth')}
                         className="w-full py-4 px-4 bg-brand-green hover:bg-brand-green-hover text-slate-900 font-extrabold text-sm uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                      >
                         <User size={16} strokeWidth={2.5} />
                         Crear Cuenta
                      </button>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </>
  );
};