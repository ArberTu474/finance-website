'use client'

import { authClient } from '@/lib/auth-client'
import { Button } from '../ui/button'
import { useState } from 'react'

type Props = {
  children: React.ReactNode
  provider: 'github' | 'google'
}

export default function OauthLoginButton({ provider, children }: Props) {
  const [loading, setLoading] = useState(false)
  const signIn = async () => {
    setLoading(true)
    await authClient.signIn.social({
      provider,
      callbackURL: '/dashboard',
    })
  }

  return (
    <Button
      onClick={signIn}
      type='button'
      variant='outline'
      size='xl'
      className='w-full'
    >
      {loading ? (
        <div className='size-4 border-foreground border-t-transparent border-2 rounded-full animate-spin'></div>
      ) : (
        children
      )}
    </Button>
  )
}
