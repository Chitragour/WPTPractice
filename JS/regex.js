// let pattern=/^[0-9]{3}\-+[0-9]{3}\-+[0-9]{8}$/
// let s="123-123-12345678"
// let rv=pattern.test(s)
// console.log(rv)

// let pattern=/^[A-Za-z]+[A-Za-z0-9_]+[@]+[a-z]+\.com/
// let s="awer21_13@gmail.com"
// let rv=s.match(pattern)
// console.log(rv)

// let pat = /^[0-3]+[0-9]/                    /^\d{2}[./-]\d{2}[./-]\d{4}$/  /^[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{4}$/
// let s = "32"
// let rv=s.match(pat)
// console.log(rv)

// let pattern=/^[A-Z]+[A-Za-z]+[" "]+[A-Z]+[A-Za-z]*/
// let s="Raj lohar"
// let rv=s.match(pattern)
// console.log(rv)

let pattern=/[0-9]+/
let s="12"
let rv=s.match(pattern)
console.log(rv)