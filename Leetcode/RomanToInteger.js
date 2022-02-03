var roman =['I', 'V', 'X', 'L', 'C', 'D', 'M'];
var integer =[1,5,10,50,100,500,1000];
let obj={
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000,
    "IV":4,
    "IX":9,
    "XL":40,
    "XC":90,
    "CD":400,
    "CM":900, 
}
var s ="MCMXCIV"
var sum =0;

let i =0;
var N =s.length;
while(i<N){
 if(obj[s[i]+s[i+1]]!=undefined){
        var temp=s[i]+s[i+1];
        
            sum=sum+obj[temp];
            i=i+2;
        }else{
            sum=sum+obj[s[i]];
            i++;
        }
  
    
   
}
console.log(sum)
// var sum =0;
// var s = "MCMXCIV"
// for(let i = 0;i<s.length;i++){
//     if(s[i]==="V"||s[i]==="X"){
//         if(s[i-1]==="I"&&i!=0){
// sum =sum+obj[s[i]]-obj[s[i-1]];
//         }else{
//             sum =sum+obj[s[i]];
//         }
//     }
//     else if(s[i]==="L"||s[i]==="C"){
//         if(s[i-1]==="X"&&i!=0){
// sum =sum+obj[s[i]]-obj[s[i-1]];
//         }else{
//             sum =sum+obj[s[i]];
//         }
//     }
//     else if(s[i]==="D"||s[i]==="M"){
//         if(s[i-1]==="C"&&i!=0){
// sum =sum+obj[s[i]]-obj[s[i-1]];
//         }else{
//             sum =sum+obj[s[i]];
//         }
//     }
// else{
    
// }
// console.log(sum)
// }
