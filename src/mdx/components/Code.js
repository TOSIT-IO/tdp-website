'use client'

import { useContext } from 'react'
import { Tabs, TabsContext } from './Tabs'

export function Code({ children, ...props }) {
  let isGrouped = useContext(TabsContext)
  if (isGrouped) {
    return <code {...props} dangerouslySetInnerHTML={{ __html: children }} />
  }
  return <code {...props}>{children}</code>
}

export function Pre({ children, ...props }) {
  let isGrouped = useContext(TabsContext)
  if (isGrouped) {
    return children
  }
  return <Tabs {...props}>{children}</Tabs>
}
