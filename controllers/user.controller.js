const User = require("./../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");


exports.register = async (req,res) =>{
    try {

        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (user) {
            return res.status(401).json({
                error: "Ushbu foydalanuvchi allaqachon ro`yhatdan o`tgan."
            })
        }

        const hash = await bcrypt.hash(password, 7)

        const newuser = new User({
            email,
            password: hash,
        })

        await newuser.save((err, data) => {
            if (err) {
                // console.log(err)
                res.status(401).json({error: err})
            }
            res.status(201).json({
                message: "Foydalanuvchi yaratildi.",
                data: data,
                success: true
            })
        })


    } catch (e) {
        res.status(500).json({error: e.message})
    }
}

exports.login = async (req,res) =>{
    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                error: "Email yoki parol noto`g`ri",
                success: false
            })
        }
        const prover = await bcrypt.compare(password, user.password)
        if (prover == false) {
            return res.status(401).json({
                error: "Email yoki parol noto`g`ri",
                success: false
            })
        }


        const token = jwt.sign({
                user: user
            },
            process.env.TOKEN, {
                expiresIn: '1h'
            })


        res.status(200).json({
            message: "Tizimga yo`naltirilayapdi",
            token: token,
            success: true
        })

        
    } catch (e) {
        res.status(500).json({error: e.message})
    }
}