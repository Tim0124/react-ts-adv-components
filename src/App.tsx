
import AddTimer from "./components/AddTimer"
import Timers from "./components/Timers"
import Header from "./components/UI/Header"


function App() {
  

  return (
    <>
    <Header/>
      <main> 
        <AddTimer />
        <Timers />
      </main> 
    </>
  )
}

export default App
