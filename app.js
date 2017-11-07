console.log ("app.js started");


const fs = require("fs");
const os = require("os");
const notes = require("./notes.js")

var res = notes.addNote()
console.log(res)

//  var user = os.userInfo()

//  fs.appendFile("greeting.txt", `Hello ${user.username} !, and your age ${notes.age}`);

// //  console.log(user)
