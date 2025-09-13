import { getServerSession } from '@/lib/get-session'
import { unauthorized } from 'next/navigation'

export default async function DashboardPage() {
  const session = await getServerSession()
  const user = session?.user

  if (!user) unauthorized()

  return <h1>hello</h1>
}
