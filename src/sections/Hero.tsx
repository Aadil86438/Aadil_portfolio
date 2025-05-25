import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { Download, ArrowRight, Github } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary-50/30 dark:from-primary-900/20 to-transparent dark:to-transparent animate-gradient-x"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary-300/20 dark:bg-secondary-700/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent-300/20 dark:bg-accent-700/10 rounded-full filter blur-3xl"></div>
      </div>

      <div className="section-container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-balance leading-tight">
              <span className="text-primary-600 dark:text-primary-400">Mohammed Aadil A</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                Java Developer & Full Stack Engineer
              </span>
            </h1>
            
            <p className="mt-6 text-xl text-dark-500 dark:text-dark-200 max-w-xl">
              Building scalable, real-world applications that make impact. Specializing in Java, Spring Boot, and modern web technologies.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                download
                className="btn btn-primary"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
              </a>
              
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn btn-outline"
              >
                View Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="btn btn-accent"
              >
                Hire Me
              </Link>
            </div>
            
            <div className="mt-10 flex items-center">
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="mr-4 text-dark-400 hover:text-dark-600 dark:text-dark-300 dark:hover:text-dark-100 transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark-400 hover:text-dark-600 dark:text-dark-300 dark:hover:text-dark-100 transition-colors"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.454C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-6 sm:p-8"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/30 dark:border-dark-600/30 shadow-xl">
              <img
                src="https://wallpaperaccess.com/full/4391665.jpg"
                alt="Mohammed Aadil A"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
        >
          <span className="text-dark-400 dark:text-dark-300 mb-2">Scroll down</span>
          <div className="w-6 h-10 border-2 border-dark-400 dark:border-dark-300 rounded-full flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 bg-dark-400 dark:bg-dark-300 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;