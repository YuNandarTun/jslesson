function print(){
    console.log('This function not return');
}
function add(a,b,c){
    let data=a+b-c;
    return data;
}
let fundata= add(22,33,44)+11;
console.log(fundata);
print();