import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', phone: '', message: '' });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });
    try {
      const response = await fetch('https://formspree.io/f/mvzbloel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus({ type: 'success', message: "Thanks for reaching out! I'll get back to you soon." });
        setFormData({ name: '', email: '', subject: '', phone: '', message: '' });
      } else {
        setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' });
      }
    } catch {
      setStatus({ type: 'error', message: 'Something went wrong. Please try again or email me directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <FaEnvelope />, label: 'Email', value: 'gaganaj45@gmail.com', link: 'mailto:gaganaj45@gmail.com' },
    { icon: <FaPhone />, label: 'Phone', value: '+91 6362475882', link: 'tel:+916362475882' },
    { icon: <FaMapMarkerAlt />, label: 'Location', value: 'Karnataka, India', link: null },
  ];

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/GaganAJ-45', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/gagan-a-j', label: 'LinkedIn' },
    { icon: <FaInstagram />, href: 'https://www.instagram.com/gagan__aj', label: 'Instagram' },
    { icon: <FaFacebook />, href: 'https://www.facebook.com/gagan.aj.900', label: 'Facebook' },
  ];

  const inputClass = "w-full bg-white/60 backdrop-blur border border-slate-200 p-3 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue transition-all text-sm";

  return (
    <section id="contact" className="py-20" data-testid="contact-section">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-syne font-bold text-slate-900 mb-3">Get In Touch</h2>
            <div className="section-line mx-auto mb-4"></div>
            <p className="text-slate-500 text-base">Let's connect and discuss your next data-driven project</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <h3 className="text-xl font-syne font-bold text-slate-800 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  {contactInfo.map((info, i) => (
                    <div key={i} className="glass-card p-4 rounded-xl flex items-center gap-3" data-testid={`contact-info-${i}`}>
                      <div className="text-xl text-brand-blue">{info.icon}</div>
                      <div>
                        <p className="text-xs text-slate-400">{info.label}</p>
                        {info.link ? (
                          <a href={info.link} className="text-sm font-medium text-slate-700 hover:text-brand-blue transition-colors">{info.value}</a>
                        ) : (
                          <p className="text-sm font-medium text-slate-700">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-syne font-bold text-slate-800 mb-4">Connect With Me</h3>
                <div className="flex gap-3">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card p-3 rounded-xl text-xl text-slate-500 hover:text-brand-blue hover:shadow-md transition-all duration-200"
                      title={social.label}
                      data-testid={`contact-social-${social.label.toLowerCase()}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block glass-card p-6 rounded-2xl text-center">
                <p className="text-slate-600 text-sm">Open to opportunities, collaborations, and interesting data projects!</p>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <form onSubmit={handleSubmit} className="glass-card p-6 rounded-2xl space-y-4" data-testid="contact-form">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold text-slate-600 mb-1.5">Full Name *</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your Name" data-testid="contact-name-input" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-semibold text-slate-600 mb-1.5">Email Address *</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="your.email@example.com" data-testid="contact-email-input" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-semibold text-slate-600 mb-1.5">Subject *</label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass} placeholder="What's this about?" data-testid="contact-subject-input" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-semibold text-slate-600 mb-1.5">Phone <span className="text-slate-400 font-normal">(Optional)</span></label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+91 XXXXX XXXXX" data-testid="contact-phone-input" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-slate-600 mb-1.5">Message *</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="4" className={`${inputClass} resize-none`} placeholder="Your message here..." data-testid="contact-message-input"></textarea>
                </div>

                {status.message && (
                  <div className={`p-3 rounded-lg text-sm ${
                    status.type === 'success' ? 'bg-emerald-50 text-emerald-600 border border-emerald-200' : 'bg-red-50 text-red-600 border border-red-200'
                  }`} data-testid="contact-status-message">
                    {status.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  data-testid="send-message-button"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <><FaPaperPlane /> Send Message</>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
