import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const experienceData = [
  {
    company: "Digitzen",
    location: "Singapore (Remote)",
    position: "Backend Developer Intern",
    period: "May 2023 - Aug 2023",
    description: "Developed and maintained RESTful APIs using Flask and PostgreSQL. Implemented authentication systems and database optimization. Worked in an Agile environment with international team members.",
    achievements: [
      "Reduced API response time by 40% through database query optimization",
      "Built a secure authentication and authorization system using JWT",
      "Developed a custom admin dashboard for data visualization",
      "Participated in daily stand-ups and bi-weekly sprint planning meetings"
    ]
  },
  {
    company: "Majestic Technologies",
    location: "Chennai, India",
    position: "Full Stack Developer Intern",
    period: "Dec 2022 - Mar 2023",
    description: "Assisted in the development of a customer relationship management system. Worked on both backend (Java, Spring Boot) and frontend (React) components. Conducted API testing and module development.",
    achievements: [
      "Implemented 5 major features in the CRM system from concept to production",
      "Created documentation for API endpoints and usage guidelines",
      "Developed reusable React components used across multiple projects",
      "Collaborated with the design team to implement responsive UI"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            My journey through various professional roles and internships
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experienceData.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 mb-12 last:mb-0"
            >
              {/* Timeline line */}
              {index < experienceData.length - 1 && (
                <div className="absolute left-3.5 top-8 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800/50"></div>
              )}
              
              {/* Timeline dot */}
              <div className="absolute left-0 top-6 w-7 h-7 rounded-full bg-primary-500 flex items-center justify-center">
                <Briefcase className="h-3.5 w-3.5 text-white" />
              </div>
              
              <div className="glass-card p-6 md:p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{experience.position}</h3>
                    <div className="text-primary-600 dark:text-primary-400 font-medium">
                      {experience.company}
                    </div>
                  </div>
                  
                  <div className="mt-2 md:mt-0 flex flex-col md:flex-row md:items-center text-dark-400 dark:text-dark-300 text-sm">
                    <div className="flex items-center mb-1 md:mb-0 md:mr-4">
                      <Calendar className="h-4 w-4 mr-1" />
                      {experience.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {experience.location}
                    </div>
                  </div>
                </div>
                
                <p className="text-dark-500 dark:text-dark-200 mb-4">
                  {experience.description}
                </p>
                
                <div>
                  <h4 className="font-medium mb-2 text-dark-600 dark:text-dark-100">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="min-w-4 h-4 mt-1.5 mr-3 rounded-full bg-primary-200 dark:bg-primary-800"></div>
                        <span className="text-dark-500 dark:text-dark-200">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;