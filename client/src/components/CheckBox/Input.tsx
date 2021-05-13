import React from 'react';
import style from './Input.module.scss';
import {InterfaceInput} from "../../interfaces";
import {useSocket} from "../../context/SocketProvider";


const Input:React.FC<InterfaceInput> = ({type,name,value,checked}) => {
    const socket = useSocket()
    const handleClick = () => {
        if (socket) {
            socket.emit('edit', {data: 'ddd'})
        }
    }
    return (
        <label htmlFor={name} className={style.input} >
            <input name={name} type={type} checked={checked} onChange={handleClick}/>
            {value}
        </label>
    );
};

export default Input;