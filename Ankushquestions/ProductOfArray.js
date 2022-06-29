function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    let tc =+input[0];
    let line =1;
    for(let i =0;i<tc;i++){
        let N =+input[line++];
     let arr=input[line++].trim().split(" ").map(Number);
     main(arr,N);
    }
  }
  function main(arr,N){
  let prod =arr.reduce((a,b)=>{return a*b});
  for(let i=0;i<arr.length;i++){
   arr[i]= prod/arr[i];
  };
  console.log(arr.join(" "))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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