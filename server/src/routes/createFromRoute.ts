import express from "express";
import {addForm} from "../controllers/newForm";

const router = express.Router();


router.post('/', addForm);

export default router;