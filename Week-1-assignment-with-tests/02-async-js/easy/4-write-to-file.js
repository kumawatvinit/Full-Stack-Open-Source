/*
## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.
*/

const fs = require('fs');

// fs.writeFile('D:\\v\\Projects\\all-assignments\\week-1\\Week-1-assignment-with-tests\\02-async-js\\easy\\b.txt', 'Hello World!', (err) => {
//     if(err) throw err;

//     console.log('File written successfully');
// });



// how to append to a file instead of overwriting it?

fs.writeFile('D:\\v\\Projects\\all-assignments\\week-1\\Week-1-assignment-with-tests\\02-async-js\\easy\\b.txt', 'Hello World!', {flag: 'a'}, (err) => {
    if(err) throw err;
    
    console.log('File written successfully from append');
});