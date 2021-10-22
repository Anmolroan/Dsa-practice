function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line= 1;
    for(let i=0;i<test;i++){
        var N=+input[line++];
        var arr=input[line++].trim().split(" ").map(Number);
        find(N,arr)
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    5
    5 4 1 3 2`);
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
  function find(N,arr){
      var stack=[];
      var top=-1;
      var output=[]
      for(let i=0;i<N;i++){
        for(let j=i+1;j<N;j++){
            if(arr[i]==arr[j]){
                count++;
                output.push()
            }
        }
      }
  }