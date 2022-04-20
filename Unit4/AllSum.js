function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let tc =+input[0];
   let line =1;
   for(let i =0;i<tc;i++){
       let N =+input[line++];
       let arr1=input[line++].trim().split(" ").map(Number);
       let arr2=input[line++].trim().split(" ").map(Number);
       main(arr1,arr2,N)
   }
  }
  function main(arr1,arr2,N){
    const sum1 = arr1.reduce(
        (prev, cur) => prev + cur,
        0
      );
     
      const sum2 = arr2.reduce(
          (prev, cur)=>prev+cur,
          sum1
      )
      console.log(sum2);

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    5
    1 2 3 4 5
    6 7 8 9 10 `);
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