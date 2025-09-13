import { Wallet } from 'lucide-react'

import { LoginForm } from '@/components/authentication/login-form'
import Link from 'next/link'
import { getServerSession } from '@/lib/get-session'
import { redirect } from 'next/navigation'

export default async function LoginPage() {
  const session = await getServerSession()
  const user = session?.user

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className='flex min-h-svh flex-col items-center justify-center p-6 md:p-10'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <Link
          href='/'
          className='flex items-center gap-2 self-center font-medium'
        >
          <div className='bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md'>
            <Wallet className='size-4' />
          </div>
          My Finances
        </Link>
        <LoginForm />
      </div>
    </div>
  )
}
