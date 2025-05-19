import React from 'react';
import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiPython,
  SiReact,
  SiTensorflow,
  SiGit,
  SiDocker,
  SiNodedotjs,
  SiMongodb,
} from 'react-icons/si';
import { FaJava, FaMobile } from 'react-icons/fa';

const skills = [
  { name: 'C', icon: SiJavascript, level: 80 },
  { name: 'Java', icon: FaJava, level: 85 },
  { name: 'Python', icon: SiPython, level: 90 },
  { name: 'React', icon: SiReact, level: 95 },
  { name: 'Node.js', icon: SiNodedotjs, level: 90 },
  { name: 'SQL', icon: SiMongodb, level: 80 },
  { name: 'MongoDB', icon: SiMongodb, level: 80 },
  { name: 'Github', icon: SiGit, level: 85 },
  { name: 'WebSocket API', icon: SiGit, level: 75 },
  { name: 'PowerBI', icon: SiDocker, level: 70 },
  { name: 'Visual Studio Code', icon: SiDocker, level: 80 },
  { name: 'PartyRock', icon: SiDocker, level: 60 },
  { name: 'Eclipse', icon: SiDocker, level: 70 },
  { name: 'Remix', icon: SiDocker, level: 60 },
  { name: 'Figma', icon: SiDocker, level: 65 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">Skills & Expertise</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Technical Skills</h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      {skill.icon({ className: "text-2xl text-accent" })}
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                    <span className="text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <motion.div
                      className="skill-progress"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Areas of Expertise</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Frontend Development',
                  'Backend Development',
                  'Mobile App Development',
                  'AI/ML Development',
                  'Database Design',
                  'API Development',
                  'DevOps',
                  'UI/UX Design',
                ].map((expertise, index) => (
                  <motion.div
                    key={expertise}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-dark-lighter p-4 rounded-lg"
                  >
                    <h4 className="text-accent font-medium">{expertise}</h4>
                  </motion.div>
                ))}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-6">Core Concepts</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Data Structures and Algorithms", "Object-Oriented Programming", "Operating Systems"].map((concept) => (
                  <span key={concept} className="px-3 py-1 bg-dark-lighter rounded-full text-sm text-accent">{concept}</span>
                ))}
              </div>
              <h3 className="text-2xl font-semibold text-white mb-6">Soft Skills</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {["Teamwork", "Problem-Solving", "Analytical Thinking", "Photography"].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-dark-lighter rounded-full text-sm text-gray-300">{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 