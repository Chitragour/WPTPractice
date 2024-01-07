import React from "react";

export default class HalfString extends React.Component{
    
    constructor(){
        super()
        this.state = {halfans:"not computed"};
        this.handler= this.handler.bind(this);
    }

    handler(e){
        this.setState({halfans : e.target.value.substring(0,e.target.value.length/2).toUpperCase()});
    }
 
    render() {
        return(
            <div>
                Enter String: <input type = "text" onBlur={this.handler}></input>
                <p>{this.state.halfans}</p>
            </div>
        )
    }
}