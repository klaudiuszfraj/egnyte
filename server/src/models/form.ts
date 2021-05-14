export default class Form {
    timestamp:number;
    checkboxes: {
        type: 'checkbox';
        name: string;
        value: string;
        checked: boolean;
    }[];
    radios: {
        type: 'radio';
        name: string;
        value: string;
        checked: boolean;
    }[]
    id?:string;
    constructor(
        timestamp:number,
        checkboxes:{
            type: 'checkbox';
            name: string;
            value: string;
            checked: boolean;
        }[],
        radios:{
            type: 'radio';
            name: string;
            value: string;
            checked: boolean;
        }[],
        id?:string,
        ) {
        this.id = id
        this.timestamp = timestamp
        this.checkboxes = checkboxes
        this.radios = radios
    }
}