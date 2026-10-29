export const pricingPlans = [
  {
    id: 1, name: 'Landing Page', icon: 'FileText', popular: false, price: 'RM 1,000', duration: 'starting from',
    description: 'Perfect for startups and small businesses looking to establish an online presence.',
    features: ['Single page responsive design', 'Up to 5 sections (Hero, About, Services, Contact, Footer)', 'Mobile-friendly layout', 'Contact form integration', 'Social media links', 'Modern and clean design', 'Fast loading performance', 'Cross-browser compatibility', '1 round of revisions', '2 weeks delivery time', '1 month post-launch support'],
    limitations: ['No backend functionality', 'No database integration', 'Limited to static content'],
  },
  {
    id: 2, name: 'Custom Solution', icon: 'Layers', popular: true, price: 'RM 5,000+', duration: 'starting from',
    description: 'Fully customised website or web application tailored to your needs. Pricing is based on requirements, features and complexity.',
    features: ['Unlimited pages and sections', 'Custom feature development', 'Database design & integration', 'User authentication & authorization', 'Admin dashboard & CMS', 'Payment gateway integration (if needed)', 'Third-party API integrations', 'E-commerce functionality (if needed)', 'Real-time features (chat, notifications)', 'Data visualization & analytics', 'AI/ML integration (if needed)', 'Cloud deployment & hosting setup', 'Security best practices', 'Scalable architecture', 'Extended post-launch support', 'Documentation & training'],
    limitations: ['Final price depends on requirements and features', 'Requires detailed consultation', 'Complex features may increase timeline and cost'],
  },
]

export const pricingAddOns = [
  { name: 'Support & Hosting (Year 1)', price: 'Free', description: 'Included with all packages', features: ['Technical support via email and WhatsApp', 'Hosting system (3GB Cloud Storage)', 'Regular backup data'] },
  { name: 'Support & Hosting (Year 2 onwards)', price: 'RM 100/month', priceAnnual: '(RM 1,200/year)', description: 'Continued support and hosting', features: ['Technical support via email and WhatsApp', 'Hosting system (3GB Cloud Storage)', 'Regular backup data'] },
  { name: 'Additional Storage', price: 'RM 10-20/GB/month', description: 'Expand your storage capacity', features: ['Pricing depends on storage needs'] },
  { name: 'Additional Pages', price: 'Based on requirements', description: 'Add more pages to your existing website', features: ['Pricing varies by page complexity and features'] },
  { name: 'Custom Feature Development', price: 'Based on requirements', description: 'Add custom features to your existing solution', features: ['Pricing depends on feature complexity and development time'] },
]
