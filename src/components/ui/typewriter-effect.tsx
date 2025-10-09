"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface TypewriterEffectProps {
  words: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export const TypewriterEffect = ({ 
  words, 
  className, 
  speed = 50,
  delay = 0 
}: TypewriterEffectProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (currentIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + words[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, words, speed]);

  // Reset when words change
  useEffect(() => {
    setDisplayedText("");
    setCurrentIndex(0);
    setIsComplete(false);
  }, [words]);

  return (
    <div className={cn("font-medium", className)}>
      <div className="text-base md:text-lg text-gray-600 leading-relaxed">
        {displayedText}
        {!isComplete && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="inline-block w-0.5 h-5 bg-gray-600 ml-1"
          />
        )}
      </div>
    </div>
  );
};
