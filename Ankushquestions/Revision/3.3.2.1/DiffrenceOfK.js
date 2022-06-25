function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(let i = 0;i<test;i++){
      var [N,K]=input[line++].trim().split(" ").map(Number)
      var arr=input[line++].trim().split(" ").map(Number).sort((a,b)=>a-b);
      find(N,K,arr)
    }
   
  }
  function find(N,K,arr){
    let i=0;
    let j=1;
    let count=0;
    while(i<=j&&j<N){
      let sum = arr[j]-arr[i];
      if(sum<K){
        j++;
      }else if(sum>K){
        i++;
      }else{
        count++;
        i++;
        j++;
      }
    }
    if(count===0){
      console.log("No")
    }else{
      console.log("Yes")
    }

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`9
    7 9
    -10 -7 -6 0 1 5 9
    6 7
    -9 -8 -3 1 5 8
    5 5
    -10 2 4 8 9
    6 1
    -9 -9 -4 -2 5 5
    4 8
    -9 1 3 7
    1 1
    -6
    5 2
    -10 -5 -3 -1 1
    6 2
    -10 -8 -5 -4 0 4
    9 5
    -10 -9 -6 -5 1 4 5 7 8`);
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
  