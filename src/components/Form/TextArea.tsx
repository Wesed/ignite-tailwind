import { ComponentProps } from 'react'

export type TextAreaProps = ComponentProps<'textarea'>

export function TextArea(props: TextAreaProps) {
  return (
    <textarea
      className="min-h-[120px] w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:shadow-sm focus:border-violet-500 focus:ring-2 focus:ring-violet-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:placeholder-zinc-400 dark:focus:border-violet-500 dark:focus:ring-violet-500/20"
      {...props}
    />
  )
}
