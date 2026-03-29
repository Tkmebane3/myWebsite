import netly from "../assets/netly.png";
import pp from "../assets/pp.png";

function MyProjects() {
  return (
    <>
      <h2>My Projects</h2>
      <div className="projectItem">
        <h3>Netly</h3>
        <img src={netly} className="ProjectImage"/>
        <p>Netly is a full-stack web application using Python (FastAPI) that allows users to log, view, and manage professional connections. 
        Designed REST-style API endpoints using GET and POST routes to handle page rendering, form submissions, and database operations. 
        Implemented backend logic with SQLAlchemy ORM to manage database sessions and perform CRUD operations on connection data stored in SQLite. 
        Built a server-rendered frontend using Jinja2 templates, HTML, and CSS, enabling dynamic content rendering from database queries. 
        Structured the application using dependency injection (get_db) for safe database session management and organized the project into modular components for scalability. 
        The system follows a clear request flow where browser requests trigger FastAPI routes, which process logic, interact with the database, and return rendered templates to the client.</p>
      </div>
      <div className="projectItem">
        <h3>PandaPal</h3>
        <img src={pp} className="ProjectImage"/>
        <p>PandaPal is an in progress state-driven full-stack web application for dataset upload, transformation selection, and backend-powered pandas processing 
        designed to automate common data cleaning workflows through a guided React interface.</p>
      </div>
    </>
  )
}

export default MyProjects
