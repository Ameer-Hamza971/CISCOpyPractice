var questions = [];
var actualAns = [];
var questionCounter = 0;
var crtAns = 0;
var wrnAns = 0;

function genQuestion() {
    for (var i = 2; i <= 5; i++) {
        questions.push(i);
    }
}

function genDivisor() {
    var heading = "TICK THE NUMBERS PERFECTLY DIVISIBLE BY <span>";
    document.getElementById('divisors-head').innerHTML = heading + questions[questionCounter] + "</span>";
}

function genDivident() {
    document.getElementById('dividents-table').innerHTML = `<table id="dividents-table" class="rtt">
    <tr id="tr1"></tr>
    <tr id="tr2"></tr>
    <tr id="tr3"></tr>
    <tr id="tr4"></tr>
    <tr id="tr5"></tr>
    <tr id="tr6"></tr>
    <tr id="tr7"></tr>
    <tr id="tr8"></tr>
    <tr id="tr9"></tr>
    <tr id="tr10"></tr>
</table>`;
    for (var i = 1; i <= 100; i++) {
        if (i <= 10) {
            document.getElementById('tr1').innerHTML += `<td><input type="text" value="` + i + `" id="` + i + `" onclick="userInp('` + i + `')">` + "</td>";
        } else if (i <= 20) {
            document.getElementById('tr3').innerHTML += `<td><input type="text" value="` + i + `" id="` + i + `" onclick="userInp('` + i + `')">` + "</td>"
        } else if (i <= 30) {
            document.getElementById('tr2').innerHTML += `<td><input type="text" value="` + i + `" id="` + i + `" onclick="userInp('` + i + `')">` + "</td>"
        } else if (i <= 40) {
            document.getElementById('tr7').innerHTML += `<td><input type="text" value="` + i + `" id="` + i + `" onclick="userInp('` + i + `')">` + "</td>"
        } else if (i <= 50) {
            document.getElementById('tr9').innerHTML += `<td><input type="text" value="` + i + `" id="` + i + `" onclick="userInp('` + i + `')">` + "</td>"
        } else if (i <= 60) {
            document.getElementById('tr6').innerHTML += `<td><input type="text" value="` + i + `" id="` + i + `" onclick="userInp('` + i + `')">` + "</td>"
        } else if (i <= 70) {
            document.getElementById('tr4').innerHTML += `<td><input type="text" value="` + i + `" id="` + i + `" onclick="userInp('` + i + `')">` + "</td>"
        } else if (i <= 80) {
            document.getElementById('tr10').innerHTML += `<td><input type="text" value="` + i + `" id="` + i + `" onclick="userInp('` + i + `')">` + "</td>"
        } else if (i <= 90) {
            document.getElementById('tr5').innerHTML += `<td><input type="text" value="` + i + `" id="` + i + `" onclick="userInp('` + i + `')">` + "</td>"
        } else if (i <= 100) {
            document.getElementById('tr8').innerHTML += `<td><input type="text" value="` + i + `" id="` + i + `" onclick="userInp('` + i + `')">` + "</td>"
        }
        if (i % questions[questionCounter] === 0) {
            actualAns.push(i);
        }
    }
}

function userInp(theId) {
    var Uans = Number(document.getElementById(theId).value);
    if (Uans % questions[questionCounter] === 0) {
        document.getElementById(theId).setAttribute("class", "correct");
        crtAns++;
    } else {
        document.getElementById(theId).setAttribute("class", "incorrect");
        wrnAns++;
    }
    document.getElementById(theId).disabled = true;
}

function Percentage() {
    var rst = (((crtAns - wrnAns) / 128) * 100);
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
    var time = 20;
    document.getElementById("counter").innerHTML = time;
    setInterval(function() {
        time--;
        document.getElementById("counter").innerHTML = time;
        if (time === 0) { Percentage(); }
    }, 60000);
}
genQuestion();
genDivident();
genDivisor();
click();

function caller() {
    if (questionCounter > 2) {
        Percentage();
    } else {
        questionCounter++;
        genDivisor();
        genDivident();
    }
}