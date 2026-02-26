import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub } from 'react-icons/fa';

const GitHubStats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const username = 'GaganAJ-45';

  const streakStatsUrl = `https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=default&hide_border=true&background=ffffff00&ring=2563eb&fire=0d9488&currStreakLabel=2563eb&sideLabels=475569&dates=94a3b8`;

  return (
    <section className="py-20" data-testid="github-stats-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-slate-900 mb-3">GitHub Statistics</h2>
            <div className="section-line mx-auto"></div>
          </div>

          <div className="flex justify-center mb-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4 }}
              className="glass-card glass-card-hover p-6 rounded-2xl transition-all duration-300 max-w-xl w-full"
              data-testid="github-streak-card"
            >
              <img
                src={streakStatsUrl}
                alt="GitHub Streak"
                className="w-full h-auto rounded-lg"
                loading="lazy"
                onError={(e) => {
                  e.target.style.display = 'none';
                  if (e.target.nextSibling) e.target.nextSibling.style.display = 'block';
                }}
              />
              <p className="text-center text-slate-400 py-6 text-sm hidden">Stats temporarily unavailable</p>
            </motion.div>
          </div>

          <div className="text-center">
            <a
              href={`https://github.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              data-testid="view-github-button"
            >
              <FaGithub className="text-xl" /> View My GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
