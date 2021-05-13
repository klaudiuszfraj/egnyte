import express from "express";
import {createForm, getAllForms, getOneForm} from "../controllers/formController";

const router = express.Router();


router.post('/', createForm);
router.get('/', getAllForms);
router.get('/:id', getOneForm);

export default router;