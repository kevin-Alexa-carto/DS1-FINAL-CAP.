import React, { useEffect, useRef, useState } from 'react';

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export const RevealOnScroll: React.FC<RevealProps> = ({ children, delay = 0, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: Unobserve if you want the animation to run only once
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // Trigger a bit later to ensure it's actually entering view
        rootMargin: "0px 0px -50px 0px" 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const style = {
    transitionDelay: `${delay}ms`,
  };

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
      style={style}
    >
      {children}
    </div>
  );
};