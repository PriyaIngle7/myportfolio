import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center md:text-left"
          >
            <img
              src={process.env.PUBLIC_URL + '/profile.jpg'}
              alt="Priya Ingle"
              className="w-40 h-40 rounded-full mx-auto mb-4 border-4 border-accent shadow-lg object-cover bg-dark-lighter"
              style={{ objectFit: 'cover', background: '#23272f' }}
            />
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-accent">Priya Ingle</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
              Software Developer & Technology Enthusiast
            </h2>
            <p className="text-gray-400 mb-8 max-w-lg">
              I am passionate about leveraging technology to drive innovation and solve real-world problems. With a strong foundation in computer engineering and hands-on experience in software development, I am eager to contribute to impactful solutions while continuing to develop my skills.
            </p>
            <div className="mb-8">
              <TypeAnimation
                sequence={[
                  'React Developer',
                  1000,
                  'Python Enthusiast',
                  1000,
                  'AI Researcher',
                  1000,
                  'Mobile App Developer',
                  1000,
                ]}
                wrapper="span"
                speed={50}
                className="text-accent text-xl md:text-2xl font-mono"
                repeat={Infinity}
              />
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              <motion.a
                href="https://github.com/PriyaIngle7"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                {FaGithub({})}
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/priyaingle"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                {FaLinkedin({})}
              </motion.a>
              <motion.a
                href="mailto:priyainle456@gmail.com"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl text-gray-400 hover:text-white transition-colors"
              >
                {FaEnvelope({})}
              </motion.a>
              <span className="text-gray-400 text-lg flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="inline-block mr-1" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M3.654 1.328a.678.678 0 0 1 .58-.326h2.016c.265 0 .52.105.707.293l.853.853c.188.188.442.293.707.293h2.016a.678.678 0 0 1 .58.326l.854 1.366c.188.3.188.68 0 .98l-.854 1.366a.678.678 0 0 1-.58.326H9.517a.678.678 0 0 1-.707-.293l-.853-.853a.678.678 0 0 0-.707-.293H5.234a.678.678 0 0 1-.58-.326l-.854-1.366a.678.678 0 0 1 0-.98l.854-1.366z"/><path d="M11.292 6.708a1 1 0 0 1 1.415 0l2.121 2.121a1 1 0 0 1 0 1.415l-2.121 2.121a1 1 0 0 1-1.415 0l-2.121-2.121a1 1 0 0 1 0-1.415l2.121-2.121z"/></svg>+91 7249876947</span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-3xl opacity-20 animate-gradient-xy"></div>
              <div className="relative bg-dark-lighter rounded-2xl p-8 shadow-xl">
                <div className="aspect-w-16 aspect-h-9">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 