import express from "express";
import {createForm, getAllForms} from "../controllers/formController";

const router = express.Router();


router.post('/', createForm);
router.get('/', getAllForms);

export default router;