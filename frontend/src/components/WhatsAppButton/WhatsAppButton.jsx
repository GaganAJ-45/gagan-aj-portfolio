import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const phoneNumber = '916362475882';
  const message = encodeURIComponent('Hi Gagan! I saw your portfolio and would like to connect.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <motion.div
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        className="relative"
      >
        {/* Tooltip */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute right-16 top-1/2 transform -translate-y-1/2 whitespace-nowrap glass-strong px-4 py-2 rounded-lg text-sm font-semibold text-white"
            >
              Chat with me on WhatsApp 💬
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Button */}
        <motion.a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          animate={{
            boxShadow: [
              '0 0 20px rgba(37, 211, 102, 0.5)',
              '0 0 40px rgba(37, 211, 102, 0.8)',
              '0 0 20px rgba(37, 211, 102, 0.5)',
            ],
          }}
          transition={{
            boxShadow: {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            },
          }}
          className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center text-white text-3xl shadow-2xl hover:bg-[#20ba59] transition-colors"
          aria-label="Chat on WhatsApp"
          data-testid="whatsapp-button"
        >
          <FaWhatsapp />
        </motion.a>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      </motion.div>
    </div>
  );
};

export default WhatsAppButton;
