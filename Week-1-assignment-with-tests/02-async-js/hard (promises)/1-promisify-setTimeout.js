/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function print() {
    let now = new Date();

    let hrs = now.getHours();
    let min = now.getMinutes();
    let secs = now.getSeconds();

    let meridiem = (hrs>=12)? 'PM': 'AM';

    hrs%= 12;
    hrs = hrs? hrs: 12;

    hrs = hrs<10? '0'+hrs: hrs;
    min = min<10? '0'+min: min;
    secs = secs<10? '0'+secs: secs;

    let cal = hrs+":"+min+":"+secs;
    
    console.log(cal);
}

function wait(n) {
    return new Promise(() => {
        setTimeout(() => {
            console.log("Promised resolved at ");
            print();
        }, n*1000);
    }, () => {
        console.log("Promise rejected")
    });
}

console.log("Start....");
print();

wait(5);