function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var test=+input[0];
    var line=1;
    for(var i=0;i<test;i++){
        var [N,K]=input[line++].trim().split(" ").map(Number);
        var arr=input[line++].trim().split(" ").map(Number);
       
        diffOfK(N,K,arr)
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
  function diffOfK(N,K,arr){
      var count=0;
      var i=0;
      var j=1;
      while(i<N-1&&j<N){
          if(i==j){
            j++;
          }else{
            if(arr[i]<arr[j]){
                j++;
            }
             else if(arr[i]>arr[j]){
              i++;
            }
             else if(arr[i]==arr[j]){
                j++;
                count++;
            }
          }
        
      }
     console.log(count)
  }