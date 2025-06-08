import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      period: '2022 - Present',
      description: 'Led development of scalable web applications using React, Node.js, and cloud technologies. Mentored junior developers and implemented best practices for code quality and testing.',
      achievements: [
        'Improved application performance by 40%',
        'Led a team of 5 developers',
        'Implemented CI/CD pipelines',
        'Reduced bug reports by 60%'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      location: 'Colombo, Sri Lanka',
      period: '2021 - 2022',
      description: 'Developed and maintained multiple client projects ranging from e-commerce platforms to business management systems. Collaborated with design teams to create intuitive user interfaces.',
      achievements: [
        'Delivered 15+ successful projects',
        'Increased client satisfaction by 95%',
        'Optimized database queries reducing load times by 50%',
        'Integrated third-party APIs and payment gateways'
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'PostgreSQL', 'Redis']
    },
    {
      title: 'Software Developer',
      company: 'StartupXYZ',
      location: 'Kandy, Sri Lanka',
      period: '2020 - 2021',
      description: 'Worked on developing MVP products for various startup ventures. Gained experience in rapid prototyping and agile development methodologies.',
      achievements: [
        'Built 3 MVP products from scratch',
        'Implemented real-time features using WebSocket',
        'Contributed to product design decisions',
        'Learned multiple programming languages and frameworks'
      ],
      technologies: ['JavaScript', 'Express.js', 'MongoDB', 'Socket.io', 'Git']
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 bg-slate-800/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Experience</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            My professional journey and the impact I've made along the way
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-slate-900 hidden md:block" />

                <div className="md:ml-20 bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 border border-slate-700/50 hover:border-blue-400/50 transition-all duration-300 hover:shadow-xl">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                      <div className="flex items-center gap-4 text-gray-400 mb-2">
                        <span className="text-blue-400 font-semibold">{exp.company}</span>
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 lg:text-right">
                      <Calendar size={16} />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-white font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="bg-blue-600/20 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-400/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;