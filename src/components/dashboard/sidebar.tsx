'use client'

import { useState } from 'react'
import { Button } from '../ui/button'
import { PanelLeft } from 'lucide-react'
import { usePathname } from 'next/navigation'
import SidebarLink from './sidebar-link'
import { cn } from '@/lib/utils'
import { sideBarContent } from '@/content.ts/sidebar-content'

export default function Sidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)

  function handleCollapse() {
    setCollapsed(!collapsed)
  }

  return (
    <aside
      className={cn(
        !collapsed ? 'min-w-[14em] lg:min-w-[16em]' : '',
        'hidden md:block sticky top-0 h-svh bg-sidebar p-4 border-r border-border'
      )}
    >
      <Button size='icon' variant='outline' onClick={() => handleCollapse()}>
        <PanelLeft className='size-5' />
      </Button>

      <div className='space-y-2 mt-6'>
        {sideBarContent.map((link, index) => (
          <SidebarLink
            key={index}
            collapsed={collapsed}
            active={pathname === link.href}
            href={link.href}
            icon={link.icon}
          >
            {link.title}
          </SidebarLink>
        ))}
      </div>
    </aside>
  )
}
