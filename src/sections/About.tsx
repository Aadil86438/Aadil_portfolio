import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Cpu, Terminal } from 'lucide-react';

const About = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-20 bg-dark-100/5 dark:bg-dark-800/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            I'm a passionate full-stack developer focused on building scalable and maintainable applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass-card p-8 relative overflow-hidden">
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-300/10 dark:bg-primary-700/10 rounded-full filter blur-3xl"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <p className="text-dark-500 dark:text-dark-200 mb-4">
                  I'm Mohammed Aadil A, a full-stack developer with a strong focus on backend technologies, particularly Java and Spring Boot. I'm passionate about building robust, scalable applications that solve real-world problems.
                </p>
                <p className="text-dark-500 dark:text-dark-200 mb-4">
                  With experience working with international companies and participating in major hackathons, I've developed a keen eye for creating efficient, maintainable code that meets business requirements while providing excellent user experiences.
                </p>
                <p className="text-dark-500 dark:text-dark-200">
                  I'm constantly learning and exploring new technologies to expand my skill set and stay at the forefront of the rapidly evolving tech landscape.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { icon: <Code className="h-8 w-8 text-primary-500" />, title: "Full Stack Development", description: "Building complete web applications from backend to frontend" },
              { icon: <Server className="h-8 w-8 text-secondary-500" />, title: "Backend Expertise", description: "Specializing in Java, Spring Boot, and APIs" },
              { icon: <Database className="h-8 w-8 text-accent-500" />, title: "Database Design", description: "Creating efficient schemas and queries with PostgreSQL" },
              { icon: <Globe className="h-8 w-8 text-success-500" />, title: "API Development", description: "RESTful and GraphQL API design and implementation" },
              { icon: <Cpu className="h-8 w-8 text-warning-500" />, title: "AI Integration", description: "Implementing ML/AI solutions in web applications" },
              { icon: <Terminal className="h-8 w-8 text-error-500" />, title: "Dev Tools", description: "Git, GitHub, CI/CD, Docker, and more" },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                className="glass-card p-5 flex flex-col items-center text-center hover:shadow-lg transition-shadow"
              >
                <div className="mb-4 p-3 rounded-full bg-white/50 dark:bg-dark-700/50">
                  {feature.icon}
                </div>
                <h3 className="font-medium mb-2">{feature.title}</h3>
                <p className="text-sm text-dark-400 dark:text-dark-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;