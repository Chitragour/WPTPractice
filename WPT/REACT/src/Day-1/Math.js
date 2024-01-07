export default function Math(abc){
    let n1 = abc.num1;
    let n2 = abc.num2;
    let op = abc.op;

    let result;
    switch(op) {
        case "+": result = n1 + n2; break;
        case "-": result = n1 - n2; break;
        case "/": result = n1 / n2; break;
        case "*" : result = n1 * n2; break;
        default : result = NaN; break;
    }
    return(
        <p> {n1} {op} {n2} = {result} </p>
    )
}