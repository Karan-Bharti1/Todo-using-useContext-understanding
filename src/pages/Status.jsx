
import Nav from "../components/Nav";
import TodoContext, { useTodoContext } from "../contexts/TodoContext";

const Status=()=>{
    const {allTodos,toggleTodo}=useTodoContext()
    const displayTodos=allTodos.map(todo=>(<li key={todo.todoName} onClick={()=>toggleTodo(todo.todoName)} style={{textDecoration:todo.isCompleted?"line-through":"none",cursor:"pointer"}}>{todo.todoName}</li>))
return(
    <>
    <Nav/>
    <hr/>
    <main >
    <div className='container'>
          <h1>Update Status:</h1>
        {
          displayTodos
        }
        </div>
        </main></>
)
}
export default Status;