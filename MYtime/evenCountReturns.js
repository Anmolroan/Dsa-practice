function runProgram(input) {
    // Write code here;
    arr =input.trim().split("").map(Number);
   main(arr)
   
  }
  function main(arr){
let dp=[...Array(arr.length)].fill(0);
let count=0;
for(let i =arr.length-1;i>=0;i--){
  if(arr[i]%2==0){
      count++;
  }
  dp[i]=count
}
console.log(dp.join(" "))
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`574674546476`);
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