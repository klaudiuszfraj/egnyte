import React, {useEffect, useState} from 'react';
import style from './Forms.module.scss';
import {useSocket} from "../../context/SocketProvider";
import {InterfaceForm} from "../../interfaces";
import Form from "../Form/Form";


const FormsWrapper:React.FC = () => {
    const [state, setState] = useState<InterfaceForm[]>();
    const socket = useSocket()
    useEffect(() => {
        if (socket) {
            socket.on('connected', (formsArray:any) => {
                console.log('dd')
                setState(formsArray);
            })
            return () => {
                if (socket) {
                    socket.off('connected')
                }
            }
        } else return;
    }, [socket])
    return (
        <>
            {state && state.map(form => (
                <section key={form.id} className={style.forms}>
                    <Form id={form.id} fields={form.fields} timestamp={form.timestamp} />
                </section>
            ))}
        </>
    );
};

export default FormsWrapper;