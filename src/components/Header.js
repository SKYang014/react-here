import React from "react"

export default function Header(props) {

    // const navtabs = categories.map(x => {
    //     return <h3>x</h3>
    // })

    return (
        <nav className="nav--container">
            <h2>Sarah Yang</h2>
            <div className="nav--tabs">
                <h3 onClick={() => props.toggle(1)}>About</h3>
                <h3 onClick={() => props.toggle(2)}>Portfolio</h3>
                <h3 onClick={() => props.toggle(3)}>Resume</h3>
                <h3 onClick={() => props.toggle(4)}>Contact</h3>
            </div>
        </nav>
    )
}