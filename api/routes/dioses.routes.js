const express = require('express')
const router = express.Router();
const Dios = require('../models/dioses.models')


router.get('/', async (req, res, next) => {
    try{
        const dioses = await Dios.find();
        return res.status(200).json(dioses);
    }catch (error){
        return next(error);
    }
});

router.get('/:_id', async (req, res, next) => {
    const dios = await Dios.findById(req.params._id);

    try{
        return res.status(200).json(dios)
    } catch(error){
        return next(error)
    }
    
    });
    router.get('/name/:name', async (req, res, next) => {
        const {name} = req.params;
    
        try {
            const diosByName = await Dios.find({ name });
            return res.status(200).json(diosByName);
        } catch (err) {
            return next(error);
        }
    });



router.post('/createDios', async (req, res, next) =>{
    try{
        const nuevoDios = new Dios ({
            name: req.body.name,
            rol: req.body.rol,
            description: req.body.description,
            image: req.body.image,
        });

        const diosCreado = await nuevoDios.save();
        return res.status(201).json(diosCreado);
    }catch (error){
        next(error);
    }
});


module.exports = router;