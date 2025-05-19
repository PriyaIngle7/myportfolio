import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Smart Care Companion App',
    description: 'Developed a real-time health monitoring app that connects caretakers with loved ones. Implemented AI-powered voice alarms, real-time chat, and location tracking for enhanced care. Integrated a prescription scanner for health insights.',
    image: process.env.PUBLIC_URL + '/project1.png',
    tech: ['React Native', 'Python', 'MongoDB', 'Node.js', 'APIs', 'Langchain'],
    github: 'https://github.com/PriyaIngle7',
    demo: process.env.PUBLIC_URL + '/project1.png',
  },
  {
    title: 'RFP Intelligence System',
    description: 'Built an AI-driven platform to automate RFP analysis, perform compliance checks, and extract eligibility using RAG and agent-based workflows. Developed a Go/No-Go recommendation system to optimize bidding decisions.',
    image: process.env.PUBLIC_URL + '/project2.png',
    tech: ['React', 'PostgreSQL', 'TypeScript', 'RAG', 'AI Models'],
    github: 'https://github.com/PriyaIngle7',
    demo: process.env.PUBLIC_URL + '/project2.png',
  },
  {
    title: 'Web Chat Application',
    description: 'Delivered a scalable realtime chat platform with a responsive UI, improving real-time messaging capabilities and user satisfaction.',
    image: process.env.PUBLIC_URL + '/project3.png',
    tech: ['React', 'Node.js', 'WebSocket'],
    github: 'https://github.com/PriyaIngle7',
    demo: process.env.PUBLIC_URL + '/project3.png',
  },
  {
    title: 'Website Development and Security',
    description: 'Strengthened website security by identifying and resolving critical vulnerabilities, ensuring a safer experience for users.',
    image: process.env.PUBLIC_URL + '/project4.png',
    tech: ['HTML', 'CSS', 'JavaScript', 'MySQL', 'PHP'],
    github: 'https://github.com/PriyaIngle7',
    demo: process.env.PUBLIC_URL + '/project4.png',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card group"
              >
                <div className="relative overflow-hidden rounded-lg mb-4 h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg border-2 border-accent bg-dark-lighter"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-dark-lighter/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 z-10">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-400 hover:text-white transition-colors"
                    >
                      {FaGithub({ size: 24 })}
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-2xl text-gray-400 hover:text-white transition-colors"
                    >
                      {FaExternalLinkAlt({ size: 24 })}
                    </a>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-dark-lighter rounded-full text-sm text-accent"
                    >
                      {tech}
                    </span>
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

export default Projects; 