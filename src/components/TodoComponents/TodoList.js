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
                {this.props.Todo.map((todo)=>(
                    <div>
                        <Todo task={todo.task} id={todo.id} completed={todo.completed} toggle = {this.props.toggle}/>
                    </div>
                ))}
            </div>
        );
    }
}

export default TodoList;