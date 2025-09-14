import FeatureCard from '@/components/home-page/feature-card'
import { Button } from '@/components/ui/button'
import { getServerSession } from '@/lib/get-session'
import { ChartLine, CirclePlus, Eye } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='container max-w-3xl mx-auto p-6 relative z-10'>
      <div className='flex flex-col items-center text-center gap-6 mt-30 sm:mt-[15em]'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-5'>
          Smarter Spending
          <br />
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-foreground to-purple-500/80 dark:to-purple-500/60'>
            Bigger Savings
          </span>
        </h1>

        <p>
          Take control of your finances with ease. Monitor your income and
          expenses, visualize trends, and stay on top of your financial goals,
          so you can make smarter decisions and save more every month.
        </p>

        {/* Features */}
        <div className='w-full flex flex-col sm:flex-row gap-4 items-center justify-center shrink-0'>
          <FeatureCard
            title='Financial Insights'
            description='See where every dollar goes'
            color='blue'
            icon={<ChartLine />}
          />
          <FeatureCard
            title='Track your spending'
            description='Monitor your money daily'
            color='pink'
            icon={<Eye />}
          />
        </div>

        <Button size={'xl'} className='text-lg font-bold mt-6' asChild>
          <Link href='/login'>Login</Link>
        </Button>
      </div>
    </div>
  )
}
