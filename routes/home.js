const express = require("express");
const router = express.Router();

router.get('/', function(req, res, next){
    //res.send("Home router test");
    let noteList = getLatestNotes();
    res.render('home', { title: 'Home', noteList});
})


function getLatestNotes(){
    //without db
    let noteList = [
        {Title: "First", CreatedDate: new Date(2023,8,10), Text: "Hello there, General Kenobi."},
        {Title: "Second", CreatedDate: new Date(2023,8,11), Text: "Hello there, General Kenobi 2."}
    ];

    return noteList;
}

module.exports = router;