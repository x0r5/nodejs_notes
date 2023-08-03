const express = require("express");
const router = express.Router();

router.get('/', function(req, res, next){
    //res.send("Home router test");
    res.render('home', { title: 'Home'});
})

module.exports = router;