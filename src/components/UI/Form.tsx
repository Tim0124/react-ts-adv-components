import { ComponentPropsWithoutRef, FormEvent, forwardRef, useImperativeHandle, useRef } from "react"

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void
}

export type FormHandle = {
  clear: () => void
}

const Form = forwardRef<FormHandle, FormProps>(function Form ({onSave, children, ...otherProps}, ref) {
  const form = useRef<HTMLFormElement>(null)

  //useImperativeHandle是一個可以公開調用函式的Hook
  //第一個參數ref，
  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('CLEARING')
        form.current?.reset()
      }
    }
  })

  function handleSubmit (event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)
    onSave(data)
  }

  return (
    <form {...otherProps} onSubmit={handleSubmit} ref={form}>
      {children}
    </form>
  ) 
})

export default Form