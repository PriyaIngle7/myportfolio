import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I am passionate about leveraging technology to drive innovation and solve real-world problems. With a strong foundation in computer engineering and hands-on experience in software development, I am eager to contribute to impactful solutions while continuing to develop my skills.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Education</h3>
                <div className="bg-dark-lighter p-4 rounded-lg">
                  <h4 className="text-accent font-medium">BTech - Computer Engineering</h4>
                  <p className="text-gray-400">Vishwakarma University Pune, Maharashtra (2022-Present, Graduation: 2026)</p>
                  <p className="text-gray-400">CGPA: 9.07</p>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Soft Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {["Teamwork", "Problem-Solving", "Analytical Thinking", "Photography"].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-dark-lighter rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">Achievements & Community Engagement</h3>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><b>Consultadd Inc. Hackathon 2025:</b> First Runner-Up at "Odyssey of Code" for revolutionizing RFP analysis using Generative AI and RAG.</li>
                  <li><b>GirlScript Summer of Code (GSSOC) 2024:</b> Contributed to open-source projects with industry experts.</li>
                  <li><b>International Women's Day 2025 at Infosys Pune:</b> Attended "Redefine Possible" event by Women Techmakers, GDG Pune, and GDG Cloud Pune.</li>
                  <li><b>Industry Visit to Byte BloggerBase:</b> Gained insights into cybersecurity, web development, and startups.</li>
                  <li><b>An Inspiring Day at Amazon Web Services (AWS) Pune's Office LeadHer in Cloud Chapter!</b> Hosted by AWS Pune, Women Leaders at AWS, and AWS User Group Pune, this event was a celebration of women in cloud, leadership, and bold innovation. Highlights included Amazon's unique leadership culture, real-life AWS Builder Stories, a GenAI Foundations session, and a hands-on Shark Tank challenge with AWS PartyRock.</li>
                </ul>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-3xl opacity-20 animate-gradient-xy"></div>
              <div className="relative bg-dark-lighter rounded-2xl p-8 shadow-xl">
                <div className="aspect-w-4 aspect-h-3">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg"></div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About; 