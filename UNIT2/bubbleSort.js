function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let N=+input[0];
    let arr =input[1].trim().split(" ").map(Number);
    bubblesort(N,arr);
   
  }
  function bubblesort(N,arr){
  for(let i = 0; i < N; i++){
for(let j=0;j<N-i-1; j++){
    if(arr[j]>arr[j+1]){
       [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
    }
}
  }
  console.log(arr)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    3 5 0 9 8`);
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