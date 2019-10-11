// upon clicking the register button, it should execute the following validations:
document.querySelector('#registerButton').addEventListener("click", function(){

//username should be greater than or equal to 10 chars
//password should be atleast 8 characters
//email should include the @ symbol
//use the Javascript inludes() method to check if the email has an @ symbol
//password and pass2 should match
//all input boxes should not be empty
//create an errors variable that will check if there are any errors
//increment the errors variable every time we encounter an error in our input validations


	let errors = 0; //try to change to 1 or any positive value
	// declare an username variable to store the value of the username input
	let username = document.getElementById("username").value
	// declare a password variable to store the value of the password input
	let password = document.getElementById("password").value
	// declare an email variable to store the value of the email input
	let email = document.getElementById("email").value
	// declare an pass2 variable to store the value of the confirm password input
	let pass2 = document.getElementById("pass2").value
	let val = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


	const Toast = Swal.mixin({
	  toast: true,
	  position: 'top-end',
	  showConfirmButton: false,
	  timer: 3000
	})

	// username should have atleast 10 characters
	if (username.length < 10 ) {
		document.querySelector("#userErr").classList.remove("alert", "alert-danger", "alert-info")
		document.querySelector("#userErr").classList.add("alert-danger")
		document.querySelector('#userErr').innerHTML = "<small> Your username is less than 10 <small></small>"
		errors++
	}else{
		document.querySelector("#userErr").classList.remove("alert")
		document.querySelector("#userErr").classList.remove("alert-danger")
		document.querySelector("#userErr").classList.add("alert-info")
		document.querySelector('#userErr').innerHTML = "<small>Username Accepted</small>"
	}


	//email should include the @ symbol
	if (!email.includes('@', '.com')) {
		document.querySelector("#emailErr").classList.remove("alert", "alert-danger", "alert-info")
		document.querySelector("#emailErr").classList.add("alert-danger")
		document.querySelector('#emailErr').innerHTML = "<small>You input a wrong email</small>"
		errors++
	}else{
		document.querySelector("#emailErr").classList.remove("alert")
		document.querySelector("#emailErr").classList.remove("alert-danger")
		document.querySelector("#emailErr").classList.add("alert-info")
		document.querySelector('#emailErr').innerHTML = "<small>This is valid Email</small>"
	}
	




	//password should be atleast 8 characters
	if (password.length < 8 ) {
		document.querySelector("#pasErr").classList.remove("alert")
		document.querySelector("#pasErr").classList.add("alert-danger")
		document.querySelector('#pasErr').innerHTML = "<small>Please provide a stronger password</small>"
		errors++
	}else{
		document.querySelector("#pasErr").classList.remove("alert")
		document.querySelector("#pasErr").classList.remove("alert-danger")
		document.querySelector("#pasErr").classList.add("alert-info")
		document.querySelector('#pasErr').innerHTML = "<small>This is strong Password</small>"
	}




	// confirm if the value of password is equal to pass2
	if (password != pass2) {
		document.querySelector("#pass2Err").classList.remove("alert")
		document.querySelector("#pass2Err").classList.remove("alert-danger")
		document.querySelector("#pass2Err").classList.add("alert-danger")
		document.querySelector('#pass2Err').innerHTML = "<small>Your password is not matched</small>"
		errors++
	} else{
		document.querySelector("#pass2Err").classList.remove("alert-danger")
		document.querySelector("#pass2Err").classList.add("alert-info")
		document.querySelector('#pass2Err').innerHTML = "<small>Password matched</small>"
	}

 	if(errors > 0) {
		Toast.fire({
		  type: 'error',
		  title: 'Something went wrong'
		})
 	} else {
		Toast.fire({
		  type: 'success',
		  title: 'Registered successfully'
		})
 	}


	// console.log(errors)


	//if the value of errors is greater than 0, return false else 
	// create an alert message that says successfully registered! then
	//return true


})
