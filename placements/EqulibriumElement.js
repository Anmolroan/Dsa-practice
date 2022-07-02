function runProgram(input) {
    // Write code here
   input=input.trim().split('\n');
   let N =+input[0];
   let arr =input[1].trim().split(" ").map(Number);
   find(N,arr);
  }
  function find(N,arr) {
    let sum =arr.reduce((a,b)=>a+b);
   
    let prev=arr[0];
    let flag=-1;
    for(let i=1;i<N;i++) {
        let temp =sum-arr[i]-prev;
        
        if(temp==prev){
            flag=i+1;
            break;
        }
        prev=prev+arr[i];
    }
    console.log(flag);
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    3 3 5 5 1`);
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