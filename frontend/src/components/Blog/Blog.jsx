import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaArrowRight } from 'react-icons/fa';

const Blog = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const blogPosts = [
    {
      title: 'How I Built a Healthcare Dashboard with Power BI',
      description: 'A deep dive into creating interactive healthcare analytics dashboards using Power BI, DAX, and Power Query for real-world impact.',
      tag: 'Power BI',
      comingSoon: true,
    },
    {
      title: 'ETL Pipelines with Python & MySQL — A Beginner\'s Guide',
      description: 'Learn how to build efficient ETL pipelines using Python libraries and MySQL for data transformation and loading workflows.',
      tag: 'Data Engineering',
      comingSoon: true,
    },
    {
      title: 'AI Automation Tools Every Data Analyst Should Know',
      description: 'Exploring modern AI tools like ChatGPT, Claude, n8n, and Cursor that enhance data analysis workflows and boost productivity.',
      tag: 'AI & Automation',
      comingSoon: true,
    },
  ];

  return (
    <section className="py-20 relative bg-gradient-to-b from-[#0d1117] to-transparent">
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
              Blog & Articles
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-4"></div>
            <p className="text-gray-400 text-lg">Sharing insights and learnings from my data journey</p>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="glass-strong p-6 rounded-2xl hover:neon-glow-purple transition-all duration-300 relative overflow-hidden group"
              >
                {/* Coming Soon Badge */}
                {post.comingSoon && (
                  <div className="absolute top-4 right-4 bg-neon-purple/20 text-neon-purple px-3 py-1 rounded-full text-xs font-semibold border border-neon-purple/50">
                    Coming Soon
                  </div>
                )}

                {/* Tag */}
                <div className="glass px-3 py-1 rounded-full text-xs font-semibold text-neon-blue inline-block mb-4">
                  {post.tag}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gradient transition-all">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {post.description}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-neon-blue group-hover:text-neon-purple transition-colors cursor-pointer">
                  <span className="text-sm font-semibold">Read More</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </div>

                {/* Decorative Gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-blue to-neon-purple transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
