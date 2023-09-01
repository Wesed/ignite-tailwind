import { twMerge } from 'tailwind-merge'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

export function Switch() {
  const { theme, setTheme } = useTheme()
  return (
    <>
      <label
        htmlFor="switch"
        onClick={() => {
          setTheme(theme === 'light' ? 'dark' : 'light')
        }}
        className={twMerge(
          'flex h-6 w-10 cursor-pointer items-center rounded-full border bg-zinc-50 hover:bg-white',
          'dark:border-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600',
        )}
      >
        {theme === 'light' ? (
          <div className=" rounded-full bg-zinc-200 p-0.5 text-zinc-500">
            <Sun size={15} />
          </div>
        ) : (
          <div className="ml-auto rounded-full bg-zinc-800 p-0.5">
            <Moon fill="white" className="rounded-full" size={15} />
          </div>
        )}
      </label>

      <input type="checkbox" id="switch" className="group sr-only" />
    </>
  )
}
