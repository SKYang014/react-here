import React from "react"
import resume from "../assets/Sarah_Resume2022.pdf"

export default function Resume() {
    return (
        <section className="resume--container">
            <a href={resume} download="Sarah Yang"><h1>Resume download</h1></a>
            <h2>Technical Skills</h2>
            <ul>
                <li>
                    Javascript
                </li>
                <li>
                    C#
                </li>
                <li>
                    MERN Fullstack
                </li>
                <li>
                    GIT
                </li>
            </ul>
            <h2>Soft Skills</h2>
            <ul>
                <li>
                    Interpersonable
                </li>
                <li>
                    Active Listener
                </li>
                <li>
                    Driven and Self-starter
                </li>
                <li>
                    Detail Oriented
                </li>
            </ul>
        </section>
    )
}