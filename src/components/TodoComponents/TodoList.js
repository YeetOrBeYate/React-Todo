// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from "./Todo";


class TodoList extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                {
                    !this.props.searched ?

                    <div>
                    {
                        this.props.newItems === false ?

                        this.props.Todo.map((todo)=>(
                            <div>
                                <Todo task={todo.task} id={todo.id} completed={todo.completed} toggle = {this.props.toggle}/>
                            </div>
                        ))

                        :
                        
                        this.props.New.map((todo)=>(
                            <div>
                                <Todo task={todo.task} id={todo.id} completed={todo.completed} toggle = {this.props.toggle}/>
                            </div>
                        ))
                    }
                    </div>

                :

                    <div>
                        {this.props.searchResults.map((todo)=>(
                            <div>
                                <Todo task={todo.task} id={todo.id} completed={todo.completed} toggle = {this.props.toggleSearch}/>
                                {console.log("search is tru", this.props.searched)}
                            </div>
                        ))}
                    </div>

                }
                
            </div>
        );
    }
}

export default TodoList;