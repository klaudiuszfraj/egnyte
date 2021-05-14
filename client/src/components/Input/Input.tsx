import React from 'react';
import style from './Input.module.scss';
import {InterfaceInput} from "../../interfaces";

interface InterfaceInputWithChange extends InterfaceInput{
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:React.FC<InterfaceInputWithChange> = ({type,name,value,checked, handleChange}) => {

    return (
        <label htmlFor={name} className={style.input}>
            <input name={name} type={type} checked={checked} onChange={(e) => handleChange(e)}/>
            {value}
        </label>
    );
};

export default Input;