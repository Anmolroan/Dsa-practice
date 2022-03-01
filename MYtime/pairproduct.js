function runProgram(input) {
    // Write code here
    input=input.trim().split("\n")
    var test=+input[0];
    var line=1;
    for(i=0;i<test;i++){
        var[N,M]=input[line++].trim().split(" ").map(Number);
        var arr=input[line++].trim().split(" ").map(Number);
        findpairProduct(N,M,arr)
       
    }
   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`2
    3 0
    1 3 2
    5 4
    3 2 2 1 5`);
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
  function findpairProduct(N,M,arr){
      arr.sort((a,b)=>a-b)
    
      var left=0;
      var right=N-1;
      var prod=1;
      var count=0;
      while(left<right){
          prod=arr[left]*arr[right];
          if(prod==M){
              
              count++;
         
          }
          else if(prod<M){
              left++
            }
            else if(prod>M){
                right--;
            }
      }
      console.log(count)
  }