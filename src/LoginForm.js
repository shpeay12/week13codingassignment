import React from 'react'; //Impoorts React
import './App.css'; //Imports the CSS file.


//Function creates a LoginForm that will place the below HTML elements on the webpage. The className allows me to access and
//style the Login Form in CSS. It will display the Login Form when called upon in the App.js file.
function LoginForm() {
    return (
        <div className="login-form">
            <h3>Log In</h3>
            <input type="text" placeholder="Username" />
            <input type="text" placeholder="Password" />
            <button className="submit-button">Submit</button>
        </div>
    );
}

export default LoginForm;