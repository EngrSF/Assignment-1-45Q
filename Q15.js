"use strict";
// QUESTION-15
// Declare arrays with the const keyword
{
    const names = ["SHAHID", "JUNAID", "MUJEEB", "MASOOD"];
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    console.log("\nAttention: Mr. " + names[0] + "\tThe Meeting place would be Bahria Auditorium");
    console.log("\nAttention: Mr. " + names[1] + "\tThe Meeting place would be Bahria Auditorium");
    console.log("\nAttention: Mr. " + names[2] + "\tThe Meeting place would be Bahria Auditorium");
    console.log("\nAttention: Mr. " + names[3] + "\tThe Meeting place would be Bahria Auditorium");
    //Changing Guest List
    const GuestList = ["SHAHID", "JUNAID", "MUJEEB", "MASOOD"];
    console.log("Message from " + GuestList[3] + " ,I Regret to Attend the Meeting");
    //adding a new element to an array using the push() method:
    GuestList.push("MAZHAR");
    console.log("Dear Mr." + GuestList[0] + " Meeting Date & Time " + Date());
    console.log("Dear Mr." + GuestList[1] + " Meeting Date & Time " + Date());
    console.log("Dear Mr." + GuestList[2] + " Meeting Date & Time " + Date());
    console.log("Dear Mr." + GuestList[4] + " Meeting Date & Time " + Date());
    //Guest List Now
    console.log("\nUpdated Guest List");
    console.log(GuestList);
    //Replacing the Guest in the GuestList Array
}
