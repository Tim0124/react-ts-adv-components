import { type ReactNode, createContext } from "react";

type Timer = {
  name: string
  duration: number
}

type TimerState = {
  isRunning: boolean
  timers: Timer[]
}

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