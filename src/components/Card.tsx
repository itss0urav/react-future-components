import React from 'react';
import './Card.css'; // Assuming you have a CSS file named Card.css
import data from "../data/data"

interface TemplateData {
    title?: string;
    description?: string;
    imagePath?: string;
    variant: "card1" | "card2" | "card3";
}

export const Card: React.FC<TemplateData> = ({ variant }) => {
    return (
        <div className={variant}>
            <img src={data.imagePath} alt={data.title} />
            <div className="card-content">
                <h2>{data.title}</h2>
                <p>{data.description}</p>
            </div>
        </div>
    );
};


