import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delay?: number;
  className?: string;
}

export const Typewriter: React.FC<TypewriterProps> = ({ 
  words, 
  typeSpeed = 120, 
  deleteSpeed = 60, 
  delay = 2500,
  className = "" 
}) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  // Typing logic
  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => {
        setReverse(true);
      }, delay);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, typeSpeed, deleteSpeed, delay]);

  return (
    <span className={`${className} inline-flex items-center`}>
      <span>{words[index].substring(0, subIndex)}</span>
      <span className={`w-[3px] h-[0.9em] bg-brand-green ml-1 ${blink ? 'opacity-100' : 'opacity-0'}`}></span>
    </span>
  );
};