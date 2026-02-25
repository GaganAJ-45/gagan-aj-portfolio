import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaDownload } from 'react-icons/fa';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/GaganAJ-45' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/gagan-a-j' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/gagan__aj' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/gagan.aj.900' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-strong py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="text-2xl font-bold text-gradient"
            whileHover={{ scale: 1.05 }}
          >
            Gagan A J
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-neon-blue transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons & Download CV */}
          <div className="hidden md:flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="text-gray-300 hover:text-neon-blue text-xl transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
            <motion.a
              href="/assets/Gagan_CV.pdf"
              download
              whileHover={{ scale: 1.05 }}
              className="ml-4 btn-primary flex items-center gap-2 neon-glow-blue"
            >
              <FaDownload /> Download CV
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white text-2xl"
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 glass-strong rounded-lg p-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-gray-300 hover:text-neon-blue transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="flex gap-4 mt-4 pt-4 border-t border-gray-700">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-neon-blue text-xl"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <a
              href="/assets/Gagan_CV.pdf"
              download
              className="mt-4 btn-primary flex items-center justify-center gap-2 w-full"
            >
              <FaDownload /> Download CV
            </a>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
