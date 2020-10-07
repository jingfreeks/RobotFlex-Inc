import React from 'react';
import './styles.css';
import CustomButton from '../../custom-button';
import {useDispatch} from 'react-redux';
import { deleterobotStart } from '../../../redux/robots/actions';
export const Card=({index,items,children})=>{
    const dispatch=useDispatch();
    const handleDeletebutton=(items)=>{
        dispatch(deleterobotStart({Id:items.id}))
    }
    return (
        <div className="card-container">
            <img alt="robots" src={`https://robohash.org/${index}?set=set2&size=180x180`} />
            <h2>{items.name}</h2>
            <p>{items.email}</p>
            <p>
            <CustomButton onClick={()=>handleDeletebutton(items)}> DELETE</CustomButton>
            </p>
       
        </div>
    )
}