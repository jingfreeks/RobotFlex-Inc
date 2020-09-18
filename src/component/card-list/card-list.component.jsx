import React from 'react';
import './card-list.styles.css';
import {Card} from './card/card.component';

export const CardList=({robots,children})=>{
    return(
    <div className="card-list">
        {robots.map(robot=>
          <Card key={robot.id} items={robot} />
        )}
    </div>

    )
}
