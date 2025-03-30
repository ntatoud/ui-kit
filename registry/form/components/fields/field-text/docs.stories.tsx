import { z } from 'zod'
import type { Meta } from '@storybook/react'

import { formOptions } from '@tanstack/react-form'
import { MailIcon } from 'lucide-react'
import {
  FieldItem,
  FieldText,
  Form,
  SubscribeButton,
} from '@/registry/form/components'
import { useForm } from '@/registry/form'

const meta = {
  title: 'Form/FieldText',
  component: FieldText,
} satisfies Meta<typeof FieldText>

export default meta

const zFormSchema = z.object({
  name: z.string().nonempty({ message: 'Name is required' }),
})
type FormSchema = z.infer<typeof zFormSchema>

const formOpts = formOptions({
  defaultValues: {
    name: '',
  } as FormSchema,
  validators: {
    onSubmit: zFormSchema,
  },
  onSubmit: async ({ value }) => {
    console.log(value)
  },
})

export const Default = () => {
  const form = useForm(formOpts)

  return (
    <Form className="w-[350px] space-y-4" handleSubmit={form.handleSubmit}>
      <form.AppField name="name">
        {(field) => (
          <FieldItem>
            <field.Label>Name</field.Label>
            <field.Text type="text" placeholder="Mathieu Herbaut" />
            <field.Description>Help</field.Description>
          </FieldItem>
        )}
      </form.AppField>

      <form.AppForm>
        <SubscribeButton type="submit">Submit</SubscribeButton>
      </form.AppForm>
    </Form>
  )
}

export function DefaultValues() {
  const form = useForm({
    ...formOpts,
    defaultValues: {
      name: 'Default value',
    } as FormSchema,
  })

  return (
    <Form className="w-[350px] space-y-4" handleSubmit={form.handleSubmit}>
      <form.AppField name="name">
        {(field) => (
          <FieldItem>
            <field.Label>Name</field.Label>
            <field.Text type="text" placeholder="Mathieu Herbaut" />
            <field.Description>Help</field.Description>
          </FieldItem>
        )}
      </form.AppField>

      <form.AppForm>
        <SubscribeButton type="submit">Submit</SubscribeButton>
      </form.AppForm>
    </Form>
  )
}

export function Disabled() {
  const form = useForm(formOpts)

  return (
    <Form className="w-[350px] space-y-4" handleSubmit={form.handleSubmit}>
      <form.AppField name="name">
        {(field) => (
          <FieldItem>
            <field.Label>Name</field.Label>
            <field.Text type="text" placeholder="Mathieu Herbaut" disabled />
            <field.Description>Help</field.Description>
          </FieldItem>
        )}
      </form.AppField>

      <form.AppForm>
        <SubscribeButton type="submit">Submit</SubscribeButton>
      </form.AppForm>
    </Form>
  )
}

export function StartElement() {
  const form = useForm(formOpts)

  return (
    <Form className="w-[350px] space-y-4" handleSubmit={form.handleSubmit}>
      <form.AppField name="name">
        {(field) => (
          <FieldItem>
            <field.Label>Name</field.Label>
            <field.Text
              type="text"
              placeholder="Mathieu Herbaut"
              startElement={<MailIcon className="size-4" />}
            />
            <field.Description>Help</field.Description>
          </FieldItem>
        )}
      </form.AppField>

      <form.AppForm>
        <SubscribeButton type="submit">Submit</SubscribeButton>
      </form.AppForm>
    </Form>
  )
}
