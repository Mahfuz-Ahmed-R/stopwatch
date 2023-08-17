var seconds = 00;
var mintues = 00;
var OutputSeconds = document .getElementById("seconds");
var OutputMintues = document.getElementById("mintues");
var buttonStart = document.getElementById("strtBtn");
var buttonStop = document.getElementById("stpBtn");
var buttonReset = document.getElementById("rstBtn");
var Interval;


buttonStart.addEventListener("click", function() {
    clearInterval(Interval);
    Interval = setInterval(startTime, 10);
});

buttonStop.addEventListener("click", function() {
    clearInterval(Interval);
});

buttonReset.addEventListener("click", function() {
    clearInterval(Interval);
    mintues = "00";
    seconds = "00";
    OutputSeconds.innerHTML = seconds;
    OutputMintues.innerHTML = mintues;
});

function startTime() {
    mintues++;
    if (mintues <= 9) {
        OutputMintues.innerHTML = "0" + mintues;
    }

if (mintues > 9) {
    OutputMintues.innerHTML = mintues;
}

if (mintues > 99) {
    seconds++;
    OutputSeconds.innerHTML = "0" + seconds;
    mintues = 0;
    OutputMintues.innerHTML = "0" + mintues;
}

if (seconds > 9) {
    OutputSeconds.innerHTML = seconds;
}
}

// made by mahfuzz