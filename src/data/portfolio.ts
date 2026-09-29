export const site = {
  name: "Arjun Kumar",
  title: "Full Stack Developer | PHP/Laravel • Node.js • React.js • Shopify",
  location: "SBS Nagar, Punjab, India",
  phone: "+91-9041555676",
  email: "arjun01ar@gmail.com",
  linkedin: "https://in.linkedin.com/in/arjun-kumar-850361194",
  portfolioUrl: "https://arjun-portfolio-dev.web.app/",
  resumePath: "/resume/Arjun_Kumar_Backend_Developer_Resume.pdf",
  resumeFilename: "Arjun_Kumar_Resume.pdf",
  intro:
    "Full Stack Developer with 9+ years of web development experience, specializing in PHP, Laravel, MySQL, REST APIs, and eCommerce integrations, with additional skills in Node.js and Express.js. Experienced in dealer vehicle marketplaces, multi-store Shopify order tracking, and push notification applications.",
};

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#what-i-build", label: "Specialties" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
] as const;

export const about = {
  paragraphs: [
    "Full Stack Developer with 9+ years of web development experience, specializing in PHP, Laravel, MySQL, REST APIs, and eCommerce integrations, with additional skills in Node.js and Express.js.",
    "Project experience includes an enterprise dealer vehicle marketplace (JCAutoMax) built with React.js & Laravel, a multi-store Shopify order tracking platform (Etrack Manager) with Stripe & Ship24, and a ground-up Shopify push-notification application (MobiLoud).",
    "Hands-on expertise across modern full-stack workflows: React.js, Next.js, and Tailwind CSS on the frontend; Laravel, Node.js, Express.js, and Socket.IO on the backend; AWS cloud services, Docker, Redis queues, and AI-assisted development tools.",
  ],
  highlights: [
    "9+ Years Web & Backend Development",
    "PHP, Laravel, CakePHP & CodeIgniter",
    "Node.js, Express.js & Socket.IO",
    "React.js, Next.js & Tailwind CSS",
    "Shopify APIs & eCommerce Integrations",
    "Stripe, North Payment Gateway & Ship24",
    "MySQL, MongoDB & PostgreSQL",
    "AWS, Docker & CI/CD Pipelines",
  ],
};

