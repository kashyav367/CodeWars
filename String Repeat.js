// Write a function that accepts a non-negative integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// Examples (input -> output)
// 6, "I"     -> "IIIIII"
// 5, "Hello" -> "HelloHelloHelloHelloHello"

function stringRepeat(s,n){
    return s.repeat(n);
}

let s = "I"
console.log(stringRepeat(s,3));