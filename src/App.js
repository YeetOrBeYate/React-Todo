import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import Search from "./components/TodoComponents/Search";

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      items:[
        {
          task: 'Organize Garage',
          id: 1,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 2,
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

  toggleComplete = (id) =>{
    const list = this.state.items;

    this.setState({
      items: list.map(item =>{
        if(item.id === id){
          return{...item, completed: !item.completed};
        }else{
          return item;
        }
      })
    });
    console.log("toggle ran")
  }

  clearComplete = (e)=>{
    e.preventDefault();
    const list = this.state.items;

    this.setState({
      items: list.filter((i)=>{
        if(!i.completed){
          return i;
        }else{
          //If its true just don't return it lol
        }
      })
    })
  }

  searchByName = (search)=>{
    const list = this.state.items;
    search = search.toUpperCase();
    this.setState({
      items:list.filter((item)=>{
        if(item.task.toUpperCase().includes(search)){
          return item;
        }else{
          //do nothing lol
        }
      })
    })
  }

  clearSearch =(e)=>{
    e.preventDefault();   
    this.setState({
      items:[
        {
          task: 'Organize Garage',
          id: 1,
          completed: false
        },
        {
          task: 'Bake Cookies',
          id: 2,
          completed: false
        }
      ]
    })
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <Search search = {this.searchByName} clearSearch = {this.clearSearch}/>
        <TodoForm addItem ={this.addItem} clear = {this.clearComplete}/>
        <TodoList Todo = {this.state.items} toggle = {this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
