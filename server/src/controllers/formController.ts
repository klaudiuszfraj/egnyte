import db from "../db";
import Form from '../models/form';
import {Request, Response} from "express";

const firestore = db.firestore();


export const createForm = async (req:Request, res:Response) => {
    try {
        const data = req.body;
        await firestore.collection('forms').doc().set(data);
        res.send('From added successfully')
    }catch (error) {
        res.status(400).send(error.message);
    }
}

export const getAllForms = async (req:Request, res:Response) => {
    try {
        const forms = await firestore.collection('forms');
        const data = await forms.get();
        const formsArray: Form[] = [];
        if (data.empty) {
            res.status(404).send('No forms record');
        } else {
            data.forEach(doc => {
                const form = new Form(
                    doc.id,
                    doc.data().timestamp,
                    doc.data().fields,
                )
                if (formsArray){
                }
                formsArray.push(form);
            })
            res.send(formsArray);
        }
    }catch (error) {
        res.status(400).send(error.message);
    }
}