/*
## Reading the contents of a file

Write code to read contents of a file and print it to the console. 
You can use the fs library to as a black box, the goal is to understand async tasks. 
Try to do an expensive operation below the file read and see how it affects the output. 
Make the expensive operation more and more expensive and see how it affects the output. 
*/

const fs = require('fs');

fs.readFile('D:\\v\\Projects\\all-assignments\\week-1\\Week-1-assignment-with-tests\\02-async-js\\easy\\a.txt', 'utf8', (err, data) => {
    if(err) throw err;

    console.log("Start....\n");
    console.log(data);
    console.log("\nEnd....");
});

console.log('Hello');

function calSum(n) {
    let sum = 0;

    for(let i=1; i<=n; i++) sum+= i;

    return sum;
}

console.log(calSum(1000000));

// while call stack is busy calculatong sum, the file read callback is waiting in the event queue
// once the call stack is free, the event loop will push the callback to the call stack
// console.log(calSum(10000009000));