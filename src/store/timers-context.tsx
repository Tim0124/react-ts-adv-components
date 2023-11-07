import { type ReactNode, createContext, useContext, useReducer } from "react";

export type Timer = {
  name: string
  duration: number
}

type TimerState = {
  isRunning: boolean
  timers: Timer[] //timers引用Timer的型別，會一個陣列
}

const initialState: TimerState = {
  isRunning: true,
  timers: []
}

//ContextValue的型別是TimerState和一個物件，物件裡面有三個函式
type TimersContextValue = TimerState & {
  addTimer: (timerDate: Timer) => void
  startTimer: () => void
  stopTimer: () => void
}

const TimersContext = createContext<TimersContextValue | null>(null)

//建立一個Custom Hook
export function useTimersContext () {
  const timersCtx = useContext(TimersContext)

  if(timersCtx === null) {
    throw new Error('TimersContext is null - that should not be the case')
  }

  return timersCtx
}

type TimerContextProviderProps = {
  children: ReactNode
}

type StartTimersAction = {
  type:'START_TIMERS'
}

type StopTimersAction = {
  type:'STOP_TIMERS'
}

type AddTimersAction = {
  type:'ADD_TIMER',
  payload: Timer
}

type Action = StartTimersAction | StopTimersAction | AddTimersAction

//useReducer內要執行的函式
function timersReducer (state: TimerState, action: Action): TimerState {
  if(action.type === 'START_TIMERS') {
    return {
      ...state,
      isRunning: true,
    }
  }
  if(action.type === 'STOP_TIMERS') {
    return {
      ...state,
      isRunning: false,
    }
  }
    if(action.type === 'ADD_TIMER') {
    return {
      ...state,
      isRunning: true,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration
        }
      ]
    }
  }

  return state
} 

export default function TimersContextProvider({children}: TimerContextProviderProps) {

  //useReducer會回傳兩個值的陣列
  //timersState為第一次渲染的值
  //dispatch會將狀態更新為不同的值，並觸發重新渲染。(dispatch不會有回傳值)
  const [timersState, dispatch ] = useReducer(timersReducer, initialState)

  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({type: 'ADD_TIMER', payload: timerData})
    },
    startTimer() {
      dispatch({type: 'START_TIMERS'})
    }, 
    stopTimer() {
      dispatch({type: 'STOP_TIMERS'})
    },

  }
  

  return (
    <TimersContext.Provider value={ctx}>
      {children}
    </TimersContext.Provider>
  )
}