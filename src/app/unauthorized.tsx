import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function UnauthorizedPage() {
  return (
    <div className='min-h-svh w-full bg-background relative '>
      <div
        className='absolute inset-0 z-0'
        style={{ background: 'var(--gradient-bg)' }}
      />
      <div className='relative z-10'>
        <div className='flex min-h-svh flex-col items-center justify-center text-center gap-6 p-6 md:p-10'>
          <div className='space-y-2'>
            <h1 className='text-2xl font-semibold'>401 - Unauthorized</h1>
            <p className='text-muted-foreground'>Please sign in to continue.</p>
          </div>
          <div>
            <Button asChild>
              <Link href='/login'>Log in</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
