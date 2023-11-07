import { type ReactNode, createContext } from "react";

type Timer = {
  name: string
  duration: number
}

type TimerState = {
  isRunning: boolean
  timers: Timer[] //timers引用Timer的型別，會一個陣列
}

//ContextValue的型別是TimerState和一個物件，物件裡面有三個函式
type TimersContextValue = TimerState & {
  addTimer: (timerDate: Timer) => void
  startTimer: () => void
  stopTimer: () => void
}

const TimersContext = createContext<TimersContextValue | null>(null)

type TimerContextProviderProps = {
  children: ReactNode
}

export default function TimersContextProvider({children}: TimerContextProviderProps) {
  const ctx: TimersContextValue = {
    timers: [],
    isRunning: false,
    addTimer(timerData) {
      //...
    },
    startTimer() {
      //...
    },
    stopTimer() {
      //...
    },

  }
  

  return (
    <TimersContext.Provider value={ctx}>
      {children}
    </TimersContext.Provider>
  )
}