console.log ("app.js started");


const fs = require("fs");
// const os = require("os");
// it should be written before we calling the functions in it (written before in order )
const _= require ("lodash")
const notes = require("./notes.js")

var command = process.argv[2];
console.log(`command is: ${command}`);

if (command === 'add'){
    console.log("new note added");
} else if (command === 'list'){
    console.log("list all notes");
} else if (command === 'read'){
    console.log("read current note");
} else if (command === 'delete'){
    console.log("delete current note");
} else{
    console.log ("command not recongized ")
}  




// var res = notes.addNote()
// console.log(res)

//  var user = os.userInfo()

//  fs.appendFile("greeting.txt", `Hello ${user.username} !, and your age ${notes.age}`);

//  console.log(user)
 
