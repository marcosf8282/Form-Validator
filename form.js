const nombre = document.querySelector(".name")
const last =  document.querySelector(".last-name")
const email = document.querySelector(".email")
const number = document.querySelector(".number")

nombre.required = ".name";
nombre.minLength = 4;
nombre.placeholder = "Name*";

last.required = ".last-name";
last.minLength = 5;
last.placeholder = "Last name*";

email.required = ".email";
email.minLength = 15;
email.placeholder = "Email*";

number.required = ".number";
number.minLength = 9;
number.placeholder = "Phone Number*";

