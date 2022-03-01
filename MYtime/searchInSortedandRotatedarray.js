function runProgram(input) {
    // Write code here;
    input=input.trim().split("\n");
    var[N,K] =input[0].trim().split(" ").map(Number);
    var arr=input[1].trim().split(" ").map(Number);
    search(N,K,arr)
   
  }
  function search(N,K,arr){
      let i=0;
      let j=N-1;
      var result=-1;
      while(i<=j){
          let mid=i+Math.floor((j-i)/2);
          if(arr[mid]==K){
              result=mid;
              break;
          }
           if(arr[i]<arr[mid]){
              if(K>=arr[i]&&K<arr[mid]){
                  j=mid-1;
              }
              else{
                  i=mid+1;
              }
              
          }
          else{
              if(K>arr[mid]&&K<=arr[j]){
                  i=mid+1;
              }
              else{
                  j=mid-1;
              }
          }
      }
      console.log(result)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`20 12
    18 19 21 22 23 24 29 30 -1 -10 -9 -8 -7 -6 -4 -3 7 10 11 12`);
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