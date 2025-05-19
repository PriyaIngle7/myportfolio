import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Contributor, Open Source Project',
    organization: 'GirlScript Summer of Code, Hacktoberfest',
    period: 'Oct 2024 - Nov 2024',
    description: 'Actively contributing to an open-source project under the GirlScript Summer of Code and Hacktoberfest program, enhancing code quality and implementing new features. Collaborated with a diverse team of developers to optimize user experience and improve application functionality.'
  },
  {
    role: 'Developer',
    organization: 'Eduplus Project',
    period: 'Jun 2024 - Present',
    description: 'Engaged in the Eduplus project, focusing on developing a blockchain-based academic credentialing system. Contributed to the architecture design and implementation of secure, decentralized solutions, ensuring data integrity and enhancing trust in academic qualifications.'
  }
];

const Experience = () => (
  <section id="experience" className="py-20">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title text-center">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.organization}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-dark-lighter p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-white mb-1">{exp.role}</h3>
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <span className="text-accent font-medium">{exp.organization}</span>
                <span className="text-gray-400 text-sm">{exp.period}</span>
              </div>
              <p className="text-gray-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Experience; 