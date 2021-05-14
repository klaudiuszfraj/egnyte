import React from 'react';
import Input from "../Input/Input";
import {InterfaceForm} from "../../interfaces";
import {useSocket} from "../../context/SocketProvider";

const Form:React.FC<InterfaceForm> = ({ timestamp, fields, id  }) => {
    const socket = useSocket()
    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {

        const fieldsCopy = [...fields];
        fieldsCopy.map(field => {
            if (field.name === e.target.name) {
                field.checked = e.target.checked
            }
        })
        if (socket) {
            socket.emit('edit', {
                formId: id,
                update: {
                    timestamp: 545,
                    fields: fieldsCopy
                }
            })
        }
    }
    return (
        <form action="" id={id} data-timestamp={timestamp}>
            {fields.map(field => (
                <Input
                    key={field.name}
                    type={field.type}
                    name={field.name}
                    value={field.value}
                    checked={field.checked}
                    handleChange={handleClick}
                />
            ))}
        </form>
    );
};

export default Form;