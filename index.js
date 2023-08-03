const express = require("express");
const path = require('path');

const app = express();
const port = 3000;
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

var homeRouter = require('./routes/home');
var servicesRouter = require('./routes/services');
app.use('/', homeRouter);
app.use('/services', servicesRouter);

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');

app.listen(port, () => {
    console.log("server started");
})