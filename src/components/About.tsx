import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Terminal, Cpu } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Dev', icon: <Code />, desc: 'React, TypeScript, Tailwind' },
    { name: 'UI/UX Design', icon: <Palette />, desc: 'Figma, Prototyping' },
    { name: 'Backend Basics', icon: <Terminal />, desc: 'Node.js, Express' },
    { name: 'Optimization', icon: <Cpu />, desc: 'Performance, SEO' },
  ];

  return (
    <section id="about" className="py-20 bg-surface/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Transforming ideas into <span className="text-primary">digital reality</span>
            </h3>
            <p className="text-text-muted leading-relaxed mb-6">
              I am Monish M, a dedicated developer with a keen eye for design. I specialize in building modern web applications that not only look great but perform flawlessly.
            </p>
            <p className="text-text-muted leading-relaxed">
              My journey in tech is driven by a curiosity to learn and a desire to create. Whether it's a complex dashboard or a simple landing page, I bring the same level of attention to detail and passion to every project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform"
              >
                <div className="text-primary mb-3">{skill.icon}</div>
                <h4 className="font-semibold text-lg mb-1">{skill.name}</h4>
                <p className="text-sm text-text-muted">{skill.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
