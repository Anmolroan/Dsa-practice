function runProgram(input) {
    // Write code here;
   input = input.trim().split("\n");
  
    let tc =+input[0];
    let line =1;
    for(let i=0; i<tc;i++){
        let N =+input[line++];
Hacks(N);
    }
   
  }
  function Hacks(N){
    let flag ="No";
  
function rec(i){
if(i === N){
  flag = "Yes";
  return ;
}
if(i>N){
  return ;
}
return rec(i*10)||rec(i*20);
}
rec(1);
console.log(flag);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    1
    2
    10
    25
    200`);
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



  