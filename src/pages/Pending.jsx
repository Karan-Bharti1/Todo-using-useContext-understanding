import { useContext } from "react";
import Nav from "../components/Nav";
import TodoContext, { useTodoContext } from "../contexts/TodoContext";
import PendingCounter from "../components/PendingCounter";

const Pending =()=>{
    const {allTodos}=useTodoContext()
    const displayPendingTodo=allTodos.filter(todo=>!todo.isCompleted).map(todo=>(
        <li key={todo.todoName}>{todo.todoName}</li>
    ))
    return(
        <>
        <Nav/>
        <hr/>
        <main className="container">
            <h2>Pending(<PendingCounter/>)</h2>
            {displayPendingTodo}
            </main></>
    )
}
export default Pending;