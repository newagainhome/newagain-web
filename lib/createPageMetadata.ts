import type { Metadata } from "next";

import { seo } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

type CreatePageMetadataProps = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: CreatePageMetadataProps): Metadata {
  const url = `${siteConfig.url}${path}`;

  return {
    title: `${title} | ${siteConfig.name}`,

    description,

    keywords: [...seo.defaultKeywords, ...keywords],

    alternates: {
      canonical: url,
    },

    openGraph: {
      title: `${title} | ${siteConfig.name}`,
      description,
      url,
      siteName: siteConfig.name,
      locale: "es_ES",
      type: "website",
      images: [
        {
          url: siteConfig.og.image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.name}`,
      description,
      images: [siteConfig.og.image],
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}