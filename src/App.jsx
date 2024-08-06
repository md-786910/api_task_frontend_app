import PublicRoutes from "./route"
import "./overall.css"
import { TaskContextProvider } from "./components/context/taskContext"

function App() {
  return (
    <>
      <TaskContextProvider>
        <PublicRoutes />
      </TaskContextProvider>
    </>
  )
}

export default App
