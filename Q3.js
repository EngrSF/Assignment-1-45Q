// Q.3 Assignment No.1 of 45 Questions
// Name Cases: Store a person’s name in a variable, and then
// print that person’s name in lowercase, uppercase,
// and titlecase
var pname = "Eessa";
console.log(pname.toUpperCase());
console.log(pname.toLowerCase());
// titleCase
var words = pname.split(" ");
var titlecase = "";
for (var i = 0; i < words.length; i++) {
    titlecase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(titlecase);
