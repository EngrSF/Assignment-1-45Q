"use strict";
//Declare arrays with the const keyword
const names12 = ["SHAHID", "JUNAID", "MUJEEB", "MASOOD"];
const OwnArray = ["Cutlus Supreme", "Harley Davidson"];
console.log(names12[0]);
console.log(names12[1]);
console.log(names12[2]);
console.log(names12[3]);
console.log("\nAttention: Mr. " + names12[0] + "\tThe Meeting place would be Bahria Auditorium");
console.log("\nAttention: Mr. " + names12[1] + "\tThe Meeting place would be Bahria Auditorium");
console.log("\nAttention: Mr. " + names12[2] + "\tThe Meeting place would be Bahria Auditorium");
console.log("\nAttention: Mr. " + names12[3] + "\tThe Meeting place would be Bahria Auditorium");
//My Dreams to Drive and Ride
console.log("\nI get rejunevated, recalling days of Driving my favourit Car:\t" + OwnArray[0]);
console.log("\nI wish to own & Ride: " + OwnArray[1]);
//Changing Guest List
const GuestList12 = ["SHAHID", "JUNAID", "MUJEEB", "MASOOD"];
console.log("Message from " + GuestList12[3] + " ,I Regret to Attend the Meeting");
//adding a new element to an array using the push() method:
GuestList12.push("MAZHAR");
console.log("Dear Mr." + GuestList12[0] + " Meeting Date & Time " + Date());
console.log("Dear Mr." + GuestList12[1] + " Meeting Date & Time " + Date());
console.log("Dear Mr." + GuestList12[2] + " Meeting Date & Time " + Date());
console.log("Dear Mr." + GuestList12[4] + " Meeting Date & Time " + Date());
//Guest List Now
console.log("\nUpdated Guest List");
console.log(GuestList12);
//Replacing the Guest in the GuestList Array
