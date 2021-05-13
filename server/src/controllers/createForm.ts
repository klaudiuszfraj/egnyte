import db from "../db";
import Form from '../models/form';
import express, {NextFunction, Request, Response} from "express";

const firestore = db.firestore();

export const createForm = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const data = req.body;
        await firestore.collection('forms').doc().set(data);
        res.send('From added successfully')
    }catch (error) {
        res.status(400).send(error.message);
    }
}