function runProgram(input) {
    // Write code here;
    input=input.trim();
    reduce(input)
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`aaaa`);
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
  function reduce(input){
var arr=input.trim().split("");

var s=[];
var top=-1;
for(let i=0;i<arr.length;i++){
  if(s.length<0||s[top]!==arr[i]){
    top++;
    s.push(arr[i])
  }
  else if(s.length>0&&s[top]===arr[i]){
    s.pop();
    top--;
  }
}
if(s.length>0){console.log(s.join(""))}
else{
  console.log("Empty String")
}

  }