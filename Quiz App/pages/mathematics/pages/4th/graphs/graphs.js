var allNums = [
    ['d1'],
    ['d2'],
    ['d3'],
    ['d4'],
    ['d5'],
    ['d6'],
    ['d7'],
    ['d8'],
    ['d9'],
    ['d10'],
    ['d11'],
    ['d12'],
    ['d13'],
    ['d14'],
    ['d15']
];
var answersInd = [];

function columnGenerator() {
    for (var ul = 0; ul <= 14; ul++) {
        var random = Math.floor(Math.random() * 10) + 1;
        for (var i = 0; i < random; i++) {
            document.getElementById(ul).innerHTML += "<li></li>"
        }
        allNums[ul].push(random);
    }
}


function ulGenerator(theId) {
    for (var i = 0; i <= 14; i++) {
        document.getElementById(theId).innerHTML += `<ul id="` + i + `"></ul>`
    }
}

function inputs() {
    for (var m = 0; m < 9; m++) {
        var s = Math.floor(Math.random() * 10);
        answersInd.push(s);
        var inStr = (s + 1).toString();
        if (m >= 0 && m < 3) {
            var html = `<td><span>DAY ` + inStr + `</span><input type="text" id="` + allNums[s][0] + `"></td>`;
            document.getElementById('r1').innerHTML += html;
        } else if (m >= 3 && m < 6) {
            var html = `<td><span>DAY ` + inStr + `</span><input type="text" id="` + allNums[s][0] + `"></td>`;
            document.getElementById('r2').innerHTML += html;
        } else if (m >= 6 && m < 9) {
            var html = `<td><span>DAY ` + inStr + `</span><input type="text" id="` + allNums[s][0] + `"></td>`;
            document.getElementById('r3').innerHTML += html;
        }
    }
}
var sum = 0;

function resultCalc() {
    for (var g = 0; g < answersInd.length; g++) {
        var ind = answersInd[g];
        if (allNums[ind][1] === Number(document.getElementById(allNums[ind][0]).value)) {
            sum++;
        }
    }
}
ulGenerator('main');
columnGenerator();
inputs();
resultCalc();

function Percentage() {
    var rst = (sum / 9) * 100;
    rst1 = Math.round(rst);
    var percentage;
    if (rst1 > 100) {
        percentage = `<div class="loader"><h1>` + "100" + `%</h1></div>`;
    } else if (rst1 > 50) {
        percentage = `<div class="loader"><h1>` + rst1 + `%</h1></div>`;
    } else {
        percentage = `<div class="red-loader"><h1>` + rst1 + `%</h1></div>`;
    }
    document.getElementById("ThisBody").innerHTML = percentage;

}
// columnGenerator('first');
// columnGenerator('sec');
// columnGenerator('third');
// columnGenerator('fourth');
// columnGenerator('fifth');
// columnGenerator('sixth');
// columnGenerator('seventh');
// columnGenerator('eigthth');
// columnGenerator('nineth');
// columnGenerator('tenth');