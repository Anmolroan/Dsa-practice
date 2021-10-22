function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var tests=+input[0];
   
    var line=1;
    for(i=0;i<tests;i++){
        var [N,K]=input[line++].trim().split(" ").map(Number);
var arr=input[line++].trim().split(" ").map(Number);
findTwosum(N,K,arr)
    }

   
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    4 9
    2 7 11 15
    5 10
    1 2 3 5 5
    2 100
    48 49`);
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

  function findTwosum(N,K,arr){
var left=0;
var right=N-1;
var count=0;
while(left<right){
  sum=arr[right]+arr[left];
  if(sum==K){
    console.log(left+" "+right);
    count++;
    break;}
    else if(sum<K){
      left++;
    }
    else{
      right--;
    }
  }
  if(count==0){
    console.log(-1+" "+-1)
  }
  }