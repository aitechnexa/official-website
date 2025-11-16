// Company content and data

export const companyInfo = {
  name: "AiTech Nexa",
  tagline: "Empowering the Future with AI-Driven Solutions",
  description: "A fresh startup helping businesses innovate with intelligent technology and modern development expertise.",
  email: "aitechnexa@gmail.com",
  phone: "+6012-3063642",
  address: "Selangor, Malaysia",
  social: {
    linkedin: "https://linkedin.com/company/aitechnexxa",
    github: "https://github.com/aitechnexxa",
    facebook: "https://facebook.com/aitechnexxa",
    twitter: "https://twitter.com/aitechnexxa",
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
