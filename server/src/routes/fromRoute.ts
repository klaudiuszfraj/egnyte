import express from "express";
import {createForm, getAllForms} from "../controllers/createForm";

const router = express.Router();


router.post('/', createForm);
router.get('/', getAllForms);

export default router;