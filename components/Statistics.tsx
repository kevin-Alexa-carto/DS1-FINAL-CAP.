import React, { useState, useEffect, useRef } from 'react';
import { RevealOnScroll } from './RevealOnScroll';

interface StatProps {
  value: string;
  label: React.ReactNode;
  delay?: number;
}

const StatCounter: React.FC<StatProps> = ({ value, label, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  // Parse value to find number and suffix/prefix
  const numberMatch = value.match(/\d+/);
  const targetNumber = numberMatch ? parseInt(numberMatch[0]) : 0;
  
  // Split correctly handling special characters
  const parts = value.split(targetNumber.toString());
  const prefix = parts[0] || '';
  const suffix = parts[1] || '';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = targetNumber;
    const duration = 2500; // 2.5 seconds for a slower, smooth animation
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quartic for a very smooth slow-down at the end
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(start + (end - start) * easeOutQuart));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it lands exactly on the number
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, targetNumber]);

  return (
    <div ref={elementRef} className="flex flex-col items-center group cursor-default p-4">
       <div className="text-6xl md:text-7xl font-black text-brand-green mb-4 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_10px_15px_rgba(9,233,137,0.35)] select-none flex items-baseline">
         <span>{prefix}</span>
         <span>{count}</span>
         <span>{suffix}</span>
       </div>
       <div className="text-center">
         <div className="font-bold text-slate-900 dark:text-white uppercase tracking-widest text-sm md:text-base leading-relaxed transition-colors duration-500 opacity-90 group-hover:opacity-100">
           {label}
         </div>
       </div>
    </div>
  );
};

export const Statistics: React.FC = () => {
  return (
    <section className="w-full py-16 md:py-24 relative z-20">
      <div className="max-w-7xl mx-auto px-4">
        <RevealOnScroll delay={100}>
          {/* Container with theme-aware styling: Subtle border in light mode, transparent in dark mode */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start justify-center divide-y md:divide-y-0 md:divide-x divide-slate-200 dark:divide-white/10 p-8 md:p-12 rounded-3xl bg-white/40 dark:bg-white/5 backdrop-blur-sm border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none transition-all duration-500 hover:shadow-lg dark:hover:bg-white/10">
            
            <StatCounter 
                value="+3" 
                label="Años de experiencia" 
            />
            
            <StatCounter 
                value="+30M" 
                label={
                    <>
                    De dólares<br className="hidden md:block"/> cambiados
                    </>
                }
            />
            
            <StatCounter 
                value="100%" 
                label={
                    <>
                    Supervisada bajo<br/>
                    la Resolución Nº<br/>
                    00867-2025.
                    </>
                }
            />
            
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};