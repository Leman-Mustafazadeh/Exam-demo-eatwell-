import './App.css'
import DemoContext, { ContextDemo } from './context/DemoContext'
import { ROUTES } from './routes/ROUTER'
import  { RouterProvider, createBrowserRouter } from "react-router-dom"
function App() {
  const routesa = createBrowserRouter(ROUTES)
  return (
  <>
  <DemoContext>
<RouterProvider router={routesa}/>
  </DemoContext>
  </>
  )
}

export default App
