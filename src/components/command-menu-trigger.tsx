import type { ReactNode } from 'react';
import { clsx } from 'clsx'
import { IconSearch } from '@tabler/icons-react'

export default function CommandMenuTrigger({ children, size = "sm" }: { children: ReactNode, size?: "sm" | "lg" }) {
  return <button className={clsx('transition flex w-full items-center rounded-md border border-neutral-800 bg-neutral-900 text-sm font-semibold hover:bg-neutral-800 focus:outline-none focus:ring', {
    "h-7 px-1.5": size === "sm",
    "h-10 px-3": size === "lg"
  })}>
    <IconSearch size={16} className="text-neutral-500"></IconSearch>
    <span className='pl-1.5 pr-3'>{children}</span>
    <div className='flex-1'></div>
    <kbd className='font-mono text-xs text-neutral-500'>⌘K</kbd>
  </button>
}
