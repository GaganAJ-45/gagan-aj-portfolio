import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'Power BI', 'SQL', 'Python + SQL', 'IoT / AI'];

  const projects = [
    {
      id: 1,
      title: 'AI-Based IoT Health Monitoring System',
      category: 'IoT / AI',
      subtitle: 'Real-time health monitoring with AI-powered disease detection and drug prescription.',
      description: 'Developed a real-time IoT-based health monitoring system using ESP32 and sensors (DHT11, DS18B20, MAX30102, AD8232) to track ECG, SpO₂, heart rate, temperature, and humidity, with data transmitted to Firebase. Integrated an AI model for disease detection and drug prescription, with a web app enabling real-time alerts and secure patient-doctor communication.',
      images: ['/assets/iot_architecture.png', '/assets/iot_login.png', '/assets/iot_dashboard.png'],
      tech: ['ESP32', 'Python', 'Firebase', 'AI/ML', 'IoT'],
      github: 'https://github.com/GaganAJ-45/AI-Based-IoT-Health-Monitoring-System',
    },
    {
      id: 2,
      title: 'Monday Coffee Expansion – SQL Analytics',
      category: 'SQL',
      subtitle: 'SQL-based market analysis to identify top cities for coffee store expansion.',
      description: 'Analyzed coffee sales data to estimate market size, consumer demand, and city-wise revenue and rent feasibility. Performed insights for top-selling products, monthly sales growth, and market potential using data analytics techniques. Identified top 3 cities — Pune, Delhi, Jaipur — for new store expansion based on analytics.',
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
      subtitle: 'Interactive Power BI dashboard for analyzing Amazon sales performance and business trends.',
      description: 'A business intelligence dashboard designed to monitor and evaluate Amazon store sales performance across regions and states. It enables decision-making by tracking key KPIs such as sales, profit, returns, and quantity sold in real time. The dashboard helps identify top-performing regions, customer segments, and product categories to optimize sales strategy. Built to support data-driven business decisions through clear, interactive, and insight-focused visualizations.',
      features: [
        'KPI cards for Sales, Profit, Quantity, and Returns',
        'Region & state-wise sales analysis with map visualization',
        'Category, sub-category, and segment-based performance analysis',
        'Insights by ship mode and payment mode',
        'Interactive slicers, filters, and drill-down views',
        'Clean, dark-themed dashboard design',
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
      description: 'A business intelligence solution developed using Power BI to analyze sales performance over multiple years. Provides a comprehensive overview of key metrics such as total sales, total cost, profit, and order trends. Enables users to explore customer-wise performance, sub-category contributions, regional sales distribution, and time-based order patterns using interactive filters and visuals.',
      features: [
        'KPI cards for Sales, Cost, and Profit',
        'Date range slicer and ship mode filters',
        'Customer-wise sales, cost, and profit analysis',
        'Sub-category performance comparison using bar charts',
        'Country-wise sales distribution with map visualization',
        'Year and quarter-based order trend analysis',
      ],
      images: ['/assets/SN_Dashboard.png'],
      tech: ['Power BI Desktop', 'SQL'],
      github: 'https://github.com/GaganAJ-45/SN-Sales-and-profit-Dashboard',
    },
    {
      id: 6,
      title: 'Health Analyzer – Healthcare Data Dashboard',
      category: 'Power BI',
      subtitle: 'Interactive Power BI dashboard analyzing healthcare waiting list trends.',
      description: 'A Power BI–based business intelligence dashboard developed to analyze and visualize healthcare waiting list data across multiple years. Provides insights into patient waiting times, specialty-wise distribution, age profiles, and historical trends. By transforming raw healthcare data into interactive visuals and KPIs, this project helps stakeholders identify patterns, monitor performance, and support data-driven healthcare planning and decision-making.',
      features: [
        'Data cleaning, transformation, and modeling using Power Query',
        'Custom DAX measures for average, median, and dynamic waiting time analysis',
        'Interactive slicers and filters for year, specialty, and patient categories',
        'Multiple chart types including bar charts, line charts, tables, and KPI cards',
        'Drill-down and cross-filtering for detailed data exploration',
      ],
      outcome: 'Enabled clear visualization of healthcare waiting list trends, helping identify high-delay specialties and patient groups.',
      images: ['/assets/Health_Analyzer_1.png', '/assets/Health_Analyzer_2.png', '/assets/Health_Analyzer_3.png'],
      tech: ['Power BI Desktop'],
      github: 'https://github.com/GaganAJ-45/Health_Analyzer_PBI_Project',
    },
  ];

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImage = () => {
    if (selectedProject && selectedProject.images.length > 1) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  return (
    <section id="projects" className="py-20 relative" data-testid="projects-section">
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
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white neon-glow-blue'
                    : 'glass text-gray-300 hover:text-white'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-strong rounded-2xl overflow-hidden cursor-pointer hover:neon-glow-purple transition-all duration-300"
                  onClick={() => openModal(project)}
                  data-testid={`project-card-${project.id}`}
                >
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.images[0]}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect width="400" height="300" fill="%230d1117"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="20" fill="%2300bfff"%3EImage Coming Soon%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    {project.placeholder && (
                      <div className="absolute top-2 right-2 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-xs border border-yellow-500/50">
                        Image Pending
                      </div>
                    )}
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-sm text-neon-blue mb-3">{project.subtitle}</p>
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span key={i} className="glass px-3 py-1 rounded-full text-xs text-gray-300">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="glass px-3 py-1 rounded-full text-xs text-gray-300">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* GitHub Link */}
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-neon-blue hover:text-neon-purple transition-colors"
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

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-y-auto"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 50 }}
              className="glass-strong rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <div className="sticky top-0 bg-[#0d1117] p-4 flex justify-between items-center border-b border-gray-700 z-10">
                <h2 className="text-2xl font-bold text-gradient">{selectedProject.title}</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  <FaTimes />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Image Carousel */}
                {selectedProject.images.length > 0 && (
                  <div className="relative">
                    <img
                      src={selectedProject.images[currentImageIndex]}
                      alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                      className="w-full h-auto rounded-lg"
                      onError={(e) => {
                        e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="800" height="400"%3E%3Crect width="800" height="400" fill="%230d1117"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="monospace" font-size="24" fill="%2300bfff"%3EImage Coming Soon%3C/text%3E%3C/svg%3E';
                      }}
                    />
                    
                    {selectedProject.images.length > 1 && (
                      <>
                        <button
                          onClick={prevImage}
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-strong p-3 rounded-full hover:neon-glow-blue"
                        >
                          <FaChevronLeft />
                        </button>
                        <button
                          onClick={nextImage}
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-strong p-3 rounded-full hover:neon-glow-blue"
                        >
                          <FaChevronRight />
                        </button>
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                          {selectedProject.images.map((_, i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i === currentImageIndex ? 'bg-neon-blue' : 'bg-gray-500'
                              }`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                )}

                {/* Subtitle */}
                <p className="text-lg text-neon-blue font-semibold">{selectedProject.subtitle}</p>

                {/* Description */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Description</h3>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Features */}
                {selectedProject.features && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3">Core Features</h3>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <span className="text-neon-blue mt-1">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Outcome */}
                {selectedProject.outcome && (
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Key Outcome</h3>
                    <p className="text-gray-300">{selectedProject.outcome}</p>
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-3">Tech Stack</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={i} className="glass px-4 py-2 rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Button */}
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary neon-glow-blue inline-flex items-center gap-2"
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
