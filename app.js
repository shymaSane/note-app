console.log ("it started");


const fs = require("fs");
const os = require("os")


 var user = os.userInfo()

 fs.appendFile("greeting.txt", `Hello ${user.username} !`);

//  console.log(user)
