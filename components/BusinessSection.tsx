
import React, { useState } from 'react';
import { DollarSign, ShieldCheck, UserCheck, TrendingDown, MessageCircle, Zap, ArrowRight, Building2, Landmark, TrendingUp, PenLine, MessageSquare } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { Logo } from './Logo';

export const BusinessSection: React.FC = () => {
  // State for the calculator demo in the new section
  const [calcMode, setCalcMode] = useState<'buy' | 'sell'>('sell');
  const [calcAmount, setCalcAmount] = useState('1000');
  const exchangeRate = { buy: 3.365, sell: 3.378 };

  const calculateExchange = () => {
    const val = parseFloat(calcAmount) || 0;
    if (calcMode === 'sell') {
      return (val * exchangeRate.sell).toFixed(2);
    } else {
      return (val * exchangeRate.buy).toFixed(2);
    }
  };

  const benefits = [
    {
      icon: <DollarSign size={28} />,
      title: "Mejor precio por cambio",
      desc: "Accede a tasas preferenciales exclusivas para volúmenes corporativos."
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "No llevas efectivo a la calle",
      desc: "Elimina el riesgo de robos y asaltos. Operaciones 100% digitales y seguras."
    },
    {
      icon: <UserCheck size={28} />,
      title: "Atención personalizada",
      desc: "Un asesor especializado te acompañará en cada paso de tus operaciones."
    },
    {
      icon: <TrendingDown size={28} />,
      title: "Mayores descuentos",
      desc: "Mejora tu rentabilidad con precios especiales por cantidad y frecuencia."
    },
    {
      icon: <MessageCircle size={28} />,
      title: "Comunicación constante",
      desc: "Soporte activo y notificaciones en tiempo real sobre el estado de tu cambio."
    },
    {
      icon: <Zap size={28} />,
      title: "Velocidad en transacciones",
      desc: "Tus fondos disponibles en la cuenta de destino en minutos (bancos integrados)."
    }
  ];

  return (
    <div className="w-full pt-8 pb-24 overflow-hidden bg-brand-cream dark:bg-brand-dark-bg transition-colors duration-500">
      
      {/* --- HERO / INTRO SECTION --- */}
      <section className="max-w-[1400px] mx-auto px-4 mb-32 relative">
        <RevealOnScroll>
          <div className="relative mt-8 flex flex-col lg:block items-center">
            
            {/* 1. THE "DARK SPACE" - PROFESSIONAL IMAGE */}
            <div className="w-full lg:w-[92%] h-[500px] lg:h-[600px] rounded-[2.5rem] lg:rounded-[3.5rem] overflow-hidden relative shadow-2xl group mx-auto transition-transform hover:scale-[1.005] duration-700">
              {/* Image Source */}
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
                alt="Corporate Architecture" 
                className="w-full h-full object-cover transform transition-transform duration-[3s] group-hover:scale-105"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 via-transparent to-transparent"></div>
              
              {/* Content inside the dark area */}
              <div className="absolute top-8 left-8 lg:top-12 lg:left-12 hidden md:block z-10">
                 <div className="flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg hover:bg-white/20 transition-colors cursor-default">
                    <Building2 className="text-brand-green w-5 h-5" />
                    <span className="text-white text-xs font-bold tracking-widest uppercase">Soluciones Corporativas</span>
                 </div>
              </div>
            </div>

            {/* 2. THE FLOATING GREEN CARD */}
            <div className="absolute top-[5%] lg:top-[12%] right-0 lg:right-[4%] w-[90%] md:w-[480px] lg:w-[540px] bg-brand-green rounded-[2.5rem] p-8 md:p-14 shadow-[0_30px_60px_-15px_rgba(9,233,137,0.5)] transform transition-transform hover:-translate-y-2 duration-500 z-20 mx-auto left-0 lg:left-auto flex flex-col justify-center">
              <div className="flex flex-col h-full justify-between relative">
                 {/* Decorative background icon */}
                 <div className="absolute -top-10 -right-10 opacity-[0.08] pointer-events-none">
                     <Building2 size={240} className="text-black" />
                 </div>

                <div>
                  <div className="flex items-center gap-3 mb-8 opacity-90">
                    <div className="w-10 h-10 bg-slate-900/10 rounded-xl flex items-center justify-center backdrop-blur-sm border border-slate-900/5">
                         <Logo className="w-6 h-6 text-slate-900" showText={false} />
                    </div>
                    <span className="font-extrabold text-slate-900 text-xs tracking-widest uppercase bg-slate-900/5 px-3 py-1.5 rounded-full">Capital Market Green</span>
                  </div>
                  
                  <h1 className="text-3xl md:text-4xl lg:text-[3.25rem] font-black text-slate-900 leading-[1.05] mb-10 tracking-tight">
                    Accede al mejor tipo de cambio para tu empresa
                  </h1>
                </div>

                <button className="group flex items-center justify-between w-full sm:w-fit gap-8 px-8 py-5 bg-slate-900 text-white rounded-2xl font-bold transition-all hover:bg-slate-800 hover:shadow-2xl mt-2 relative overflow-hidden">
                  <span className="relative z-10 text-lg">Contactar Asesor</span>
                  <ArrowRight size={24} className="relative z-10 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* 3. THE GREY/WHITE CARD BELOW */}
            <div className="absolute -bottom-[20%] lg:bottom-[8%] left-4 lg:left-[4%] w-[90%] md:w-[420px] bg-[#F4F2EB] dark:bg-[#1e293b] rounded-[2rem] p-8 md:p-10 shadow-deep border border-white/50 dark:border-white/10 z-30 hidden md:block hover:scale-[1.02] transition-transform duration-500">
               <div className="absolute top-0 right-0 p-8 opacity-[0.07]">
                   <ShieldCheck size={90} className="text-slate-900 dark:text-white" />
               </div>
               <p className="text-slate-700 dark:text-slate-300 text-lg md:text-xl font-medium leading-relaxed relative z-10">
                 Deja de usar efectivo en casas de cambio y exponerte al peligro. 
               </p>
               <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700/50">
                    <span className="text-slate-900 dark:text-white font-bold text-lg leading-tight block">
                        Mejora tu experiencia de cambio a través de nuestra empresa.
                    </span>
               </div>
            </div>
            
            {/* Mobile Text Card */}
            <div className="md:hidden relative mt-6 bg-white dark:bg-[#1e293b] rounded-[2rem] p-8 shadow-xl mx-4 border border-slate-100 dark:border-slate-800">
               <p className="text-slate-700 dark:text-slate-300 font-medium leading-relaxed text-lg mb-4">
                 Deja de usar efectivo en casas de cambio y exponerte al peligro. 
               </p>
               <span className="text-slate-900 dark:text-white font-bold text-lg block">
                    Mejora tu experiencia de cambio a través de nuestra empresa.
               </span>
            </div>

          </div>
        </RevealOnScroll>
      </section>

      {/* --- BENEFITS SECTION --- */}
      <section className="max-w-7xl mx-auto px-4 mt-20 md:mt-0 mb-32">
        <div className="bg-white dark:bg-white/5 rounded-[3rem] p-8 md:p-16 relative overflow-hidden border border-slate-100 dark:border-white/5 shadow-sm transition-colors duration-500">
            
            {/* Decorative BG */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <RevealOnScroll>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
                        Beneficios para cambio de <span className="text-brand-green">Empresas</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 text-lg">
                        Potencia tu negocio con una gestión de divisas eficiente, segura y diseñada a tu medida.
                    </p>
                </div>
            </RevealOnScroll>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((item, idx) => (
                    <RevealOnScroll key={idx} delay={idx * 100} className="h-full">
                        <div className="h-full bg-slate-50 dark:bg-slate-900/50 p-8 rounded-[2rem] hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 hover:shadow-lg border border-transparent hover:border-brand-green/20 group">
                            <div className="w-14 h-14 bg-brand-green rounded-full flex items-center justify-center mb-6 text-slate-900 group-hover:scale-110 transition-transform duration-300 shadow-[0_4px_20px_rgba(9,233,137,0.3)]">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-green transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed font-medium text-sm">
                                {item.desc}
                            </p>
                        </div>
                    </RevealOnScroll>
                ))}
            </div>
            
            <div className="mt-12 text-center">
                 <button className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold py-4 px-10 rounded-full shadow-lg hover:scale-105 transition-transform">
                    Registrar mi Empresa
                 </button>
            </div>
        </div>
      </section>

      {/* --- PHONE APP SECTION --- */}
      <section className="w-full relative overflow-visible pb-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center">
           
           <RevealOnScroll>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mb-16 text-center tracking-tight leading-tight uppercase">
                    Cambia desde la <span className="text-brand-green">Seguridad</span> de <br className="hidden md:block" />
                    tu oficina
                </h2>
           </RevealOnScroll>

           <RevealOnScroll delay={200}>
                {/* Phone Mockup Container */}
                <div className="relative isolate">
                    {/* Background Radial Glow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-brand-green/20 via-brand-green/5 to-transparent rounded-full blur-[80px] pointer-events-none -z-10 animate-pulse"></div>
                    
                    {/* --- FLOATING CARD LEFT (Trust) --- */}
                    <div className="hidden md:flex absolute top-[20%] right-[90%] lg:right-[100%] z-20 w-64 bg-brand-green/20 backdrop-blur-md border border-brand-green/30 p-5 rounded-3xl animate-float shadow-2xl flex-col items-center text-center">
                        <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center mb-3 shadow-lg -mt-10 border-4 border-[#F4F2EB] dark:border-brand-dark-bg">
                            <Landmark size={24} className="text-slate-900" />
                        </div>
                        <h4 className="font-black text-slate-900 dark:text-white text-sm uppercase leading-tight mb-1">
                            Respaldo Total
                        </h4>
                        <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300 leading-tight">
                            Regulado por la SBS con la Resolución N° 00867-2025
                        </p>
                    </div>

                    {/* --- FLOATING CARD RIGHT (Rates) --- */}
                    <div className="hidden md:flex absolute top-[50%] left-[90%] lg:left-[100%] z-20 w-64 bg-brand-green/20 backdrop-blur-md border border-brand-green/30 p-5 rounded-3xl animate-float shadow-2xl flex-col items-center text-center" style={{ animationDelay: '1.5s' }}>
                        <div className="w-12 h-12 bg-brand-green rounded-xl flex items-center justify-center mb-3 shadow-lg -mt-10 border-4 border-[#F4F2EB] dark:border-brand-dark-bg">
                            <TrendingUp size={24} className="text-slate-900" />
                        </div>
                        <h4 className="font-black text-slate-900 dark:text-white text-sm uppercase leading-tight mb-1">
                            Rentabilidad Máxima
                        </h4>
                        <p className="text-[10px] font-bold text-slate-700 dark:text-slate-300 leading-tight">
                            Mejores tasas de cambio preferenciales para empresas
                        </p>
                    </div>

                    {/* The Phone Device */}
                    <div className="relative z-10 bg-gray-900 border-[6px] border-gray-800 rounded-[2.5rem] w-[300px] h-[600px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col ring-1 ring-gray-700 transform hover:scale-[1.02] transition-transform duration-500">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-b-xl z-30 pointer-events-none"></div>
                        
                        {/* Screen: Calculator Step 2 Replica */}
                        <div className="bg-[#F4F2EB] dark:bg-slate-900 h-full w-full flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
                            
                            {/* Status Bar Fake */}
                            <div className="absolute top-2 right-4 text-[10px] font-bold text-slate-400 z-20">9:41</div>

                            {/* Calculator Card */}
                            <div className="bg-[#F4F2EB] dark:bg-slate-800 rounded-[2rem] p-5 w-full shadow-lg border border-slate-200 dark:border-slate-700 relative z-10 mt-6">
                                
                                {/* Header Tabs */}
                                <div className="flex rounded-full bg-gray-300 dark:bg-gray-700 p-0.5 mb-6 relative overflow-hidden">
                                    <button 
                                    onClick={() => setCalcMode('buy')}
                                    className={`flex-1 text-center py-2 rounded-full text-[10px] font-bold uppercase transition-all z-10 ${calcMode === 'buy' ? 'bg-brand-green text-slate-900 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}
                                    >
                                    <div className="leading-tight">Compramos:</div>
                                    <div className="text-xs">S/ {exchangeRate.buy}</div>
                                    </button>
                                    <button 
                                    onClick={() => setCalcMode('sell')}
                                    className={`flex-1 text-center py-2 rounded-full text-[10px] font-bold uppercase transition-all z-10 ${calcMode === 'sell' ? 'bg-brand-green text-slate-900 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}
                                    >
                                    <div className="leading-tight">Vendemos:</div>
                                    <div className="text-xs">S/ {exchangeRate.sell}</div>
                                    </button>
                                </div>

                                <h3 className="text-center font-bold text-slate-900 dark:text-white text-base mb-5">
                                    ¿Cuántos USD quieres comprar?
                                </h3>

                                {/* Inputs Section */}
                                <div className="space-y-4 relative mb-6">
                                    
                                    {/* Input 1 (Recibes) */}
                                    <div className="bg-gray-200 dark:bg-slate-700 rounded-2xl flex items-center p-1 relative transition-transform hover:scale-[1.02] duration-300">
                                        <div className="w-[85px] pl-3 py-3">
                                            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 block leading-tight">Tú Recibes</span>
                                        </div>
                                        <div className="flex-1 flex items-center justify-end pr-3">
                                            <span className="font-bold text-lg text-slate-900 dark:text-white mr-2">$</span>
                                            <input 
                                            type="text" 
                                            value={calcAmount}
                                            onChange={(e) => setCalcAmount(e.target.value)}
                                            className="w-16 bg-transparent text-right font-bold text-lg text-slate-900 dark:text-white outline-none"
                                            />
                                            <span className="ml-2 text-xl">🇺🇸</span>
                                        </div>
                                    </div>

                                    {/* Input 2 (Envias) */}
                                    <div className="bg-gray-200 dark:bg-slate-700 rounded-2xl flex items-center p-1 transition-transform hover:scale-[1.02] duration-300">
                                        <div className="w-[85px] pl-3 py-3">
                                            <span className="text-[11px] font-bold text-slate-600 dark:text-slate-300 block leading-tight">Tú Envías</span>
                                        </div>
                                        <div className="flex-1 flex items-center justify-end pr-3">
                                            <span className="font-bold text-lg text-slate-900 dark:text-white mr-2">S/</span>
                                            <div className="text-right font-bold text-lg text-slate-900 dark:text-white">
                                            {calculateExchange()}
                                            </div>
                                            <span className="ml-2 text-xl">🇵🇪</span>
                                        </div>
                                    </div>

                                </div>
                                
                                <div className="text-center mb-4">
                                    <span className="text-[9px] text-slate-500 font-medium">Cotización valida por 5 minutos</span>
                                </div>

                                {/* Coupon Section */}
                                <div className="mb-6">
                                    <h4 className="text-[11px] font-extrabold text-slate-900 dark:text-white mb-2">Mejor Precio</h4>
                                    <div className="flex">
                                        <input 
                                        type="text" 
                                        placeholder="Ingresa tu cupón" 
                                        className="flex-1 bg-white dark:bg-slate-600 rounded-l-lg px-3 py-2 text-xs outline-none border border-r-0 border-gray-200 dark:border-slate-500 placeholder:text-slate-400"
                                        />
                                        <button className="bg-[#0f172a] hover:bg-slate-800 text-white text-[10px] font-bold px-4 rounded-r-lg transition-colors">
                                        Aplicar
                                        </button>
                                    </div>
                                </div>

                                {/* Main Button */}
                                <button 
                                    className="w-full bg-[#09e989] hover:bg-[#07cf7b] text-slate-900 font-extrabold text-sm py-3.5 rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Iniciar Operación
                                </button>
                                
                                {/* Floating Edit Pill (Simulated UI) */}
                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#1e293b] text-white py-2 px-3 rounded-full shadow-2xl flex items-center gap-2 border border-slate-700 z-20 hover:scale-105 transition-transform cursor-pointer">
                                    <button className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                                        <MessageSquare size={16} className="text-brand-green" />
                                    </button>
                                    <div className="w-[1px] h-4 bg-white/20"></div>
                                    <button className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                                        <PenLine size={16} className="text-white" />
                                    </button>
                                </div>

                            </div>
                        </div>

                        {/* Home Indicator */}
                        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-30 pointer-events-none"></div>
                    </div>
                </div>
           </RevealOnScroll>
        </div>
      </section>

    </div>
  );
};
