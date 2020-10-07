import React from 'react';
import './styles.css';
import {Card} from '../../cards/user-card';


const UserCardList=({searchData})=>{
    return(
    <div className="card-list">
        { Object.keys(searchData).map((robot,index)=>
          <Card key={index} items={searchData[robot]} index={index} />
        )}
    </div>

    )
}


export default UserCardList;