import { cn } from '@/lib/utils'
import { useFieldItemContext } from '@/registry/form/components/_partials/field-item'
import { ComponentProps } from 'react'

export type FieldDescriptionProps = ComponentProps<'div'>

export function FieldDescription({
  className,
  ...props
}: FieldDescriptionProps) {
  const ctx = useFieldItemContext()

  return (
    <div
      id={ctx.descriptionId}
      className={cn('text-sm text-muted-foreground', className)}
      {...props}
    />
  )
}
