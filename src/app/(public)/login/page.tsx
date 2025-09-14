import { LoginForm } from '@/components/authentication/login-form'
import { getServerSession } from '@/lib/get-session'
import { redirect } from 'next/navigation'
import Logo from '@/components/logo'

export default async function LoginPage() {
  const session = await getServerSession()
  const user = session?.user

  if (user) {
    redirect('/dashboard')
  }

  return (
    <div className='flex min-h-svh flex-col items-center justify-center p-6 md:p-10'>
      <div className='flex w-full max-w-sm flex-col gap-6'>
        <Logo />
        <LoginForm />
      </div>
    </div>
  )
}
