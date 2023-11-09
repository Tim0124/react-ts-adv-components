import { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { useTimersContext, type Timer as TimerProps } from "../../store/timers-context.tsx";

//該函式傳入了執行名稱與時間，顯示出剩餘時間條，並根據isRunning判斷可以按暫停跟開始
export default function Timer ({name, duration}:TimerProps) {
  const [remainingTime, setRemainingTime ] = useState(duration * 1000)
  const interval = useRef<number | null>(null)
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2)
  const { isRunning } = useTimersContext()

  if( remainingTime <= 0 && interval.current) {
    clearInterval(interval.current)
  }

  useEffect(() => {
    let timer: number

    if(isRunning) {
      timer = setInterval(function() {
        setRemainingTime((prevTime) => {
          if( prevTime <= 0) {
            return prevTime
          }
          return prevTime - 50
        })
      },50)
      interval.current = timer
    }else if (interval.current) {
      clearInterval(interval.current)
    }
    return () => clearInterval(timer)

  },[isRunning])
  
  return (
    <Container as="article">
      <h2>{name}</h2>
      <p><progress max={duration * 1000} value={remainingTime} /></p>
      <p>{formattedRemainingTime}</p>
    </Container>
  )
}