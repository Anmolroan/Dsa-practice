function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let N =+input[0];
    let arr = input[1].trim().split(" ").map(Number);
permute(N,arr);
   
  }
  function permute(N,arr){
function rec(arr,cur){
if(cur===arr.length){
    console.log(...arr);
    return;
}
for(let i =cur;i<N;i++){
    [arr[i],arr[cur]]=[arr[cur],arr[i]];
    rec(arr,cur+1);
    [arr[i],arr[cur]]=[arr[cur],arr[i]];
}
}
rec(arr,0)

  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`3
    1 2 3`);
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