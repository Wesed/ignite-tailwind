import { Button } from '@/components/Form/Button'
import { Form } from '@/components/Form/Form'
import { SettingsTabs } from '@/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col justify-between gap-4 border-b border-zinc-200 py-5 dark:border-zinc-700 lg:flex-row lg:items-center">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
            Personal info
          </h2>
          <span className="text-sm text-zinc-500 dark:text-zinc-400">
            Update your photo and personal details here.
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" type="button">
            Cancel
          </Button>
          <Button variant="primary" type="submit" form="settings">
            Save
          </Button>
        </div>
      </div>

      <Form id="Settings" />
    </>
  )
}
