let bruh = 0;

function addbruh() {
    event.preventDefault();
    bruh = bruh + 1
    console.log(bruh + 1);
    document.getElementById('counter').innerText = 'bruhs = ' + bruh;
    if(bruh === 420) {
        document.getElementById('firstrank').innerText = 'My wife left and took the kids!!!';
    }
    if(bruh === 666) {
        document.getElementById('secondrank').innerText = 'the Bruh Devil!';
    }
    if(bruh === 1000) {
        document.getElementById('thirdrank').innerText = 'Dedication!'
    }
    if(bruh === 2000) {
        document.getElementById('fourthrank').innerText = 'Deication II!';
    }
    if(bruh === 3000) {
        document.getElementById('fifthrank').innerText = 'God of the Bruhs!'
    }
    if(bruh === 5000) {
        document.getElementById('6rank').innerText = 'Creative Mode Bruh!';
    }
    if(bruh === 7000) {
        document.getElementById('7rank').innerText = 'Supreme Bruh!'
    }
    if(bruh === 10000) {
        document.getElementById('8rank').innerText = 'Native Bruh!';
    }
    if(bruh === 15000) {
        document.getElementById('9rank').innerText = 'Beanos!'
    }
    if(bruh === 20000) {
        document.getElementById('10rank').innerText = 'Bruh-nos!';
    }
    if(bruh === 50000) {
        document.getElementById('11rank').innerText = 'How did we get here?!';
    }
    if(bruh === 75000) {
        document.getElementById('12rank').innerText = 'Are we there yet?!';
    }
    if(bruh === 100000) {
        document.getElementById('13rank').innerText = 'Allen, please add a rank title';
    }
    if(bruh === 9223372036854775807) {
        document.getElementById('14rank').innerText = 'you Little Fuckin Hacker!';
    }
}