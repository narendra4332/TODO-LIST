import React from "react";
import "./About.css";

export const About = () => {
  return (
    <div className="mainContainer">
      <div className="about-container">
        <div className="Container1">
          <h2>About My Todos App</h2>
          <p>
            Welcome to <strong>My Todos App</strong>! This is a simple yet
            effective to-do list application that helps you manage your tasks
            efficiently.
          </p>
        </div>
        <div className="box-Container">
          <div className="Container2">
            <h3>Features</h3>
            <ul>
              <li>📝 Add new tasks with title and description</li>
              <li>✅ Mark tasks as completed</li>
              <li>🗑️ Delete tasks when no longer needed</li>
              <li>📁 Data is stored in Firebase Realtime Database</li>
              <li>
                🔐 User authentication with Firebase (Sign Up, Sign In, Google
                Login)
              </li>
            </ul>
          </div>

          <div className="Container3">
            <h3>How to Use</h3>
            <ol>
              <li>
                First, <strong>Sign Up</strong> or <strong>Sign In</strong> to
                access your todos.
              </li>
              <li>
                Click on <strong>"Add Todo"</strong> to create a new task.
              </li>
              <li>
                To delete a task, click the <strong>Delete</strong> button.
              </li>
              <li>
                You can also <strong>Sign Out</strong> anytime from the header.
              </li>
            </ol>
          </div>
        </div>

        <div className="Container4">
          <p>
            This app is built using <strong>React.js</strong> and{" "}
            <strong>Firebase</strong>. Enjoy organizing your tasks!
          </p>
        </div>
      </div>
    </div>
  );
};
