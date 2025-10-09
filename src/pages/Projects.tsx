import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { useState } from "react";
import { ExternalLink, Award, Clock, Target, Zap, TrendingUp, CheckCircle2, BarChart3, Database, Code, Users } from "lucide-react";

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

  const projects: Project[] = [
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 py-8 md:py-12">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500">
            Projects & Experience
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my journey through data analytics, business intelligence, and engineering projects
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`${index === 0 ? "md:col-span-2 lg:col-span-1" : ""} ${index === 3 ? "md:col-span-2" : ""}`}
              >
                <Card 
                  className="overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 h-full border-2 hover:border-orange-200 dark:hover:border-orange-800 group"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {project.company}
                    </div>
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center gap-2 text-white text-sm font-semibold">
                        <Award className="w-4 h-4" />
                        <span>View Details</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <BarChart3 className="w-5 h-5 text-orange-500" />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <Clock className="w-4 h-4 text-orange-600 dark:text-orange-500" />
                      <p className="text-sm text-orange-600 dark:text-orange-500 font-semibold">
                        {project.duration}
                      </p>
                    </div>

                    <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-3 mb-4 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gradient-to-r from-orange-100 to-orange-200 dark:from-orange-900 dark:to-orange-800 text-orange-800 dark:text-orange-200 rounded-full text-xs font-semibold border border-orange-200 dark:border-orange-800"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-full text-xs font-semibold">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
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
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="text-lg md:text-xl font-semibold mb-2">Overview</h4>
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Target className="w-5 h-5 text-amber-600" />
                      <h4 className="text-lg md:text-xl font-semibold">Key Achievements</h4>
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
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Zap className="w-5 h-5 text-amber-600" />
                      <h4 className="text-lg md:text-xl font-semibold">Technologies Used</h4>
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
                      <h4 className="text-base md:text-lg font-semibold">Business Impact</h4>
                    </div>
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 italic leading-relaxed">
                      {selectedProject.impact}
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
