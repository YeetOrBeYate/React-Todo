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
                    <input 
                    type="text" 
                    name="item" 
                    value = {this.state.item} 
                    onChange = {this.handleChange}/>
                    <button type="submit">Submit</button>
                </form>
                <form onSubmit={this.props.clear}>
                    <button type="submit">Clear</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;