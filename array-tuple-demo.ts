// 기본 숫자, 문자열 배열
let numbers : number[] = ([1, 2, 3, 4, 5]);
let fruits : string[] = ['apple', 'banana', 'orange'];
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
};
for(let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
};

// 배열의 유니온 타입
let mixedArray : (number | string)[] = [1, 'two', 3, 'four'];
for(let i = 0; i < mixedArray.length; i++) {
    console.log(mixedArray[i]);
};

// 타입 추론 기능
let infer = [1, 2, 3]; 
for(let i = 0; i < infer.length; i++) {
    console.log(infer[i]);
};

// 수정이 안되는 읽기전용 Array
let readOnlyArray : ReadonlyArray<number> = [1, 2, 3];


// 튜플 : 배열의 형태지만 타입의 순서가 정해져 있음.
let greeting : [number, string, boolean] = [1, 'hello', true];
for(let i = 0; i < greeting.length; i++) {
    console.log(greeting[i]);
};


// Spread 연산자(Array 관련)
let firstArray = [1, 2, 3];
let secondArray = [4, 5, 6];
let combineArray = [...firstArray, ...secondArray]; //Spread 연산자(...) => 무장해제
for(let i = 0; i < combineArray.length; i++) {
    console.log(combineArray[i]);
};