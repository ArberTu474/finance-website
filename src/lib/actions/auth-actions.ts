'use client'

import { authClient } from '@/lib/auth-client'
import { redirect } from 'next/navigation'

// Sign in with GitHub (you could add other providers too)
export async function signInWithGithub() {
  await authClient.signIn.social({ provider: 'github' })
}

// Generic sign out
export async function signOut(redirectUrl: string = '/') {
  await authClient.signOut()
  redirect(redirectUrl)
}
