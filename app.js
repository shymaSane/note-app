console.log ("app.js started");


const fs = require("fs");
const os = require("os");
// it should be written before we calling the functions in it (written before in order )
const _= require ("lodash")
const notes = require("./notes.js")

console.log(_.isString(true))
console.log(_.isString("SHYMA"))

// var res = notes.addNote()
// console.log(res)

//  var user = os.userInfo()

//  fs.appendFile("greeting.txt", `Hello ${user.username} !, and your age ${notes.age}`);

// //  console.log(user)
 