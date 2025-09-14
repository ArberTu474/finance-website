import clsx from 'clsx'
import { Wallet, Wallet2 } from 'lucide-react'
import Link from 'next/link'

type Prop = {
  size?: 'default' | 'lg'
}

export default function Logo({ size = 'default' }: Prop) {
  return (
    <Link
      href='/'
      className='flex items-center gap-3 self-center font-semibold'
    >
      <div
        className={clsx(
          {
            'size-6': size === 'default',
            'size-7': size === 'lg',
          },
          `bg-primary text-primary-foreground flex items-center justify-center rounded-md`
        )}
      >
        <Wallet2
          className={clsx({
            'size-4': size === 'default',
            'size-5': size === 'lg',
          })}
        />
      </div>
      <p
        className={clsx({
          'text-lg': size === 'default',
          'text-xl': size === 'lg',
        })}
      >
        My Finances
      </p>
    </Link>
  )
}
