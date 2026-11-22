import { Helmet } from "react-helmet-async";

const SITE_URL = "https://stayflow.example";

export default function Seo({ title, description, path = "/", structuredData }) {
  const fullTitle = title.includes("Stayflow") ? title : `${title} | Stayflow`;
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${SITE_URL}${path}`} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Stayflow" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${SITE_URL}${path}`} />
      <meta name="twitter:card" content="summary_large_image" />
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
