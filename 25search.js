let data=['win: 12345','htut:3456','vij:@#@$$','jslyu:2222'];
let Userinput = 'htut'; 
let SearchData = Userinput.toLowerCase();

for ( let i=0; i <data.length ; i++ ){
    let splitContact=data[i].split(':');
    //splitContact='win','12345'
    if(splitContact[0].toLowerCase()===SearchData){
        console.log(splitContact[0]+'Number is'+splitContact[1]);
        break;
    }
    if (i===data.length-1){
        console.log(Userinput+'Is not found!');
    }
}


