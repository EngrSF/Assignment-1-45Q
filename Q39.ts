//Q-39. Assignment No.1 of 45 Questions
//City Names: Write a function called city_country() 

function city_country(city: string, country: string) {

  return `${city} , ${country}`
};

let opt: string;
opt = city_country("Lahore", "Pakistan");
console.log(opt);
opt = city_country("Karachi", "Pakistan");
console.log(opt);
opt = city_country("Islamabad", "Pakistan")
console.log(opt);

