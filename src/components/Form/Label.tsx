import { ComponentProps } from 'react'

export interface LabelProps extends ComponentProps<'label'> {
  id?: string
  textLabel: string
  textSpan?: string
  className?: string
}

export function Label({
  id,
  textLabel,
  textSpan,
  className = '',
  ...props
}: LabelProps) {
  return (
    <label
      htmlFor={id}
      className={
        'text-sm font-medium text-zinc-700 dark:text-zinc-300 ' + className
      }
      {...props}
    >
      {textLabel}
      <span className="mt-0.5 block text-sm font-normal">{textSpan}</span>
    </label>
  )
}
