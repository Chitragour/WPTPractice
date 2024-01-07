/* REGULAR EXPRESSION 
 It returns the ans in the form of the array
 The matching condition index value is displayed when matched
 RE is an language used for pattern matching 

 + --> is used for 1 or more occurences
 * --> 0 or more occurences 
 {num} --> exactly 'num' number of occurences
 {n1, n2} --> min n1 number of occurences and n2 number of occurences
 $ --> the end defined with this symbol will be --compulsory
 abc --> exactly the same string abc will be matched
 ^ --> the start must be done with the thing attached with '^' compulsory
 ? --> 0 or 1 occurence
 . --> any single character 
 [A-Za-z] --> betwn A-Z and a-z
 [0-9] --> betwn 0-9
*/

//let exp = /abc/
//let s = "pqnnredabc"

//let regexp = /abc/i
//let s = "sscscABC"

//let regexp = /[a-zA-Z]/
//let s = "NNMavdvMM"

let regexp = /^[a-z]*/
let s = "MfwrefNmkmkNdfds"
console.log(s.match(regexp));
