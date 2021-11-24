const router = require("express").Router();
const { createStudent, getStudents } = require("./../controllers/student.controller");

router.post('/create', createStudent)
router.get('/get',getStudents)


module.exports = router;