// Q.3 Assignment No.1 of 45 Questions
// Name Cases: Store a person’s name in a variable, and then
// print that person’s name in lowercase, uppercase,
// and titlecase

let pname:string="Eessa";
console.log(pname.toUpperCase());
console.log(pname.toLowerCase());
// titleCase
let words:string[]=pname.split(" ");
let titlecase:string=""

for (let i=0;i<words.length; i++) {
titlecase += words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+" "
}
console.log(titlecase);