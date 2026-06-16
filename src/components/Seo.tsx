import { Helmet } from 'react-helmet-async';

// Site-wide defaults used for SEO canonical / og:url tags.
const SITE_NAME = 'Gyaanpath Digital';
const SITE_URL = 'https://gyaanpathdigital.in';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.jpg`;

interface SeoProps {
  title: string;
  description: string;
  /** Route path, e.g. "/about". Used for canonical + og:url. */
  path?: string;
  image?: string;
  /** Set true on pages that should not be indexed (e.g. /admin). */
  noindex?: boolean;
}

export default function Seo({ title, description, path = '/', image = DEFAULT_IMAGE, noindex = false }: SeoProps) {
  const url = `${SITE_URL}${path}`;
  const fullTitle = path === '/' ? `${SITE_NAME} — Career Development & Skill Training` : `${title} | ${SITE_NAME}`;

  return (
    <Helmet prioritizeSeoTags>
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
