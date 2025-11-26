import React, { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { RATES } from '../constants';
import { RevealOnScroll } from './RevealOnScroll';

export const Calculator: React.FC = () => {
  const [amount, setAmount] = useState<string>('1000');
  const [mode, setMode] = useState<'buy' | 'sell'>('buy');

  const calculatedValue = () => {
    const numAmount = parseFloat(amount);
    if (isNaN(numAmount)) return '0.00';

    if (mode === 'buy') {
      return (numAmount * RATES.buy).toFixed(2);
    } else {
      return (numAmount * RATES.sell).toFixed(2);
    }
  };

  const handleToggle = () => {
    setMode(prev => prev === 'buy' ? 'sell' : 'buy');
  };

  return (
    <div className="relative mt-8 mb-20 max-w-[420px] mx-auto z-10">
      {/* Background Glow - Large green blurred circle */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-brand-green/20 rounded-full blur-[100px] -z-20 pointer-events-none mix-blend-screen animate-pulse"></div>

      <RevealOnScroll delay={200}>
        <div className="relative group">
            {/* Animated Neon Border - Masked to only show on the 3px border area, leaving center transparent */}
             <div className="absolute -inset-[3px] rounded-[2.6rem] z-0 overflow-hidden"
                 style={{
                   maskImage: 'linear-gradient(white, white), linear-gradient(white, white)',
                   maskClip: 'content-box, border-box',
                   maskComposite: 'exclude',
                   WebkitMaskComposite: 'xor',
                   padding: '3px',
                 }}>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,transparent_200deg,#09e989_360deg)] animate-spin-slow opacity-100"></div>
            </div>

            {/* Card Container - Glassmorphism with increased transparency */}
            <div className="bg-[#252525]/60 backdrop-blur-md rounded-[2.5rem] px-6 pt-8 pb-12 shadow-2xl relative z-10 border border-white/10 mx-[1px] my-[1px]">
            
            {/* Tabs - White Pill Container */}
            <div className="flex justify-center mb-6">
                <div className="bg-white rounded-full p-1.5 flex shadow-lg w-full max-w-[340px] relative z-10">
                <button
                    onClick={() => setMode('buy')}
                    className={`flex-1 flex flex-col items-center py-2 rounded-full transition-all duration-300 group ${
                    mode === 'buy' ? 'bg-brand-green text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                    }`}
                >
                    <span className="text-[10px] font-bold uppercase tracking-wider group-hover:opacity-100 opacity-90 transition-opacity">Compramos:</span>
                    <span className="text-lg font-black leading-none mt-0.5">S/ {RATES.buy.toFixed(3)}</span>
                </button>
                <button
                    onClick={() => setMode('sell')}
                    className={`flex-1 flex flex-col items-center py-2 rounded-full transition-all duration-300 group ${
                    mode === 'sell' ? 'bg-brand-green text-slate-900 shadow-sm' : 'text-slate-400 hover:text-slate-600'
                    }`}
                >
                    <span className="text-[10px] font-bold uppercase tracking-wider group-hover:opacity-100 opacity-90 transition-opacity">Vendemos:</span>
                    <span className="text-lg font-black leading-none mt-0.5">S/ {RATES.sell.toFixed(3)}</span>
                </button>
                </div>
            </div>

            {/* Title */}
            <h3 className="text-center font-bold text-xl mb-6 text-white drop-shadow-sm">
                {mode === 'buy' ? '¿Cuántos USD quieres vender?' : '¿Cuántos Soles quieres cambiar?'}
            </h3>

            {/* Inputs Section */}
            <div className="space-y-3 relative">
                
                {/* Input 1 - White */}
                <div className="flex items-center bg-white rounded-2xl p-3 h-[76px] shadow-sm relative z-0 transition-transform hover:scale-[1.01]">
                <div className="bg-brand-green text-slate-900 font-extrabold px-3 py-1.5 rounded-lg text-[11px] uppercase tracking-wide absolute left-3 top-1/2 -translate-y-1/2 shadow-sm">
                    Tú Envías
                </div>
                
                <div className="flex-1 flex items-center justify-end h-full pl-[100px] pr-2">
                    <span className="text-slate-900 font-bold text-2xl mr-2 pb-1">
                    {mode === 'buy' ? '$' : 'S/'}
                    </span>
                    <input 
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full text-right font-black text-slate-900 text-3xl outline-none bg-transparent p-0 m-0 placeholder-slate-300"
                        placeholder="1000"
                    />
                </div>
                </div>

                {/* Swap Button - Centered */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                <button 
                    onClick={handleToggle}
                    className="w-12 h-12 bg-[#2d2d2d] rounded-full flex items-center justify-center border-[4px] border-[#252525] ring-2 ring-brand-green/20 shadow-lg hover:rotate-180 transition-transform duration-500 group"
                >
                    <RefreshCw className="text-brand-green w-6 h-6 font-bold group-hover:scale-110" strokeWidth={2.5} />
                </button>
                </div>

                {/* Input 2 - Light Grey */}
                <div className="flex items-center bg-[#F3F4F6] rounded-2xl p-3 h-[76px] shadow-inner relative z-0 transition-transform hover:scale-[1.01]">
                <div className="bg-brand-green text-slate-900 font-extrabold px-3 py-1.5 rounded-lg text-[11px] uppercase tracking-wide absolute left-3 top-1/2 -translate-y-1/2 shadow-sm">
                    Tú Recibes
                </div>
                
                <div className="flex-1 flex items-center justify-end h-full pl-[100px] pr-2">
                    <span className="text-slate-900 font-bold text-2xl mr-2 pb-1">
                    {mode === 'buy' ? 'S/' : '$'}
                    </span>
                    <input 
                        type="text"
                        readOnly
                        value={calculatedValue()}
                        className="w-full text-right font-black text-slate-900 text-3xl outline-none bg-transparent p-0 m-0"
                    />
                </div>
                </div>

            </div>

            {/* Disclaimer - Made subtle */}
            <div className="text-center mt-5 mb-2 opacity-60 hover:opacity-100 transition-opacity">
                <span className="text-white text-[10px] font-medium tracking-wide">
                Cotización valida por 5 minutos
                </span>
            </div>

            {/* Floating CTA Button - Overlapping Bottom */}
            <div className="absolute -bottom-7 left-0 right-0 flex justify-center z-30">
                <button className="bg-brand-green hover:bg-brand-green-hover text-slate-900 font-extrabold text-lg py-4 px-12 rounded-full shadow-[0_0_30px_rgba(9,233,137,0.4)] transition-all hover:scale-105 hover:shadow-[0_0_45px_rgba(9,233,137,0.6)] whitespace-nowrap">
                Cambia Ahora
                </button>
            </div>

            </div>
        </div>
      </RevealOnScroll>
    </div>
  );
};