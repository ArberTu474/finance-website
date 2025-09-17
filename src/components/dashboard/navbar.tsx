import Logo from '../logo'
import { ModeToggle } from '../mode-toggle'
import MobileSidebar from './mobile-sidebar'
import UserAvatar from './user-avatar'

export async function Navbar() {
  return (
    <nav className='sticky top-0 z-10 bg-sidebar p-4 border-b border-border flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <div className='md:hidden block'>
          <MobileSidebar />
        </div>
        <Logo size='lg' />
      </div>

      <div className='flex items-center gap-4'>
        <ModeToggle />
        <UserAvatar />
      </div>
    </nav>
  )
}
