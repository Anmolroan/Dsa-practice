function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let N =+input[0];
   let vac=input[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
   let mid = input[2].trim().split(" ").map(Number).sort((a,b)=>a-b);
   main(vac,mid,N)
  }
  function main(vac,mid,N) {
      let i =0;
     
      while(i<N){
          if(vac[i]>mid[i]){
              i++;
          }else{
              break;
          }
      }
    if(i>=N-1){
console.log("Yes")
    }else{
        console.log("No")
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    123 146 454 542 456
    100 328 248 689 200`);
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