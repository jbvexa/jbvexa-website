export default function BreadcrumbSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.jbvexa.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: "https://www.jbvexa.com/about",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Services",
        item: "https://www.jbvexa.com/services",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Industries",
        item: "https://www.jbvexa.com/industries",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: "https://www.jbvexa.com/contact",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}