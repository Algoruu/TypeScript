// 변수의 데이터 타입 명시
var stdId = 1111;
var stdName = 'kim';
var age = 25;
var gender = 'female';
var course = 'Typescript';
var completed = false;
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
;
;
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = 'choi';
        this.age = 30;
        this.gender = 'male'; // 여기의 젠더는 MyStudent의 젠더라 오류
        this.course = 'node.js';
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    }; // 재정의한 메소드(오버라이딩)
    MyStudent.prototype.getName = function () {
        var _a;
        return (_a = this.stdName) !== null && _a !== void 0 ? _a : '이름이 설정되지 않음';
    }; // 인터페이스 Student에 정의된 getName 메서드 추가 구현
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
        gender: 'female',
        course: 'javascript',
        completed: true,
        setName: function (name) {
            console.log('이름 설정 : ' + name);
        },
        getName: function () {
            return 'kim';
        }
    };
}
;
var std = ({
    stdId: 91011,
    stdName: 'choi',
    age: 30,
    gender: 'male',
    course: 'node.js',
    completed: true,
    setName: function (name) {
        console.log('이름 설정 : ' + name);
    },
    getName: function () {
        return 'choi';
    }
}); // 힙메모리에 저장됨
function setInfo(student) {
    console.log(student);
}
;
setInfo(std); // 이제 오류 없이 작동
console.log(getInfo(5678));
var numStr = '100';
var item;
function convertToString(val) {
    if (typeof val === 'string') {
        item = 0;
    }
    else {
        item = val;
    }
    return String(val); //무조건 문자열 변환 출력
}
function convertToNumber(val) {
    return Number(val); // 무조건 숫자 변환 출력
}
console.log(convertToString(numStr));
console.log(convertToNumber(numStr));
