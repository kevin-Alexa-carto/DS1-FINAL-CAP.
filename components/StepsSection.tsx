import React, { useState } from 'react';
import { FileText, Headphones, User, Plus, Check, RefreshCw, ChevronDown, ChevronUp, Copy, ArrowLeft, Wifi, Signal, MapPin } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

export const StepsSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);
  // Sub-state for Step 1: 'profile' (New Form) or 'accounts' (Existing List)
  const [step1View, setStep1View] = useState<'profile' | 'accounts'>('profile');
  
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [expandedAccount, setExpandedAccount] = useState<number | null>(0);
  const [operationCode, setOperationCode] = useState('');
  
  // Calculator State for Step 2
  const [calcMode, setCalcMode] = useState<'buy' | 'sell'>('sell');
  const [calcAmount, setCalcAmount] = useState('100');
  const exchangeRate = { buy: 3.365, sell: 3.378 };

  const handleCopy = (text: string, fieldId: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldId);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const calculateExchange = () => {
    const val = parseFloat(calcAmount) || 0;
    if (calcMode === 'sell') {
      // User sells USD, receives Soles
      return (val * exchangeRate.sell).toFixed(2);
    } else {
      // User buys USD, sends Soles
      return (val * exchangeRate.buy).toFixed(2); // Simplified logic for demo
    }
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
    // If going back to step 1, reset to profile view for a fresh experience
    if (step === 1) {
        setStep1View('profile');
    }
  };

  const renderPhoneContent = () => {
    // ------------------------------------------------
    // STEP 4: SUCCESS VIEW
    // ------------------------------------------------
    if (activeStep === 4) {
      return (
        <div key="step4" className="bg-[#F4F2EB] dark:bg-slate-900 h-full w-full flex flex-col pt-12 relative overflow-hidden font-sans animate-scale-in">
           <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20 text-center">
              <div className="w-24 h-24 bg-brand-green rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_rgba(9,233,137,0.6)] animate-float">
                <Check className="text-slate-900 w-12 h-12 stroke-[4]" />
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">¡Envío Exitoso!</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-8 leading-relaxed">
                Tu transferencia ha sido verificada y los fondos han sido enviados.
              </p>

              <div className="w-full bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg mb-8">
                 <div className="flex justify-between items-center mb-4 border-b border-gray-100 dark:border-gray-700 pb-4">
                    <span className="text-xs font-bold text-slate-500 uppercase">Enviaste</span>
                    <span className="font-bold text-slate-900 dark:text-white">$ {calcAmount}.00</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-slate-500 uppercase">Recibiste</span>
                    <span className="font-bold text-brand-green text-xl">S/ {calculateExchange()}</span>
                 </div>
              </div>

              <button 
                onClick={() => handleStepChange(1)}
                className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold rounded-xl hover:scale-[1.02] transition-transform"
              >
                Volver al inicio
              </button>
           </div>
        </div>
      );
    }

    // ------------------------------------------------
    // STEP 3: TRANSFER & VERIFY VIEW (Green Overlay)
    // ------------------------------------------------
    if (activeStep === 3) {
      return (
        <div key="step3" className="bg-[#F4F2EB] dark:bg-slate-900 h-full w-full flex flex-col pt-10 relative overflow-hidden font-sans animate-fade-in">
           {/* Header */}
           <div className="px-6 mb-2 flex items-center gap-2 pt-2">
             <button onClick={() => setActiveStep(2)} className="p-1 -ml-2 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
                <ArrowLeft size={20} className="text-slate-900 dark:text-white" />
             </button>
             <h3 className="font-bold text-lg text-slate-900 dark:text-white">Transfiere</h3>
           </div>

           {/* Content */}
           <div className="flex-1 px-4 pb-24 overflow-y-auto no-scrollbar">
              <div className="bg-[#09e989] rounded-[1.8rem] p-5 shadow-[0_10px_30px_-5px_rgba(9,233,137,0.4)] relative flex flex-col gap-5 min-h-[460px]">
                 
                 {/* Rates Pill */}
                 <div className="bg-[#cdfae8] rounded-full p-2.5 px-5 flex items-center justify-between shadow-sm">
                    <div className="text-center">
                        <div className="text-[9px] font-bold text-slate-600 uppercase tracking-wider mb-0.5">Envías</div>
                        <div className="font-black text-slate-900 text-sm">$ {calcAmount}</div>
                    </div>
                    <div className="bg-[#09e989] p-1.5 rounded-full ring-2 ring-[#cdfae8] shadow-sm">
                        <RefreshCw size={14} className="text-slate-900 stroke-[3]" />
                    </div>
                    <div className="text-center">
                        <div className="text-[9px] font-bold text-slate-600 uppercase tracking-wider mb-0.5">Recibes</div>
                        <div className="font-black text-slate-900 text-sm">S/ {calculateExchange()}</div>
                    </div>
                 </div>

                 {/* Account Name */}
                 <div className="text-center -mt-1">
                    <h4 className="font-bold text-slate-900 text-[11px] mb-0.5 opacity-80">Nombre de la cuenta</h4>
                    <div className="font-black text-slate-900 text-sm tracking-tight mb-1">CAPITAL MARKET GREEN EIRL</div>
                    <div className="text-[9px] font-bold text-slate-800/80 bg-black/5 inline-block px-2 py-0.5 rounded border border-black/5">RUC: 20612844853</div>
                 </div>

                 {/* Bank Details Box */}
                 <div className="bg-[#bbf7d0] rounded-[1.2rem] p-4 shadow-inner border border-black/5">
                    <div className="text-center mb-4">
                        <h5 className="font-extrabold text-slate-900 text-[11px] uppercase tracking-wide mb-0.5">BANCO DE CREDITO DEL PERU</h5>
                        <div className="text-[9px] font-bold text-slate-700">Tipo de cuenta: Cuenta Corriente Dólares</div>
                    </div>
                    
                    <div className="space-y-3">
                         {/* Account Number */}
                         <div className="flex items-center justify-between bg-white/50 p-2.5 rounded-xl border border-white/30 shadow-sm">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Número de la cuenta</span>
                                <span className="text-[11px] font-bold text-slate-900 font-mono tracking-tight">3056825354186</span>
                            </div>
                            <button onClick={() => handleCopy('3056825354186', 'acc')} className="p-2 bg-white hover:bg-slate-50 rounded-lg transition-all shadow-sm active:scale-95 group border border-slate-100">
                                {copiedField === 'acc' ? <Check size={14} className="text-green-600 stroke-[3]" /> : <Copy size={14} className="text-slate-700 group-hover:text-black" />}
                            </button>
                         </div>
                         
                         {/* CCI */}
                         <div className="flex items-center justify-between bg-white/50 p-2.5 rounded-xl border border-white/30 shadow-sm">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">CCI</span>
                                <span className="text-[11px] font-bold text-slate-900 font-mono tracking-tight text-ellipsis overflow-hidden w-[140px] whitespace-nowrap">00230500682535418613</span>
                            </div>
                            <button onClick={() => handleCopy('00230500682535418613', 'cci')} className="p-2 bg-white hover:bg-slate-50 rounded-lg transition-all shadow-sm active:scale-95 group border border-slate-100">
                                {copiedField === 'cci' ? <Check size={14} className="text-green-600 stroke-[3]" /> : <Copy size={14} className="text-slate-700 group-hover:text-black" />}
                            </button>
                         </div>
                    </div>
                 </div>

                 {/* Operation Input */}
                 <div className="space-y-2 mt-auto">
                     <p className="text-center text-[9px] font-bold text-slate-800 leading-tight px-2 opacity-80">
                         Ingresa el número de operación de tu transferencia
                     </p>
                     <input 
                       type="text" 
                       value={operationCode}
                       onChange={(e) => setOperationCode(e.target.value)}
                       placeholder="NUMERO DE OPERACION" 
                       className="w-full bg-[#cdfae8] ring-2 ring-white/30 rounded-xl py-3.5 px-4 text-[10px] font-bold text-center placeholder-slate-500/50 focus:outline-none transition-all shadow-xl text-slate-900"
                     />
                 </div>

              </div>
           </div>

           {/* Bottom Buttons */}
           <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-[#F4F2EB] via-[#F4F2EB] to-transparent dark:from-slate-900 dark:via-slate-900 z-10 flex gap-3 pt-8">
               <button onClick={() => setActiveStep(2)} className="px-4 py-3 bg-[#1e293b] text-white rounded-xl font-bold text-xs flex items-center gap-1 shadow-lg hover:bg-[#0f172a] transition-colors">
                  <ArrowLeft size={14} />
                  Atrás
               </button>
               <button 
                  onClick={() => setActiveStep(4)}
                  className="flex-1 bg-[#09e989] hover:bg-[#07cf7b] text-slate-900 py-3 rounded-xl font-extrabold text-xs shadow-[0_4px_14px_0_rgba(9,233,137,0.5)] transition-all transform active:scale-[0.98] uppercase tracking-wide flex items-center justify-center gap-2"
               >
                  Confirmar
               </button>
           </div>
        </div>
      );
    }

    // ------------------------------------------------
    // STEP 2: CALCULATOR VIEW
    // ------------------------------------------------
    if (activeStep === 2) {
      return (
        <div key="step2" className="bg-[#F4F2EB] dark:bg-slate-900 h-full w-full flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans animate-fade-in">
           {/* Calculator Card */}
           <div className="bg-[#F4F2EB] dark:bg-slate-800 rounded-[2rem] p-5 w-full shadow-lg border border-slate-200 dark:border-slate-700 relative z-10">
              
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
                 <div className="bg-gray-200 dark:bg-slate-700 rounded-2xl flex items-center p-1 relative">
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
                 <div className="bg-gray-200 dark:bg-slate-700 rounded-2xl flex items-center p-1">
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
                      className="flex-1 bg-white dark:bg-slate-600 rounded-l-lg px-3 py-2 text-xs outline-none border border-r-0 border-gray-200 dark:border-slate-500"
                    />
                    <button className="bg-[#0f172a] hover:bg-slate-800 text-white text-[10px] font-bold px-4 rounded-r-lg transition-colors">
                       Aplicar
                    </button>
                 </div>
              </div>

              {/* Main Button */}
              <button 
                onClick={() => setActiveStep(3)}
                className="w-full bg-[#09e989] hover:bg-[#07cf7b] text-slate-900 font-extrabold text-sm py-3.5 rounded-full shadow-lg transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Iniciar Operación
              </button>

           </div>
           
           <button onClick={() => setActiveStep(1)} className="absolute top-6 left-4 p-2 text-slate-400 hover:text-slate-600 dark:text-slate-500 dark:hover:text-white">
              <ArrowLeft size={20} />
           </button>
        </div>
      );
    }

    // ------------------------------------------------
    // STEP 1: INITIAL VIEW (Profile OR Accounts)
    // ------------------------------------------------
    if (activeStep === 1) {
        
        // --- STEP 1 PART A: PROFILE FORM (New Request) ---
        if (step1View === 'profile') {
            return (
                <div key="step1-profile" className="bg-[#121212] h-full w-full flex flex-col font-sans animate-fade-in relative">
                    {/* Header Dark Section */}
                    <div className="pt-10 pb-6 px-6 bg-[#121212]">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center border-2 border-gray-400">
                                <User className="text-white w-7 h-7" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-[10px] opacity-80 font-medium">9348572</span>
                                <span className="text-white text-sm font-bold tracking-wide">Nombre Usuario</span>
                            </div>
                        </div>
                    </div>

                    {/* White Card Section */}
                    <div className="flex-1 bg-white rounded-t-[1.5rem] px-5 pt-6 pb-24 overflow-y-auto no-scrollbar relative">
                        
                        {/* Purple Badge */}
                        <div className="inline-block bg-[#2E1065] rounded-md px-3 py-1 mb-2">
                            <span className="text-white text-[10px] font-bold tracking-wide">Datos Personales</span>
                        </div>
                        
                        <div className="text-[10px] text-gray-800 font-medium mb-0.5">Información de contacto</div>
                        <div className="text-[10px] text-gray-800 font-medium mb-6">Foto de perfil</div>

                        {/* Form Fields */}
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <label className="text-[11px] font-extrabold text-[#0f172a] w-[35%]">Nombre</label>
                                <input type="text" defaultValue="Dirección #121" className="w-[65%] text-[10px] py-1 px-2 border border-black/80 rounded bg-white text-gray-700 outline-none text-right" />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-[11px] font-extrabold text-[#0f172a] w-[35%]">Apellido Paterno</label>
                                <input type="text" defaultValue="Administrador" className="w-[65%] text-[10px] py-1 px-2 border border-black/80 rounded bg-white text-gray-700 outline-none text-right" />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-[11px] font-extrabold text-[#0f172a] w-[35%]">Apellido Materno</label>
                                <input type="text" defaultValue="983 213 234" className="w-[65%] text-[10px] py-1 px-2 border border-black/80 rounded bg-white text-gray-700 outline-none text-right" />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-[11px] font-extrabold text-[#0f172a] w-[35%]">Tipo de Documento</label>
                                <div className="w-[65%] border border-black/80 rounded bg-white py-1 px-2 flex justify-end">
                                    <span className="text-[10px] text-gray-700">DNI</span>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-[11px] font-extrabold text-[#0f172a] w-[35%]">N° de Documento</label>
                                <input type="text" defaultValue="75194622" className="w-[65%] text-[10px] py-1 px-2 border border-black/80 rounded bg-white text-gray-700 outline-none text-right" />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-[11px] font-extrabold text-[#0f172a] w-[35%]">Profesión</label>
                                <input type="text" defaultValue="Profesor" className="w-[65%] text-[10px] py-1 px-2 border border-black/80 rounded bg-white text-gray-700 outline-none text-right" />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-[11px] font-extrabold text-[#0f172a] w-[35%]">Celular</label>
                                <input type="text" defaultValue="999 924 032" className="w-[65%] text-[10px] py-1 px-2 border border-black/80 rounded bg-white text-gray-700 outline-none text-right" />
                            </div>
                            <div className="flex items-center justify-between">
                                <label className="text-[11px] font-extrabold text-[#0f172a] w-[35%]">Departamento</label>
                                <div className="w-[65%] border border-black/80 rounded bg-white py-1 px-2 flex justify-end">
                                    <span className="text-[10px] text-gray-700">Chiclayo</span>
                                </div>
                            </div>
                             <div className="flex items-center justify-between">
                                <label className="text-[11px] font-extrabold text-[#0f172a] w-[35%]">Distrito</label>
                                <div className="w-[65%] border border-black/80 rounded bg-white py-1 px-2 flex justify-end">
                                    <span className="text-[10px] text-gray-700">Chiclayo</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Fixed Bottom Button (Inside Phone Frame) */}
                    <div className="absolute bottom-6 left-0 right-0 px-6 z-20">
                        <button 
                            onClick={() => setStep1View('accounts')}
                            className="w-full bg-[#09e989] hover:bg-[#07cf7b] text-white font-bold py-3 rounded-full text-xs shadow-lg transition-transform hover:scale-[1.02]"
                        >
                            Guardar información
                        </button>
                    </div>
                </div>
            );
        }

        // --- STEP 1 PART B: ACCOUNTS LIST (Existing functionality) ---
        return (
            <div key="step1-accounts" className="bg-[#F4F2EB] dark:bg-slate-900 h-full w-full flex flex-col pt-10 relative overflow-hidden font-sans animate-fade-in transition-colors duration-500">
                {/* Back Button for UX */}
                <button 
                    onClick={() => setStep1View('profile')} 
                    className="absolute top-4 left-4 p-2 text-gray-500 hover:text-black dark:text-gray-400 dark:hover:text-white z-20"
                >
                    <ArrowLeft size={16} />
                </button>

                {/* Status Bar */}
                <div className="flex justify-between items-center text-[10px] font-bold text-gray-800 dark:text-gray-300 mb-6 px-6 pl-12">
                    <span>9:41</span>
                    <div className="flex gap-1.5 items-center">
                        <Signal size={12} className="text-gray-800 dark:text-gray-300" />
                        <Wifi size={12} className="text-gray-800 dark:text-gray-300" />
                        <div className="w-5 h-2.5 border border-gray-800 dark:border-gray-300 rounded-[3px] relative">
                        <div className="absolute top-0.5 left-0.5 bottom-0.5 right-1.5 bg-gray-800 dark:bg-gray-300 rounded-[1px]"></div>
                        </div>
                    </div>
                </div>

                {/* User Profile Summary */}
                <div className="px-4 mb-6">
                    <div className="bg-[#2A2A2A] rounded-2xl p-4 flex items-center gap-3 shadow-lg border border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-brand-green/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
                        <div className="w-10 h-10 bg-gray-600 rounded-full flex items-center justify-center overflow-hidden border-2 border-brand-green/30 relative z-10">
                            <User className="text-white w-5 h-5" />
                        </div>
                        <div className="text-white text-xs flex-1 relative z-10">
                            <div className="flex items-center justify-between mb-1">
                                <span className="font-bold tracking-wider">CAPITAL MARKET</span>
                                <span className="text-[9px] bg-brand-green text-black px-1.5 py-0.5 rounded font-bold">Verificado</span>
                            </div>
                            <div className="flex items-center gap-2 opacity-60 text-[10px]">
                                <span>RUC: 205223456780</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Interactive Accounts List */}
                <div className="flex-1 px-4 space-y-3 overflow-y-auto no-scrollbar pb-28">
                    <h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-2 mb-2">Mis Cuentas</h4>
                    
                    {[0, 1].map((idx) => (
                        <div 
                            key={idx}
                            onClick={() => {
                                setExpandedAccount(expandedAccount === idx ? null : idx);
                            }}
                            className={`bg-[#2A2A2A] rounded-2xl transition-all duration-300 overflow-hidden cursor-pointer border-l-[4px] ${expandedAccount === idx ? 'border-brand-green shadow-xl ring-1 ring-brand-green/20' : 'border-slate-600 shadow-md hover:border-brand-green/50'}`}
                        >
                            <div className="p-4 relative">
                                {/* Active Indicator */}
                                {expandedAccount === idx && (
                                    <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
                                )}

                                <div className="flex justify-between items-start mb-2 pr-4">
                                    <div className="text-xs font-bold text-white leading-tight">Banco de Crédito del Perú</div>
                                    <div className="w-5 h-5 rounded-full bg-[#002A5C] flex items-center justify-center text-[6px] font-bold text-white border border-white/10 shrink-0">BCP</div>
                                </div>
                                
                                <div className="flex justify-between items-center">
                                    <div className="text-[10px] text-gray-400 font-mono tracking-wide">
                                        {idx === 0 ? 'N° 191-1234567-0-99' : 'N° 300-00123679-1-00'}
                                    </div>
                                    {expandedAccount === idx ? <ChevronUp size={14} className="text-brand-green" /> : <ChevronDown size={14} className="text-gray-500" />}
                                </div>
                            </div>
                            
                            {/* Expanded Content */}
                            <div className={`bg-black/20 px-4 transition-all duration-300 ease-in-out ${expandedAccount === idx ? 'max-h-32 py-3 opacity-100' : 'max-h-0 py-0 opacity-0'}`}>
                                <div className="flex justify-between text-[9px] items-end mb-2 border-t border-white/5 pt-2">
                                    <div className="space-y-0.5">
                                        <div className="text-brand-green font-bold">Tipo de cuenta</div>
                                        <div className="text-gray-300">Corriente</div>
                                    </div>
                                    <div className="space-y-0.5 text-right mr-4">
                                        <div className="text-brand-green font-bold">Moneda</div>
                                        <div className="text-gray-300">{idx === 0 ? 'Soles' : 'Dólares'}</div>
                                    </div>
                                </div>
                                <div className="flex gap-2 justify-end mt-3">
                                    <button onClick={(e) => { e.stopPropagation(); setExpandedAccount(null); }} className="text-[9px] bg-white/10 hover:bg-white/20 text-white font-bold flex items-center gap-1 transition-colors px-3 py-1.5 rounded-lg border border-white/5">
                                        Guardar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}

                    <button className="w-full py-3 border-2 border-dashed border-gray-400/30 rounded-2xl flex items-center justify-center gap-2 text-gray-500 dark:text-gray-400 hover:border-brand-green hover:text-brand-green transition-colors group">
                        <div className="bg-gray-300 dark:bg-gray-600 group-hover:bg-brand-green rounded-full p-0.5 transition-colors">
                            <Plus size={10} className="text-white group-hover:text-black" />
                        </div>
                        <span className="text-xs font-bold">Agregar nueva cuenta</span>
                    </button>
                </div>
                
                {/* Main CTA Button - Fixed Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#F4F2EB] via-[#F4F2EB] to-transparent dark:from-slate-900 dark:via-slate-900 z-20">
                    <button 
                        onClick={() => setActiveStep(2)}
                        className="w-full bg-[#09e989] hover:bg-[#07cf7b] text-slate-900 font-extrabold text-sm py-3.5 rounded-full shadow-[0_4px_14px_0_rgba(9,233,137,0.5)] transition-all transform active:scale-[0.98] uppercase tracking-wide"
                    >
                        Iniciar Cambio
                    </button>
                </div>
            </div>
        );
    }
    
    // Fallback
    return null;
  };

  return (
    <section className="w-full py-20 md:py-28 px-4 overflow-hidden relative transition-colors duration-500 bg-white dark:bg-white/5">
      {/* Background Glow Effects */}
      <div className="absolute top-1/2 left-0 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Column: Title & Phone */}
        <div className="flex flex-col">
          <RevealOnScroll delay={0}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-16 leading-tight transition-colors duration-500">
              Empieza a cambiar de manera <span className="text-brand-green">Rápida y Fácil</span> en 4 pasos
            </h2>
          </RevealOnScroll>

          {/* Phone Mockup Wrapper */}
          <RevealOnScroll delay={200} className="relative flex justify-center lg:justify-start pl-4 lg:pl-10">
            <div className="relative">
              {/* Box Background behind phone - Adaptive */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[110%] h-[95%] bg-slate-200 dark:bg-[#003822] rounded-[3rem] -z-10 transform rotate-[-2deg] transition-colors duration-500"></div>
              
              {/* The Phone Frame */}
              <div className="relative z-10 bg-gray-900 border-[6px] border-gray-800 rounded-[2.5rem] w-[300px] h-[600px] shadow-2xl overflow-hidden flex flex-col ring-1 ring-gray-700">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-b-xl z-30 pointer-events-none"></div>
                
                {/* Screen Content */}
                {renderPhoneContent()}

                {/* Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-black/20 rounded-full z-30 pointer-events-none"></div>
              </div>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right Column: Steps Grid */}
        <div className="flex flex-col justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12 mb-16">
            {[
              { num: '01', text: 'Crea tu usuario Solo necesitas tus datos personales y una cuenta bancaria  en dólares y soles válida.' },
              { num: '02', text: 'Registra la transferencia y realiza el cambio de monto desde tu banco a la cuenta de destino.' },
              { num: '03', text: 'Registra tu operación en nuestra plataforma para dar inicio al proceso.' },
              { num: '04', text: 'Una vez verificada la transferencia, recibirás tu dinero en la cuenta designada en menos de 10 minutos.' },
            ].map((step, idx) => (
              <RevealOnScroll key={step.num} delay={100 + (idx * 100)}>
                <div 
                  className={`flex flex-col group cursor-pointer transition-all duration-300 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 ${activeStep === idx + 1 ? 'opacity-100 scale-105 bg-white/40 dark:bg-white/5 shadow-sm' : 'opacity-50 hover:opacity-100'}`}
                  onMouseEnter={() => handleStepChange(idx + 1)}
                  onClick={() => handleStepChange(idx + 1)}
                >
                  <span className={`text-6xl font-medium mb-4 font-mono transition-transform duration-300 group-hover:-translate-x-2 ${activeStep === idx + 1 ? 'text-brand-green' : 'text-slate-400 dark:text-slate-600'}`}>
                    {step.num}
                  </span>
                  <p className="text-slate-600 dark:text-gray-400 text-sm leading-relaxed font-light transition-colors duration-500">
                    {step.text}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          <RevealOnScroll delay={500}>
            <div className="flex flex-col md:flex-row gap-8 pt-8 border-t border-slate-300 dark:border-gray-800/50 transition-colors duration-500">
              <a href="#" className="flex items-center gap-4 group transition-all duration-300 hover:opacity-80">
                <div className="p-2 border-2 border-slate-900 dark:border-white rounded-lg group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors text-slate-900 dark:text-white">
                  <FileText size={20} />
                </div>
                <span className="text-slate-900 dark:text-white text-sm font-medium leading-tight max-w-[120px] transition-colors">Ve el paso paso mas detallado</span>
              </a>
              <a href="#" className="flex items-center gap-4 group transition-all duration-300 hover:opacity-80">
                <div className="p-2 border-2 border-slate-900 dark:border-white rounded-lg group-hover:bg-slate-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-black transition-colors text-slate-900 dark:text-white">
                  <Headphones size={20} />
                </div>
                <span className="text-slate-900 dark:text-white text-sm font-medium leading-tight max-w-[120px] transition-colors">¿Quieres ayuda? Contactanos</span>
              </a>
            </div>
          </RevealOnScroll>
        </div>

      </div>
    </section>
  );
};