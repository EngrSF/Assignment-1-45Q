// QUESTION-16 Assignment-1 (45 Question)
const GuesNames = ["SHAHID","JUNAID","MUJEEB","MASOOD"];
console.log(GuesNames);
console.log("I have now bigger Table for more Guests");
//insert additional guest name in the beginning of Array
GuesNames.unshift("AZHAR");
console.log(GuesNames);
//Array.splice() Method; inser at any position
//4 means; starting from 0; 4th i.e 5th name is MASOOD; the 0 means 1 item being inserted
GuesNames.splice(4,0,"ASAD")
console.log(GuesNames);
//insert additional guest name in the end of Array
GuesNames.push("ZAHID");
console.table(GuesNames);
