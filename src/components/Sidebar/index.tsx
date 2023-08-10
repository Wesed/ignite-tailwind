import {
  BarChart2,
  CheckSquare,
  Cog,
  Flag,
  Home,
  Layers,
  LifeBuoy,
  Search,
  Users,
} from 'lucide-react'
import { Logo } from './logo'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'

export function Sidebar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-200 px-5 py-8">
      <Logo />
      <div className="border-zing-300 mx-1 flex w-full items-center gap-2 rounded-lg border px-3 py-2 shadow-sm">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          type="text"
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>
      <nav className="space-y-0.5">
        <NavItem title="Home" icon={Home} />
        <NavItem title="Dashboard" icon={BarChart2} />
        <NavItem title="Projects" icon={Layers} />
        <NavItem title="Tasks" icon={CheckSquare} />
        <NavItem title="Reporting" icon={Flag} />
        <NavItem title="Users" icon={Users} />
      </nav>
      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>
      </div>
      <UsedSpaceWidget />

      <div className="h-px bg-zinc-200" />

      <Profile />
    </aside>
  )
}
