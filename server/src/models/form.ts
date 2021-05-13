export default class Form {
    timestamp:number;
    fields: {
        type: string;
        name: string;
        value: string;
        checked: boolean;
    }[]
    id?:string;
    constructor(timestamp:number, fields:{
        type: string;
        name: string;
        value: string;
        checked: boolean;
    }[], id?:string,) {
        this.id = id
        this.timestamp = timestamp
        this.fields = fields
    }
}