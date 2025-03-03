import React from "react";
import "./About.css";

function About() {
    return (
        <div className="about-container">
            <h1>About This Project</h1>
            <p>
                This website is a Naruto character database that provides detailed information
                about various characters from the Naruto universe.
            </p>
            <p>
                Using the <a href="https://narutodb.xyz/docs/characters/getAllCharacters" target="_blank" rel="noopener noreferrer">NarutoDB API</a>,
                we fetch and display character data dynamically.
            </p>
            <p>
                The project was inspired by the design and layout of
                <a href="https://sfpopos.com/" target="_blank" rel="noopener noreferrer"> SFPOPOS</a>,
                aiming to offer a similar clean and user-friendly experience.
            </p>
            <p>
                Built using React and React Router, this app allows users to explore Naruto characters,
                view details, and navigate seamlessly between pages.
            </p>
        </div>
    );
}

export default About;
