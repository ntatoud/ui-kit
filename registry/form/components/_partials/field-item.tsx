import { cn } from '@/lib/utils'
import { Slot } from '@radix-ui/react-slot'
import { ComponentProps, createContext, useContext, useId } from 'react'

type FieldItemContextValues = {
  id: string
  descriptionId: string
  errorId: string
  required?: boolean
}

const FieldItemContext = createContext<FieldItemContextValues | null>(null)

export const useFieldItemContext = () => {
  const context = useContext(FieldItemContext)

  if (!context) {
    throw new Error('FieldItem must be used within a FieldItemContext')
  }

  return context
}
export type FieldItemProps = ComponentProps<'div'> & {
  required?: boolean
  asChild?: boolean
}

export function FieldItem(props: FieldItemProps) {
  const { asChild, className, ...rest } = props

  const Component = asChild ? Slot : 'div'
  const _id = useId()

  const id = props.id ?? _id
  const context = {
    required: props.required,
    id,
    descriptionId: `${id}-description`,
    errorId: `${id}-error`,
  }

  return (
    <FieldItemContext.Provider value={context}>
      <Component className={cn('flex flex-col gap-1.5', className)} {...rest} />
    </FieldItemContext.Provider>
  )
}
