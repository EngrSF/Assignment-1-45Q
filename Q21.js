"use strict";
// Q-21 of Assigment No.1 45 Questions
//TypeScript Object
//In JavaScript, the fundamental way that we group and pass around data is through objects.
//In TypeScript, we represent those through object types.
//https://www.typescriptlang.org/docs/handbook/2/objects.html
//https://www.w3schools.com/typescript/typescript_object_types.php
//Objects are variables too. But objects can contain many values.
const car21 = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car21);
//Object types like this can also be written separately, and even be reused
//Type Inference
const cars = {
    type: "Toyota",
};
car21.type = "Ford";
car21.type = "Honda";
console.table(car21);
