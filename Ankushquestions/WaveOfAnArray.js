function runProgram(input) {
    // Write code here
    input=input.trim().split('\n');
    let N =+input[0];
    let arr =input[1].trim().split(" ").map(Number).sort((a, b) =>a-b);
    let i=0
    while(i<N){
        let temp =arr[i];
        arr[i]=arr[i+1];
        arr[i+1]=temp;
        i=i+2;
    }
   console.log(arr);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`9
    9 8 4 10 3 6 5 7 1 `);
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