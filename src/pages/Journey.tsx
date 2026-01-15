import React, { useState, useRef } from "react";
import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { GooeyText } from "@/components/ui/gooey-text-morphing";
import { Card } from "@/components/ui/card";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Calendar, Award, Briefcase, GraduationCap, MapPin, Trophy, Star, CheckCircle, BookOpen, Users, Target, ChevronDown } from "lucide-react";

const Journey = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.2", "end 0.8"] });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const journeyData = [
    {
      year: "2025 - 2027",
      title: "PGDM - Big Data Analytics",
      institution: "Goa Institute of Management, Sanquelim, Goa",
      description: "Pursuing advanced studies in Big Data Analytics, focusing on business intelligence, data engineering, and analytics product development.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2940&auto=format&fit=crop",
      achievement: "Pursuing",
      position: "Junior Core Committee Member, Cognition - The Data Science & Analytics club"
    },
    {
      year: "July 2023 - Dec 2023",
      title: "Business Intelligence Intern",
      institution: "Celebal Technologies",
      description: "Contributed to a 4-member team to devise a 54-page Power BI report with 300+ DAX measures. Enhanced report UI with custom visuals and secured 40% reduction in query loading times. Implemented advanced time-intelligence functions for comprehensive financial analysis.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      achievement: "6 Months Internship",
      highlight: "Delivered robust BI solution that replaced static reporting and empowered leadership with dynamic insights."
    },
    {
      year: "2019 - 2023",
      title: "B.E. Chemical Engineering",
      institution: "Jadavpur University",
      description: "Graduated with 8.32 CGPA. Led complex R&D projects including hydrogen production simulation and aqueous retarded acid formulation for ONGC. Core Committee Member directing Logistics and Design team for departmental centenary celebration.",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2940&auto=format&fit=crop",
      achievement: "8.32 CGPA",
      position: "Core Committee Member - Chemical Engineering Centenary Celebration"
    },
    {
      year: "Academic Projects",
      title: "Research & Development",
      institution: "ONGC R&D Projects",
      description: "Hydrogen Production & Carbon Footprint Analysis: Designed sophisticated biomass gasification simulation using ASPEN, validated 99% pure hydrogen extraction. Aqueous Retarded Acid Formulation: Identified optimal solution for limestone reservoirs in 6-member R&D team.",
      image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2940&auto=format&fit=crop",
      achievement: "2 Major Projects",
      highlight: "Combined engineering domain knowledge with analytics to solve practical problems"
    },
    {
      year: "2016 - 2018",
      title: "Higher Secondary Education",
      institution: "Bankura Banga Vidyalaya",
      description: "Completed higher secondary education in Science stream with exceptional academic performance.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2922&auto=format&fit=crop",
      achievement: "90.00%",
      highlight: "Strong foundation in science and mathematics"
    },
    {
      year: "2008 - 2016",
      title: "Secondary Education",
      institution: "Bankura Zilla School",
      description: "Completed secondary education with outstanding academic results, demonstrating early excellence in analytical and problem-solving skills.",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2946&auto=format&fit=crop",
      achievement: "93.85%",
      highlight: "Foundation years building analytical thinking"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20 py-8 md:py-12 px-4 md:px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 opacity-30"></div>

      <motion.div
        className="absolute top-0 left-0 h-1 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600"
        style={{ width: progressWidth }}
      />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-full mb-8 md:mb-12"
        >
          <GooeyText
            texts={["My Journey", "My Path", "My Story", "My Experience"]}
            morphTime={1}
            cooldownTime={0.25}
            className="h-[80px] md:h-[100px] flex items-center justify-center font-bold mb-6 font-amanojaku"
            textClassName="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500"
          />
        </motion.div>

        <div className="relative ml-0 w-full bg-transparent overflow-hidden rounded-none py-8 md:py-12 mb-12">
          <VelocityScroll
            text="EDUCATION & CAREER JOURNEY THROUGH THE YEARS"
            default_velocity={3}
            className="text-2xl md:text-4xl font-bold text-neutral-800 dark:text-neutral-200 font-amanojaku"
          />
        </div>

        <div className="w-full max-w-6xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-orange-400 to-transparent opacity-40 rounded-full hidden md:block"></div>

            <motion.div
              className="absolute left-8 top-0 w-1 bg-gradient-to-b from-orange-600 to-orange-500 rounded-full hidden md:block origin-top"
              style={{ scaleY: scrollYProgress }}
            />

            <div className="space-y-12">
              {journeyData.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative flex items-center"
                  onHoverStart={() => setExpandedIndex(index)}
                  onHoverEnd={() => setExpandedIndex(null)}
                >
                  <motion.div
                    className="absolute left-5 w-2 h-2 bg-orange-500 rounded-full z-10 hidden md:block"
                    animate={expandedIndex === index ? { scale: 2, boxShadow: "0 0 20px rgba(234, 88, 12, 0.8)" } : { scale: 1, boxShadow: "none" }}
                    transition={{ duration: 0.3 }}
                  />

                  <div className="ml-0 md:ml-16 w-full">
                    <motion.div
                      layout
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <Card
                        className="overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-500 rounded-2xl border border-gray-200/60 dark:border-gray-800/60 backdrop-blur-sm hover:border-orange-300 dark:hover:border-orange-700 group relative bg-gradient-to-br from-white/80 to-orange-50/40 dark:from-gray-900/80 dark:to-orange-950/30 hover:from-white hover:to-orange-50/60 dark:hover:from-gray-800 dark:hover:to-orange-900/50"
                        onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                      >
                        <div className={`grid grid-cols-1 ${expandedIndex === index ? 'lg:grid-cols-2' : 'lg:grid-cols-2'} gap-0 transition-all duration-500`}>
                          <motion.div
                            className={`relative h-64 lg:h-80 overflow-hidden group ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
                            whileHover={{ scale: 1.02 }}
                          >
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                              decoding="async"
                            />
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                              initial={{ opacity: 0 }}
                              whileHover={{ opacity: 1 }}
                              transition={{ duration: 0.3 }}
                            />

                            <motion.div
                              className="absolute top-6 left-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-xl flex items-center gap-2"
                              whileHover={{ scale: 1.05, y: -2 }}
                            >
                              <Calendar className="w-4 h-4" />
                              {item.year}
                            </motion.div>

                            {index < 2 && (
                              <motion.div
                                className="absolute top-6 right-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full font-bold text-sm shadow-xl flex items-center gap-1"
                                animate={{ y: [0, -4, 0] }}
                                transition={{ duration: 2, repeat: Infinity }}
                              >
                                <Star className="w-4 h-4" />
                                Featured
                              </motion.div>
                            )}
                          </motion.div>

                          <motion.div
                            className={`p-8 lg:p-10 flex flex-col justify-center bg-gradient-to-br from-white/50 to-orange-50/30 dark:from-gray-900/50 dark:to-orange-950/20 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            <div className="mb-6">
                              <div className="flex items-start gap-4 mb-4">
                                <motion.div
                                  className="mt-1 p-3 rounded-xl bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800"
                                  whileHover={{ rotate: 10, scale: 1.1 }}
                                >
                                  {item.year.includes("2025") || item.year.includes("Pursuing") ? (
                                    <GraduationCap className="w-6 h-6 text-orange-700 dark:text-orange-300" />
                                  ) : item.year.includes("Intern") || item.title.includes("Intern") ? (
                                    <Briefcase className="w-6 h-6 text-orange-700 dark:text-orange-300" />
                                  ) : (
                                    <Award className="w-6 h-6 text-orange-700 dark:text-orange-300" />
                                  )}
                                </motion.div>
                                <div className="flex-1">
                                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 font-amanojaku">
                                    {item.title}
                                  </h3>
                                  <div className="flex items-center gap-2 mb-3">
                                    <MapPin className="w-5 h-5 text-orange-600 dark:text-orange-500" />
                                    <p className="text-lg text-orange-600 dark:text-orange-500 font-semibold">
                                      {item.institution}
                                    </p>
                                  </div>
                                  <motion.div
                                    className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 text-orange-800 dark:text-orange-200 px-4 py-2 rounded-full text-sm font-bold border border-orange-200 dark:border-orange-800 shadow-sm"
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    <Trophy className="w-4 h-4" />
                                    {item.achievement}
                                  </motion.div>
                                </div>
                              </div>
                            </div>

                            <motion.p
                              className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-6 font-young-serif"
                              initial={{ opacity: 0.8 }}
                              whileHover={{ opacity: 1 }}
                            >
                              {item.description}
                            </motion.p>

                            {item.highlight && (
                              <motion.div
                                className="border-l-4 border-orange-500 pl-6 py-4 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-r-xl mb-4"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                              >
                                <div className="flex items-start gap-3">
                                  <CheckCircle className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                                  <p className="text-base lg:text-lg text-gray-700 dark:text-gray-300 font-semibold font-young-serif">
                                    {item.highlight}
                                  </p>
                                </div>
                              </motion.div>
                            )}

                            {item.position && (
                              <motion.div
                                className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-lg font-medium"
                                whileHover={{ x: 5, backgroundColor: "rgb(248, 113, 113)" }}
                              >
                                <Users className="w-4 h-4" />
                                <span className="font-semibold">Position:</span>
                                <span>{item.position}</span>
                              </motion.div>
                            )}
                          </motion.div>
                        </div>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Journey;
