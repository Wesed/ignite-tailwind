import { LogOut } from 'lucide-react'
import { Button } from '../Form/Button'

export function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3 rounded">
      <img
        src="https://github.com/wesed.png"
        className="h-10 w-10 rounded-full"
        alt=""
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700">
          Weslley Eduardo
        </span>
        <span className="truncate text-sm text-zinc-500">
          dev.wfeduardo@gmail.com
        </span>
      </div>
      <Button variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500 group-hover:text-violet-500" />
      </Button>
    </div>
  )
}
