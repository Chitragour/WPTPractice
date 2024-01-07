function add(...num) {                      
    // Here the ...num is an variable argument which behaves as an array internally,
    // also you cannot add more than 1 variable argument to the function
    // Just defining the simple variables is possible here but that has to be done before the declaration
    // of the variable argument.
    let sum = 0;
    for (let i = 0; i<num.length; i++) {
        sum = sum + num[i];
    }
    return sum;
}
console.log(add(1,2,3,43));
//  console.log(add("HEllo", " this behaved like these ", " 1 " , "1"))






//Function to add till n
// function add() {
//     let sum = 0;
//     for (let i = 0; i<=10; i++) {
//         console.log(i)
//         sum = sum + i;
//         console.log(sum, " At iteration ", i)
//     }
//     return sum;
// }
// console.log(add())