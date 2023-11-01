"use strict";
//Q-38. Assignment No.1 of 45 Questions
// Cities: Write a function called describe_city() 
//Functions
function describe_city(Cities, Country = "Pakistan") {
    console.log(`${Cities} is in ${Country}`);
}
describe_city("Karachi");
//only one parameter called, the other one is taken from
//its default declartion
describe_city("Lahore");
describe_city("New York", "USA");
