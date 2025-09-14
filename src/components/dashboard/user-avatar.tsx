import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { getServerSession } from '@/lib/get-session'
import Image from 'next/image'
import { unauthorized } from 'next/navigation'
import { LogoutButton } from '../authentication/auth-buttons'
import { CircleDollarSign, LogOut, Settings, User } from 'lucide-react'
import Link from 'next/link'

export default async function UserAvatar() {
  const session = await getServerSession()
  const user = session?.user

  if (!user) unauthorized()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flex items-center gap-2 cursor-pointer '>
          <Avatar className='size-9'>
            <AvatarImage asChild src='/user.svg' alt={user.name}>
              <Image
                src={user?.image || '/user.svg'}
                alt={user.name}
                width={36}
                height={36}
                priority
              />
            </AvatarImage>
            <AvatarFallback>{user.name[0]}</AvatarFallback>
          </Avatar>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='m-4 mt-0'>
        <DropdownMenuLabel className='-m-1 p-4 bg-muted'>
          <div className='flex items-center gap-3'>
            <Avatar className='size-10'>
              <AvatarImage className='' asChild src='/user.svg' alt={user.name}>
                <Image
                  src={user?.image || '/user.svg'}
                  alt={user.name}
                  width={40}
                  height={40}
                />
              </AvatarImage>
              <AvatarFallback>{user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className='font-medium'>{user?.name}</h3>
              <p className='text-sm text-muted-foreground'>{user?.email}</p>
            </div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href='/dashboard/profile' className='flex items-center gap-3'>
            <User className='text-foreground' /> Profile
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className='flex items-center gap-3'>
            <CircleDollarSign className='text-foreground' /> Billing
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <div className='flex items-center gap-3'>
            <Settings className='text-foreground' /> Settings
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <LogoutButton>
            <div className='flex items-center gap-3'>
              <LogOut className='text-foreground' /> Log out
            </div>
          </LogoutButton>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
