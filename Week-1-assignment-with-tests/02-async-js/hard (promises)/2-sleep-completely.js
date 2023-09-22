/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 */

function sleep (seconds) {
    let start = Date.now();

    while(Date.now()-start < seconds) {
        // do nthng
    }
}

console.log("Before sleep");
let start = Date.now();
sleep(2000);
console.log((Date.now()-start)/1000, "secs", "After sleep");
