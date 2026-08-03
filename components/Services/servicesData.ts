export interface ServiceData {
  id: string;
  badge: string;
  title: string;
  description: string;

  challenges: string[];
  capabilities: string[];
  benefits: string[];
  technologies: string[];

  ctaTitle: string;
  ctaDescription: string;
  buttonText: string;
}

export const servicesData: Record<string, ServiceData> = {
  ai: {
    id: "ai",

    badge: "Artificial Intelligence",

    title: "Transform Business Decisions with Enterprise AI",

    description:
      "We help organizations automate operations, accelerate decision-making and unlock business value through enterprise-grade Artificial Intelligence solutions.",

    challenges: [
      "Manual business processes",
      "Slow decision making",
      "High operational costs",
      "Scattered business knowledge",
      "Limited business insights",
      "Repetitive operational tasks",
    ],

    capabilities: [
      "Enterprise AI Assistants",
      "Generative AI Applications",
      "AI Chatbots",
      "Document Intelligence",
      "Predictive Analytics",
      "Machine Learning Models",
      "Computer Vision",
      "Intelligent Process Automation",
    ],

    benefits: [
      "Increase operational efficiency",
      "Reduce business costs",
      "Accelerate decision making",
      "Improve customer experience",
      "Boost workforce productivity",
      "Unlock business intelligence",
    ],

    technologies: [
      "OpenAI",
      "Azure OpenAI",
      "LangChain",
      "Python",
      "FastAPI",
      "Vector Database",
      "Pinecone",
      "RAG",
      "LLM",
      "Docker",
    ],

    ctaTitle: "Ready to Transform Your Business with AI?",

    ctaDescription:
      "Partner with JBVEXA to build secure, scalable and enterprise-ready Artificial Intelligence solutions.",

    buttonText: "Talk to AI Experts",
  },

  cloud: {
    id: "cloud",

    badge: "Cloud Engineering",

    title: "Modern Cloud Infrastructure for Enterprise Growth",

    description:
      "Accelerate digital transformation with secure, scalable and cost-optimized cloud solutions across AWS, Microsoft Azure and Oracle Cloud Infrastructure.",

    challenges: [
      "Legacy infrastructure",
      "High infrastructure costs",
      "Slow application deployment",
      "Poor scalability",
      "Limited disaster recovery",
      "Security compliance issues",
    ],

    capabilities: [
      "Cloud Migration",
      "Cloud Native Development",
      "Infrastructure as Code",
      "DevOps Automation",
      "CI/CD Pipeline",
      "Containerization",
      "Kubernetes",
      "Cloud Security",
    ],

    benefits: [
      "Reduce infrastructure costs",
      "Increase application availability",
      "Improve scalability",
      "Accelerate software delivery",
      "Business continuity",
      "Enhanced cloud security",
    ],

    technologies: [
      "AWS",
      "Microsoft Azure",
      "Oracle Cloud Infrastructure",
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Azure DevOps",
      "Jenkins",
      "Linux",
    ],

    ctaTitle: "Move Your Business to the Cloud",

    ctaDescription:
      "Our cloud experts help organizations migrate, modernize and optimize enterprise workloads with confidence.",

    buttonText: "Schedule Cloud Consultation",
  },

    data: {
    id: "data",

    badge: "Data Engineering",

    title: "Build Reliable Data Platforms That Scale",

    description:
      "Transform raw data into trusted business assets with modern data engineering, enterprise data warehouses and scalable analytics platforms.",

    challenges: [
      "Data silos across systems",
      "Poor data quality",
      "Slow reporting",
      "Complex ETL processes",
      "Unstructured data",
      "Lack of governance",
    ],

    capabilities: [
      "Data Warehousing",
      "ETL/ELT Development",
      "Data Lake Architecture",
      "Data Migration",
      "Master Data Management",
      "Data Quality",
      "Real-Time Data Pipelines",
      "Metadata Management",
    ],

    benefits: [
      "Single source of truth",
      "Faster reporting",
      "Improved data quality",
      "Better business insights",
      "Scalable analytics",
      "Reliable enterprise reporting",
    ],

    technologies: [
      "Snowflake",
      "SQL Server",
      "Oracle",
      "PostgreSQL",
      "Informatica",
      "Azure Data Factory",
      "Apache Spark",
      "Databricks",
      "Kafka",
      "Python",
    ],

    ctaTitle: "Modernize Your Enterprise Data Platform",

    ctaDescription:
      "Build trusted, scalable and secure data platforms that empower smarter business decisions.",

    buttonText: "Talk to Data Experts",
  },

  software: {
    id: "software",

    badge: "Software Development",

    title: "Enterprise Software Built for Business Growth",

    description:
      "Design and develop secure, scalable and high-performance applications tailored to your business objectives using modern technologies.",

    challenges: [
      "Legacy applications",
      "Slow development cycles",
      "Poor user experience",
      "Scalability limitations",
      "Integration complexity",
      "Maintenance overhead",
    ],

    capabilities: [
      "Custom Software Development",
      "Web Applications",
      "Enterprise Portals",
      "REST APIs",
      "Microservices",
      "System Integration",
      "UI/UX Engineering",
      "Application Modernization",
    ],

    benefits: [
      "Faster delivery",
      "Improved customer experience",
      "Business agility",
      "Reduced maintenance cost",
      "Future-ready architecture",
      "Higher productivity",
    ],

    technologies: [
      "React",
      "Next.js",
      "Angular",
      "Node.js",
      "Java",
      ".NET",
      "Spring Boot",
      "TypeScript",
      "Docker",
      "GitHub",
    ],

    ctaTitle: "Let's Build Your Next Digital Product",

    ctaDescription:
      "Our engineering team develops enterprise applications that are secure, scalable and built to grow with your business.",

    buttonText: "Start Your Project",
  },

  bi: {
    id: "bi",

    badge: "Business Intelligence",

    title: "Turn Data Into Actionable Business Intelligence",

    description:
      "Enable executives and business teams with interactive dashboards, enterprise reporting and advanced analytics for better decision-making.",

    challenges: [
      "Manual reporting",
      "Disconnected reports",
      "Poor KPI visibility",
      "Delayed decision making",
      "Excel dependency",
      "Lack of executive insights",
    ],

    capabilities: [
      "Executive Dashboards",
      "Self-Service BI",
      "KPI Reporting",
      "Interactive Visualizations",
      "Performance Analytics",
      "Embedded Analytics",
      "Report Automation",
      "Data Storytelling",
    ],

    benefits: [
      "Real-time insights",
      "Data-driven decisions",
      "Improved operational visibility",
      "Executive reporting",
      "Reduced manual effort",
      "Business performance monitoring",
    ],

    technologies: [
      "Tableau",
      "Power BI",
      "SQL",
      "Oracle",
      "Snowflake",
      "Excel",
      "SSRS",
      "Python",
      "DAX",
      "MDX",
    ],

    ctaTitle: "Empower Your Business with Analytics",

    ctaDescription:
      "Deliver beautiful dashboards and enterprise reporting that help leaders make confident business decisions.",

    buttonText: "Request BI Consultation",
  },

  security: {
    id: "security",

    badge: "Cyber Security",

    title: "Protect Your Digital Business with Enterprise Security",

    description:
      "Strengthen your organization's security posture through modern cyber security, governance, risk management and compliance solutions.",

    challenges: [
      "Cyber threats",
      "Data breaches",
      "Compliance requirements",
      "Identity management",
      "Application vulnerabilities",
      "Cloud security risks",
    ],

    capabilities: [
      "Vulnerability Assessment & Penetration Testing",
      "Identity & Access Management",
      "Cloud Security",
      "Risk Assessment",
      "Security Governance",
      "Compliance Management",
      "Security Monitoring",
      "Incident Response",
    ],

    benefits: [
      "Reduced cyber risk",
      "Improved compliance",
      "Stronger security posture",
      "Business continuity",
      "Customer trust",
      "Regulatory readiness",
    ],

    technologies: [
      "Microsoft Defender",
      "CrowdStrike",
      "Okta",
      "Azure Security Center",
      "AWS Security Hub",
      "Nessus",
      "Burp Suite",
      "OWASP",
      "SIEM",
      "SOC",
    ],

    ctaTitle: "Secure Your Enterprise Today",

    ctaDescription:
      "Protect critical business assets with enterprise-grade cybersecurity solutions tailored to your organization's needs.",

    buttonText: "Talk to Security Experts",
  },
};