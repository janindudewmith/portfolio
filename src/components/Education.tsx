import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  BookOpen,
  Star,
} from "lucide-react";

const Education: React.FC = () => {
  const education = [
    {
      degree: "B.Sc. Engineering (Undergraduate)",
      specialization: "Electrical and Information Engineering",
      institution: "Faculty of Engineering, University of Ruhuna",
      location: "Galle, Sri Lanka",
      period: "2022 - Present",
      grade: "OGPA: 3.92 / 4.00",
      description:
        "Comprehensive engineering program focusing on electrical systems, information technology, and modern engineering practices.",
      achievements: [
        "Maintaining excellent academic performance",
        "Active participation in engineering projects",
        "Strong foundation in networking and cybersecurity",
        "Hands-on experience with IoT and embedded systems",
      ],
      courses: [
        "Data Structures & Algorithms",
        "Database Systems",
        "Computer Networks",
        "Web Application Development",
        "Computer Architecture",
        "Embedded Systems",
        "Operating Systems Programming"        
      ],
    },
    {
      degree: "Comprehensive Master Java Developer (CMJD)",
      institution: "Institute of Java and Software Engineering (IJSE)",
      location: "Sri Lanka",
      period: "2022",
      grade: "Completed",
      description:
        "Intensive program focusing on Java development, software engineering principles, and modern development practices.",
      achievements: [
        "Mastered Java programming fundamentals",
        "Learned software engineering best practices",
        "Gained experience in enterprise development",
        "Completed practical projects and assignments",
      ],
      courses: [
        "Core Java",
        "Advanced Java",
        "Spring Framework",
        "Database Integration",
        "Software Engineering",
      ],
    },
  ];

  const certifications = [
    {
      title: "Comprehensive Master Java Developer (CMJD)",
      issuer: "Institute of Java and Software Engineering (IJSE)",
      date: "2022",
      icon: Award,
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "Google (Coursera)",
      date: "2025",
      icon: Award,
    },
    {
      title: "Foundations of Cybersecurity",
      issuer: "Google (Coursera)",
      date: "2025",
      icon: Award,
    },
    {
      title: "Play It Safe: Manage Security Risks",
      issuer: "Google (Coursera)",
      date: "2025",
      icon: Award,
    },
    {
      title: "Digital Signal Processing 1",
      issuer: "EPFL (Coursera)",
      date: "2024",
      icon: Award,
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2021",
      icon: Award,
    },
  ];

  return (
    <section id="education" className="py-20 px-6 relative">
      {/* Decorative elements */}
      <div className="absolute top-40 left-0 w-96 h-96 bg-gradient-to-r from-gray-500/5 to-gray-800/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-40 right-0 w-96 h-96 bg-gradient-to-l from-gray-600/5 to-gray-900/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 sm:mb-4">
            Education
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            My academic foundation and continuous learning journey in
            engineering and technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Education */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6 sm:mb-8"
            >
              <div className="p-2 sm:p-3 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-inner">
                <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8 text-[#60a5fa]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Academic Qualifications
              </h3>
            </motion.div>

            <div className="space-y-6 sm:space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 30px rgba(0,0,0,0.5)",
                    transition: { duration: 0.3 },
                  }}
                  className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm rounded-lg p-4 sm:p-6 md:p-8 border border-gray-800/50 shadow-[0_5px_15px_rgba(0,0,0,0.3)] transition-all duration-500"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-3 sm:mb-4">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 mb-1 sm:mb-2">
                        {edu.degree}
                      </h4>
                      {edu.specialization && (
                        <div className="text-sm sm:text-base text-gray-300 font-semibold mb-1 sm:mb-2">
                          {edu.specialization}
                        </div>
                      )}
                      <div className="text-sm sm:text-base text-[#60a5fa] font-semibold mb-1 sm:mb-2">
                        {edu.institution}
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500 mb-1 sm:mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin size={14} className="text-gray-500" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar size={14} className="text-gray-500" />
                          <span>{edu.period}</span>
                        </div>
                      </div>
                      <div className="text-xs sm:text-sm text-[#43c478] font-medium">
                        {edu.grade}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <Star size={14} className="text-gray-300" />
                        <h5 className="text-sm sm:text-base text-white font-semibold">
                          Achievements:
                        </h5>
                      </div>
                      <ul className="space-y-1 sm:space-y-2">
                        {edu.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: 0.1 * i }}
                            viewport={{ once: true }}
                            className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm"
                          >
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gray-500 rounded-full mt-1.5 flex-shrink-0" />
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <BookOpen size={14} className="text-gray-300" />
                        <h5 className="text-sm sm:text-base text-white font-semibold">
                          Key Courses:
                        </h5>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {edu.courses.map((course, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.05 * i }}
                            viewport={{ once: true }}
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "rgba(75, 75, 75, 0.3)",
                            }}
                            className="bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs border border-gray-700 transition-all duration-300"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="p-3 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 shadow-inner">
                <Award className="w-8 h-8 text-[#ebc219]" />
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                Certifications
              </h3>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(0,0,0,0.3)",
                    transition: { duration: 0.2 },
                  }}
                  className="bg-gradient-to-br from-gray-900 to-black backdrop-blur-sm rounded-lg p-6 border border-gray-800/50 transition-all duration-300 shadow-md"
                >
                  <div className="flex items-start gap-4">
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0 shadow-inner"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <cert.icon className="w-6 h-6 text-[#ebc219]" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1 text-sm">
                        {cert.title}
                      </h4>
                      <p className="text-gray-400 text-xs mb-2">
                        {cert.issuer}
                      </p>
                      <span className="text-[#ebc219] text-xs font-medium">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
