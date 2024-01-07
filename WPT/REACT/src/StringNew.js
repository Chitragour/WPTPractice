import React from "react";
export default class StringNew extends React.Component{

    constructor(){
        super();
        this.state = {passedstring:" default string ", modifiedstring: ""}
    }

    handler= (e) => {
        let passedstring = e.target.value;
        console.log(passedstring);
        this.setState{modifiedstring:e.target.value}
    }


    render(){
        return(
           <div>
                Enter String : <input type = "text" onBlur={this.handler}></input>
                <p>String is : {this.state.modifiedstring} </p>
           </div>
        )

    }
}