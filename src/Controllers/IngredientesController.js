import {conexion} from '../db.js';

export const getIngredientes = async (req,res) => {
    try{
        const {id} = req.params;
        var where = (id === undefined) ? '' : 'WHERE id ="'+id+'" ';
        const [rows] = await conexion.query('SELECT * FROM ingredientes '+where);
        return res.json({status:true,data:rows});
    }
    catch(error){
        return res.status(500).json({message:'error'});
    }
};