import { company } from './company'
import { services } from './services'

export const siteTitle = 'AiTech Nexa | AI-Driven IT Solutions & Digital Innovation'

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: company.name,
  alternateName: 'AiTech Nexxa',
  url: company.url,
  logo: `${company.url}/logo.png`, // TODO: add public/logo.png
  description: company.tagline,
  email: company.email,
  telephone: company.phone,
  address: { '@type': 'PostalAddress', addressLocality: 'Selangor', addressCountry: 'MY' },
  sameAs: Object.values(company.social).filter(Boolean),
  foundingDate: String(company.foundedYear),
  areaServed: 'Worldwide',
  makesOffer: services.map((s) => ({
    '@type': 'Offer',
    itemOffered: { '@type': 'Service', name: s.title, description: s.description },
  })),
}
