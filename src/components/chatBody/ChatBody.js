import React, {Component} from 'react';
import "./chatBody.css";

export default class ChatBody extends Component {

    ChangeTheme(){

    };
    render(){
        return (
            <div>
                <button className="btn btn-primary" onClick={this.ChangeTheme}>click</button>
            </div>
        )
    }
}