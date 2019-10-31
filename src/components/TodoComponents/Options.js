import React, {useEffect} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Search from "./Search";

const Options = (props)=>{

    //buttons props
    const buttons = props.buttons;

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
            {buttons.map((b)=>(
                <Link to={b.to}>
                    <button id={b.name} onClick={()=>props.toggleTab(b.id)} style={b.selected ? {background:"#616161", color: "ivory"}:{background:"#f1f1f1"}} className="yeet">{b.label}</button>
                </Link>
            ))}
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