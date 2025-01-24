
import TodoContext, { useTodoContext } from "../contexts/TodoContext"

const PendingCounter=()=>{
    const {allTodos}=useTodoContext()
    return (
        <span>{allTodos.filter(todo=>!todo.isCompleted).length}/{allTodos.length}</span>
    )
}
export default PendingCounter;