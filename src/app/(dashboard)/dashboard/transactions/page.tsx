import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { ScrollArea } from '@/components/ui/scroll-area'
import { CornerRightDown, Plus } from 'lucide-react'
import clsx from 'clsx'

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'

export default function TransactionsPage() {
  const toggleOptions = [
    {
      label: 'All Transactions',
      value: 'all',
    },
    {
      label: 'Incoming',
      value: 'incoming',
    },
    {
      label: 'Outgoing',
      value: 'outgoing',
    },
  ]

  const transactions = [
    {
      type: 'incoming',
      date: '03-08-2025',
      category: 'home',
      amount: '+130',
    },
    {
      type: 'outgoing',
      date: '05-08-2025',
      category: 'food',
      amount: '-45',
    },
    {
      type: 'incoming',
      date: '06-08-2025',
      category: 'salary',
      amount: '+2200',
    },
    {
      type: 'outgoing',
      date: '07-08-2025',
      category: 'entertainment',
      amount: '-80',
    },
    {
      type: 'incoming',
      date: '09-08-2025',
      category: 'gift',
      amount: '+150',
    },
    {
      type: 'outgoing',
      date: '11-08-2025',
      category: 'transport',
      amount: '-60',
    },
    {
      type: 'incoming',
      date: '12-08-2025',
      category: 'freelance',
      amount: '+500',
    },
    {
      type: 'outgoing',
      date: '13-08-2025',
      category: 'groceries',
      amount: '-95',
    },
    {
      type: 'outgoing',
      date: '14-08-2025',
      category: 'utilities',
      amount: '-120',
    },
    {
      type: 'incoming',
      date: '15-08-2025',
      category: 'investment',
      amount: '+300',
    },
    {
      type: 'incoming',
      date: '15-08-2025',
      category: 'investment',
      amount: '+300',
    },
    {
      type: 'incoming',
      date: '15-08-2025',
      category: 'investment',
      amount: '+300',
    },
    {
      type: 'incoming',
      date: '15-08-2025',
      category: 'investment',
      amount: '+300',
    },
    {
      type: 'incoming',
      date: '15-08-2025',
      category: 'investment',
      amount: '+300',
    },
    {
      type: 'incoming',
      date: '15-08-2025',
      category: 'investment',
      amount: '+300',
    },
    {
      type: 'incoming',
      date: '15-08-2025',
      category: 'investment',
      amount: '+300',
    },
    {
      type: 'incoming',
      date: '15-08-2025',
      category: 'investment',
      amount: '+300',
    },
    {
      type: 'incoming',
      date: '15-08-2025',
      category: 'investment',
      amount: '+300',
    },
  ]

  return (
    <section className='lg:max-w-[1200px] mx-auto'>
      <h1 className='text-2xl md:text-3xl font-semibold mb-6'>Transactions</h1>

      <div className='flex items-center flex-col-reverse sm:flex-row sm:justify-between gap-4'>
        <ToggleGroup
          type='single'
          defaultValue='all'
          className='inline-flex w-full sm:w-fit rounded-lg p-1 bg-muted/50'
        >
          {toggleOptions.map((option, index) => (
            <ToggleGroupItem
              key={index}
              value={option.value}
              aria-label={option.label}
              className='grow sm:grow-0 px-4 py-2 rounded-md text-sm font-medium border border-muted/50 cursor-pointer data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:border data-[state=on]:border-border'
            >
              {option.label}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>

        <Button className='w-full sm:w-fit' size='lg'>
          <Plus />
          Add New
        </Button>
      </div>
      {/* <ScrollArea className='w-full'>
        <section className='min-w-[600px]'>
          
          <div className='bg-muted py-2 px-5 mb-3 font-medium rounded-lg flex items-center gap-5'>
            <span className='shrink-0 w-32'>Type</span>
            <span className='shrink-0 w-32'>Date</span>
            <span className='shrink-0 w-32'>Category</span>
            <span className='shrink-0 w-32'>Amount</span>
          </div>

          
          {transactions.map((item, index) => (
            <div
              className='py-2.5 px-5 border-border border-b flex items-center gap-5 hover:bg-muted/50 transition-all duration-150'
              key={index}
            >
              <div className='shrink-0 w-32 flex items-center gap-4'>
                <div
                  className={clsx(
                    'flex items-center justify-center rounded-md size-9',
                    {
                      'bg-green-500/20 text-green-400':
                        item.type === 'incoming',
                      'bg-red-500/20 text-red-400 rotate-180':
                        item.type === 'outgoing',
                    }
                  )}
                >
                  <CornerRightDown className='size-4' />
                </div>
                <span className='capitalize'>{item.type}</span>
              </div>
              <span className='shrink-0 w-32 font-mono'>{item.date}</span>
              <span className='shrink-0 w-32'>{item.category}</span>
              <span className='shrink-0 w-32'>{item.amount}</span>
            </div>
          ))}
        </section>
      </ScrollArea> */}
      <div className='overflow-x-auto  max-w-full rounded-md mt-4'>
        <Table className='max-w-full '>
          <TableHeader className='rounded-t-md bg-muted/50 font-normal'>
            <TableRow className='border-none'>
              <TableHead className='px-2 text-center py-4 rounded-l-md'>
                Type
              </TableHead>
              <TableHead className='px-2 text-center'>Date</TableHead>
              <TableHead className='px-2 text-center '>Category</TableHead>
              <TableHead className='px-2 text-center rounded-r-md'>
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className='font-mono'>
            {transactions.map((item, index) => (
              <TableRow key={index}>
                <TableCell className='px-2 text-center font-medium capitalize flex items-center gap-4'>
                  <div
                    className={clsx(
                      'flex items-center justify-center rounded-md size-9',
                      {
                        'bg-green-500/20 text-green-400':
                          item.type === 'incoming',
                        'bg-red-500/20 text-red-400 rotate-180':
                          item.type === 'outgoing',
                      }
                    )}
                  >
                    <CornerRightDown className='size-4' />
                  </div>
                  <span className='hidden sm:inline grow text-center'>
                    {item.type}
                  </span>
                </TableCell>
                <TableCell className='px-2 text-center'>{item.date}</TableCell>
                <TableCell className='px-2 text-center'>
                  <span className='py-1 px-2.5 text-xs rounded-full text-gray-300 bg-gray-300/20 border border-gray-500/60'>
                    {item.category}
                  </span>
                </TableCell>
                <TableCell className='px-2 text-center'>
                  {item.amount}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  )
}
