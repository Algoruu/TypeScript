// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'kim';
var age = 25;
var gender = 'female';
var course = 'Typescript';
var completed = false;
;
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = 'choi';
        this.age = 30;
        this.gender = 'male';
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    }; // 재정의한 메소드
    return MyStudent;
}());
;
var myInstance = new MyStudent(); // 객체 생성
myInstance.setName('엘리스'); //객체 메모리의 주소값을 갖고 있음
// function getInfo(id : number) : Student
// {
//     return {
//         stdId : id,
//         stdName : 'kim',
//         age : 25,
//         gender : 'female',
//         course : 'javascript',
//         completed : true
//     };
// };
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
