export default function ServiceSchema() {
  const services = [
    {
      name: "Enterprise Software Development",
      description:
        "Custom enterprise software development, web applications, mobile applications and scalable business solutions.",
      url: "https://www.jbvexa.com/services",
    },
    {
      name: "Artificial Intelligence Solutions",
      description:
        "AI-powered business automation, Generative AI, Machine Learning and intelligent enterprise solutions.",
      url: "https://www.jbvexa.com/services",
    },
    {
      name: "Cloud Engineering",
      description:
        "Cloud migration, Azure, AWS, OCI architecture, DevOps and cloud modernization.",
      url: "https://www.jbvexa.com/services",
    },
    {
      name: "Business Intelligence",
      description:
        "Enterprise dashboards, Tableau, Power BI, analytics and reporting solutions.",
      url: "https://www.jbvexa.com/services",
    },
    {
      name: "Data Engineering",
      description:
        "ETL pipelines, data warehousing, modern data platforms and enterprise data engineering.",
      url: "https://www.jbvexa.com/services",
    },
    {
      name: "Cyber Security",
      description:
        "Vulnerability Assessment, Penetration Testing, IAM and enterprise cyber security services.",
      url: "https://www.jbvexa.com/services",
    },
  ];

  const schema = services.map((service) => ({
    "@context": "https://schema.org",
    "@type": "Service",

    serviceType: service.name,

    name: service.name,

    description: service.description,

    url: service.url,

    provider: {
      "@type": "Corporation",
      "@id": "https://www.jbvexa.com/#organization",
    },

    areaServed: {
      "@type": "Country",
      name: "India",
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}