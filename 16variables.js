
//JS variables types
//1.Number
//2.String
//3.Boolean True, False
//4. Array ( to stored many data)
//5. Object[]

let str='myanmar';
let country=['myanmar','thai','china', 'japan'];
let human = {name: 'yu' , mail:33, hobby:true};

console.log (typeof(human));
console.log ('Before update');
console.log (country[3]);//using index

console.log('After update');
country[1]='Singapore';
console.log(country[1]);

human.name='snow';
console.log(human.name); //object name dot property name 