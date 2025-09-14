import Logo from '../logo'

export default function Sidebar() {
  return (
    <aside className='hidden md:block bg-sidebar min-w-[20em] min-h-svh p-4 border-r border-border'>
      <Logo size='lg' />
      <h1>Sidebar</h1>
    </aside>
  )
}
