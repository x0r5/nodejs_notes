const mongoose = require('mongoose');

const server = '127.0.0.1:27017';
const database = 'notes_app';

mongoose
    .connect(`mongodb://${server}/${database}`)
    .then(()=> {
        console.log("MongoDB connected.");
    })
    .catch((error)=> {
        console.log('MongoDB connection error', error);
    })


const notesSchema = new mongoose.Schema({
    title: {type: String, required: true}
});

const Note = mongoose.model('Note', notesSchema);






const createNote = ()=>{
    console.log('createNote called!');
    const note1 = new Note({
        title: 'test note here'
    });
    note1.save()
        .then((note1 => console.log(note1)))
        .catch(error=>console.log(error));
}

module.exports = {createNote}