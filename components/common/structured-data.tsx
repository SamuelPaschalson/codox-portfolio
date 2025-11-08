import { siteConfig } from "@/config/site";

export function StructuredData() {
  // Organization Schema for better local SEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.company?.name || siteConfig.name,
    legalName: siteConfig.company?.name || siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: siteConfig.logoIcon,
    foundingDate: siteConfig.company?.founded || "2025",
    founder: {
      "@type": "Person",
      name: siteConfig.authorName,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.company?.location || "Global",
      addressCountry: "NG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "creativetechagency.mail@gmail.com", // Replace with actual email
      url: `${siteConfig.url}/contact`,
    },
    sameAs: Object.values(siteConfig.links).filter(
      (link) => link && link !== ""
    ),
    knowsAbout: [
      "Web Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Full Stack Development",
      "Business Automation",
      "Email Systems",
      "Responsive Web Design",
      "Frontend Development",
      "Backend Development",
    ],
  };

  // Person Schema for personal branding
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.authorName,
    alternateName: siteConfig.username,
    description: siteConfig.description,
    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: siteConfig.company?.name || siteConfig.name,
    },
    url: siteConfig.url,
    image: siteConfig.ogImage,
    sameAs: Object.values(siteConfig.links).filter(
      (link) => link && link !== ""
    ),
    knowsAbout: [
      "Web Development",
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Full Stack Development",
      "Business Automation",
      "Email Systems",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "REST APIs",
      "Database Design",
    ],
    hasOccupation: {
      "@type": "Occupation",
      name: "Full Stack Developer",
      occupationLocation: {
        "@type": "Country",
        name: "United States",
      },
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        currency: "USD",
        duration: "YEAR",
        percentile10: 60000,
        median: 90000,
        percentile90: 140000,
      },
    },
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Breadcrumb Schema for better navigation structure
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${siteConfig.url}/skills`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Projects",
        item: `${siteConfig.url}/projects`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Contact",
        item: `${siteConfig.url}/contact`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        key="organization-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        key="person-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        key="website-schema"
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        key="breadcrumb-schema"
      />
    </>
  );
}
