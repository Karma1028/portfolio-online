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
                className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-2 font-amanojaku"
              >
                Hey, Tuhin here
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-base md:text-lg text-neutral-400 mb-4 font-young-serif"
              >
                A journey from molecules to metrics
              </motion.p>

              <div className="mt-2 text-lg md:text-xl text-neutral-300 font-red-bright">
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
                href="https://drive.google.com/file/d/1nUGx0WYu_wtjeWonN4t6tRF-e86HdMyS/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 mt-6 md:mt-8 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-all text-sm w-fit shadow-lg font-sans"
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

      {/* About Description */}
      <div className="text-center mb-12">
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-4xl mx-auto leading-relaxed font-young-serif">
          My story is one of <span className="font-bold text-foreground">transformation</span>—from analyzing <span className="font-bold text-foreground">chemical processes</span> to crafting <span className="font-bold text-foreground">business intelligence solutions</span>.
          Each phase of my journey has been about <span className="font-bold text-foreground">finding patterns, solving problems, and telling stories through data</span>.
          The <span className="font-bold text-foreground">precision of chemical engineering</span> meets the <span className="font-bold text-foreground">creativity of data storytelling</span> in everything I build.
        </p>
      </div>

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
            <Card className="h-full p-6 bg-gradient-to-br from-background to-secondary/30 border-2 border-border">
              <motion.div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${milestone.gradient} flex items-center justify-center mb-4 shadow-lg`}
              >
                <milestone.icon className="w-7 h-7 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold mb-2 text-foreground font-amanojaku">{milestone.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-architext mb-4">{milestone.content}</p>
              <div className="mt-6 p-4 bg-accent/10 rounded-lg border-l-4 border-accent">
                <p className="text-base text-accent font-semibold font-autumn-brush mb-3">
                  {milestone.title === "The Beginning" && "Chemical Engineering Foundation"}
                  {milestone.title === "The Transformation" && "Data Analytics Transition"}
                  {milestone.title === "The Craft" && "BI Solution Development"}
                </p>
                <p className="text-base text-muted-foreground leading-relaxed font-young-serif">
                  {milestone.title === "The Beginning" && (
                    <>
                      Building analytical thinking through chemical processes and research methodologies. This foundation in <span className="font-bold text-foreground">systematic problem-solving and data analysis</span> became the cornerstone of my transition to business intelligence. The rigorous approach to <span className="font-bold text-foreground">hypothesis testing and data validation</span> in chemical engineering directly translates to creating reliable business insights.
                    </>
                  )}
                  {milestone.title === "The Transformation" && (
                    <>
                      Applying engineering precision to business intelligence and data storytelling. Leveraging chemical engineering's <span className="font-bold text-foreground">systematic approach</span> to solve complex business problems through data-driven insights. The transition from molecular analysis to business metrics was natural, as both require the same <span className="font-bold text-foreground">analytical rigor and attention to detail</span>.
                    </>
                  )}
                  {milestone.title === "The Craft" && (
                    <>
                      Creating dashboards that drive decisions and tell compelling business stories. Combining technical expertise with storytelling to transform raw data into <span className="font-bold text-foreground">actionable business narratives</span>. The goal is to make complex data <span className="font-bold text-foreground">accessible and actionable</span> for stakeholders at all levels.
                    </>
                  )}
                </p>
              </div>
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
            <div className="relative h-full bg-transparent">
              <img
                src="/lovable-uploads/24c15b05-eb51-49b1-b688-8a35b51a7018.png"
                alt="Tuhin Bhattacharya"
                title=""
                className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-110"
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
                <h2 className="text-2xl md:text-3xl font-bold text-foreground font-amanojaku">The Journey</h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-muted-foreground text-sm md:text-base leading-relaxed font-young-serif"
              >
                Some stories begin in lecture halls filled with chemical equations. Mine started there too—but somewhere between hydrogen simulations and ONGC projects, I discovered something more compelling: <span className="text-foreground font-semibold">the patterns hidden in data</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="border-l-4 border-accent pl-5 py-3 bg-gradient-to-r from-accent/10 to-transparent rounded-r-lg"
              >
                <p className="text-foreground text-sm md:text-base font-medium leading-relaxed font-young-serif">
                  At Celebal Technologies, I transformed raw business data into a <span className="text-accent font-bold">54-page Power BI narrative</span> with 300+ DAX measures—not just a report, but a business story that executives actually wanted to read. Query times dropped 40%, but more importantly, decisions got faster.
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-muted-foreground text-sm md:text-base leading-relaxed font-young-serif"
              >
                Now at <a href="https://gim.ac.in" target="_blank" rel="noopener noreferrer" className="text-foreground font-semibold hover:text-accent underline decoration-foreground/50 hover:decoration-accent transition-all duration-200">Goa Institute of Management</a>, I'm sharpening the craft—learning how to architect data products that scale, tell stories, and drive real impact. Because the best analytics don't just answer questions; <span className="text-accent font-semibold italic">they change how people think</span>.
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
              <h2 className="text-2xl md:text-3xl font-bold font-amanojaku">The Complete Journey</h2>
            </div>

            <div className="space-y-5 text-muted-foreground leading-relaxed font-young-serif text-lg">
              <p className="text-lg">
                <span className="text-xl font-bold text-foreground block mb-3 font-amanojaku">Chapter 1: The Chemical Engineer Who Loved Patterns</span>
                My story starts at <span className="font-bold text-foreground">Jadavpur University</span>, where I spent four years learning to break down complex chemical systems into their fundamental parts. I graduated with an <span className="font-bold text-foreground">8.32 CGPA</span>, led R&D projects for <span className="font-bold text-foreground">ONGC</span>, and built hydrogen production simulations. But somewhere in those spreadsheets and simulations, I found something more fascinating than molecules—<span className="text-foreground font-bold">I found data patterns that told stories</span>.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 rounded-r-xl p-4 my-4">
                <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2 font-autumn-brush">Key <span className="font-bold">Chemical Engineering</span> Achievements:</p>
                <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                  <li>• Led hydrogen production simulation using ASPEN software in 5-member team</li>
                  <li>• Achieved 99% pure hydrogen extraction through data-driven process optimization</li>
                  <li>• Developed aqueous retarded acid formulation for limestone reservoirs</li>
                  <li>• Reduced carbon footprint through sustainable hydrogen production methods</li>
                </ul>
              </div>

              <p className="text-lg">
                <span className="text-xl font-bold text-foreground block mb-3 font-amanojaku">Chapter 2: The Pivot</span>
                That realization led me to <span className="text-accent font-bold">Celebal Technologies</span>, where I joined as a <span className="font-bold text-foreground">Business Intelligence Intern</span>. Here's where the transformation happened. I was thrown into building a <span className="font-bold text-foreground">massive P&L report</span> for stakeholders who needed clarity, not complexity.
              </p>

              <div className="bg-accent/5 border-l-4 border-accent rounded-r-xl p-5 my-4">
                <p className="text-foreground font-semibold text-base mb-3 font-autumn-brush">What I Built at <span className="font-bold text-accent">Celebal Technologies</span>:</p>
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
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                    <span>Standardized 150+ KPIs across 5 projects in 2 weeks with 5-member team</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg">
                But the real achievement? <span className="text-foreground font-bold">Executives started using it</span>. Not because they had to, but because it made their decisions <span className="font-bold text-foreground">easier and faster</span>. That's when I learned: great analytics isn't about complexity—it's about <span className="font-bold text-foreground">clarity wrapped in a compelling narrative</span>.
              </p>

              <p className="text-lg">
                <span className="text-xl font-bold text-foreground block mb-3 font-amanojaku">Chapter 3: Sharpening the Craft</span>
                Now I'm at <a href="https://gim.ac.in" target="_blank" rel="noopener noreferrer" className="text-accent font-bold hover:text-accent/80 underline decoration-accent/50 hover:decoration-accent transition-all duration-200">Goa Institute of Management</a>, pursuing a <span className="font-bold text-foreground">PGDM in Big Data Analytics</span>. I'm learning to architect data products that don't just solve today's problems—they <span className="font-bold text-foreground">scale with tomorrow's ambitions</span>. Business intelligence, data engineering, analytics product development—I'm building the <span className="font-bold text-foreground">toolkit to create systems that matter</span>.
              </p>

              <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 rounded-r-xl p-4 my-4">
                <p className="text-sm font-semibold text-green-800 dark:text-green-200 mb-2 font-autumn-brush">Current Learning Focus at <span className="font-bold">GIM</span>:</p>
                <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                  <li>• Advanced data modeling and ETL pipeline design</li>
                  <li>• Machine learning applications in business analytics</li>
                  <li>• Product management for data-driven solutions</li>
                  <li>• Building scalable analytics architectures</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 border border-accent/30">
                <p className="text-lg font-bold text-foreground mb-3 font-autumn-brush">My Philosophy</p>
                <p className="text-base text-foreground italic">
                  "The best dashboards aren't just data visualizations—they're business conversations. They don't just answer 'what happened?'—they inspire 'what should we do next?' I combine engineering precision with storytelling intuition to build analytics that people actually care about."
                </p>
              </div>

              <p className="text-base">
                <span className="text-lg font-bold text-foreground block mb-2 font-amanojaku">What I Bring</span>
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
                  <p className="text-sm">Prioritize execution; build reproducible analytics systems and maintainable BI solutions</p>
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
