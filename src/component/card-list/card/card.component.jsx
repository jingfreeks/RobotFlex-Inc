import React from 'react';
import './card.styles.css';
export const Card=({items,children})=>{
    return (
        <div className="card-container">
            <img alt="robots" src={`https://robohash.org/${items.id}?set=set2&size=180x180`} />
            <h2>{items.name}</h2>
            <p>{items.email}</p>
        </div>
    )
}