import React from "react"
import data from "../projectlist"
import Project from "./Project"

export default function Portfolio() {
    const projects = data.map(item => {
        return (
            <Project
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <section className="portfolio--container">
            {projects}
        </section>
    )
}