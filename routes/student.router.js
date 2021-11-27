const router = require("express").Router();
const { createStudent, getStudents, getStudent } = require("./../controllers/student.controller");

router.post('/create', createStudent)
router.get('/get',getStudents)
router.get('/getOne/:email', getStudent )

module.exports = router;