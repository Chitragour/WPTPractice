export function Total1({arr1}){
    
    let ans = 0;
    for(let i = 0; i<arr1.length;i++) {
        ans += arr1[i];
    }    
    return(
        <p>Total is: {ans}</p>
    )
}