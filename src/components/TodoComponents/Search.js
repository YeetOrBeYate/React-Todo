import React from 'react';

class Search extends React.Component{
    constructor(){
        super();
        this.state = {
            search: ""
        }
    }

    handleChange = e =>{
        this.setState({
            search: e.target.value
        })
        console.log(this.state.search)
    }

    handleSubmit = e =>{
       e.preventDefault();
        console.log("search",this.state.search)
        this.props.search(this.state.search)
    }

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="search"></label>
                    <input 
                    type="text" 
                    name="search" 
                    value = {this.state.search} 
                    onChange = {this.handleChange}/>
                    <button type="submit" onClick ={this.handleSubmit}>Search</button>
                    <button type="submit" onClick = {this.props.clearSearch} >Clear Search</button>
                </form>
            </div>
        );
    }
}

export default Search;