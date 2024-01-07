import Ex1 from "./Ex1";
import Ex2 from "./external";
import Colorprop from "./Colorprop";
import SayHi from "./sayHi";
import Count from "./count";
import ShowMonthName from "./ShowMonthName";
import HalfString from "./HalfString";

export default function App2() {
    let pass = "hello - pass - props";

    return (
        <>
        {/* <Ex1></Ex1>
        <Ex2 greet= {pass} ></Ex2>
        <Ex2 greet1 = {"hellooo"}></Ex2>
        <Colorprop col= {"blue"}></Colorprop>
        <SayHi></SayHi>
        <Count></Count>
        <ShowMonthName></ShowMonthName> */}
        <HalfString></HalfString>
        </>
    )
}