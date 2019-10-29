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
      ],
      new:[],
      newItems:false,
      searched:false,
      searchResults: []
    }
  }

  addItem = (name) =>{
    const object ={
      task: name,
      id: Date.now(),
      completed:false
    } 
    if(this.state.new.length ===0){
      this.setState({
        new:[...this.state.items,object],
        newItems:true
        })
    }else{
      this.setState({
        new:[...this.state.new,object]
        })
    }
    
  }

  toggleComplete = (id) =>{
    
    if(this.state.newItems===false){

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
    }else{

      const list = this.state.new;
      this.setState({
        new: list.map(item =>{
          if(item.id === id){
            return{...item, completed: !item.completed};
          }else{
            return item;
          }
        })
      });
    }
  }

  toggleSearch = (id)=>{
    if(this.state.newItems===false){

      const list = this.state.searchResults;
      const items = this.state.items;
      this.setState({
        searchResults: list.map(item=>{
          if(item.id === id){
            return{...item, completed: !item.completed};
          }else{
            return item;
          }
        }),
        items:items.map(item=>{
          if(item.id === id){
            return{...item, completed: !item.completed};
          }else{
            return item;
          }
        })
      })
    }else{
      const list = this.state.searchResults;
      const newStuff = this.state.new;
      this.setState({
        searchResults: list.map(item=>{
          if(item.id === id){
            return{...item, completed: !item.completed};
          }else{
            return item;
          }
        }),
        new:newStuff.map(item=>{
          if(item.id === id){
            return{...item, completed: !item.completed};
          }else{
            return item;
          }
        })
      })

    }
   
  }

  clearComplete = (e)=>{
    e.preventDefault();

    if(this.state.newItems===false){

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

    }else{

      const list = this.state.new;
      this.setState({
        new: list.filter((i)=>{
          if(!i.completed){
            return i;
          }else{
            //If its true just don't return it lol
          }
        })
      })
    }
  
  }

  searchByName = (search)=>{

    if(this.state.newItems===false){
      console.log("pumping out search, looking at items")
      const list = this.state.items;
      search = search.toUpperCase();
      this.setState({
        searchResults:list.filter((item)=>{
          return item.task.toUpperCase().includes(search);
        }),
        searched:true
        
      })
    }else{
      console.log("pumping out search, looking at new")
      const list = this.state.new;
      search = search.toUpperCase();
      this.setState({
        searchResults:list.filter((item)=>{
          return item.task.toUpperCase().includes(search);
        }),
        searched:true
      })
    }
   
  }

  clearSearch =(e)=>{
    e.preventDefault();   
    this.setState({
      searched: false
    })
  }

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <Search search = {this.searchByName} clearSearch = {this.clearSearch}/>
        <TodoForm addItem ={this.addItem} clear = {this.clearComplete}/>
        <TodoList 
        Todo = {this.state.items} 
        New = {this.state.new} 
        newItems = {this.state.newItems}
        searched ={this.state.searched} 
        searchResults= {this.state.searchResults}
        toggleSearch = {this.toggleSearch}
        toggle = {this.toggleComplete}/>
      </div>
    );
  }
}

export default App;
