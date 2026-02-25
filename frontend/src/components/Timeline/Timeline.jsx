import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const Timeline = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timelineData = [
    {
      title: 'B.E. – Electronics & Communication Engineering (ECE)',
      institution: 'PES Institute of Technology, Shivamogga',
      board: 'VTU',
      year: '2026',
      grade: 'CGPA: 8.0',
      icon: <FaGraduationCap />,
    },
    {
      title: 'Intermediate (PCMB)',
      institution: 'S.P.S.M PU College, Davanagere',
      board: 'KSEA Board',
      year: '2022',
      grade: '80.02%',
      icon: <FaSchool />,
    },
    {
      title: 'Class 10th',
      institution: 'Sri Sai Gurukula Residential School, Honnali',
      board: 'CBSE',
      year: '2020',
      grade: '78.05%',
      icon: <FaSchool />,
    },
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-transparent to-[#0d1117]">
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
              Education
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-blue via-neon-purple to-neon-blue"></div>

            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } md:w-1/2`}
              >
                {/* Timeline Dot */}
                <div className={`absolute top-6 ${index % 2 === 0 ? 'md:right-0 left-8' : 'md:left-0 left-8'} transform ${index % 2 === 0 ? 'md:translate-x-1/2' : 'md:-translate-x-1/2'} -translate-x-1/2 md:translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple neon-glow-blue z-10 flex items-center justify-center`}>
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
                </div>

                {/* Content Card */}
                <div className="glass-strong p-6 rounded-2xl ml-16 md:ml-0 hover:neon-glow-purple transition-all duration-300">
                  <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
                    <div className="text-4xl text-neon-blue flex-shrink-0">
                      {item.icon}
                    </div>
                    <div className={index % 2 === 0 ? 'md:text-right' : 'md:text-left'}>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-neon-purple font-semibold mb-1">{item.institution}</p>
                      <p className="text-gray-400 text-sm mb-2">{item.board} | {item.year}</p>
                      <div className="inline-block glass px-4 py-2 rounded-full text-sm font-semibold text-neon-blue">
                        {item.grade}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
