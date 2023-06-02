import 'server-only'
import clsx from 'clsx'
import dedent from 'dedent'
import Link from 'next/link'
import Logo from './layout/assets/logo.svg'
import CirclesLeft from './layout/assets/circles-left.svg'
import CirclesRight from './layout/assets/circles-right.svg'
import FeaturesOpenSource from './layout/assets/FeaturesOpenSource.svg'
import FeaturesFree from './layout/assets/FeaturesFree.svg'
import FeaturesDataCentric from './layout/assets/FeaturesDataCentric.svg'
import FeaturesHybridation from './layout/assets/FeaturesHybridation.svg'

export const dynamicParams = false

export function generateMetadata({ params }) {
  return {
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
          'relative h-[500px] xl:h-[600px] 2xl:h-[650px]',
          'border-b border-slate-500'
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
        <div className={clsx(
          "absolute text-center flex flex-col",
          "top-[14%] bottom-[5%] left-[8%] right-[8%]",
          "md:top-[20%] md:bottom-[10%] md:left-[15%] md:right-[20%]",
          "gap-14 md:gap-5",
          //  xs:left-[5%] sm:left-[10%] md:left-[20%] w-[90%]
        )}>
          {/* <div className="bg-red-400 w-full h-full grow">ok</div> */}
          <Logo
            className="h-auto"
          />
          {/* <h1 className="grow relative">
            <Logo
              className="h-full m-auto"
            />
          </h1> */}
          <h1 className="text-xl font-extralight tracking-wider">
            <span className="sr-only">
              TDP
            </span>
            100% open source big data platform
          </h1>
          <div className="flex flex-col sm:flex-row gap-5 sm:flex justify-center sm:gap-10">
            <div className="flex gap-3 sm:gap-10 justify-center">
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
                href="/en/learn"
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
            </div>
            <div className="sm:flex">
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
        </div>
      </header>
      <section
        className={clsx(
          'py-10',
          'border-b border-slate-500',
        )}
        style={{
          background: 'radial-gradient(43.58% 43.58% at 21.12% 25.63%, rgba(97, 130, 120, 0.2) 0%, rgba(122, 159, 132, 0) 100%), radial-gradient(64.91% 64.91% at 31.32% 63.18%, rgba(64, 86, 142, 0.2) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(19.81% 43.58% at 73.92% 40.01%, rgba(122, 159, 132, 0.2) 0%, rgba(40, 52, 59, 0.056) 100%), #263134',
        }}
      >
        <div
          className="max-w-4xl px-5 m-auto"
        >
          <h2
            className={clsx(
              'mb-5',
              'text-xl font-extralight',
            )}
          >
            Roadmap et nouveautés
          </h2>
          <ul className="grid gap-3">
            <li
              className={clsx(
                "py-2 px-3",
                "text-white/70 hover:text-white/100 font-extralight",
                "rounded border border-white/40 hover:border-white/80",
              )}
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(37, 42, 40, 0.8) 0%, rgba(31, 38, 43, 0.8) 100%)',
              }}
            >
              <p>Come to the TOSIT stand and speak with TDP contributors at the Big Data Summit in Paris next September.</p>
              <small>25-26 September 2023, Paris, France</small>
            </li>
            <li
              className={clsx(
                "py-2 px-3",
                "text-white/70 hover:text-white/100 font-extralight",
                "rounded border border-white/40 hover:border-white/80",
              )}
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(37, 42, 40, 0.8) 0%, rgba(31, 38, 43, 0.8) 100%)',
              }}
            >
              <p>Sinh Chung Nguyen, architect for the French Tax Administration, present TDP and the TOSIT association at the World Data Summit</p>
              <small>17-19 May 2023 Amsterdam, The Netherlands</small>
            </li>
            <li
              className={clsx(
                "py-2 px-3",
                "text-white/70 hover:text-white/100 font-extralight",
                "rounded border border-white/40 hover:border-white/80",
              )}
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(37, 42, 40, 0.8) 0%, rgba(31, 38, 43, 0.8) 100%)',
              }}
            >
              <p>Présentation au salon Big Data & AI Paris, septembre 2022 : Présentation Technique, Présentation Métier</p>
              <small>Le 18 janvier 2023</small>
            </li>
            <li
              className={clsx(
                "py-2 px-3",
                "text-white/70 hover:text-white/100 font-extralight",
                "rounded border border-white/40 hover:border-white/80",
              )}
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(37, 42, 40, 0.8) 0%, rgba(31, 38, 43, 0.8) 100%)',
              }}
            >
              <p>Présentation au salon Big Data & AI Paris, septembre 2022 : Présentation Technique, Présentation Métier</p>
              <small>Le 18 janvier 2023</small>
            </li>
            <li
              className={clsx(
                "py-2 px-3",
                "text-white/70 hover:text-white/100 font-extralight",
                "rounded border border-white/40 hover:border-white/80",
              )}
              style={{
                background: 'radial-gradient(50% 50% at 50% 50%, rgba(37, 42, 40, 0.8) 0%, rgba(31, 38, 43, 0.8) 100%)',
              }}
            >
              <p>Présentation au salon Big Data & AI Paris, septembre 2022 : Présentation Technique, Présentation Métier</p>
              <small>Le 18 janvier 2023</small>
            </li>
          </ul>
        </div>
      </section>
      <section
        style={{
          background: 'radial-gradient(38.53% 38.53% at 31.13% 66.68%, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 100%), radial-gradient(61.8% 61.8% at 69.18% 27.49%, rgba(255, 255, 255, 0.056) 0%, rgba(255, 255, 255, 0) 100%), #203035',
        }}
      >
        <div
          className="max-w-2xl px-5 m-auto py-20 grid gap-20"
        >
          <FeatureCard
            Feature={FeaturesOpenSource}
            title="Open source"
          >
            <p>
              Le code de toutes les technologies utilisées est disponible sur notre
              Github publique avec une licence Apache.
            </p>
          </FeatureCard>
          <FeatureCard
            Feature={FeaturesFree}
            reverse={true}
            title="Gratuite"
          >
            <p>
            Vous pouvez utiliser toutes les technologies et tous les services et composants de TDP de façon gratuite.
            </p>
          </FeatureCard>
          <FeatureCard
            Feature={FeaturesDataCentric}
            title="Data centric"
          >
            <p>
            TDP respecte le cycle de vie de la donnée en proposant des technologies et des patterns pour gérer la donnée de bout-en-bout.
            </p>
          </FeatureCard>
          <FeatureCard
            Feature={FeaturesHybridation}
            reverse={true}
            title="Hybridation environnement"
          >
            <p>
            Compatible à la fois avec des déploiements sur le cloud privé, public ou on-premise.
            </p>
          </FeatureCard>
        </div>
      </section>
    </div>
  )
}

const FeatureCard = function ({
  children,
  reverse,
  Feature,
  title,
}) {
  return (
    <div className={clsx(
      "flex gap-3 sm:gap-20 flex-col sm:flex-row",
      "text-center sm:text-left",
      reverse && "sm:flex-row-reverse",
    )}>
      <div className="w-[20%] m-auto flex justify-end">
        <Feature />
      </div>
      <div className="sm:w-[80%]">
        <h2
          className={clsx(
            'text-2xl font-extralight mb-3'
          )}
        >
          {title}
        </h2>
        {children}
      </div>
    </div>
  )
}
