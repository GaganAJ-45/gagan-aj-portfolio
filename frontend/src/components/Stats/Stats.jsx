import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaProjectDiagram, FaCertificate, FaTools, FaTrophy } from 'react-icons/fa';

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { icon: <FaProjectDiagram />, value: 6, label: 'Projects Completed', suffix: '+' },
    { icon: <FaCertificate />, value: 2, label: 'Certifications Earned', suffix: '' },
    { icon: <FaTools />, value: 5, label: 'Tools & Technologies', suffix: '+' },
    { icon: <FaTrophy />, value: 8.0, label: 'CGPA', suffix: '', decimal: true },
  ];

  const Counter = ({ end, duration = 2, decimal = false, suffix = '' }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!inView) return;

      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        setCount(progress * end);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    }, [inView, end, duration]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-gradient">
        {decimal ? count.toFixed(1) : Math.floor(count)}
        {suffix}
      </span>
    );
  };

  return (
    <section className="py-16 relative" data-testid="stats-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-strong p-6 rounded-2xl text-center hover:neon-glow-blue transition-all duration-300"
            >
              <div className="text-4xl text-neon-blue mb-4 flex justify-center">
                {stat.icon}
              </div>
              <Counter 
                end={stat.value} 
                suffix={stat.suffix}
                decimal={stat.decimal}
              />
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;
