import React from 'react';

class Todo extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div onClick={()=>this.props.toggle(this.props.id)}>
                <h1 style ={ this.props.completed ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{this.props.task}</h1>
            </div>
        );
    }
}

export default Todo;