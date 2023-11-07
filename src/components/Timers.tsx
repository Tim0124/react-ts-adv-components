import { useTimersContext } from "../store/timers-context"
import Timer from "./UI/Timer"

export default function Timers () {
  const { timers } = useTimersContext()

  return (
    <ul>
      {
        timers.map(timer => (
          <li>
            <Timer {...timer}/>
          </li>
        ))
      }
    </ul>
  )
}