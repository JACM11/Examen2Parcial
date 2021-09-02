const { Citas } = require("../models");

class Cita{
    //listar citas
    async listar(req,res){
        const citas = await Citas.find();
        res.render('citas',{data:citas});
    }

    //agregar citas
    async add(req,res){
        await Citas.create(req.body);
        res.redirect('/citas')
    }

    //actualizar citas
    async actualizar(req,res){
        await Citas.update(req,res);
        res.redirect('/citas')
    }

    //eliminar citas
    async eliminar(req,res){
        await Citas.delete(req,res);
        res.redirect('/citas')
    }

    //buscar entre fechas
    async buscarentrefecha(req,res){
        await Citas.find({
            created_at: {
                $gte: req.body.fecha_inicio,
                $lt: req.body.fecha_fin
            }
        });
    }
}
module.exports = Cita;

