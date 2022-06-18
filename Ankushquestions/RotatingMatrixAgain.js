function runProgram(input) {
    // Write code here
   input=input.trim().split(" ").map(Number).reverse();
  console.log(input)
let N=Math.sqrt(input.length)
let line =0;
let matrix=[]
for(let i =0;i<N;i++){
    let temp =[]
for(let j =0;j<N;j++){
temp.push(input[line++])
}
matrix.push(temp)
}

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1 2 3 4 5 6 7 8 9`);
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