// 변수의 데이터 타입 명시

let stdId : number = 1111;
let stdName : string = 'kim';
let age : number = 25;
let gender : string = 'female';
let course : string = 'Typescript';
let completed : boolean = false;

interface Student{
    stdId : number;
    stdName? : string;
    age? : number;
    gender? : string;
    course? : string;
    completed? : boolean;
    // setName(name : string) : void;
    setName : (name : string) => void;
    getName : () => string;
};

// 열거형 : 사용자 정의 타입
enum GenderType{
    Male = 'male',
    Female = 'female',
    GenderNeutral = 'neutral'
};

class MyStudent implements Student{
    stdId = 91011;
    stdName = 'choi';
    age = 30;
    gender = GenderType;
    course = 'node.js';
    completed = true;

    setName(name : string) : void{
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    } // 재정의한 메소드(오버라이딩)
};

const myInstance = new MyStudent(); // 객체 생성
myInstance.setName('엘리스');  //객체 메모리의 주소값을 갖고 있음


function getInfo(id : number) : Student
{
    return {
        stdId : id,
        stdName : 'kim',
        age : 25,
        gender : GenderType.Female,
        course : 'javascript',
        completed : true
    };
};

let std = ({
    stdId : 91011,
    stdName : 'choi',
    age : 30,
    gender : GenderType.male,
    course : 'node.js',
    completed : true
}); // 힙메모리에 저장됨

function setInfo(student : Student) : void{
    console.log(student);

};

setInfo(std);

// console.log(getInfo(5678));



// 함수의 데이터 타입 명시(매개변수, 리턴타입)
// function Plus(a : number, b? : number) : number{
//     return a + b;
// }
