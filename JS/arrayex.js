let arr=[13,14,15,16,17,20]

arr.push(21,22,25)
console.log(arr)

arr.pop()
console.log(arr) //13,14,15,16,17,20,21,22

arr.splice(1,3)
console.log(arr) //13,17,20,21,22

arr.splice(2,0,50,60)
console.log(arr) //13,17,50,60,20,21,22

arr.splice(2,1,70,80) //from this upto how many 
console.log(arr)  //13,50,70, 80, 60,20,21,22


                