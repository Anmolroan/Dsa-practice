function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let N =+input[0];
   let arr = input[1].trim().split(" ").map(Number);
   main(N,arr);
  }
  function main(N,arr) {
    let obj={};
    for(let i =0;i<N;i++){
      let sum =0;
      for(let j =i;j<N;j++) {
        sum =sum+arr[j];
        obj[sum]=1;
      }
    }
    let count =0;
    let newarr = [];
    for(key in obj){
      count++;
      newarr.push(+key)
    }
    console.log(count);
    console.log(newarr.join(" "))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    3 5 2 `);
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