import React from "react";
export default class Stringformat extends React.Component {
    constructor(){
        super();
        this.state = {ans:"No string RN", rev:"", original:""}
    }

    handler=(e)=>{
        let val = e.target.value;
        this.setState({ans:val});
    }

    
    revhandler=(e)=> {
        let ischeck = e.target.checked;
        if (ischeck) {
            let val = e.target.value;
            console.log(val);
            let rev ="";
            for(let i=val.length-1 ; i>=0; i--) {
                rev += val.charAt(i);         
            }    
            this.setState({ans:rev});
            console.log(rev);
            console.log(val);
        }
    }


    shandler=(e)=>{
        let val = e.target.value;

    }

    render() {
        return(
            <pre>
                Input String: <input type = "text" onBlur={this.handler}></input>
                <hr></hr>
                Reverse: <input type = "checkbox" onClick={this.revhandler}></input>
                <hr></hr>
                UpperCase: <input type = "radio" name = "ok" onClick={this.shandler}></input>
                <hr></hr>
                LowerCase: <input type = "radio" name = "ok" onClick={this.shandler}></input>
                <hr></hr>
                TitleCase : <input type="radio" name = "ok" onClick={this.shandler}></input>
                <hr></hr>   
                <p>Output : {this.state.ans} </p>
            </pre>
        )
    }
}