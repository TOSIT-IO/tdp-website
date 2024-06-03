import 'server-only'
import Page from '../../discover/news/page'

export async function generateMetadata() {
  return {
    title: 'TDP Actualités et événements',
    description: 'Dernières actualités sur TDP et liste des événements passés et à venir.',
  }
}

export async function generateStaticParams() {
  return [{
    lang: 'fr'
  }]
}

export default Page
