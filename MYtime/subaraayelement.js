function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(i=0;i<test;i++){
    var [N,K,X]=input[line++].trim().split(" ").map(Number);
    var arr=input[line++].trim().split(" ").map(Number);
    findSubarray(N,K,X,arr)
  }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    5 3 2
    1 3 2 5 1`);
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
  }function findSubarray(N,K,X,arr){
    var out=0;
    function check(start,end,arr,K,X){
      var count=0;
      for(var i=start;i<=end;i++){
        if(arr[i]<=K){
          count++;
        }
      }
      if(count==X){
        return true;
      }
      else{
        return false;
      }
    }
    if(check(0,X-1,arr,K,X)==true){out++}
    for(var i=X;i<N;i++){
      if(check((i-X)+1,i,arr,K,X)==true){
        out++;
      }
       
      
        
      
    }
    console.log(out)
  }