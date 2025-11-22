// Company content and data

export const companyInfo = {
  name: "AiTech Nexa",
  tagline: "Empowering the Future with AI-Driven Solutions",
  description: "A fresh startup helping businesses innovate with intelligent technology and modern development expertise.",
  email: "admin@aitechnexa.com",
  phone: "+6012-3063642",
  address: "Selangor, Malaysia",
  social: {
    // Add your social media links here when created
    // linkedin: "https://linkedin.com/company/aitechnexxa",
    // github: "https://github.com/aitechnexxa",
    // facebook: "https://facebook.com/aitechnexxa",
    // twitter: "https://twitter.com/aitechnexxa",
  }
};

export const aboutData = {
  intro: "AiTech Nexa is an emerging startup specializing in artificial intelligence, software development, and digital innovation. Founded recently with a passion for cutting-edge technology, we empower businesses to transform their operations through intelligent solutions and modern development practices.",
  mission: "To deliver innovative AI-driven solutions that transform businesses and create lasting value for our clients, while growing as a trusted technology partner.",
  vision: "To establish ourselves as a leading force in AI innovation, building a reputation for excellence and shaping the future of intelligent technology solutions."
};

export const services = [
  {
    id: 1,
    title: "AI Development",
    description: "Custom AI solutions powered by machine learning and deep learning technologies.",
    icon: "Brain"
  },
  {
    id: 2,
    title: "Cloud Integration",
    description: "Seamless cloud migration and integration services for scalable infrastructure.",
    icon: "Cloud"
  },
  {
    id: 3,
    title: "Web Development",
    description: "Modern and responsive web applications built with cutting-edge frameworks.",
    icon: "Smartphone"
  },
  {
    id: 4,
    title: "Data Analytics",
    description: "Transform raw data into actionable insights with advanced analytics solutions.",
    icon: "BarChart"
  }
];

export const projects = [
  {
    id: 1,
    title: "KejeHub",
    description: "A comprehensive web development system designed to streamline project management, collaboration, and deployment workflows. Built with modern technologies for optimal performance and user experience.",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "https://kejehub.com/",
    status: "Live",
    technologies: ["ReactJs","Vite", "Node.js", "MySQL", "Material UI", "ApexChart"]
  },
  {
    id: 2,
    title: "Database Query Assistant",
    description: "A simple AI assistant for querying data within databases to get insights and information. Leverages advanced language models to translate natural language queries into database operations.",
    category: "AI Development",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#",
    status: "Prototype",
    technologies: ["React", "OpenGPT-4", "LangGraph", "FastAPI", "Docker", "SQLAlchemy"]
  }
];

export const technologies = [
  // Frontend
  { name: "React", icon: "FaReact" },
  { name: "Vue", icon: "FaVuejs" },
  { name: "Angular", icon: "FaAngular" },
  { name: "TypeScript", icon: "SiTypescript" },
  { name: "Tailwind CSS", icon: "SiTailwindcss" },
  { name: "Bootstrap", icon: "FaBootstrap" },
  { name: "Material UI", icon: "SiMui" },
  { name: "Quasar", icon: "SiQuasar" },
  
  // Backend
  { name: "Node.js", icon: "FaNodeJs" },
  { name: "Express.js", icon: "SiExpress" },
  { name: "Python", icon: "FaPython" },
  { name: "Flask", icon: "SiFlask" },
  { name: "FastAPI", icon: "SiFastapi" },
  
  // Database & ORM
  { name: "PostgreSQL", icon: "SiPostgresql" },
  { name: "MySQL", icon: "SiMysql" },
  { name: "SQLAlchemy", icon: "SiSqlalchemy" },
  
  // Data Visualization
  { name: "ApexCharts", icon: "FaChartLine" },
  
  // Animation
  { name: "Framer Motion", icon: "SiFramer" },
  { name: "GSAP", icon: "SiGreensock" },
  
  // AI/ML & LLM
  { name: "TensorFlow", icon: "SiTensorflow" },
  { name: "LangChain", icon: "SiLangchain" },
  { name: "LangGraph", icon: "SiLangchain" },
  
  // API & Documentation
  { name: "OpenAPI", icon: "SiOpenapiinitiative" },
  
  // Cloud & DevOps
  { name: "AWS", icon: "FaAws" },
  { name: "Docker", icon: "FaDocker" }
];

