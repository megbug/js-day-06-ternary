// lev1_1: Ternary Operator

console.log("it works");


function adult() {
    const inputAge = document.querySelector('form input[type="number"]');
    let answer = inputAge.value >= 18 ? "super, du bist volljähirg" : "du bist noch minderjährig";
    document.querySelector('p').innerHTML = answer;
}

// lev1_2: Ternary Operator

let inputPassword = document.querySelector('form input[type="password"]');

function checkPassword() {
    let result = inputPassword.value.length >= 8 ? "Welcome to your account" : "Your Password is too short";
    document.querySelector("p:nth-of-type(2)").innerHTML = result;
}