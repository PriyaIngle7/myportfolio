import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-dark-lighter py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Priya. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a
              href="https://github.com/PriyaIngle7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {FaGithub({ className: "text-xl" })}
            </a>
            <a
              href="https://linkedin.com/in/priyaingle"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {FaLinkedin({ className: "text-xl" })}
            </a>
            <a
              href="mailto:priyainle456@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
            >
              {FaEnvelope({ className: "text-xl" })}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 