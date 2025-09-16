'use client'

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { PanelLeft } from 'lucide-react'
import { sideBarContent } from '@/content.ts/sidebar-content'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'

export default function MobileSidebar() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size='icon' variant='outline' className='size-9'>
          <PanelLeft className='size-4' />
        </Button>
      </SheetTrigger>

      <SheetContent side='left' className='gap-0'>
        <SheetHeader className='p-0'>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <div className='space-y-2 mt-10 p-4'>
          {sideBarContent.map((link, index) => (
            <SheetClose asChild className='w-full' key={index}>
              {/* <SidebarLink
                active={pathname === link.href}
                href={link.href}
                icon={link.icon}
              >
                {link.title}
              </SidebarLink> */}
              <Link
                href={link.href}
                className={clsx(
                  {
                    'bg-sidebar-primary text-sidebar-primary-foreground':
                      pathname === link.href,
                    'hover:bg-sidebar-accent active:bg-sidebar-accent':
                      pathname === link.href,
                  },
                  'leading-0 flex items-center gap-2 p-2.5 rounded-lg'
                )}
              >
                {link.icon}
                {link.title}
              </Link>
            </SheetClose>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  )
}
