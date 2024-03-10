import React from 'react';
import './Card.css'; // Assuming you have a CSS file named Card.css
import data from "../data/data"
interface TemplateData {
    title: string;
    description: string;
    imagePath: string;
}

const Card: React.FC<TemplateData> = () => (
    <>
        <div className="card2">
            <img src={data.imagePath} alt={data.title} />
            <div className="card-content">
                <h2>{data.title} </h2>
                <p>{data.description} </p>
            </div>
        </div>
        <div className="card1">
            <img src={data.imagePath} alt={data.title} />
            <div className="card-content">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </div>
        </div>
        <div className="card3">
            <img src={data.imagePath} alt={data.title} />
            <div className="card-content">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </div>
        </div>
    </>

);

export default Card;
