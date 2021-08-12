import './App.css'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
const App = () => {
  return (
    <div className="container p-4 mt-5">
      <h1>ToDo List</h1>
      <AddTodo />
      <TodoList />
    </div>
  )
}

export default App
