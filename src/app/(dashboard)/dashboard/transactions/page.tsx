import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'

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

  return (
    <main>
      <h1 className='text-2xl md:text-3xl font-semibold mb-5'>Transactions</h1>

      <ToggleGroup
        type='single'
        defaultValue='all'
        className='inline-flex w-full sm:w-fit rounded-lg p-1.5 bg-muted'
      >
        {toggleOptions.map((option, index) => (
          <ToggleGroupItem
            key={index}
            value={option.value}
            aria-label={option.label}
            className='grow sm:grow-0 px-4 py-2 rounded-md text-sm font-medium border border-muted cursor-pointer data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:border data-[state=on]:border-border'
          >
            {option.label}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </main>
  )
}
