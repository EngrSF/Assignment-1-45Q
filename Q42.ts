//Q-42. Assignment No.1 of 45 Questions.
//Great Magicians: Start with a copy of your program from 
// Exercise 39
const Great_Magicians:string[]= ["Michal","Peter","Bhushan","Jill"]
console.log("Original Array") 
{for (var i = 0;i<Great_Magicians.length;i++) { 
    console.log(Great_Magicians[i]) 
   }  
} 
console.log("\nUpdated Array")
function make_great1(Great_Magicians:string[])
{for (var i = 0;i<Great_Magicians.length;i++) { 

  console.log(Great_Magicians[i]=("Great " + Great_Magicians[i]))
 }  
} 
make_great1(Great_Magicians) 

