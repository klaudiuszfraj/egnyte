export default class Form {
    id:string;
    timestamp:number;
    fields: {
        type: string;
        name: string;
        value: string;
        checked: boolean;
    }[]
    constructor(id:string, timestamp:number, fields:{
        type: string;
        name: string;
        value: string;
        checked: boolean;
    }[]) {
        this.id = id
        this.timestamp = timestamp
        this.fields = fields
    }
}