import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import {
  ExternalLink,
  Award,
  Clock,
  Target,
  Zap,
  TrendingUp,
  CheckCircle2,
  BarChart3,
  Database,
  Code,
  Users,
  ArrowRight,
  Sparkles,
  Layers,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  company: string;
  duration: string;
  thumbnail: string;
  shortDescription: string;
  fullDescription: string;
  achievements: string[];
  technologies: string[];
  impact: string;
}

const renderHighlightedText = (text: string) => {
  if (!text) return text;
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <span key={index} className="font-bold text-orange-600 dark:text-orange-400">
          {part.slice(2, -2)}
        </span>
      );
    }
    return part;
  });
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Strategic Insurance Portfolio Optimisation & CLV Forecasting",
      company: "Academic Project",
      duration: "2024",
      thumbnail: "/projects/proj_insurance_clv.png",
      shortDescription:
        "Architected a risk framework isolating high Loss Ratio segments and engineered a Random Forest CLV engine.",
      fullDescription:
        "Engineered a **Random Forest CLV** (Customer Lifetime Value) engine achieving **87% R² accuracy** for precise customer valuation. Automated **K-Means segmentation** of 9,000+ customers into **4 profit-tiers** to optimise retention budgets, and architected a risk framework isolating a **67% higher Loss Ratio** segment to recalibrate underwriting strategy.",
      achievements: [
        "Architected a risk framework isolating a **67% higher Loss Ratio** segment to recalibrate the underwriting strategy.",
        "Automated **K-Means segmentation** of 9,000+ customers into **4 profit-tiers** to optimise retention budgets.",
        "Engineered a **Random Forest CLV engine**, achieving **87% R² accuracy** to ensure precise customer valuation.",
      ],
      technologies: ["Python", "K-Means", "Random Forest", "Machine Learning", "Data Analytics"],
      impact:
        "Optimised **retention budgets** and improved **underwriting strategy** by precisely valuing customers and identifying **high-risk segments**.",
    },
    {
      id: 2,
      title: "SUJAN P&L Report",
      company: "Celebal Technologies",
      duration: "July 2023 - Dec 2023",
      thumbnail: "/projects/proj_powerbi.png",
      shortDescription:
        "End-to-end 54-page Power BI financial reporting solution with advanced DAX measures.",
      fullDescription:
        "Collaborated in a 4-person team to gather requirements for a **comprehensive financial tracker**, translating 1 year of transactional data into **52 distinct KPIs**. Managed the transition of a static Excel tracker into a **live, interactive financial intelligence product**.",
      achievements: [
        "Facilitated **weekly stakeholder sprints** to gather requirements and align the ongoing dashboard development.",
        "Optimised complex DAX queries, reducing Premium plan dashboard **load times by 40%** from 1-2 minutes.",
        "Validated custom YTD, MTD, and FTD logic, ensuring **strict data parity** between Power BI and legacy Excel models.",
        "Directed the transition of a complex static Excel tracker into a **live, interactive financial intelligence product**.",
      ],
      technologies: ["Power BI", "DAX", "Power Query", "Excel", "Data Modeling"],
      impact:
        "Transformed financial reporting process, enabling **real-time decision-making** with optimized response times and **100% data parity**.",
    },
    {
      id: 3,
      title: "Quantitative Market Analysis & Predictive Portfolio",
      company: "Academic Project (Tata Motors)",
      duration: "2024",
      thumbnail: "/projects/proj_market_analysis.png",
      shortDescription:
        "Predictive trading strategy merging XGBoost probabilities and FinBERT sentiment.",
      fullDescription:
        "Architected an **XGBoost predictive model** using 5-year market data for Tata Motors, achieving **54.8% directional accuracy**. Engineered **30+ features** with recursive elimination to isolate **15 core market predictors**. Merged ML probabilities and **FinBERT sentiment** to generate a regime-filtered trading signal.",
      achievements: [
        "Architected an **XGBoost predictive model** using 5-year market data, achieving **54.8% directional accuracy**.",
        "Engineered **30+ features**, using recursive elimination to isolate **15 core market predictors**.",
        "Merged ML probabilities and **FinBERT sentiment** to generate a regime-filtered trading signal.",
      ],
      technologies: ["Python", "XGBoost", "FinBERT", "Machine Learning", "NLP"],
      impact:
        "Developed a robust **predictive trading strategy** that combines technical indicators with sentiment analysis for improved **market timing**.",
    },
    {
      id: 4,
      title: "Pure Storage - KPI Standardization",
      company: "Celebal Technologies",
      duration: "July 2023 - Dec 2023",
      thumbnail: "/projects/proj_datakpi.png",
      shortDescription:
        "Centralized KPI documentation and synchronization across five reporting projects.",
      fullDescription:
        "Directed product alignment within a 5-person team, bridging the gap between **SQL and Power BI developers**. Standardised data frameworks and **centralised business logic** into a shared repository to speed up future reporting efforts.",
      achievements: [
        "Directed product alignment within a 5-person team, bridging the gap between **SQL and Power BI developers**.",
        "Translated backend SQL logic into actionable visualisation requirements for **10+ core KPIs** across five projects.",
        "Authored documentation on data distribution, minimising interpretation errors between **cross-functional stakeholders**.",
        "Standardised data frameworks to ensure all projects utilised a **single, consistent source of truth** for reporting.",
        "Centralised business logic into a **shared repository** to streamline collaboration and speed up future development.",
      ],
      technologies: ["SQL", "Power BI", "DAX", "Documentation", "Data Governance"],
      impact:
        "Established a solid **data governance framework**, creating a single source of truth and resolving ambiguities across **5 projects**.",
    },
    {
      id: 5,
      title: "Digital Portfolio Website",
      company: "Personal Project",
      duration: "2024–2025",
      thumbnail: "/og-image.png",
      shortDescription:
        "Interactive personal analytics portfolio covering the transition from Engineering to Data Analytics.",
      fullDescription:
        "Deployed a **centralised analytics platform**, managing the full lifecycle from concept to live production. Engineered a **low-latency interface** to optimise site performance and ensure a seamless user experience displaying complex data insights.",
      achievements: [
        "Deployed a **centralised analytics platform**, managing the full lifecycle from concept to live production.",
        "Engineered a **low-latency interface** to optimise site performance and ensure a seamless user experience.",
        "Leveraged modern web tools (**React, Tailwind, Framer Motion**) integrated with rapid AI-assisted development workflows.",
      ],
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Netlify"],
      impact:
        "Professional narrative site that showcases **technical versatility**, achieving **near-instant load times** with an optimized architecture.",
    },
    {
      id: 6,
      title: "Hydrogen Production & Carbon Footprint Analysis",
      company: "ONGC R&D Project",
      duration: "2019 - 2023",
      thumbnail: "/projects/proj_hydrogen.png",
      shortDescription:
        "Simulation of biomass gasification process for sustainable hydrogen production.",
      fullDescription:
        "Collaborated with a 5-person team to model **biomass gasification** and evaluate its production feasibility. Designed and executed a **sophisticated data simulation** to validate theoretical hydrogen yields for clean energy applications.",
      achievements: [
        "Collaborated with a 5-person team to model **biomass gasification** and evaluate its production feasibility.",
        "Validated a process for **high-purity hydrogen extraction** that directly supports **carbon reduction targets**.",
        "Delivered a verified **proof-of-concept** to demonstrate the practical viability of this sustainable energy method.",
      ],
      technologies: ["ASPEN Software", "Data Simulation", "Chemical Engineering", "Research Analysis"],
      impact:
        "Contributed to **sustainable energy research**, successfully validating extraction parameters that reduce **industrial carbon footprints**.",
    }
  ];

  const heroProject = projects[0];
  const gridProjects = projects.slice(1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8 md:py-12 font-sans">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-xs md:text-sm uppercase tracking-[0.3em] text-orange-500/80 mb-4 block font-sans"
          >
            Portfolio & Experience
          </motion.span>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 font-amanojaku">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500">
              Projects & Experience
            </span>
          </h1>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto font-young-serif">
            Explore my journey through{" "}
            <span className="font-bold text-foreground">
              data analytics, business intelligence, and engineering projects
            </span>
          </p>
        </motion.div>

        {/* ========= HERO SECTION - Portfolio Project ========= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-12 md:mb-16"
        >
          <div
            className="group relative rounded-3xl overflow-hidden cursor-pointer bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 hover:border-orange-200 dark:hover:border-orange-800 transition-all duration-500 shadow-lg hover:shadow-2xl"
            onClick={() => setSelectedProject(heroProject)}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Hero Image */}
              <div className="relative h-64 lg:h-[380px] overflow-hidden">
                <img
                  src={heroProject.thumbnail}
                  alt={heroProject.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/80 dark:to-gray-900/80 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-white dark:from-gray-900 via-transparent to-transparent lg:hidden" />

                {/* Floating badge */}
                <div className="absolute top-4 left-4">
                  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    <Sparkles className="w-3.5 h-3.5" />
                    Featured Project
                  </div>
                </div>
              </div>

              {/* Hero Content */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <Layers className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-orange-600 dark:text-orange-400 font-semibold">
                    {heroProject.company}
                  </span>
                </div>

                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3 font-amanojaku group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                  {heroProject.title}
                </h2>

                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <p className="text-sm text-gray-500 font-medium">
                    {heroProject.duration}
                  </p>
                </div>

                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-sans">
                  {heroProject.shortDescription}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {heroProject.technologies.slice(0, 5).map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.4 + idx * 0.05 }}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="px-3 py-1 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-semibold border border-orange-200 dark:border-orange-800 hover:border-orange-300 dark:hover:border-orange-700 transition-colors cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {heroProject.technologies.length > 5 && (
                    <span className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 rounded-full text-xs font-semibold">
                      +{heroProject.technologies.length - 5} more
                    </span>
                  )}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sm text-orange-600 dark:text-orange-400 font-medium group-hover:gap-3 transition-all duration-300">
                  <span>View project details</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ========= BENTO GRID - Remaining Projects ========= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {gridProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -6 }}
              className={`${index === 0 ? "md:col-span-2" : ""}`}
            >
              <div
                className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-gray-900 border-2 border-gray-100 dark:border-gray-800 hover:border-orange-200 dark:hover:border-orange-700 transition-all duration-500 shadow-md hover:shadow-xl h-full ${index === 0 ? "min-h-[280px]" : "min-h-[320px]"
                  }`}
                onClick={() => setSelectedProject(project)}
              >
                {index === 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 h-full">
                    <div className="relative h-56 md:h-full overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-white/60 dark:md:to-gray-900/80" />

                      <div className="absolute top-4 left-4">
                        <div className="inline-flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-800 dark:text-white px-3 py-1 rounded-full text-xs font-semibold border border-gray-200 dark:border-gray-700 shadow-sm">
                          <BarChart3 className="w-3 h-3 text-orange-500" />
                          {project.company}
                        </div>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex flex-col justify-center">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2 font-amanojaku group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {project.title}
                      </h3>

                      <div className="flex items-center gap-2 mb-3">
                        <Clock className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-xs text-gray-500 font-medium">
                          {project.duration}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 font-sans line-clamp-3">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 text-orange-700 dark:text-orange-300 rounded-full text-xs font-semibold border border-orange-200 dark:border-orange-800"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400 font-medium group-hover:gap-3 transition-all">
                        <span>Explore project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative h-48 md:h-52 overflow-hidden">
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                      <div className="absolute top-4 left-4">
                        <div className="inline-flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-800 dark:text-white px-3 py-1 rounded-full text-xs font-semibold border border-gray-200 dark:border-gray-700 shadow-sm">
                          {project.id <= 2 ? (
                            <BarChart3 className="w-3 h-3 text-orange-500" />
                          ) : (
                            <Database className="w-3 h-3 text-emerald-500" />
                          )}
                          {project.company}
                        </div>
                      </div>

                      <div className="absolute top-4 right-4">
                        <div className="flex items-center gap-1 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm text-gray-600 dark:text-gray-300 px-3 py-1 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700 shadow-sm">
                          <Clock className="w-3 h-3" />
                          {project.duration}
                        </div>
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="p-5 md:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-2 font-amanojaku group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4 font-sans line-clamp-2">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 bg-gradient-to-r from-orange-50 to-amber-50 dark:from-orange-900/30 dark:to-amber-900/30 text-orange-700 dark:text-orange-300 rounded-full text-[11px] font-semibold border border-orange-200 dark:border-orange-800"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2.5 py-1 bg-gray-50 dark:bg-gray-800 text-gray-500 rounded-full text-[11px] font-medium">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-orange-600 dark:text-orange-400 font-medium group-hover:gap-3 transition-all duration-300">
                        <span>View details</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ========= DETAIL DIALOG (UNTOUCHED) ========= */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto font-sans">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white font-amanojaku">
                    {selectedProject.title}
                  </DialogTitle>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-2">
                    <span className="text-sm md:text-base text-yellow-600 dark:text-yellow-500 font-semibold">
                      {selectedProject.company}
                    </span>
                    <span className="hidden sm:inline text-gray-400">•</span>
                    <span className="text-xs md:text-sm text-gray-500 dark:text-gray-400">
                      {selectedProject.duration}
                    </span>
                  </div>
                </DialogHeader>

                <div className="mt-4 space-y-6">
                  <div className="relative h-48 md:h-64 rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.thumbnail}
                      alt={selectedProject.title}
                      title=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">
                      Overview
                    </h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {renderHighlightedText(selectedProject.fullDescription)}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-5 h-5 text-amber-600" />
                      <h4 className="text-lg md:text-xl font-semibold">
                        Key Achievements
                      </h4>
                    </div>
                    <ul className="space-y-3">
                      {selectedProject.achievements.map((achievement, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start group"
                        >
                          <CheckCircle2 className="text-green-500 mr-3 mt-0.5 flex-shrink-0 w-5 h-5 group-hover:scale-110 transition-transform" />
                          <span className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                            {renderHighlightedText(achievement)}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-5 h-5 text-amber-600" />
                      <h4 className="text-lg md:text-xl font-semibold">
                        Technologies Used
                      </h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 bg-gradient-to-r from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 text-amber-800 dark:text-amber-200 rounded-full text-xs md:text-sm font-semibold border border-amber-200 dark:border-amber-800 shadow-sm cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="border-l-4 border-amber-500 pl-4 py-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-r-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-amber-600" />
                      <h4 className="text-base md:text-lg font-semibold">
                        Business Impact
                      </h4>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      {renderHighlightedText(selectedProject.impact)}
                    </p>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Projects;
