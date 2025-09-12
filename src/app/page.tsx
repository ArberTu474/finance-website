import { auth } from '@/lib/auth'
import { headers } from 'next/headers'
import { LoginButton, LogoutButton } from '../components/auth-buttons'

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  })

  if (!session) {
    return (
      <div>
        You must be logged in
        <LoginButton />
      </div>
    )
  }

  return (
    <div>
      Welcome {session.user.email}
      <LogoutButton />
    </div>
  )
}
