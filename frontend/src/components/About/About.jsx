import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-20 relative" data-testid="about-section">
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
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center"
            >
              <div className="glass-strong p-4 rounded-3xl neon-glow-blue">
                <img
                  src="/assets/gagan_ph.jpg"
                  alt="Gagan A J - Professional Photo"
                  className="rounded-2xl w-full max-w-md h-auto object-cover shadow-2xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-32 h-32 border-4 border-neon-purple rounded-3xl opacity-50"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-4 border-neon-blue rounded-3xl opacity-50"></div>
            </motion.div>

            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm <span className="text-neon-blue font-semibold">Gagan A J</span>, a Data Analyst aspirant with a strong foundation in Python, SQL, and Power BI, and a background in Electronics & Communication Engineering.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in transforming raw data into meaningful insights through <span className="text-neon-purple font-semibold">ETL pipelines</span>, <span className="text-neon-purple font-semibold">interactive dashboards</span>, and <span className="text-neon-purple font-semibold">KPI-driven analysis</span>.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                Alongside data analytics, I've started exploring <span className="text-neon-blue font-semibold">AI automation</span> and modern AI tools to enhance workflows, automate analysis tasks, and improve productivity.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I've worked on projects across <span className="font-semibold">sales analytics</span>, <span className="font-semibold">healthcare data</span>, and <span className="font-semibold">student performance analysis</span>, focusing on clarity, accuracy, and real-world business impact.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed">
                I'm continuously learning cloud platforms, AI-assisted analytics, and automation techniques to build smarter, scalable, data-driven solutions.
              </p>

              {/* Contact Info Highlights */}
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="glass p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-lg font-semibold text-white">Karnataka, India</p>
                </div>
                <div className="glass p-4 rounded-lg">
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-lg font-semibold text-white break-all">gaganaj45@gmail.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
