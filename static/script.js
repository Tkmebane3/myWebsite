function info() {
    document.getElementById("message").textContent =
    `My name is Kelwyn Mebane II, I am currently a graduate student at Merrimack College
    pursuing a Master's in Computer Science. I began backend coding in early 2025 
    starting with simple Python scripts, progressed into repetitive small scripts 
    that would incorporate use of loops, OOP, functions, and data structures, then 
    into backend projects through my Masters program. By late 2025, I began expanding my 
    knowledge from just writing backend code to officially building. Click "About Projects" 
    to learn more about my projects and where I aim to take them!`;
    }

function projects() {
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