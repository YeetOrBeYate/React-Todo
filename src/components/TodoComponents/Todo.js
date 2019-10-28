import React from 'react';

class Todo extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1>{this.props.task}</h1>
                <p>{this.props.completed}</p>
            </div>
        );
    }
}

export default Todo;