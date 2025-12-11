import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-2000" />
      <div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-primary/10 rounded-full mix-blend-screen filter blur-3xl opacity-30 animate-blob animation-delay-4000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-primary font-medium tracking-widest mb-4">PORTFOLIO</h2>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Monish M</span>
          </h1>
          <p className="mt-4 text-xl text-text-muted max-w-2xl mx-auto mb-8">
            A passionate Frontend Developer & UI/UX Enthusiast crafting beautiful, 
            responsive, and user-centric digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="cursor-pointer px-8 py-3 bg-primary hover:bg-accent text-white rounded-full font-medium transition-all flex items-center gap-2 group"
            >
              View My Work
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer px-8 py-3 border border-white/10 hover:border-primary/50 hover:bg-white/5 rounded-full font-medium transition-all"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex items-center justify-center gap-6 text-text-muted">
            <a href="https://github.com/monish2106" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/monish-m-330b2a31a" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:monishmageshm@gmail.com" className="hover:text-primary transition-colors transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