export const skillCategories = [
  {
    title: "Backend",
    skills: [
      "PHP",
      "Laravel",
      "CakePHP",
      "CodeIgniter",
      "Yii",
      "Node.js",
      "Express.js",
      "Core PHP",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "React.js",
      "Next.js",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Databases",
    skills: [
      "MySQL",
      "MongoDB",
      "PostgreSQL",
      "Database Design",
      "Query Optimization",
    ],
  },
  {
    title: "APIs & Commerce",
    skills: [
      "REST APIs",
      "OAuth",
      "Webhooks",
      "Shopify APIs",
      "WordPress",
      "Stripe",
      "Ship24",
      "PayPal",
      "Google APIs",
      "Facebook APIs",
    ],
  },
  {
    title: "Application Development",
    skills: [
      "MVC",
      "Laravel Jobs",
      "Queues",
      "Redis",
      "Socket.IO",
      "API Security",
      "Real-Time Applications",
    ],
  },
  {
    title: "Cloud & Testing",
    skills: [
      "AWS EC2",
      "AWS S3",
      "AWS SQS",
      "AWS SNS",
      "AWS Lambda",
      "Docker",
      "CI/CD",
      "PHPUnit",
      "Jest",
    ],
  },
  {
    title: "Tools & Collaboration",
    skills: ["GitHub", "GitLab", "Bitbucket", "Jira"],
  },
  {
    title: "AI / Emerging Tech",
    skills: [
      "GenAI",
      "Cursor",
      "Claude Code",
      "Lovable",
      "Replit",
      "MCPs",
      "Skills",
      "Rules",
      "Plugins",
    ],
  },
] as const;

export const experience = [
  {
    role: "Associate Software Engineer",
    company: "Luminoguru Pvt Ltd",
    location: "Mohali",
    period: "Sep 2022 - Sep 2026",
    responsibilities: [
      "Developed and maintained web applications using PHP, Laravel, and MySQL with high emphasis on performance and security.",
      "Integrated Shopify APIs to connect client Shopify stores with application backends and order fulfillment pipelines.",
      "Customized WordPress plugins and developed tailored functionality to meet client-specific business requirements.",
      "Investigated complex application defects, identified root causes, and implemented sustainable fixes.",
      "Built real-time features and lightweight backend services using Node.js and Socket.IO.",
    ],
  },
  {
    role: "Software Developer",
    company: "Betasoft Solutions Pvt Ltd",
    location: "Mohali",
    period: "Jul 2021 - Sep 2022",
    responsibilities: [
      "Developed Laravel backend applications and REST APIs, and maintained client applications using CodeIgniter and CakePHP.",
      "Optimized MySQL queries and application workflows, implemented backend features, and resolved application issues.",
      "Collaborated with product teams to architect scalable database tables and API endpoints.",
    ],
  },
  {
    role: "Laravel Developer",
    company: "Canvas Craft Media",
    location: "Mohali",
    period: "Mar 2020 - Aug 2020",
    responsibilities: [
      "Developed PHP and Laravel applications with MySQL database integration, implementing core business logic and enhancements.",
      "Optimized database queries and resolved application bottlenecks to improve overall web performance.",
      "Implemented client-requested feature enhancements across multi-tenant applications.",
    ],
  },
  {
    role: "PHP Backend Developer",
    company: "Outsourcing Technologies",
    location: "Panchkula",
    period: "Aug 2018 - Feb 2020",
    responsibilities: [
      "Built database-driven websites using Core PHP, CodeIgniter, WordPress, and MySQL.",
      "Implemented backend business logic and customized WordPress websites for global clients.",
      "Delivered application enhancements, fixed defects, and optimized performance across client projects.",
    ],
  },
  {
    role: "PHP Developer",
    company: "Trius Infotech",
    location: "Chandigarh",
    period: "Oct 2017 - Jul 2018",
    responsibilities: [
      "Developed CakePHP and Yii applications using MVC architecture and MySQL database systems.",
      "Built CakePHP REST APIs for application integration and system data exchange.",
      "Implemented backend features, maintained data workflows, and resolved application defects.",
    ],
  },
  {
    role: "PHP Developer",
    company: "Sites Simply Pvt Ltd",
    location: "Mohali",
    period: "Nov 2016 - Jun 2017",
    responsibilities: [
      "Developed CakePHP and WordPress applications, implemented MySQL-backed business logic, and customized websites.",
      "Delivered feature enhancements, resolved application bugs, and eliminated performance bottlenecks.",
    ],
  },
  {
    role: "PHP Developer",
    company: "Oditi Global Solutions Pvt Ltd",
    location: "Mohali",
    period: "Oct 2015 - Oct 2016",
    responsibilities: [
      "Developed and maintained applications using Core PHP, CakePHP, CodeIgniter, WordPress, and MySQL.",
      "Contributed backend features, assisted with database integration, and resolved application issues.",
    ],
  },
] as const;

export const projects = [
  {
    name: "JCAutoMax",
    subtitle: "Dealer Vehicle Marketplace & Transaction Engine",
    description:
      "Engineered Buy Now, booking, and offer/counteroffer workflows for a dealer vehicle marketplace built with React.js and Laravel, complete with wholesale/retail pricing, secure payments, and async processing.",
    features: [
      "Buy Now, booking, and offer/counteroffer workflows with transaction validation & state management",
      "Modular Laravel REST APIs with service-based business logic & asynchronous jobs",
      "Wholesale and retail pricing engine with dealer-specific transaction flows",
      "Integrated North Payment Gateway with validation and comprehensive audit logging",
      "Optimized MySQL database queries for vehicle catalog and transaction workflows",
    ],
    technologies: [
      "React.js",
      "Laravel",
      "MySQL",
      "REST APIs",
      "Laravel Jobs",
      "North Payment Gateway",
    ],
    icon: "car" as const,
  },
  {
    name: "Etrack Manager",
    subtitle: "Multi-Store Shopify Order & Shipment Tracking",
    description:
      "Centralized order tracking across multiple Shopify stores, featuring automated Stripe recurring subscriptions and Ship24 webhook event tracking for real-time shipment updates.",
    features: [
      "Centralized order tracking across multiple connected Shopify stores",
      "Shopify API integration connecting merchant stores with application backend",
      "Stripe subscriptions and automated pricing tier plans",
      "Ship24 webhooks integration for real-time shipment status & carrier updates",
      "Automated order data sync and tracking notifications",
    ],
    technologies: [
      "Laravel",
      "Shopify APIs",
      "Stripe",
      "Ship24",
      "MySQL",
      "Webhooks",
    ],
    icon: "truck" as const,
  },
  {
    name: "MobiLoud Shopify App",
    subtitle: "Push Notification Application for Shopify",
    description:
      "Built a Shopify push-notification application from scratch using Laravel 10 and integrated Shopify APIs to connect merchant stores with the application backend for targeted mobile engagement.",
    features: [
      "Built from scratch using Laravel 10 and modern REST architecture",
      "Shopify API integration to connect merchant stores with backend",
      "Targeted push notification campaigns and real-time delivery triggers",
      "Store customer synchronization and campaign performance tracking",
      "High-reliability message queueing and delivery management",
    ],
    technologies: [
      "Laravel 10",
      "Shopify APIs",
      "MySQL",
      "REST APIs",
      "Queues",
    ],
    icon: "bell" as const,
  },
  {
    name: "Chat App",
    subtitle: "Real-Time Messaging Application",
    description:
      "Developed a real-time chat application using Node.js and Express.js for backend logic, Socket.IO for bi-directional live communication, and MongoDB for scalable message storage.",
    features: [
      "Real-time bi-directional messaging with Socket.IO",
      "User authentication & session management",
      "One-on-one and group conversation threads",
      "Persistent message history in MongoDB",
      "Instant message delivery and online presence status",
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
      "Engineered BiteRite, a nutrition and calorie-tracking application offering dietitian-approved recipes, personalized meal plans, and real-time interaction channels between users and administrators.",
    features: [
      "Calorie tracking and daily nutritional intake calculations",
      "Personalized meal planning based on user dietary goals",
      "Dietitian-approved recipe library and recommendations",
      "Real-time communication channels between users and admin",
      "Secure backend RESTful APIs and relational MySQL database schema",
    ],
    technologies: ["Node.js", "Laravel", "MySQL", "REST APIs"],
    icon: "utensils" as const,
  },
] as const;

export const whatIBuild = [
  {
    title: "Full Stack & REST APIs",
    description:
      "Scalable RESTful APIs and full-stack applications with Laravel, Node.js, and React.js.",
    icon: "api" as const,
  },
  {
    title: "Real-Time Applications",
    description:
      "Real-time communication, chat systems, and live notifications using Socket.IO and Webhooks.",
    icon: "zap" as const,
  },
  {
    title: "eCommerce & Shopify",
    description:
      "Custom Shopify applications, private apps, store APIs, order sync, and catalog workflows.",
    icon: "store" as const,
  },
  {
    title: "Payment Integrations",
    description:
      "Secure payment processing including Stripe, North Payment Gateway, and PayPal with webhook validation.",
    icon: "credit" as const,
  },
  {
    title: "Database Architecture",
    description:
      "High-performance schema design, query optimization, and indexing with MySQL, MongoDB, and PostgreSQL.",
    icon: "database" as const,
  },
  {
    title: "Third-Party & Logistics APIs",
    description:
      "End-to-end integrations with Ship24, Google APIs, Facebook APIs, OAuth, and custom webhooks.",
    icon: "plug" as const,
  },
] as const;

export const education = [
  {
    degree: "B.Tech",
    school: "K.C College Of Engineering and IT",
    period: "2012 - 2015",
    location: "SBS Nagar, Punjab",
  },
  {
    degree: "Polytechnic",
    school: "Doaba College",
    period: "2009 - 2012",
    location: "SBS Nagar, Punjab",
  },
] as const;

export const languages = ["English", "Hindi", "Punjabi"] as const;

export const contact = {
  heading: "Let's Build Something Great",
  text: "I'm open to full-time and contract opportunities where I can contribute my 9+ years of web development experience, build scalable systems, and solve challenging technical problems.",
};
