import React from "react"

export default function Project(props) {
    return (
        <section className="project--container">
            <a href={props.githubUrl}><img src={props.img} /></a>
            <div className="project--text">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </section>
    )
}