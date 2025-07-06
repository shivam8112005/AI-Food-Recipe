import React from 'react';
import InputForm from './InputForm';
export default function Modal(props){
    return (
        <>
        <div className="backdrop" onClick={props.onClose}>    </div>
            <dialog className='modal' open>
                <InputForm setIsOpen={props.onClose}/>

            </dialog>
    
        </>
    );
}