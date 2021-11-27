const StudentTil = require("./../models/StudentTil.model");
const Student = require("./../models/student.model");

exports.create = async (req, res) => {
    try {
        const { eng, uzb, rus, qr, email } = req.body;
        const user = await Student.findOne({ email: email });
        if (!user) {
            return res.status(404).json({
                error: 'User not Found'
            })
        }

        // if((eng===''||rus==='')&&(uzb===''||qr==='')){
        //     return res.status(400).json({
        //         error: 'Qatorlarni to`ldiring'
        //     })
        // }


        let newword = new StudentTil({
            eng, uzb, rus, qr, creator: user._id
        })


        await newword.save();

        res.status(201).json({
            message: 'Word saved...'
        })

    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}


exports.get = async (req, res) => {
    try {
        const {email} = req.body;
        const user = await Student.findOne({email});

        if(!user){
            return res.status(404).json({
                error: 'User not found'
            })
        }



        let dicks = await StudentTil.find({creator: user._id});

        res.status(200).json({
            message: 'lug`atlar soni: '+ dicks.length,
            dicks: dicks
        })


    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}