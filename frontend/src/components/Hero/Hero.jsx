import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import { FaDownload, FaArrowDown } from 'react-icons/fa';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20"
      data-testid="hero-section"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm <span className="text-gradient">Gagan A J</span>
            </motion.h1>

            <div className="text-2xl md:text-3xl text-gray-300 h-20">
              <Typewriter
                options={{
                  strings: [
                    'Data Analyst',
                    'BI Developer',
                    'AI Tools Explorer',
                    'Python & SQL Developer',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </div>

            <motion.p
              className="text-lg text-gray-400 max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Transforming raw data into meaningful insights through ETL pipelines, interactive dashboards, and KPI-driven analysis.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <button
                onClick={scrollToProjects}
                className="btn-primary neon-glow-blue flex items-center gap-2"
                data-testid="view-work-button"
              >
                View My Work <FaArrowDown />
              </button>
              <a
                href="/assets/Gagan_CV.pdf"
                download
                className="btn-secondary flex items-center gap-2"
                data-testid="download-resume-button"
              >
                <FaDownload /> Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Photo with Spotlight Effect */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="spotlight relative">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative z-10"
              >
                <div className="glass-strong p-4 rounded-3xl neon-glow-purple">
                  <img
                    src="/assets/gagan.jpeg"
                    alt="Gagan A J - Data Analyst"
                    className="rounded-2xl w-full max-w-md h-auto object-cover shadow-2xl"
                  />
                </div>
              </motion.div>

              {/* Decorative elements */}
              <div className="absolute top-10 -left-10 w-32 h-32 bg-neon-blue opacity-20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-10 -right-10 w-40 h-40 bg-neon-purple opacity-20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
