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
class Employee {
    private _empName : string; // private를 사용하면 클래스 밖에서는 접근 불가능
    private _age : number;
    private _empJob : string;

    constructor(empName : string, age? : number, empJob? : string) {
        this._empName = empName; // 자기 자신의 객체
        this._age = age;
        this._empJob = empJob;

    }

    // get/set
    get empName(){
        return this._empName;
    }

    set empName(val : string){
        this._empName = val;
    }

    printEmp = () : void => {
        console.log(this._empName + '의 나이는 ' + this._age +'이고, 직업은 ' + this._empJob + '입니다.');
    }
}

// public private protected

// 객체 생성
let employee1 = new Employee('kim', 30, '소프트웨어개발자');
employee1.empName = 'lee'; // 접근지정자 적용이 필요함 -> get/set 설정

// 메소드 호출
employee1.printEmp();