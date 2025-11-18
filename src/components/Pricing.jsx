import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, X, FileText, Globe, ShoppingCart, Layers, Brain, Building, Sparkles } from 'lucide-react';
import { pricingPlans, pricingAddOns } from '../data/content';

const iconMap = {
  FileText: FileText,
  Globe: Globe,
  ShoppingCart: ShoppingCart,
  Layers: Layers,
  Brain: Brain,
  Building: Building,
};

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showAddOns, setShowAddOns] = useState(false);

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-brand-black to-brand-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            From simple landing pages to enterprise solutions - choose the perfect package for your needs
          </p>
          <div className="glass-card rounded-lg p-4 max-w-2xl mx-auto border border-brand-accent/30">
            <p className="text-sm text-gray-300">
              <span className="text-brand-accent font-semibold">💡 Note:</span> Custom Solution pricing starts from RM 5,000 and varies based on your specific requirements, features, and project complexity. Contact us for a detailed quote tailored to your needs.
            </p>
          </div>
        </motion.div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => {
            const IconComponent = iconMap[plan.icon];
            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative group ${plan.popular ? 'lg:scale-105' : ''}`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-brand-accent text-white px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-glow">
                      <Sparkles className="w-4 h-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className={`glass-card rounded-2xl p-8 h-full transition-all duration-300 ${
                  plan.popular 
                    ? 'border-2 border-brand-accent shadow-glow-lg' 
                    : 'hover:border-brand-accent/50'
                }`}>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${
                      plan.popular 
                        ? 'bg-brand-accent text-white' 
                        : 'bg-brand-accent/10 text-brand-accent'
                    }`}>
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 mb-6 min-h-[60px]">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                    </div>
                    <p className="text-gray-400 text-sm mt-1">{plan.duration}</p>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-6">
                    <h4 className="text-white font-semibold text-sm uppercase tracking-wide">What's Included:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                          <Check className="w-5 h-5 text-brand-accent flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Limitations */}
                  {plan.limitations && plan.limitations.length > 0 && (
                    <div className="space-y-4 mb-8 pt-6 border-t border-white/10">
                      <h4 className="text-gray-400 font-semibold text-sm uppercase tracking-wide">Limitations:</h4>
                      <ul className="space-y-3">
                        {plan.limitations.map((limitation, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-500 text-sm">
                            <X className="w-5 h-5 flex-shrink-0 mt-0.5" />
                            <span>{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
                    className={`w-full py-4 rounded-full font-bold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-brand-accent text-white hover:shadow-glow-lg'
                        : 'bg-white/5 text-white hover:bg-brand-accent hover:text-white'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get Started
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Add-ons Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Optional <span className="gradient-text">Add-Ons</span>
            </h3>
            <p className="text-gray-400">Enhance your package with additional services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pricingAddOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-brand-accent/50 transition-all duration-300"
              >
                <div className="mb-4">
                  <h4 className="text-lg font-bold text-white mb-2">{addon.name}</h4>
                  <div className="flex items-baseline gap-2">
                    <span className="text-brand-accent font-bold text-xl">
                      {addon.price}
                    </span>
                    {addon.priceAnnual && (
                      <span className="text-gray-400 text-sm">
                        {addon.priceAnnual}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 text-sm mb-4">{addon.description}</p>
                {addon.features && addon.features.length > 0 && (
                  <ul className="space-y-2">
                    {addon.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                        <span className="text-brand-accent mt-1">-</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-20 text-center glass-card rounded-2xl p-12"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Not sure which package is right for you?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project requirements and find the perfect solution together.
          </p>
          <motion.button
            onClick={() => document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' })}
            className="bg-brand-accent px-10 py-5 rounded-full text-white font-bold text-lg hover:shadow-glow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Free Consultation
          </motion.button>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        >
          <div className="glass-card rounded-xl p-6">
            <div className="text-3xl font-bold text-brand-accent mb-2">100%</div>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <div className="text-3xl font-bold text-brand-accent mb-2">On-Time</div>
            <p className="text-gray-400">Project Delivery</p>
          </div>
          <div className="glass-card rounded-xl p-6">
            <div className="text-3xl font-bold text-brand-accent mb-2">24/7</div>
            <p className="text-gray-400">Support Available</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
