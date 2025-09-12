import { ReactElement } from 'react'

const colorsList: Record<string, string> = {
  pink: 'bg-pink-500/20 text-pink-400 size-12',
  red: 'bg-red-500/20 text-red-400 size-12',
  yellow: 'bg-yellow-500/20 text-yellow-400 size-12',
  blue: 'bg-blue-500/20 text-blue-400 size-12',
  green: 'bg-green-500/20 text-green-400 size-12',
  lime: 'bg-lime-500/20 text-lime-400 size-12',
  violet: 'bg-violet-500/20 text-violet-400 size-12',
  orange: 'bg-orange-500/20 text-orange-400 size-12',
  cyan: 'bg-cyan-500/20 text-cyan-400 size-12',
  purple: 'bg-purple-500/20 text-purple-400 size-12',
  gray: 'bg-gray-500/20 text-gray-400 size-12',
}

type Props = {
  title: string
  description: string
  color:
    | 'pink'
    | 'red'
    | 'blue'
    | 'green'
    | 'violet'
    | 'orange'
    | 'cyan'
    | 'purple'
    | 'gray'
  icon: ReactElement
}

export default function FeatureCard({
  title,
  description,
  color,
  icon,
}: Props) {
  return (
    <div className='sm:w-auto w-full flex items-center justify-start gap-3 p-3 rounded-xl bg-muted/60 hover:bg-muted/90 transition-all backdrop-blur-md border border-border shadow-lg'>
      <div
        className={`flex items-center justify-center size-12 rounded-lg ${colorsList[color]}`}
      >
        {icon}
      </div>
      <div className='text-start'>
        <h2 className='text-lg font-semibold'>{title}</h2>
        <p className='text-muted-foreground'>{description}</p>
      </div>
    </div>
  )
}
