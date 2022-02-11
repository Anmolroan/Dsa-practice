function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let test=+input[0];
    let line =1;
    for(let i=0; i<test; i++) {
let [N,K]=input[line++].trim().split(" ").map(Number);
let arr =input[line++].trim().split(" ").map(Number);
twoSum(N,K,arr);
    }
   
  }
  function twoSum(N,K,arr){
      let i = 0;
      let j =N-1;
      let left =-1;
      let right = -1;
      while(i<j){
let sum =arr[i]+arr[j];
if(sum<K){
    i++;
}
else if(sum>K){
    j--;
}else{
    left =i;
    right=j;
    break;
}
      }
      console.log(left,right);

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