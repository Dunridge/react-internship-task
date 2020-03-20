import React, { Component } from 'react';

function ServicesCard(props) {
    return (
        <div className="service-card">
            <h2>{props.cardTitle}</h2>
            <p>{props.cardInfo}</p>
        </div>
    );
}

export default ServicesCard;
