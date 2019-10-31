import React from "react";
import {SInput, SButton} from "./Styled";

class TodoForm extends React.Component{
    constructor(){
        super();
        this.state = {
            item: ""
        }
    }

    handleChange = e =>{
        this.setState({
            item: e.target.value
        })
        
    }

    handleSubmit = e =>{
        e.preventDefault();

        this.props.addItem(this.state.item)
        this.setState({
            item: ""
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="item"></label>
                    <SInput 
                    type="text" 
                    name="item" 
                    value = {this.state.item}
                    placeholder="add a task.." 
                    onChange = {this.handleChange}/>
                    <SButton type="submit" onClick = {this.handleSubmit}>Submit</SButton>
                    <SButton type="submit" onClick = {this.props.clear}>Clear Completed items</SButton>
                </form>
            </div>
        );
    }
}

export default TodoForm;