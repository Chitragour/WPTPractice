import { useState } from "react";

export default function ShowMonthName() {

    let[month,setmonth] = useState("Please Select");

    function handler(e) {
        let val = e.target.value;
        switch(val) {
            case "1" : setmonth("January"); break;
            case "2" : setmonth("Feb"); break;
            case "3" : setmonth("March"); break;
            case "4" : setmonth("April"); break;
            default: break;
        }
    }
    return(
        <pre>
            <select onChange={handler}>
                <option>Select from below: </option>
                <option>1</option>;
                <option>2</option>;
                <option>3</option>;
                <option>4</option>;
            </select>
            <p>{month}</p>
        </pre>
    )
}