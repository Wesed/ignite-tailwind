import * as Input from '@/components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/Form/TextArea'
import { Label } from '@/components/Form/Label'
import { ComponentProps } from 'react'
import { ButtonForm } from './ButtonForm'

export interface FormProps extends ComponentProps<'form'> {
  id: string
}

export function Form({ id, ...props }: FormProps) {
  return (
    <form
      id={id}
      className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200"
      {...props}
    >
      {/* Name */}
      <div className="grid grid-cols-form gap-3">
        <Label id="firstName" textLabel="Name" />
        <div className="grid grid-cols-2 gap-6">
          <Input.Root>
            <Input.Control id="firstName" defaultValue="Weslley" />
          </Input.Root>
          <Input.Root>
            <Input.Control id="lastName" defaultValue="Eduardo" />
          </Input.Root>
        </div>
      </div>
      {/* Email */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <Label id="email" textLabel="Email address" />
        <Input.Root>
          <Input.Prefix>
            <Mail className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            id="email"
            type="email"
            defaultValue="weslley@gmail.com"
          />
        </Input.Root>
      </div>
      {/* Your photo */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <Label
          textLabel="Your photo"
          textSpan="his will be displayed on your profile."
        />
        <FileInput.Root className="flex items-start gap-5">
          <FileInput.ImagePreview />
          <FileInput.Trigger />
          <FileInput.Control />
        </FileInput.Root>
      </div>
      {/* Role */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <Label id="role" textLabel="Role" />
        <Input.Root>
          <Input.Prefix>
            <Mail className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control
            id="role"
            type="text"
            defaultValue="Front-end developer and UX|UI Designer"
          />
        </Input.Root>
      </div>
      {/* Country */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <Label id="country" textLabel="Country" />
        <Select placeholder="Select a country...">
          <SelectItem value="br" text="Brazil" />
          <SelectItem value="us" text="United States" />
          <SelectItem value="es" text="Spain" />
          <SelectItem value="jpn" text="Japain" />
          <SelectItem value="ch" text="China" />
          <SelectItem value="de" text="Germany" />
        </Select>
      </div>
      {/* Timezone */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <Label id="timezone" textLabel="Timezone" />
        <Select placeholder="Select a timezone...">
          <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
          <SelectItem value="utc3" text="America Sao Paulo (UTC-03:00)" />
        </Select>
      </div>
      {/* Bio */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <Label
          id="email"
          textLabel="Bio"
          textSpan="Write a short introduction"
        />

        <div className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <Select defaultValue="normal">
              <SelectItem value="normal" text="Normal Text" />
              <SelectItem value="md" text="Markdown" />
            </Select>
            <div className="flex items-center gap-1">
              <button type="button" className="rounded-md p-2 hover:bg-zinc-50">
                <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </button>

              <button type="button" className="rounded-md p-2 hover:bg-zinc-50">
                <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </button>

              <button type="button" className="rounded-md p-2 hover:bg-zinc-50">
                <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </button>

              <button type="button" className="rounded-md p-2 hover:bg-zinc-50">
                <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </button>

              <button type="button" className="rounded-md p-2 hover:bg-zinc-50">
                <ListOrdered
                  className="h-4 w-4 text-zinc-500"
                  strokeWidth={3}
                />
              </button>
            </div>
          </div>
          <TextArea
            id="bio"
            defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus sed dolor explicabo? A, velit quis ab dolore dolor iure sit rerum nobis vitae. Dignissimos natus tenetur libero autem laborum!"
          />
        </div>
      </div>
      {/* Portfolio projects */}
      <div className="grid grid-cols-form gap-3 pt-5">
        <Label
          textLabel="Portfolio projects"
          textSpan="Share a few snippets of your work"
        />
        <FileInput.Root>
          <FileInput.Trigger />
          <FileInput.FileList />
          <FileInput.Control multiple />
        </FileInput.Root>
      </div>

      <ButtonForm />
    </form>
  )
}