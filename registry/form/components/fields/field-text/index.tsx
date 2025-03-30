import { ComponentProps } from 'react'
import { Input, InputProps } from '@/registry/ui/input'
import { AlertTriangle } from 'lucide-react'
import { FieldError, useFieldItemContext } from '@/registry/form/components'
import { useFieldContext, useFieldState } from '@/registry/form/hooks'
import { cn } from '@/lib/utils'

type FieldTextValue = string
type FieldTextProps = InputProps & {
  containerProps?: ComponentProps<'div'>
}

export function FieldText({ containerProps, ...props }: FieldTextProps) {
  const field = useFieldContext<FieldTextValue>()
  const ctx = useFieldItemContext()

  const { isInvalid } = useFieldState(field)
  return (
    <div
      {...containerProps}
      className={cn('flex flex-1 flex-col gap-1', containerProps?.className)}
    >
      <Input
        value={field.state.value}
        onChange={(e) => field.handleChange(e.target.value)}
        aria-describedby={
          isInvalid ? `${ctx.descriptionId} ${ctx.errorId}` : ctx.descriptionId
        }
        aria-invalid={isInvalid ? 'true' : undefined}
        aria-required={ctx.required}
        endElement={
          isInvalid && <AlertTriangle className="size-4 text-red-500" />
        }
        {...props}
      />
      <FieldError />
    </div>
  )
}
