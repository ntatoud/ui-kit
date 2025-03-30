import { Button, ButtonProps } from '@/registry/ui/button'
import { useFormContext } from '@/registry/form/hooks/form-context'

export function SubscribeButton(props: ButtonProps) {
  const form = useFormContext()
  return (
    <form.Subscribe
      selector={(state) => state.isSubmitted && !state.isFieldsValid}
    >
      {(isDisabled) => <Button disabled={isDisabled} {...props} />}
    </form.Subscribe>
  )
}
