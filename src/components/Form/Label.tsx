import { ComponentProps } from 'react'

export interface LabelProps extends ComponentProps<'label'> {
  id?: string
  textLabel: string
  textSpan?: string
}

export function Label({ id, textLabel, textSpan, ...props }: LabelProps) {
  return (
    <label
      htmlFor={id}
      className="text-sm font-medium text-zinc-700"
      {...props}
    >
      {textLabel}
      <span className="mt-0.5 block text-sm font-normal">{textSpan}</span>
    </label>
  )
}
