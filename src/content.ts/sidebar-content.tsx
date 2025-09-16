import { ArrowLeftRight, LayoutDashboard, PiggyBank } from 'lucide-react'

export const sideBarContent = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className='size-5' />,
  },
  {
    title: 'Transactions',
    href: '/dashboard/transactions',
    icon: <ArrowLeftRight className='size-5' />,
  },
  {
    title: 'Budgets',
    href: '/dashboard/budgets',
    icon: <PiggyBank className='size-5' />,
  },
]