export const testimonials = [
  {
    id: 1,
    name: "Azka Afiq",
    position: "Worker",
    company: "Kedai Emas Mohd Zaid Puteh",
    feedback: "AiTech Nexa transformed our business with their solutions. The team's expertise and dedication are unmatched.",
    rating: 5
  },
  {
    id: 2,
    name: "Nadia",
    position: "Worker",
    company: "Kedai Emas Mohd Zaid Puteh",
    feedback: "Outstanding service and cutting-edge technology. They delivered beyond our expectations and on time.",
    rating: 5
  },
  {
    id: 3,
    name: "Nurul Aminah",
    position: "Worker",
    company: "Kedai Emas Mohd Zaid Puteh",
    feedback: "The solutions provided by AiTech Nexa have saved us countless hours and significantly reduced costs.",
    rating: 5
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: "Landing Page",
    description: "Perfect for startups and small businesses looking to establish online presence",
    price: "RM 1,000",
    duration: "starting from",
    popular: false,
    features: [
      "Single page responsive design",
      "Up to 5 sections (Hero, About, Services, Contact, Footer)",
      "Mobile-friendly layout",
      "Contact form integration",
      "Basic SEO optimization",
      "Social media links",
      "Modern and clean design",
      "Fast loading performance",
      "Cross-browser compatibility",
      "1 round of revisions",
      "2 weeks delivery time",
      "1 month post-launch support"
    ],
    limitations: [
      "No backend functionality",
      "No database integration",
      "Limited to static content"
    ],
    icon: "FileText"
  },
  {
    id: 2,
    name: "Custom Solution",
    description: "Fully customized website or web application tailored to your specific needs. Pricing is based on your requirements, features, and project complexity.",
    price: "RM 5,000+",
    duration: "starting from",
    popular: true,
    features: [
      "Unlimited pages and sections",
      "Custom feature development",
      "Database design & integration",
      "User authentication & authorization",
      "Admin dashboard & CMS",
      "Payment gateway integration (if needed)",
      "Third-party API integrations",
      "E-commerce functionality (if needed)",
      "Real-time features (chat, notifications)",
      "Advanced SEO optimization",
      "Data visualization & analytics",
      "Email & SMS notifications",
      "File upload & management",
      "Responsive design for all devices",
      "Security best practices",
      "Scalable architecture",
      "AI/ML integration (if needed)",
      "Cloud deployment & hosting setup",
      "Comprehensive testing",
      "Unlimited revisions during development",
      "Timeline varies by project scope",
      "Extended post-launch support",
      "Documentation & training",
      "Performance monitoring & optimization"
    ],
    limitations: [
      "Final price depends on specific requirements and features",
      "Requires detailed consultation and requirements gathering",
      "Complex features may increase timeline and cost"
    ],
    icon: "Layers"
  }
];

export const pricingAddOns = [
  {
    name: "Support & Hosting (Year 1)",
    price: "Free",
    description: "Included with all packages",
    features: [
      "Technical support via email and WhatsApp",
      "Hosting system (3GB Cloud Storage)",
      "Regular backup data"
    ]
  },
  {
    name: "Support & Hosting (Year 2 onwards)",
    price: "RM 100/month",
    priceAnnual: "(RM 1,200/year)",
    description: "Continued support and hosting",
    features: [
      "Technical support via email and WhatsApp",
      "Hosting system (3GB Cloud Storage)",
      "Regular backup data"
    ]
  },
  {
    name: "Additional Storage",
    price: "RM 10-20/GB/month",
    description: "Expand your storage capacity",
    features: [
      "Pricing depends on storage needs"
    ]
  },
  {
    name: "Additional Pages",
    price: "Based on requirements",
    description: "Add more pages to your existing website",
    features: [
      "Pricing varies by page complexity and features"
    ]
  },
  {
    name: "Custom Feature Development",
    price: "Based on requirements",
    description: "Add custom features to your existing solution",
    features: [
      "Pricing depends on feature complexity and development time"
    ]
  }
];
