function runProgram(input) {
    // Write code here
    input=input.trim().split("\n");
    var N =+input[0];
    let arr =input[1].trim().split(" ").map(Number);
    // arr.sort((a,b)=>a-b);
    neelam(N,arr)
   
  }
  function neelam(N,arr){
      var pivot=arr[0];
      var sum=0;
for(let i =0;i<=N;i++){
    if(arr[i]>=pivot){
        sum=sum+pivot
    }
    else if(arr[i]<pivot){
        pivot=arr[i];
        sum=sum+pivot;
    }
}
console.log(sum)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    4 7 8 3 4`);
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