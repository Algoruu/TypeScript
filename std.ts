// 변수의 데이터 타입 명시

let stdId : number = 1111;
let stdName : string = 'kim';
let age : number = 25;
let gender : string = 'female';
let course : string = 'Typescript';
let completed : boolean = false;

interface Student{
    stdId : number;
    stdName : string;
    age : number;
    gender : string;
    course : string;
    completed : boolean;    
};

function getInfo(id : number) : Student
{
    return {
        stdId : id,
        stdName : 'kim',
        age : 25,
        gender : 'female',
        course : 'javascript',
        completed : true
    };
};

let std = ({
    stdId : 91011,
    stdName : 'choi',
    age : 30,
    gender : 'male',
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
