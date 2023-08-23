import { Button } from '@/components/Form/Button'
import { Form } from '@/components/Form/Form'
import { SettingsTabs } from '@/components/SettingsTabs'

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 ">Settings</h1>

      <SettingsTabs />

      <div className="mt-6 flex items-center justify-between border-b border-zinc-200 py-5">
        <div className="space-y-1">
          <h2 className="text-lg font-medium text-zinc-900">Personal info</h2>
          <span className="text-sm text-zinc-500">
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
