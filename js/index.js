window.onload = function () {

    let seconds = 00;
    let tens = 00;
    let displaySecond = document.getElementById('seconds');
    let displayTens = document.getElementById('tens');
    let btnStart = document.getElementById('start');
    let btnStop = document.getElementById('stop');
    let btnRestart = document.getElementById('restart');
    let interVal;

    btnStart.onclick = function () {
        clearInterval(interVal);
        interVal = setInterval(startTime, 10);
        btnStart.setAttribute('disabled', true);
        btnRestart.removeAttribute('disabled');
        btnStop.removeAttribute('disabled');
    };

    btnStop.onclick = function () {
        clearInterval(interVal);
        btnStop.setAttribute('disabled', true);
        btnStart.removeAttribute('disabled');
        btnStart.innerHTML = "Continues";
    };

    btnRestart.onclick = function () {
        btnStart.removeAttribute('disabled');
        clearInterval(interVal);
        tens = 00;
        seconds = 00;
        displaySecond.innerHTML = "00";
        displayTens.innerHTML = "00";
        btnStart.innerHTML = "Start";
    };

    function startTime() {
        tens++;
        if (tens < 9) {
            displayTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            displayTens.innerHTML = tens;
        }
        if (tens == 100) {
            tens = 00;
            seconds++;
            displaySecond.innerHTML = "0" + seconds;
            displayTens.innerHTML = "00";
        }
    };
};