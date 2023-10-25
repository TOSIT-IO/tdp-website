import 'server-only'
import clsx from 'clsx'
import redac from 'redac'
import yaml from 'redac/plugins/yaml'
import mdx from 'redac/plugins/mdx'
import Link from 'next/link'
import Logo from '@/layout/home/logo.svg'
import CirclesLeft from '@/layout/home/circles-left.svg'
import CirclesRight from '@/layout/home/circles-right.svg'
import FeaturesOpenSource from '@/layout/home/FeaturesOpenSource.svg'
import FeaturesFree from '@/layout/home/FeaturesFree.svg'
import FeaturesDataCentric from '@/layout/home/FeaturesDataCentric.svg'
import FeaturesHybridation from '@/layout/home/FeaturesHybridation.svg'
import Header from '@/layout/header'

// With Next@13.4.16, unregistered static params are not honored as 404 pages
// and are treated as dynamic pages. Setting `dynamicParams` to `false` enforce
// the values returned by `generateStaticParams`.
// Leaving that settings with Next@13.5.3 generates the error:
// Error: Page "/[lang]/(home)/page" is missing exported function "generateStaticParams()", which is required with "output: export" config.
// export const dynamicParams = false

export async function generateMetadata({ params }) {
  const i18n = await redac([
    {
      module: yaml,
      config: './content/i18ns',
    },
  ])
    .from('i18ns')
    .match(params.lang, [])
    .get()
  return {
    title: i18n.data.title,
    description: i18n.data.description,
    alternates: {
      // Indicates that homepage url prefer `/` over `/en`
      canonical: params.lang === 'en' ? '/' : undefined,
    },
  }
}

export async function generateStaticParams() {
  return redac([
    {
      module: yaml,
      config: './content/i18ns',
    },
  ])
    .from('i18ns')
    .match([])
    .map( i18n => ({lang: i18n.lang}))
}

