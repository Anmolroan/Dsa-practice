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
    let sum = 0;
    
    for(let i=0;i<3;i++){
        sum=sum+arr[i];
    }
  
    let min=Math.abs(sum-K);
   
    let minimum=sum;
   for(let i=3;i<N;i++){
    sum=sum-arr[i-3];
    sum=sum+arr[i];

    let temp=Math.abs(sum-K);
   
    if(temp<min){
        min=temp;
    minimum=sum;
    }
   }
  console.log(minimum)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    4 1
    -1 2 1 -4
    3 1
    0 0 0`);
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