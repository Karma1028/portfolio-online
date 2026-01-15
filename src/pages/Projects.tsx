import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useState, useRef } from "react";
import { ExternalLink, Award, Clock, Target, Zap, TrendingUp, CheckCircle2, BarChart3, Database, Code, Users, X, Sparkles } from "lucide-react";

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

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start 0.3", "end 0.7"] });
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  const projects: Project[] = [
    {
      id: 5,
      title: "This Portfolio Website",
      company: "Self-initiated • built with Vive Coding",
      duration: "2024–2025",
      thumbnail: "/og-image.png",
      shortDescription: "Designed and launched a recruiter-focused digital portfolio to showcase my transition from Chemical Engineering to Data Analytics. Built with React + TypeScript, Vite, Tailwind and Framer Motion.",
      fullDescription: "Designed and launched a recruiter-focused digital portfolio to showcase my transition from Chemical Engineering to Data Analytics. Built with React + TypeScript, Vite, Tailwind and Framer Motion. I created the first drafts using bolt.new, refined visuals in lovable.ai, edited and formatted exports with Cursor AI (using dev.v0 prompts), pushed changes through a GitHub export/ZIP, and deployed the final site on Netlify. I authored all copy, selected and edited images, and handled the final site delivery.",
      achievements: [
        "Turned generative front-end drafts into a polished, deployable React portfolio (bolt.new → lovable.ai → Cursor AI → GitHub → Netlify)",
        "Built an optimized gallery (responsive images, lazy-loading and a 6-image rotating preview) and applied targeted front-end edits to keep the site visually rich but light-weight",
        "Managed end-to-end delivery without paid subscriptions (used free APIs and free-tier platform features) and solved hosting limits by deploying on Netlify",
      ],
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "Framer Motion", "Netlify", "bolt.new", "lovable.ai", "Cursor AI (dev.v0 prompts)"],
      impact: "Professional narrative site that showcases my transition journey and technical capabilities while demonstrating proficiency with modern AI-assisted development workflows."
    },
    {
      id: 1,
      title: "SUJAN P&L Report",
      company: "Celebal Technologies",
      duration: "July 2023 - Dec 2023",
      thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop",
      shortDescription: "Comprehensive 54-page Power BI financial reporting solution with advanced DAX measures and time intelligence.",
      fullDescription: "Led the development of an enterprise-grade Power BI Profit & Loss reporting solution for SUJAN, transforming static financial reporting into a dynamic, interactive business intelligence platform. The solution empowered leadership with real-time insights and reduced query response times significantly.",
      achievements: [
        "Contributed to a 4-member team to devise a 54-page Power BI report",
        "Constructed report with over 300 DAX measures",
        "Enhanced the report UI with custom visuals and dynamic slicers for intuitive data exploration",
        "Secured a 40% reduction in query loading times across 10+ queries by inspecting and refining DAX measures",
        "Implemented advanced time-intelligence functions to enable comprehensive period-over-period financial analysis",
        "Delivered a robust BI solution that replaced static reporting and empowered leadership with dynamic, actionable insights"
      ],
      technologies: ["Power BI", "DAX", "Power Query", "SQL", "Data Modeling"],
      impact: "Transformed financial reporting process, enabling faster decision-making and improved operational efficiency across the organization."
    },
    {
      id: 2,
      title: "Pure Storage - Internal Project",
      company: "Celebal Technologies",
      duration: "July 2023 - Dec 2023",
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      shortDescription: "Comprehensive KPI standardization and documentation project for enterprise data integrity.",
      fullDescription: "Spearheaded an internal initiative to standardize metrics and establish a single source of truth across five projects. Created reproducible documentation that enhanced project accessibility and accelerated future development cycles.",
      achievements: [
        "Teamed up with five members to define 150+ KPIs across five projects in two weeks",
        "Translated over 50 complex SQL/DAX queries into clear documentation, ensuring project clarity and on-time delivery",
        "Authored a comprehensive knowledge base that enhanced project accessibility and understanding for all team members",
        "Drove the standardisation of metrics to establish a single source of truth, ensuring data integrity across all projects",
        "Enabled effective team collaboration and accelerated future development by creating a centralised repository of business logic"
      ],
      technologies: ["SQL", "DAX", "Documentation", "KPI Design", "Data Governance"],
      impact: "Established data governance framework that improved cross-team collaboration and reduced redundancy in metric definitions."
    },
    {
      id: 3,
      title: "Hydrogen Production & Carbon Footprint Analysis",
      company: "ONGC R&D Project",
      duration: "2019 - 2023",
      thumbnail: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2940&auto=format&fit=crop",
      shortDescription: "Sustainability simulation project for hydrogen production using biomass gasification.",
      fullDescription: "Designed and executed a sophisticated data simulation of biomass gasification process using ASPEN software as part of a research initiative to develop sustainable hydrogen production methods and reduce carbon footprint.",
      achievements: [
        "Designed a sophisticated data simulation of biomass gasification in a 5-member team using ASPEN software",
        "Validated a method to extract 99% pure hydrogen by analysing simulation data",
        "Proved a process to reduce the carbon footprint through sustainable hydrogen production",
        "Delivered a data-backed proof-of-concept for a viable and sustainable hydrogen production method"
      ],
      technologies: ["ASPEN Software", "Data Simulation", "Chemical Engineering", "Research & Development"],
      impact: "Contributed to sustainable energy research with potential applications in clean hydrogen production and carbon footprint reduction."
    },
    {
      id: 4,
      title: "Aqueous Retarded Acid Formulation",
      company: "ONGC R&D Project",
      duration: "2019 - 2023",
      thumbnail: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop",
      shortDescription: "R&D project to develop optimal acid formulation for limestone reservoir applications.",
      fullDescription: "Participated in a 6-member R&D team to identify and develop an optimal acid formulation solution for limestone reservoirs in oil and gas production, combining extensive research analysis with practical feasibility assessment.",
      achievements: [
        "Identified an optimal solution to a complex engineering challenge as part of a 6-member R&D team",
        "Defined an effective acid formulation for limestone reservoirs by synthesising extensive research data",
        "Assessed the solution's technical feasibility by gaining hands-on expertise in oil and gas production techniques"
      ],
      technologies: ["Chemical Engineering", "Research Methodology", "Data Synthesis", "Technical Analysis"],
      impact: "Developed practical solution for enhanced oil recovery with potential applications in petroleum engineering."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/20 py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-small-black/[0.03] dark:bg-grid-small-white/[0.03]"></div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-16"
        >
          <motion.div style={{ opacity: titleOpacity }} className="inline-flex items-center gap-2 mb-6">
            <Sparkles className="w-5 h-5 text-orange-500" />
            <span className="text-sm font-semibold text-orange-600 dark:text-orange-500 uppercase tracking-wider">
              Featured Work
            </span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500 font-amanojaku">
            Projects & Experience
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my journey through <span className="font-bold text-foreground">data analytics, business intelligence, and engineering projects</span> that showcase technical expertise and real-world impact
          </p>
        </motion.div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-max">
            {projects.map((project, index) => {
              const isExpanded = expandedId === project.id;
              const isFeatured = index === 0 || index === 4;

              return (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  layout
                  className={`${isFeatured && index === 0 ? "md:col-span-2 lg:col-span-1 md:row-span-2" : ""} ${isFeatured && index === 4 ? "md:col-span-2" : ""}`}
                >
                  <motion.div
                    layoutId={`project-${project.id}`}
                    onClick={() => setExpandedId(isExpanded ? null : project.id)}
                    className="h-full cursor-pointer"
                  >
                    <Card
                      className={`overflow-hidden hover:shadow-2xl transition-all duration-300 h-full border border-gray-200/60 dark:border-gray-800/60 backdrop-blur-sm hover:border-orange-300 dark:hover:border-orange-700 group relative bg-gradient-to-br from-white/80 to-orange-50/30 dark:from-gray-900/80 dark:to-orange-950/20 hover:from-white hover:to-orange-50/60 dark:hover:from-gray-800 dark:hover:to-orange-900/40 ${
                        isExpanded ? "ring-2 ring-orange-500 shadow-2xl" : ""
                      }`}
                    >
                      <motion.div className="relative h-64 overflow-hidden">
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy"
                        />
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.3 }}
                        />

                        <motion.div
                          className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                          whileHover={{ scale: 1.05 }}
                        >
                          {project.company}
                        </motion.div>

                        <AnimatePresence>
                          {!isExpanded && (
                            <motion.div
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                              <div className="flex items-center gap-2 text-white text-sm font-semibold">
                                <Award className="w-4 h-4" />
                                <span>View Details</span>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>

                      <motion.div
                        className="p-6"
                        layout
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      >
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-2 flex-1">
                            <BarChart3 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {project.title}
                            </h3>
                          </div>
                          {isExpanded && (
                            <motion.button
                              initial={{ scale: 0, rotate: -90 }}
                              animate={{ scale: 1, rotate: 0 }}
                              onClick={(e) => {
                                e.stopPropagation();
                                setExpandedId(null);
                              }}
                              className="flex-shrink-0 p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                            >
                              <X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
                            </motion.button>
                          )}
                        </div>

                        <div className="flex items-center gap-2 mb-4">
                          <Clock className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                          <p className="text-sm text-orange-600 dark:text-orange-500 font-semibold">
                            {project.duration}
                          </p>
                        </div>

                        <p className={`text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed ${!isExpanded ? "line-clamp-3" : ""}`}>
                          {project.id === 5 ? (
                            <>
                              Designed and launched a <span className="font-bold text-foreground">recruiter-focused digital portfolio</span> to showcase my transition from <span className="font-bold text-foreground">Chemical Engineering to Data Analytics</span>. Built with <span className="font-bold text-foreground">React + TypeScript, Vite, Tailwind and Framer Motion</span>.
                            </>
                          ) : (
                            project.shortDescription
                          )}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, isExpanded ? undefined : 3).map((tech, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.05 }}
                              whileHover={{ scale: 1.05 }}
                              className="px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 text-orange-800 dark:text-orange-200 rounded-full text-xs font-semibold border border-orange-200 dark:border-orange-800"
                            >
                              {tech}
                            </motion.span>
                          ))}
                          {!isExpanded && project.technologies.length > 3 && (
                            <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-semibold">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>

                        <AnimatePresence>
                          {isExpanded && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                              className="pt-6 border-t border-gray-200 dark:border-gray-700 space-y-6"
                            >
                              <div>
                                <div className="flex items-center gap-2 mb-4">
                                  <Target className="w-5 h-5 text-orange-600" />
                                  <h4 className="text-lg font-semibold">Key Achievements</h4>
                                </div>
                                <ul className="space-y-3">
                                  {project.achievements.map((achievement, idx) => (
                                    <motion.li
                                      key={idx}
                                      initial={{ opacity: 0, x: -20 }}
                                      animate={{ opacity: 1, x: 0 }}
                                      transition={{ delay: idx * 0.1 }}
                                      className="flex items-start gap-3 group"
                                    >
                                      <CheckCircle2 className="text-green-500 w-5 h-5 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                                      <span className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                        {achievement}
                                      </span>
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>

                              <div className="border-l-4 border-orange-500 pl-4 py-3 bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-r-lg">
                                <div className="flex items-start gap-3">
                                  <TrendingUp className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                                  <div>
                                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-1">Business Impact</h4>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                      {project.impact}
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div>
                                <h4 className="text-lg font-semibold mb-3 flex items-center gap-2">
                                  <Zap className="w-5 h-5 text-orange-600" />
                                  Full Description
                                </h4>
                                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                                  {project.id === 5 ? (
                                    <>
                                      Designed and launched a recruiter-focused digital portfolio to showcase my transition from <span className="font-bold text-foreground">Chemical Engineering to Data Analytics</span>. Built with <span className="font-bold text-foreground">React + TypeScript, Vite, Tailwind and Framer Motion</span>. I created the first drafts using <span className="font-bold text-foreground">bolt.new</span>, refined visuals in <span className="font-bold text-foreground">lovable.ai</span>, edited and formatted exports with <span className="font-bold text-foreground">Cursor AI (using dev.v0 prompts)</span>, pushed changes through a GitHub export/ZIP, and deployed the final site on <span className="font-bold text-foreground">Netlify</span>. I authored all copy, selected and edited images, and handled the final site delivery.
                                    </>
                                  ) : (
                                    project.fullDescription
                                  )}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
