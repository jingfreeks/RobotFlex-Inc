import React from 'react';
import './styles.scss';

const CustomButton=({children,isGoogleSignIn,...othProps})=>{
    return(
       <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...othProps}>
           {children}
       </button> 
    )
}
export default CustomButton;