import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Calendar,
  Award,
  Briefcase,
  GraduationCap,
  MapPin,
  Trophy,
  Star,
  CheckCircle,
  Users,
  Sparkles,
  ArrowDown,
} from "lucide-react";

const Journey = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const journeyData = [
    {
      year: "2008 - 2016",
      title: "Secondary Education",
      institution: "Bankura Zilla School",
      description:
        "Completed secondary education with outstanding academic results, demonstrating early excellence in analytical and problem-solving skills.",
      image: "/journey/edu_secondary.png",
      achievement: "93.85%",
      highlight: "Foundation years building analytical thinking",
      icon: CheckCircle,
      accentColor: "from-amber-500 to-yellow-500",
      badgeBg: "bg-amber-50 dark:bg-amber-950/40",
    },
    {
      year: "2016 - 2018",
      title: "Higher Secondary Education",
      institution: "Bankura Banga Vidyalaya",
      description:
        "Completed higher secondary education in Science stream with exceptional academic performance.",
      image: "/journey/edu_highschool.png",
      achievement: "90.00%",
      highlight: "Strong foundation in science and mathematics",
      icon: Star,
      accentColor: "from-rose-500 to-pink-500",
      badgeBg: "bg-rose-50 dark:bg-rose-950/40",
    },
    {
      year: "Academic Projects",
      title: "Research & Development",
      institution: "ONGC R&D Projects",
      description:
        "Hydrogen Production & Carbon Footprint Analysis: Designed sophisticated biomass gasification simulation using ASPEN, validated 99% pure hydrogen extraction. Aqueous Retarded Acid Formulation: Identified optimal solution for limestone reservoirs in 6-member R&D team.",
      image: "/journey/edu_research.png",
      achievement: "2 Major Projects",
      highlight:
        "Combined engineering domain knowledge with analytics to solve practical problems",
      icon: Sparkles,
      accentColor: "from-emerald-500 to-teal-500",
      badgeBg: "bg-emerald-50 dark:bg-emerald-950/40",
    },
    {
      year: "2019 - 2023",
      title: "B.E. Chemical Engineering",
      institution: "Jadavpur University",
      description:
        "Graduated with 8.32 CGPA. Led complex R&D projects including hydrogen production simulation and aqueous retarded acid formulation for ONGC. Core Committee Member directing Logistics and Design team for departmental centenary celebration.",
      image: "/journey/edu_jadavpur.png",
      achievement: "8.32 CGPA",
      position:
        "Core Committee Member - Chemical Engineering Centenary Celebration",
      icon: Award,
      accentColor: "from-purple-500 to-violet-500",
      badgeBg: "bg-purple-50 dark:bg-purple-950/40",
    },
    {
      year: "July 2023 - Dec 2023",
      title: "Business Intelligence Intern",
      institution: "Celebal Technologies",
      description:
        "Contributed to a 4-member team to devise a 54-page Power BI report with 300+ DAX measures. Enhanced report UI with custom visuals and secured 40% reduction in query loading times. Implemented advanced time-intelligence functions for comprehensive financial analysis.",
      image: "/journey/edu_internship.png",
      achievement: "6 Months Internship",
      highlight:
        "Delivered robust BI solution that replaced static reporting and empowered leadership with dynamic insights.",
      icon: Briefcase,
      accentColor: "from-blue-500 to-cyan-500",
      badgeBg: "bg-blue-50 dark:bg-blue-950/40",
    },
    {
      year: "2025 - 2027",
      title: "PGDM - Big Data Analytics",
      institution: "Goa Institute of Management, Sanquelim, Goa",
      description:
        "Pursuing advanced studies in Big Data Analytics, focusing on business intelligence, data engineering, and analytics product development.",
      image: "/journey/edu_gim.png",
      achievement: "Pursuing",
      position:
        "Junior Core Committee Member, Cognition - The Data Science & Analytics club",
      icon: GraduationCap,
      accentColor: "from-orange-500 to-amber-500",
      badgeBg: "bg-orange-50 dark:bg-orange-950/40",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-12 px-4 md:px-6 overflow-hidden">
      {/* Hero Header */}
      <div className="container mx-auto max-w-6xl mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-orange-500/80 mb-4 block font-sans"
          >
            Education & Career
          </motion.span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-amanojaku">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500">
              My Journey
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto font-young-serif leading-relaxed"
          >
            From chemical engineering labs to data analytics — each chapter
            shaped who I am today
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-8"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown className="w-6 h-6 text-orange-400/50 mx-auto" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Timeline Section */}
      <div
        ref={containerRef}
        className="container mx-auto max-w-5xl relative"
      >
        {/* Center Timeline Line - Desktop only */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block">
          <div className="absolute inset-0 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700/30 to-transparent" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 w-px bg-gradient-to-b from-orange-500 via-orange-400 to-amber-500"
          />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 w-3 -translate-x-[5px] bg-gradient-to-b from-orange-500/20 via-orange-400/10 to-amber-500/5 blur-sm"
          />
        </div>

        {/* Mobile Timeline Line */}
        <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px lg:hidden">
          <div className="absolute inset-0 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-gray-700/30 to-transparent" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute top-0 w-px bg-gradient-to-b from-orange-500 via-orange-400 to-amber-500"
          />
        </div>

        {/* Journey Cards */}
        <div className="space-y-16 md:space-y-24">
          {journeyData.map((item, index) => {
            const isLeft = index % 2 === 0;
            const IconComponent = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                {/* Timeline Dot - Desktop */}
                <div className="absolute left-1/2 -translate-x-1/2 top-8 z-20 hidden lg:flex">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, type: "spring", stiffness: 300 }}
                    className="relative"
                  >
                    <div
                      className={`w-12 h-12 rounded-full bg-gradient-to-br ${item.accentColor} flex items-center justify-center shadow-lg`}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <motion.div
                      animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.accentColor} opacity-20`}
                    />
                  </motion.div>
                </div>

                {/* Timeline Dot - Mobile */}
                <div className="absolute left-6 md:left-8 -translate-x-1/2 top-6 z-20 lg:hidden">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className={`w-8 h-8 rounded-full bg-gradient-to-br ${item.accentColor} flex items-center justify-center shadow-lg`}
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                  </motion.div>
                </div>

                {/* Card Content */}
                <div
                  className={`lg:w-[calc(50%-40px)] ${isLeft ? "lg:mr-auto lg:pr-4" : "lg:ml-auto lg:pl-4"
                    } ml-14 md:ml-16 lg:ml-0`}
                >
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-500 shadow-md hover:shadow-xl"
                  >
                    {/* Image Section */}
                    <div className="relative h-48 md:h-56 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                      {/* Year Badge */}
                      <div className="absolute top-4 left-4">
                        <div
                          className={`inline-flex items-center gap-2 bg-gradient-to-r ${item.accentColor} text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg`}
                        >
                          <Calendar className="w-3.5 h-3.5" />
                          {item.year}
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {index < 2 && (
                        <div className="absolute top-4 right-4">
                          <div className="inline-flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-800 dark:text-white px-3 py-1 rounded-full text-xs font-semibold border border-gray-200 dark:border-gray-700 shadow-sm">
                            <Star className="w-3 h-3 text-amber-500" />
                            Featured
                          </div>
                        </div>
                      )}

                      {/* Achievement floating over image */}
                      <div className="absolute bottom-4 right-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.4, type: "spring" }}
                          className="flex items-center gap-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-900 dark:text-white px-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 shadow-lg"
                        >
                          <Trophy className="w-4 h-4 text-amber-500" />
                          <span className="font-bold text-sm">
                            {item.achievement}
                          </span>
                        </motion.div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="p-6 md:p-7">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 font-amanojaku group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                        {item.title}
                      </h3>

                      <div className="flex items-center gap-2 mb-4">
                        <MapPin className="w-4 h-4 text-orange-500" />
                        <p className="text-sm text-orange-600 dark:text-orange-400 font-semibold">
                          {item.institution}
                        </p>
                      </div>

                      <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-5 font-young-serif">
                        {item.description}
                      </p>

                      {item.highlight && (
                        <div className="border-l-4 border-orange-500 pl-4 py-3 mb-4 bg-orange-50 dark:bg-orange-950/20 rounded-r-xl">
                          <div className="flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-gray-700 dark:text-gray-300 font-semibold font-young-serif">
                              {item.highlight}
                            </p>
                          </div>
                        </div>
                      )}

                      {item.position && (
                        <motion.div
                          whileHover={{ x: 4 }}
                          className="inline-flex items-center gap-2 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-4 py-2 rounded-lg font-medium"
                        >
                          <Users className="w-3.5 h-3.5 text-orange-500" />
                          <span className="font-semibold">{item.position}</span>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* End marker */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mt-16"
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />
        </motion.div>
      </div>
    </div>
  );
};

export default Journey;
