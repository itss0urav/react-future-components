import React from 'react'
import "./Home.css"
import { Link } from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <h1>React Future Components</h1>

            <h6>Select what you need</h6>

            <div className="options">
                <Link to="/AllButtons" className="option-elements">Buttons</Link>
                <Link to="/AllCards" className="option-elements">cards</Link>
            </div>
        </div>
    )
}
