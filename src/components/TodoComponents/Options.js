import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Search from "./Search";

const Options = (props)=>{

    const yeeter= document.body.querySelector("#yeeter");
    const yater= document.body.querySelector("#yater");

    const toggleSelected =() =>{

    }

    //Add and Clear props
    const addItem = props.addItem;
    const clear = props.clear;
    //Search props
    const search = props.search;
    const clearSearch = props.clearSearch;
    //TodoList props
    const Todo = props.Todo;
    const New = props.New;
    const newItems = props.newItems;
    const searched = props.searched;
    const searchResults = props.searchResults;
    const toggleSearch = props.toggleSearch;
    const toggle = props.toggle;
    return(
        <div className="Options">
            <Link to="/">
                <button id="yeeter" className="yeet selected">Add/Clear Items</button></Link>
            <Link to="/search">
                <button id="yater" className="yeet">Search</button></Link>
            <div className="routes">
                <Route exact path ="/" 
                render={()=> <TodoForm addItem={addItem} clear ={clear}/>} />
                <Route path = "/search" 
                render={()=> <Search search={search} clearSearch={clearSearch}/>}/>
            </div>
            <TodoList 
            Todo = {Todo} 
            New = {New} 
            newItems = {newItems}
            searched ={searched} 
            searchResults= {searchResults}
            toggleSearch = {toggleSearch}
            toggle = {toggle}/>
        </div>
    );

}


export default Options;