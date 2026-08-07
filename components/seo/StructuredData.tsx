import { siteConfig } from "@/lib/site";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CleaningService",

    name: siteConfig.name,

    description: siteConfig.description,

    url: siteConfig.url,

    telephone: siteConfig.phone,

    email: siteConfig.email,

    areaServed: siteConfig.business.serviceArea,

    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.location,
      addressCountry: "ES",
    },

    openingHours: "Mo-Sa 09:00-20:00",

    image: `${siteConfig.url}${siteConfig.og.image}`,

    sameAs: [
      siteConfig.instagram,
      siteConfig.facebook,
      siteConfig.tiktok,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}