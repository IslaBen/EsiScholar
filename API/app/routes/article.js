const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');



// get a list of articles from db
router.get('/articles',articleController.readAll);

// get a article by id from fb

router.get('/articles/:id',articleController.readById)

// find article by attribute
router.get('/articles/:attribute/:value',articleController.findByAttribut)


module.exports = router;
