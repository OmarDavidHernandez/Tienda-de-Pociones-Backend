import expres from 'express';
import morgan from 'morgan';
import cors from 'cors';
//import multer from 'multer';
import pociones from './Routes/pociones.routes.js';
import ingredientes from './Routes/ingredientes.routes.js';
const app = expres();
app.use(cors());
app.use(morgan('dev'));
app.use(expres.json());
app.use('/',pociones);
app.use('/',ingredientes);

app.use( (req,res,next) => {
    res.status(404).json({message:'Página no encontrada'});
});

export default app;