

// module.exports.age = 25;
const fs = require('fs')

// since we have o use these functions in more than on methods so it ll be easier to 
// make a different function for it rather than repeat it remember DRY:

var fetchNotes = () => {
 try{
    var noteString = fs.readFileSync('notes-data.json')
    return JSON.parse(noteString)
 } catch(e) {
     return [];
 }
}

var saveNotes = (notes) => {
fs.writeFileSync('notes-data.json', JSON.stringify(notes))
}

// adding and saving notes:

var addNote = (title, body) => {
var notes = fetchNotes();
var note = {
    title,
    body
};
//to solve problem of over write existing note:
// if we deleted the file data-notes then we ll have problem saving data and error ll accures so
// we ll add try

// try{
//     var noteString = fs.readFileSync('notes-data.json');
//     notes = JSON.parse(noteString);
// } catch(e){

// }

//we dont want to save the same title over the one time so we shld make function:
 var duplicate = notes.filter((note) => note.title === title);

// to save notes in the array then to another file but change it to string first
// a problem accured that it over write existing note 
//fir it to fit the duplicate 
if(duplicate.length === 0){
    notes.push(note);
    saveNotes(notes)
    return note;
} 
}


var getAll = () =>{
    return fetchNotes()
}

//read current note

var getCurrent = (title) =>{
    var notes = fetchNotes();
    var newNotes = notes.filter((note) => note.title === title);
    return newNotes[0]
}

// removing notes :

var removeNote = (title) =>{
var notes = fetchNotes();
var newNotes = notes.filter ((note) => note.title !== title)
saveNotes(newNotes);

return notes.length !== newNotes.length;
}

//debugging using n and c and repl
var log = (object) => { 
    debugger;
    console.log(`Title: ${object.title}`);
       console.log(`Body: ${object.body}`);
}

module.exports = {
    //if the key and the value is the same so wrtie it like this addNote: addNote
    addNote,
    getAll,
    getCurrent,
    removeNote,
    log
}