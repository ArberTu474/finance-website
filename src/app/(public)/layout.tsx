import { Toaster } from '@/components/ui/sonner'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='min-h-svh w-full bg-background relative '>
      <div
        className='absolute inset-0 z-0'
        style={{ background: 'var(--gradient-bg)' }}
      />
      <div className='relative z-10'>
        {children}
        <Toaster position='top-center' swipeDirections={['top']} />
      </div>
    </div>
  )
}
