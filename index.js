const express = require("express");


const app = express();
const port = 3000;
// app.get("/", (req, res) => {
//     res.send("Hello World!");
// });

var homeRouter = require('./routes/home');
app.use('/', homeRouter);

app.listen(port, () => {
    console.log("server started");
})