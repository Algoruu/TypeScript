var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// 기본 숫자, 문자열 배열
var numbers = ([1, 2, 3, 4, 5]);
var fruits = ['apple', 'banana', 'orange'];
for (var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
;
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
;
// 배열의 유니온 타입
var mixedArray = [1, 'two', 3, 'four'];
for (var i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
}
;
// 타입 추론 기능
var infer = [1, 2, 3];
for (var i = 0; i < infer.length; i++) {
    console.log(infer[i]);
}
;
// 수정이 안되는 읽기전용 Array
var readOnlyArray = [1, 2, 3];
// 튜플 : 배열의 형태지만 타입의 순서가 정해져 있음.
var greeting = [1, 'hello', true];
for (var i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
}
;
// Spread 연산자(Array 관련)
var firstArray = [1, 2, 3];
var secondArray = [4, 5, 6];
var combineArray = __spreadArray(__spreadArray([], firstArray, true), secondArray, true); //Spread 연산자(...) => 무장해제
for (var i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
}
;
