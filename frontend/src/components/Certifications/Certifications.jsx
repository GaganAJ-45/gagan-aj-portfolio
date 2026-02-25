import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa';

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: 'Power BI Administration: Administering the Power BI Service',
      platform: 'Udemy',
      instructor: 'Grant Gamble',
      date: 'September 21, 2025',
      duration: '8.5 hours',
      link: 'https://ude.my/UC-4e97af8d-5883-4678-ae90-a71b2c3b83a9',
      pdfLink: '/assets/Power_BI_Certificate.pdf',
    },
    {
      title: 'SQL and PostgreSQL for Beginners: Become a SQL Expert',
      platform: 'Udemy',
      instructor: 'Jon Avis',
      date: 'September 16, 2025',
      duration: '12.5 hours',
      link: 'https://ude.my/UC-5b89b888-3c52-4d18-a061-09d61a0003a5',
      pdfLink: null, // Placeholder
    },
  ];

  return (
    <section className="py-20 relative" data-testid="certifications-section">
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
              Certifications
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          </div>

          {/* Certifications Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="glass-strong p-6 rounded-2xl hover:neon-glow-blue transition-all duration-300"
              >
                {/* Badge Icon */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl text-neon-blue">
                    <FaCertificate />
                  </div>
                  <div className="glass px-3 py-1 rounded-full text-xs font-semibold text-neon-purple">
                    {cert.platform}
                  </div>
                </div>

                {/* Certificate Title */}
                <h3 className="text-xl font-bold text-white mb-3">{cert.title}</h3>

                {/* Details */}
                <div className="space-y-2 mb-4 text-sm text-gray-400">
                  <p><span className="text-gray-300">Instructor:</span> {cert.instructor}</p>
                  <p><span className="text-gray-300">Date:</span> {cert.date}</p>
                  <p><span className="text-gray-300">Duration:</span> {cert.duration}</p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 btn-primary neon-glow-blue text-center flex items-center justify-center gap-2 text-sm"
                  >
                    <FaExternalLinkAlt /> View Certificate
                  </a>
                  {cert.pdfLink && (
                    <a
                      href={cert.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-center text-sm px-4 py-2"
                    >
                      PDF
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;
