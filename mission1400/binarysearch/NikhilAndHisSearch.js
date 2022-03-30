function runProgram(input) {
    // Write code here
   input = input.trim().split("\n");
   let N  =+input[0];
   let arr =input[1].trim().split(" ").map(Number);
   let M =+input[2];
   let line =3 ;
   for(let i =0;i<M;i++){
       let temp =input[line++].trim().split(" ").map(Number);
       console.log(arr,temp)
   }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`4
    1 2 3 4
    3
    0 5
    1 3
    0 3`);
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