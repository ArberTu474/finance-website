import { LogoutButton } from '@/components/authentication/auth-buttons'
import { getServerSession } from '@/lib/get-session'
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { unauthorized } from 'next/navigation'

export default async function DashboardPage() {
  const session = await getServerSession()
  const user = session?.user

  if (!user) unauthorized()

  return (
    <div>
      <Image
        src={user.image || ''}
        width={64}
        height={64}
        alt={user.name || 'User avatar'}
      />
      <h1>{user.name}</h1>
      <LogoutButton>
        <LogOut />
        Log out
      </LogoutButton>
    </div>
  )
}
