import "./AllCards.css"
import { Card } from "../components/Card"
import Navbar from "../components/Navbar"
export default function AllCards() {
    return (
        <div>
            <Navbar/>
            <div className="card-grid">
                <Card variant="card1" />
                <Card variant="card2" />
                <Card variant="card3" />
            </div>
        </div>
    )
}
