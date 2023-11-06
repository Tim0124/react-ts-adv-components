import { forwardRef, type ComponentPropsWithoutRef } from "react"

type InputProps = {
  label: string
  id: string
} & ComponentPropsWithoutRef<'input'>

//使用ref，需要使用forwardRef
const Input = forwardRef<HTMLInputElement, InputProps>(function Input({label, id, ...props} , ref) {

  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={id} type="text" {...props} ref={ref}/>
    </p>
  )
})

export default Input