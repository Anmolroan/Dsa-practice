function runProgram(input) {
    // Write code here
   input =input.trim().split('\n');
   let N =+input[0];
   let arr =input[1].trim().split(" ").map(Number);
   main(N,arr);
  }
  function main(N,arr) {
    function checkPrime(N){
        let count =0;
        for(let i=1;i<N/2;i++){
            if(N%i===0){
                count++;
            }
        }
        if(count===1){
            return true;
        }
        return false;
    }
  let sum = 0;
 for(let i=0;i<arr.length;i++) {
    for(let j=i+1;j<arr.length;j++) {
        if(checkPrime(j-i)===true){
            sum =sum+Math.abs(arr[i]-arr[j])
        }
    }
 }
console.log(sum)
  }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`8
    5 12 32 11 4 56 5 0`);
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