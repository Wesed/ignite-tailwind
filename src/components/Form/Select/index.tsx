'use client'

import * as SelectPrimitive from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode
  placeholder?: string
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-500 focus:shadow-sm focus:ring-2 focus:ring-violet-50 data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value
          placeholder={placeholder}
          className="text-black"
        />
        <SelectPrimitive.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      {/* cria um 'portal' pra isso ser renderizado num local diferente de onde foi criado. Ex: Modal, dialog, etc */}
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10  w-[--radix-select-trigger-width] animate-slideDownAndFate overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm"
        >
          <SelectPrimitive.Viewport>{children}</SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}
