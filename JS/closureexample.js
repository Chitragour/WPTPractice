function makeAdder(x)
{
    return function(y)
             {return x + y;};
}
//const add =makeAdder(5);
const add10 =makeAdder(10);
const add12 = makeAdder(12);

//console.log(add(2));
//console.log(add10(2));
console.log(add12(1),add10(10))