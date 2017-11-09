console.log("notes.js started!")

// module.exports.age = 25;

var addNote = (title, body) => {
console.log("new note added", title, body)
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