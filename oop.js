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
    function Employee(empName, age, empJob) {
        var _this = this;
        this.printEmp = function () {
            console.log(_this.empName + '의 나이는 ' + _this.age + '이고, 직업은 ' + _this.empJob + '입니다.');
        };
        this.empName = empName; // 자기 자신의 객체
        this.age = age;
        this.empJob = empJob;
    }
    return Employee;
}());
// 객체 생성
var employee1 = new Employee('kim');
// 메소드 호출
employee1.printEmp();
