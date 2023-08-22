const express = require("express");
const path = require('path');

const app = express();
const port = 3000;
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

//frontend libraries
app.use('/css', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, 'static')));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

var homeRouter = require('./routes/home');
var notesRouter = require('./routes/notes');
app.use('/', homeRouter);
app.use('/notes', notesRouter);

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.get("/api/howto", (req, res)=>{
    const replyObject = {
        title: "api description",
        mainPage: "/api/howto"
    }

    res.send(JSON.stringify(replyObject));
})

app.post('/api/notes',(req, res) => {
    console.log('post called on notes');
    console.log(req.body);
})

app.listen(port, () => {
    console.log("server started");
})