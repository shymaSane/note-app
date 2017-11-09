console.log("notes.js started!")

// module.exports.age = 25;

var addNote = (title, body) => {
console.log("new note added", title, body)
}

module.exports = {
    //if the key and the value is the same so wrtie it like this addNote: addNote
    addNote
}