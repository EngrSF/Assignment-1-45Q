"use strict";
//Q-43. Assigment Ni. 1 of 45 Questions.
//Unchanged Magicians: Start with your work from Exercise 42
//const Great_Magicians:string[]= ["Michal","Peter","Bhushan","Jill"]
const GMagCopy = ["Michal", "Peter", "Bhushan", "Jill"];
const Narray = [];
function make_great(GMagCopy) {
    for (var i = 0; i < GMagCopy.length; i++)
        (Narray[i] = "Great " + GMagCopy[i]);
} //disp Function Call executes this statement
function Sh_Magcn() {
    console.table(GMagCopy);
    console.table(Narray);
}
//Narray[j]=("Great"+GMagCopy[j])
make_great(GMagCopy);
Sh_Magcn();
