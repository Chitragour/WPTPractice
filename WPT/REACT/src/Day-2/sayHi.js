import { useState } from "react";

export default function SayHi() {
    // let [ans,setans] = useState("hi")
    // function handler() {
    //     console.log("Clicked");
    //     setans("hi chitra") 
    //     console.log(ans); 
    // }

    // return(
    //     <>
    //     <input type="button" value="sayHi" onClick={handler}></input>
    //     <p>{ans}</p>
    //     </>
    // )

    let [msg,setmsg] =useState("before") //destructuring array syntax
    function handler()
    {
        //arr[1]("hi")  //CHANGING the state 
        setmsg("hi")
        //console.log("msg",arr[0])
        console.log("msg =",msg)
    }
    return(
        <>
        <input 
           type="button" 
           value="say hi"
           onClick={handler} 
        />
        {/* <p>Msg = {arr[0]}</p> */}
        <p>{msg}</p>
        </>
    )
}