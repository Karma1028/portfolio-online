import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";
import { useState, useEffect } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);

  // Fallback to show button after 8 seconds regardless of typewriter completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 8000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleExploreClick = () => {
    navigate("/about");
  };

  return (
    <div className="min-h-screen w-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Column - Image Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 h-[40vh] md:h-screen relative"
      >
        <img
          src="/lovable-uploads/c89c229d-4bfc-4750-aaa3-a1f29cf5d482.png"
          alt="Tuhin Bhattacharya"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Right Column - Text Content Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12 bg-white"
      >
        <div className="max-w-xl">
          {/* Header */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-4 block"
          >
            WELCOME TO MY PORTFOLIO
          </motion.span>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-bacley"
          >
            From Chemical Labs to{" "}
            <span className="text-orange-500 font-red-bright">Data Dashboards</span>
          </motion.h1>

          {/* Main Biography with Typewriter Effect */}
          <div className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed">
            <Typewriter
              text="Hi, I'm Tuhin — a Chemical Engineer who discovered a passion for turning raw data into stories that drive decisions. Currently pursuing Big Data Analytics at Goa Institute of Management, I blend engineering precision with analytics thinking to build BI solutions that people actually use. My journey started in chemical engineering labs and led me to crafting Power BI dashboards with 300+ DAX measures, optimizing performance, and helping teams make better decisions faster."
              speed={30}
              delay={1.2}
              onComplete={() => setShowButton(true)}
            />
          </div>

          {/* Creative Interests Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="border-l-4 border-orange-500 bg-gray-50 rounded-lg p-4 mb-8"
          >
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Beyond data and dashboards, I find my creative soul in photography, capturing moments that tell stories through my lens. When I'm not coding, you'll find me sketching, exploring AI's creative potential, or lost in the rhythm of music that fuels my analytical mind.
            </p>
          </motion.div>

          {/* Call-to-Action Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: showButton ? 1 : 0, scale: showButton ? 1 : 0.5 }}
            transition={{ delay: showButton ? 0 : 3, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleExploreClick}
            className={`px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 ${!showButton ? 'pointer-events-none' : ''}`}
          >
            EXPLORE MY JOURNEY
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.button>

          {/* Subtle Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 4, duration: 1 }}
            className="absolute bottom-4 right-4 text-gray-400"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1 .34-4.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
              <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0-.34-4.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Landing;
