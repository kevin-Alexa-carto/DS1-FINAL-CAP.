import React from 'react';

interface LogoProps {
  className?: string; // Size and color of the icon
  textClassName?: string; // Color of the 'CAPITAL MARKET' text
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ 
  className = "w-10 h-10 text-brand-green", 
  textClassName = "text-slate-900 dark:text-white",
  showText = true
}) => {
  return (
    <div className={`flex items-center gap-3 select-none ${!showText ? 'justify-center' : ''}`}>
      <svg 
        viewBox="0 0 54 44" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className={className}
        aria-label="Capital Market Green Logo"
      >
        {/* Bar 1 */}
        <path d="M0 24L10.5 16.5V44H0V24Z" fill="currentColor" />
        {/* Bar 2 */}
        <path d="M14.5 13.5L25 6V44H14.5V13.5Z" fill="currentColor" />
        {/* Bar 3 */}
        <path d="M29 19L39.5 11.5V44H29V19Z" fill="currentColor" />
        {/* Bar 4 */}
        <path d="M43.5 8.5L54 1V44H43.5V8.5Z" fill="currentColor" />
      </svg>
      
      {showText && (
        <div className={`flex flex-col justify-center leading-none ${textClassName} transition-colors duration-500`}>
           <span className="font-bold text-[10px] sm:text-xs tracking-[0.2em]">CAPITAL</span>
           <span className="font-bold text-[10px] sm:text-xs tracking-[0.2em]">MARKET</span>
           <span className="font-bold text-[10px] sm:text-xs tracking-[0.2em] text-brand-green">GREEN</span>
        </div>
      )}
    </div>
  );
};