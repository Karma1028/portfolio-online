"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProficiencyBallsProps {
  skill: string;
  proficiency: number; // 0-100
  className?: string;
}

export const ProficiencyBalls = ({ skill, proficiency, className }: ProficiencyBallsProps) => {
  const filledBalls = Math.round((proficiency / 100) * 5);
  
  return (
    <div className={cn("flex flex-col items-center space-y-4", className)}>
      <h3 className="text-lg font-semibold text-foreground">{skill}</h3>
      <div className="flex space-x-3">
        {Array.from({ length: 5 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.02, duration: 0.2 }}
            className="relative"
            whileHover={{ scale: 1.05 }}
          >
            <div
              className={cn(
                "w-8 h-8 rounded-full border-3 transition-all duration-300 relative overflow-hidden",
                index < filledBalls
                  ? "border-orange-400 shadow-2xl"
                  : "border-gray-300 dark:border-gray-600 shadow-lg"
              )}
              style={{
                background: index < filledBalls 
                  ? "#f97316"
                  : "#f3f4f6"
              }}
            >
              {/* Hand-drawn hatching effect */}
              {index < filledBalls && (
                <div className="absolute inset-0 opacity-60">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 32 32"
                    className="absolute inset-0"
                  >
                    <defs>
                      <pattern
                        id={`hatch-${index}`}
                        patternUnits="userSpaceOnUse"
                        width="4"
                        height="4"
                      >
                        <path
                          d="M 0,4 l 4,-4 M 1,4 l 4,-4 M 2,4 l 4,-4 M 3,4 l 4,-4"
                          stroke="rgba(255, 255, 255, 0.3)"
                          strokeWidth="0.5"
                          fill="none"
                        />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#hatch-${index})`} />
                  </svg>
                </div>
              )}
              
              {/* 3D highlight effect */}
              <div className="absolute top-1 left-1 w-2 h-2 bg-white/40 rounded-full blur-sm" />
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-white/60 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
      <span className="text-sm text-muted-foreground font-medium">{proficiency}%</span>
    </div>
  );
};

interface SkillsGridProps {
  skills: Array<{
    name: string;
    proficiency: number;
  }>;
  className?: string;
}

export const SkillsGrid = ({ skills, className }: SkillsGridProps) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", className)}>
      {skills.map((skill, index) => (
        <motion.div
          key={skill.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
        >
          <ProficiencyBalls skill={skill.name} proficiency={skill.proficiency} />
        </motion.div>
      ))}
    </div>
  );
};
