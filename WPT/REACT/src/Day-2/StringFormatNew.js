import React, { useState } from "react";
export default class StringFormatNew extends React.Component {
    
    constructor(){
        super();
        this.state = {string:"default", revstring:"", modifiedstring:""}
    }

    radioHandler=(ev)=>{
        let choice = ev.target.id;
        let str;
        switch(choice) {
            case "uc": 
            str = this.state.modifiedstring;
            let ustr = str.toUpperCase();
            this.setState({modifiedstring:ustr});
                break;

            case "lc":
            str = this.state.modifiedstring;
            let lstr = str.toLowerCase();
            this.setState({modifiedstring:lstr});
                break;

            case "tc":
            str = this.state.modifiedstring;
            let tstr = str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
            this.setState({modifiedstring:tstr});
                break;

        }
    }

    revhandler=(event)=>{
        let isChecked = event.target.checked
        if(isChecked){
            let str = this.state.string
            let rev = ""
            for(let i = str.length; i>=0; i--) {
                rev += str.charAt(i);
            }
            console.log(rev)
            this.setState({modifiedstring:rev})
        }else {
            this.setState({modifiedstring:this.state.string})
        }
    }

    render() {
        return(
            <>
            Input String: <input type = "text" onBlur={(e)=>{
                console.log(e.target.value);
                this.setState({modifiedstring:e.target.value,string:e.target.value});
            }}></input>
            <hr></hr>
            Reverse String : <input type="checkbox" onClick={this.revhandler}></input>
            <hr></hr>
            Upper Case : <input type="radio" id="uc" name="format"  onClick={this.radioHandler}></input>
            <br></br>
            Lower Case : <input type="radio" id="lc" name="format" onClick={this.radioHandler}></input>
            <br></br>
            Title Case : <input type="radio" id="tc" name="format" onClick={this.radioHandler}></input>
            <br></br>
            <p>
                Output String : {this.state.modifiedstring}
            </p>
            </>
        )
    }
}