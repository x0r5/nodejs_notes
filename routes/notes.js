const express = require("express");
const router = express.Router();
const {createNote} = require('../database');

router.get('/', function(req, res, next){
    createNote();
    res.render('notes', {title: 'Notes'});
})

module.exports = router;