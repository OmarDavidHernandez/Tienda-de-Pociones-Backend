import {conexion} from '../db.js';

export const getPociones = async (req,res) => {
    try{
        const {id} = req.params;
        var where = (id === undefined) ? '' : 'WHERE id ="'+id+'" ';
        const [rows] = await conexion.query('SELECT * FROM pociones '+where);
        return res.json({status:true,data:rows});
    }
    catch(error){
        return res.status(500).json({message:false});
    }
};

export const savePociones = async(req,res) => {
    try {
        const {nombre,descripcion,precio,cantidad,imagen,categoria} = req.body;
        var validacion = validar(nombre,descripcion,precio);
        if(Object.entries(validacion).length === 0){
            await conexion.query(
            'INSERT INTO pociones(nombre,descripcion,precio,cantidad,imagen,categoria) VALUES (?,?,?,?,?,?)',
            [nombre,descripcion,precio,cantidad,null,categoria]);
            return res.status(200).json({status:true,message:'Poción guardada'});
        }
        else{
            return res.status(400).json([{status:false,errors:validacion}]);
        }
    }
    catch (error) {
        return res.status(500).json({status:false,errors:error.message});
    }
};
export const updatePociones = async(req,res) => {
    //console.log(req);
    try {
        const {id} = req.params;
        const {nombre,descripcion,precio,cantidad,imagen,categoria} = req.body;
        var validacion = validar(nombre,descripcion,precio);
        if(Object.entries(validacion).length === 0){
            const [result] = await conexion.query(
            'UPDATE pociones SET nombre = ? , descripcion = ? , precio = ?, cantidad = ?, imagen = ?, categoria = ? WHERE id = ?',
            [nombre,descripcion,precio,cantidad,null,categoria,id]);
            if(result.affectedRows === 0){
                return res.status(404).json({status:'error',errors:[{id:'No existe el ID'}]});
            }
            return res.status(200).json({status:true,message:'Poción modificada'});
        }
        else{
            return res.status(400).json({status:false,errors:validacion});
        }
    }
    catch (error) {
        return res.status(500).json({status:false,errors:[error.message]});
    }
};
export const deletePociones = async(req,res) => {
    try {
        const {id} = req.params;
        
        const [result] = await conexion.query('DELETE FROM pociones WHERE id = ?',[id]);
        if(result.affectedRows === 0){
            return res.status(404).json({status:'error',errors:[{id:'No existe el ID'}]});
        }
        return res.status(200).json({status:true,message:'Poción eliminada'});
    }
    catch (error) {
        return res.status(500).json({status:false,errors:[error.message]});
    }
};

function validar(nombre,descripcion,precio){
    var errors =[];
    if(nombre === undefined || nombre.trim() === '' || nombre.lenght > 100){
        errors.push(
            'El nombre de la poción NO debe estar vacío y debe tener máximo 100 caracteres'
        );
    }
    if(descripcion === undefined || descripcion.trim() === '' || descripcion.lenght > 200){
        errors.push(
            'La descripción de la poción NO debe estar vacía y debe tener máximo 200 caracteres'
        );
    }
    if(precio === undefined || precio.trim() === '' || precio.lenght > 6 || isNaN(precio)){
        errors.push(
            'El precio de la poción NO debe estar vacío y debe ser numérico'
        );
    }
    return errors;
}