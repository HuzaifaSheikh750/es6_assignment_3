// **************************************1- How to unique, sort an array in ascending order?
// const arr = [1,40,2,10,10,40,2,2,5,3,54,2,42,5,5,5]

const array = [1, 40, 2, 10, 10, 40, 2, 2, 5, 3, 54, 2, 42, 5, 5, 5]
let uniquesort = array.sort(function (a, b) {
    return a - b
})
let setArr = new Set(uniquesort)
console.log(setArr)

console.log(uniquesort);

//*************************************** */ 2- Print values using for loop in the following sequence
// 1
// 123
// 1234
// 12345

for (var i = 1; i <= 5; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(j + " ");
    }
    document.write("<br />");
}


// 3- Sum the folliwg number using for loopconst num = 12345 (its number type)
// ********************************Output should be: 15

const number = 12345;
const arr = [];
const sNum = number.toString();

for (var i = 0, len = sNum.length; i < len; i += 1) {
    arr.push(+sNum.charAt(i));
}
for (var i = 0, sum = 0; i < arr.length; sum += arr[i++]);
console.log(sum);


// 4- Find the third highest number in array using Set, sort and reverse
// *****************const arr = [1,210,5,7,65,5,20,8,210,65];

const array = [1, 210, 5, 7, 65, 5, 20, 8, 210, 65];
let sortArray = array.sort(function (a, b) { 
    return a - b 
})
let arrInDescendingOrder = sortArray.reverse()
let setArr = new Set(arrInDescendingOrder)
console.log(setArr)

//******************************** */ third largest 
var thirdMax = function (){ 
    var max = Math.max.apply(null, array);
    array.splice(array.indexOf(max), 3); 
    return Math.max.apply(null, array); 
};
console.log(thirdMax());
