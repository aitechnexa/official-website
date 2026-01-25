import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/content';

const Portfolio = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-b from-brand-black via-gray-900 to-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Showcasing our live product and innovative solutions
          </p>
        </motion.div>

        {/* Featured Product - Centered Single Card */}
        <div className="flex justify-center gap-6 flex-wrap">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl glass-card glass-card-hover flex-1 min-w-[400px] max-w-[550px]"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                
                {/* Status & Category Badges */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                  {project.status && (
                    <div className="bg-green-500/90 backdrop-blur-sm px-4 py-2 rounded-full text-white font-semibold text-sm flex items-center gap-2">
                      <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                      {project.status}
                    </div>
                  )}
                  <div className="bg-brand-accent/90 backdrop-blur-sm px-4 py-2 rounded-full text-brand-black font-semibold text-sm">
                    {project.category}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {/* Technologies Used */}
                {project.technologies && (
                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2 font-semibold">Built With:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Visit Live Site Link */}
                {project.link ? (
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-brand-accent text-brand-black px-6 py-3 rounded-full font-bold hover:bg-white transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Visit Live Site
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </motion.a>
                ) : (
                  <motion.button
                    className="inline-flex items-center text-brand-accent hover:text-white transition-colors duration-300 font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    View Case Study
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </motion.button>
                )}
              </div>

              {/* Decorative Element */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-brand-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* More Coming Soon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 text-lg">
            More exciting projects coming soon! 🚀
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
