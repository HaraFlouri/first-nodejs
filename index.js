const fs = require("node:fs");
const { callbackify } = require("node:util");

//This sync behaviour will block the main thread in case of a big size file
const fileContents = fs.readFileSync("./file.txt", "utf-8");
console.log(fileContents);

//Callback pattern
fs.readFile("./file.txt", "utf-8", (error, data) => {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});

//Create a file with sync behaviour
fs.writeFileSync("./greet.txt", "Hello world");

//This will overwrite the text inside the greet.txt and it is asyncronous as when the action finish it will update the console log 
fs.writeFile("./greet.txt", "Hello Hara", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("File written");
  }
});
