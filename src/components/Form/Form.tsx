import * as Input from '@/components/Input'
import { Bold, Italic, Link, List, ListOrdered, Mail } from 'lucide-react'
import * as FileInput from '@/components/Form/FileInput'
import { Select } from '@/components/Form/Select'
import { SelectItem } from '@/components/Form/Select/SelectItem'
import { TextArea } from '@/components/Form/TextArea'
import { Label } from '@/components/Form/Label'
import { ComponentProps } from 'react'
import { Button } from './Button'

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
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
        <Label id="firstName" textLabel="Name" />
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
          <Input.Root>
            <Input.Control id="firstName" defaultValue="Weslley" />
          </Input.Root>
          <div className="flex flex-col gap-3 lg:block">
            <Label id="lastName" textLabel="Lastname" className="lg:sr-only" />
            <Input.Root>
              <Input.Control id="lastName" defaultValue="Eduardo" />
            </Input.Root>
          </div>
        </div>
      </div>
      {/* Email */}
      <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
      <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
        <Label
          textLabel="Your photo"
          textSpan="his will be displayed on your profile."
        />
        <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
          <FileInput.ImagePreview />
          <FileInput.Trigger />
          <FileInput.Control />
        </FileInput.Root>
      </div>
      {/* Role */}
      <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
      <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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
      <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
        <Label id="timezone" textLabel="Timezone" />
        <Select placeholder="Select a timezone...">
          <SelectItem value="utc8" text="Pacific Standard Time (UTC-08:00)" />
          <SelectItem value="utc3" text="America Sao Paulo (UTC-03:00)" />
        </Select>
      </div>
      {/* Bio */}
      <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
        <Label
          id="email"
          textLabel="Bio"
          textSpan="Write a short introduction"
        />

        <div className="space-y-3">
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
            <Select defaultValue="normal">
              <SelectItem value="normal" text="Normal Text" />
              <SelectItem value="md" text="Markdown" />
            </Select>
            <div className="flex items-center gap-1">
              <Button variant="ghost">
                <Bold className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </Button>

              <Button variant="ghost">
                <Italic className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </Button>

              <Button variant="ghost">
                <Link className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </Button>

              <Button variant="ghost">
                <List className="h-4 w-4 text-zinc-500" strokeWidth={3} />
              </Button>
              <Button variant="ghost">
                <ListOrdered
                  className="h-4 w-4 text-zinc-500"
                  strokeWidth={3}
                />
              </Button>
            </div>
          </div>
          <TextArea
            id="bio"
            defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio minus sed dolor explicabo? A, velit quis ab dolore dolor iure sit rerum nobis vitae. Dignissimos natus tenetur libero autem laborum!"
          />
        </div>
      </div>
      {/* Portfolio projects */}
      <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
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

      <div className="flex items-center justify-end gap-2 pt-5">
        <Button variant="outline" type="button">
          Cancel
        </Button>
        <Button variant="primary" type="submit" form="settings">
          Save
        </Button>
      </div>
    </form>
  )
}
