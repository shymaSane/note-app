console.log("notes.js started!")

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
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};
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