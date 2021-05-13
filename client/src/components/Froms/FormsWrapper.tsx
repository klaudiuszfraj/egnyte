import React, {useEffect, useState} from 'react';
import style from './Forms.module.scss';
import {useSocket} from "../../context/SocketProvider";
import Input from "../Input/Input";
import {InterfaceForm} from "../../interfaces";


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
                    <form action="" id={form.id} data-timestamp={form.timestamp}>
                        {form.fields.map(field => (
                            <Input
                                key={field.type}
                                type={field.type}
                                name={field.name}
                                value={field.value}
                                checked={field.checked}
                            />
                        ))}
                    </form>
                </section>
            ))}
        </>
    );
};

export default FormsWrapper;