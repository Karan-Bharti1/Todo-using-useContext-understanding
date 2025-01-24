import { Children, StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Pending from './pages/Pending.jsx'
import Status from './pages/Status.jsx'
import  { TodoProvider } from './contexts/TodoContext.jsx'
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
const initialTodos=[{
  isCompleted:false,
  todoName:"Assignment 1"
},{
  isCompleted:false,
  todoName:"Assignment 2"
},{
  isCompleted:true,
  todoName:"Assignment 3"
}]

const AppRender=()=>{

  return (
    <StrictMode>
      <TodoProvider>
    <RouterProvider router={router}/>
    </TodoProvider>
  </StrictMode>
  )
}
createRoot(document.getElementById('root')).render(
<AppRender/>
)
