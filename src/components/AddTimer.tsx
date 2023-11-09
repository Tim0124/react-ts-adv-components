import { useRef } from "react";
import Button from "./UI/Button";
import Form, { FormHandle } from "./UI/Form";
import Input from "./UI/Input";
import { useTimersContext } from "../store/timers-context";

//新增時間事件的函式
export default function AddTimer () {
  const form = useRef<FormHandle>(null)

  const { addTimer } = useTimersContext()

  //將表單內資料存進addTimer，並清空
  function handleSave(data:unknown)  {
    const extractedData = data as {name: string, duration: string}
    addTimer({name: extractedData.name, duration: +extractedData.duration})

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