function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc =+input[0];
    let line=1;
    for(let i=0; i<tc; i++)
{
let N =+input[line++];
let arr = input[line++].trim().split(" ").map(Number).sort((a,b)=>a-b);
largestX(N,arr)
}   
  }
  function largestX(N,arr) {
  let i =0;
  let j =N-1;
  var ans=-1;
  while(i<j){
if(arr[i]===-arr[j]){
    ans=arr[j];
    break;
}else if(arr[i]<-arr[j]){
i++;
}else {
    j--;
}
  }

console.log(ans)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    9
    -10 -6 4 9 1 5 -1 -4 7
    10
    1 -6 6 -4 3 5 2 4 -2 2
    9
    4 3 -6 -4 -8 8 7 -1 2
    2
    8 -6
    8
    -7 -3 5 7 -1 3 1 -5`);
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