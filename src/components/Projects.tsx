import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Filter } from "lucide-react";

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = [
    "All",
    "Web Development",
    "IoT/Embedded",
    "Security",
    "Database",
  ];

  const projects = [
    {
      title: "Healthcare Appointment Booking System",
      category: "Web Development",
      description:
        "Full-stack web platform to streamline online doctor appointment scheduling for patients, doctors and administrators with role-based portals.",
      image:
        "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "JWT",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/janindudewmith",
      featured: true,
    },
    {
      title: "Online Voucher Application Portal",
      category: "Web Development",
      description:
        "Full-stack payment request management system for Faculty of Engineering, University of Ruhuna to streamline academic staff reimbursements and approvals.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Clerk",
        "Tailwind CSS",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/janindudewmith",
      featured: true,
      status: "Ongoing",
    },
    {
      title: "Smart Kitchen Monitoring System",
      category: "IoT/Embedded",
      description:
        "IoT-based system to monitor kitchen environment parameters like temperature, humidity and gas levels for safety with real-time alerts.",
      image:
        "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["ESP32", "MQTT", "ThingsBoard", "ESP-Dash", "Arduino IDE"],
      liveUrl: "#",
      githubUrl: "https://github.com/janindudewmith",
      featured: true,
    },
    {
      title: "Offensive & Defensive WiFi/Bluetooth PEN Tool",
      category: "Security",
      description:
        "Secure, portable Wi-Fi/Bluetooth penetration testing device using ESP32 for real-time offensive and defensive network assessment.",
      image:
        "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: [
        "ESP32",
        "Arduino IDE",
        "TFT Touchscreen",
        "WiFi/Bluetooth Protocols",
        "Embedded C++",
      ],
      liveUrl: "#",
      githubUrl: "https://github.com/janindudewmith",
      featured: false,
      status: "Ongoing",
    },
    {
      title: "Console-based Financial Trading Journal",
      category: "Web Development",
      description:
        "Console-based application for tracking and managing trading activities using linked lists and efficient sorting algorithms.",
      image:
        "https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["C++", "Data Structures", "Sorting Algorithms"],
      liveUrl: "#",
      githubUrl: "https://github.com/janindudewmith",
      featured: false,
    },
    {
      title: "Cargo Management System: SQL Database",
      category: "Database",
      description:
        "Relational database system in MySQL featuring 10 interconnected entities to manage cargo logistics and operations efficiently.",
      image:
        "https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["MySQL", "Database Design", "SQL Queries"],
      liveUrl: "#",
      githubUrl: "https://github.com/janindudewmith",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-b from-black to-gray-900 relative"
    >
      {/* Enhanced decorative elements */}
      <div
        className="absolute top-40 right-0 w-96 h-96 bg-gradient-to-r from-gray-500/5 to-gray-800/5 rounded-full blur-3xl -z-0 animate-pulse"
        style={{ animationDuration: "15s" }}
      ></div>
      <div
        className="absolute bottom-40 left-0 w-96 h-96 bg-gradient-to-l from-gray-600/5 to-gray-900/5 rounded-full blur-3xl -z-0 animate-pulse"
        style={{ animationDuration: "10s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-64 h-64 bg-gradient-to-br from-gray-500/5 to-gray-700/5 rounded-full blur-3xl -z-0 animate-pulse"
        style={{ animationDuration: "20s" }}
      ></div>

      {/* Animated lines in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-32 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent"></div>
        <div className="absolute top-[45%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800/20 to-transparent"></div>
        <div className="absolute top-[75%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800/10 to-transparent"></div>
      </div>

      {/* Animated dots/particles */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        <div
          className="absolute top-20 left-[20%] w-1 h-1 bg-gray-500 rounded-full animate-ping"
          style={{ animationDuration: "3s" }}
        ></div>
        <div
          className="absolute top-[30%] left-[80%] w-1 h-1 bg-gray-500 rounded-full animate-ping"
          style={{ animationDuration: "4s" }}
        ></div>
        <div
          className="absolute top-[70%] left-[10%] w-1 h-1 bg-gray-500 rounded-full animate-ping"
          style={{ animationDuration: "5s" }}
        ></div>
        <div
          className="absolute top-[60%] left-[60%] w-1 h-1 bg-gray-500 rounded-full animate-ping"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute top-[90%] left-[30%] w-1 h-1 bg-gray-500 rounded-full animate-ping"
          style={{ animationDuration: "7s" }}
        ></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
            Projects
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            A showcase of my engineering projects spanning web development, IoT,
            cybersecurity, and database systems
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(96, 165, 250, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeFilter === filter
                  ? "bg-[#60a5fa]/20 text-white border border-[#60a5fa]/50"
                  : "bg-gray-900/60 text-gray-400 border border-gray-800 hover:text-white hover:border-gray-700"
              }`}
            >
              {filter === "All" && (
                <Filter size={14} className="text-gray-400" />
              )}
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                layout
                className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800/50 shadow-[0_5px_15px_rgba(0,0,0,0.3)] group transition-all duration-300 flex flex-col h-full relative"
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-2 py-1 bg-[#ebc219] text-black text-xs font-medium rounded-full border border-[#ebc219]/30 shadow-md">
                      Featured
                    </span>
                  </div>
                )}

                {/* Status badge (if available) */}
                {project.status && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-2 py-1 bg-green-500 text-black text-xs font-medium rounded-full border border-green-600/30 shadow-md">
                      {project.status}
                    </span>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category badge */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="px-2 py-1 bg-gray-900/80 text-gray-300 text-[10px] sm:text-xs font-medium rounded-lg backdrop-blur-sm">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-4 sm:p-6 flex-grow flex flex-col">
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#60a5fa] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-gray-800 text-gray-300 text-[10px] sm:text-xs rounded-md border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex justify-between items-center">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm flex items-center gap-1"
                    >
                      <ExternalLink size={12} className="sm:w-4 sm:h-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-xs sm:text-sm flex items-center gap-1"
                    >
                      <Github size={12} className="sm:w-4 sm:h-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Enhanced View More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/janindudewmith"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(255,255,255,0.2)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-gray-800 to-gray-700 hover:from-gray-700 hover:to-gray-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 mx-auto w-fit shadow-lg border border-gray-700/30 backdrop-blur-sm"
          >
            <Github size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
