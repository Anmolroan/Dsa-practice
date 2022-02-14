function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let [N,K]=input[0].trim().split(" ").map(Number);
    let arr =input[1].trim().split(" ").map(Number);
   subarrayAndSum(N,K,arr);
   
  }
  function subarrayAndSum(N,K,arr){
      var sum = 0;
      var ans=0;
      for(let i=0;i<N;i++){
        sum=sum + arr[i];
      }
      if(sum%K!=0){
          ans =1;
      }else{
          for(let i=0;i<N;i++){
              if(arr[i]%K!=0){
                  var index=i;
                  break;
              }
          }
          console.log(index);
          var w =N-1-i;
      }
  }

  if (process.env.USER=== "anmolkumar") {
    runProgram(`5 3
    3 2 2 2 3`);
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