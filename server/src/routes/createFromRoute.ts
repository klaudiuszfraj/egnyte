import express from "express";
import {createForm} from "../controllers/createForm";

const router = express.Router();


router.post('/', createForm);

export default router;