'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Sidebar from './Sidebar'

export default function LayoutDrawer () {
  const [open, setOpen] = useState(false)
  return (
    <>
      <button
        type="button"
        className={clsx(
          "flex items-center pl-3",
          "hover:text-[#00FFFA] [&>svg_*]:hover:fill-[#00FFFA]",
        )}
        onClick={() => {setOpen(true)}}
        title="Toggle drawer"
      >
        <Bars3Icon className="w-5 h-5" />
      </button>
      <Sidebar
        open={open}
        onOpen={(open) => setOpen(open)}
      />
    </>
  )
}
