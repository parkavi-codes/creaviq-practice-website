const companyName = "Creaviq";
const tagline = "Innovate. Create. Grow.";

const service1 = "Web Development";
const service2 = "Software Development";
const service3 = "Cloud Solutions";
const service4 = "Digital Solutions";

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

function showService(serviceName) {
        console.log("Our Service: " + serviceName);
}

showService("Web Development");
showService("Software Development");
showService("Cloud Solutions");
showService("Digital Solutions");

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

console.log(typeof companyName);
console.log(typeof service1);

const totalServices = 4;
console.log(typeof totalServices);

const iswebsiteAvailable = true;
console.log(iswebsiteAvailable);

let customerphoneNumber;
console.log(typeof customerphoneNumber);

let customerEmailStatus = null;
console.log(typeof customerEmailStatus);

let websiteCost = 10000;
let featureCost = 2000;
let projectCount = 2;

let totalCost = websiteCost + featureCost;

let finalAmount = totalCost * projectCount;

console.log("websiteCost: " + websiteCost);
console.log("featureCost: "+ featureCost);
console.log("Total project cost: " + totalCost);
console.log("Final Amount " + finalAmount);

let service = "Mobile App Development";

if (service === "web Development" || service === "Mobile App Development") {
    console.log("Thank you for your enquiry!");
}
else {
    console.log("Please check our services.");
}

let projectBudget = 70000;

if(projectBudget >= 50000) {

    console.log("Premium Project");
}
else if (projectBudget >= 25000) {

    console.log("Standard Project");
}
else if (projectBudget >=10000) {

    console.log("Basic Project");
}
else {

    console.log("Budget Not Available");
}

let selectedPage = "Services";

switch (selectedPage) {

    case "Home":
        console .log("Welcome to Creaviq Home Page");
        break;

    case "About":
        console.log("Welcome to About Page");
        break;
    
    case "Services":
        console.log("Explore Our Services");
        break;

    case "Contact":
        console.log("Contact Creaviq");
        break;

    default:
        console.log("Page Not Found");
}

function showWelcome() {
    console.log("Welcome to Creaviq!");
}

showWelcome();

const showCustomerWelcome = () => {

    console.log("Welcome too Creaviq!");

};

showCustomerWelcome();