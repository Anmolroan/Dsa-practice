function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
let tc =+input[0];
let line =1;
for(let i =0 ;i<tc ;i++){
let [N,K]=input[line++].trim().split(" ").map(Number);
let arr =input[line++].trim().split(" ").map(Number);
SoS(N,K,arr);
}
   
  }
  function SoS(N,K,arr){
      let flag ="No"
    for(let i =0;i<N;i++){
        let sum =0;
        for(let j =i;j<arr.length;j++){
sum=sum+arr[j];
if(sum===K){
    flag = "Yes";
    break;
}
        }
    }
    console.log(flag)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    5 3
    1 2 1 3 4
    4 5
    1 2 1 3
    3 2
    1 2 1`);
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