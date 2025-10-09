import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award, Calendar, MapPin, TrendingUp } from "lucide-react";

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Floating Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/80 shadow-lg" 
          : "bg-transparent"
      } backdrop-blur-sm`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.img
              src="/lovable-uploads/7062933d-18ef-4f0f-8302-0dc84afc1935.png"
              alt="Logo"
              className="h-8 cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate('/hobbies')}
              loading="lazy"
              decoding="async"
            />
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-800 hover:text-gray-600 transition-colors">About</a>
              <a href="#education" className="text-gray-800 hover:text-gray-600 transition-colors">Education</a>
              <a href="#skills" className="text-gray-800 hover:text-gray-600 transition-colors">Skills</a>
              <a href="#projects" className="text-gray-800 hover:text-gray-600 transition-colors">Projects</a>
              <a href="#contact" className="text-gray-800 hover:text-gray-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="md:w-1/2"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
                Hi, I'm Tuhin Bhattacharya
              </h1>
              <div className="text-xl md:text-2xl text-gray-600 mb-8">
                <TypeAnimation
                  sequence={[
                    "I'm a Data Analyst",
                    1000,
                    "I'm a BI Developer",
                    1000,
                    "I'm a Chemical Engineer",
                    1000,
                    "I'm a Problem Solver",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>
              <div className="flex space-x-6 mb-8">
                <a href="https://www.linkedin.com/in/tuhinbhattacharya28" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors" />
                </a>
                <a href="https://www.instagram.com/_threads_of_karma_/" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="w-6 h-6 text-gray-700 hover:text-gray-900 transition-colors" />
                </a>
              </div>
              <a
                href="https://drive.google.com/file/d/10bYUunhRF-u_PckJXV5XY8Pxz73_s2g8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all"
              >
                Download CV
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="md:w-1/2 mt-12 md:mt-0"
            >
              <img
                src="/lovable-uploads/IMG_8915.PNG"
                alt="Profile"
                className="rounded-lg shadow-2xl max-w-md mx-auto object-contain bg-gray-100"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
              Education & Experience
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A journey through continuous learning and professional growth
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto space-y-8">
            <TimelineItem
              year="2025 - 2027"
              title="PGDM - Big Data Analytics"
              institution="Goa Institute of Management, Goa"
              description="Pursuing advanced studies in Big Data Analytics, focusing on business intelligence, data engineering, and analytics product development."
              type="education"
              status="In Progress"
              icon={GraduationCap}
              index={0}
              achievements={[]}
            />

            <TimelineItem
              year="July 2023 - Dec 2023"
              title="Business Intelligence Intern"
              institution="Celebal Technologies"
              description="Contributed to a 4-member team to devise a 54-page Power BI report with 300+ DAX measures. Enhanced report UI with custom visuals and secured 40% reduction in query loading times."
              type="experience"
              status="Completed"
              icon={Briefcase}
              index={1}
              achievements={[
                "300+ DAX measures",
                "40% faster queries",
                "54-page report"
              ]}
            />

            <TimelineItem
              year="2019 - 2023"
              title="B.E. Chemical Engineering"
              institution="Jadavpur University"
              description="Graduated with 8.32 CGPA. Led complex R&D projects including hydrogen production simulation and aqueous retarded acid formulation for ONGC."
              type="education"
              status="Graduated"
              icon={Award}
              index={2}
              achievements={[
                "8.32 CGPA",
                "2 ONGC Projects",
                "Core Committee"
              ]}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ year, title, institution, description, type, status, icon: Icon, index, achievements }) => {
  const typeColors = {
    education: "from-blue-500 to-cyan-500",
    experience: "from-amber-500 to-orange-500"
  };

  const statusColors = {
    "In Progress": "bg-green-100 text-green-700 border-green-300",
    "Completed": "bg-blue-100 text-blue-700 border-blue-300",
    "Graduated": "bg-purple-100 text-purple-700 border-purple-300"
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="w-full"
    >
      <Card className="p-6 md:p-8 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Icon Section */}
          <div className="flex-shrink-0">
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${typeColors[type]} flex items-center justify-center shadow-lg`}>
              <Icon className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${statusColors[status]}`}>
                {status}
              </span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="w-4 h-4 mr-1" />
                {year}
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              {title}
            </h3>

            <div className="flex items-center text-gray-600 mb-4">
              <MapPin className="w-4 h-4 mr-2" />
              <p className="font-medium">{institution}</p>
            </div>

            <p className="text-gray-600 leading-relaxed mb-4">
              {description}
            </p>

            {achievements && achievements.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200">
                {achievements.map((achievement, idx) => (
                  <div key={idx} className="flex items-center gap-1 px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-sm font-medium">
                    <TrendingUp className="w-3 h-3" />
                    {achievement}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
};

export default Portfolio;