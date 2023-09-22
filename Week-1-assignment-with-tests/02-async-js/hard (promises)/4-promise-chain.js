/*
 * Write 3 different functions that return promises that resolve after 1, 2, and 3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Print out the time it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
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

async function calculateTime() {
    let start = Date.now();

    try {
        await waitOneSecond();
        await waitTwoSecond();
        await waitThreeSecond();

        console.log((Date.now()-start)/1000, "Secss...");
    }
    catch(err) {
        console.error(err);
    }
}

function calculateTime() {
    let start = Date.now();

    waitOneSecond()
        .then(() => waitTwoSecond())
        .then(() => waitThreeSecond())
        .then(() => {
            console.log("Resolved all promises", (Date.now()-start)/1000, "Seconds later");
        })
        .catch((err) => {
            console.error(err);
        });
}


calculateTime();