import React from 'react';
import Input from "../Input/Input";
import {InterfaceForm} from "../../interfaces";
import {useSocket} from "../../context/SocketProvider";

const Form:React.FC<InterfaceForm> = ({ timestamp, fields, radio, id  }) => {
    const socket = useSocket()
    const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldsCopy = [...fields];
        const radioCopy = [...radio];
        if (e.target.type === 'checkbox') {
            fieldsCopy.map(field => {
                if (field.name === e.target.name) {
                    field.checked = e.target.checked
                }
            })
        } else {
            radioCopy.map(radio => {
                if (radio.id === e.target.id) {
                    console.log('fff')
                    radio.checked = true
                } else {
                    radio.checked = false;
                }
            })
        }
        if (socket) {
            socket.emit('edit', {
                formId: id,
                update: {
                    timestamp: new Date().getTime(),
                    fields: fieldsCopy,
                    radio: radioCopy,
                }
            })
        }
    }
    return (
        <form action="" id={id} data-timestamp={timestamp}>
            {fields.map(field => (
                <Input
                    id={'d'}
                    key={field.id}
                    type={field.type}
                    name={field.name}
                    value={field.value}
                    checked={field.checked}
                    handleChange={handleClick}
                />
            ))}
            <br/>
            {radio.map(radio => (
                <Input
                    id={radio.id}
                    key={radio.id}
                    type={radio.type}
                    name={radio.name}
                    value={radio.value}
                    checked={radio.checked}
                    handleChange={handleClick}

                />

            ))}
        </form>
    );
};

export default Form;