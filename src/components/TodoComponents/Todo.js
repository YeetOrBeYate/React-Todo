import React from 'react';
import {Item} from './Styled';
class Todo extends React.Component{
    constructor(){
        super();
    }

    render(){
        return(
            <div onClick={()=>this.props.toggle(this.props.id)}>
                <Item style ={ this.props.completed ? {textDecoration: "line-through"} : {textDecoration: "none"}}>{this.props.task}</Item>
                
            </div>
        );
    }
}

export default Todo;