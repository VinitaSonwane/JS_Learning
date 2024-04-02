/*//Arithmetic operator
//let a = 5;
//let b = 3;


//console.log("a = ", a, " & b = ", b);
//console.log("a - b =", a - b);
//console.log("a + b = ", a + b);
//console.log("a * b = ", a * b);
//console.log("a / b = ", a / b);
//console.log("a % b = ", a % b);
//console.log("a ** b = ", a ** b);
//console.log("-- a = ", --a);
//console.log("a-- = ", a--);

//a += 4;
//console.log("a == ", a);


//let a = 5;
//let b = "5";
//console.log("a === b", a === b);
//console.log(" a !== b ", a !== b);

/*let a = 5;
let b = 4;

let cond1 = a > b; //true
let cond2 = a != b; //true
//console.log("cond1 && cond2 : ", cond1 && cond2);
console.log("cond1 && cond2 = ", a === b || a > b);

let age = 25;
if (age > 18) {
    console.log("you can vote ");
} * /

/*let num = 10;
if (num % 2 === 0) {
    console.log(num, "num is even");
} else {
    console.log("num is odd ");
}

if (age < 18) {
    console.log("junior");
} else if (age < 30) {
    console.log("senior");
} else {
    console.log("not have rights ")
} */



/*let name = prompt("hello");
console.log(name);


let number = prompt("Enter a number ");
console.log(number);*/

/*for (let i = 1; i <= 5; i++) {
    console.log("i = ", i);
}

//Calculate the sum of the numbers 1 to 5
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log("sum is ", sum);*/


/*//for loop
for (let count = 1; count <= 1000; count++) {
    console.log("Apna College ");

}
console.log("loop has ended");*/


/*/
/While loop
let i = 1;
while (i <= 5) {
    console.log("it's Vin = ", i);
    i++;
} * /


//do while loop
let i = 20;
do {
    console.log("Yess Sir");
}
while (i <= 5); */


/*//for-of loop
let str = "Javascript";

let size = 0;
for (let i of str) {
    console.log("i=", i);
    size++;
}
console.log("string size =", size);*/


/*//for-in loop
let student = {
    name: "Chaitu",
    age: 21,
    cgpa: 7.5,
    isPass: true,
};

for (let key in student) {
    console.log("key = ", key, ",", "value key is = ", student[key]);
} */


/*//Practice que 1 
//Print all the even numbers from 0 to 100


for (let num = 0; num <= 100; num++) {
    //console.log(num);
    if (num % 2 == 0) {
        console.log("num=", num);
    }
} * /

//Practice que 2
//Create a game where you start with any randomgame number . Ask the user to keepguesssing the gamenumberuntil the user enters correct value*/

/*let gameNum = 25;
let userNum = prompt("Guess the game number : ");
//console.log(userNum);

while (userNum != gameNum) {
    prompt("You entered wrong number , Guess again: ")
}
console.log(" Congratilations you entered the correct number ") */


//Strings 
/*let str = " Apna College";
let str1 = 'Vinita';
let str3 = `This is special type of string`;
console.log(str3); */


/*//Template literals 
let obj = {
    item: "pen ",
    price: 10,

};
console.log(`the cost of ${obj.item} is ${obj.price} rupees`)
console.log("the cost of  ", obj.item, "is", obj.price, "rupeees ");


//Template Literals 
console.log("Apna\nCollege");
let str = "Vinita\nSonwane";
console.log("The size of the str : " + str.length);


/*

//String methods in JS
str.toUpperCase()
str.toLowerCase()
str.trim() // removes whitespaces of starting and ending str */

/*let str1 = "gcoeara";
//let newStr1 = str1.toUpperCase();      // for upper case 
let newStr1 = str1.toLowerCase(); // for lower case 
console.log(str);
console.log(newStr1);
let str2 = "   Apna College  JS   ";
console.log(str2.trim());



//str.slice(start, end ? ) //returns part of the string
let str3 = "0123456";
console.log(str3.slice(1, 6));



//str1.concat(str2) // joins str2 with str1
let str4 = "apna";
let str5 = "college";
let res = str4.concat(str5);
console.log(res);


//str.replace(searchVal, newVal)
let str6 = "hello ";
console.log(str6.replace("h", "y"));

//str.charAt(idx) * /
str = str.replace("e", "o")
console.log(str6.charAt(2));


//Note :Orignal string in JS are Immutablewhere new strings are not immutable*/




/*//Practice QuestionPromt the iser to enter their full name. Generate a username for them based on the input.Startusername with @ , followed by their full name and ending with the fullname length
E.g user name = "vinitasonwane", username should be "@vinitasonwane123"*/



/*let fullName1 = prompt("enter your fullname without spaces");
let username = "@" + fullName1 + fullName1.length;
console.log(username); */


/*//functions in JS

function myFunction() {
    console.log("welcome to gcoeara");
    console.log("we are learning JS ");
}
myFunction();



//calculaete the2 numbers sum
function sum(x, y) {
    s = x + y;
    return s;
}
let val = sum(3, 4);
console.log(val); */


//ArrowFuntion
//sum function 
/*function sum(a, b) {
    return a + b;
}
const arrowSum = (a, b) => {
    console.log(a + b);
};
//mul function
function mul(a, b) {
    return a * b;
}
const arrowMul = (a, b) => {
    console.log(a * b);
}; */



/*//count vowels in a given string
function countVowels(str) {
    let count = 0;
    for (const char of str) {
        if (char === "a" || char === "e" || char == "i" || char === "o" || char === "u") {
            count++;
        }

    }
    return count;
} */



/*// forEach loop in Arrays 
function abc() {
    console.log("hello");
}

function myFunc(abc) {
    return abc;

}

let arr = ["pune", "delhi", "mumbai"];

/*arr.forEach(function printVal(val) {
    console.log(val);
}); */

/*arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
}); */


//***Question***
//For a given array numbers, print the square of each value using forEach loop.

let nums = [1, 2, 3, 4, 5, 6];
nums.forEach((num) => {
    console.log(num * num);
})

//Map Method 
let newArr = nums.map((val) => {
    return val;
})
console.log(newArr);


//Filter Method
let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let evenArr = arr.filter((val) => {
    return val % 2 === 0;
});
console.log(evenArr);

//Reduce Method

const output = arr.reduce((res, curr) => {
    return res + curr;
});

console.log(output);