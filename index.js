const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json())
dotenv.config()

mongoose.connect(process.env.DB)
    .then(()=> console.log("Bazaga bog`lanildi"))
    .catch(err=> console.log(err))


app.use("/user", require("./routes/user.router"));
app.use("/word", require("./routes/word.router"));
app.use("/student", require("./routes/student.router"));
app.use("/dick", require("./routes/studentTil.router"));

app.use((req,res, next)=>{
    let error = new Error("Not Found");
    error.status = 404;
    next(error);
})

app.use((error, req,res,next) =>{
    
    res.status(error.status || 500).json({error: error.message})
    
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))