// var obj = {
//     name: "shyma",
//     age: 25
// }
// // from object to string:
// var person = JSON.stringify(obj)

// console.log(typeof person)
// console.log(person)
// // from string to object:
// var person1 = JSON.parse(person)

// console.log(typeof person1)
// console.log(person1)


var originalNote = {
    title: "secret",
    body: "my little secret"
}
// sending object to store it
const fs = require('fs')

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString)

// bring the object back 

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);

console.log(note)
console.log(note.title)
