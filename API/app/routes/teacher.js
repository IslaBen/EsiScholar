const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher');


// get a list of teachers from db
router.get('/teachers',teacherController.readAll);

// get a teacher by id from fb

router.get('/teachers/:id',teacherController.readById)

// add new teacher to db
router.post('/teachers',teacherController.create);

// update teacher general info in the db
router.put('/teachers/genInfo/:id',teacherController.updateGenInfoById)

// update teacher image in the db
router.put('/teachers/image/:id',teacherController.updateImageById)

// delete a teacher from db
router.delete('/teachers/:id',teacherController.delete);

// find teacher by attribute
router.get('/teachers/:attribute/:value',teacherController.findByAttribut)

module.exports = router;


