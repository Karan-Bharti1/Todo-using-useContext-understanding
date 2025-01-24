import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Pending from './pages/Pending.jsx'
import Status from './pages/Status.jsx'
const router=createBrowserRouter([{
  path:"/",
  element:<App/>
},{
  path:"/pending",
  element:<Pending/>
},{
  path:"/status",
  element:<Status/>
}])
const AppRender=()=>{
  return (
    <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
  )
}
createRoot(document.getElementById('root')).render(
<AppRender/>
)
