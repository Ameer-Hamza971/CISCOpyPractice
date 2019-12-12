var divisorsArr = [];
var dividentsArr = [];
var actualAns = [];
var userInputs = [];
var inputIDs = [];

function divisors() {
    var genDivisors = Math.floor(Math.random() * 10) + 1;
    return genDivisors;
}

function dividents() {
    var genDividents = Math.floor(Math.random() * 10) + 1;
    return genDividents;
}

function genDivisorUls(theId) {
    for (var i = 0; i < 15; i++) {
        var num = Math.floor(Math.random() * 10) + 1;
        divisorsArr.push(num);
        document.getElementById(theId).innerHTML += `<td id="drr` + i + `"><input type="text" id="dr` + i + `" value="` + num + `"></td>`;
        var ID = "dr" + i;
        document.getElementById(ID).disabled = true;
    }
}

function genDividentsArr() {
    for (var i = 0; i < 15; i++) {
        var num = divisorsArr[i] * (Math.floor(Math.random() * 350) + 1);
        dividentsArr.push(num);
    }
}

// genDividentsArr();

function genDividenttUIs(theId) {
    genDividentsArr();
    for (var i = dividentsArr.length - 1; i >= 0; i--) {
        document.getElementById(theId).innerHTML += `<td id="dtt` + i + `"><input type="text" id="dt` + i + `" value="` + dividentsArr[i] + `"></td>`;
        var ID = "dt" + i;
        document.getElementById(ID).disabled = true;
    }
}

function genUserInps(theId) {
    for (var i = 0; i < 15; i++) {
        document.getElementById(theId).innerHTML += `<td><input type="text" id="` + i + `" autocomplete="off" onfocus="userAnsCHECK('` + i + `')" onblur="resultBuilder('` + i + `')"></td>`;
    }
}

function divide() {
    for (var i = 0; i < divisorsArr.length; i++) {
        var result = dividentsArr[i] / divisorsArr[i];
        actualAns.push(result);
    }
}

function userAnsCHECK(theId) {
    var ID = Number(document.getElementById(theId).getAttribute("id"));
    var id1 = "drr" + ID;
    var id2 = "dtt" + ID;
    document.getElementById(id1).style.transform = "scale(1.5)";
    document.getElementById(id1).style.backgroundColor = "transparent";
    document.getElementById(id1).style.color = "#66FCF1";
    document.getElementById(id1).style.boxShadow = "0 2px 10px yellowgreen";
    document.getElementById(id2).style.transform = "scale(1.5)";
    document.getElementById(id2).style.backgroundColor = "transparent";
    document.getElementById(id2).style.color = "#66FCF1";
    document.getElementById(id2).style.boxShadow = "0 2px 10px yellowgreen";
}
var correctAns = 0;

function resultBuilder(theId) {
    var ID = Number(document.getElementById(theId).getAttribute("id"));
    var id1 = "drr" + ID;
    var id2 = "dtt" + ID;
    if (Number(document.getElementById(theId).value) === actualAns[ID]) {
        document.getElementById(id1).style.animation = "correct 5s infinite";
        document.getElementById(id2).style.animation = "correct 5s infinite";
        correctAns++;
    } else {
        document.getElementById(id1).style.animation = "incorrect 5s infinite";
        document.getElementById(id2).style.animation = "incorrect 5s infinite";
        document.getElementById(id1).style.boxShadow = "none";
        document.getElementById(id2).style.boxShadow = "none";
    }
    document.getElementById(theId).disabled = true;
}

function Percentage() {
    var rst = ((correctAns / 15) * 100);
    var rst1 = Math.round(rst);
    var percentage;
    // if (rst1 > 100) {
    //     percentage = `<div class="loader"><h1>` + "100" + `%</h1></div>`;
    // } else if (rst1 > 50) {
    //     percentage = `<div class="loader"><h1>` + rst1 + `%</h1></div>`;
    // } else {
    //     percentage = `<div class="red-loader"><h1>` + rst1 + `%</h1></div>`;
    // }
    if (rst1 >= 100) {
        percentage = `<div class="loader"><h1>` + "100" + `%</br>Conqurer</h1></div>`;
    } else if (rst1 >= 90) {
        percentage = `<div class="loader"><h1>` + rst1 + `%</br>Ace</h1></div>`;
    } else if (rst1 >= 80) {
        percentage = `<div class="loader"><h1>` + rst1 + `%</br>Crown</h1></div>`;
    } else if (rst1 >= 70) {
        percentage = `<div class="loader"><h1>` + rst1 + `%</br>Diamond</h1></div>`;
    } else if (rst1 >= 60) {
        percentage = `<div class="loader"><h1>` + rst1 + `%</br>Gold</h1></div>`;
    } else {
        percentage = `<div class="red-loader"><h1>` + rst1 + `%</br></h1></div>`;
    }
    document.getElementById("ThisBody").innerHTML = percentage;
}

function click() {
    var time = 10;
    document.getElementById("counter").innerHTML = time;
    setInterval(function() {
        time--;
        document.getElementById("counter").innerHTML = time;
        if (time === 0) { Percentage(); }
    }, 60000);
}
genDivisorUls('divisors');
// genUls('dividents');
genDividenttUIs('dividents');
genUserInps('user-inputs');
divide();
click();