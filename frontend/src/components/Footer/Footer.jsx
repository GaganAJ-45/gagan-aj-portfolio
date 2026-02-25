import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/GaganAJ-45', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/gagan-a-j', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/gagan__aj', label: 'Instagram' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/gagan.aj.900', label: 'Facebook' },
  ];

  return (
    <footer className="relative py-12 bg-gradient-to-t from-[#0d1117] to-transparent border-t border-gray-800">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center space-y-6">
          {/* Name & Tagline */}
          <div>
            <h3 className="text-3xl font-bold text-gradient mb-2">Gagan A J</h3>
            <p className="text-gray-400">Data Analyst | Business Intelligence | AI Tools Explorer</p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue text-2xl transition-all duration-300 hover:scale-110"
                title={social.label}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#home" className="text-gray-400 hover:text-neon-blue transition-colors">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-neon-blue transition-colors">
              About
            </a>
            <a href="#skills" className="text-gray-400 hover:text-neon-blue transition-colors">
              Skills
            </a>
            <a href="#projects" className="text-gray-400 hover:text-neon-blue transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-gray-400 hover:text-neon-blue transition-colors">
              Contact
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            <p className="flex items-center justify-center gap-2">
              © {currentYear} Gagan A J. Made with <FaHeart className="text-red-500 animate-pulse" /> and data.
            </p>
            <p className="mt-2">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
