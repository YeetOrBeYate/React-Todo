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

  addItem = (name) =>{
    const object ={
      task: name,
      id: Date.now(),
      completed:false
    } 
    this.setState({
    items:[...this.state.items,object]
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to my Todo App!</h2>
        <TodoForm addItem ={this.addItem}/>
        <TodoList Todo = {this.state.items}/>
      </div>
    );
  }
}

export default App;
