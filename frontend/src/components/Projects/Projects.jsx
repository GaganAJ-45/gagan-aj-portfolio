import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const projects = [
  {
    id: 1,
    title: 'AI-Based IoT Health Monitoring System',
    category: 'IoT / AI',
    subtitle: 'Real-time health monitoring with AI-powered disease detection and drug prescription.',
    description: 'Developed a real-time IoT-based health monitoring system using ESP32 and sensors (DHT11, DS18B20, MAX30102, AD8232) to track ECG, SpO2, heart rate, temperature, and humidity, with data transmitted to Firebase. Integrated an AI model for disease detection and drug prescription, with a web app enabling real-time alerts and secure patient-doctor communication.',
    images: ['/assets/iot_architecture.png', '/assets/iot_login.png', '/assets/iot_dashboard.png'],
    tech: ['ESP32', 'Python', 'Firebase', 'AI/ML', 'IoT'],
    github: 'https://github.com/GaganAJ-45/AI-Based-IoT-Health-Monitoring-System',
  },
  {
    id: 2,
    title: 'Monday Coffee Expansion - SQL Analytics',
    category: 'SQL',
    subtitle: 'SQL-based market analysis to identify top cities for coffee store expansion.',
    description: 'Analyzed coffee sales data to estimate market size, consumer demand, and city-wise revenue and rent feasibility. Performed insights for top-selling products, monthly sales growth, and market potential using data analytics techniques. Identified top 3 cities for new store expansion based on analytics.',
    images: ['/assets/coffee_image.png'],
    tech: ['SQL', 'PostgreSQL', 'Data Analytics'],
    github: 'https://github.com/GaganAJ-45/Monday-coffee-expansion-project',
  },
  {
    id: 3,
    title: 'Student Performance Data Pipeline & Dashboard',
    category: 'Python + SQL',
    subtitle: 'ETL pipeline and Power BI dashboard for student performance analysis.',
    description: 'Developed an ETL pipeline to extract, clean, and load student performance data into MySQL using Python. Wrote SQL queries to generate insights on subject toppers, averages, and attendance vs scores. Built a Power BI dashboard to visualize student performance trends and weak subject areas.',
    images: ['/assets/student_analysis.png'],
    tech: ['Python', 'SQL', 'MySQL', 'Power BI'],
    github: 'https://github.com/GaganAJ-45/Student-Performance-Data-Pipeline-Dashboard',
  },
  {
    id: 4,
    title: 'Amazon Store Sales Dashboard',
    category: 'Power BI',
    subtitle: 'Interactive Power BI dashboard for analyzing Amazon sales performance.',
    description: 'A business intelligence dashboard designed to monitor Amazon store sales performance across regions and states. Tracks key KPIs such as sales, profit, returns, and quantity sold in real time.',
    features: [
      'KPI cards for Sales, Profit, Quantity, and Returns',
      'Region & state-wise sales analysis with map visualization',
      'Category, sub-category, and segment-based performance analysis',
      'Interactive slicers, filters, and drill-down views',
    ],
    images: ['/assets/amazon_PBI_project.png'],
    tech: ['Power BI Desktop'],
    github: 'https://github.com/GaganAJ-45/Amazon-Store-Sales-Dashboard',
  },
  {
    id: 5,
    title: 'SN Sales & Profit Dashboard',
    category: 'Power BI',
    subtitle: 'Interactive Power BI dashboard for sales, cost, and profit analysis.',
    description: 'A business intelligence solution developed using Power BI to analyze sales performance over multiple years. Provides a comprehensive overview of key metrics such as total sales, total cost, profit, and order trends.',
    features: [
      'KPI cards for Sales, Cost, and Profit',
      'Customer-wise sales, cost, and profit analysis',
      'Sub-category performance comparison using bar charts',
      'Country-wise sales distribution with map visualization',
    ],
    images: ['/assets/SN_Dashboard.png'],
    tech: ['Power BI Desktop', 'SQL'],
    github: 'https://github.com/GaganAJ-45/SN-Sales-and-profit-Dashboard',
  },
  {
    id: 6,
    title: 'Health Analyzer - Healthcare Data Dashboard',
    category: 'Power BI',
    subtitle: 'Interactive Power BI dashboard analyzing healthcare waiting list trends.',
    description: 'A Power BI-based business intelligence dashboard developed to analyze and visualize healthcare waiting list data across multiple years. Provides insights into patient waiting times, specialty-wise distribution, age profiles, and historical trends.',
    features: [
      'Custom DAX measures for average, median, and dynamic waiting time analysis',
      'Interactive slicers and filters for year, specialty, and patient categories',
      'Multiple chart types including bar charts, line charts, tables, and KPI cards',
    ],
    images: ['/assets/Health_Analyzer_1.png', '/assets/Health_Analyzer_2.png', '/assets/Health_Analyzer_3.png'],
    tech: ['Power BI Desktop'],
    github: 'https://github.com/GaganAJ-45/Health_Analyzer_PBI_Project',
  },
];

