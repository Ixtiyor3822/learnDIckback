const Til = require("./../models/til.model");

exports.create = async (req,res) =>{
    try {
        
        const {eng, rus, uzb, qr,descriptionuzb, descriptionqr} = req.body;

        const word = new Til({
            eng, rus, uzb, qr, descriptionuzb, descriptionqr
        })

        await word.save((err, data) => {
            if(err){
                res.status(400).json({error: err})
            }
            res.status(201).json(data)
        })

    } catch (e) {
        res.status(500).json({error: e.message})
    }
}

exports.get = async (req,res) =>{
    try {
        const words = await Til.find();
        res.status(200).json(words)
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}

exports.update = async (req,res) =>{
    try {
        
        const id = req.params.id;

        const word = await Til.findByIdAndUpdate(id, req.body)

        await word.save((err, data) =>{
            if(err){
                res.status(400).json({error: err})
            }
            res.status(200).json(data)
        })

    } catch (e) {
        res.status(500).json({error: e.message})
    }
}

exports.getOne = async (req,res) =>{
    try {
        const id = req.params.id;

        const word = await Til.findById(id);

        res.status(200).json(word)

    } catch (e) {
        res.status(500).json({error: e.message})
    }
}