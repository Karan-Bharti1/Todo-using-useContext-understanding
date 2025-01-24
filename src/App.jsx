
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Nav from './components/Nav'
import TodoContext, { useTodoContext } from './contexts/TodoContext'

function App() {
  
const {allTodos}=useTodoContext()
const displayTodos=allTodos.map(todo=>(<li key={todo.todoName}>
  <span>{todo.todoName}</span>
</li>))
  return (
    <>
  <Nav/>
  <hr/>
  <main className='container'>
<h2>All Todos:</h2>
{displayTodos}
  </main>
    </>
  )
}

export default App
