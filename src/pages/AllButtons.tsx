import React from 'react'
import "./AllButtons.css"
import { Button } from '../components'
export default function AllButtons() {
    return (
        <div className="btn-grid">

            <Button variant="darkspace" value="darkspace" />
            <Button variant="whitespace" value="whitespace" />
            <Button variant="success" value="success" />
            <Button variant="danger" value="danger" />
            <Button variant="bluemoon" value="bluemoon" />
            <Button variant="neon-darkspace" value="neonDarkspace" />
            <Button variant="neon-whitespace" value="neonWhitespace" />
            <Button variant="neon-success" value="neonSuccess" />
            <Button variant="neon-danger" value="neon-danger" />
            <Button variant="neon-night" value="neon-night" />
        </div>
    )
}
