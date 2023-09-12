import React from 'react';
import './App.css';


//The function below is used to create a navigation bar. I have given it the className to access it to style it with CSS.
//It will place HTML elements when called upon in the App.js file.
function Navigation() {
    return (
        <div className="navbar">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Photo Gallery</a>
            <a href="#">Blog</a>
            <a href="#">Contact Us</a>
        </div>
    );
}

export default Navigation;