import { ComponentProps } from 'react'

export interface ButtonFormProps extends ComponentProps<'button'> {
  form?: string
}

export function ButtonForm({ form, ...props }: ButtonFormProps) {
  return (
    <div className="flex items-center  justify-end gap-2 pt-5">
      <button
        type="button"
        className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-50"
        {...props}
      >
        Cancel
      </button>
      <button
        type="submit"
        form={form}
        className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white hover:bg-violet-700"
      >
        Save
      </button>
    </div>
  )
}
