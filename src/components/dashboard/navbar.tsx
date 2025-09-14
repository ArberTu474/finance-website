import { ModeToggle } from '../mode-toggle'
import UserAvatar from './user-avatar'

export async function Navbar() {
  return (
    <nav className='bg-sidebar p-4 border-b border-border flex items-center justify-between'>
      <h2 className='text-xl font-medium'>Dashboard</h2>

      <div className='flex items-center gap-4'>
        <ModeToggle />
        <UserAvatar />
      </div>
    </nav>
  )
}
