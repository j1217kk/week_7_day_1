// Excercise #1
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function nameMatch(string, arr){
    for (i = 0; i < arr.length;i++){
        if (string.includes(arr[i])){
            return "Matched " + arr[i] 
        }
        else{
            return "No matches"
        }
    };
}
console.log(nameMatch(dog_string, dog_names))

//Excercise #2
function evenReplace(arr){
    for (i = 0; i < arr.length; i++){
        if (i % 2 === 0){
            arr[i] = 'even index'
        }
    };
    return arr
}
arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

console.log(evenReplace(arr))


//Codewars JS #1
//https://www.codewars.com/kata/54c27a33fb7da0db0100040e
//Given an integral number, determine if it's a square number
let isSquare = function(n){
    for (let i = 0; i <= Math.ceil(n/2);i++){
        if (i**2 === n){
            return true;
        }
    };
    return false; 
    }

console.log(isSquare(4))
console.log(isSquare(36))
console.log(isSquare(3))
console.log(isSquare(12))

//Codewars JS #2
//https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript
//We need a function that can transform a string into a number. What ways of achieving this do you know?


const stringToNumber = function(str){
    // put your code here
    return parseInt(str)
    }