function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc = +input[0];
    let line =1;
    for(let i = 0; i < tc; i++) {
let N =+input[line++];
let arr =input[line++].trim().split(" ").map(Number);
MinMax(N,arr);
    }
   
  }
  function MinMax(N,arr) {
      let min=[];
      let max=[];
      for(let i=1; i<arr.length-1; i++)
      {
if(arr[i-1]>arr[i]&&arr[i+1]>arr[i]){
    min.push(i);
}else if(arr[i-1]<arr[i]&&arr[i+1]<arr[i]){
    min.push(i)
}
      };
      console.log(min);
      min.sort(function(a,b){return a-b})
      if(min.length>1){
          var m =min[min.length-1]-min[0];
          var n =min[1]-min[0];
console.log(n,m)
      }else{
          console.log(-1+" "+-1)
      }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    2
    3 1
    7
    5 3 1 2 5 1 2
    9
    1 3 2 2 3 2 2 2 7
    `);
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
