'use client'

import { Button } from '../ui/button'
import { toast } from 'sonner'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { authClient } from '@/lib/auth-client'

type LoginProps = {
  children: React.ReactNode
  provider: 'github' | 'google'
}

type LogoutProps = {
  children: React.ReactNode
}

export function OauthLoginButton({ provider, children }: LoginProps) {
  const [loading, setLoading] = useState(false)

  async function signInWithProvider() {
    await authClient.signIn.social({
      provider,
      callbackURL: '/dashboard',
      fetchOptions: {
        onSuccess: () => {
          toast.success('Logged in successfully')
        },
        onError: () => {
          toast.error('Login failed')
        },
      },
    })
  }

  return (
    <Button
      onClick={async () => {
        setLoading(true)
        await signInWithProvider()
      }}
      type='button'
      variant='outline'
      size='xl'
      className='w-full'
      disabled={loading}
    >
      {loading ? (
        <div className='size-4 border-foreground border-t-transparent border-2 rounded-full animate-spin'></div>
      ) : (
        children
      )}
    </Button>
  )
}

export function LogoutButton({ children }: LogoutProps) {
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function signOut() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/login') // redirect to login page
        },
      },
    })
  }

  return (
    <Button
      onClick={async () => {
        setLoading(true)
        await signOut()
      }}
      type='button'
      variant='outline'
      size='xl'
      className='w-full'
      disabled={loading}
    >
      {loading ? (
        <div className='size-4 border-foreground border-t-transparent border-2 rounded-full animate-spin'></div>
      ) : (
        children
      )}
    </Button>
  )
}
