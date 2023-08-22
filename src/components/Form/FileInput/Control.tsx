'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './Root'

export type ControlProps = ComponentProps<'input'>

export function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFilesSelected } = useFileInput()

  const handleFilesSelected = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files?.length) {
      return
    }

    const files = Array.from(event.target.files)

    onFilesSelected(files, multiple)
  }

  // se nao for multiple, vai receber apenas imagens png  jpeg
  const type = !multiple ? 'image/png, image/jpeg' : undefined

  return (
    <input
      type="file"
      id={id}
      className="sr-only"
      onChange={handleFilesSelected}
      multiple={multiple}
      accept={type}
      {...props}
    />
  )
}
