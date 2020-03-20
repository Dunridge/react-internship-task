import React, { Component } from 'react';
import Card from '../components/Card';

function CardRow(props) {
    let array = props.cards.map(elem => {
        return (
            <div>
                <Card cardTitle={elem}/>
            </div>
        );
    });

    return <div>{array}</div>;
}

export default CardRow;
