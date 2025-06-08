import React from "react";
import { motion } from "framer-motion";
import { FileCode2, Terminal, Code2 } from "lucide-react";

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-[#60a5fa]" />,
      skills: [
        { name: "Java", logo: "/logos/java.svg" },
        { name: "C++", logo: "/logos/cpp.svg" },
        { name: "C", logo: "/logos/c.svg" },
        { name: "Python", logo: "/logos/python.svg" },
        { name: "JavaScript", logo: "/logos/javascript.svg" },
        { name: "SQL", logo: "/logos/sql.svg" },
      ],
    },
    {
      title: "Web Technologies",
      icon: <FileCode2 className="w-5 h-5 text-[#60a5fa]" />,
      skills: [
        { name: "React.js", logo: "/logos/react.svg" },
        { name: "Node.js", logo: "/logos/nodejs.svg" },
        { name: "Express.js", logo: "/logos/express.svg" },
        { name: "MongoDB", logo: "/logos/mongodb.svg" },
        { name: "HTML/CSS", logo: "/logos/html-css.svg" },
        { name: "ASP.NET Core MVC", logo: "/logos/aspnet.svg" },
      ],
    },
    {
      title: "Tools & Software",
      icon: <Terminal className="w-5 h-5 text-[#60a5fa]" />,
      fullWidth: true,
      skills: [
        { name: "MATLAB", logo: "/logos/matlab.svg" },
        { name: "Proteus", logo: "/logos/proteus.svg" },
        { name: "MySQL Workbench", logo: "/logos/mysql.svg" },
        { name: "Git", logo: "/logos/git.svg" },
        { name: "GitHub", logo: "/logos/github.svg" },
        { name: "JIRA", logo: "/logos/jira.svg" },
        { name: "Arduino IDE", logo: "/logos/arduino.svg" },
        { name: "VS Code", logo: "/logos/vscode.svg" },
        { name: "IntelliJ IDEA", logo: "/logos/intellij.svg" },
        { name: "Postman", logo: "/logos/postman.svg" },
        { name: "Cloudinary", logo: "/logos/cloudinary.svg" },
        { name: "JWT", logo: "/logos/jwt.svg" },
        { name: "Multer", logo: "/logos/multer.svg" },
        { name: "Axios", logo: "/logos/axios.svg" },
        { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
        { name: "ESP32/Arduino", logo: "/logos/esp32.svg" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      {/* Enhanced decorative elements */}
      <div
        className="absolute top-40 left-0 w-96 h-96 bg-gradient-to-r from-gray-500/5 to-gray-800/5 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDuration: "10s" }}
      ></div>
      <div
        className="absolute bottom-40 right-0 w-96 h-96 bg-gradient-to-l from-gray-600/5 to-gray-900/5 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDuration: "15s" }}
      ></div>
      <div
        className="absolute top-1/3 left-1/4 w-40 h-40 bg-gradient-to-br from-gray-500/5 to-gray-700/5 rounded-full blur-3xl -z-10 animate-pulse"
        style={{ animationDuration: "12s" }}
      ></div>

      {/* Animated lines in background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800/30 to-transparent"></div>
        <div className="absolute top-[40%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800/20 to-transparent"></div>
        <div className="absolute top-[70%] left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-800/10 to-transparent"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Tools
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technical skills and tools I use to bring engineering solutions to
            life
          </p>
        </motion.div>

        {/* Technical Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 30px rgba(0,0,0,0.5)",
                transition: { duration: 0.3 },
              }}
              className={`bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm rounded-lg p-8 border border-gray-800/50 shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-all duration-500 relative overflow-hidden group ${
                category.fullWidth ? "lg:col-span-2" : ""
              }`}
            >
              {/* Background glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-gray-800/0 via-gray-700/0 to-gray-800/0 group-hover:via-gray-700/10 rounded-lg blur-xl transition-all duration-700 -z-10 group-hover:opacity-100 opacity-0"></div>

              <div className="flex items-center gap-3 mb-6 relative">
                <motion.div
                  className="p-3 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-inner group-hover:shadow-[0_0_10px_rgba(255,255,255,0.1)] transition-all duration-300"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  {category.title}
                </h3>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gray-700/30 rounded-tr-lg -mt-8 -mr-8 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill: any, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: Math.min(0.05 * skillIndex, 1.5),
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                      transition: { duration: 0.2 },
                    }}
                    className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-sm border border-gray-800/50 rounded-lg px-4 py-2 text-gray-300 hover:text-white hover:border-gray-600 transition-all duration-300 flex items-center gap-3 shadow-md"
                  >
                    <div className="w-6 h-6 flex-shrink-0 relative flex items-center justify-center">
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className="w-full h-full object-contain"
                        style={{ filter: "brightness(1.2) contrast(1.1)" }}
                        onError={(e) => {
                          // Fallback to blue icon if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          const parent = target.parentElement;
                          if (parent) {
                            parent.innerHTML = `<div class="w-6 h-6 text-[#60a5fa] flex items-center justify-center">${
                              category.title === "Programming Languages"
                                ? '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>'
                                : '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M8 10v8"></path><path d="m12 10-4 8"></path><path d="m16 10-4 8"></path></svg>'
                            }</div>`;
                          }
                        }}
                      />
                    </div>
                    <span className="font-medium">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
