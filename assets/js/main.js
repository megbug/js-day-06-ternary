// lev1_1: Ternary Operator

console.log("it works");


function adult() {
    const inputAge = document.querySelector('form input[type="number"]');
    let answer = inputAge.value >= 18 
        ? "super, du bist volljähirg" 
        : "du bist noch minderjährig";
    document.querySelector('p').innerHTML = answer;
}

// lev1_2: Ternary Operator

let inputPassword = document.querySelector('form input[type="password"]');

function checkPassword() {
    let result = inputPassword.value.length >= 8 
        ? "<span style='color: green'>Welcome to your account</span>" 
        : "<span style='color: red'>Your Password is to short</span>";
    document.querySelector("p:nth-of-type(2)").innerHTML = result 
}


