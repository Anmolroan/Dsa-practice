function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let N =+input[0];
    let arr1 = input[1].trim().split(" ").map(Number).sort((a, b) =>a-b);
    let arr2 = input[2].trim().split(" ").map(Number).sort((a, b) =>a-b);
 
   let sum = 0;
   for(let i=0;i<arr1.length;i++){
    sum=sum+arr1[i]*arr2[i];
   }
   console.log(sum)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    3 1
    4 3`);
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