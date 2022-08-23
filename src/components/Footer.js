import React from "react"
import github from "../assets/GitHub.png"
import linked from "../assets/Linkedin.png"

export default function Footer() {
    return (
        <section className="footer--container">
            <div className="about--atags">
                <a href="https://github.com/SKYang014">
                    <img src={github} alt="https://github.com/SKYang014" />
                </a>
                {/* <div class="box">
                        <iframe src="https://github.com/SKYang014/" width="500px" height="500px">
                        </iframe>
                    </div> */}
                <a href="https://www.linkedin.com/in/sarah-yang-3b4494132/">
                    <img src={linked} alt="https://www.linkedin.com/in/sarah-yang-3b4494132/" />
                </a>
            </div>
        </section>
    )
}