//Q-24   Assignment No.1 45 Questions.	
// 24.	More Conditional Tests: You don’t have to limit the number of tests 
// you create to 10. If you want to try more comparisons, write more tests. 
// Have at least one True and one False result for each of the following:
// •	Tests for equality and inequality with strings
// •	Tests using the lower case function
// •	Numerical tests involving equality and inequality, greater than and less than,
//      greater than or equal to, and less than or equal to
// •	Tests using "and" and "or" operators
// •	Test whether an item is in a array
// •	Test whether an item is not in a array 
// Tests for equality and inequality with strings
var str1 = "Ferrari";
var str2 = "FERRARI";
if (str1 == str2) {
    console.log("Both string must be captal or smar for being true");
}
else
    (console.log("not equla"));
// Tests using the lower case function
var str3 = ("Ferrari").toLowerCase();
var str4 = ("FERRARI").toLowerCase();
if (str3 == str4) {
    console.log("Lower Case Test :TRUE: Both string must be captal or smar for being true");
}
else
    (console.log("False: not equla"));
//Numerical tests involving equality and inequality, greater than and less than,
//greater than or equal to, and less than or equal to
// Tests using "and" and "or" operators
//Test for < or > or =
var x = 10;
var y = 6;
console.log('Value of x=', x, 'Value of y= ', y);
console.log('Is x is equal to y ', x == y);
console.log('Is x is not equal to y ', x !== y);
console.log('Is x is less than y ', x < y);
console.log('Is x is greater than y ', x > y);
console.log('Is x is less than or equal to y ', x <= y);
console.log('Is x is greater than or equal to y ', x >= y);
// USING and & or operaor
var x1 = 10;
var y1 = 15;
var z1 = 20;
console.log('x1= ', x1, 'y1= ', y1, 'z1= ', z1);
console.log('True ', x1 < y1 && y1 < z1);
console.log('True ', x1 < y1 || y1 < z1);
console.log('False ', x1 > y1 && y1 < z1);
console.log('False ', x1 > y1 && y1 > z1);
console.log('False ', x1 > y1 || y1 > z1);
// Test an ITEM in an ARRAY
var cars = ['Honda', 'Mecedeze', 'Toyota', 'Suzuki'];
console.log(cars.includes('Honda'));
console.log(cars.includes('Homda'));
console.log(!cars.includes('BMW'));
