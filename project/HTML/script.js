let companyName = "Creaviq";
let tagline = "Innovate. Create. Grow.";

let service1 = "Web Deveopment";
let service2 = "Software Development";
let service3 = "Cloud Solutions";
let service4 = "Digital Solutions";

console.log(companyName);
console.log(tagline);
console.log(service1);
console.log(service2);
console.log(service3);
console.log(service4);

function showServices() 
{
    console.log("Our Services");
    console.log(service1);
    console.log(service2);
    console.log(service3);
    console.log(service4);
}

showServices();

const service = "Web Development";

console.log(service);

function showService(serviceName) {
        console.log("Our Service: " + serviceName);
}

showService("Web Development");
showService("Software Development");
showService("Cloud Solutions");

function showCompany(name, tagline) {
    console.log(name);
    console.log(tagline);
}
function getCompanyTagline() {
    return "Innovate. Create. Grow.";
}

let companyTagline = getCompanyTagline();

console.log(companyTagline);

function showMessage() {
    alert("Welcome to Creaviq! How can we help you?");
}

let exploreBtn = document.getElementById("exploreBtn");

if(exploreBtn){
exploreBtn.addEventListener("mouseover", function()  {
    document.getElementById("result").innerText = "Welcome to Creaviq!";
});
}

let ContactForm = document.getElementById("contactForm");

if (ContactForm) {
    ContactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let customerName = document.getElementById("userName").value;
    let customerEmail = document.getElementById("userEmail").value;

    
        if (customerName !== "" && customerEmail !== "") {

        document.getElementById("formResult").innerHTML = "!!THANK YOU!! Form submitted successfully!";
   
        document.getElementById("formResult").style.color = "darkgreen";
        document.getElementById("sendBtn").style.backgroundColor = "green";
    }
    else {
        document.getElementById("formResult").innerHTML = "Please fill Name and Email";
    
        document.getElementById("formResult").style.color = "red";
        document.getElementById("sendBtn").style.backgroundColor = "red";
    }
});

}

