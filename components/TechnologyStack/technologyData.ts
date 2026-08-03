import {
  BrainCircuit,
  Cloud,
  Database,
  Code2,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export const technologies = [
  {
    id: 1,
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    description:
      "Building intelligent enterprise automation using modern AI technologies.",
    items: [
      "OpenAI",
      "Azure AI",
      "LangChain",
      "Python",
    ],
  },

  {
    id: 2,
    title: "Cloud Engineering",
    icon: Cloud,
    description:
      "Scalable cloud-native infrastructure across leading platforms.",
    items: [
      "AWS",
      "Azure",
      "Oracle Cloud",
      "Docker",
    ],
  },

  {
    id: 3,
    title: "Data Engineering",
    icon: Database,
    description:
      "Reliable enterprise data platforms for modern analytics.",
    items: [
      "SQL Server",
      "Oracle",
      "Snowflake",
      "Informatica",
    ],
  },

  {
    id: 4,
    title: "Software Development",
    icon: Code2,
    description:
      "Modern applications engineered for performance and scalability.",
    items: [
      "React",
      "Next.js",
      "Node.js",
      ".NET",
    ],
  },

  {
    id: 5,
    title: "Business Intelligence",
    icon: BarChart3,
    description:
      "Interactive dashboards transforming enterprise decision making.",
    items: [
      "Tableau",
      "Power BI",
      "Excel",
      "SSRS",
    ],
  },

  {
    id: 6,
    title: "Cyber Security",
    icon: ShieldCheck,
    description:
      "Security-first architecture protecting enterprise ecosystems.",
    items: [
      "VAPT",
      "IAM",
      "SOC",
      "Compliance",
    ],
  },
];