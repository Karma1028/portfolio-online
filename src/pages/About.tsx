import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Spotlight } from "@/components/ui/spotlight";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { SplineScene } from "@/components/ui/splite";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Download, Sparkles, TrendingUp, Award, Users } from "lucide-react";

const About = () => {
  const [showStoryDialog, setShowStoryDialog] = useState(false);

  const storyMilestones = [
    {
      icon: Sparkles,
      title: "The Beginning",
      content: "A chemical engineer who found patterns more fascinating than processes",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: TrendingUp,
      title: "The Transformation",
      content: "Where engineering precision met data storytelling at Celebal Technologies",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "The Craft",
      content: "Building dashboards that don't just show data—they tell business stories",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/10 to-background p-4 md:p-8 space-y-8 md:space-y-12">
      {/* Hero Story Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Card className="w-full h-[400px] md:h-[500px] bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden border-none shadow-2xl">
          <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-20"
            fill="white"
          />

          <div className="flex flex-col md:flex-row h-full">
            <div className="flex-1 p-6 md:p-8 relative z-10 flex flex-col justify-center">
              <motion.h1 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-2"
              >
                Hey, Tuhin here
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base md:text-lg text-neutral-400 mb-4"
              >
                A journey from molecules to metrics
              </motion.p>

              <div className="mt-2 text-lg md:text-xl text-neutral-300">
                <TypeAnimation
                  sequence={[
                    "I'm a storyteller with data",
                    1500,
                    "I'm a problem solver",
                    1500,
                    "I'm a BI architect",
                    1500,
                    "I'm a product thinker",
                    1500,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </div>

              <div className="flex space-x-6 mt-6 md:mt-8">
                <motion.a 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  href="https://www.linkedin.com/in/tuhinbhattacharya28" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-5 h-5 md:w-6 md:h-6 text-neutral-300 hover:text-white transition-colors" />
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  href="https://www.instagram.com/_threads_of_karma_/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="w-5 h-5 md:w-6 md:h-6 text-neutral-300 hover:text-white transition-colors" />
                </motion.a>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://drive.google.com/file/d/10bYUunhRF-u_PckJXV5XY8Pxz73_s2g8/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 mt-6 md:mt-8 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all text-sm w-fit shadow-lg"
              >
                <Download className="w-4 h-4" />
                Download CV
              </motion.a>
            </div>
            <div className="flex-1 relative hidden md:block">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Story Milestones */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {storyMilestones.map((milestone, idx) => (
          <motion.div
            key={milestone.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * idx, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <Card className="h-full p-6 hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-background to-secondary/30 border-2 border-border hover:border-accent cursor-pointer group">
              <motion.div
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.6 }}
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${milestone.gradient} flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl`}
              >
                <milestone.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-foreground">{milestone.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{milestone.content}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Main Story Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          whileHover={{ scale: 1.03, y: -5 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative overflow-hidden rounded-xl md:col-span-1 group cursor-pointer"
          onClick={() => setShowStoryDialog(true)}
        >
          <div className="h-[300px] md:h-[400px] overflow-hidden rounded-xl">
            <div className="relative h-full">
              <img
                src="/lovable-uploads/24c15b05-eb51-49b1-b688-8a35b51a7018.png"
                alt="Tuhin Bhattacharya"
                className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-110 bg-muted"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500"
              >
                <div className="flex items-center justify-center gap-2 text-white bg-accent px-4 py-2.5 rounded-full font-bold text-sm shadow-xl">
                  <Users className="w-4 h-4" />
                  Discover My Story
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          whileHover={{ scale: 1.01, y: -3 }}
          onClick={() => setShowStoryDialog(true)}
          className="cursor-pointer md:col-span-2"
        >
          <Card className="h-[300px] md:h-[400px] p-6 md:p-8 hover:bg-accent/5 transition-all duration-500 overflow-auto rounded-xl border-2 border-accent/50 hover:border-accent bg-gradient-to-br from-background to-accent/10 shadow-xl hover:shadow-2xl">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-5"
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div 
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.5 }}
                  className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/30"
                >
                  <Sparkles className="w-6 h-6 text-accent" />
                </motion.div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">The Journey</h2>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground text-sm md:text-base leading-relaxed"
              >
                Some stories begin in lecture halls filled with chemical equations. Mine started there too—but somewhere between hydrogen simulations and ONGC projects, I discovered something more compelling: <span className="text-foreground font-semibold">the patterns hidden in data</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="border-l-4 border-accent pl-5 py-3 bg-gradient-to-r from-accent/10 to-transparent rounded-r-lg"
              >
                <p className="text-foreground text-sm md:text-base font-medium leading-relaxed">
                  At Celebal Technologies, I transformed raw business data into a <span className="text-accent font-bold">54-page Power BI narrative</span> with 300+ DAX measures—not just a report, but a business story that executives actually wanted to read. Query times dropped 40%, but more importantly, decisions got faster.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-muted-foreground text-sm md:text-base leading-relaxed"
              >
                Now at <span className="text-foreground font-semibold">Goa Institute of Management</span>, I'm sharpening the craft—learning how to architect data products that scale, tell stories, and drive real impact. Because the best analytics don't just answer questions; <span className="text-accent font-semibold italic">they change how people think</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="flex items-center gap-2 text-sm text-accent font-medium pt-2"
              >
                <TrendingUp className="w-4 h-4" />
                <span>Click to read the full story →</span>
              </motion.div>
            </motion.div>
          </Card>
        </motion.div>
      </div>

      {/* Full Story Dialog */}
      <Dialog open={showStoryDialog} onOpenChange={setShowStoryDialog}>
        <DialogContent className="max-w-3xl max-h-[85vh] overflow-auto">
          <div className="space-y-6 py-4">
            <div className="flex items-center gap-3 border-b pb-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/30">
                <Sparkles className="w-7 h-7 text-accent" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold">The Complete Journey</h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-base">
                <span className="text-lg font-bold text-foreground block mb-2">Chapter 1: The Chemical Engineer Who Loved Patterns</span>
                My story starts at Jadavpur University, where I spent four years learning to break down complex chemical systems into their fundamental parts. I graduated with an 8.32 CGPA, led R&D projects for ONGC, and built hydrogen production simulations. But somewhere in those spreadsheets and simulations, I found something more fascinating than molecules—<span className="text-foreground font-semibold">I found data patterns that told stories</span>.
              </p>

              <p className="text-base">
                <span className="text-lg font-bold text-foreground block mb-2">Chapter 2: The Pivot</span>
                That realization led me to <span className="text-accent font-semibold">Celebal Technologies</span>, where I joined as a Business Intelligence Intern. Here's where the transformation happened. I was thrown into building a massive P&L report for stakeholders who needed clarity, not complexity.
              </p>

              <div className="bg-accent/5 border-l-4 border-accent rounded-r-xl p-5 my-4">
                <p className="text-foreground font-semibold text-base mb-3">What I Built:</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <Award className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>A <span className="font-bold">54-page Power BI dashboard</span> powered by 300+ DAX measures and advanced time intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Performance optimization that <span className="font-bold">cut query times by 40%</span></span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Documentation for 150+ KPIs and 200+ SQL/DAX queries—making the invisible visible</span>
                  </li>
                </ul>
              </div>

              <p className="text-base">
                But the real achievement? <span className="text-foreground font-semibold">Executives started using it</span>. Not because they had to, but because it made their decisions easier and faster. That's when I learned: great analytics isn't about complexity—it's about clarity wrapped in a compelling narrative.
              </p>

              <p className="text-base">
                <span className="text-lg font-bold text-foreground block mb-2">Chapter 3: Sharpening the Craft</span>
                Now I'm at <span className="text-accent font-semibold">Goa Institute of Management</span>, pursuing a PGDM in Big Data Analytics. I'm learning to architect data products that don't just solve today's problems—they scale with tomorrow's ambitions. Business intelligence, data engineering, analytics product development—I'm building the toolkit to create systems that matter.
              </p>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/30">
                <p className="text-lg font-bold text-foreground mb-3">My Philosophy</p>
                <p className="text-base text-foreground italic">
                  "The best dashboards aren't just data visualizations—they're business conversations. They don't just answer 'what happened?'—they inspire 'what should we do next?' I combine engineering precision with storytelling intuition to build analytics that people actually care about."
                </p>
              </div>

              <p className="text-base">
                <span className="text-lg font-bold text-foreground block mb-2">What I Bring</span>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-muted/30 rounded-lg p-4 border border-border">
                  <p className="font-semibold text-foreground mb-2">Technical Toolkit</p>
                  <p className="text-sm">Power BI, DAX, Power Query, SQL, Python, Excel, data modeling, ETL pipelines</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 border border-border">
                  <p className="font-semibold text-foreground mb-2">Product Mindset</p>
                  <p className="text-sm">KPI design, performance tuning, user-first dashboards, documentation that scales</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 border border-border">
                  <p className="font-semibold text-foreground mb-2">Operator Mentality</p>
                  <p className="text-sm">Bias for execution, reproducible systems, long-term maintainability</p>
                </div>
                <div className="bg-muted/30 rounded-lg p-4 border border-border">
                  <p className="font-semibold text-foreground mb-2">Communication</p>
                  <p className="text-sm">Translate complexity into clarity, stakeholder-ready insights</p>
                </div>
              </div>

              <div className="text-center pt-4 border-t">
                <p className="text-foreground font-semibold text-lg mb-2">Let's Build Something That Matters</p>
                <p className="text-sm">I'm looking for opportunities where data drives decisions and dashboards tell stories worth following.</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default About;
