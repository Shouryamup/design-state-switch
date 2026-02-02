// Portfolio data extracted from resume
export const portfolioData = {
  personal: {
    name: "Shourya Mupparapu",
    title: "Full-Stack Software Developer",
    headline: "Building scalable systems from prototype to production",
    location: "Grand Rapids, MI (Open to Relocate)",
    email: "shouryamup01@gmail.com",
    phone: "+1(352)871-5857",
    linkedin: "linkedin.com/in/shourya-mupparapu",
    resumeUrl: "/Shourya-Resume.pdf",
  },

  about: {
    bio: "I'm a passionate Full-Stack Software Developer with a Master's degree in Computer Science from the University of Florida. I specialize in building scalable, production-ready systems using modern technologies like React, Node.js, and AWS. My journey spans from crafting intelligent AI agents to architecting cloud-native microservices.",
    values: [
      {
        icon: "🚀",
        title: "Ship Fast, Iterate Faster",
        description: "I believe in rapid prototyping and continuous improvement.",
      },
      {
        icon: "🧩",
        title: "Clean Architecture",
        description: "Writing maintainable, modular code that scales with the team.",
      },
      {
        icon: "🤝",
        title: "Collaborative Spirit",
        description: "Great software is built by great teams working together.",
      },
      {
        icon: "📚",
        title: "Lifelong Learner",
        description: "Always exploring new technologies and best practices.",
      },
    ],
    background: "With experience at Initech Global and CAW Studios, I've led backend migrations that improved query performance by 40%, built serverless microservices on AWS, and developed AI-powered banking platforms. I hold AWS Solution Architect and Azure AI certifications, reflecting my commitment to cloud-native development.",
  },

  inspirations: [
    {
      category: "Philosophy",
      icon: "⚡",
      title: "Move Fast & Build Things",
      description: "Inspired by the Silicon Valley ethos of rapid iteration and learning from failure.",
    },
    {
      category: "Technology",
      icon: "☁️",
      title: "Cloud-Native Architecture",
      description: "AWS and serverless computing have transformed how I think about scalable systems.",
      link: "https://aws.amazon.com/",
    },
    {
      category: "Design",
      icon: "🎨",
      title: "Minimal & Functional",
      description: "Clean interfaces that prioritize user experience over unnecessary complexity.",
    },
    {
      category: "AI/ML",
      icon: "🧠",
      title: "Intelligent Systems",
      description: "The intersection of AI and software engineering excites me most.",
      link: "https://openai.com/",
    },
    {
      category: "Community",
      icon: "🌐",
      title: "Open Source",
      description: "Contributing to and learning from the global developer community.",
      link: "https://github.com/",
    },
    {
      category: "Craft",
      icon: "🛠️",
      title: "Developer Experience",
      description: "Tools that make developers productive inspire my approach to building software.",
    },
  ],
  
  education: [
    {
      degree: "Master of Science, Computer Science",
      school: "University of Florida",
      location: "Gainesville, FL",
      date: "Dec 2024",
      coursework: ["Advanced Data Structures", "Analysis of Algorithms", "Natural Language Processing", "Data Engineering", "Distributed Operating Systems", "Computer Networks"],
    },
    {
      degree: "Bachelor of Technology, Computer Science",
      school: "Bennett University",
      location: "Delhi, India",
      date: "May 2023",
    },
  ],
  
  skills: {
    languages: ["Python", "C++", "Java", "JavaScript", "TypeScript", "SQL", "MATLAB"],
    frontend: ["React", "Angular", "Next.js", "HTML5", "CSS3"],
    backend: ["Node.js", "Spring Boot", "Express.js", "RESTful APIs", "MySQL", "DynamoDB", "Redis"],
    cloud: ["AWS", "Azure", "Docker", "Kubernetes", "Jenkins", "CI/CD", "Git"],
  },
  
  experience: [
    {
      id: "exp_01",
      title: "Software Developer",
      company: "Initech Global",
      location: "Grand Rapids, MI, USA",
      period: "May 2024 – Present",
      highlights: [
        "Engineered reusable React components, improving code modularity and maintainability",
        "Developed scalable, serverless microservices using Next.js and AWS Lambda",
        "Led backend migration from MySQL to DynamoDB and OpenSearch, improving query performance by 40%",
        "Built and optimized Java Spring Boot microservices, reducing operational overhead by 25%",
        "Owned features end-to-end including design, development, testing, and production support",
      ],
    },
    {
      id: "exp_02",
      title: "Software Developer Intern",
      company: "CAW Studios",
      location: "Hyderabad, India",
      period: "Jun 2022 – Dec 2022",
      highlights: [
        "Developed and optimized Node.js backend services with React frontend",
        "Built modular design system and reusable UI components using React and Storybook",
        "Implemented infrastructure as code with AWS CloudFormation and CDK",
        "Designed CRON jobs for automated notifications, boosting user engagement by 20%",
      ],
    },
  ],
  
  projects: [
    {
      id: "proj_01",
      name: "IntelliBank AI",
      tech: ["Agentic AI", "React", "Node.js", "Express.js", "MSSQL", "AWS S3", "Azure OpenAI"],
      period: "Aug 2024 – Dec 2024",
      description: "Architected multi-agent AI system with inter-agent communication using Azure OpenAI and Copilot Studio. Developed full-stack banking intelligence platform with real-time market dashboards and interactive chatbot.",
      image: "intellibank",
      githubUrl: "",
      highlights: [
        "Architected multi-agent AI system with inter-agent communication using Azure OpenAI and Copilot Studio, implementing 5 autonomous agents with coordinated workflows and advanced prompt engineering.",
        "Developed full-stack banking intelligence platform powered by multi-agent, featuring real-time market dashboards, customer analysis pages, and interactive chatbot using React, Node.js, REST APIs, and Azure SQL database.",
      ],
    },
    {
      id: "proj_02",
      name: "GatorHive",
      tech: ["React.js", "Node.js", "AWS RDS", "MySQL", "AWS S3", "CloudFront"],
      period: "Jan 2024 – Apr 2024",
      description: "Comprehensive web application for efficient event management. Integrated AWS RDS and S3 for persistent storage and accelerated content delivery using CloudFront.",
      image: "gatorhive",
      githubUrl: "",
      highlights: [
        "Utilized comprehensive user research techniques like affinity diagrams and focus groups to understand user needs and preferences.",
        "Developed a comprehensive web application for efficient event management, employing React.js, CSS, and Node.js.",
        "Integrated AWS RDS (MySQL) and S3 for persistent storage and media, and accelerated content delivery using CloudFront.",
      ],
    },
    {
      id: "proj_03",
      name: "ASL Classification",
      tech: ["Python", "PyTorch", "NumPy", "Deep Learning", "ResNet"],
      period: "Aug 2023 – Dec 2023",
      description: "Led development of ResNet-based deep learning model for American Sign Language classification. Achieved 99.26% test accuracy with near-perfect precision and recall.",
      image: "asl",
      githubUrl: "",
      highlights: [
        "Led a team of three through the entire project lifecycle, from data collection to model deployment on HiperGator, the University of Florida's high-performance computing supercomputer.",
        "Designed a ResNet based deep learning architecture to overcome vanishing gradient issues in deep neural networks.",
        "Engineered the model with exceptional performance in classifying American Sign Language (ASL) images, achieving a test accuracy of 99.26%, test loss of 0.0002, and near-perfect precision, recall, and F1-scores across all ASL letters.",
      ],
    },
  ],
  
  achievements: [
    {
      title: "AWS Certified: Solution Architect – Associate (SAA-C02)",
      issuer: "Amazon Web Services",
      verifyUrl: "https://aws.amazon.com/verification",
    },
    {
      title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
      issuer: "Microsoft",
      verifyUrl: "https://learn.microsoft.com/en-us/certifications/",
    },
    {
      title: "Bennett Dean's List Scholarship",
      issuer: "Bennett University",
      verifyUrl: "",
      description: "Fully funded merit-based scholarship",
    },
  ],
  
  leadership: {
    title: "Peer Tutor in Machine Learning",
    organization: "University of Florida",
    period: "Aug 2023 – Nov 2023",
    description: "Led weekly study sessions and one-on-one tutoring for Machine Learning course",
  },
};
