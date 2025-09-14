import { LogoutButton } from '@/components/authentication/auth-buttons'
import { getServerSession } from '@/lib/get-session'
import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { unauthorized } from 'next/navigation'

export default async function DashboardPage() {
  const session = await getServerSession()
  const user = session?.user

  if (!user) unauthorized()

  return <div>Dashboard</div>
}
