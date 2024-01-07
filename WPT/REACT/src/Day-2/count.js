import React from "react";

export default function Count() {
        let [count,setcount] = ("")
        const setCount = () => {
        setCount++;
        console.log(count);
    }
  return (
    <div>
      <label>{count}</label>
      <hr/>
      <label>Counter</label>
      <button onClick = {setCount}>{count}</button>
    </div>
  );
}