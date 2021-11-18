/*
// Object

const player = {
    name: "cks",
    points: 10,
    handsome: false,
    fat: "little bit"
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.handsome = true;
console.log(player);

player.lastName = "potato";

// const로 객체가 선언이 되었더라도 내부 내용은 바꿀 수 있음.
*/
//------------------------------------------------------------
/*
// Functions

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
function divide(a, b){
    console.log(a/b);
}
plus(60, 8);
divide(98, 20);

const player = {
    name: "cks",
    sayHello : function(otherPersonsName) {
        console.log("hello! "+ otherPersonsName+" nice to meet you");
    }
};
console.log(player.name);
player.sayHello("kim");
*/
//-----------------------------------------------------------
/*
// Returns

const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    times: function (a, b) {
        return a * b;
    },
    divide: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    }
};

const plusResult = calculator.plus(2, 3);
const minusResult = calculator.minus(plusResult, 10);
const timesResult = calculator.times(10, minusResult);
const divideResult = calculator.divide(timesResult, plusResult);
const powerResult = calculator.power(divideResult, minusResult);
*/
//-----------------------------------------------------------------
/*
// Conditionals

const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0 ) {
    console.log("Please write a real positive number");
} else if(age < 18) {
    console.log("You are too young.");
} else if(age >= 18 && age <= 50) {
    console.log("You can drink");
} else if(age > 50 && age <= 80) {
    console.log("You should exercise");
} else if(age > 80) {
    console.log("You can do whatever you want.");
}
*/
//-----------------------------------------------------------------------