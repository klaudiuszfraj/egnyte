export interface InterfaceInput {
    type: 'checkbox' | 'radio' ;
    name: string;
    value: string;
    checked: boolean;
}

export interface InterfaceForm {
    timestamp:number;
    fields: InterfaceInput[];
    id?:string;
}