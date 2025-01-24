import { createContext,useContext,useState } from "react";

const TodoContext=createContext()
export const useTodoContext=()=>useContext(TodoContext)
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
export const TodoProvider=({children})=>{
    const [allTodos,setAllTodos]=useState(initialTodos)
  const toggleTodo=(todoName)=>{
  setAllTodos(prev=>prev.map(todo=>todo.todoName===todoName?{...todo,isCompleted:!todo.isCompleted}:todo))
  }
    return (
      
        <TodoContext.Provider value={{allTodos,toggleTodo}}>
      {children}
      </TodoContext.Provider>
    
    )
  }
export default TodoContext;