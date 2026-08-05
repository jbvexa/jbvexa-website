export default function StructuredData() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Corporation",
        "@id": "https://www.jbvexa.com/#organization",

        name: "JBVEXA Technologies Private Limited",

        alternateName: "JBVEXA Technologies",

        url: "https://www.jbvexa.com",

        logo: {
          "@type": "ImageObject",
          url: "https://www.jbvexa.com/logo.png",
        },

        image: "https://www.jbvexa.com/logo.png",

        slogan: "Engineering Digital Excellence",

        description:
          "JBVEXA Technologies Private Limited delivers Enterprise Software Development, Artificial Intelligence, Cloud Engineering, Data Engineering, Business Intelligence, Cyber Security and Digital Transformation solutions.",

        email: "info@jbvexa.com",

        telephone: "+91-9619523623",

        identifier: "U62010MR2026PTC478116",

        foundingDate: "2026-07-07",

        address: {
          "@type": "PostalAddress",
          addressLocality: "Kopri",
          addressRegion: "Thane, Maharashtra",
          postalCode: "400603",
          addressCountry: "IN",
        },

        areaServed: [
          {
            "@type": "Country",
            name: "India",
          },
          {
            "@type": "Place",
            name: "Global",
          },
        ],

        contactPoint: [
          {
            "@type": "ContactPoint",
            telephone: "+91-9619523623",
            contactType: "Customer Support",
            availableLanguage: ["English", "Hindi"],
          },
        ],

        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Technology Services",

          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Artificial Intelligence Solutions",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Enterprise Software Development",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cloud Engineering",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Data Engineering",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Business Intelligence",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Cyber Security",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Digital Transformation",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "IT Consulting",
              },
            },
          ],
        },

        knowsAbout: [
          "Artificial Intelligence",
          "Machine Learning",
          "Generative AI",
          "Cloud Engineering",
          "AWS",
          "Azure",
          "Oracle Cloud",
          "Business Intelligence",
          "Tableau",
          "Power BI",
          "Data Engineering",
          "ETL",
          "Data Warehousing",
          "Cyber Security",
          "Enterprise Software Development",
          "Digital Transformation",
          "IT Consulting",
        ],
      },

      {
        "@type": "WebSite",
        "@id": "https://www.jbvexa.com/#website",

        url: "https://www.jbvexa.com",

        name: "JBVEXA Technologies",

        publisher: {
          "@id": "https://www.jbvexa.com/#organization",
        },

        inLanguage: "en-IN",
      },

      {
        "@type": "WebPage",
        "@id": "https://www.jbvexa.com/#webpage",

        url: "https://www.jbvexa.com",

        name: "JBVEXA Technologies | Engineering Digital Excellence",

        isPartOf: {
          "@id": "https://www.jbvexa.com/#website",
        },

        about: {
          "@id": "https://www.jbvexa.com/#organization",
        },

        description:
          "Enterprise AI, Cloud Engineering, Business Intelligence, Data Engineering, Cyber Security and Software Development services.",

        inLanguage: "en-IN",
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