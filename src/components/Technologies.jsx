import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { technologies } from '../data/content';
// Import all technology icons
import { FaReact, FaVuejs, FaAngular, FaBootstrap, FaNodeJs, FaPython, FaAws, FaDocker, FaChartLine } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiExpress, SiPostgresql, SiMysql, SiTensorflow, SiQuasar } from 'react-icons/si';

// Icon mapping object
const iconMap = {
  FaReact,
  FaVuejs,
  FaAngular,
  SiTypescript,
  SiTailwindcss,
  FaBootstrap,
  SiQuasar,
  FaNodeJs,
  SiExpress,
  FaPython,
  SiPostgresql,
  SiMysql,
  FaChartLine,
  SiTensorflow,
  FaAws,
  FaDocker
};

const Technologies = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="technologies" className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies <span className="gradient-text">We Use</span>
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We build with industry-leading technologies to deliver cutting-edge solutions
          </p>
        </motion.div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = iconMap[tech.icon];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="group"
              >
                <div className="glass-card glass-card-hover rounded-2xl p-6 h-full flex flex-col items-center justify-center cursor-pointer group-hover:scale-110">
                  {/* Icon */}
                  <div className="text-6xl mb-4 text-white group-hover:text-brand-accent group-hover:scale-125 transition-all duration-300">
                    {IconComponent && <IconComponent />}
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-center font-semibold text-sm text-white group-hover:text-brand-accent transition-colors duration-300">
                    {tech.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-white/5 via-gray-900 to-white/5 rounded-2xl p-8 md:p-12 border border-white/20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
            Always Evolving
          </h3>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            We continuously update our technology stack to stay ahead of the curve and provide our clients with the most innovative and efficient solutions available.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Technologies;
