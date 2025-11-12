import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Lightbulb } from 'lucide-react';
import { aboutData } from '../data/content';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Our Mission",
      description: aboutData.mission,
      color: "brand-green"
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Our Vision",
      description: aboutData.vision,
      color: "brand-silver"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Approach",
      description: "We combine cutting-edge technology with deep industry expertise to deliver solutions that drive real business value.",
      color: "brand-green"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-brand-black via-gray-900 to-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">AiTech Nexa</span>
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {aboutData.intro}
          </p>
        </motion.div>

        {/* Mission, Vision, Approach Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              <div className="glass-card glass-card-hover rounded-2xl p-8 h-full group-hover:scale-105">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-${card.color}/10 text-${card.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  {card.icon}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-gray-400 leading-relaxed">{card.description}</p>

                {/* Decorative Element */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-${card.color}/5 rounded-bl-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 bg-gradient-to-r from-white/5 via-gray-900 to-white/5 rounded-2xl p-8 md:p-12 border border-white/20"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "99%", label: "Client Satisfaction" },
              { value: "24/7", label: "Support Available" },
              { value: "100%", label: "Secure Solutions" },
              { value: "Global", label: "Reach" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.1 }}
                className="cursor-default"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
