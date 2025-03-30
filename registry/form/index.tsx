import { createFormHook } from '@tanstack/react-form'
import {
  FieldText,
  FieldError,
  FieldLabel,
  FieldDescription,
  SubscribeButton,
} from '@/registry/form/components'

import {
  fieldContext,
  formContext,
  useFieldContext,
  useFormContext,
} from '@/registry/form/hooks'

const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    // Misc
    Error: FieldError,
    Label: FieldLabel,
    Description: FieldDescription,

    // Fields
    Text: FieldText,
  },
  formComponents: {
    SubscribeButton,
  },
})

export { useAppForm as useForm, withForm, useFieldContext, useFormContext }
