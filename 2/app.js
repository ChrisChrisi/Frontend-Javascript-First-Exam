"use strict";
var getTime = function () {
    var minutes = parseInt($("#minutes").val());
    var seconds = parseInt($("#seconds").val());
    if ( isNaN(minutes)){
        minutes = 0;
    }
    if (isNaN(seconds)){
        seconds = 0;
    }
    return (minutes * 60 + seconds);
};

var updateTimer = function (time) {
    var seconds = time % 60;
    var minutes = parseInt(time / 60);
    $("#minute-first-digit").text(parseInt(minutes / 10));
    $("#minute-second-digit").text(minutes % 10);
    $("#second-first-digit").text(parseInt(seconds / 10));
    $("#second-second-digit").text(seconds % 10);
};
var countUp = function (setTime) {
    var time = 0;
    var id;
    var makeCount =function(){
        if(time <setTime){
            console.log(time);
            time += 1;
            updateTimer(time);
        }else{
            clearInterval(id);
        }
    };
    id = setInterval(makeCount, 1000);
    return id;
};

var countDown = function (setTime) {
    var time = setTime;
    var id;
    var makeCount =function(){
        if(time > 0){
            console.log(time);
            time -= 1;
            updateTimer(time);
        }else{
            clearInterval(id);
        }
    };
    id = setInterval(makeCount, 1000);
    return id;
};

$(document).ready(function () {
    var intervalId;

    $("#buttons").on("click", "#count-up", function () {
       intervalId = countUp(getTime());
    });

    $("#buttons").on("click", "#count-down", function () {
        intervalId = countDown(getTime());
    });

    $("#reset").on("click", function () {
        if(intervalId){
        clearInterval(intervalId);
        }
        $("#minute-first-digit").text(0);
        $("#minute-second-digit").text(0);
        $("#second-first-digit").text(0);
        $("#second-second-digit").text(0);
    });
});
