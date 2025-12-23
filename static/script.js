function info() { // function to display info and references the "message" id to change text
    document.getElementById("message").textContent =
    `My name is Kelwyn Mebane II, I am currently a graduate student at Merrimack College
    pursuing a Master's in Computer Science. I began backend coding in early 2025 
    starting with simple Python scripts, progressed into repetitive small scripts 
    that would incorporate use of loops, OOP, functions, and data structures, then 
    into backend projects through my Masters program. By late 2025, I began expanding my 
    knowledge from just writing backend code to officially building. Click "About Projects" 
    to learn more about my projects and where I aim to take them!`;
}

function projects() { // ^^
    document.getElementById("message").textContent =
    `
    Netly:
    An expansion of my summer 2025 backend "Network-Tracking" project using vanilla python, 
    I am currently working on a full-stack web application called Netly that will allow users to
    log new connections they meet as they grow their network in their professional career. The
    application tracks a connection's name, where you met them, their profession, and any shared interests.
    The backend logic for this project is being built with Python using FastAPI and SQL Alchemy, 
    while the frontend utilizes HTML, CSS, and Jinja2 templating. I plan to continue adding more features
    such as deleting connections, searching connections, and adding a column for contact info
    to allow an AI agent to reach out to a connection on the user's behalf for check-ins. Once I have 
    achieved all the features I would like to add, I plan to deploy the web app. on an AWS EC2 instance.

    My Website:
    This website is my intro to javascript and advanced frontend web development. I plan to continue
    adding more features overtime as I learn more about javascript and I would ultimately like to 
    use React JS to dramatically improve the website in the next year. Like Netly, I plan to deploy 
    this website on an AWS EC2 instance once I am satisfied with the product.

    Panda Pal:
    Data is a powerful tool when analyzed correctly, typically companies work with large datasets that need
    to be cleaned and analyzed properly to pull insights from or manage. This project will use Python's Pandas
    framework to help users clean and analyze datasets by uploading a csv or xsl to the application. 
    In early 2026 I will begin building the backend logic for this project as I expand my knowledge of Pandas and 
    data analyzing techniques. The frontend will likely be built with a similar stack to Netly and deployed to
    an AWS EC2 instance upon completion. 
    `;
}

// variables for buttons and event listeners for functionality
const infoBtn = document.getElementById("infoBtn");
const projectsBtn = document.getElementById("projectsBtn");
const contactBtn = document.getElementById("contactBtn");

// event listeners for the above buttons
infoBtn.addEventListener("click", info);
projectsBtn.addEventListener("click", projects);
contactBtn.addEventListener("click", submitContact);

// function that handles the contact inputs 
function submitContact() {
    //variables for the input fields
    const name = document.getElementById("nameInput").value; // .value only for input fields  
    const email = document.getElementById("emailInput").value;
    const message = document.getElementById("contactMessage");

    // starts off not showing the message
    message.classList.remove("show");

    // if/else statements to determine which message shows
    if (name === "" || email === "" ) {
        message.textContent = "Please be sure to fill out all fields so I can get back to you";
        message.style.color = "red";
        return;
    } else {
        message.textContent = `Thanks ${name}, I will get back to you soon!`;
        message.style.color = "green";
    }
    // initiates the message animation by adding the "show" class to HTML element that css has an id for
    message.classList.add("show");
}

