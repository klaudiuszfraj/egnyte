export interface InterfaceInput {
    type: 'checkbox' | 'radio' ;
    name: string;
    value: string;
    checked: boolean;
    id: string;
}

export interface InterfaceForm {
    timestamp:number;
    fields: InterfaceInput[];
    radio: InterfaceInput[];
    id?:string;
}