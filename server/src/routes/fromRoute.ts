import express from "express";
import {createForm, deleteForm, getAllForms, getOneForm, updateForm} from "../controllers/formController";

const router = express.Router();


router.post('/', createForm);
router.get('/', getAllForms);
router.get('/:id', getOneForm);
router.put('/:id', updateForm);
router.delete('/:id', deleteForm);

export default router;