import { useRef } from "react";
import Button from "./UI/Button";
import Form, { FormHandle } from "./UI/Form";
import Input from "./UI/Input";

export default function AddTimer () {
  const form = useRef<FormHandle>(null)

  function handleSave(data:unknown)  {
    const extractedData = data as {name: string, age: string}
    console.log(extractedData)
    form.current?.clear()
  }

  return (
    <Form ref={form} onSave={handleSave}>
      <Input type="text" label="Name" id="name"/>
      <Input type="number" label="Duration" id="duration"/>
      <p>
        <Button>Add Timer</Button>
      </p>
    </Form>
  )
}