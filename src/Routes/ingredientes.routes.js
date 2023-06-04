import { Router } from "express";
import { getIngredientes } from "../Controllers/IngredientesController.js";
const router = Router();
router.get('/ingredientes',getIngredientes);
router.get('/ingredientes/:id',getIngredientes);
//router.post('/ingredientes',saveIngredientes);
//router.put('/ingredientes/:id',updateIngredientes);
//router.delete('/ingredientes/:id',deleteIngredientes);

export default router;
//,saveIngredientes,updateIngredientes,deleteIngredientes