const categories = ['All', 'Power BI', 'SQL', 'Python + SQL', 'IoT / AI'];

const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const openModal = (project) => { setSelectedProject(project); setCurrentImageIndex(0); };
  const closeModal = () => { setSelectedProject(null); setCurrentImageIndex(0); };
  const nextImage = () => { if (selectedProject?.images.length > 1) setCurrentImageIndex(p => (p + 1) % selectedProject.images.length); };
  const prevImage = () => { if (selectedProject?.images.length > 1) setCurrentImageIndex(p => p === 0 ? selectedProject.images.length - 1 : p - 1); };

  return (
    <section id="projects" className="py-20" data-testid="projects-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-slate-900 mb-3">Featured Projects</h2>
            <div className="section-line mx-auto"></div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'btn-primary py-2 px-5'
                    : 'glass-card text-slate-600 hover:text-brand-blue'
                }`}
                data-testid={`filter-${cat.replace(/\s|\//g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="glass-card glass-card-hover rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-1"
                  onClick={() => openModal(project)}
                  data-testid={`project-card-${project.id}`}
                >
                  <div className="h-44 overflow-hidden bg-slate-100">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%23f1f5f9"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="16" fill="%2394a3b8"%3EImage Coming Soon%3C/text%3E%3C/svg%3E';
                      }}
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-syne font-bold text-slate-800 mb-1">{project.title}</h3>
                    <p className="text-sm text-brand-blue mb-2">{project.subtitle}</p>
                    <p className="text-slate-500 text-sm mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-3">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-full text-xs text-slate-500">{t}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="bg-slate-50 border border-slate-100 px-2.5 py-0.5 rounded-full text-xs text-slate-500">+{project.tech.length - 3}</span>
                      )}
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 text-brand-blue hover:text-brand-teal text-sm font-medium transition-colors"
                      data-testid={`project-github-${project.id}`}
                    >
                      <FaGithub /> View on GitHub
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={closeModal}
            data-testid="project-modal-overlay"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              data-testid="project-modal"
            >
              <div className="sticky top-0 bg-white p-5 flex justify-between items-center border-b border-slate-100 z-10">
                <h2 className="text-xl font-syne font-bold text-accent">{selectedProject.title}</h2>
                <button onClick={closeModal} className="text-slate-400 hover:text-slate-700 text-xl" data-testid="modal-close-button">
                  <FaTimes />
                </button>
              </div>
              <div className="p-6 space-y-5">
                {selectedProject.images.length > 0 && (
                  <div className="relative rounded-lg overflow-hidden bg-slate-50">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-auto"
                    />
                    {selectedProject.images.length > 1 && (
                      <>
                        <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:bg-white" data-testid="modal-prev-image">
                          <FaChevronLeft className="text-slate-600" />
                        </button>
                        <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:bg-white" data-testid="modal-next-image">
                          <FaChevronRight className="text-slate-600" />
                        </button>
                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                          {selectedProject.images.map((_, i) => (
                            <div key={i} className={`w-2 h-2 rounded-full ${i === currentImageIndex ? 'bg-brand-blue' : 'bg-slate-300'}`} />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}
                <p className="text-brand-blue font-semibold">{selectedProject.subtitle}</p>
                <div>
                  <h3 className="text-base font-syne font-bold text-slate-800 mb-1">Description</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{selectedProject.description}</p>
                </div>
                {selectedProject.features && (
                  <div>
                    <h3 className="text-base font-syne font-bold text-slate-800 mb-2">Core Features</h3>
                    <ul className="space-y-1.5">
                      {selectedProject.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="text-brand-teal mt-0.5">&#8226;</span>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div>
                  <h3 className="text-base font-syne font-bold text-slate-800 mb-2">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t, i) => (
                      <span key={i} className="bg-slate-50 border border-slate-200 px-3 py-1 rounded-full text-sm text-slate-600">{t}</span>
                    ))}
                  </div>
                </div>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                  data-testid="modal-github-link"
                >
                  <FaGithub /> View on GitHub
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
