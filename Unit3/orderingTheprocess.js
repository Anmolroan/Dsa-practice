function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let N =+input[0];
    let arr1 =input[1].trim().split(" ").map(Number);
    let arr2 =input[2].trim().split(" ").map(Number);
    order(arr1,arr2,N);
   
  }
  function order(arr1,arr2,N){
      let i =0;
      let count =0;
     
      while(arr1.length>0){
          if(arr1[i]!=arr2[i]){
arr1.push(arr1.shift());
count++;
          }else{
              arr1.shift();
              arr2.shift();
              count++;
          }
      }
      console.log(count);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    3 2 1
    1 3 2`);
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