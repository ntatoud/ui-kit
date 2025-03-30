import { ComponentProps } from 'react'
import { useFieldState } from '@/registry/form/hooks/use-field-state'
import { useFieldItemContext } from './field-item'
import { cn } from '@/lib/utils'
import { useFieldContext } from '@/registry/form/hooks/form-context'

export type FieldErrorProps = ComponentProps<'em'>

export function FieldError({ className, ...props }: FieldErrorProps) {
  const field = useFieldContext()
  const ctx = useFieldItemContext()
  const { errors } = useFieldState(field)

  if (!errors) return

  return (
    <em
      id={ctx.errorId}
      className={cn('text-sm text-red-500', className)}
      role="alert"
      {...props}
    >
      {errors}
    </em>
  )
}
