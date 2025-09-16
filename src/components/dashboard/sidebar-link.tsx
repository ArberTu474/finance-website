import clsx from 'clsx'
import Link from 'next/link'
import { ReactElement } from 'react'

type Prop = {
  href: string
  icon: ReactElement
  children: React.ReactNode
  active?: boolean
  collapsed?: boolean
}

export default function SidebarLink({
  href,
  icon,
  children,
  active = false,
  collapsed,
}: Prop) {
  return (
    <Link
      href={href}
      className={clsx(
        {
          'bg-sidebar-primary text-sidebar-primary-foreground': active === true,
          'hover:bg-sidebar-accent active:bg-sidebar-accent': active === false,
        },
        'leading-0 flex items-center gap-2 p-2.5 rounded-lg'
      )}
    >
      {icon}
      {!collapsed ? children : ''}
    </Link>
  )
}
