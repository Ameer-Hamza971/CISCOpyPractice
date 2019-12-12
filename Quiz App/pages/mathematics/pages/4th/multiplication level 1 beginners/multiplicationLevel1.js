var answers = [];
var userAns = [];
var userInputArr = [];
var givenIds = [];
var inputIds = [];
var random = [];

function giveId() {
    for (i = 0; i < 5; i++) {
        for (var m = 1; m <= 8; m++) {
            var s = i.toString() + m.toString();
            givenIds.push(s);
        }
    }
}
giveId();

function inpId() {
    for (i = 100; i < 102; i++) {
        for (var m = 1; m <= 10; m++) {
            var s = i.toString() + m.toString();
            inputIds.push(s);
        }
    }
}
inpId();

function tableGenerator() {
    for (var i = 0; i < 5; i++) {
        document.getElementById("table1").innerHTML += `<tr><td><input type="text" id="` + i + 1 + `"/></td` + `><td><input type="text" id="` + i + 2 + `"/></td><td><input type="text" id="` + i + 3 + `"/></td` + `><td><input type="text" id="` + i + 4 + `"/></td><td><input type="text" id="` + i + 5 + `"/></td><td><input type="text" id="` + i + 6 + `"/></td><td><input type="text" id="` + i + 7 + `"/></td` + `><td><input type="text" id="` + i + 8 + `"/></td></tr>`;
    }
}
tableGenerator();

function randomNums() {
    for (i = 0; i < 5; i++) {
        for (var m = 1; m <= 8; m++) {
            var s = i.toString() + m.toString();
            nums = Math.floor(Math.random() * 10) + 1;
            document.getElementById(s).value = nums;
            answers.push(nums);
            document.getElementById(s).disabled = true;
        }
    }
}
randomNums();

var firstHalfGI = givenIds.slice(0, givenIds.length / 2);
var secondHalfGI = givenIds.slice(givenIds.length / 2, givenIds.length);
var answersHalf1 = answers.slice(0, givenIds.length / 2);
var answersHalf2 = answers.slice(givenIds.length / 2, givenIds.length);

function changer(theId) {
    var indeX = inputIds.indexOf(theId);
    document.getElementById(firstHalfGI[indeX]).className = "change";
    document.getElementById(secondHalfGI[secondHalfGI.length - indeX - 1]).className = "change";
    userAns.push(answersHalf1[indeX] * answersHalf2[indeX]);
}

function userInputs() {
    for (var i = 100; i < 102; i++) {
        document.getElementById("table2").innerHTML += `<tr><td><input type="text" class="input" id="` + i + 1 + `" onFocus="changer('` + i + 1 + `'); click();"  onblur="done('` + i + 1 + `')"/></td` + `><td><input type="text" class="input" id="` + i + 2 + `" onFocus="changer('` + i + 2 + `')"  onblur="done('` + i + 2 + `')"/></td><td><input type="text" class="input" id="` + i + 3 + `" onFocus="changer('` + i + 3 + `')"  onblur="done('` + i + 3 + `')"/></td` + `><td><input type="text" class="input" id="` + i + 4 + `" onFocus="changer('` + i + 4 + `')"  onblur="done('` + i + 4 + `')"/></td><td><input type="text" class="input" id="` + i + 5 + `" onFocus="changer('` + i + 5 + `')"  onblur="done('` + i + 5 + `')"/></td><td><input type="text" class="input" id="` + i + 6 + `" onFocus="changer('` + i + 6 + `')"  onblur="done('` + i + 6 + `')"/></td><td><input type="text" class="input" id="` + i + 7 + `" onFocus="changer('` + i + 7 + `')"  onblur="done('` + i + 7 + `')"/></td` + `><td><input type="text" class="input" id="` + i + 8 + `" onFocus="changer('` + i + 8 + `')"  onblur="done('` + i + 8 + `')"/></td><td><input type="text" class="input" id="` + i + 9 + `" onFocus="changer('` + i + 9 + `')"  onblur="done('` + i + 9 + `')"/></td><td><input type="text" class="input" id="` + i + 10 + `" onFocus="changer('` + i + 10 + `')"  onblur="done('` + i + 10 + `');"/></td></tr>`;
    }
}
userInputs();
var correct = 0;

function done(theId) {
    var indeX = inputIds.indexOf(theId);
    document.getElementById(firstHalfGI[indeX]).className = "done";
    document.getElementById(secondHalfGI[secondHalfGI.length - indeX - 1]).className = "done";
    userInputArr.push(Number(document.getElementById(theId).value));
    if (parseInt(document.getElementById(theId).value) === Number(answersHalf1[indeX]) * Number(answersHalf2[answersHalf2.length - indeX - 1])) {
        document.getElementById(theId).className = "correct";
        correct++;
    } else {
        document.getElementById(theId).className = "incorrect";

    }
}

function getResult() {
    alert(correct / 20 * 100);
}

function click(theId) {
    var time = 6
    document.getElementById(theId).innerHTML = time;
    setInterval(function() {
        time--;
        document.getElementById(theId).innerHTML = time;
        if (time === 0) { getResult(); }
    }, 10000);
}
click('counter');