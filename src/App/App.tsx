import { Component } from 'react'
import { TodoList, Header } from "../components"
import { ITodo } from '../types'

// const App = () => {

//   return (
//     <div>
//       <Header title="Todo App"/>
//       <TodoList />
//     </div>
//   );
// }

// export default App;

interface IAppState {
  todos: ITodo[]
}

export default class App extends Component <{}, IAppState>{
  state = { //Квадратные скобки указывают что типы внутри массива. можно так же сдедать Array<ITodo>
    todos: [{ id: 1, text: 'Learn react', done: true, important: true },
    { id: 2, text: 'Blablabla', done: true, important: false },
    { id: 3, text: 'Third things', done: false, important: true }]
  }

  onChangeStateTodos = (id: number, doneOr: boolean) => {

    this.setState((state) => {
      const todoIdX = state.todos.findIndex(item => id === item.id)
      let newTodo
      if(doneOr){
        newTodo = {
          ...state.todos[todoIdX],
          done: !state.todos[todoIdX].done
        }
      }else{
        newTodo = {
          ...state.todos[todoIdX],
          important: !state.todos[todoIdX].important
        }
      }

      const before = state.todos.slice(0, todoIdX)
      const after = state.todos.slice(todoIdX + 1)
      return{
        todos: [...before, newTodo, ...after]
      }
    })
  }

  render() {

    return (
      < div >
        <Header title="Todo App" />
        <TodoList todos={this.state.todos} onDone={this.onChangeStateTodos} onImportant={this.onChangeStateTodos}/>
      </div >
    )
  }
}

