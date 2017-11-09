console.log ("app.js started");


const fs = require("fs");
// const os = require("os");
// it should be written before we calling the functions in it (written before in order )
const _= require ("lodash")
const yargs = require("yargs")

const notes = require("./notes.js")
const argv = yargs.argv

// var command = process.argv[2];
var command = argv._[0];
console.log(`command is: ${command}`);
// console.log(`process: ${process.argv}`); >> it didnt writing it that way 
console.log("process: ", process.argv)
console.log(" yargs:" , argv)

if (command === 'add'){
    notes.addNote(argv.title, argv.body)
} else if (command === 'list'){
   notes.getAll()
} else if (command === 'read'){ 
    notes.getCurrent(argv.title)
} else if (command === 'delete'){
    notes.removeNote(argv.title)
} else{
    console.log ("command not recongized ")
}  




// var res = notes.addNote()
// console.log(res)

//  var user = os.userInfo()

//  fs.appendFile("greeting.txt", `Hello ${user.username} !, and your age ${notes.age}`);

//  console.log(user)
 
