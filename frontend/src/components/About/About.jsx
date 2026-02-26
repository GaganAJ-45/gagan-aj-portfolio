import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="py-20" data-testid="about-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-slate-900 mb-3">About Me</h2>
            <div className="section-line mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="glass-card p-3 rounded-3xl">
                <img
                  src="/assets/gagan_ph.jpg"
                  alt="Gagan A J - Professional Photo"
                  className="rounded-2xl w-full max-w-md h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5"
            >
              <p className="text-base text-slate-600 leading-relaxed">
                I'm <span className="text-brand-blue font-semibold">Gagan A J</span>, a Data Analyst aspirant with a strong foundation in Python, SQL, and Power BI, and a background in Electronics & Communication Engineering.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                I specialize in transforming raw data into meaningful insights through <span className="text-brand-teal font-semibold">ETL pipelines</span>, <span className="text-brand-teal font-semibold">interactive dashboards</span>, and <span className="text-brand-teal font-semibold">KPI-driven analysis</span>.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Alongside data analytics, I've started exploring <span className="text-brand-blue font-semibold">AI automation</span> and modern AI tools to enhance workflows and improve productivity.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                I've worked on projects across sales analytics, healthcare data, and student performance analysis, focusing on clarity, accuracy, and real-world business impact.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="glass-card p-4 rounded-xl">
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Location</p>
                  <p className="text-sm font-semibold text-slate-800 mt-1">Karnataka, India</p>
                </div>
                <div className="glass-card p-4 rounded-xl">
                  <p className="text-xs text-slate-400 uppercase tracking-wide">Email</p>
                  <p className="text-sm font-semibold text-slate-800 mt-1 break-all">gaganaj45@gmail.com</p>
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
