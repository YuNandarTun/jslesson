//(false)? exp1: exp2;
let age=25;
let men=true;
if (age < 20){
    men=false;
} else {
    men=true;
}

let gender = (men)? 'He is a men': 'We dont know';
console.log(gender)