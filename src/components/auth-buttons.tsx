'use client'
import { Button } from '@/components/ui/button'
import { signInWithGithub, signOut } from '@/lib/actions/auth-actions'

export function LoginButton() {
  return (
    <Button variant='default' onClick={signInWithGithub}>
      Sign in with GitHub
    </Button>
  )
}

export function LogoutButton() {
  return (
    <Button variant='default' onClick={async () => await signOut('/')}>
      Sign out
    </Button>
  )
}
