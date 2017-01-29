"use strict";

//progress bars overlay
var radius = 90,
    padding = 50,
    radians = 2 * Math.PI;

var dimension = 2 * radius + 2 * padding,
    points = 50,
    percentage = 0.62;

var angle = d3.scale.linear().domain([0, points - 1]).range([0, radians]);

var line = d3.svg.line.radial().interpolate("basis").tension(0).radius(radius).angle(function (d, i) {
  if (i < points * percentage + 1) {
    return angle(i);
  }
});

var svg = d3.select(".outer-circle").append("svg").attr("width", dimension).attr("height", 200).append("g");

svg.append("path").datum(d3.range(points)).attr("class", "line").attr("fill", "none").attr("stroke-dasharray", "7 3").attr("stroke-width", "25px").attr("stroke", "#1F2025") //#1F2025
.attr("d", line).attr("transform", "translate(135,106) rotate(-110)");

//progress bars
var elapsedPercent = 0;
var r = 100;
var pi = Math.PI;
var green1 = "#B8D087";
var green2 = "#00996D";
var data = {
  upper: calcPercent(0),
  lower: calcPercent(elapsedPercent)
};
var progress = 0;

function calcPercent(percent) {
  return [percent, 100 - percent];
}

var canvas = d3.select(".inner-circle").append("svg").attr("height", r + 100).attr("width", r + 150);

var group = canvas.append("g").attr("transform", "translate(" + 120 + "," + 110 + ")");

var arc = d3.svg.arc().innerRadius(r / 1.2).outerRadius(r);

//returns objects based on data
var pie = d3.layout.pie().sort(null).value(function (data) {
  return data;
}).startAngle(-110 * (pi / 180)).endAngle(110 * (pi / 180));

var arcs = group.selectAll(".arc").data(pie(data.lower)).enter().append("g").attr("class", "arc");

var defs = canvas.append("defs").append("linearGradient").attr("id", "greenGradient").attr("gradientUnits", "objectBoundingBox").attr("x1", "0").attr("y1", "0").attr("x2", "1").attr("y2", "1");

defs.append("stop").attr("offset", "0%").attr("stop-color", green1);
defs.append("stop").attr("offset", "100%").attr("stop-color", green2);

var path = arcs.append("path").attr("class", function (data, index) {
  return "progress-color" + index;
}).attr("d", arc);

/////////timer
var startButton = document.getElementById("start-timer");
var resetButton = document.getElementById("reset-timer");
var timeDisplay = document.getElementById("timer-display-time");
var statusDisplay = document.getElementById("status");
var spinner = document.getElementById("spineroo");
var sessionTimer = parseInt(document.getElementById("set-timer-display").innerHTML, 10);
console.log(sessionTimer);
var breakTimer = parseInt(document.getElementById("set-break-display").innerHTML, 10);
elapsedPercent = 0;
var seconds = 60;
var minutes = undefined;
var timer = undefined;
var breakTime = false;

//start timer
startButton.addEventListener('click', function () {
  timer = setInterval(timerFn, 1000);
  //console.log("button: " + startButton.innerHTML.trim() + " | session: " + sessionTimer + " | break: " + breakTimer);
  startButton.classList.toggle("hidden");
  resetButton.classList.toggle("hidden");
  spinner.classList.toggle("spinning");
  statusDisplay.innerHTML = "In session!";
  minutes = sessionTimer - 1;
  function timerFn() {
    seconds--;
    //console.log("time: " +minutes + ":" + seconds + " | percent: " + elapsedPercent);
    progress();
    if (seconds < 10 && minutes < 10) {
      timeDisplay.innerHTML = "0" + minutes + ":0" + seconds;
    } else if (seconds < 10) {
      timeDisplay.innerHTML = minutes + ":0" + seconds;
    } else if (minutes < 10) {
      timeDisplay.innerHTML = "0" + minutes + ":" + seconds;
    } else {
      timeDisplay.innerHTML = minutes + ":" + seconds;
    }
    if (seconds === 0 && minutes === 0) {
      if (breakTime === false) {
        breakTime = true;
        minutes = breakTimer - 1;
        seconds = 60;
        elapsedPercent = 0;
        statusDisplay.innerHTML = "Take a break!";
        console.log("break time");
      } else {
        breakTime = false;
        minutes = sessionTimer - 1;
        seconds = 60;
        elapsedPercent = 0;
        statusDisplay.innerHTML = "In session!";
        console.log("work time");
      }
    }
    if (seconds === 0) {
      minutes--;
      seconds = 60;
    }
  };
  function progress() {
    var secondsElapsed = minutes * 60 + seconds;
    var totalSeconds = undefined;
    if (breakTime === true) {
      totalSeconds = breakTimer * 60;
    } else {
      totalSeconds = sessionTimer * 60;
    }
    elapsedPercent = (1 - secondsElapsed / totalSeconds) * 100;
    path.data(pie(calcPercent(elapsedPercent))).attr("d", arc);
  }
});

//reset timer
resetButton.addEventListener('click', function () {
  startButton.classList.toggle("hidden");
  resetButton.classList.toggle("hidden");
  spinner.classList.toggle("spinning");
  clearInterval(timer);
  seconds = 60;
  minutes = sessionTimer - 1;
  elapsedPercent = 0;
  timeDisplay.innerHTML = sessionTimer + ":00";
  statusDisplay.innerHTML = "Reset!";
  console.log("reset");
  path.data(pie(calcPercent(elapsedPercent))).attr("d", arc);
});

//timer settings
var settingOptions = {
  "add-break": function addBreak() {
    if (breakTimer < 51) {
      var _timer = breakTimer++;
      document.getElementById("set-break-display").innerHTML = _timer + 1;
    }
  },
  "minus-break": function minusBreak() {
    if (breakTimer > 5) {
      var _timer2 = breakTimer--;
      document.getElementById("set-break-display").innerHTML = _timer2 - 1;
    }
  },
  "add-timer": function addTimer() {
    if (sessionTimer < 99) {
      var _timer3 = sessionTimer++;
      document.getElementById("set-timer-display").innerHTML = _timer3 + 1;
      document.getElementById("timer-display-time").innerHTML = _timer3 + 1 + ":00";
    }
  },
  "minus-timer": function minusTimer() {
    if (sessionTimer > 25) {
      var _timer4 = sessionTimer--;
      document.getElementById("set-timer-display").innerHTML = _timer4 - 1;
      document.getElementById("timer-display-time").innerHTML = _timer4 - 1 + ":00";
    }
  }
};

var buttonSettings = document.getElementsByClassName("setting-button");

var _loop = function _loop(i) {
  buttonSettings[i].addEventListener("click", function () {
    var operation = buttonSettings[i].getAttribute("id");
    settingOptions[operation]();
    startButton.classList.remove("hidden");
    resetButton.classList.add("hidden");
    spinner.classList.remove("spinning");
    clearInterval(timer);
    seconds = 60;
    minutes = sessionTimer - 1;
    elapsedPercent = 0;
    console.log("setting up");
  });
};

for (var i = 0; i < buttonSettings.length; i++) {
  _loop(i);
}
