import React from 'react';
import './styles.scss';

const FormInput=({handleChange,label,...othProps})=>{
    console.log('labelsss',label)
    return(
        <div className="group">
            <input className='form-input' onChange={handleChange} {...othProps}/>

            {
                label && (
                    <label className={`${othProps.value.length ? 'shrink':''} form-input-label`}>
                        {label}
                    </label>
                )
            }
        </div>
    )
}

export default FormInput;