'use client'

import {
  Children,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { create } from 'zustand'
import { CodeGroupHeader, getPanelTitle, CodePanelHeader } from './Tabs'
import { Tag } from './Tag'

// const languageNames = {
//   go: 'Go',
//   javascript: 'JavaScript',
//   js: 'JavaScript',
//   json: 'JSON',
//   php: 'PHP',
//   python: 'Python',
//   ts: 'TypeScript',
//   ruby: 'Ruby',
//   typescript: 'TypeScript',
//   yaml: 'YAML',
// }

// function getPanelTitle({ title, language }) {
//   return title ?? languageNames[language] ?? language
// }

function ClipboardIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path
        strokeWidth="0"
        d="M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"
      />
      <path
        fill="none"
        strokeLinejoin="round"
        d="M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"
      />
    </svg>
  )
}

function CopyButton({ code }) {
  let [copyCount, setCopyCount] = useState(0)
  let copied = copyCount > 0
  useEffect(() => {
    if (copyCount > 0) {
      let timeout = setTimeout(() => setCopyCount(0), 1000)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [copyCount])
  return (
    <button
      type="button"
      className={clsx(
        'group/button absolute top-3.5 right-4 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100',
        copied
          ? 'bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/20'
          : 'bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5'
      )}
      onClick={() => {
        window.navigator.clipboard.writeText(code).then(() => {
          setCopyCount((count) => count + 1)
        })
      }}
    >
      <span
        aria-hidden={copied}
        className={clsx(
          'pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300',
          copied && '-translate-y-1.5 opacity-0'
        )}
      >
        <ClipboardIcon className="h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400" />
        Copy
      </span>
      <span
        aria-hidden={!copied}
        className={clsx(
          'pointer-events-none absolute inset-0 flex items-center justify-center text-emerald-400 transition duration-300',
          !copied && 'translate-y-1.5 opacity-0'
        )}
      >
        Copied!
      </span>
    </button>
  )
}

function CodePanel({ tag, label, code, children }) {
  let child = Children.only(children)
  return (
    <div className="group dark:bg-white/2.5">
      <CodePanelHeader
        tag={child.props.tag ?? tag}
        label={child.props.label ?? label}
      />
      <div className="relative">
        { (child.props.code || code)
          ? <>
              <pre className="overflow-x-auto p-4 text-sm/8 text-white">{children}</pre>
              <CopyButton code={child.props.code ?? code} />
            </>
          : <div className="overflow-x-auto p-4 text-sm/8 text-white">{children}</div>
        }
      </div>
    </div>
  )
}

function CodeGroupPanels({ children, ...props }) {
  let hasTabs = Children.count(children) > 1
  if (hasTabs) {
    return (
      <Tab.Panels>
        {Children.map(children, (child) => (
          <Tab.Panel>
            <CodePanel {...props}>{child}</CodePanel>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    )
  }
  return <CodePanel {...props}>{children}</CodePanel>
}

function usePreventLayoutShift() {
  let positionRef = useRef()
  let rafRef = useRef()
  useEffect(() => {
    return () => {
      window.cancelAnimationFrame(rafRef.current)
    }
  }, [])
  return {
    positionRef,
    preventLayoutShift(callback) {
      let initialTop = positionRef.current.getBoundingClientRect().top
      callback()
      rafRef.current = window.requestAnimationFrame(() => {
        let newTop = positionRef.current.getBoundingClientRect().top
        window.scrollBy(0, newTop - initialTop)
      })
    },
  }
}

const usePreferredLanguageStore = create((set) => ({
  preferredLanguages: [],
  addPreferredLanguage: (language) =>
    set((state) => ({
      preferredLanguages: [
        ...state.preferredLanguages.filter(
          (preferredLanguage) => preferredLanguage !== language
        ),
        language,
      ],
    })),
}))

function useTabGroupProps(availableLanguages) {
  let { preferredLanguages, addPreferredLanguage } = usePreferredLanguageStore()
  let [selectedIndex, setSelectedIndex] = useState(0)
  let activeLanguage = [...availableLanguages].sort(
    (a, z) => preferredLanguages.indexOf(z) - preferredLanguages.indexOf(a)
  )[0]
  let languageIndex = availableLanguages.indexOf(activeLanguage)
  let newSelectedIndex = languageIndex === -1 ? selectedIndex : languageIndex
  if (newSelectedIndex !== selectedIndex) {
    setSelectedIndex(newSelectedIndex)
  }
  let { positionRef, preventLayoutShift } = usePreventLayoutShift()
  return {
    as: 'div',
    ref: positionRef,
    selectedIndex,
    onChange: (newSelectedIndex) => {
      preventLayoutShift(() =>
        addPreferredLanguage(availableLanguages[newSelectedIndex])
      )
    },
  }
}

const CodeGroupContext = createContext(false)

export function CodeGroup({ children, title, ...props }) {
  let languages = Children.map(children, (child) => getPanelTitle(child.props))
  let tabGroupProps = useTabGroupProps(languages)
  let hasTabs = Children.count(children) > 1
  let Container = hasTabs ? Tab.Group : 'div'
  let containerProps = hasTabs ? tabGroupProps : {}
  let headerProps = hasTabs
    ? { selectedIndex: tabGroupProps.selectedIndex }
    : {}
    return (
    <CodeGroupContext.Provider value={true}>
      <Container
        {...containerProps}
        className="not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10"
      >
        <CodeGroupHeader title={title} {...headerProps}>
          {children}
        </CodeGroupHeader>
        <CodeGroupPanels {...props}>{children}</CodeGroupPanels>
      </Container>
    </CodeGroupContext.Provider>
  )
}

export function Code({ children, ...props }) {
  let isGrouped = useContext(CodeGroupContext)
  if (isGrouped) {
    return <code {...props} dangerouslySetInnerHTML={{ __html: children }} />
  }
  return <code {...props}>{children}</code>
}

export function Pre({ children, ...props }) {
  let isGrouped = useContext(CodeGroupContext)
  if (isGrouped) {
    return children
  }
  return <CodeGroup {...props}>{children}</CodeGroup>
}
