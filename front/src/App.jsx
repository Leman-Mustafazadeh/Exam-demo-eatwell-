import './App.css'
import { ROUTES } from './routes/ROUTER'
import  { RouterProvider, createBrowserRouter } from "react-router-dom"
function App() {
  const routesa = createBrowserRouter(ROUTES)
  return (
  <>
<RouterProvider router={routesa}></RouterProvider>
  </>
  )
}

export default App
