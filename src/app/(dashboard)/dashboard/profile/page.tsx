import { getServerSession } from '@/lib/get-session'
import { redirect } from 'next/dist/server/api-utils'
import Image from 'next/image'
import { unauthorized } from 'next/navigation'

export default async function ProfilePage() {
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
      <h1 className='text-2xl'>{user.name}</h1>
      <h2>User Session</h2>
      <pre className='bg-muted max-w-4xl p-6 rounded-xl overflow-x-scroll'>
        {JSON.stringify(session, undefined, 2)}
      </pre>
    </div>
  )
}
