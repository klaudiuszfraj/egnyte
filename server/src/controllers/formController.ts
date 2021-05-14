import firestore from "../db";
import Form from '../models/form';
import {Request, Response} from "express";
import {getAllFromDatabase, updateFormInDatabase} from "../utilityFunctions";


export const createForm = async (req:Request, res:Response) => {
    if (!req.body.timestamp || req.body.fields.length === 0){
        res.status(400).send('timestamp ans fields are required');
    }
    //todo::check every field, validate id for other methods
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
        const formsArray = await getAllFromDatabase();
        res.send(formsArray);
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
};

export const updateForm = async (req:Request, res:Response) => {
    try {
        const id = req.params.id;
        const data = req.body;
        await updateFormInDatabase(id, data);
        res.send('Form record updated successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const deleteForm = async (req:Request, res:Response) => {
  try {
    const id = req.params.id;
    await firestore.collection('forms').doc(id).delete();
    res.send('Record deleted successfully')
  } catch (error) {
      res.status(400).send(error.message);
  }
};