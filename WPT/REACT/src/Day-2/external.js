import React from "react"
export default class Ex2 extends React.Component {
    
    render() {
        //let g = this.props.greet;
        return(
            <pre>
            <p className="try2">{this.props.greet}</p>
            {/* <p>{g}</p> */}
            </pre>
        )    
    }
}