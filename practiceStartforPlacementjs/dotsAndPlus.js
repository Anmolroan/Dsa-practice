
// var odd ="";
// for(var i=1; i<=N/2; i++){
// odd=odd+"*"
// }
// var even ="";
// for(var i=1; i<=N;i++){
//     even =even+"+"
// }

// // now print the pattern
// for(var i=1; i<=N; i++){
// if(i%2!=0){
//     console.log(odd)
// }else{
//     console.log(even)
// }
// }
var N =7;
for(var i = 1; i <= N; i++){
   
if(i%2!=0){
    var bag1="";
for(var j = 1; j <=N/2; j++){
bag1=bag1+"*"
}
console.log(bag1);
}else{
    var bag2="";
    for(var k = 1; k<=N;k++){
bag2= bag2+"+"
    }
    console.log(bag2)
}
    
}