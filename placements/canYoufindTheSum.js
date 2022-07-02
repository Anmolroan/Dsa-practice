function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let N =+input[0];
   let arr =input[1].trim().split(" ").map(Number);
   main(N,arr);
  }
  function main(N,arr) {
    for(let i=0;i<arr.length;i++){
        let x=-1;
        for(let j=arr[i]-1;j>=0;j--){
            if(arr[j]>arr[i]){
                x=j+1;
                break;
            }
        }
        console.log(x);
    }
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`5
    5 4 1 3 2`);
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