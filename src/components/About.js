import React from "react"
import photo from "../assets/sarah.JPG"


export default function About() {

    return (
        <section className="about--container">
            <img src={photo} className="about--photo" />
            <div className="about--textcontainer">
                <h2>About Me</h2>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Hac egestas facilisi arcu vivamus. Sit magna at id ipsum sit id viverra felis et. Pellentesque amet tristique rhoncu, donec a euismod velit. Hendrerit molestie fermentum odi euismod.</div>
                <button className="connect-btn"><a href="mailto: skyang014@gmail.com">Let's Chat</a></button>
            </div>

        </section>
    )
}