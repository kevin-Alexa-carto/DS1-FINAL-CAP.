import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, Tag, ChevronRight, Search } from 'lucide-react';
import { RevealOnScroll } from './RevealOnScroll';

const CATEGORIES = [
  { id: 'all', label: 'Ver todo', count: 58 },
  { id: 'analisis', label: 'Análisis Técnico', count: 18 },
  { id: 'divisas', label: 'Divisas y Mercado', count: 14 },
  { id: 'inversiones', label: 'Inversiones', count: 12 },
  { id: 'noticias', label: 'Noticias Perú', count: 12 },
  { id: 'educacion', label: 'Primeros Pasos', count: 2 },
];

const NEWS_ITEMS = [
  {
    id: 1,
    category: 'Inversiones',
    date: '20 Nov 2025',
    readTime: '5 min',
    title: 'Nadie Puede Predecir la Siguiente recesión',
    excerpt: '¿Alguna vez se ha comprobado la tasa de acierto de quienes aseguran saber el futuro de la bolsa? Analizamos los datos históricos para entender los ciclos del mercado.',
    image: 'https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2070&auto=format&fit=crop',
    featured: true
  },
  {
    id: 2,
    category: 'Finanzas Personales',
    date: '17 Nov 2025',
    readTime: '8 min',
    title: 'Rendimiento Máximo sin Riesgos: Depósitos a Plazo Fijo',
    excerpt: 'El Ranking Definitivo de Depósitos a Plazo Fijo en Soles (Noviembre 2025). Descubre los errores más comunes que debes evitar.',
    image: 'https://images.unsplash.com/photo-1565514020176-dbf2277e4952?q=80&w=2070&auto=format&fit=crop',
    featured: false
  },
  {
    id: 3,
    category: 'Noticias Perú',
    date: '13 Nov 2025',
    readTime: '6 min',
    title: 'Ranking Noviembre 2025: ¿Qué Bancos Pagan Más?',
    excerpt: 'Descubre qué entidades financieras lideran el rendimiento en Perú este mes viendo los requisitos ocultos y seguridad de tus ahorros.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2072&auto=format&fit=crop',
    featured: false
  },
  {
    id: 4,
    category: 'Análisis Técnico',
    date: '10 Nov 2025',
    readTime: '4 min',
    title: 'Tendencia del Dólar: ¿Romperá la barrera de los S/ 3.80?',
    excerpt: 'Análisis técnico semanal del par USD/PEN. Soportes, resistencias y proyecciones para la próxima semana ante la volatilidad global.',
    image: 'https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop',
    featured: false
  },
  {
    id: 5,
    category: 'Divisas y Mercado',
    date: '08 Nov 2025',
    readTime: '5 min',
    title: 'Impacto de la Reserva Federal en el Tipo de Cambio',
    excerpt: 'Cómo las decisiones de tasas de interés en Estados Unidos están afectando directamente al Sol Peruano y qué esperar.',
    image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?q=80&w=2071&auto=format&fit=crop',
    featured: false
  }
];

