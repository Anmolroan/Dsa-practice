function runProgram(input) {
    // Write code here
    input =input.trim().split("\n");
    let N = +input[0];
    let arr1 =input[1].trim().split(" ").map(Number).sort((a,b)=>a-b);
    let arr2 = input[2].trim().split(" ").map(Number).sort((a,b)=>a-b);
   cureADisease(N,arr1,arr2)
   
  }
  function cureADisease(N,arr1,arr2) {
console.log(N,arr1,arr2);
let i =N-1;
let flag ="Yes";
while(i>=0){
    if(arr1[i]<arr2[i]){
        flag ="No"
    }
    i--;
}
console.log(flag)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    123 146 454 542 456
    100 328 248 689 200`);
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