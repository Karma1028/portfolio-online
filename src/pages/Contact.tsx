import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Instagram, Send, User, MessageSquare, AtSign } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "tuhin.bhattacharya25b@gim.ac.in",
      link: "mailto:tuhin.bhattacharya25b@gim.ac.in"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+91-7548079216",
      link: "tel:+917548079216"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Goa Institute of Management, Sanquelim, Goa",
      link: "https://gim.ac.in"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      name: "LinkedIn",
      username: "@tuhinbhattacharya28",
      link: "https://www.linkedin.com/in/tuhinbhattacharya28",
      color: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Instagram,
      name: "Instagram",
      username: "@_threads_of_karma_",
      link: "https://www.instagram.com/_threads_of_karma_/",
      color: "bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 hover:opacity-90"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20 pt-20 md:pt-24 pb-8 md:pb-12">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-600 to-yellow-500 font-amanojaku">
            Get In Touch
          </h1>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Let's connect and explore opportunities to collaborate on data analytics and business intelligence projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full p-6 flex flex-col items-center text-center hover:shadow-xl transition-all duration-300 cursor-pointer border-2 hover:border-amber-300 dark:hover:border-amber-700 bg-gradient-to-br from-white to-amber-50/30 dark:from-gray-900 dark:to-amber-950/30">
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900 dark:to-orange-900 flex items-center justify-center mb-4 border-2 border-amber-200 dark:border-amber-800 shadow-lg"
                >
                  <info.icon className="w-7 h-7 md:w-8 md:h-8 text-amber-600 dark:text-amber-400" />
                </motion.div>
                <h2 className="text-lg md:text-xl font-bold mb-2 text-gray-900 dark:text-white">{info.title}</h2>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">{info.content}</p>
              </Card>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8 md:mb-12"
        >
          <Card className="p-6 md:p-8 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Connect on Social Media</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className={`${social.color} text-white rounded-xl p-6 flex items-center justify-between transition-all duration-300 shadow-lg hover:shadow-2xl border-2 border-white/20`}
                >
                  <div className="flex items-center">
                    <motion.div
                      whileHover={{ rotate: 15 }}
                      transition={{ duration: 0.3 }}
                    >
                      <social.icon className="w-8 h-8 md:w-10 md:h-10 mr-4" />
                    </motion.div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold">{social.name}</h3>
                      <p className="text-sm md:text-base opacity-90 font-medium">{social.username}</p>
                    </div>
                  </div>
                  <motion.svg
                    whileHover={{ x: 5 }}
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </motion.svg>
                </motion.a>
              ))}
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Card className="p-6 md:p-8 bg-gradient-to-br from-white to-amber-50/30 dark:from-gray-900 dark:to-amber-950/30 border-2 border-amber-200 dark:border-amber-800">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900 dark:text-white">Send a Message</h2>
              <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">Let's start a conversation about your next project</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="flex items-center gap-2 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <User className="w-4 h-4 text-amber-600" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 md:py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all text-sm md:text-base hover:border-amber-300 dark:hover:border-amber-700"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    <AtSign className="w-4 h-4 text-amber-600" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 md:py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all text-sm md:text-base hover:border-amber-300 dark:hover:border-amber-700"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <MessageSquare className="w-4 h-4 text-amber-600" />
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 md:py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white transition-all text-sm md:text-base hover:border-amber-300 dark:hover:border-amber-700"
                  placeholder="Project Inquiry"
                />
              </div>
              <div>
                <label className="flex items-center gap-2 text-sm md:text-base font-semibold text-gray-700 dark:text-gray-300 mb-2">
                  <Mail className="w-4 h-4 text-amber-600" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 md:py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent dark:bg-gray-800 dark:text-white h-32 md:h-40 resize-none transition-all text-sm md:text-base hover:border-amber-300 dark:hover:border-amber-700"
                  placeholder="Tell me about your project or inquiry..."
                ></textarea>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 md:py-4 px-6 rounded-lg font-bold hover:from-amber-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl text-sm md:text-base flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </motion.button>
            </form>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="text-center mt-8 md:mt-12 text-sm md:text-base text-gray-600 dark:text-gray-400"
        >
          <p>Open to opportunities in Business Intelligence, Data Analytics, and Product Development</p>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
