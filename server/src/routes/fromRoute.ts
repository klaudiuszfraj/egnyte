import express from "express";
import {createForm, getAllForms, getOneForm, updateForm} from "../controllers/formController";

const router = express.Router();


router.post('/', createForm);
router.get('/', getAllForms);
router.get('/:id', getOneForm);
router.put('/:id', updateForm);

export default router;