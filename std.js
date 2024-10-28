// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'kim';
var age = 25;
var gender = 'female';
var course = 'Typescript';
var completed = false;
;
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'kim',
        age: 25,
        gender: 'female',
        course: 'javascript',
        completed: true
    };
}
;
var std = ({
    stdId: 91011,
    stdName: 'choi',
    age: 30,
    gender: 'male',
    course: 'node.js',
    completed: true
}); // 힙메모리에 저장됨
function setInfo(student) {
    console.log(student);
}
;
setInfo(std);
// console.log(getInfo(5678));
// 함수의 데이터 타입 명시(매개변수, 리턴타입)
// function Plus(a : number, b? : number) : number{
//     return a + b;
// }
