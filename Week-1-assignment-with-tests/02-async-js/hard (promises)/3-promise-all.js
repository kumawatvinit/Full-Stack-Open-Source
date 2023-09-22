/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Print how long it took for all 3 promises to resolve.
 */


function waitOneSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("After 1 sec");
            resolve();
        }, 1000);
    });
};

function waitTwoSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("After 2 sec");
            resolve();
        }, 2000);
    });
};

function waitThreeSecond() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("After 3 sec");
            resolve();
        }, 3000);
    });
};

function calculateTime() {
    console.log("Start....");
    let start = Date.now();

    Promise.all([waitOneSecond(), waitTwoSecond(), waitThreeSecond()])
        .then(() => {
            console.log("All promises resolved");
            console.log((Date.now()-start)/1000, "Seconds later!");
        })
        .catch(() => {
            console.log("Promise rejected");
        });
};

calculateTime();