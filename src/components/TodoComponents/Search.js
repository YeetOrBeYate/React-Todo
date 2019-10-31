import React from 'react';
import {SInput, SButton} from "./Styled";

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
        this.setState({
            search:""
        })
    }

    render(){
        return(
            <div>
                <form>
                    <label htmlFor="search"></label>
                    <SInput 
                    type="text" 
                    name="search" 
                    value = {this.state.search}
                    placeholder="search your list.." 
                    onChange = {this.handleChange}/>
                    <SButton  type="submit" onClick ={this.handleSubmit}>Search</SButton>
                    <SButton  type="submit" onClick = {this.props.clearSearch} >Clear Search</SButton>
                </form>
            </div>
        );
    }
}

export default Search;