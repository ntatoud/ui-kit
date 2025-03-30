import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

import { useFieldItemContext } from '@/registry/form/components/_partials/field-item'

export type FieldLabelProps = ComponentProps<'label'>

export const FieldLabel = ({
  className,
  children,
  ...props
}: FieldLabelProps) => {
  const ctx = useFieldItemContext()
  return (
    <label
      htmlFor={ctx.id}
      className={cn(
        'flex gap-1.5 align-baseline font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        className
      )}
      {...props}
    >
      {children}
      {ctx.required && (
        <span className="text-red-500" aria-hidden>
          *
        </span>
      )}
    </label>
  )
}
