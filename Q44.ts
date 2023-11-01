//Q-44. Assignment-1 of 45 Questions.
// Sandwiches: Write a function that accepts an array
// of items a person wants on a sandwich
const itemArray: string[] = ["Chicken", "Cheese", "Garlic", "Onion"];
const itemArray2: string[] = ["Cheese", "Garlic", "Onion"];
const itemArray3: string[] = ["Egg", "Cheese", "Garlic", "Onion"];
let SpecialSand: string;

function Sandwiches(itemArray: string[]) {
    let items = ''
    for (let i = 0; i < itemArray.length; i++) {
        items += `${i + 1 < itemArray.length ? `${itemArray[i]}, ` : `and ${itemArray[i]}`}`
    }
    console.log(`make a sandwich with ${items}`)

}
Sandwiches(itemArray);
Sandwiches(itemArray2);
Sandwiches(itemArray3);
