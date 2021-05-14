import React from 'react';
import Input from "../Input/Input";
import {InterfaceForm} from "../../interfaces";
import {useSocket} from "../../context/SocketProvider";

const Form:React.FC<InterfaceForm> = ({ timestamp, checkboxes, radios, id  }) => {
    const socket = useSocket();
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldsCopy = [...checkboxes];
        const radioCopy = [...radios];
        if (e.target.type === 'checkbox') {
            fieldsCopy.map(field => {
                if (field.name === e.target.name) {
                    field.checked = e.target.checked
                }
            })
        } else {
            radioCopy.map(radio => {
                if (radio.id === e.target.id) {
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
                    checkboxes: fieldsCopy,
                    radios: radioCopy,
                }
            })
        }
    }
    return (
        <form action="" id={id} data-timestamp={timestamp}>
            {checkboxes.map(checkbox => (
                <Input
                    id={'d'}
                    key={checkbox.id}
                    type={checkbox.type}
                    name={checkbox.name}
                    value={checkbox.value}
                    checked={checkbox.checked}
                    handleChange={handleChange}
                />
            ))}
            <br/>
            {radios.map(radio => (
                <Input
                    id={radio.id}
                    key={radio.id}
                    type={radio.type}
                    name={radio.name}
                    value={radio.value}
                    checked={radio.checked}
                    handleChange={handleChange}
                />

            ))}
        </form>
    );
};

export default Form;