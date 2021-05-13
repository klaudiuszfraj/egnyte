import React from 'react';

interface InterfaceCheckbox {
    type: 'checkbox' | 'radio' ;
    name: string;
    value: string;
    checked: boolean;
}

const Checkbox:React.FC<InterfaceCheckbox> = ({type,name,value,checked}) => {
    return (
        <label htmlFor={name}>
            <input name={name} type={type} checked={checked}/>
            {value}
        </label>
    );
};

export default Checkbox;