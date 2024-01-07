import Welcome from "./Welcome";
import { Greeting } from "./Welcome";
import Math from "./Math";
import Total from "./Total";
import {Total1} from "./Total1";
import Icard from "./Icard";

export default function App() {
    
    return(
        <>
        <Welcome></Welcome>
        <Greeting></Greeting>
        <Math num1={8} num2={13} op={"+"}></Math>
        <Math num1={8} num2={13} op={"-"}></Math>
        <Math num1={8} num2={13} op={"/"}></Math>
        <Math num1={8} num2={13} op={"*"}></Math>
        <Total arr={[1,2,23,4,5]}></Total>
        <Total1 arr1 = {[1,2,23,4,5]}></Total1>
        <Icard obj = { {
            name : "kelvin", city : "US", address: "california"
        }}></Icard>
        </>
        
    )
}