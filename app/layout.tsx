import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.jbvexa.com"),

  title: {
    default: "JBVEXA Technologies | Engineering Digital Excellence",
    template: "%s | JBVEXA Technologies",
  },

  description:
    "JBVEXA Technologies delivers Enterprise Software Development, Artificial Intelligence, Cloud Engineering, Data Engineering, Business Intelligence, Cyber Security, and Digital Transformation solutions for modern businesses.",

  keywords: [
    "JBVEXA Technologies",
    "Artificial Intelligence",
    "AI Solutions",
    "Cloud Engineering",
    "Enterprise Software Development",
    "Business Intelligence",
    "Tableau",
    "Power BI",
    "Data Engineering",
    "Digital Transformation",
    "Cyber Security",
    "Software Company India",
    "IT Consulting",
    "Enterprise Solutions",
  ],

  authors: [
    {
      name: "JBVEXA Technologies Pvt. Ltd.",
    },
  ],

  creator: "JBVEXA Technologies",

  publisher: "JBVEXA Technologies",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.jbvexa.com",
  },

  openGraph: {
    title: "JBVEXA Technologies | Engineering Digital Excellence",

    description:
      "Enterprise AI, Cloud Engineering, Business Intelligence, Data Platforms and Software Development solutions.",

    url: "https://www.jbvexa.com",

    siteName: "JBVEXA Technologies",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "JBVEXA Technologies",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "JBVEXA Technologies",

    description:
      "Engineering Digital Excellence with AI, Cloud, Data and Enterprise Software.",

    images: ["/logo.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },

  category: "Technology",

  applicationName: "JBVEXA Technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}