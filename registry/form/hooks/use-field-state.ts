import { type AnyFieldApi, useStore } from '@tanstack/react-form'

export const useFieldState = (field: AnyFieldApi) =>
  useStore(field.store, (state) => ({
    isInvalid: state.meta.errors.length > 0,
    errors: state.meta.errors.map((error) => error?.message).join(', '),
  }))
