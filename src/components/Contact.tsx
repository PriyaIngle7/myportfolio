import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Get In Touch</h2>
          <div className="flex flex-col items-center space-y-6 mt-8">
            <a
              href="mailto:priyainle456@gmail.com"
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors text-lg"
            >
              {FaEnvelope({ className: "text-accent text-xl" })}
              <span>priyainle456@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/priyaingle"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors text-lg"
            >
              {FaLinkedin({ className: "text-accent text-xl" })}
              <span>linkedin.com/in/priyaingle</span>
            </a>
            <a
              href="https://github.com/PriyaIngle7"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors text-lg"
            >
              {FaGithub({ className: "text-accent text-xl" })}
              <span>github.com/PriyaIngle7</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 