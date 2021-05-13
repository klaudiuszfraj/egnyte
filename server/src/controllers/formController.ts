import db from "../db";
import Form from '../models/form';
import {Request, Response} from "express";

const firestore = db.firestore();


export const createForm = async (req:Request, res:Response) => {
    if (!req.body.timestamp || req.body.fields.length === 0){
        res.status(400).send('timestamp ans fields are required');
    }
    //todo::check every field
    try {
        const data:Form = req.body;
        await firestore.collection('forms').doc().set(data);
        res.send('From added successfully')
    }catch (error) {
        res.status(400).send(error.message);
    }
};

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
};

export const getOneForm = async (req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const form = await firestore.collection('forms').doc(id);
        const data = await form.get();
        if (!data.exists) {
            res.status(404).send('Form with the given ID not found');
        } else {
            res.send(data.data());
        }

    } catch (error) {
        res.status(400).send(error.message);
    }
}