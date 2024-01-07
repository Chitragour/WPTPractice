export default function Total(props) {
    let arr = props.arr;
    let ans=0;

    for (let i= 0; i<arr.length; i++) {
        ans = ans + arr[i]
    }

    return(
        <div>
            Total is : {ans}
        </div>
    )
}