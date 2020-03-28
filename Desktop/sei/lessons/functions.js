//Q1
const youRock = function (name) {
    console.log('you rock ' + name + "!");
};
//Q2
const square = function (num) {
    console.log(num * num);
};
//Q3
const cube = function (num) {
    console.log(num * num * num);
};

//Q4

const toTheFourth = function (num) {
    console.log(num * num * num * num);
};

//Q5

const calculator2 = function (num1, num2, calcType) {

    if (calcType == "add") {
        console.log(num1 + num2);
    } else if (calcType == "subtract") {
        console.log(num1 - num2);
    }
    else if (calcType == "divide") {
        console.log(num1 / num2);
    }
    else if (calcType == "multiply") {
        console.log(num1 * num2);
    }
    else if ((calcType !== "multiply") || (calcType !== "divide") || (calcType !== "add") || (calcType !== "subtract")) {
        console.log("calculator can only add, subtract, divide, or mult");
    }
    else if (num1 === 'cat') {
        console.log("calculator only accepts numbers");
    };
}
//Q6
const multipleFun = function (num) {

    let result = "";
    if ((num % 3) == 0) {
        result = result + "Fizz ";
        //console.log("Pling");
    }
    if ((num % 5) == 0) {
        result = result + "Buzz";
        //console.log(result + "Plang");
    }
    else {
        console.log(num)
    }

    console.log(result);
}

multipleFun(15)

//Q7
const rainDrop1 = function (num) {
let result = "";
if ((num % 3) == 0) {
    result = result + "pling ";
    //console.log("Pling");
}
if ((num % 5) == 0) {
    result = result + "Plang";
    //console.log(result + "Plang");
}
if ((num % 7) == 0) {
    result = result + "Plong"
    //console.log("Plong");
}
else if (((num % 3) != 0) && ((num % 5) != 0) && ((num % 5) != 0)) {
    console.log("" + num + "");
}
console.log(result);
}
multipleFun(28)