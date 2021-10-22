//Enter code here
function runProgram(input) {
  // Write code here
  input=input.trim().split("\n");
  var test=+input[0];
  var line=1;
  for(let i =0;i<test;i++){
    var string=input[line++].trim();
    findBalance(string)
  }
 
}
if (process.env.USER=== "anmolkumar") {
  runProgram(`3
  {[()]}
  {[(])}
  {{[[(())]]}}
  `);
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
function findBalance(string){
  var N=string.length;
  var count=0;

var stack=[];
var top=-1
  var n=Math.floor(string.length/2);
 for(let i=0;i<N;i++){

   if( stack.length>0&&stack[top]+string[i]==="()"||stack[top]+string[i]==="{}"||stack[top]+string[i]==="[]"){
     stack.pop();
    
     top--;
    
   }
  
  else{
    stack.push(string[i]);
    top++;
  }
  
   
 }
 console.log(stack)
if(stack.length>0){
console.log("not balanced")
}
else{
  console.log("balanced")
}
}