import React from 'react';
import './App.css'
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";
import Search from "./components/TodoComponents/Search";
import Options from "./components/TodoComponents/Options";

class App extends React.Component {
  
  constructor(){
    super();
    this.state = {
      items:[
        {
          task: 'Buy Candy',
          id: 1,
          completed: false
        },
        {
          task: 'Carve Pumpkins',
          id: 2,
          completed: false
        }
      ],
      new:[],
      newItems:false,
      searched:false,
      searchResults: [],
      buttons:[
        {
          label:'Add/Clear Items',
          id:24,
          selected:true,
          to:"/",
          name:"yeeter"
        
        },
        {
          label:'Search',
          id:25,
          selected:false,
          to:"/search",
          name:"yater"
        
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

  toggleTab=(id)=>{
    const tabs = this.state.buttons;
    
    this.setState({
      buttons:  tabs.map((tab)=>{
        if(tab.id === id){ 
          return {...tab, selected: !tab.selected}
          
        }else{
          return {...tab, selected:!tab.selected}
        }
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h2> Halloween Todo List</h2>
        <Options 
        search={this.searchByName}
        clearSearch={this.clearSearch}
        addItem={this.addItem}
        clear={this.clearComplete}
        Todo = {this.state.items} 
        New = {this.state.new} 
        newItems = {this.state.newItems}
        searched ={this.state.searched} 
        searchResults= {this.state.searchResults}
        toggleSearch = {this.toggleSearch}
        toggle = {this.toggleComplete}
        buttons={this.state.buttons}
        toggleTab={this.toggleTab}/>
        {/* <Search search = {this.searchByName} clearSearch = {this.clearSearch}/> */}
        {/* <TodoList 
        Todo = {this.state.items} 
        New = {this.state.new} 
        newItems = {this.state.newItems}
        searched ={this.state.searched} 
        searchResults= {this.state.searchResults}
        toggleSearch = {this.toggleSearch}
        toggle = {this.toggleComplete}/> */}
        
        {/* <TodoForm addItem ={this.addItem} clear = {this.clearComplete}/> */}
      </div>
    );
  }
}

export default App;
