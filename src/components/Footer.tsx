import { Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <footer className="bg-dark-100/5 dark:bg-dark-700/30 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Footer Logo */}
          <div className="mb-6 md:mb-0">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-2xl font-bold cursor-pointer"
            >
              Mohammed Aadil A
            </Link>
            <p className="text-dark-400 dark:text-dark-300 mt-2 max-w-md">
              Building scalable, real-world applications that make impact.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/Aadil86438?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-dark-100/20 dark:hover:bg-dark-700/50 transition-colors"
              aria-label="GitHub"
            >
              <GitHub className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohammed-aadil-15027a214"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-dark-100/20 dark:hover:bg-dark-700/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:mohammedaadil3002@gmail.com"
              className="p-2 rounded-full hover:bg-dark-100/20 dark:hover:bg-dark-700/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap justify-center space-x-6 mb-8">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="text-dark-500 dark:text-dark-200 hover:text-primary-500 dark:hover:text-primary-400 cursor-pointer transition-colors py-2"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-dark-400 dark:text-dark-300 text-sm border-t border-dark-100/10 dark:border-dark-600/10 pt-8">
          <p>© 2025 Mohammed Aadil | Powered by Bolt.new</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
