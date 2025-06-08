import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Smartphone, Zap, Shield } from "lucide-react";

const About: React.FC = () => {
  const stats = [
    { label: "Current OGPA", value: "3.92/4.00" },
    { label: "Projects Completed", value: "6+" },
    { label: "Technologies", value: "15+" },
    { label: "Certifications", value: "10+" },
  ];

  const highlights = [
    {
      icon: Zap,
      title: "Electrical Engineering",
      description: "Specialized in Electrical and Information Engineering",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Strong interest in networking cybersecurity areas",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Proficient in MERN stack and modern web technologies",
    },
    {
      icon: Database,
      title: "IoT & Embedded Systems",
      description: "Experience with ESP32, Arduino and IoT implementations",
    },
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Engineering undergraduate passionate about networking,
            cybersecurity, and innovative technology solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
              Building Tomorrow's Technology Today
            </h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6 leading-relaxed">
              I am an enthusiastic Electrical and Information Engineering
              undergraduate at the University of Ruhuna, driven by a deep
              curiosity to explore, learn and apply emerging technologies for
              real-world impact. My passion lies in networking and
              cybersecurity, where I continuously seek to understand and address
              modern technological challenges.
            </p>
            <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8 leading-relaxed">
              Committed to continuous improvement through hands-on experience,
              teamwork and research, I focus on developing sustainable and
              innovative solutions that enhance quality of life. My goal is to
              grow into a globally competent professional dedicated to
              engineering excellence and technological advancement.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-2xl sm:text-3xl font-bold text-blue-400 mb-1 sm:mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 sm:p-6 border border-slate-700/50 hover:border-blue-400/50 transition-colors duration-300"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <highlight.icon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-white text-base sm:text-lg font-semibold mb-1 sm:mb-2">
                      {highlight.title}
                    </h4>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
