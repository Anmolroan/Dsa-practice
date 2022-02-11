var str ="aba";
var lower ="abcdefghijklmnopqrstuvwxyz";
var sum =0;
for(let i = 0; i < str.length;i++){
for(let j=0;j<lower.length;j++){
    if(str[i]===lower[j]){
        sum=sum+j+1;
    }
}
}
console.log(sum);