export const site = {
  name: "Arjun Kumar",
  title: "Backend Developer | Node.js, Express.js & PHP/Laravel",
  location: "SBS Nagar, Punjab, India",
  phone: "+91-9041555676",
  email: "arjun01ar@gmail.com",
  resumePath: "/resume/Arjun_Kumar_Backend_Developer_Resume.pdf",
  resumeFilename: "Arjun_Kumar_Backend_Developer_Resume.pdf",
  intro:
    "Backend Developer with 9+ years of experience building scalable web applications, RESTful APIs, database-driven systems, eCommerce platforms, real-time applications, and third-party integrations.",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "Backend Developer with 9+ years of experience building scalable web applications, RESTful APIs, database-driven systems, eCommerce platforms, and third-party integrations.",
    "I have hands-on experience with Node.js, Express.js, and Socket.IO for backend services and real-time features, alongside deep expertise in PHP, Laravel, MySQL, CakePHP, CodeIgniter, and Yii.",
    "I also have experience working with MongoDB, React.js, Shopify, Stripe, PayPal, Ship24, Google APIs, Facebook APIs, and webhook-based integrations.",
  ],
  highlights: [
    "9+ Years Backend Development Experience",
    "Node.js & Express.js",
    "PHP & Laravel",
    "REST API Development",
    "MySQL & MongoDB",
    "Real-Time Applications",
    "eCommerce Integrations",
    "Third-Party API Integrations",
  ],
};

export const skillCategories = [
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "Socket.IO",
      "PHP",
      "Laravel",
      "Core PHP",
      "CodeIgniter",
      "CakePHP",
      "Yii",
    ],
  },
  {
    title: "Database",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Frontend",
    skills: ["JavaScript", "React.js"],
  },
  {
    title: "APIs & Integrations",
    skills: [
      "RESTful APIs",
      "Shopify API",
      "Stripe API",
      "PayPal API",
      "Ship24 API",
      "Google API",
      "Facebook API",
      "Webhooks",
    ],
  },
  {
    title: "Architecture & Development",
    skills: [
      "MVC",
      "Backend Development",
      "Database Design",
      "Query Optimization",
      "API Development",
      "Background Jobs",
      "Real-Time Applications",
    ],
  },
  {
    title: "Tools",
    skills: ["GitHub", "GitLab", "Bitbucket"],
  },
  {
    title: "AI / Emerging Technology",
    skills: ["GenAI"],
  },
] as const;

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Luminoguru Pvt Ltd",
    location: "Mohali",
    period: "09/2022 - Present",
    responsibilities: [
      "Built lightweight backend services and real-time features using Node.js.",
      "Created a chat application with real-time messaging using Socket.IO.",
      "Developed and maintained web applications using PHP, Laravel, and MySQL with emphasis on performance, security, and maintainability.",
      "Developed and maintained Shopify websites and applications and integrated Shopify APIs for eCommerce functionality.",
      "Customized and optimized WordPress plugins to meet client-specific requirements.",
      "Debugged application issues, identified root causes, and implemented reliable solutions.",
    ],
  },
  {
    role: "Software Developer",
    company: "Betasoft Solutions Pvt Ltd",
    location: "Mohali",
    period: "07/2021 - 09/2022",
    responsibilities: [
      "Developed and maintained backend applications and REST APIs using Laravel.",
      "Optimized MySQL database performance and application workflows.",
      "Developed client applications using Laravel, CodeIgniter, and CakePHP.",
      "Implemented backend functionality and resolved application issues.",
    ],
  },
  {
    role: "Laravel Developer",
    company: "Canvas Craft Media",
    location: "Mohali",
    period: "03/2020 - 08/2020",
    responsibilities: [
      "Developed and maintained web applications using PHP, Laravel, and MySQL.",
      "Implemented backend business logic, database integration, and application enhancements.",
      "Designed and optimized MySQL queries and database operations to improve application performance.",
      "Developed features based on client and project requirements and resolved application issues.",
    ],
  },
  {
    role: "PHP Backend Developer",
    company: "Outsourcing Technologies",
    location: "Panchkula",
    period: "08/2018 - 02/2020",
    responsibilities: [
      "Developed web applications using WordPress, CodeIgniter, and Core PHP.",
      "Built dynamic, database-driven websites and applications based on client requirements.",
      "Implemented backend business logic and MySQL database integration.",
      "Developed applications using CodeIgniter MVC and customized WordPress websites.",
      "Performed bug fixing, application enhancements, and performance optimization.",
    ],
  },
  {
    role: "PHP Developer",
    company: "Trius Infotech",
    location: "Chandigarh",
    period: "10/2017 - 07/2018",
    responsibilities: [
      "Developed and maintained web applications using CakePHP and Yii frameworks.",
      "Developed RESTful APIs using CakePHP for application and system integration.",
      "Implemented backend business logic and database-driven application functionality.",
      "Worked with MySQL queries, data management, and MVC architecture.",
      "Implemented features, enhancements, debugging, and issue resolution.",
    ],
  },
  {
    role: "PHP Developer",
    company: "Sites Simply Pvt Ltd",
    location: "Mohali",
    period: "11/2016 - 06/2017",
    responsibilities: [
      "Developed and maintained web applications using CakePHP and WordPress.",
      "Built backend functionality using CakePHP MVC architecture and MySQL.",
      "Implemented business logic, database integration, and application enhancements.",
      "Customized WordPress websites and implemented client-specific features.",
      "Resolved application bugs and performance-related issues.",
    ],
  },
  {
    role: "Junior PHP Developer",
    company: "Oditi Global Solutions Pvt Ltd",
    location: "Mohali",
    period: "10/2015 - 10/2016",
    responsibilities: [
      "Developed and maintained web applications using Core PHP, CakePHP, CodeIgniter, WordPress, and MySQL.",
      "Assisted with backend development, business logic, and database integration.",
      "Developed application features using CakePHP and CodeIgniter MVC frameworks.",
    ],
  },
] as const;

