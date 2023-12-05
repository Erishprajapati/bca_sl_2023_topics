// control statement
//if statement 
let num_one=12
let num_two=23

if(num_one+num_two)
{
    console.log("correct answer")
   console.log("the result is:"+ (num_one+num_two))
}
if(num_one>num_two){
    console.log(num_one + "is greater than"+ num_two)
}
if(num_one<num_two){
    console.log(num_one + "is smaller than"+ num_two)
}

//exercise
//define two variables country and country code
// check if the value and type of varibale is same or not 
// value-> "nepal" for country and "NP" for code 
// type-> string 

let country = "nepal"
let country_code = "NP"
if(country==country_code)
{
    console.log("only type is match")
}
if(country=="nepal")
{
    console.log("match")
}
// to check type of variable we can use tpye of operator
console.log(typeof country)
console.log(typeof country_code)
console.log(typeof country_status)
if(typeof password !== String)
{
    console.log("Correct password")
}

//if else statement
let college_name="dav"
let college_location="lalitpur"
if(college_name == "dav" & college_location == "lalitpur"){
    console.log("correct information provided")
}else{
    console.log("Incorrect information")
}
let username="mark"
let pin_code= 1234
if(username == "mark" | pin_code ==1234){
    console.log("Username or pin is valid")
}else{
    console.log("Invalid credentials")
}

//
let marks = 89
if( marks >=0 & marks <=39.99){
console.log("Fail")
}else if (marks >= 40 & marks <=59.99){
    console.log("Third division")
}else if (marks >= 60 & marks <=64.99){
    console.log("Second division")  
}else if (marks >= 65 & marks <=84.99){
    console.log("First division")
}else if (marks >= 85 & marks <=100){
    console.log("Distinction")
}else if (marks >= 100 | marks <0){
    console.log("Please enter value between 0-100")
}
//
let acc_no ="AC-001"
let pin = 5588
let acc_type ="savings"

if(acc_no !== "AC_-001"){
    console.log("Welcome to NIC Asia Bank")
    if(pin === 5588){
    console.log("Have a nice day")
    if(acc_type === "savings"){
        console.log("Your account type is: savings")
    } else{
console.log("Please contact at bank for your account type")
    }    
    }else{
    console.log("Invalid account number or pin code")
    }
}else{
    console.log("Account not avaible at the moment")
}
//switch case
let day_number=5
switch(day_number)
{
    case 1:
        console.log("sunday")
        break
        case 2:
        console.log("monday")
        break
        case 3:
        console.log("tuesday")
        break
        case 4:
        console.log("wednesday")
        break
        case 5:
        console.log("Thrusday")
        break
        case 6:
        console.log("friday")
        break
        case 7:
        console.log("saturday")
        break
}