import 'server-only'
import clsx from 'clsx'
import dedent from 'dedent'
import Link from 'next/link'
import Logo from './layout/assets/logo.svg'
import CirclesLeft from './layout/assets/circles-left.svg'
import CirclesRight from './layout/assets/circles-right.svg'

export const dynamicParams = false

export async function generateMetadata({ params }) {
  const metadata = {
    en: {
      title: 'TDP, the open source big data platform',
      description: dedent`
      The Trunk Data Platform (TDP) is a data management infrastructure that
      provides a centralized and scalable solution for storing, processing, and
      managing large volumes of data.
      `
    }, 
    fr: {
      title: 'TDP, la plateform big data open source',
      description: dedent`
      La plateforme de données Trunk (TDP) est une infrastructure de gestion de
      données qui fournit une solution centralisée et évolutive pour stocker,
      traiter et gérer de grands volumes de données.
      `
    }
  }
}

export async function generateStaticParams() {
  return [{
    lang: 'en'
  }, {
    lang: 'fr'
  }]
}

export default async function Page ({params}) {
  return (
    <div>
      <header
        className={clsx(
          'relative h-[500px]'
        )}
        style={{
          background: 'radial-gradient(8.66% 8.66% at 5.6% 11.39%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0) 100%), radial-gradient(20.09% 20.09% at 81% 20.09%, rgba(39, 52, 61, 0.2) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(58.88% 58.88% at 19.27% 62.15%, rgba(46, 33, 64, 0.2) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(58.2% 58.2% at 70.57% 26.9%, rgba(69, 106, 71, 0.2) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(180deg, #2B3E4F 0%, #232520 100%)',
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
        <div className="absolute top-[20%] left-[20%] w-[60%] text-center">
          <h1 className="mb-10 mr-[40%]">
            <span className="sr-only">
              TDP
            </span>
            <Logo
              className="h-auto w-[100%] mb-5"
            />
            <span className="text-xl font-extralight tracking-wider">
              100% open source big data platform
            </span>
          </h1>
          <div className="flex gap-10">
            <Link
              href="/en/discover"
              className={clsx(
                "py-2 px-3",
                "text-xl text-white/70 hover:text-white/100 font-extralight",
                "rounded border border-white/40 hover:border-white/80",
              )}
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(37, 42, 40, 0.8) 0%, rgba(31, 38, 43, 0.8) 100%)',
              }}
            >
              Discover
            </Link>
            <Link
              href="/en/docs"
              className={clsx(
                "py-2 px-3",
                "text-xl text-white/70 hover:text-white/100 font-extralight",
                "rounded border border-white/40 hover:border-white/80",
              )}
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(37, 42, 40, 0.8) 0%, rgba(31, 38, 43, 0.8) 100%)',
              }}
            >
              Documentation
            </Link>
            <Link
              href="/en/getting-started"
              className={clsx(
                "py-2 px-3",
                "text-xl text-white/70 hover:text-white/100 font-extralight",
                "bg-[#168E5E]/80 hover:bg-[#168E5E]/100",
                "rounded border border-white/50 hover:border-white/80",
              )}
            >
              Getting started
            </Link>
          </div>
        </div>
      </header>
    </div>
  )
}
