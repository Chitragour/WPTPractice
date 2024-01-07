let obj = {
    Fname : "Abhi",
    Lname : "Devkar",
    Address: {
        city : "Baramati",
        code : "303030"
    },
    marks : [1,2,3,4,5]
}

let s = "Rishi";


// JSON STRINGFIY
console.log(obj);

let x = JSON.stringify(obj);
console.log(x);


//JSON PARSE 
let y = JSON.parse(x);
console.log(y);
console.log(y.Address.city);

console.log(s, " ", typeof(s));
//console.log(JSON.parse(s), " ", typeof(s));
