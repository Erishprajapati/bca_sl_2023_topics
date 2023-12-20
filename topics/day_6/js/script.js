//basic function 

//rule 
//1. must invoke in order to execute the code inside funtion 
//2.follow naming convention ti define function name 

//type of user defined function 
//1. without parameter and return type 

 //defining function
 function showMessage(){
    let message = "have a nice day!!!"
    console.log("message: " + message)
 }
 
 //invoking function 
 showMessage()

 //2. with parameter and no return type
 function checkUserType(userType, department){
let user_type = "ADMIN";
let user_department = "HEADQUARTER";
if(user_type === userType.toUpperCase() &&
user_department ===department.toUpperCase()){
console.log("welcome to DAV Admin panel")
}else{
    console.log("Message;Access forbidden")
}

}
 
//passing arguements to function with parameter
let ut = "admin"
let dept = "Headquarter"
checkUserType(ut, dept);

//3. with parameter and return type
function checkResult(checked_value){
    let result = "Message:";
    switch(checked_value){
        case 1:
            return result.concat(result, "You're under average ")
            case 2:
                return result.concat(result, "You're under average ")
                case 3:
                    return result.concat(result, "You're under good ")
                    case 4:
                        return result.concat(result, "You're under best ")
                        case 5:
                            return result.concat(result, "You're under excellent ")
                            default:
                                return result.concat(result, "You've no resord available ")
    }
}
console.log("Checking user status: " + checkResult(3))