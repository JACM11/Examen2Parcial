const { Citas } = require("../models");

class Cita{
    //listar citas
    async listar(req,res){
        const citas = await Citas.find();
        res.json('citas',{data:citas});
    }

    //agregar citas
    async add(req,res){
        await Citas.create(req.body);
        res.json('/citas')
    }

    //actualizar citas
    async actualizar(req,res){
        await Citas.update(req,res);
        res.json('/citas')
    }

    //eliminar citas
    async eliminar(req,res){
        await Citas.delete(req,res);
        res.json('/citas')
    }

    //buscar entre fechas
    async buscarentrefecha(req,res){
        await Citas.find({
            created_at: {
                $gte: ISODate("2010-04-29T00:00:00.000Z"),
                $lt: ISODate("2010-05-01T00:00:00.000Z")
            }
        });
    }

}
module.exports = Cita;