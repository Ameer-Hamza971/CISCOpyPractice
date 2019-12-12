// var nums = [];
var ans = [];

// function numbers() {
//     for (var i = 0; i < 10; i++) {
//         var s = Math.floor(Math.random() * 100) + 1;
//         nums.push(s);
//         document.write('<div id="' + i + '">' + nums[i] + "</div>");
//     }
// }

function getAns(theId) {
    var m = document.getElementById(theId).value;
    ans.push(m);
}