export const projects = [
  {
    name: "Chat App",
    subtitle: "Real-Time Messaging Application",
    description:
      "Developed a real-time chat application using Node.js and Express.js for backend logic and API handling.",
    features: [
      "Real-time messaging",
      "User authentication",
      "Session management",
      "User conversations",
      "Message history",
      "MongoDB database",
      "Instant message delivery using Socket.IO",
    ],
    technologies: [
      "Node.js",
      "Express.js",
      "Socket.IO",
      "MongoDB",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    icon: "message" as const,
  },
  {
    name: "BiteRite",
    subtitle: "Calorie Tracking & Meal Planning App",
    description:
      "Developed BiteRite, a complete calorie-tracking application offering dietitian-approved recipes and personalized meal plans.",
    features: [
      "Calorie tracking",
      "Personalized meal planning",
      "Recipe recommendations",
      "User dietary goals",
      "Real-time chat between users and admin",
      "Backend APIs",
      "Relational database management",
    ],
    technologies: ["Node.js", "Laravel", "MySQL"],
    icon: "utensils" as const,
  },
] as const;

export const whatIBuild = [
  {
    title: "REST APIs",
    description: "Scalable RESTful APIs for web and mobile applications.",
    icon: "api" as const,
  },
  {
    title: "Real-Time Applications",
    description:
      "Real-time communication and messaging using Node.js and Socket.IO.",
    icon: "zap" as const,
  },
  {
    title: "eCommerce",
    description:
      "Shopify applications, APIs, integrations, and backend functionality.",
    icon: "store" as const,
  },
  {
    title: "Payment Integrations",
    description:
      "Third-party payment integrations including Stripe and PayPal.",
    icon: "credit" as const,
  },
  {
    title: "Database Systems",
    description:
      "MySQL and MongoDB database design, queries, optimization, and data management.",
    icon: "database" as const,
  },
  {
    title: "Third-Party Integrations",
    description:
      "Integration with Shopify, Stripe, PayPal, Ship24, Google APIs, Facebook APIs, and webhooks.",
    icon: "plug" as const,
  },
] as const;

export const education = [
  {
    degree: "B.Tech",
    school: "K.C College Of Engineering and IT",
    period: "2012 - 2015",
    location: "SBS Nagar",
  },
  {
    degree: "Polytechnic",
    school: "Doaba College",
    period: "2009 - 2012",
    location: "SBS Nagar",
  },
] as const;

export const contact = {
  heading: "Let's Build Something Great",
  text: "I'm open to opportunities where I can contribute my backend development experience, build scalable systems, and solve challenging technical problems.",
};
