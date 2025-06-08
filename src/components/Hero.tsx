import React from "react";
import { motion } from "framer-motion";
import { Download, Mail, Linkedin, Github } from "lucide-react";

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:janindudewmith@gmail.com",
      label: "Email",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/janindudewmith",
      label: "LinkedIn",
    },
    {
      icon: Github,
      href: "https://github.com/janindudewmith",
      label: "GitHub",
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-16 relative"
    >
      {/* Enhanced decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-gray-500/10 to-gray-800/10 rounded-full blur-3xl -z-10"></div>
      <div
        className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-l from-gray-600/10 to-gray-900/10 rounded-full blur-3xl -z-10"
        style={{ animationDuration: "8s" }}
      ></div>
      <div
        className="absolute top-1/3 right-1/4 w-40 h-40 bg-gradient-to-br from-gray-500/5 to-gray-700/5 rounded-full blur-3xl -z-10"
        style={{ animationDuration: "10s" }}
      ></div>

      {/* Animated lines in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800/50 to-transparent"></div>
        <div className="absolute top-[30%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800/40 to-transparent"></div>
        <div className="absolute top-[60%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent"></div>
        <div className="absolute top-[80%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800/20 to-transparent"></div>
      </div>

      {/* Social Links - modern responsive approach */}
      <div className="absolute left-0 top-0 h-full z-20 hidden sm:flex items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="flex flex-col gap-3 sm:gap-4 ml-2 sm:ml-4 md:ml-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.1,
                x: 2,
                boxShadow: "0 0 20px rgba(255,255,255,0.2)",
              }}
              whileTap={{ scale: 0.9 }}
              className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 shadow-lg border border-gray-700/30"
              aria-label={social.label}
            >
              <social.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center max-w-4xl mx-auto relative z-10"
      >
        {/* Profile Image with enhanced effects */}
        <motion.div variants={itemVariants} className="mb-8 relative">
          <div className="absolute inset-0 rounded-full blur-lg bg-gradient-to-br from-gray-500/20 to-gray-900/20 scale-110 animate-pulse -z-10"></div>
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-gray-600/10 to-gray-900/10 scale-125 animate-ping -z-10"
            style={{ animationDuration: "3s" }}
          ></div>
          <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full bg-gradient-to-br from-gray-600 via-gray-700 to-gray-900 p-1 shadow-[0_0_25px_rgba(0,0,0,0.5)] relative">
            <img
              src="/janindu.jpg"
              alt="Janindu Dewmith"
              className="w-full h-full rounded-full object-cover"
            />
          </div>

          {/* Enhanced circular rings around profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute -inset-4 border border-gray-500/20 rounded-full -z-10"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "130%",
              height: "130%",
            }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-8 border border-gray-500/10 rounded-full -z-10"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "160%",
              height: "160%",
            }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-12 border border-gray-500/5 rounded-full -z-10"
            style={{
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "190%",
              height: "190%",
            }}
          ></motion.div>
        </motion.div>

        {/* Name and Title with enhanced text effects */}
        <motion.h1
          variants={itemVariants}
          className="text-3xl xs:text-4xl sm:text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mb-2 sm:mb-4 drop-shadow-xl"
        >
          Janindu Dewmith
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-base xs:text-lg sm:text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 mb-1 sm:mb-2"
        >
          Electrical & Information Engineering Undergraduate
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm xs:text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-3xl mx-auto backdrop-blur-sm bg-black/10 rounded-lg p-2 sm:p-4 border border-gray-800/20"
        >
          Enthusiastic engineering undergraduate with a strong interest in
          networking and cybersecurity, driven by a passion for developing
          innovative solutions that enhance the quality of life
        </motion.p>

        {/* CTA Buttons with enhanced effects */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8 sm:mb-12"
        >
          <motion.a
            href="/Janindu Dewmith.pdf"
            download
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg border border-gray-700/50 backdrop-blur-sm"
          >
            <Download size={16} className="sm:w-5 sm:h-5" />
            Download CV
          </motion.a>

          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="bg-gradient-to-r from-transparent to-transparent hover:from-gray-800 hover:to-gray-700 text-gray-300 border border-gray-500 hover:border-transparent hover:text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 backdrop-blur-sm"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator - now responsive */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 right-0 mr-2 sm:mr-4 md:mr-6 lg:mr-12 z-20 hidden sm:block"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 rounded-full flex justify-center shadow-[0_0_15px_rgba(255,255,255,0.15)]"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 sm:h-3 bg-gradient-to-b from-gray-300 to-gray-500 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
