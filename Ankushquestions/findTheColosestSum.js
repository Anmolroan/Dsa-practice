function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let line =1;
    let tc =input[0]
    for(let i =0;i<tc;i++){
     let [N,K]=input[line++].trim().split(" ").map(Number);
     let arr =input[line++].trim().split(" ").map(Number);
     main(arr,N,K);
    }
  }
  function main(arr,N,K){
    let min=null;
let minimum=0;
let sum=0;
  for(let i=0;i<arr.length;i++){
    for(let j=i+1;j<N;j++){
      for(let k=j+1;k<N;k++){
        sum=arr[i]+arr[j]+arr[k];
       
        if(Math.abs(sum-K)<=min||min===null){
          min=Math.abs(sum-K);
          // console.log("min",min);
          minimum=sum;
          // console.log( "minimum",minimum);
        }
      }
    }
  }
   console.log(minimum);
 
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`10
    18 6
    -5 -5 6 0 3 -4 2 1 6 3 -2 -3 -5 -6 4 3 0 -3
    9 14
    6 -1 0 -3 8 -4 5 4 6
    7 23
    10 -11 -12 -8 10 -5 -16
    7 17
    12 -10 -17 18 -3 2 15
    16 28
    9 8 -9 5 -2 -9 -12 1 -5 8 -3 2 -14 -15 14 -4
    15 6
    0 -3 -2 0 -1 -1 3 2 -3 -3 3 3 0 -2 -1
    2 4
    0 -2
    3 5
    1 -3 -3
    17 1
    1 0 2 -2 -2 -2 0 -2 -1 0 -2 1 -2 1 -2 -1 -1
    10 10
    -3 5 -4 2 -3 -2 2 -3 1 2
`);
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