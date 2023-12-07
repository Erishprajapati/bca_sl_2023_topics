//defining arrays
let places = ["Kathmandu", "Lalitpur", "Pokhara", "Butwal"];
const gender = ["Male", "Female", "Others"];
let lakes = ["Phewa", "Begnas", "Rara", "Tilicho"];

//accessing array elements with indexing
console.log(places[0]);
console.log(places[1]);
console.log(places[3]);

//array properties and methods - properties
console.log(places.length);
console.log(gender.length);
console.log(lakes.length);

//methods
let days = ["Sunday", "Monday"];
console.log(days);
days.push("Tuesday");
console.log(days);
days.push("Wednesday");
console.log(days);

let capital = ["Kathmandu", "New Delhi", "Beijing", "Dhaka"];
console.log(capital);
capital.pop();
console.log(capital);
capital.pop();
console.log(capital);

let movies = ["Animal", "Marvel", "Dimag Kharab", "Batman"];
console.log(movies);
movies.shift();
console.log(movies);
movies.shift();
console.log(movies);

let kings = ["Mahendra", "Birendra", "Gyanendra"];
console.log(kings);
kings.shift();
console.log(kings);
kings.shift();
console.log(kings);

let languages = ["Java", "JavaScript", "Php"];
console.log(languages);
languages.splice(1, 0, "Python");
console.log(languages);
languages.splice(1, 2, "Dart");
console.log(languages);
languages.splice(3, 0, "Go Lang");
console.log(languages);
languages.splice(2, 1, "Ruby");
console.log(languages);
