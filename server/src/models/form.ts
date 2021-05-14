export default class Form {
    timestamp:number;
    fields: {
        type: 'checkbox';
        name: string;
        value: string;
        checked: boolean;
    }[];
    radio: {
        type: 'radio';
        name: string;
        value: string;
        checked: boolean;
    }[]
    id?:string;
    constructor(
        timestamp:number,
        fields:{
            type: 'checkbox';
            name: string;
            value: string;
            checked: boolean;
        }[],
        radio:{
            type: 'radio';
            name: string;
            value: string;
            checked: boolean;
        }[],
        id?:string,
        ) {
        this.id = id
        this.timestamp = timestamp
        this.fields = fields
        this.radio = radio
    }
}