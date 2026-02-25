import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBrain, FaCog, FaDatabase, FaCode } from 'react-icons/fa';

const AITools = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toolGroups = [
    {
      title: '🧠 AI Assistants & Agents',
      icon: <FaBrain />,
      tools: [
        { name: 'ChatGPT', desc: 'Used for data analysis support, SQL optimization, documentation, and workflow automation ideas', status: 'Using' },
        { name: 'Claude', desc: 'Assisted in long-form reasoning, report writing, and structured analysis', status: 'Using' },
        { name: 'HuskyVoice Agent', desc: 'Exploring voice-based AI agent experimentation and conversational workflow testing', status: 'Exploring' },
        { name: 'Retell AI', desc: 'Learning to build and test AI voice agents for automated interactions', status: 'Learning' },
      ],
    },
    {
      title: '⚙️ Automation & Workflow Tools',
      icon: <FaCog />,
      tools: [
        { name: 'n8n', desc: 'Exploring workflow automation, API orchestration, and task automation using AI integrations', status: 'Exploring' },
        { name: 'Tabbly', desc: 'Learning to automate tabular data handling and productivity workflows', status: 'Learning' },
      ],
    },
    {
      title: '📊 Data & ML Platforms',
      icon: <FaDatabase />,
      tools: [
        { name: 'Kaggle', desc: 'Used for dataset exploration, EDA, and applied machine learning practice', status: 'Using' },
        { name: 'AI-assisted Analytics', desc: 'Using AI tools to enhance data cleaning, feature understanding, and insight generation', status: 'Using' },
      ],
    },
    {
      title: '💻 Developer Productivity',
      icon: <FaCode />,
      tools: [
        { name: 'Cursor', desc: 'AI-powered code editor used for faster Python, SQL, and analytics development', status: 'Using' },
        { name: 'AI Code Assistants', desc: 'Assisted in debugging, refactoring, and ETL pipeline optimization', status: 'Using' },
      ],
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Using':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Learning':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50';
      case 'Exploring':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/50';
    }
  };

  return (
    <section id="ai-tools" className="py-20 relative bg-gradient-to-b from-transparent to-[#0d1117]">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Section Title */}
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              AI Tools & Automation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-6"></div>
            <p className="text-gray-400 text-lg italic max-w-3xl mx-auto">
              "Exploring AI tools and automation to build smarter data pipelines, dashboards, and intelligent workflows."
            </p>
          </div>

          {/* Tools Grid */}
          <div className="space-y-12">
            {toolGroups.map((group, groupIndex) => (
              <motion.div
                key={groupIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: groupIndex * 0.15 }}
              >
                {/* Group Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-3xl text-neon-purple">{group.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{group.title}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-neon-purple to-transparent"></div>
                </div>

                {/* Tools in Group */}
                <div className="grid md:grid-cols-2 gap-4">
                  {group.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.4, delay: (groupIndex * 0.15) + (toolIndex * 0.05) }}
                      whileHover={{ scale: 1.02 }}
                      className="glass-strong p-5 rounded-xl hover:neon-glow-blue transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">{tool.name}</h4>
                        <span className={`text-xs px-3 py-1 rounded-full border ${getStatusColor(tool.status)}`}>
                          {tool.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-400 leading-relaxed">{tool.desc}</p>
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

export default AITools;
