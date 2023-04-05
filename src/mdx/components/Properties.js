'use client'

import { useContext } from 'react'
import { TabsContext } from './Tabs'

function PropertiesRaw({ children }) {
  return (
    <div className="not-prose">
      <ul
        role="list"
        className="m-0 list-none divide-y divide-zinc-900/20 p-0 dark:divide-white/20"
      >
        {children}
      </ul>
    </div>
  )
}

export function Properties({ children, ...props }) {

  let isGrouped = useContext(TabsContext)
  if (isGrouped) {
    return <PropertiesRaw {...props}>{children}</PropertiesRaw>
  }
  return <div className="rounded-2xl border border-zinc-900/20 dark:border-white/20 p-4">
    <PropertiesRaw {...props}>{children}</PropertiesRaw>
  </div>
}

export function Property({ name, type, children }) {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code>{name}</code>
        </dd>
        <dt className="sr-only">Type</dt>
        <dd className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
          {type}
        </dd>
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  )
}
