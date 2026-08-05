"use client";

import Script from "next/script";

export default function GoogleAnalytics() {
  console.log(
    "GA ID =",
    process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID
  );

  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          background: "red",
          color: "white",
          padding: 10,
          zIndex: 99999,
        }}
      >
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "NO GA ID"}
      </div>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />

      <Script id="ga" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}