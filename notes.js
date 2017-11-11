console.log("notes.js started!")

// module.exports.age = 25;
const fs = require('fs')

// adding and saving notes:

var addNote = (title, body) => {
var notes = [];
var note = {
    title,
    body
}
notes.push(note);
fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}


var getAll = () =>{
    console.log("getting all notes")
}
var getCurrent = (title) =>{
    console.log("reading note", title)
}
var removeNote= (title) =>{
console.log("removing note", title)
}

module.exports = {
    //if the key and the value is the same so wrtie it like this addNote: addNote
    addNote,
    getAll,
    getCurrent,
    removeNote
}