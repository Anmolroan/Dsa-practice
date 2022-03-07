function runProgram(input) {
    // Write code here
    input =input.trim().split('\n');
    let N =+input[0];
    let arr =input[1].trim().split(" ").map(Number);
    LongQueue(N,arr);
   
  }
  function LongQueue(N,arr) {
      let count =1;
      for(let i=0;i<arr.length-1;i++)
{
if(arr[i+1]<arr[i]){
    count++;
}
} 


console.log(count);
 }
  if (process.env.USER=== "anmolkumar") {
    runProgram(`21
    958190 957454 941895 911430 904788 771190 701651 628634 595867 546822 530374 516913 471754 426041 414093 344705 237398 184902 145150 128457 113124`);
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