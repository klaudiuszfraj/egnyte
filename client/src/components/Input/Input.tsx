import React from 'react';
import style from './Input.module.scss';
import {InterfaceInput} from "../../interfaces";

interface InterfaceInputWithChange extends InterfaceInput{
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

const Input:React.FC<InterfaceInputWithChange> = ({type,name,value,checked, id, handleChange}) => {

    return (
        <label htmlFor={name} className={style.label}>
            <input id={id} name={name} type={type} checked={checked} onChange={(e) => handleChange(e)}/>
            {value}
            <span className={style.checkmark}/>
        </label>
    );
};

export default Input;