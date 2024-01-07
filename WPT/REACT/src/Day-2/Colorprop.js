import React from "react";

export default class colorprop extends React.Component {
    render() {
        return(
            <>
            {/* <p style={{backgroundColor:"green"}}> Hello</p> */}
            <p style={{color:this.props.col}}>Color Prop</p>
            </>
            
        )
    }
}