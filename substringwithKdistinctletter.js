function runProgram(input) {
    // Write code here
   input=input.trim().split("\n");
   var [N,K]=input[0].trim().split(" ").map(Number);
   var string=input[1].trim();
   findDistinct(N,K,string);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`100 10
    aekyhrbjdmuomwcmriiczjikjozagcadeunslgonohknagwmjigaqurzthfyspvrdmodrdnjrthwuedksthwdhetccnjtswbhihb`);
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
  function findDistinct(N,K,string){
var out=0;
function check(start,end,abc,c){
  var obj={};
  for(var i=start;i<=end;i++){
var char=abc[i];
if(obj[char]==undefined){
  obj[char]=1;
}
else{
  obj[char]=obj[char]+1;
}
  }
var count=0;
for(key in obj){
  count++;
}
  if(count==c){
    return true;
  }
  else{
    return false;
  }
}
if(check(0,K-1,string,K)==true){
  out++;
}
for(var i=K;i<N;i++){
  if(check((i-K)+1,i,string,K)==true){
    out++;
  }
}
console.log(out)
  }