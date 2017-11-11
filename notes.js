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
//to solve problem of over write existing note:
// if we deleted the file data-notes then we ll have problem saving data and error ll accures so
// we ll add try

try{
    var noteString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(noteString);
} catch(e){

}

// to save notes in the array then to another file but change it to string first
// a problem accured that it over write existing note 
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