export type TrainingUnit = {
  slug: string;
  title: string;
  short: string;
  category: string;
  description: string;
  longDescription: string;
  summaryFeatures: string[];
  outcomes: string[];
  selfEmployment: string[];
  duration: string;
  level:
    | "Beginner"
    | "Beginner to Intermediate"
    | "Intermediate"
    | "Intermediate to Advanced"
    | "Advanced";
  hue: number;
  icon:
    | "training"
    | "office"
    | "typing"
    | "globe"
    | "cpu"
    | "code"
    | "database"
    | "network"
    | "mobile"
    | "palette"
    | "marketing"
    | "shield"
    | "briefcase";
};

export const TRAINING_UNITS: TrainingUnit[] = [
  {
    slug: "computer-basics",
    title: "Computer Basics & Packages",
    short: "Computer Foundations",
    category: "Computer Foundations",
    description:
      "Foundational computer literacy — hardware, software, files, folders, and the essential computer packages every learner needs.",
    longDescription:
      "The starting point for anyone new to computers. You will learn how a computer works, how to use it confidently, and how to navigate files, folders, and the essential productivity tools used in every workplace. By the end, you can sit at any computer and get work done.",
    summaryFeatures: [
      "Hardware & Software",
      "Files & Folders",
      "Keyboard Skills",
      "Printers & Scanners",
      "Windows & macOS",
      "Basic Troubleshooting",
    ],
    outcomes: [
      "Understand computer hardware and software",
      "Manage files and folders confidently",
      "Use the keyboard and mouse efficiently",
      "Set up and use printers and peripherals",
      "Navigate Windows or macOS",
      "Perform basic troubleshooting",
    ],
    selfEmployment: [
      "Offer computer literacy lessons to beginners",
      "Work as a receptionist or data clerk",
      "Offer basic computer setup and support",
    ],
    duration: "4 weeks",
    level: "Beginner",
    hue: 210,
    icon: "training",
  },
  {
    slug: "microsoft-office",
    title: "Microsoft Office Suite",
    short: "Microsoft Office",
    category: "Microsoft Office",
    description:
      "Hands-on training in Word, Excel, PowerPoint, Access, and Publisher — beginner to advanced, workplace-ready.",
    longDescription:
      "The most in-demand workplace skills: Word, Excel, PowerPoint, Access, and Publisher. You will learn to produce professional documents, analyze data with Excel, build impactful presentations, manage databases with Access, and design flyers and publications with Publisher. Every lesson is practical and directly usable in real jobs.",
    summaryFeatures: [
      "Word Documents",
      "Excel & Pivot Tables",
      "PowerPoint Slides",
      "Access Databases",
      "Publisher Design",
      "Print & Share",
    ],
    outcomes: [
      "Write professional Word documents",
      "Build Excel formulas, charts, and pivot tables",
      "Design effective PowerPoint presentations",
      "Create and manage Access databases",
      "Design flyers, certificates, and cards in Publisher",
      "Print, share, and export documents properly",
    ],
    selfEmployment: [
      "Offer document preparation and typing services",
      "Freelance data entry and Excel work",
      "Design flyers, certificates, and business cards for clients",
      "Virtual assistance using Office tools",
    ],
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    hue: 200,
    icon: "office",
  },
  {
    slug: "typing-data-entry",
    title: "Typing & Data Entry",
    short: "Typing & Data Entry",
    category: "Microsoft Office",
    description:
      "Speed and accuracy training in typing, data entry, and document preparation for employment and business.",
    longDescription:
      "Fast, accurate typing is one of the highest-value skills for anyone who wants to work online or in an office. You will build speed, accuracy, and the discipline of professional data entry — the kind employers and freelancing platforms pay for.",
    summaryFeatures: [
      "Touch Typing",
      "Speed & Accuracy",
      "Bulk Data Entry",
      "Shortcuts",
      "Quality Checks",
      "Document Formatting",
    ],
    outcomes: [
      "Type at 40+ words per minute accurately",
      "Enter and format large volumes of data",
      "Use shortcuts and templates",
      "Perform quality checks on data",
      "Convert and format documents",
      "Meet professional typing standards",
    ],
    selfEmployment: [
      "Freelance data entry on CashFlowHubs, Upwork, Fiverr, Freelancer",
      "Offer typing and transcription services locally",
      "Work remotely as a data specialist",
    ],
    duration: "4 weeks",
    level: "Beginner",
    hue: 190,
    icon: "typing",
  },
  {
    slug: "digital-literacy",
    title: "Internet, Email & Digital Literacy",
    short: "Digital Literacy",
    category: "Computer Foundations",
    description:
      "Safe and effective use of the internet, email, online forms, cloud tools, and everyday digital services.",
    longDescription:
      "Everything you need to live and work confidently online. From using email professionally, to filling online forms, using cloud storage, paying bills online, and staying safe from scams — this is the practical digital literacy that most people are never formally taught.",
    summaryFeatures: [
      "Email Skills",
      "Online Forms",
      "Cloud Storage",
      "Online Payments",
      "Phishing Awareness",
      "Digital Services",
    ],
    outcomes: [
      "Use email professionally",
      "Fill online applications and forms",
      "Use cloud storage (Google Drive, OneDrive)",
      "Shop, pay, and bank online safely",
      "Spot scams and phishing attempts",
      "Use digital government and utility services",
    ],
    selfEmployment: [
      "Help local businesses move online",
      "Offer digital literacy training to adults",
      "Provide virtual assistance and admin support",
    ],
    duration: "3 weeks",
    level: "Beginner",
    hue: 180,
    icon: "globe",
  },
  {
    slug: "advanced-ict",
    title: "Advanced ICT Skills",
    short: "Advanced ICT",
    category: "Programming & Software",
    description:
      "Progressive training in productivity tools, digital collaboration, cybersecurity awareness, and advanced ICT.",
    longDescription:
      "For learners ready to go beyond the basics. Advanced productivity, digital collaboration tools, cybersecurity awareness, project management platforms, and the modern software ecosystem used in professional environments.",
    summaryFeatures: [
      "Advanced Productivity",
      "Team Collaboration",
      "Cybersecurity Basics",
      "Project Management",
      "Modern Tech Stack",
      "Professional Documents",
    ],
    outcomes: [
      "Use advanced productivity tools",
      "Collaborate with teams on cloud platforms",
      "Understand cybersecurity best practices",
      "Manage projects with Trello, Asana, Notion",
      "Work effectively with modern tech stack",
      "Present and document professionally",
    ],
    selfEmployment: [
      "Offer project management setup for small businesses",
      "Train teams on productivity and collaboration",
      "Provide cybersecurity awareness workshops",
    ],
    duration: "6 weeks",
    level: "Intermediate to Advanced",
    hue: 170,
    icon: "cpu",
  },
  {
    slug: "computer-programming",
    title: "Computer Programming",
    short: "Programming",
    category: "Programming & Software",
    description:
      "Learn to code — from programming fundamentals in Python and JavaScript to building real applications.",
    longDescription:
      "Programming is the highest-leverage skill in today's economy — and the easiest to monetize as a freelancer or self-employed developer. You will learn programming fundamentals, then work in Python and JavaScript to build real, working projects: websites, scripts, and simple apps. By the end, you can build things that people pay for.",
    summaryFeatures: [
      "Programming Logic",
      "Python & JavaScript",
      "Command-Line Tools",
      "APIs & Data",
      "Git & Version Control",
      "Project Deployment",
    ],
    outcomes: [
      "Understand programming logic and problem-solving",
      "Write clean code in Python and JavaScript",
      "Build command-line tools and scripts",
      "Work with APIs and external data",
      "Use Git and version control",
      "Deploy your own projects",
    ],
    selfEmployment: [
      "Freelance coding on CashFlowHubs, Upwork and Fiverr",
      "Build small tools and scripts for local businesses",
      "Create and sell your own small apps",
      "Offer website and automation services",
      "Work remotely as a junior developer",
    ],
    duration: "12 weeks",
    level: "Beginner to Intermediate",
    hue: 270,
    icon: "code",
  },
  {
    slug: "database-management",
    title: "Database Management",
    short: "Databases",
    category: "Data & Databases",
    description:
      "Design, query, and manage databases — SQL, MySQL, PostgreSQL, and real data handling skills.",
    longDescription:
      "Every system runs on a database. You will learn how to design schemas, write SQL queries, manage data securely, and work with MySQL and PostgreSQL — the same engines used by banks, schools, hospitals, and businesses everywhere. A highly paid, in-demand skill.",
    summaryFeatures: [
      "Schema Design",
      "SQL Queries",
      "MySQL & PostgreSQL",
      "Data Import & Export",
      "Backup & Restore",
      "Performance Tuning",
    ],
    outcomes: [
      "Design relational database schemas",
      "Write SQL queries confidently",
      "Manage MySQL and PostgreSQL",
      "Handle data imports and exports",
      "Back up and restore databases",
      "Optimize queries for performance",
    ],
    selfEmployment: [
      "Freelance database setup for small businesses",
      "Offer data migration services",
      "Contract as a junior database administrator",
      "Support reporting and analytics projects",
    ],
    duration: "8 weeks",
    level: "Intermediate",
    hue: 220,
    icon: "database",
  },
  {
    slug: "networking-it-support",
    title: "Networking & IT Support",
    short: "Networking & IT",
    category: "Networking & Infrastructure",
    description:
      "Set up, secure, and troubleshoot office networks, WiFi, and IT infrastructure — the backbone of any business.",
    longDescription:
      "Learn to install and manage networks, configure routers and WiFi, troubleshoot IT problems, and support offices and businesses. This is one of the most employable and profitable skills — every business needs someone who can keep their IT running.",
    summaryFeatures: [
      "Office Networks",
      "Routers & WiFi",
      "Network Troubleshooting",
      "Cabling & Structure",
      "Shared Resources",
      "On-Site Support",
    ],
    outcomes: [
      "Install and configure office networks",
      "Set up routers, switches, and WiFi",
      "Troubleshoot common network issues",
      "Cable and structure network installations",
      "Set up shared printers and file servers",
      "Provide on-site IT support",
    ],
    selfEmployment: [
      "Install networks for small businesses and homes",
      "Offer IT support contracts to SMEs",
      "WiFi and CCTV installation services",
      "Home and office tech support",
    ],
    duration: "8 weeks",
    level: "Intermediate",
    hue: 200,
    icon: "network",
  },
  {
    slug: "web-development",
    title: "Web Development",
    short: "Web Development",
    category: "Programming & Software",
    description:
      "Build modern websites and web apps — HTML, CSS, JavaScript, and popular frameworks.",
    longDescription:
      "Learn to build websites that look professional and actually work — from landing pages to multi-page business sites. You will learn HTML, CSS, JavaScript, and a modern framework, plus how to launch and host real sites for real clients.",
    summaryFeatures: [
      "HTML & CSS",
      "JavaScript",
      "React & Next.js",
      "APIs & Databases",
      "Responsive Design",
      "Deployment",
    ],
    outcomes: [
      "Build websites with HTML, CSS, and JavaScript",
      "Work with React or Next.js",
      "Connect websites to APIs and databases",
      "Make sites responsive and fast",
      "Deploy websites to hosting",
      "Manage client projects end-to-end",
    ],
    selfEmployment: [
      "Freelance website building for local businesses",
      "Build and host websites as a service",
      "Sell website templates",
      "Offer website maintenance contracts",
    ],
    duration: "10 weeks",
    level: "Beginner to Intermediate",
    hue: 260,
    icon: "code",
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    short: "Mobile Apps",
    category: "Programming & Software",
    description:
      "Build Android and iOS apps with Flutter and React Native — from idea to app store.",
    longDescription:
      "Apps are where modern business happens. Learn to design, build, and ship mobile apps for Android and iOS using Flutter and React Native. By the end, you will have published your own app and be ready to take on client work.",
    summaryFeatures: [
      "Flutter & React Native",
      "Mobile-First UI",
      "APIs & Backend",
      "Payments & Notifications",
      "Testing & Debugging",
      "App Store Launch",
    ],
    outcomes: [
      "Build apps with Flutter and React Native",
      "Design mobile-first UIs",
      "Connect apps to APIs and backend",
      "Add payments, notifications, and analytics",
      "Test and debug mobile apps",
      "Publish to Play Store and App Store",
    ],
    selfEmployment: [
      "Freelance app development on CashFlowHubs",
      "Build apps for local businesses",
      "Publish and monetize your own apps",
      "Offer app maintenance contracts",
    ],
    duration: "12 weeks",
    level: "Intermediate",
    hue: 285,
    icon: "mobile",
  },
  {
    slug: "graphic-design",
    title: "Graphic Design & Branding",
    short: "Graphic Design",
    category: "Digital Skills & Marketing",
    description:
      "Design logos, flyers, business cards, and full brand identities with Adobe and free tools.",
    longDescription:
      "Graphic design is one of the easiest skills to monetize quickly. Learn to design logos, posters, flyers, business cards, social media graphics, and complete brand identity packages. You will work in industry tools (Photoshop, Illustrator) and free alternatives so you can start working immediately.",
    summaryFeatures: [
      "Logos & Brand Marks",
      "Flyers & Posters",
      "Business Cards",
      "Social Media Graphics",
      "Brand Identity",
      "Adobe & Canva",
    ],
    outcomes: [
      "Design logos and brand marks",
      "Create flyers, posters, and brochures",
      "Design business cards and letterheads",
      "Produce social media graphics",
      "Build complete brand identities",
      "Work in Photoshop, Illustrator, Canva",
    ],
    selfEmployment: [
      "Freelance graphic design on CashFlowHubs and Upwork",
      "Design branding packages for local businesses",
      "Social media graphic design as a service",
      "Print-on-demand and digital product sales",
    ],
    duration: "8 weeks",
    level: "Beginner to Intermediate",
    hue: 25,
    icon: "palette",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing & Social Media",
    short: "Digital Marketing",
    category: "Digital Skills & Marketing",
    description:
      "Run campaigns, grow social media, and drive real traffic and sales for businesses.",
    longDescription:
      "Learn how to grow brands online — Facebook, Instagram, TikTok, WhatsApp Business, SEO, and paid ads. Whether you want to market your own business or manage campaigns for clients, this unit gives you the skills to drive real results.",
    summaryFeatures: [
      "Facebook & Instagram Ads",
      "Social Media Management",
      "Content Creation",
      "WhatsApp Business",
      "SEO Fundamentals",
      "Performance Reporting",
    ],
    outcomes: [
      "Run Facebook and Instagram ad campaigns",
      "Manage social media accounts professionally",
      "Create content that engages and converts",
      "Set up and optimize WhatsApp Business",
      "Understand basic SEO",
      "Report on marketing performance",
    ],
    selfEmployment: [
      "Manage social media for local businesses",
      "Run ad campaigns for clients",
      "Grow your own audience and monetize",
      "Consult small businesses on digital marketing",
    ],
    duration: "6 weeks",
    level: "Beginner to Intermediate",
    hue: 330,
    icon: "marketing",
  },
  {
    slug: "cybersecurity-fundamentals",
    title: "Cybersecurity Fundamentals",
    short: "Cybersecurity",
    category: "Networking & Infrastructure",
    description:
      "Protect systems, data, and businesses from cyber threats — the highest-demand security skill.",
    longDescription:
      "Cyber threats are everywhere and businesses pay to stay safe. Learn the fundamentals of cybersecurity — from securing networks and passwords, to understanding common attacks, phishing, ransomware, and how to protect any organization. A rare, highly paid, and growing field.",
    summaryFeatures: [
      "Threat Awareness",
      "Network Security",
      "Phishing Defence",
      "Password & 2FA",
      "Security Audits",
      "Staff Awareness",
    ],
    outcomes: [
      "Understand common cyber threats",
      "Secure networks and endpoints",
      "Spot and prevent phishing attacks",
      "Set up password managers and 2FA",
      "Conduct basic security audits",
      "Train staff on security awareness",
    ],
    selfEmployment: [
      "Offer security audits for small businesses",
      "Run cybersecurity awareness training",
      "Provide security setup and hardening services",
      "Consult on data protection and compliance",
    ],
    duration: "8 weeks",
    level: "Intermediate",
    hue: 0,
    icon: "shield",
  },
  {
    slug: "business-freelance-skills",
    title: "Business & Freelance Skills",
    short: "Business & Freelance",
    category: "Business & Freelance",
    description:
      "Turn your IT skills into income — freelancing, client management, pricing, and running a small IT business.",
    longDescription:
      "The business side of IT that nobody teaches you. Learn how to find clients, price your services, manage projects, handle payments, and run a small IT business — with practical tools and systems for freelancers and self-employed professionals.",
    summaryFeatures: [
      " CashFlowHubs & Upwork",
      "Client Proposals",
      "Service Pricing",
      "Contracts & Invoicing",
      "Payment Handling",
      "Personal Branding",
    ],
    outcomes: [
      "Set up profiles on CashFlowHubs, Upwork, Freelancer",
      "Write winning proposals and pitches",
      "Price services for profit",
      "Manage clients and contracts",
      "Handle payments and invoicing",
      "Build a personal brand",
    ],
    selfEmployment: [
      "Freelance work across multiple platforms",
      "Run your own IT services business",
      "Consult small businesses",
      "Build recurring client contracts",
    ],
    duration: "4 weeks",
    level: "Beginner to Intermediate",
    hue: 90,
    icon: "briefcase",
  },
];

export const TRAINING_CATEGORIES = [
  "Computer Foundations",
  "Microsoft Office",
  "Programming & Software",
  "Data & Databases",
  "Networking & Infrastructure",
  "Digital Skills & Marketing",
  "Business & Freelance",
];

export function getTrainingUnit(slug: string): TrainingUnit | undefined {
  return TRAINING_UNITS.find((t) => t.slug === slug);
}