export const NewsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const featuredArticle = NEWS_ITEMS.find(item => item.featured);
  const otherArticles = NEWS_ITEMS.filter(item => !item.featured);

  return (
    <section className="w-full pt-12 pb-24 px-4 bg-[#F4F2EB] dark:bg-brand-dark-bg transition-colors duration-500 min-h-screen relative overflow-hidden">
      
      {/* --- Ambient Green Lights --- */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none opacity-60 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- Header --- */}
        <RevealOnScroll>
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              Noticias e Inversiones <span className="text-brand-green">Capital Market</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-300 font-medium">
              Noticias, análisis y recursos educativos sobre el mercado de divisas, finanzas internacionales y economía peruana.
            </p>
            
            {/* Search Bar Mobile/Desktop */}
            <div className="mt-8 relative max-w-md mx-auto">
                <input 
                    type="text" 
                    placeholder="Buscar artículos..." 
                    className="w-full pl-12 pr-4 py-3 rounded-full bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-green shadow-sm"
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
            </div>
          </div>
        </RevealOnScroll>

        {/* --- Featured Article --- */}
        {featuredArticle && (
          <RevealOnScroll delay={100}>
            <div className="relative rounded-[2.5rem] overflow-hidden bg-slate-900 dark:bg-slate-800 shadow-2xl mb-16 group cursor-pointer border border-slate-700/50">
                <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
                    
                    {/* Content Side */}
                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-20">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="bg-brand-green text-slate-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">Destacado</span>
                            <span className="text-slate-400 text-xs font-bold flex items-center gap-1">
                                <Calendar size={12} /> {featuredArticle.date}
                            </span>
                        </div>
                        
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight group-hover:text-brand-green transition-colors duration-300">
                            {featuredArticle.title}
                        </h2>
                        
                        <p className="text-slate-300 text-lg mb-8 leading-relaxed line-clamp-3">
                            {featuredArticle.excerpt}
                        </p>
                        
                        <div className="mt-auto">
                            <button className="flex items-center gap-2 text-white font-bold text-sm bg-white/10 hover:bg-brand-green hover:text-slate-900 px-6 py-3 rounded-full transition-all duration-300 w-fit group-hover:pl-8">
                                Leer artículo completo <ArrowRight size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative h-64 lg:h-full overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-slate-900 via-slate-900/50 to-transparent z-10"></div>
                        <img 
                            src={featuredArticle.image} 
                            alt={featuredArticle.title} 
                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>
            </div>
          </RevealOnScroll>
        )}

        {/* --- Categories Filters --- */}
        <RevealOnScroll delay={200}>
            <div className="mb-12 overflow-x-auto no-scrollbar pb-4">
                <div className="flex gap-3 min-w-max px-2">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`px-5 py-2.5 rounded-full text-xs font-bold border transition-all duration-300 flex items-center gap-2 ${
                                activeCategory === cat.id
                                    ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 border-slate-900 dark:border-white shadow-lg scale-105'
                                    : 'bg-white dark:bg-white/5 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:border-brand-green hover:text-brand-green dark:hover:text-brand-green'
                            }`}
                        >
                            {cat.label}
                            <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${
                                activeCategory === cat.id 
                                ? 'bg-white/20 text-white dark:text-slate-900' 
                                : 'bg-slate-100 dark:bg-white/10 text-slate-500 dark:text-slate-400'
                            }`}>
                                {cat.count}
                            </span>
                        </button>
                    ))}
                </div>
            </div>
        </RevealOnScroll>

        {/* --- Grid Layout --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherArticles.map((article, idx) => (
                <RevealOnScroll key={article.id} delay={idx * 100} className="h-full">
                    <div className="group h-full flex flex-col bg-white dark:bg-white/5 rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/5 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative">
                        
                        {/* Hover Green Border Effect */}
                        <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-green/50 rounded-[2rem] pointer-events-none transition-colors duration-300 z-10"></div>
                        
                        {/* Image */}
                        <div className="h-56 relative overflow-hidden">
                            <div className="absolute top-4 left-4 z-10">
                                <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-slate-900 dark:text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm flex items-center gap-1">
                                    <Tag size={10} className="text-brand-green" /> {article.category}
                                </span>
                            </div>
                            <img 
                                src={article.image} 
                                alt={article.title} 
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8 flex-1 flex flex-col relative z-0">
                            <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4">
                                <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime} lectura</span>
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand-green transition-colors line-clamp-2">
                                {article.title}
                            </h3>

                            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                {article.excerpt}
                            </p>

                            <div className="mt-auto pt-6 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-400 group-hover:text-brand-green transition-colors">Leer más</span>
                                <div className="w-8 h-8 rounded-full bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:bg-brand-green group-hover:text-slate-900 transition-all duration-300">
                                    <ChevronRight size={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            ))}
        </div>

        {/* Load More */}
        <div className="mt-16 text-center">
             <button className="px-8 py-3 rounded-full border-2 border-slate-900 dark:border-white text-slate-900 dark:text-white font-bold text-sm hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all duration-300">
                Ver más noticias
             </button>
        </div>

      </div>
    </section>
  );
};