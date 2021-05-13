import React from 'react';
import style from './Input.module.scss';

interface InterfaceInput {
    type: 'checkbox' | 'radio' ;
    name: string;
    value: string;
    checked: boolean;
}

const Input:React.FC<InterfaceInput> = ({type,name,value,checked}) => {
    const handleClick = () => {
        console.log(`input ${value} clicked`)
    }
    return (
        <label htmlFor={name} className={style.input} >
            <input name={name} type={type} checked={checked} onChange={handleClick}/>
            {value}
        </label>
    );
};

export default Input;