import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';

const GitHubStats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const username = 'GaganAJ-45';

  return (
    <section className="py-20 relative">
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
              GitHub Statistics
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          </div>

          {/* GitHub Stats Cards */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-strong p-4 rounded-2xl hover:neon-glow-blue transition-all duration-300"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=00bfff&icon_color=7c3aed&text_color=ffffff&cache_seconds=86400`}
                alt="GitHub Stats"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-center text-gray-400 py-8">Stats temporarily unavailable</div>';
                }}
              />
            </motion.div>

            {/* Top Languages Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-strong p-4 rounded-2xl hover:neon-glow-purple transition-all duration-300"
            >
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&bg_color=0d1117&title_color=00bfff&text_color=ffffff&cache_seconds=86400`}
                alt="Top Languages"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-center text-gray-400 py-8">Stats temporarily unavailable</div>';
                }}
              />
            </motion.div>

            {/* Streak Stats Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-strong p-4 rounded-2xl hover:neon-glow-blue transition-all duration-300"
            >
              <img
                src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=tokyonight&hide_border=true&background=0d1117&ring=00bfff&fire=7c3aed&currStreakLabel=00bfff&cache_seconds=86400`}
                alt="GitHub Streak"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div class="text-center text-gray-400 py-8">Stats temporarily unavailable</div>';
                }}
              />
            </motion.div>
          </div>

          {/* View GitHub Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 btn-primary neon-glow-blue"
            >
              <FaGithub className="text-2xl" />
              View My GitHub
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
