"use strict";
//Q-32. Assignment No.1 45 Questions
//Checking Usernames
let CUsers = ['Admin', 'Eric', 'Peter', 'Sheela', 'Arthur'];
let NUsers = ['Paul', 'Joseph', 'Davis', 'Sheela', 'arthur'];
//let Users : number;
let Users = CUsers.length;
console.log(Users);
for (let i = 0; i < Users; i++) {
    if (CUsers[i] == NUsers[i])
        console.log("Space Available");
}
;
