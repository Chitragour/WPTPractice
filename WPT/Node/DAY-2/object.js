let obj = {
    Fname : "Abhi",
    Lname : "Devkar",
    Address: {
        city : "Baramati",
        code : "303030"
    },
    marks : [1,2,3,4,5]
}

console.log(obj);
console.log(obj.Address.city);
console.log(obj.marks[2]);

console.log(obj["Address"].code);
console.log(obj["marks"][7]);