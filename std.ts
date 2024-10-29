// 변수의 데이터 타입 명시

let stdId : number = 1111;
let stdName : string = 'kim';
let age : number = 25;
let gender : string = 'female';
let course : string = 'Typescript';
let completed : boolean = false;

// 열거형 : 사용자 정의 타입
enum GenderType{
    Male = 'male',
    Female = 'female',
    GenderNeutral = 'neutral'
};

interface Student{
    stdId : number;
    stdName? : string;
    age? : number;
    gender? : 'male' | 'female';
    course? : string;
    completed? : boolean;
    // setName(name : string) : void;
    setName : (name : string) => void;
    getName : () => string;
};

class MyStudent implements Student{
    stdId = 91011;
    stdName = 'choi';
    age = 30;
    gender : 'male' | 'female' = 'male'; // 여기의 젠더는 MyStudent의 젠더라 오류
    course = 'node.js';
    completed = true;

    setName(name : string) : void{
        this.stdName = name;
        console.log('이름 설정 : ' + this.stdName);
    } // 재정의한 메소드(오버라이딩)

    getName(): string {
        return this.stdName ?? '이름이 설정되지 않음';
    } // 인터페이스 Student에 정의된 getName 메서드 추가 구현
};

const myInstance = new MyStudent(); // 객체 생성
myInstance.setName('엘리스');  //객체 메모리의 주소값을 갖고 있음


function getInfo(id : number) : Student
{
    return {
        stdId : id,
        stdName : 'kim',
        age : 25,
        gender : 'female',
        course : 'javascript',
        completed : true,
        setName: (name: string) => {
            console.log('이름 설정 : ' + name);
        },
        getName: () => {
            return 'kim';
        }
    };
};

let std : Student = ({
    stdId : 91011,
    stdName : 'choi',
    age : 30,
    gender : 'male',
    course : 'node.js',
    completed : true,
    setName: (name: string) => {
        console.log('이름 설정 : ' + name);
    },
    getName: () => {
        return 'choi';
    }
}); // 힙메모리에 저장됨

function setInfo(student : Student) : void{
    console.log(student);
};

setInfo(std); // 이제 오류 없이 작동

console.log(getInfo(5678));


// 함수의 데이터 타입 명시(매개변수, 리턴타입)
// function Plus(a : number, b? : number) : number{
//     return a + b;
// }

const user : {name : string, age : number} = {
    name : 'john',
    age : 25
};

let numStr : number | string = '100';

function convertToString(val : number | string):string {
    return String(val); //무조건 문자열 변환 출력
}

function convertToNumber(val : number | string):number {
    return Number(val); // 무조건 숫자 변환 출력
}

console.log(convertToString(numStr));
console.log(convertToNumber(numStr));