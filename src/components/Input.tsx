import { ComponentProps } from 'react'

// pattern de composicao: desmembra o componente em varias partes customizaveis

// extende todas as props que uma div do html poderia receber
type PrefixProps = ComponentProps<'div'>
// pode ser qualquer coisa: icone, imagem, texto, etc
export function Prefix(props: PrefixProps) {
  return <div {...props} />
}

type ControlProps = ComponentProps<'input'>
// o input em si
export function Control(props: ControlProps) {
  return (
    <input
      type="text"
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  )
}

export type RootProps = ComponentProps<'div'>
// o container que segura todos
export function Root(props: RootProps) {
  return (
    <div
      className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    ></div>
  )
}
