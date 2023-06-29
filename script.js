let email; 
let firstName;
let lastName;
let cellNumb;

document.getElementById("mybutton").onclick = function(){
    email = document.getElementById("email").value
    console.log(email)

    firstName = document.getElementById("firstname").value
    console.log(firstName)

    lastName = document.getElementById("lastname").value
    console.log(lastName)

    cellNumb = document.getElementById("cell").value
    console.log(cellNumb)
};
