function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
   let test=+input[0];
   let line=1;
   
   for(let i=0;i<test;i++){
       let [n,k]=input[line++].trim().split(" ").map(Number);
       let arr=input[line++].trim().split(" ").map(Number);
       team(n,k,arr);
   }
   
  }
 function team(n,k,arr){
     arr.sort((a,b)=>a-b);
     let i =0;
     let j =n-1;
   
 }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5 31
    10 11 13 17 21
    5 44
    10 11 13 17 21`);
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