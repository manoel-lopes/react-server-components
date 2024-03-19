type StatsProps = {
  children: React.ReactNode
}

export function Stats({ children }: StatsProps) {
  return (
    <span className="ml-1 rounded-full px-1 py-0.5 text-zinc-500 dark:bg-zinc-800 dark:text-gray-50">
      {children}
    </span>
  )
}
