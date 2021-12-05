function runProgram(input) {
    // Write code here
   input= input.trim().split("\n");
   let string1 =input[0].trim();
   let string2 =input[1].trim();
   findSimilar(string1,string2);


  }
  function findSimilar(string1,string2){
     let obj ={};
     let newarr=[];
     var arr=string1.split("");
     let curr=0;
     function subs(arr,newarr,curr){
       if(newarr.length>0){
         var str =newarr.join("")
         obj[str]=1;
        
       }if(curr==arr.length){
         return
       }
       for(let i =curr;i<arr.length;i++){
         newarr.push(arr[i])
         subs(arr,newarr,i+1);
         newarr.pop();
       }
     }
subs(arr,newarr,curr);
// console.log(obj)
// second string

let newarr1=[];

var arr=string2.split("");
let curr1=0;
let obj1={}
var max =null;
var maximum =null;
function subst(arr,newarr1,curr1){
  if(newarr1.length>0){
    var str =newarr1.join("");
    obj1[str]=1
if(obj[str]!=undefined){
if(max==null||max<str.length){
  max =str.length;
  maximum=str
}
}

  }if(curr1==arr.length){
    return
  }
  for(let i =curr1;i<arr.length;i++){
    newarr1.push(arr[i])
    subst(arr,newarr1,i+1);
    newarr1.pop();
  }
}
subst(arr,newarr1,curr1);
console.log(max)

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`AGGTAB
    GXTXAYB`);
  } else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0) ;
    });
  }