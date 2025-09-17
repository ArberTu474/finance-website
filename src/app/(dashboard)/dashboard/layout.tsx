import { Navbar } from '@/components/dashboard/navbar'
import Sidebar from '@/components/dashboard/sidebar'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='min-h-svh bg-background flex'>
      <Sidebar />

      <main className='w-full'>
        <Navbar />
        <div className='p-4'>{children}</div>
      </main>
    </div>
  )
}
