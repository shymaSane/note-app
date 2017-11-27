


const fs = require("fs");
// const os = require("os");
// it should be written before we calling the functions in it (written before in order )
const _= require ("lodash")
const yargs = require("yargs")

const notes = require("./notes.js")
const argv = yargs.command('add', 'Add new note',{
    title:{
        describe: 'title of note',
        demand: true,
        alias: 't'
    },
    body:{
        describe: 'body of note',
        demand: true,
        alias: 'b'
    }
})
.command('list', 'show all notes')
.command('read', 'read provided note by given its title',{
    title: {
        describe: 'title of note',
        demand: true,
        alias: 't'
    }
})
.help()
.argv

// var command = process.argv[2];
var command = argv._[0];
// console.log(`command is: ${command}`);
// console.log(`process: ${process.argv}`); >> it didnt writing it that way 
// console.log("process: ", process.argv)
console.log(" yargs:" , argv)

if (command === 'add'){
   var note = notes.addNote(argv.title, argv.body)
   if(note){
       console.log('Note added');
       notes.log(note)
   } else {
       console.log("Title already in use!!")
   }

} 

else if (command === 'list'){
   var allNotes = notes.getAll()
   allNotes.forEach((note) => notes.log(note))
} 

else if (command === 'read'){ 
    var note = notes.getCurrent(argv.title);
    var message = note ?`your note is: ${note.body} `: "note not found"
    console.log(message)
} 

else if (command === 'delete'){
    var filtered = notes.removeNote(argv.title)
    var message = filtered ? "Note was removed" : "Note is not found!";
    console.log(message)
} 

else {
    console.log ("command not recongized ")
}  




// var res = notes.addNote()
// console.log(res)

//  var user = os.userInfo()

//  fs.appendFile("greeting.txt", `Hello ${user.username} !, and your age ${notes.age}`);

//  console.log(user)
 
