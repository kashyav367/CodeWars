// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function EvenOrOdd(number){
    if(number % 2 === 0){
        return "Even"
    }
    else{
        return "Odd";
    }
}

let number = 2;
console.log(EvenOrOdd(number));