function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tests=+input[0];
    let line =1;
    for(let i=0; i<tests; i++){
let [N,K]=input[line++].trim().split(" ").map(Number)
let arr=input[line++].trim().split(" ").map(Number)
SuchPairReturns(N,K,arr)
    }
   
  }
  function SuchPairReturns(N,K,arr){
      arr.sort(function(a,b){return a-b})
     let i =0;
     let j =N-1;
     let count =0;
     while(i<j){
        var sum =arr[i]+arr[j];
        if(sum===K){
            count++;
            var left =i;
            var right =j;
            break;
        }else if(sum>K){
            j--;
        }else{
            i++;
        }
     }
    if(count>0){
        console.log(1)
    }else{
        console.log(-1)
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`1
    5 2
    3 4 0 2 7`);
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