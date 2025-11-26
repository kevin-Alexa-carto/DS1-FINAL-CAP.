
import React, { useState } from 'react';
import { Eye, EyeOff, Check, ArrowRight, User, Mail, Lock } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';
import { Logo } from './Logo';

export const AuthSection: React.FC = () => {
  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [showPassword, setShowPassword] = useState(false);
  
  // Register Form State
  const [formData, setFormData] = useState({
    nombres: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    correo: '',
    password: '',
    confirmPassword: '',
    terms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <section className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center py-12 px-4 bg-[#F4F2EB] dark:bg-brand-dark-bg transition-colors duration-500 relative overflow-hidden">
      
      {/* --- Ambient Green Lights --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[120px] pointer-events-none opacity-60 animate-pulse"></div>
      
      <RevealOnScroll className="w-full max-w-5xl relative z-10">
        <div className="bg-white/60 dark:bg-[#121212]/80 backdrop-blur-xl rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/50 dark:border-white/10 flex flex-col md:flex-row min-h-[700px]">
          
          {/* --- Left Column: Toggle & Info --- */}
          <div className="md:w-2/5 bg-slate-900 text-white p-10 md:p-12 flex flex-col relative overflow-hidden">
             {/* Decorative Elements */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-green/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2"></div>

             <div className="relative z-10">
               <div className="mb-12">
                 <Logo className="w-10 h-10 text-brand-green" textClassName="text-white" />
               </div>
               
               <h2 className="text-3xl md:text-4xl font-black leading-tight mb-6">
                 {mode === 'register' 
                   ? <span>Únete a la nueva era del <span className="text-brand-green">cambio digital</span></span> 
                   : <span>Bienvenido de <span className="text-brand-green">vuelta</span></span>
                 }
               </h2>
               
               <p className="text-slate-400 text-lg font-medium leading-relaxed mb-12">
                 {mode === 'register' 
                   ? "Regístrate en minutos y accede a las mejores tasas de cambio del mercado con total seguridad."
                   : "Ingresa a tu cuenta para realizar tus operaciones con la rapidez y confianza de siempre."
                 }
               </p>

                {/* Toggle Switch - Redesigned Card */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md shadow-xl hover:bg-white/10 transition-colors duration-300">
                    <p className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-4">
                    {mode === 'register' ? '¿Ya tienes una cuenta?' : '¿Aún no tienes cuenta?'}
                    </p>
                    <button 
                    onClick={() => setMode(mode === 'register' ? 'login' : 'register')}
                    className="group w-full flex items-center justify-between text-white font-bold text-lg hover:text-brand-green transition-colors"
                    >
                    <span>{mode === 'register' ? 'Iniciar Sesión' : 'Crear una Cuenta'}</span>
                    <div className="w-10 h-10 rounded-full bg-brand-green text-slate-900 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[-45deg] transition-all duration-300 shadow-lg shadow-brand-green/20">
                        <ArrowRight size={20} strokeWidth={2.5} />
                    </div>
                    </button>
                </div>
             </div>
          </div>

          {/* --- Right Column: Forms --- */}
          <div className="md:w-3/5 p-8 md:p-12 flex items-center justify-center relative bg-white/50 dark:bg-transparent">
             
             {/* LOGIN FORM */}
             <div className={`w-full max-w-md transition-all duration-500 absolute ${mode === 'login' ? 'opacity-100 translate-x-0 z-20 relative' : 'opacity-0 translate-x-10 z-0 hidden'}`}>
                <div className="mb-8">
                   <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">¡Hola de nuevo!</h3>
                   <p className="text-slate-600 dark:text-slate-400">Ingresa tus credenciales para continuar.</p>
                </div>

                <div className="space-y-6">
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide ml-1">Correo Electrónico</label>
                      <div className="relative">
                         <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                         <input 
                           type="email" 
                           placeholder="ejemplo@correo.com" 
                           className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-4 pl-12 pr-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                         />
                      </div>
                   </div>

                   <div className="space-y-2">
                      <div className="flex justify-between items-center ml-1">
                        <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide">Contraseña</label>
                        <a href="#" className="text-xs font-bold text-brand-green hover:underline">¿Olvidaste tu contraseña?</a>
                      </div>
                      <div className="relative">
                         <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                         <input 
                           type={showPassword ? "text" : "password"} 
                           placeholder="••••••••" 
                           className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-4 pl-12 pr-12 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                         />
                         <button 
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                         >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                         </button>
                      </div>
                   </div>

                   <button className="w-full bg-brand-green hover:bg-brand-green-hover text-slate-900 font-extrabold py-4 rounded-xl shadow-lg hover:shadow-brand-green/20 hover:-translate-y-0.5 transition-all duration-300">
                      Iniciar Sesión
                   </button>
                </div>
             </div>


             {/* REGISTER FORM */}
             <div className={`w-full max-w-lg transition-all duration-500 absolute ${mode === 'register' ? 'opacity-100 translate-x-0 z-20 relative' : 'opacity-0 -translate-x-10 z-0 hidden'}`}>
                <div className="mb-8">
                   <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">¡Bienvenido!</h3>
                   <p className="text-slate-600 dark:text-slate-400">Regístrate rápido y fácil para empezar a operar.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                   
                   {/* Nombres (Left) */}
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide ml-1">Nombres</label>
                      <input 
                        type="text" 
                        name="nombres"
                        value={formData.nombres}
                        onChange={handleInputChange}
                        className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-900 dark:text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                      />
                   </div>

                   {/* Apellido Paterno (Right) */}
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide ml-1">Apellido Paterno</label>
                      <input 
                        type="text" 
                        name="apellidoPaterno"
                        value={formData.apellidoPaterno}
                        onChange={handleInputChange}
                        className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-900 dark:text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                      />
                   </div>

                   {/* Apellido Materno (Left) */}
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide ml-1">Apellido Materno</label>
                      <input 
                        type="text" 
                        name="apellidoMaterno"
                        value={formData.apellidoMaterno}
                        onChange={handleInputChange}
                        className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-900 dark:text-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                      />
                   </div>

                   {/* Correo (Right) */}
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide ml-1">Correo</label>
                      <input 
                        type="email" 
                        name="correo"
                        value={formData.correo}
                        onChange={handleInputChange}
                        placeholder="ejemplo@correo.com"
                        className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                      />
                   </div>

                   {/* Contraseña (Left) */}
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide ml-1">Contraseña</label>
                      <input 
                        type="password" 
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                      />
                   </div>

                   {/* Confirmar Contraseña (Right) */}
                   <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wide ml-1">Confirmar Contraseña</label>
                      <input 
                        type="password" 
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        placeholder="••••••••"
                        className="w-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl py-3 px-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all"
                      />
                   </div>

                   {/* Terms Checkbox (Full Width) */}
                   <div className="md:col-span-2 pt-2">
                      <label className="flex items-start gap-3 cursor-pointer group">
                         <div className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${formData.terms ? 'bg-brand-green border-brand-green' : 'border-slate-300 dark:border-slate-600 group-hover:border-brand-green'}`}>
                            {formData.terms && <Check size={14} className="text-slate-900 stroke-[4]" />}
                         </div>
                         <input 
                           type="checkbox" 
                           name="terms"
                           checked={formData.terms}
                           onChange={handleInputChange}
                           className="hidden"
                         />
                         <span className="text-xs text-slate-600 dark:text-slate-400 select-none">
                            Estoy de acuerdo con los <a href="#" className="text-brand-green hover:underline font-bold">términos del servicio</a> y las <a href="#" className="text-brand-green hover:underline font-bold">políticas de privacidad</a>
                         </span>
                      </label>
                   </div>

                   {/* Submit Button (Full Width) */}
                   <div className="md:col-span-2 pt-4">
                      <button className="w-full bg-[#0f172a] dark:bg-[#1e293b] hover:bg-slate-800 dark:hover:bg-slate-700 text-white font-extrabold py-4 rounded-xl shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                         Crear Cuenta
                      </button>
                   </div>

                </div>
             </div>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
