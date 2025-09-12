'use client'

import { signInWithGithub, signOut } from '@/lib/actions/auth-actions'

export function LoginButton() {
  return (
    <button
      onClick={signInWithGithub}
      className='px-3 py-2 text-gray-800 bg-gray-200 rounded'
    >
      Sign in with GitHub
    </button>
  )
}

export function LogoutButton() {
  return (
    <button
      onClick={async () => await signOut('/')}
      className='px-3 py-2 text-gray-800 bg-gray-200 rounded'
    >
      Sign out
    </button>
  )
}
