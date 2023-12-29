import React from "react";
import "./about.css";
const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="d-flex">
          <h1>About Us</h1>
        </div>

        <p>
        I'm thrilled to share that I've recently completed a comprehensive Todo application using the MERN stack. This project harnesses the power of React for the frontend, Node.js for the backend, and MongoDB as the database manager. The frontend, developed with React, offers a sleek and user-friendly interface for seamless task management. Leveraging Node.js on the backend ensures a robust and scalable architecture, handling data transactions efficiently. The integration of MongoDB as the database manager enhances data storage and retrieval, providing a reliable foundation for the entire application. Together, these technologies in the MERN stack harmonize to create a feature-rich Todo app that combines the strengths of MongoDB, Express, React, and Node.js, delivering a modern and efficient web application for effective task organization and productivity.
        </p>
      </div>
    </div>
  );
};

export default About;
