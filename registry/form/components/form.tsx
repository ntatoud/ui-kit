import { AnyFormApi } from '@tanstack/react-form'
import { ComponentProps } from 'react'

export type FormProps = ComponentProps<'form'> & {
  handleSubmit?: AnyFormApi['handleSubmit']
}

export function Form({ handleSubmit, ...props }: FormProps) {
  return (
    <form
      noValidate
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        handleSubmit?.()
      }}
      {...props}
    />
  )
}
