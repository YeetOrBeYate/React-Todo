import React from "react";

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
        console.log("value",this.state)
    }

    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state.item);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="item"></label>
                    <input 
                    type="text" 
                    name="item" 
                    value = {this.state.item} 
                    onChange = {this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;