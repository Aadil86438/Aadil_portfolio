import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight, Database, Server, Brain, Users } from 'lucide-react';

const projectsData = [
  {
    id: 1,
    title: "Student Attendance & Progress Tracking System",
    description: "A comprehensive full-stack CRUD application for educational institutions to manage student data, attendance records, and fee information. Features include real-time tracking, detailed reports, and administrative dashboards.",
    technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "REST API", "JWT Auth"],
    icon: <Database className="h-10 w-10 text-primary-500" />,
    image: "https://images.pexels.com/photos/5428003/pexels-photo-5428003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "https://github.com/Aadil86438?tab=repositories",
    githubLink: "https://github.com/Aadil86438?tab=repositories"
  },
  {
    id: 2,
    title: "AI-Powered Stroke Risk Prediction App",
    description: "A machine learning application that predicts stroke risk based on patient data. The system generates detailed PDF reports for healthcare professionals and includes visualizations to help understand risk factors.",
    technologies: ["Python", "Flask", "TensorFlow", "PostgreSQL", "React", "Chart.js", "PDF Generation"],
    icon: <Brain className="h-10 w-10 text-secondary-500" />,
    image: "https://images.pexels.com/photos/8439094/pexels-photo-8439094.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "https://github.com/Aadil86438?tab=repositories",
    githubLink: "https://github.com/Aadil86438?tab=repositories"
  },
  {
    id: 3,
    title: "StationSync - Smart Railway Management",
    description: "A railway station management system developed during Smart India Hackathon 2024. The platform helps optimize railway operations, track train schedules, and improve passenger experience with real-time updates.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "WebSockets", "React", "Material UI"],
    icon: <Server className="h-10 w-10 text-accent-500" />,
    image: "https://images.pexels.com/photos/2031755/pexels-photo-2031755.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "https://github.com/Aadil86438?tab=repositories",
    githubLink: "https://github.com/Aadil86438?tab=repositories"
  }
];

const Projects = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="projects" className="py-20 bg-dark-100/5 dark:bg-dark-800/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Explore some of my recent work and technical accomplishments
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12">
          {projectsData.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="glass-card overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-2/5 h-64 md:h-auto relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent flex items-end p-4">
                    <div className="text-white">
                      <div className="p-2 rounded-full bg-white/10 backdrop-blur-sm inline-block mb-2">
                        {project.icon}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 md:w-3/5 md:p-8">
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-dark-500 dark:text-dark-200 mb-6">
                    {expandedId === project.id 
                      ? project.description 
                      : `${project.description.substring(0, 150)}...`}
                  </p>
                  
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="inline-flex items-center text-primary-500 hover:text-primary-600 mb-6 transition-colors"
                  >
                    {expandedId === project.id ? "Read less" : "Read more"}
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                  
                  <AnimatePresence>
                    {expandedId === project.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mb-6 overflow-hidden"
                      >
                        <h4 className="font-medium mb-2">Key Technologies:</h4>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-dark-500 dark:text-dark-200 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/Aadil86438?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
          >
            <Github className="mr-2 h-5 w-5" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;