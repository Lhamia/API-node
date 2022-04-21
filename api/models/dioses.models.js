const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DiosSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        rol: {
            type: String,
            required: true

        },
        
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true 
        },
        },
        { timestamps: true },
    
);

const Dios = mongoose.model('dioses', DiosSchema);
module.exports = Dios;