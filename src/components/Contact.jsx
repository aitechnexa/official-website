import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { companyInfo } from '../data/content';

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: '3f7d0989-8529-435a-a846-8689050ab0d3',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Form Submission from ${formData.name}`,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-brand-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your business? Let's start a conversation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-300 font-semibold mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors duration-300"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-gray-300 font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors duration-300"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-accent transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-10 py-5 rounded-full text-white font-bold text-lg transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-brand-accent hover:shadow-glow-lg'
                }`}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                {!isSubmitting && <Send className="w-5 h-5" />}
              </motion.button>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center"
                >
                  ✓ Thank you! Your message has been sent successfully. We'll get back to you soon!
                </motion.div>
              )}
              
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-500/20 border border-red-500 rounded-lg text-red-400 text-center"
                >
                  ✗ Oops! Something went wrong. Please try again or email us directly.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 glass-card glass-card-hover rounded-xl p-6"
              >
                <div className="bg-brand-accent/10 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
                  <p className="text-gray-400">{companyInfo.email}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 glass-card glass-card-hover rounded-xl p-6"
              >
                <div className="bg-brand-accent/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
                  <p className="text-gray-400">{companyInfo.phone}</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 glass-card glass-card-hover rounded-xl p-6"
              >
                <div className="bg-brand-accent/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
                  <p className="text-gray-400">{companyInfo.address}</p>
                </div>
              </motion.div>
            </div>

            {/* Map Placeholder */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden h-64 hover:border-white/50 transition-all duration-300"
            >
              <div className="w-full h-full bg-gradient-to-br from-white/5 via-gray-900 to-white/5 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-white mx-auto mb-2" />
                  <p className="text-gray-400">Interactive Map</p>
                  <p className="text-sm text-gray-500">Google Maps Integration</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
