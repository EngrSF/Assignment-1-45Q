"use strict";
//Q-37. Assignment No.1 of 45 Questions
//Large Shirts: Modify the make_shirt() function 
function MakeShirt(shirts = "Large", message = 'I Love TypeScript') {
    console.log(`Shirts Size: ${shirts}, message: ${message}`);
}
;
MakeShirt();
MakeShirt("Medium");
MakeShirt("Small", "I Love Pakistani Brands");
