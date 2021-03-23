import React, {Component} from "react";

class Form extends Component{
    constructor() {
        super();
        this.state = {
            fname: '',
            lname: ''
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){

        this.setState({
            fname: e.target.value,
            lname: e.target.value
        })
    }

    submitForm(e){
        console.log(this.state);
        e.preventDefault();
    }
    render() {
        return (
            <div>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input type="text" id="fname" name="fname" value={this.state.fname} onChange={this.handleChange}/><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input type="text" id="lname" name="lname" value={this.state.lname} onChange={this.handleChange}/>
                    {this.state.lname}
                    <br/>
                    <br/>
                    <input type="submit" defaultValue="Submit" onChange={this.submitForm}/>
                </form>
            </div>
    )
    }
} export default Form;