import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-dark-100/5 dark:bg-dark-800/50">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            My academic background and qualifications
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            <div className="absolute -top-16 -right-16 w-48 h-48 bg-primary-300/10 dark:bg-primary-700/10 rounded-full filter blur-3xl"></div>
            
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/4 flex justify-center">
                <div className="w-20 h-20 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <GraduationCap className="h-10 w-10 text-primary-500" />
                </div>
              </div>
              
              <div className="md:w-3/4 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Engineering in Computer Science</h3>
                    <div className="text-primary-600 dark:text-primary-400 font-medium">
                      Aalim Muhammed Salegh College of Engineering, Chennai
                    </div>
                  </div>
                  
                  <div className="mt-2 md:mt-0 flex items-center text-dark-400 dark:text-dark-300 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    2021 - 2025 (Expected)
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <Award className="h-5 w-5 mr-2 text-accent-500" />
                    <span className="font-medium">CGPA: 8.0/10.0</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3 text-dark-600 dark:text-dark-100">Relevant Coursework:</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {[
                      "Data Structures & Algorithms",
                      "Database Management Systems",
                      "Operating Systems",
                      "Computer Networks",
                      "Software Engineering",
                      "Web Technologies"
                    ].map((course, index) => (
                      <div
                        key={index}
                        className="px-3 py-2 bg-dark-100/30 dark:bg-dark-700/30 rounded-md text-sm"
                      >
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-medium mb-3 text-dark-600 dark:text-dark-100">Academic Achievements:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="min-w-4 h-4 mt-1.5 mr-3 rounded-full bg-primary-200 dark:bg-primary-800"></div>
                      <span className="text-dark-500 dark:text-dark-200">Received merit scholarship for academic excellence (2022-2023)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-4 h-4 mt-1.5 mr-3 rounded-full bg-primary-200 dark:bg-primary-800"></div>
                      <span className="text-dark-500 dark:text-dark-200">Represented college in national-level coding competitions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="min-w-4 h-4 mt-1.5 mr-3 rounded-full bg-primary-200 dark:bg-primary-800"></div>
                      <span className="text-dark-500 dark:text-dark-200">Organized technical workshops on web development and machine learning</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;