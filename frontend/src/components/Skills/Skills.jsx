import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaPython, FaDatabase, FaChartBar, FaCloud, FaComments } from 'react-icons/fa';
import { SiPowerbi, SiPostgresql, SiMysql, SiMicrosoftexcel, SiAmazonaws, SiMicrosoftazure, SiGooglecloud } from 'react-icons/si';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: 'Programming',
      icon: <FaPython />,
      skills: ['Python (Pandas, NumPy, Matplotlib)', 'SQL'],
    },
    {
      title: 'Visualization',
      icon: <FaChartBar />,
      skills: ['Power BI', 'Matplotlib'],
    },
    {
      title: 'Databases',
      icon: <FaDatabase />,
      skills: ['PostgreSQL', 'MySQL'],
    },
    {
      title: 'Data Tools',
      icon: <SiMicrosoftexcel />,
      skills: ['Excel', 'Power Query', 'Power Pivot', 'DAX'],
    },
    {
      title: 'Cloud (Basics)',
      icon: <FaCloud />,
      skills: ['AWS', 'Azure', 'GCP'],
    },
    {
      title: 'Core Skills',
      icon: <FaChartBar />,
      skills: ['ETL Processes', 'KPI Tracking', 'Data Cleaning & Validation', 'Database Management'],
    },
    {
      title: 'Soft Skills',
      icon: <FaComments />,
      skills: ['Strategic Thinking', 'Effective Communication'],
    },
  ];

  return (
    <section id="skills" className="py-20 relative" data-testid="skills-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-strong p-6 rounded-2xl hover:neon-glow-purple transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-3xl text-neon-blue">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{category.title}</h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skillIndex}
                      whileHover={{ x: 5 }}
                      className="glass p-3 rounded-lg text-gray-300 text-sm"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
