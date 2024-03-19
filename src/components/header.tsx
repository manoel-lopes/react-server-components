import Image from 'next/image'

import { ThemeSwitcher } from '@/providers/theme-switcher'

export function Header() {
  return (
    <div className="bg-zinc-300 dark:bg-neutral-900">
      <div className="mr-3 flex justify-end pt-3">
        <ThemeSwitcher />
      </div>
      <div className="flex justify-center py-24">
        <Image
          src={'/assets/logo.svg'}
          height={200}
          width={200}
          alt="Todo App"
        />
      </div>
    </div>
  )
}
