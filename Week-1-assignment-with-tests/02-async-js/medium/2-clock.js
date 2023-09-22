/*
Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
clock that shows you the current machine time?

Can you make it so that it updates every second, and shows time in the following formats - 

 - HH:MM::SS (Eg. 13:45:23)

 - HH:MM::SS AM/PM (Eg 01:45:23 PM)
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
    console.clear();
    console.log(cal);


    // document.getElementById('clock').textContent = cal;
    // document.getElementById('clock-ampm').textContent = cal + ' ' + meridiem;
}

setInterval(print, 1000);