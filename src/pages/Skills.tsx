import { Card } from "@/components/ui/card";
import { Gravity, MatterBody } from "@/components/ui/gravity";
import { IconCloud } from "@/components/ui/interactive-icon-cloud";
import { MorphingText } from "@/components/ui/morphing-text";
import { motion } from "framer-motion";
import { BarChart3, Star, Zap, TrendingUp, Code, Database } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Power BI", color: "bg-yellow-500" },
    { name: "SQL", color: "bg-blue-500" },
    { name: "Python", color: "bg-green-600" },
    { name: "DAX", color: "bg-orange-500" },
    { name: "Excel", color: "bg-emerald-600" },
    { name: "Power Query", color: "bg-cyan-500" },
    { name: "Data Modeling", color: "bg-purple-500" },
    { name: "ETL", color: "bg-indigo-500" },
    { name: "ASPEN", color: "bg-red-500" },
    { name: "BI Development", color: "bg-teal-500" },
    { name: "KPI Design", color: "bg-pink-500" },
    { name: "Analytics", color: "bg-violet-500" }
  ];

  const skillSlugs = [
    "microsoftpowerbi",
    "python",
    "mysql",
    "microsoftexcel",
    "postgresql",
    "microsoftsqlserver",
    "pandas",
    "numpy",
    "jupyter"
  ];

  const topSkills = [
    { name: "Microsoft Power BI", level: "Advanced" },
    { name: "SQL", level: "Intermediate" },
    { name: "DAX", level: "Advanced" },
    { name: "MS Excel", level: "Intermediate" },
    { name: "Python", level: "Beginner" }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced": return "bg-gradient-to-r from-green-500 to-emerald-600";
      case "Intermediate": return "bg-gradient-to-r from-amber-500 to-orange-600";
      case "Beginner": return "bg-gradient-to-r from-blue-500 to-cyan-600";
      default: return "bg-gray-500";
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8 md:py-12">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        {/* Hero Section */}
        <Card className="w-full h-[40vh] relative overflow-hidden mb-8 md:mb-12">
          <div className="absolute inset-0">
            <Gravity gravity={{ x: 0, y: 1 }} className="w-full h-full">
              <div className="absolute inset-x-0 top-4 md:top-8 z-10">
                <MorphingText
                  texts={["Core Competencies", "Technical Skills", "Tools & Technologies"]}
                  className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 px-4 font-amanojaku"
                />
              </div>
              {skills.map((skill, idx) => (
                <MatterBody
                  key={idx}
                  matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
                  x={`${(idx * 20) % 80 + 10}%`}
                  y={`${(idx * 15) % 60 + 10}%`}
                  angle={Math.random() * 20 - 10}
                >
                  <div className={`text-sm sm:text-base md:text-lg lg:text-xl ${skill.color} text-white rounded-full hover:cursor-grab px-4 py-2 md:px-6 md:py-3 whitespace-nowrap`}>
                    {skill.name}
                  </div>
                </MatterBody>
              ))}
            </Gravity>
          </div>
        </Card>

        {/* Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          <div className="relative flex items-center justify-center overflow-hidden rounded-lg border bg-background p-4 md:p-6 h-[40vh]">
            <IconCloud iconSlugs={skillSlugs} />
          </div>

          <motion.div
            className="bg-gradient-to-br from-white to-amber-50 dark:from-gray-900 dark:to-amber-950 rounded-lg p-4 md:p-6 shadow-xl h-[40vh] flex flex-col justify-between border-2 border-amber-100 dark:border-amber-900"
          >
            <div>
              <div className="flex items-center gap-2 mb-4 md:mb-6">
                <BarChart3 className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                <h3 className="text-lg md:text-xl font-bold text-amber-600 dark:text-amber-500 font-autumn-brush">Core Proficiencies</h3>
              </div>
              <div className="space-y-3">
                {topSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <Star className="w-3.5 h-3.5 text-amber-500" />
                        <span className="font-semibold text-sm">{skill.name}</span>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getLevelColor(skill.level)}`}>
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full rounded-full ${getLevelColor(skill.level)}`}
                        initial={{ width: 0 }}
                        animate={{ 
                          width: `${(skill.level === "Advanced" ? 100 : skill.level === "Intermediate" ? 80 : 60)}%` 
                        }}
                        transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t-2 border-amber-200 dark:border-amber-800">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-amber-600 dark:text-amber-500" />
                <h4 className="text-sm font-bold font-autumn-brush">Additional Expertise</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  { name: "Data Modeling", icon: Database },
                  { name: "ETL", icon: TrendingUp },
                  { name: "KPI Design", icon: BarChart3 },
                  { name: "Performance", icon: Zap },
                  { name: "Dashboards", icon: BarChart3 },
                  { name: "Analytics", icon: Code }
                ].map((expertise, idx) => (
                  <motion.span
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + idx * 0.08 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 text-amber-800 dark:text-amber-200 rounded-full text-xs font-semibold border border-amber-200 dark:border-amber-800 cursor-default shadow-sm"
                  >
                    {expertise.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
