import { Router } from "express";
import { getPociones,savePociones,updatePociones,deletePociones } from "../Controllers/PocionesController.js";
const router = Router();
router.get('/pociones',getPociones);
router.get('/pociones/:id',getPociones);
router.post('/pociones',savePociones);
router.put('/pociones/:id',updatePociones);
router.delete('/pociones/:id',deletePociones);

export default router;
