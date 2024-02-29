//defining elements
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const username = document.getElementById('username');
const passkey = document.getElementById('passkey');
//defining button 
const btnReg = document.getElementById('btnReg')

//adding event listener to button 
btnReg.addEventListener('click',function(e){
    if(firstname.value === "" || lastname.value === "" || username.value === "" || passkey.value === ""){
    e.preventDefault();
    
 console.log('All fields are required!!');}
})
//use submit event on form 
regForm.addEventListener('submit', (e) => {
    console.log("form is submitted");
})  
