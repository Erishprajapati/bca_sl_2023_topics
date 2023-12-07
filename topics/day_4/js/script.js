//defininig array
let places = ["Kathmandu","Lalitpur", "Pokhara", "Butwal"]
const gender = ["Male","Female", "others"]

//accessing array elements with indexing 
console.log(places[0])
console.log(places[1])
console.log(places[3])

//since array is an object so we can define it using array()
let lakes = new Array("Phewa", "Begnas", "Rara", "Tilicho");

//array properties and methods
//properties

//length- return the lenght of an array
//example
console.log(places.length)
console.log(gender.length)
console.log(lakes.length)

//methods
//1. push - return the lenght of an array example
//example
let days = ["Sunday","Monday"]
console.log(days)
days.push("Tuesday")
console.log(days)
days.push("Wednesday")
console.log(days)

//2. pop - removes last index element from an array 
let capital = ["kathmandu","New Delhi", "Bejing", "Dhaka"]
console.log(capital)
days.pop()
console.log(capital)
days.pop()
console.log(capital)

//defining array
let places = ["Kathmandu", "Lalitpur",  "Pokhara", "Butwal"]
const gender = ["Male", "Female", "Others"]

//acessing array element with indexing 
console.log(places[0])
console.log(places[1])
console.log(places[3])

//since array is an object so we can define it using array()
let lakes =  new Array("Phewa", "Begans", "Rara", "Tilicho")

//array properities and method properities 
//length - return the length of an array example
console.log(places.length)
console.log(gender.length)
console.log(lakes.length)

//methods
//1. push - append an element in an array
//example
let days = ["Sunday", "Monday"]
console.log(days) 
days.push("Tuesday")
console.log(days)
days.push("Wednesday")
console.log(days) 

//2. pop - removes last index element form an array
let capital = ["Kathmandu", "New Delhi", "Bejing" , "Dhaka"]
console.log(capital) 
capital.pop()
console.log(capital) 
capital.pop()
console.log(capital)   

//3. shift() - removes element of first index 
let movies = ["Animal", "Marvel", "Dimag Kharab", "Batman"]
console.log(movies)
movies.shift()
console.log(movies)
movies.shift()
console.log(movies)

//4.unshift() - add an element at the brginning of the array
let kings = ["Mahendra", "Birendra", "Gyanendra"]
console.log(kings)
kings.shift()
console.log(kings)
kings.shift()
console.log(kings)

//5. splice() - add/or remove element from specified index
let languages = ["Java", "JavaScript", "Php"]

//this method takes 3 argunments 
/* 1st - position 
2nd number of elements want to remove 
3rd - element can be more than one*/ 

//to add element - set 2nd argunment 0
console.log(languages)
languages.splice(1,0,"Python")

//to remove element - set 2nd argunment greater than 0
console.log(languages)
languages.splice(1, 2, "Dart")
console.log(languages)
languages.splice(3, 0, "Go Lang")
console.log(languages)
languages.splice(2, 1, "Ruby")
console.log(languages)
