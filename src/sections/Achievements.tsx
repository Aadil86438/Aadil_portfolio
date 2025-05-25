import { motion } from 'framer-motion';
import { Trophy, FileText, Star } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      title: "Smart India Hackathon 2024",
      description: "Developed 'StationSync', a railway station management system to optimize operations and improve passenger experience.",
      icon: <Trophy className="h-8 w-8 text-warning-500" />,
      type: "hackathon"
    },
    {
      title: "AI-powered Stroke Risk Prediction",
      description: "Published research paper in the International Journal of Creative Research Thoughts (IJCRT) on an innovative approach to predict stroke risk using machine learning algorithms.",
      icon: <FileText className="h-8 w-8 text-primary-500" />,
      type: "publication"
    },
    {
      title: "Inter-College Coding Competition Winner",
      description: "Secured first place in 'CodeCraft 2023', a competitive programming event with participants from 30+ colleges.",
      icon: <Star className="h-8 w-8 text-accent-500" />,
      type: "award"
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Hackathons & Publications</h2>
          <p className="section-subtitle">
            Recognitions and accomplishments from my professional journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-6 relative overflow-hidden h-full"
            >
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full filter blur-3xl 
                ${achievement.type === 'hackathon' ? 'bg-warning-300/10 dark:bg-warning-700/10' : 
                  achievement.type === 'publication' ? 'bg-primary-300/10 dark:bg-primary-700/10' : 
                  'bg-accent-300/10 dark:bg-accent-700/10'}`}
              ></div>
              
              <div className="relative z-10">
                <div className="p-3 rounded-full bg-white/50 dark:bg-dark-700/50 inline-block mb-4">
                  {achievement.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3">{achievement.title}</h3>
                
                <p className="text-dark-500 dark:text-dark-200">
                  {achievement.description}
                </p>
                
                <div className="mt-4 inline-block px-3 py-1 rounded-full text-sm 
                  ${achievement.type === 'hackathon' ? 'bg-warning-100 text-warning-700 dark:bg-warning-900/30 dark:text-warning-300' : 
                    achievement.type === 'publication' ? 'bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300' : 
                    'bg-accent-100 text-accent-700 dark:bg-accent-900/30 dark:text-accent-300'}"
                >
                  {achievement.type === 'hackathon' ? 'Hackathon' : 
                    achievement.type === 'publication' ? 'Publication' : 'Award'}
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
          className="mt-16 glass-card p-8 max-w-3xl mx-auto relative overflow-hidden"
        >
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-primary-300/10 dark:bg-primary-700/10 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent-300/10 dark:bg-accent-700/10 rounded-full filter blur-3xl"></div>
          
          <div className="relative z-10 text-center">
            <h3 className="text-2xl font-bold mb-4">Looking for Opportunities</h3>
            <p className="text-dark-500 dark:text-dark-200 mb-6">
              I'm currently open to job opportunities and freelance projects where I can apply my skills to create impactful solutions. Let's build something amazing together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#contact" className="btn btn-primary">
                Contact Me
              </a>
              <a 
                href="/resume.pdf" 
                download 
                className="btn btn-outline"
              >
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;