export default async function Page({ params }) {
  // Homepage prefered address is `/` and not `/en`
  params.lang = params.lang ?? 'en'
  const i18n = await redac([
    {
      module: yaml,
      config: './content/i18ns',
    },
  ])
    .from('i18ns')
    .match(params.lang, [])
    .map(params => params.data)
    .get()
  const broadcasts = await redac([
    {
      module: yaml,
      config: './content/broadcasts',
    },
  ])
    .from('broadcasts')
    .map((broadcast) => ({
      ...broadcast,
      lang: broadcast.lang || 'en',
    }))
    .filter((broadcast) => broadcast.lang === params.lang)
  const reports = await redac([
    {
      module: mdx,
      config: './content/reports',
    },
  ])
    .from('reports')
    .map((report) => ({
      slug: report.slug,
      title: report.data.title,
      lang: report.lang || 'en',
    }))
    .filter((report) => report.lang === params.lang)
  const sitemap = await redac([
    {
      module: mdx,
      config: './content/pages',
    },
  ])
    .from('pages')
    .map((page) => ({
      data: {
        redirect: page.data.redirect,
        nav_title: page.data.nav_title,
        section: page.data.section,
        nav_title: page.data.nav_title,
        title: page.data.title,
      },
      lang: page.lang || 'en',
      slug: page.slug,
    }))
    .filter((page) => page.lang === params.lang)
    .filter((page) =>
      page.slug[0] === 'dev' ? process.env.NODE_ENV === 'development' : true
    )
    .tree()
  return (
    <div>
      <div
        className={clsx(
          'relative h-[500px] xl:h-[600px] 2xl:h-[650px]',
          'border-b border-slate-500'
        )}
        style={{
          background:
            'radial-gradient(8.66% 8.66% at 5.6% 11.39%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(20.09% 20.09% at 81% 20.09%, rgba(39, 52, 61, 0.2) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(58.88% 58.88% at 19.27% 62.15%, rgba(46, 33, 64, 0.2) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(58.2% 58.2% at 70.57% 26.9%, rgba(69, 106, 71, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, #2B3E4F 0%, #232520 100%)',
        }}
      >
        <CirclesLeft
          className="absolute left-0 top-0 h-full w-[50%]"
          preserveAspectRatio="none"
        />
        <CirclesRight
          className="absolute right-0 bottom-0 h-[80%] w-[25%]"
          preserveAspectRatio="none"
        />
        <div
          className={clsx(
            'absolute text-center flex flex-col',
            'top-[14%] bottom-[5%] left-[8%] right-[8%]',
            'md:top-[20%] md:bottom-[10%] md:left-[15%] md:right-[20%]',
            'gap-14 md:gap-5'
          )}
        >
          <Logo className="h-auto" />
          <h1 className="text-xl font-extralight tracking-wider">
            <span className="sr-only">TDP</span>
            {i18n.title}
          </h1>
          <div className="flex flex-col sm:flex-row gap-5 sm:flex justify-center sm:gap-10">
            <div className="flex gap-3 sm:gap-10 justify-center">
              <Link
                href="/en/discover"
                className={clsx(
                  'py-2 px-3',
                  'text-xl text-white/70 hover:text-white/100 font-extralight',
                  'rounded border border-white/40 hover:border-white/80'
                )}
                style={{
                  background:
                    'radial-gradient(50% 50% at 50% 50%, rgba(37, 42, 40, 0.8) 0%, rgba(31, 38, 43, 0.8) 100%)',
                }}
              >
                {i18n.header.discover}
              </Link>
              <Link
                href="/en/learn"
                className={clsx(
                  'py-2 px-3',
                  'text-xl text-white/70 hover:text-white/100 font-extralight',
                  'rounded border border-white/40 hover:border-white/80'
                )}
                style={{
                  background:
                    'radial-gradient(50% 50% at 50% 50%, rgba(37, 42, 40, 0.8) 0%, rgba(31, 38, 43, 0.8) 100%)',
                }}
              >
                {i18n.header.doc}
              </Link>
            </div>
            <div className="sm:flex">
              <Link
                href="/en/learn/getting-started"
                className={clsx(
                  'py-2 px-3',
                  'text-xl text-white/70 hover:text-white/100 font-extralight',
                  'bg-[#168E5E]/80 hover:bg-[#168E5E]/100',
                  'rounded border border-white/50 hover:border-white/80'
                )}
              >
                {i18n.header.start}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Header
        current={params.slug}
        home={true}
        link_home={ params.lang === 'en' ? '/' : `/${params.lang}`}
        sitemap={sitemap}
        className={clsx(
          'fixed top-0 w-full z-10 h-[60px]',
        )}
        style={{
          background: `radial-gradient(50% 50% at 50% 50%, rgba(14, 11, 22, 0.12) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(17.86% 94.3% at 87.98% 36.67%, rgba(27, 83, 83, 0.18) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(50.96% 97.73% at 18.2% 68.08%, rgba(28, 74, 74, 0.26) 0%, rgba(0, 0, 0, 0) 100%), rgba(44, 48, 49, 0.90)`,
        }}
        t9ns={[{
          lang: params.lang === 'en' ? 'fr' : 'en',
          slug: [],
          data: {
            title: params.lang === 'en' ? 'Accueil du projet TDP' : 'TDP project homepage',
          }
        }]}
      />
      <section
        className={clsx('py-10', 'border-b border-slate-500')}
        style={{
          background:
            'radial-gradient(43.58% 43.58% at 21.12% 25.63%, rgba(97, 130, 120, 0.2) 0%, rgba(122, 159, 132, 0) 100%), radial-gradient(64.91% 64.91% at 31.32% 63.18%, rgba(64, 86, 142, 0.2) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(19.81% 43.58% at 73.92% 40.01%, rgba(122, 159, 132, 0.2) 0%, rgba(40, 52, 59, 0.056) 100%), #263134',
        }}
      >
        <div className="max-w-4xl px-5 m-auto">
          {broadcasts.length !== 0 &&
            <>
            <h2 className={clsx('mb-5', 'text-xl font-extralight')}>{i18n.broadcasts.title}</h2>
            <ul className="grid gap-3 mb-5">
              {broadcasts.reverse().map((broadcast) => (
                <li
                  key={broadcast.slug.join('/')}
                  className={clsx(
                    'py-2 px-3',
                    'text-white/70 hover:text-white/100 font-extralight',
                    'rounded border border-white/40 hover:border-white/80'
                  )}
                  style={{
                    background:
                      'radial-gradient(50% 50% at 50% 50%, rgba(37, 42, 40, 0.8) 0%, rgba(31, 38, 43, 0.8) 100%)',
                  }}
                >
                  <p>{broadcast.data.message}</p>
                  <small>{broadcast.data.when}</small>
                </li>
              ))}
            </ul>
            </>
          }
          { reports.length !== 0 &&
            <>
            <h2 className={clsx('mb-5', 'text-xl font-extralight')}>{i18n.reports.title}</h2>
            <ul className="grid gap-3 mb-5">
              {reports.reverse().map((report) => (
                <li
                  key={report.slug.join('/')}
                  className={clsx(
                    'py-2 px-3',
                    'text-white/70 hover:text-white/100 font-extralight',
                    'rounded border border-white/40 hover:border-white/80'
                  )}
                  style={{
                    background:
                      'radial-gradient(50% 50% at 50% 50%, rgba(37, 42, 40, 0.8) 0%, rgba(31, 38, 43, 0.8) 100%)',
                  }}
                >
                  <Link
                    href={`/${params.lang}/contribute/reports/${report.slug.join('/')}`}
                  >
                    {report.title}
                  </Link>
                </li>
              ))}
            </ul>
            </>
          }
        </div>
      </section>
      <section
        style={{
          background:
            'radial-gradient(38.53% 38.53% at 31.13% 66.68%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(61.8% 61.8% at 69.18% 27.49%, rgba(255, 255, 255, 0.056) 0%, rgba(255, 255, 255, 0) 100%), #203035',
        }}
      >
        <div className="max-w-2xl px-5 m-auto py-20 grid gap-20">
          <FeatureCard Feature={FeaturesOpenSource} title={i18n.features.open.title}>
            <p>
              {i18n.features.open.description}
            </p>
          </FeatureCard>
          <FeatureCard Feature={FeaturesFree} reverse={true} title={i18n.features.cost.title}>
            <p>
            {i18n.features.cost.description}
            </p>
          </FeatureCard>
          <FeatureCard Feature={FeaturesDataCentric} title={i18n.features.endtoend.title}>
            <p>
            {i18n.features.endtoend.description}
            </p>
          </FeatureCard>
          <FeatureCard
            Feature={FeaturesHybridation}
            reverse={true}
            title={i18n.features.deploy.title}
          >
            <p>
              {i18n.features.deploy.description}
            </p>
          </FeatureCard>
        </div>
      </section>
    </div>
  )
}

const FeatureCard = function ({ children, reverse, Feature, title }) {
  return (
    <div
      className={clsx(
        'flex gap-3 gap-y-10 sm:gap-20 flex-col sm:flex-row',
        'text-center sm:text-left',
        reverse && 'sm:flex-row-reverse'
      )}
    >
      <div className="w-[20%] m-auto flex sm:block">
        <Feature />
      </div>
      <div className="sm:w-[80%]">
        <h2 className={clsx('text-2xl font-extralight mb-3')}>{title}</h2>
        {children}
      </div>
    </div>
  )
}
