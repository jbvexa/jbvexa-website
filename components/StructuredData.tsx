export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.jbvexa.com/#organization",
    name: "JBVEXA Technologies Private Limited",
    alternateName: "JBVEXA Technologies",
    url: "https://www.jbvexa.com",
    logo: "https://www.jbvexa.com/logo.png",
    image: "https://www.jbvexa.com/logo.png",
    description:
      "JBVEXA Technologies Private Limited delivers Enterprise Software Development, Artificial Intelligence, Cloud Engineering, Data Engineering, Business Intelligence, Cyber Security and Digital Transformation solutions.",

    slogan: "Engineering Digital Excellence",

    telephone: "+91-9619523623",

    email: "info@jbvexa.com",

    address: {
      "@type": "PostalAddress",
      addressLocality: "Kopri",
      addressRegion: "Maharashtra",
      postalCode: "400603",
      addressCountry: "IN",
    },

    identifier: "U62010MR2026PTC478116",

    foundingDate: "2026-07-07",

    areaServed: {
      "@type": "Country",
      name: "India",
    },

    knowsAbout: [
      "Artificial Intelligence",
      "Enterprise Software Development",
      "Cloud Engineering",
      "Business Intelligence",
      "Data Engineering",
      "Cyber Security",
      "Digital Transformation",
      "IT Consulting",
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