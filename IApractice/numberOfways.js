function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test =+input[0];
    let line =1;
    for(let i=0; i<test;i++){
let N =+input[line++];
let points =input[line++].trim().split(" ").map(Number);
let drinks = input[line++].trim().split(" ").map(Number);
now(N,points,drinks);
    }
   
  }
  function now(N,points,drinks){
      let count =0;
      for(let i =0;i<points.length;i++){
          var sum =points[i];
          for(let j =0;j<drinks.length;j++){
              sum =sum+drinks[j];
              if(sum>=100000){
                count++;
                break;
            }
          }
         
      }
      console.log(count)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    3
    99991 99994 99997
    3 3 3
    3
    1 4 7
    3 3 3`);
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