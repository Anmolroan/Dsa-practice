function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let tc =+input[0];
   let line=1;
   for(let i=0;i<tc;i++){
    let S=+input[line++];
    main(S)
   }
  }
  function main(S){
   
    let count=S;
 while(S>0){
   
S=Math.round(S/10);

 count=count+S;

 
 }
 
 console.log(count);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    9876
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