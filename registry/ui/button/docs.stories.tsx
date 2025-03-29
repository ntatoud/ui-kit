import type { Meta } from '@storybook/react'
import { Mail, MailIcon } from 'lucide-react'

import { Button } from '@/registry/ui/button'
import { SrOnly } from '@/components/ui/sr-only'

export default {
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export const Default = () => {
  return <Button>Default</Button>
}

export const Variants = () => {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="destructive-secondary">Destructive</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}

export const Sizes = () => {
  return (
    <div className="flex gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button>Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}

export const AsChild = () => {
  return (
    <Button asChild>
      <a href="#">Anchor as child</a>
    </Button>
  )
}

export const IconOnly = () => {
  return (
    <div className="flex gap-4">
      <Button size="icon-xs">
        <MailIcon />
        <SrOnly>Send mail</SrOnly>
      </Button>
      <Button size="icon-sm">
        <MailIcon />
        <SrOnly>Send mail</SrOnly>
      </Button>
      <Button size="icon">
        <MailIcon />
        <SrOnly>Send mail</SrOnly>
      </Button>
      <Button size="icon-lg">
        <MailIcon />
        <SrOnly>Send mail</SrOnly>
      </Button>
    </div>
  )
}

export const WithIcon = () => {
  return (
    <div className="flex gap-4">
      <Button>
        <Mail />
        Button
      </Button>
      <Button>
        Button
        <MailIcon aria-hidden />
      </Button>
    </div>
  )
}

export const Loading = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <Button loading>Button</Button>
        <Button size="icon" loading>
          <MailIcon />
        </Button>
        <Button loading>
          <MailIcon />
          Button
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="secondary" loading>
          Button
        </Button>
        <Button variant="secondary" size="icon" loading>
          <MailIcon />
        </Button>
        <Button variant="secondary" loading>
          <MailIcon />
          Button
        </Button>
      </div>
      <div className="flex gap-4">
        <Button variant="link" loading>
          Button
        </Button>
        <Button variant="link" size="icon" loading>
          <MailIcon />
        </Button>
        <Button variant="link" loading>
          <MailIcon />
          Button
        </Button>
      </div>
    </div>
  )
}
