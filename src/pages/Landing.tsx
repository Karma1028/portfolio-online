import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Typewriter } from "@/components/ui/typewriter";
import { useState, useEffect } from "react";

const Landing = () => {
  const navigate = useNavigate();
  const [showButton, setShowButton] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const typewriterText = "Hi, I'm Tuhin — a Chemical Engineer who discovered a passion for turning raw data into stories that drive decisions. Currently pursuing Big Data Analytics at Goa Institute of Management, I blend engineering precision with analytics thinking to build BI solutions that people actually use. My journey started in chemical engineering labs and led me to crafting Power BI dashboards with 300+ DAX measures, optimizing performance, and helping teams make better decisions faster.";

  const renderTextWithBold = (text: string) => {
    const boldTerms = [
      "Chemical Engineer",
      "raw data into stories that drive decisions",
      "Big Data Analytics",
      "Goa Institute of Management",
      "engineering precision with analytics thinking",
      "BI solutions that people actually use",
      "chemical engineering labs",
      "Power BI dashboards with 300+ DAX measures",
      "optimizing performance",
      "helping teams make better decisions faster"
    ];

    let result = text;
    boldTerms.forEach(term => {
      result = result.replace(new RegExp(term, 'gi'), `<span class="font-bold text-foreground">${term}</span>`);
    });
    return result;
  };

  // Fallback to show button after 3 seconds for faster interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < typewriterText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + typewriterText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 20);

      return () => clearTimeout(timeout);
    } else if (currentIndex === typewriterText.length) {
      setShowButton(true);
    }
  }, [currentIndex, typewriterText]);

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
          title=""
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
            className="text-xs md:text-sm uppercase tracking-wider text-gray-500 mb-4 block font-agitha"
          >
            WELCOME TO MY PORTFOLIO
          </motion.span>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-6 font-amanojaku"
          >
            From Chemical Labs to{" "}
            <motion.span 
              className="text-orange-500 font-white-chalk relative text-4xl md:text-5xl lg:text-6xl"
              animate={{ 
                textShadow: ["0 0 0px rgba(249, 115, 22, 0)", "0 0 20px rgba(249, 115, 22, 0.3)", "0 0 0px rgba(249, 115, 22, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            >
              Data Dashboards
            </motion.span>
          </motion.h1>

          {/* Main Biography with Typewriter Effect */}
          <div className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed font-young-serif">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              dangerouslySetInnerHTML={{ __html: renderTextWithBold(displayText) }}
            />
            {currentIndex < typewriterText.length && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
                className="ml-1"
              >
                |
              </motion.span>
            )}
          </div>

          {/* Creative Interests Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="border-l-4 border-orange-500 bg-gray-50 rounded-lg p-4 mb-8"
          >
            <p className="text-sm md:text-base text-gray-600 leading-relaxed font-young-serif">
              Beyond data and dashboards, I find my <span className="font-bold text-foreground">creative soul in photography</span>, capturing moments that tell stories through my lens. When I'm not coding, you'll find me <span className="font-bold text-foreground">sketching, exploring AI's creative potential</span>, or lost in the rhythm of music that fuels my <span className="font-bold text-foreground">analytical mind</span>.
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
            className={`px-8 py-3 bg-gray-900 text-white rounded-lg font-sans hover:bg-gray-800 transition-all duration-200 flex items-center gap-2 ${!showButton ? 'pointer-events-none' : ''}`}
          >
            EXPLORE MY JOURNEY
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="font-eagle-horizon"
            >
              →
            </motion.span>
          </motion.button>

          {/* Subtle Icon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.3 }}
            transition={{ delay: 4, duration: 1 }}
            className="absolute bottom-4 right-4 text-gray-400 font-white-chalk"
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
