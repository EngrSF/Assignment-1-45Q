"use strict";
// Q-45. Assignment No.1 45 Questions.	
// Cars: Write a function that stores information about a car in a Object. 
// The function should always receive a manufacturer and a model name. It should then 
// accept an arbitrary number of keyword arguments. Call the function with the required 
// information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
//Object 
//{
//Outer Curley Bracket Solved the Block Scoped declaration error on CarObj
{
    let CarObj = {
        Make: " ",
        Model: " ",
        Color: " ",
        Fuel: " ",
    };
    function myCar(make, model, color, fuel) {
        console.log(make);
        CarObj.Make = make;
        CarObj.Model = model;
        CarObj.Color = color;
        CarObj.Fuel = fuel;
    }
    ;
    myCar("Toyota", "COROLA", "Black", "Solar");
    console.table(CarObj);
}
