export const portfolioData = {
  personal: {
    name: "Ketan Vardekar",
    title: "Full Stack Developer",
    subtitle: "Angular · React · Next.js · Node.js",
    location: "Surat, Gujarat",
    phone: "+91-7977120757",
    email: "vketan2188@gmail.com",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
    summary:
      "Full Stack Developer with 4 years of experience in Angular, React, Next.js 15, Node.js, and SQL. Skilled in building scalable web applications, optimizing performance, and delivering seamless user experiences. Passionate about clean code, best practices, and continuous learning. Experienced in mentoring and training employees in Angular.",
  },

  experience: [
    {
      company: "Elegant Microweb Private Limited",
      location: "Ahmedabad",
      role: "Full Stack Developer",
      duration: "Feb 2024 – Present",
      responsibilities: [
        "Developed dynamic and high-performance web applications using React, Next.js (v15), and Angular, contributing to both UI/UX design and application logic.",
        "Designed and maintained scalable backend solutions with Node.js and SQL, ensuring efficient data management and robust API functionality, documented using Swagger.",
      ],
    },
    {
      company: "Logwintech Private Limited",
      location: "Surat",
      role: "Backend Developer",
      duration: "Sep 2023 – Jan 2024",
      responsibilities: [
        "Developed and tested robust backend applications using NestJS, PostgreSQL, and Prisma, ensuring type-safe and efficient database management.",
        "Utilized AWS services, including S3 for storage and SES for reliable email communication, enhancing application scalability and performance.",
      ],
    },
    {
      company: "Glory Autotech LLP",
      location: "Surat",
      role: "Frontend Developer",
      duration: "Jan 2022 – Sep 2023",
      responsibilities: [
        "Integrated payment gateways like Razorpay and Open Money, enhancing payment processing efficiency, and implemented robust unit testing with Karma and Jasmine for high-quality applications.",
        "Developed and maintained Angular applications, collaborating with designers to transform wireframes into responsive user interfaces while ensuring seamless functionality.",
      ],
    },
  ],

  projects: [
    {
      name: "Treatment Tracker",
      description:
        "Designed to streamline the management of Cell and Gene Therapy (CGT) patients. Provides real-time tracking of the patient journey from start to finish and allows healthcare providers to track patient statuses efficiently.",
      tools: ["Next.js (v15)", "Node.js", "SQL", "Swagger", "Jest"],
      link: null,
    },
    {
      name: "TATracker",
      description:
        "An advanced applicant tracking system designed to optimize the hiring process. Efficiently stores candidate resumes and documents in one centralized place.",
      tools: ["Angular", "Laravel"],
      link: null,
    },
    {
      name: "EQUIDEI",
      description:
        "A DeFi platform that enables manufacturing SMEs to gain easy access to finance by tokenizing their assets with help of blockchain. Open Money was used as the payment solution for seamless transactions.",
      tools: ["Angular", "Node.js", "MongoDB"],
      link: null,
    },
  ],

  skills: {
    "Web & Frontend": ["React", "Next.js (v15)", "Angular", "HTML/CSS"],
    "Backend & APIs": ["Node.js", "NestJS", "Laravel", "Swagger"],
    "Databases & ORM": ["PostgreSQL", "MySQL", "MongoDB", "Prisma ORM"],
    "Languages": ["JavaScript", "TypeScript", "SQL"],
    "Testing": ["Jest", "Karma", "Jasmine"],
    "Cloud & DevOps": ["AWS S3", "AWS SES"],
    "Project Management": ["JIRA", "Trello"],
  },

  education: [
    {
      degree: "Bachelor's in Electronic and Communication",
      institution: "Gujarat Technological University",
      year: "2018 – 2022",
      cgpa: "8.37",
    },
  ],

  certifications: [
    { name: "Angular (Intermediate)", issuer: "HackerRank" },
    { name: "Node.js (Basic)", issuer: "HackerRank" },
    { name: "SQL (Basic)", issuer: "HackerRank" },
  ],
};
