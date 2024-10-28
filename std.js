// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'kim';
var age = 25;
var gender = 'female';
var course = 'Typescript';
var completed = false;
;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
;
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = 'choi';
        this.age = 30;
        this.gender = GenderType;
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    }; // 재정의한 메소드(오버라이딩)
    return MyStudent;
}());
;
var myInstance = new MyStudent(); // 객체 생성
myInstance.setName('엘리스'); //객체 메모리의 주소값을 갖고 있음
function getInfo(id) {
    return {
        stdId: id,
        stdName: 'kim',
        age: 25,
        gender: GenderType.Female,
        course: 'javascript',
        completed: true
    };
}
;
var std = ({
    stdId: 91011,
    stdName: 'choi',
    age: 30,
    gender: GenderType.male,
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
