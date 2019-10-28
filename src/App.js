import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      items:[
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <TodoForm/>
        <TodoList Todo = {this.state.items}/>
      </div>
    );
  }
}

export default App;
