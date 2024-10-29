// //일반적인 직원 정보
// let empName : string;
// let age : number;
// let empJob : string;
// // 얘네를 클래스로 묶고 싶음!
// function printEmp(empName : string, age : number, empJob : string) : void{
//     console.log(`${empName}의 나이는 ${age}이고, 직업은 ${empJob}입니다.`);
//     console.log(empName + '의 나이는 ' + age +'이고, 직업은 ' + empJob + '입니다.');
// }
// printEmp('kim', 25, 'developer');
// --------------------------------------------------------------------------------------
// 멤버변수 == 속성 == 프로퍼티
// 멤버함수 == 메소드
// 클래스 생성
var Employee = /** @class */ (function () {
    function Employee(_empName, _age, _empJob) {
        var _this = this;
        this._empName = _empName;
        this._age = _age;
        this._empJob = _empJob;
        this.printEmp = function () {
            console.log(_this._empName + '의 나이는 ' + _this._age + '이고, 직업은 ' + _this._empJob + '입니다.');
        };
    }
    Object.defineProperty(Employee.prototype, "empName", {
        // get/set
        get: function () {
            return this._empName;
        },
        set: function (val) {
            this._empName = val;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
// public private protected
// 객체 생성
var employee1 = new Employee('kim', 30, '소프트웨어개발자');
employee1.empName = 'lee'; // 접근지정자 적용이 필요함 -> get/set 설정
// 메소드 호출
employee1.printEmp();
