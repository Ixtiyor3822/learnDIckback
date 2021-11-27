const Student = require("./../models/student.model");

exports.createStudent = async(req,res) =>{
    try {
        const {email, photoUrl, displayName, phoneNumber} = req.body;
        console.log(email)
        const tekshiruv = await Student.findOne({email:email});
        console.log(tekshiruv)
        if(tekshiruv !== null){
            return res.status(400).json({
                message: 'User created'
            })
        }
        let newStudent;

        if(phoneNumber===null){
           newStudent = new Student({email, photoUrl, displayName, phoneNumber: ''})
        }


        await newStudent.save((err,doc) =>{
            if(err){    
                console.log(err)
                res.status(400).json({
                    error: err.message
                })
            }
            res.status(201).json({
                message: 'User created !'
            })
        })
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

exports.getStudents = async(req,res) =>{
    try {
        const students = await Student.find();
        // console.log(students)
    
        res.status(200).json(students)
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}

exports.getStudent = async(req,res) =>{
    try {
        const email = req.params.email
        const students = await  Student.findOne({email: email});
        // console.log(students)
    
        res.status(200).json(students)
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
}