// Q-6
// Stripping Names
// create some strings in TypeScript
let string1:string = "  Welcome to Edpresso      "
let string2:string = " This is the best educative platform   "
let string3:string = " You are welcome! "

// print strings and their lengths
console.log("STRINGS:")
console.log(string1, string1.length)
console.log(string2, string2.length)
console.log(string3, string3.length)
// remove white spaces from both sides of the strings
let result1 = string1.trim()
let result2 = string2.trim()
let result3 = string3.trim()
// print strings and their lengths, after Stripping the white space
console.log("STRINGS:")
console.log(result1, string1.length)
console.log(result2, string2.length)
console.log(result3, string3.length)
// In typescript use '\n' to add new line.
//\n add a new line before Trimmed Strings
console.log("\nTRIMMED STRINGS:")
console.log(result1, result1.length)
console.log(result2, result2.length)
console.log(result3, result3.length)
//The "\t" symbol means add a tab 
// print trimmed strings and their lengths
console.log("\tHello")
console.log("Hello")